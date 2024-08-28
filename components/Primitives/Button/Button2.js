

export const Button2 = ({className, override, children, ...props}) => {
    return (
    <button
        {...props}
        className={override? className : "px-4 py-2 rounded-xl " + className}>
        {children}
    </button>
    );
}