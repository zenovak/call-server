
/**
 * A Standard constrained component with Padding-X meant as root of each sections
 * @param {children} children the content 
 * @returns 
 */
export const ContainerPX = ({children}) => {
    return (
        <div className="max-w-constant mx-auto px-4 sm:px-6 lg:px-8 py-4">
            {children}
        </div>
  );
}

/**
 * A padded container of equal sides. This is often used to construct the nav bar 
 * @param {className} className CSS classname
 * @param {override} override. Boolean. Whether the className properties overwrites the default or apend instead
 * @param {children} children the content
 * @returns 
 */
export const ContainerP = ({className,  override, children, ...props}) => {
    return (
        <div 
            className={override? className: "max-w-constant mx-auto p-6 " + className }
            {...props}>
            {children}
        </div>
  );
}

/**
 * A Constrained component with Padding X and large Y.\
 * Meant for Small HeroSections with needed spacing for bg images\
 * `px-4 | 6 | 8`\
 * `py-24 | 32 `
 * @param {children} children the content 
 * @returns 
 */
export const ContainerPXY = ({children}) => {
    return (
        <div className="max-w-constant mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 ">
            {children}
        </div>
    );
}

/**
 * A contrained component with Padding X and extra large Y\
 * Meant for HeroSections with needed spacings for vast bg-images and almost full display height contents
 * @param {children} children the content 
 */
export const ContainerPX2Y = ({children}) => {
    return (
        <div
            className="max-w-constant mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-48 lg:py-56"
        >
            {children}
        </div>
    );
}

/**
 * A constrained component with Padding X only effective outside of mobile-view and large Y.\
 * Meant for HeroSections with fullpage backgrounds when on mobile view.
 * @param {children} children the content 
 * @returns 
 */
export const ContainerXY = ({children}) => {
    return (
        <div
            className="max-w-constant mx-auto sm:px-6 lg:px-8 py-24 sm:py-32 "
        >
            {children}
        </div>
    );
}

/**
 * A Constrianed Component with smaller max-width. Meant for setting inner contents such as\
 * accordion blocks, alert boxes, text groups, and more
 * @param {children} children the content 
 * @returns 
 */
export const ConstrainedContainer = ({className, override, children}) => {
    return (
        <div
            className={override? className: "max-w-3xl mx-auto " + className}
        >
            {children}
        </div>
    );
}