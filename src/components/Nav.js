import {
  faBars,
  faBox,
  faHouse,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import NavItem from "./NavItem";

export default function Nav() {
  return (
    <nav className="bg-white py-5 shadow-sm sticky top-0 z-10">
      <div className="flex justify-between items-center container px-3 mx-auto">
        <img src="/green-homes-logo.svg" alt="Green Homes Logo" />
        <div className="gap-5 items-center hidden lg:flex">
          <ul className="flex gap-2">
            <NavItem pageName="Home" url="/" icon={faHouse} />
            <NavItem pageName="Over Ons" url="/" icon={faUser} />
            <NavItem
              active={true}
              pageName="Samenstellen"
              url="/"
              icon={faBox}
            />
            <NavItem pageName="Contact" url="/" icon={faPhone} />
          </ul>
          <Button variant="secondary">Vraag Offerte Aan!</Button>
        </div>
        <div className="lg:hidden flex items-center py-3">
          <FontAwesomeIcon icon={faBars} className="text-dark-green text-xl" />
        </div>
      </div>
    </nav>
  );
}
