import { getObjectPropByString } from "@utils/helper"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * 
 * @param {fields} fields list of fields supported by this table \
 * `["name", "address", ...]`
 * @param {dataArray} dataArray array of data for this table. 
 * @param {canEdit} canEdit bool. Render an edit button?
 * @param {onEdit} onEdit callback when an entry's edit button is clicked\
 * `onEdit(item, index)` where item represents the item from dataArray and its index accordingly
 * @returns `
 */
export const Table = ({fields, dataArray, canEdit, onEdit}) => {


  return (
    <div className="px-4 sm:px-6 lg:px-8 ">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8 overflow-x-scroll sm:overflow-x-auto overflow-y-scroll max-h-96">
          <div className="inline-block min-w-full py-2 align-middle ">
            <table className="min-w-full border-separate border-spacing-0 ">
              <thead>
                <tr>
                    {fields.map((item, index)=>(
                        index == 0? // first item style
                        <th
                            key={item}
                            scope="col"
                            className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                        >
                            {item}
                        </th>
                        : // other items
                        <th
                            key={item}
                            scope="col"
                            className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                        >
                            {item}
                        </th>
                    ))}
                  { canEdit &&
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                  >
                    <span className="sr-only">Edit</span>
                  </th>}
                </tr>
              </thead>
              <tbody>
                {dataArray && dataArray.map((item, index) => (
                    // for each entry...
                  <tr key={index}>
                    {fields.map((field, fieldIndex)=>(
                        // asign a column
                        fieldIndex == 0 ?
                        <td
                            key={field}
                            className={classNames(
                                index !== item.length - 1 ? 'border-b border-gray-200' : '',
                                'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                            )}
                            >
                            { getObjectPropByString(item, field)}
                        </td>
                        :
                        <td
                            key={field}
                            className={classNames(
                                index !== item.length - 1 ? 'border-b border-gray-200' : '',
                                'whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell'
                            )}
                            >
                            { getObjectPropByString(item, field)}
                        </td>
                    ))}
                    { canEdit &&
                    <td
                      className={classNames(
                        index !== item.length - 1 ? 'border-b border-gray-200' : '',
                        'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8'
                      )}
                    >
                      <button 
                        onClick={
                            ()=>{
                                onEdit &&
                                onEdit(item, index)
                            }
                        } 
                        className="text-indigo-600 hover:text-indigo-900" >

                        Edit<span className="sr-only"></span>
                      </button>
                    </td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
