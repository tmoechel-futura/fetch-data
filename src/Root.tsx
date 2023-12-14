import { Link, Outlet } from "react-router-dom";

export function Root() {
  return (
    <>
      <div>
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/profile"> Profile </Link>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
}
