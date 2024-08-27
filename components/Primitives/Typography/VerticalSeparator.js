

/**
 * A vertical separator line often used in texts and icon bar separations
 * @param {className} className extension for className
 * @returns 
 */
export const VerticalSeparator = ({className}) => {
    return  <div className={`h-6 w-px bg-gray-900/10 ${className}`}  aria-hidden="true" />
}