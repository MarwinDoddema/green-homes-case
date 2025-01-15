import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UniqueSellingPoint({ children, icon }) {
  return (
    <li className="flex gap-4 items-center">
      <div className="rounded-full w-10 h-10 flex items-center justify-center bg-green">
        <FontAwesomeIcon className="text-white text-2xl" icon={icon} />
      </div>
      <span className="text-dark-green">{children}</span>
    </li>
  );
}
