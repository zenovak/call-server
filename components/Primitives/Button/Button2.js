

export const Button2 = ({className, override, children, ...props}) => {
    return (
    <button
        {...props}
        className={override? className : "px-8 py-4 rounded-xl " + className}>
        {children}
    </button>
    );
}