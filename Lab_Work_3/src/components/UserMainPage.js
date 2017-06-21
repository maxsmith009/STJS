import React from "react";
import {Grid} from "../containers/UserCarGrid";
import Search from "../containers/UserSearch";

const CarMainScreen = () => (
    <div className="MainPage">
        <Search/>
        <Grid/>
    </div>
);

export {CarMainScreen}