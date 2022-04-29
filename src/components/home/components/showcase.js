import { Link } from "react-router-dom";
import parallaxBg from "../../../img/img-0.jpg"

const Showcase = () => {
    return (
        <div className="showcase">
            <div className="showcase-parallax" style={{
                background: `url(${parallaxBg}) no-repeat center`
            }}>
                <div className="parallax-overlay">
                <div className="container">
                    <div className="showcase-content">
                        <h1><span>We Help to <span>Build</span></span><span>Your Dream</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsum earum quisquam eius sit? Cupiditate aperiam quibusdam cumque nihil eaque.</p>
                        <Link className="read-more-btn" to={"/about=parallax-paragraph"}>Read More <i className="right-arrow"></i></Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
 
export default Showcase;