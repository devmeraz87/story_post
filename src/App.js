import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'react-calendar/dist/Calendar.css';


// components ?
import Home from "./components/home/home"
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Blog from "./components/blog/blog";
import CreatePost from "./components/createBlog/createPost";

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
              {/* <Work />  */}
            </Route>
            <Route path={"/blog"} exact>
              <Blog /> 
            </Route>
            <Route path={"/create-new-post"}>
              <CreatePost />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
 
export default App;
