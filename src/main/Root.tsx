import React from 'react';
import {Component} from 'react';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import configureStore from "./store/ConfigureStore";
import App from './App';

interface Props {

}

const {store, persistor} = configureStore();

export default class Root extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App/>
                </PersistGate>
            </Provider>
        );
    }
}