/**
 * A Standard responsive grid layout for displaying\
 * Grid responsively displays items in columns of 1 -> 3 -> 4 
 * @param {*} param0 
 * @returns 
 */
export const Grid = ({children}) => {
    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {children}
        </div>
    );
}

/**
 * A Standard responsive grid layout for displaying\
 * Grid responsively displays items in columns of 1 -> 3 
 * @param {*} param0 
 * @returns 
 */
export const Grid1x3 = ({children}) => {
    return (
        <div
            className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8"
        >
            {children}
        </div>
    );
}

/**
 * A Standard responsive grid layout for displaying\
 * Grid responsively displays items in columns of 1 -> 2
 * @param {*} param0 
 * @returns 
 */
export const Grid1x2 = ({children}) => {
    return (
        <div
            className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-8"
        >
            {children}
        </div>
    )
}

/**
 * A Standard responsive grid layout for displaying\
 * Grid responsively displays items in columns of 2 -> 4
 * @param {*} param0 
 * @returns 
 */
export const Grid2x4 = ({className, children}) => {
    return (
        <div
            className={"grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 lg:gap-x-8 " + className}
        >
            {children}
        </div>
    );
}