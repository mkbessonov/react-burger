import React from 'react';
import {AppHeader} from "../app-header/app-header";
import {Main} from "../main/main";
import {Provider} from "react-redux";
import {store} from "../../store/store";
import {initConstructor} from "../../store/constructor-elements/actions";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

function App() {
    initConstructor()(store.dispatch);
    return (
        <Provider store={store}>
            <AppHeader/>
            <DndProvider backend={HTML5Backend}>
                <Main/>
            </DndProvider>
        </Provider>
    );
}

export default App;
