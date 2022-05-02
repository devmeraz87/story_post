import { Link } from "react-router-dom";
import logo from "../../../img/M-logo.jpg"


const WidthScreenNav = () => {
    return (
        <div className="width-nav">
            <div className="container">
                <div className="width-nav-content">
                    <div className="brand-logo">
                        <a href="/">
                            <h1>
                                <img src={logo} alt="Mevlan Meraj" />
                            </h1>
                        </a>
                    </div>
                    <ul className="width-nav-ul">
                        <li className="width-nav-li"><Link to={"/"}>Home</Link></li>
                        <li className="width-nav-li"><Link to={"/about"}>About</Link></li>
                        <li className="width-nav-li"><Link to={"/work"}>Work</Link></li>
                        <li className="width-nav-li"><Link to={"/tanjila/posts"}>Posts</Link></li>
                        <li className="width-nav-li"><Link to={"/contact"}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default WidthScreenNav;