import { Link } from "react-router-dom";
import notFoundImg from "../../img/404-hot-dog.png"

const NotfundPage = () => {
    return (
        <div className="Contact">
            <div className="working-on-it">
                <img src={notFoundImg} alt="Not found" />
                <h1>Error _404_</h1>
                <h4>Page Not found try again</h4>
                <Link to={"/"}>Go Back to home</Link>
            </div>
        </div>
    );
}
 
export default NotfundPage;