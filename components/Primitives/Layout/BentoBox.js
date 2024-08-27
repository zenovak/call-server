


/**
 * Arranges its children with a nice alternating grid.
 * Recommends up to 4 elements only
 * Sizing mobile 1 -> sm 2
 * @param {children} children the container cards. Every item within this component
 * will be arranged automatically 
 */
export const BentoBox = ({children}) => {

    const leftSmall = "col-start-1 col-span-4";
    const rightBig = "col-start-5 col-span-8";
    const leftBig = "col-start-1 col-span-8";
    const rightSmall = "col-start-9 col-span-4";

    // alternating pattern 
    function getClassName(index) {
        
        switch (index % 4) {
            case 0:
                return leftSmall
        
            case 1:
                return rightBig;

            case 2:
                return leftBig;

            case 3:
                return rightSmall;
        }
    }

    return (
        <div
            className={"flex flex-col gap-16 " +
                "lg:grid lg:grid-cols-12 lg:gap-0 lg:gap-y-20 lg:gap-x-12"
            }
        >
            {children.map((item, index)=> (
                <div
                    key={index}
                    className={getClassName(index)}
                >
                    {item}
                </div>
            ))}
        </div>
    );
}


/**
 * Arranges items in a 3x3 grid of irregularly sized cards.\
 * Optimal for Up to 9 cards
 * @param {*} param0 
 */
export const BentoBox1x2x3 = ({children}) => {
  const gridConfig = {
    0: "col-span-2",
    1: "col-span-2",
    2: "col-span-2 row-span-2",
    3: "col-span-2",
    4: "col-span-2 row-span-2",
    5: 'col-span-2 row-span-2',
    6: "col-span-2 ",
    7: "col-span-2 ",
    8: "col-span-2"
  }

  return (
    <div className="grid sm:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-8 ">
      {children.map((item, index)=> (
          <div
            key={index}
            className={gridConfig[index % 9]}
          >
            {item}
          </div>
      ))}
    </div>
  );
}