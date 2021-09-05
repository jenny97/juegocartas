import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import TeacherPage from "../pages/TeacherPage";
import { Fragment } from "react";

const AppRouter = () => {
  return (
    <Router>
        <Fragment>
        <header className="xs:px-2 sm:py-2
                           sm:px-6 sm:py-3
                           md:px-8 sm:py-4
                           flex justify-start bg-brand-dark py-4 px-10 items-center ">
                                <div className="flex flex-grow items-center">
                <div className="xs:hidden sm:hidden md:hidden">
                <Navbar />
                </div>
                </div>
      
      </header>
      </Fragment>
      <Switch>
        <Route  path="/about" component={AboutPage} />
        <Route  path="/contact" component={ContactPage} />
        <Route  path="/teacher" component={TeacherPage} />
        <Route  path="/" component={HomePage} />
        <Route  path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
