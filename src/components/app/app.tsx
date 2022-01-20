import React from 'react';
import './app.css';
import {AppHeader} from "../app-header/app-header";
import {Main} from "../main/main";
import {Provider} from "react-redux";
import {store} from "../../store/store";

function App() {
    return (
        <Provider store={store}>
            <AppHeader/>
            <Main/>
        </Provider>
    );
}

export default App;
