import { Dialog } from "@headlessui/react";


/**
 * A preimplemented drawer element with responsive sizing on mobile.
 * @param {className} className className for the Root drawer.\
 * This Can be used to add classes e.g lg:hidden to hide drawer on large-screens
 * @param {position} position position of the drawer panel. Valid values are:\
 * `bottom`, `center`, `left`, `right`
 * @param {children} children the dialog box content.\
 * Recommended to use single root div to implement control overflow-y-auto scrolling behavior
 * @param {onClose} onClose a callback when the user presses the `esc` or tabs outside the popup.
 * @param {open} open dictates the state of the drawer.
 */
export const Drawer = ({className, position, children, open, onClose}) => {
    let positionClass = "";
    let fillClass = "";

    switch (position) {
        case "center":
            positionClass = "items-center justify-center";
            break;

        case "bottom":
            positionClass = "items-end";
            fillClass = "w-full"
            break;

        case "left":
            fillClass = "fixed inset-y-0 left-0 w-full sm:max-w-sm";
            break;

        case "right":
            fillClass = "fixed inset-y-0 right-0 w-full sm:max-w-sm";
            break;
    
        default:
            // defaults right-sided
            fillClass = "fixed inset-y-0 right-0 w-full sm:max-w-sm"; 
            break;
    }

    return (
        <Dialog className={className} open={open} onClose={onClose}>
            <div
                // Backglass
                className={"bg-white/5 backdrop-blur-sm fixed inset-0 z-50 flex " +
                positionClass
                }
            >
                <Dialog.Panel 
                    className={
                        "z-50 " +
                        fillClass 
                    }
                >
                    {children}
                </Dialog.Panel>

            </div>
        </Dialog>
    );
}
