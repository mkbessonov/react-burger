import React, {useEffect} from 'react';
import {AppHeader} from "../../components/app-header/app-header";
import {Provider} from "react-redux";
import {persistor, store} from "../../store/store";
import {initConstructor} from "../../store/actions/constructor-elements";
import {BrowserRouter} from "react-router-dom";
import {ProvideAuth} from "../../service/auth";
import {PersistGate} from "redux-persist/integration/react";
import {Content} from "../../components/content/content";


function App() {
    useEffect(() => {
        initConstructor()(store.dispatch);
    }, []);
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
