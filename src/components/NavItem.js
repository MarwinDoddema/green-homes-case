import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavItem({ pageName, url, icon, active = false }) {
  return (
    <li className="">
      <a
        href={url}
        className={`text-white py-0.5 pl-0.5 pr-3 rounded-full ${
          active ? "bg-dark-green" : "bg-light-green"
        } flex items-center gap-1`}
      >
        <div className="rounded-full w-7 h-7 flex items-center justify-center bg-white">
          <FontAwesomeIcon className="text-dark-green" icon={icon} />
        </div>
        <span
          className={`text-base font-heading ${
            active ? "text-white" : "text-dark-green"
          }`}
        >
          {pageName}
        </span>
      </a>
    </li>
  );
}
