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
import {Login} from "../login/login";
import {ForgotPassword} from "../forgot-password/forgot-password";
import {ResetPassword} from "../reset-password/reset-password";
import {Profile} from "../profile/profile";

function App() {
    initConstructor()(store.dispatch);
    return (
        <Provider store={store}>
            <AppHeader/>
            <BrowserRouter>
                <Switch>
                    <Route path='/register'><Register/></Route>
                    <Route path='/login'><Login/></Route>
                    <Route path='/forgot-password'><ForgotPassword/></Route>
                    <Route path='/reset-password'><ResetPassword/></Route>
                    <Route path='/profile'><Profile/></Route>
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
