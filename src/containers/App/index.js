import React, { Fragment } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";
import BarChart from "../BarChartComponent";
export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={BarChart} />
          <Route exact path="/barchart" component={BarChart} />
          <Route exact path="" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}
