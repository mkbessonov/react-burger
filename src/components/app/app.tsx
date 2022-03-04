import React from 'react';
import {AppHeader} from "../app-header/app-header";
import {Provider} from "react-redux";
import {persistor, store} from "../../store/store";
import {initConstructor} from "../../store/actions/constructor-elements";
import {BrowserRouter} from "react-router-dom";
import {ProvideAuth} from "../../service/auth";
import {PersistGate} from "redux-persist/integration/react";
import {Content} from "../content/content";


function App() {
    initConstructor()(store.dispatch);
    return (
        <PersistGate loading={null} persistor={persistor}>
            <Provider store={store}>
                <ProvideAuth>
                    <BrowserRouter>
                        <AppHeader/>
                        <Content/>
                    </BrowserRouter>
                </ProvideAuth>
            </Provider>
        </PersistGate>
    );
}

export default App;
