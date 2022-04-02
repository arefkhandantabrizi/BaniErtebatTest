import React from "react";
import {Link, Outlet} from 'react-router-dom';
import Icon from "./icon";

const SideNav = () => {
    return ( 
        <>
     <div className="sidebar "> 
                <ul className="side-nav">
                    <li className="side-nav__item">
                        <Link to="/sensors" className="side-nav__link"> 
                            <Icon
                                name="icon-feed"
                                className="nav__icon nav__icon--feed"
                            />           سنسورها 
                           
                       </Link>
                    </li>
                    <li className="side-nav__item">
                        <Link to="/actors" className="side-nav__link">
                            <Icon
                                name="icon-equalizer"
                                className="nav__icon nav__icon--equalizer"
                            />  وضعیت کلید ها
                        </Link>
                    </li>
                </ul>
        </div>
                    <Outlet />
                    </>
                    );
}
 
export default SideNav;