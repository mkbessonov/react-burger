import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import {NotAuthRote} from "../not-auth-route/not-auth-route";
import {Register} from "../../pages/register/register";
import {Login} from "../../pages/login/login";
import {ForgotPassword} from "../../pages/forgot-password/forgot-password";
import {ResetPassword} from "../../pages/reset-password/reset-password";
import {ProtectedRoute} from "../protected-route/protected-route";
import {Profile} from "../../pages/profile/profile";
import {Modal} from "../modal/modal";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {Main} from "../../pages/main/main";
import React from "react";
import {IngredientDetails} from "../ingredient-details/ingredient-details";
import {PageIngredientsDetails} from "../../pages/page-ingredients-details/page-ingradients-details";

export const Content = () => {
    let location = useLocation();
    let background = location.state && (location.state as any).background;
    return (
        <>
            <Switch location={background || location}>
                <NotAuthRote path='/register'><Register/></NotAuthRote>
                <NotAuthRote path='/login'><Login/></NotAuthRote>
                <NotAuthRote path='/forgot-password'><ForgotPassword/></NotAuthRote>
                <NotAuthRote path='/reset-password'><ResetPassword/></NotAuthRote>
                <ProtectedRoute path='/profile'><Profile/></ProtectedRoute>
                <Route path="/ingredients/:id" children={
                    <PageIngredientsDetails/>
                }/>
                <Route path={"/ingredients"} exact={true}>
                    <DndProvider backend={HTML5Backend}>
                        <Main/>
                    </DndProvider>
                </Route>
                <Route path="*">
                    <Redirect to={'/ingredients'}/>
                </Route>
            </Switch>
            {background && <Route path="/ingredients/:id" children={
                <Modal width={720}>
                    <IngredientDetails/>
                </Modal>
            }/>}
        </>
    );
};