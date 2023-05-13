import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import './assets/style.scss';
import routes from "./routes";
import BlogDetails from "./components/blogs/blog-details";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Switch>
            {
              routes.map(item => {
                  return (
                    <Route
                      render={()=> item.component}
                      key={item.name}
                      path={item.url}
                      exact={item.exact}
                    />
                  );
                }
              )
            }
            <Route exact path="/blog/:id">
              <BlogDetails />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <h1 className="title is-size-2">
                404 - Page Not Found
              </h1>
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
