import React, {useEffect} from 'react';
import {AppHeader} from "../app-header/app-header";
import {Main} from "../main/main";
import {Provider} from "react-redux";
import {store} from "../../store/store";
import {getIngredients} from "../../service/ingredients-service";
import {Ingredient} from "../../store/ingredients/types";

function App() {
    const [buns, setBuns] = React.useState([]);
    const [sauce, setSauce] = React.useState([]);
    const [main, setMain] = React.useState([]);
    useEffect(() => {
        getIngredients().then((result) => {
            if (result.data.success) {
                const data = result.data.data;
                setBuns(data.filter((elem: Ingredient) => elem.type === 'bun'));
                setSauce(data.filter((elem: Ingredient) => elem.type === 'sauce'));
                setMain(data.filter((elem: Ingredient) => elem.type === 'main'));
            } else {
                alert('Неизвестная ошибка')
            }
        }).catch(error => {
            if (error.response) {
                alert(`Ошибка ${error.response.data} ${error.response.status} ${error.response.headers}`);
            } else if (error.request) {
                alert(`Ошибка ${error.request}`);
            } else {
                alert(`Ошибка ${error.message}`);
            }
        });
    }, []);
    return (
        <Provider store={store}>
            <AppHeader/>
            <Main main={main} buns={buns} sauce={sauce}/>
        </Provider>
    );
}

export default App;
