//import { render } from "@testing-library/react";
import React from "react";
import { TodoContext } from "../TodoContext/Index.js";
import './TodoSearch.css';


function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    };

    return (
        <input 
            className="TodoSearch"
            placeholder="Buscador"
            value={searchValue}
            onChange={onSearchValueChange} 
            
        />
    );
}

export {TodoSearch};