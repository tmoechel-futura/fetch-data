import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div>
      <Link to="/"> Home</Link>
      <Link to="/menu"> Menu </Link>
      <Link to="/contact"> Profile</Link>
    </div>
  );
}
