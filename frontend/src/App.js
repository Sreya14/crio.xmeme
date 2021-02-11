import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import EditMeme from "./components/editmeme.component";
import CreateMeme from "./components/creatememe.component";
import ListMeme from "./components/listmeme.component";


function App() {
  return (
    <Router >
     <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={CreateMeme} />
      <Route path="/meme-list" component={ListMeme} />
      <Route path="/edit/:id" component={EditMeme} />
      </div>
    </Router>
  );
}

export default App;
