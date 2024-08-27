import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * An Animated Container which pops an element when loaded
 * @param {*} children the contents
 * @param {*} transition a transition args of example: `{ delay: 0.2, duration: 0.5 }` 
 * @returns 
 */
export const MotionBTTContainer = ({ children, transition }) => {
    // Motion Bottom to Top
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const elementVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={elementVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={transition}
            ref={ref}
        >
            {children}
        </motion.div>
    );
};
