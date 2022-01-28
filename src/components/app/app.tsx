import React from 'react';
import {AppHeader} from "../app-header/app-header";
import {Main} from "../main/main";
import {Provider} from "react-redux";
import {store} from "../../store/store";
import {initConstructor} from "../../store/constructor-elements/actions";

function App() {
    initConstructor()(store.dispatch);
    return (
        <Provider store={store}>
            <AppHeader/>
            <Main/>
        </Provider>
    );
}

export default App;
