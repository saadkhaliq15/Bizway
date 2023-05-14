import React from 'react';

import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <h1>Welcome to Bizway</h1>
      <p>Welcome to the new era of business.</p>
    </div>
  );
}

export default App;







// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={HomePage} />
//         <Route path="/login" component={Login} />
//         <Route path="/signup" component={SignUp} />
//         <Route path="/dashboard" component={Dashboard} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;
