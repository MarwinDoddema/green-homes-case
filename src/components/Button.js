import clsx from "clsx";

const variantClasses = {
  primary: "bg-dark-green hover:bg-dark-green-hover text-white",
  secondary: "bg-green hover:bg-green-hover text-white",
};

export default function Button({
  variant = "primary",
  className,
  children,
  href,
  onClick,
}) {
  const baseClasses =
    "py-2.5 px-7 font-heading text-base rounded-full inline-block w-fit transition-all cursor-pointer";
  const classes = clsx(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
