import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import NotFound from './Pages/Home/NotFound/NotFound';
import About from './Pages/Home/About/About';
import Footer from './Pages/Home/Footer/Footer';
import Details from './Pages/Home/Details/Details/Details';
import Login from './Pages/Login/Login/Login';
import Authprovider from './Contexts/Authprovider';
import Contact from './Pages/Contact/Contact';
import Departments from './Pages/Department/Departments';
import PrivateRoute from './Pages/Login/PrivateRoute/privateRoute';
import Signup from './Pages/Login/Signup/Signup';
import Appointment from './Pages/Home/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <Authprovider>
        <Router>
          <Header></Header>
         <Switch>
            <Route exact path="/">
               <Home></Home>
             </Route>
             <Route path="/home">
               <Home></Home>
             </Route>
             <Route path="/services">
               <Services></Services>           
             </Route>
             <PrivateRoute path="/details/:serviceId">
               <Details></Details>          
             </PrivateRoute>
             <PrivateRoute path="/appointment">
               <Appointment></Appointment>        
             </PrivateRoute>
             <Route path="/about">
               <About></About>          
             </Route>
             <Route path="/contact">
              <Contact></Contact>       
             </Route>
             <Route path="/login">
               <Login></Login>          
             </Route>
             <Route path="/signup">
               <Signup></Signup>         
             </Route>
             <Route path="/departments">
               <Departments></Departments>         
             </Route>
             <Route path="*">
               <NotFound></NotFound>
             </Route>
           </Switch>
           <Footer></Footer>
          </Router>
      </Authprovider>
    </div>
  );
}

export default App;
