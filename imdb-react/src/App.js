import MovieSearch from "./MovieSearch.js";
import SearchReducer from "./SearchReducer.js";
import SearchLocal from "./SearchLocal.js";
import MovieItem from "./MovieItem.js";
import store from "./redux/store.js";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  //const dispatch = useDispatch();

  return (
    <Provider store={store}>
      <Router>
        <div className="App container text-center text-light">
          <Switch>
            <Route path="/" exact>
              <MovieSearch />
              {<SearchReducer />}
            </Route>
            <Route path="/search" exact component={MovieSearch} />
            <Route path="/search/">
              <MovieItem/>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

function Display() {
  const isSearch = useSelector((state) => state.isSearch);
  const data = useSelector((state) => state.data);
  console.log(data);
  return (
    <div>
      <Route path="/" exact>
        <MovieSearch />
        {!isSearch ? <SearchReducer /> : null}
      </Route>
      <Route path="/search" exact component={MovieSearch} />
      {/* {!isSearch ? <SearchReducer /> : null} */}
    </div>
  );
}

export default App;
