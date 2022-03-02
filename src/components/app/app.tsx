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
import {ProvideAuth} from "../../service/auth";
import {ProtectedRoute} from "../protected-route/protected-route";
import {NotAuthRote} from "../not-auth-route/not-auth-route";

function App() {
    initConstructor()(store.dispatch);
    return (
        <Provider store={store}>
            <ProvideAuth>
                <BrowserRouter>
                    <AppHeader/>
                    <Switch>
                        <NotAuthRote path='/register'><Register/></NotAuthRote>
                        <NotAuthRote path='/login'><Login/></NotAuthRote>
                        <NotAuthRote path='/forgot-password'><ForgotPassword/></NotAuthRote>
                        <NotAuthRote path='/reset-password'><ResetPassword/></NotAuthRote>
                        <ProtectedRoute path='/profile'><Profile/></ProtectedRoute>
                        <Route path='/'>
                            <DndProvider backend={HTML5Backend}>
                                <Main/>
                            </DndProvider>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </ProvideAuth>
        </Provider>
    );
}

export default App;
