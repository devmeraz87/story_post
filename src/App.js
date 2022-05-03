import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components ?
import Home from "./components/home/home"
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Blog from "./components/blog/blog";
import CreatePost from "./components/createBlog/createPost";
import Contact from "./components/contact/contact";
import Work from "./components/work/work"
import Message from "./components/message/message"
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
            <Route path={"/tanjila/posts"} exact>
              <Blog /> 
            </Route>
            <Route path={"/create-new-post"}>
              <CreatePost />
            </Route>
            <Route path={"/contact"} exact>
              <Contact />
            </Route>
            <Route path={"/customers/messages"} exact>
              <Message />
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
