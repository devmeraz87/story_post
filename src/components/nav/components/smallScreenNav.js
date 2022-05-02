import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../img/M-logo.jpg"
import Tanjila from "../../../img/Tanjila.png"

const SmallScreenNav = () => {

    const [smNavLink, setSmNavLink] = useState(false);

    const showSmNavLink = () => {
        setSmNavLink(true);
    }

    const hideSmNavLink = () => {
        setSmNavLink(false);
    }
    

    return (
        <>
            {smNavLink && (
                <div className="smNavLink" onClick={()=> hideSmNavLink()} style={{
                    background: `url(${Tanjila}) no-repeat center`
                }}>
                    <div className="smNavLinkOverlay">
                        <ul className="sm-nav-ul">
                            <li className="sm-nav-li"><Link to={"/"}>Home</Link></li>
                            <li className="sm-nav-li"><Link to={"/about"}>About</Link></li>
                            <li className="sm-nav-li"><Link to={"/work"}>Work</Link></li>
                            <li className="sm-nav-li"><Link to={"/tanjila/posts"}>Posts</Link></li>
                            <li className="sm-nav-li"><Link to={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            )}
            <div className="smallNav">
                <div className="container">
                    <div className="small-nav-content">
                        <div className="brand-logo">
                            <a href="/">
                                <h1>
                                    <img src={logo} alt="Mevlan Meraj" />
                                </h1>
                            </a>
                        </div>
                        <div className="hamburger">
                            <div className="hamburger-btn" onClick={() => showSmNavLink()}>
                                <div className="btn-burger"></div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </>
    );
}
 
export default SmallScreenNav;