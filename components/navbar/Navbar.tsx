import NavbarBottom from "./NavbarBottom";
import NavbarHeader from "./NavbarHeader";
import NavbarMainContent from "./NavbarMainContent";

export default function Navbar() {
  return (
    <nav className="bg-gray-100">
      <NavbarHeader />
      <NavbarMainContent />
      <NavbarBottom />
    </nav>
  );
}
