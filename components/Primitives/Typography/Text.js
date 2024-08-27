
export const Text = ({children}) => {
    return (
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {children}
        </p>
    );
}

export const Text_lg = ({children}) => {
    return (
    <p className="mb-4 text-lg leading-8 text-gray-900 dark:text-gray-300">
        {children}
    </p>
    );
}


export const Text_sm = ({children}) => {
    return (
    <p className=" text-sm text-slate-800 dark:text-slate-200">
        {children}
    </p>);
}


export const Heading_lg = ({className, children, override, ...props}) => {
    return (
    <h2
        className={override ? className : ("mb-8 tracking-tight font-bold text-gray-900 dark:text-gray-100 text-4xl sm:text-6xl " + className)}
        {...props}
    >
        {children}
    </h2>
    );
}

export const Heading = ({className, children, override, ...props}) => {
    return (
        <h3
            className={override? className : "mb-8 tracking-tight font-bold text-gray-900 dark:text-gray-100 text-3xl sm:text-4xl " + className}
            {...props}
        >
            {children}
        </h3>
    );
}

export const Heading_sm = ({className, children, override, ...props}) => {
    return (
        <h3
            className={override? className : ("mt-2 tracking-tight font-bold text-gray-900 text-2xl sm:text-3xl " + className)}
        >
            {children}
        </h3>
    );
}

/**
 * Represents text label with accent colors
 * @param {*} param0 
 */
export const Label_accent = ({children}) => {
    return (
        <p className="text-base font-semibold leading-7 text-violet-800 dark:text-violet-400">
            {children}
        </p>
    );
}

export const Label_warning = ({children}) => {
    <p>
        
    </p>
}