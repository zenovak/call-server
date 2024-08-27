import { Icon } from "@iconify/react";
import Link from "next/link";
import clsx from "clsx";

const ButtonVariant = {
    primary: "btn--primary",
    secondary: "btn--secondary",
    outline: "btn--outline",
    black: "btn--black"
};

export const Button = ({
    children,
    icon,
    href = "",
    type = "link",
    variant = "primary",
    className = "",
    onClick
}) => {
    const Element = type === "button" ? "button" : Link;
    const variantClass = ButtonVariant[variant];
    const buttonClass = clsx("btn", variantClass, className);
    return (
        <Element
            href={href}
            role="button"
            className={buttonClass}
            onClick={onClick}
        >
            {children}
            {icon?.length && <Icon icon={icon} />}
        </Element>
    );
};
