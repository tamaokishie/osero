import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { Board } from "./Board.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!); // "root"はHTMLファイルのid属性
root.render(
    <React.StrictMode>
        <App />
        <Board />
    </React.StrictMode>
);