import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelloWorldApp, FisrtApp} from './HelloWorldApp';
import "./styles.css"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp/> */}
        <FisrtApp  title={"Soy Joel"} ></FisrtApp>
    </React.StrictMode>
)