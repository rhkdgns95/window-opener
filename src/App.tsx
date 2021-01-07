import Home from "./Home";
import Child from "./Child";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/child" component={Child} />
      </Switch>
    </BrowserRouter>
  );
}
