// Module
import { useEffect, useState } from "react";

import SmallScreenNav from "./components/smallScreenNav";
import WidthScreenNav from "./components/widthScreenNav";

function useWindowSize() {
    const [size , setSize] = useState([window.innerWidth]);
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerWidth]);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    },[])
    return size;
}


const Nav = () => {

    const [width] = useWindowSize();

    return (
        <nav className="mainNav">
            <div className="nav-components">
                {width >= 950 && <WidthScreenNav />}
                {width < 950 && <SmallScreenNav/>}
            </div>
        </nav>
    );
}
 
export default Nav;