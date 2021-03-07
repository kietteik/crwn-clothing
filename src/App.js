import "./App.css";
import { Homepage } from "./pages/homepage/homepage";
import { Hatspage } from "./pages/hatspage/hatspage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Shop } from "./pages/shop/shop";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/shop" component={Shop} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
