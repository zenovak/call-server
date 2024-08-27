

/**
 * @param {id} id id for assigning label title to field
 * @param {name} name the input field property name. Used to initialize the react hook form register function
 * @param {title} title label title
 * @param {register} register. The register function from react hook form.
 * @returns 
 */
export const TextInput = ({id, name, title, type, register, ...prop} ) => {
  return (
  <div className="">
    <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
      {title}
    </label>
    <div className="mt-2">
      <input
        id={id}
        type={type}
        {...register(name)}
        {...prop}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
)};
    