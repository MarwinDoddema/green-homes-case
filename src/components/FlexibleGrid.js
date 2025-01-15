import clsx from "clsx";

export default function FlexibleGrid({
  layout = "1-1",
  leftContent,
  centerContent,
  rightContent,
  align = "top",
  reverseOrder = false,
}) {
  const gridClasses = clsx({
    "grid-cols-1 md:grid-cols-2 lg:grid-cols-3": layout === "1-1-1",
    "grid-cols-1 md:grid-cols-2": layout === "1-1",
    "grid-cols-1 md:grid-cols-[2fr_1fr]": layout === "2-1",
  });

  const alignClasses = clsx({
    "items-start": align === "top",
    "items-center": align === "center",
    "items-end": align === "bottom",
  });

  return (
    <div className={`grid gap-6 ${gridClasses} ${alignClasses}`}>
      <div
        className={`flex flex-col gap-8 ${
          reverseOrder ? "order-3 md:order-1" : ""
        }`}
      >
        {leftContent}
      </div>
      {layout === "1-1-1" && (
        <div className={`flex flex-col gap-8 ${reverseOrder ? "order-2" : ""}`}>
          {centerContent}
        </div>
      )}
      <div
        className={`flex flex-col gap-8 ${
          reverseOrder ? "order-1 md:order:3" : ""
        }`}
      >
        {rightContent}
      </div>
    </div>
  );
}
