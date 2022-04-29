import { Link } from "react-router-dom";
import cardImg from "../../../img/img-0.jpg"


const Section = () => {
    return (
        <>
         <section className="section section-1">
             <div className="container">
                 <div className="section-content">
                    <div className="section-header">
                    <h1 className="section-heading">Sohopath karjokrom somusho</h1>
                     <div className="section-heading-bottom-line"></div>
                     <p className="section-lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, facilis?</p>
                    </div>
                    <div className="section-body">
                        <div className="section-card-grid">
                            <div className="card">
                                <img src={cardImg} alt="" />
                                <div className="card-content">
                                    <span className="card-title">Mujib borsho utjapon</span>
                                    <p className="card-lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ratione.</p>
                                    <Link className="btn" href="">Read More</Link>
                                </div>
                            </div>
                            <div className="card">
                                <img src={cardImg} alt="" />
                                <div className="card-content">
                                    <span className="card-title">jatio shikkha shoptaho palon</span>
                                    <p className="card-lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ratione.</p>
                                    <Link className="btn" href="">Read More</Link>
                                </div>
                            </div>
                            <div className="card">
                                <img src={cardImg} alt="" />
                                <div className="card-content">
                                    <span className="card-title">Online class</span>
                                    <p className="card-lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ratione.</p>
                                    <Link className="btn" href="">Read More</Link>
                                </div>
                            </div>
                            <div className="card">
                                <img src={cardImg} alt="" />
                                <div className="card-content">
                                    <span className="card-title">Youtube Channel</span>
                                    <p className="card-lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ratione.</p>
                                    <Link className="btn" href="">Read More</Link>
                                </div>
                            </div>
                            <div className="card">
                                <img src={cardImg} alt="" />
                                <div className="card-content">
                                    <span className="card-title">Biggan o quize protijogita</span>
                                    <p className="card-lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ratione.</p>
                                    <Link className="btn" href="">Read More</Link>
                                </div>
                            </div>
                            <div className="card">
                                <img src={cardImg} alt="" />
                                <div className="card-content">
                                    <span className="card-title">card title</span>
                                    <p className="card-lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ratione.</p>
                                    <Link className="btn" href="">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
         </section>
         {/* $ */}
         <section className="section section-1">
             <div className="container">
                 <div className="section-content">
                    <div className="section-header">
                    <h1 className="section-heading">Bivinno puroskar o shommanona</h1>
                     <div className="section-heading-bottom-line"></div>
                     <p className="section-lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, facilis?</p>
                    </div>
                    <div className="section-body">
                        <div className="section-card-grid">
                            <div className="card">
                                <img src={cardImg} alt="" />
                                <div className="card-content">
                                    <span className="card-title">Card Title</span>
                                    <p className="card-lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ratione.</p>
                                    <Link className="btn" href="">Read More</Link>
                                </div>
                            </div>
                            <div className="card">
                                <img src={cardImg} alt="" />
                                <div className="card-content">
                                    <span className="card-title">Card Title</span>
                                    <p className="card-lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ratione.</p>
                                    <Link className="btn" href="">Read More</Link>
                                </div>
                            </div>
                            <div className="card">
                                <img src={cardImg} alt="" />
                                <div className="card-content">
                                    <span className="card-title">Card Title</span>
                                    <p className="card-lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ratione.</p>
                                    <Link className="btn" href="">Read More</Link>
                                </div>
                            </div>
                            <div className="card">
                                <img src={cardImg} alt="" />
                                <div className="card-content">
                                    <span className="card-title">Card Title</span>
                                    <p className="card-lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ratione.</p>
                                    <Link className="btn" href="">Read More</Link>
                                </div>
                            </div>
                            <div className="card">
                                <img src={cardImg} alt="" />
                                <div className="card-content">
                                    <span className="card-title">Card Title</span>
                                    <p className="card-lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ratione.</p>
                                    <Link className="btn" href="">Read More</Link>
                                </div>
                            </div>
                            <div className="card">
                                <img src={cardImg} alt="" />
                                <div className="card-content">
                                    <span className="card-title">Card Title</span>
                                    <p className="card-lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ratione.</p>
                                    <Link className="btn" href="">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
         </section>
        </>
    );
}
 
export default Section;