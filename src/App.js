import React  from "react";
import Header from "./components/Header/Header";
import Add from "./components/AddPage/Add";
import Watchlist from "./components/Watchlist/Watchlist";
import Watched from "./components/Watched/Watched";
import ContextProvider from "./components/context/GlobalContext";

import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
function App () {

    return(
        <Router>
            <ContextProvider>
          <Header/>

          <Routes>
            <Route path="/" element={<Watchlist/>}/>
            <Route path="/watched" element={<Watched/>}/>
            <Route path="/add" element={<Add/>}/>

          </Routes>
          </ContextProvider>

        </Router>
        
    );
  }

export default App;

