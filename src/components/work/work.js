import { Link } from "react-router-dom";
import notFoundImg from "../../img/404-hot-dog.png"

const Work = () => {
    return (
        <div className="About">
            <div className="working-on-it">
                <img src={notFoundImg} alt="Not found" />
                <h1>Nothing to show Yet</h1>
                <h4>We are working on it</h4>
                <Link to={"/"}>Go Back to home</Link>
            </div>
        </div>
    );
}
 
export default Work;