import React, { Suspense } from "react";
import { withRouter } from "react-router-dom";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";
import AppLayout from "../../layout/AppLayout";

const ViewSurgeonsPage = React.lazy(() => import("./view-surgeons/index"));
const ViewCategoriesPage = React.lazy(() => import("./view-category/index"));
const ViewSurveysPage = React.lazy(() => import("./view-surveys/index"));
const ViewSurgeonDetailsPage = React.lazy(() =>
  import("./view-surgeon-details/index")
);
const ViewEditSurgeonDetailsPage = React.lazy(() =>
  import("./edit-surgeon/index")
);
const ViewAddSurgeonDetailsPage = React.lazy(() =>
  import("./add-surgeon/index")
);

const AddSurveyPage = React.lazy(() => import("./add-survey/index"));
const EditSurveyPage = React.lazy(() => import("./edit-survey/index"));

const ViewError = React.lazy(() => import("../error"));
const ViewUnauthorized = React.lazy(() => import("../unauthorized"));

const App = () => {
  let match = useRouteMatch();

  return (
    <AppLayout>
      <Suspense fallback={<div>Loading....</div>}>
        <Switch>
          <Redirect
            exact
            from={`${match.url}`}
            to={`${match.url}/view-surgeons`}
          />
          <Route
            path={`${match.url}/view-surgeons`}
            render={(props) => <ViewSurgeonsPage {...props} />}
          />
          <Route
            path={`${match.url}/view-surgeon-details`}
            render={(props) => <ViewSurgeonDetailsPage {...props} />}
          />
          <Route
            path={`${match.url}/edit-surgeon-details`}
            render={(props) => <ViewEditSurgeonDetailsPage {...props} />}
          />
          <Route
            path={`${match.url}/add-surgeon-details`}
            render={(props) => <ViewAddSurgeonDetailsPage {...props} />}
          />
          <Route
            path={`${match.url}/view-categories`}
            render={(props) => <ViewCategoriesPage {...props} />}
          />
          <Route
            path={`${match.url}/view-surveys`}
            render={(props) => <ViewSurveysPage {...props} />}
          />
          <Route
            path={`${match.url}/add-survey`}
            render={(props) => <AddSurveyPage {...props} />}
          />
          <Route
            path={`${match.url}/edit-survey`}
            render={(props) => <EditSurveyPage {...props} />}
          />
          <Route
            path="/error"
            exact
            render={(props) => <ViewError {...props} />}
          />
          <Route
            path="/unauthorized"
            exact
            render={(props) => <ViewUnauthorized {...props} />}
          />
          <Redirect to="/error" />
        </Switch>
      </Suspense>
    </AppLayout>
  );
};

export default withRouter(App);
