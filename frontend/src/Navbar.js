const { Link } = require("react-router-dom");
const Navbar = () => {
  return (
    <nav style={{ textAlign: "center", marginTop: "20px" }}>
      <Link to="/" style={{ padding: "10px" }}>
        Register
      </Link>
      <Link to="/home" style={{ padding: "10px" }}>
        Home
      </Link>
    </nav>
  );
};
export default Navbar;