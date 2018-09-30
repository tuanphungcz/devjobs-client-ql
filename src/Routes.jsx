import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch, Redirect } from 'react-router-dom';
// import Loader from './components/common/Loader';
import LoginPage from './components/views/LoginPage';
import SignUpPage from './components/views/SignupPage';

// import CreateCompany from './components/views/createCompany/CreateCompany';
import JobsPage from './components/views/JobsPage';
import JobDetail from './components/views/JobDetailPage';
import PageNotFound from './components/views/PageNotFound';
import Dashboard from './components/views/Dashboard';
// import CreateJob from './components/views/createJob/CreateJob';
import CompanyDetail from './components/views/CompanyDetailPage';
import Companies from './components/views/CompaniesPage';
import { getAuthToken } from './utils';

const AppLoader = () => <div>Loading</div>;

// const Dashboard = Loadable({
//   loader: () => import('./components/views/Dashboard'),
//   loading: AppLoader,
// });

// const JobsPage = Loadable({
//   loader: () => import('./components/views/jobsPage/JobsPage'),
//   loading: AppLoader,
// });

// const ProfilePage = Loadable({
//   loader: () => import('./components/views/profilePage/ProfilePage'),
//   loading: AppLoader,
// });

const CreateJob = Loadable({
  loader: () => import('./components/views/CreateJobPage'),
  loading: AppLoader,
});

// const DetailPage = Loadable({
//   loader: () => import('./components/views/DetailPage'),
//   loading: AppLoader,
// });

// const PageNotFound = Loadable({
//   loader: () => import('./components/views/PageNotFound'),
//   loading: AppLoader,
// });

const CreateCompany = Loadable({
  loader: () => import('./components/views/CreateCompanyPage'),
  loading: AppLoader,
});

// const JobDetail = Loadable({
//   loader: () => import('./components/views/JobDetail'),
//   loading: AppLoader,
// });

// const Companies = Loadable({
//   loader: () => import('./components/views/Companies'),
//   loading: AppLoader,
// });

// const CompanyDetail = Loadable({
//   loader: () => import('./components/views/CompanyDetail'),
//   loading: AppLoader,
// });
const ProtectedRoute = ({ component: Component, tokenValue, ...rest }) => {
  const token = getAuthToken();
  if (token || tokenValue) {
    return <Route {...rest} render={matchProps => <Component {...matchProps} />} />;
  }

  return <Redirect to="/" />;
};

const Routes = ({ tokenValue }) => (
  <div>
    <Switch>
      <Route exact path="/jobs" component={JobsPage} />
      <Route exact path="/jobs/:jobFilter" component={JobsPage} />
      <Route exact path="/job/:id" component={JobDetail} />
      <Route exact path="/job/:id/:nameId" component={JobDetail} />

      <ProtectedRoute path="/dashboard/create-job" component={CreateJob} okenValue={tokenValue} />
      <ProtectedRoute
        path="/dashboard/create-company"
        component={CreateCompany}
        tokenValue={tokenValue}
      />
      <ProtectedRoute path="/dashboard" component={Dashboard} tokenValue={tokenValue} />
      <Route path="/companies" component={Companies} />
      <Route path="/company/:companyId" component={CompanyDetail} />

      <ProtectedRoute path="/profile/job/:jobId" component={CreateJob} okenValue={tokenValue} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signUp" component={SignUpPage} />
      <Route exact path="/" component={JobsPage} />

      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default Routes;
