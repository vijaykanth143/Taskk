import logo from "./logo.svg";
import "./App.css";
import BookingsList from "./Component/Tabs";
import Reservation from "./Component/Tabs2";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BookingsList} />
        <Route exact path="/reservation" component={Reservation} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
