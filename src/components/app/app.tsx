import React from 'react';
import {AppHeader} from "../app-header/app-header";
import {Main} from "../main/main";
import {Provider} from "react-redux";
import {store} from "../../store/store";
import {initConstructor} from "../../store/actions/constructor-elements";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Register} from "../register/register";

function App() {
    initConstructor()(store.dispatch);
    return (
        <Provider store={store}>
            <AppHeader/>
            <BrowserRouter basename={'/ui/rb/pdoc/v1'}>
                <Switch>
                    <Route path='/register'><Register/></Route>
                    <Route path='/'>
                        <DndProvider backend={HTML5Backend}>
                            <Main/>
                        </DndProvider>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
