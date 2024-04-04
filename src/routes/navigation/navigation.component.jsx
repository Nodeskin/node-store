import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

//Outlet allows us to leverage the pattern matching in the nesting structure
//in other to dynamically change portion of our codes based on the routes and nested route

const Navigation = () => {
  return (
      <Fragment>
          <div className="navigation">
           <div>Logo</div>
           <div className="links-container">
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>         
           </div>
          </div>
          <Outlet />
      </Fragment>
    
  );
};

export default Navigation;
