export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 bg-dark-green">
      <p className="text-white w-full text-center">
        Copyright © {year} GreenHomes
      </p>
    </footer>
  );
}
