import clsx from "clsx";

const variantClasses = {
  primary: "bg-dark-green text-white",
  secondary: "bg-green text-white",
};

export default function Button({
  variant = "primary",
  className,
  children,
  href,
  onClick,
}) {
  const baseClasses =
    "py-2.5 px-7 font-heading text-base rounded-full inline-block w-fit";
  const classes = clsx(baseClasses, variantClasses[variant], className);

  return (
    <a href={href} className={classes} onClick={onClick}>
      {children}
    </a>
  );
}
