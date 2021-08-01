/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const TopNav = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const history = useHistory();

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.removeItem("auth");
    history.push("/login");
  };

  return (
    <div className="nav bg-light d-flex justify-content-between">
      <Link to="/" className="nav-link">
        Home
      </Link>

      {auth !== null && (
        <>
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
        </>
      )}

      {auth !== null && (
        <a className="nav-link pointer" onClick={logout}>
          Logout
        </a>
      )}

      {auth === null && (
        <>
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default TopNav;
