import React, {useEffect} from "react";
import {TWSState} from "../../store/reducers/ws-reducer";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../store/store";
import {WS_URL} from "../../service/api";
import {ETypesAction} from "../../store/actions/types";

export const OrderFeed = () => {
    const { feeds }: TWSState = useSelector((state: IRootState) => state.wsReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: ETypesAction.WS_CONNECTION_START, wsUrl: WS_URL });
        return () => {
            dispatch({ type: ETypesAction.WS_CONNECTION_CLOSED });
        };
    }, [dispatch]);
    console.log(feeds);
    return (
        <section>
        </section>
    );
};

