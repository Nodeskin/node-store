import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";

//Outlet allows us to leverage the pattern matching in the nesting structure
//in other to dynamically change portion of our codes based on the routes and nested route

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
           ) : ( <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>)
          }
         
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
