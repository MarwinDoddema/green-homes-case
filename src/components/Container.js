export default function Container({ children, className, header = false }) {
  if (header) {
    return (
      <header className={`${className} md:py-20 py-8`}>
        <div className="container px-3 mx-auto flex flex-col gap-6 md:gap-10">
          {children}
        </div>
      </header>
    );
  } else
    return (
      <section className={`${className} md:py-20 py-8`}>
        <div className="container px-3 mx-auto flex flex-col gap-6 md:gap-10">
          {children}
        </div>
      </section>
    );
}
