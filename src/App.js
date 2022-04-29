import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'react-calendar/dist/Calendar.css';


// components ?
import Home from "./components/home/home"
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Blog from "./components/blog/blog";
import CreatePost from "./components/createBlog/createPost";
import Contact from "./components/contact/contact";
import Work from "./components/work/work"
import NotfundPage from "./components/404/404"

const App = () => {
  return (
    <Router>
      <div className="app">
        <div>
          <Nav />
        </div>
        <div className="app-content">
          <Switch>
            <Route path={"/"} exact>
              <Home />
            </Route>
            <Route path={"/about"} exact>
              <About />
            </Route>
            <Route path={"/work"} exact>
              <Work /> 
            </Route>
            <Route path={"/blog"} exact>
              <Blog /> 
            </Route>
            <Route path={"/create-new-post"}>
              <CreatePost />
            </Route>
            <Route path={"/contact"} exact>
              <Contact />
            </Route>
            <Route path={"/*"}>
              <NotfundPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
 
export default App;
