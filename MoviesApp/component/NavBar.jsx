import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "gray",
        }}
      >
        <span>
          <h6>IMAGE</h6>
        </span>
        <div>
          <Link to="/" style={{ margin: 30 }}>
            Home
          </Link>
          <Link to="/users" style={{ margin: 30 }}>
            Users
          </Link>
          <Link to="/about" style={{ margin: 30 }}>
            About
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
