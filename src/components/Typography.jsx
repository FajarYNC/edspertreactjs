import cx from "classnames";
const Typography = (props) => {
    const  { children, variant, size, customClass} = props
    return (
        <p className={
            cx("text-[#152A46]", 
            {
                "text-green-400": variant === "error",
                "text-green-500": variant === "success",
                "text-blue-500": variant === "info",
                "text-white": variant === "primary",
                "text-yellow-400": variant === "tabuti",
                "font-medium": variant === "tabuti",
                "font-bold": variant === "blank",
                "text-[20px]": size === "title",
                "text-[16px]": size === "subtitle",
                "text-[12px]": size === "body",
                "font-semibold": size === "title",
                "text-xs": size === "conf",
                "flex justify-end": size === "price",
                
            },
            customClass
        )}>
            {children}
        </p>
    );
}

export default Typography;