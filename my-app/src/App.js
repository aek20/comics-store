import './App.css';
import {BrowserRouter,Switch,Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import SignIn from './components/signIn/SignIn'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/mainPage/MainPage';
import Add from './components/addComics/Add';
function App() {
  return (
    <BrowserRouter basename="/">

      <div>

<Navbar/>



        {/* link between pages */}
        <Switch>
          <Route path="/signin">
         <SignIn />
          </Route>
          <Route path="/mainpage">
            <MainPage />
          </Route>
          <Route path="/additem">
            <Add />
          </Route>
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
