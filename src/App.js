import React from "react";
import "./css/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


//Importing pages
import Home from './components/main-pages/home';
import TestTable from './components/main-pages/table';

/**
 * This is using React router to load multiple different pages within the same page.
 * @returns This returns the main page layout that can switch to others
 */
export default function App() {
  return (
    <Router className="React-Router">
      <div>
        <ul className="React-Router-Group">
          <li className="React-Router-headlinks">
            <Link className="React-Router-Links" to="/">Home</Link>
          </li>
          <li className="React-Router-headlinks">
            <Link className="React-Router-Links" to="/table">React Tables</Link>
          </li>
          <li className="React-Router-headlinks">
            <Link className="React-Router-Links" to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/table">
            <TestTable />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      

      <ul>
        <li className="React-Router-Headlinks">
          <Link className="React-Router-Links" to={`${match.url}/components`}>Components</Link>
        </li>
        <li className="React-Router-sublinks">
          <Link className="React-Router-Links" to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      <h2>Topics</h2>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
      
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

