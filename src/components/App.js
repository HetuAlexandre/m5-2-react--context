import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import usePersistedState from "../hooks/use-persisted-state.hook"
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";

function App() {
  const [numCookies, setNumCookies] = usePersistedState("num-cookies",1000);
  // const [numCookies, setNumCookies] = React.useState(1000);
  const [purchasedItems, setPurchasedItems] = usePersistedState("purchasedItems", {
    cursor: 0,
    grandma: 0,
    farm: 0,
  })

  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
        <Game numCookies={numCookies} setNumCookies={setNumCookies} purchasedItems={purchasedItems} setPurchasedItems={setPurchasedItems}/>
        </Route>
      </Router>
    </>
  );
}

export default App;
