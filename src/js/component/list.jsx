import React from "react";
import { useState, useEffect } from "react";
import { request } from "../script/request";
import { id_random } from "../script/id_generator";

const List = () => {

    const [data, setData] = useState("");
    const [item, setItem] = useState([]);

    useEffect(()=>{
        request()
            .then(name => name.json())
            .then(data => setItem(item.concat(data.results)))
            .catch(err => console.log(err))
    }, [])

    const enter = (e) => {
        setData(e.target.value);
        if (e.code === "Enter") {
            if (data.length === 0) {
                alert("Datos no validos.");
            } else {
                setItem((elem) => { return elem.concat({ name: data, id: id_random() }) });
                e.target.value = ""
            };
        };
    };

    const remove = (itemm) => {
        let arr = item.filter(elem => elem.id != itemm.id)
        setItem(arr)
    };

    return (
        <>
            <input className="m-2" type="text" onKeyUp={enter} placeholder="Añadir Pokemon" />
            <ul>
                {item.map((item, index) => {
                    if(!item.id){
                        item["id"] = id_random()
                    }
                    return <li className="items-li" id={item.id} key={index}>{item.name}<span><i className="fa fa-trash" onClick={() => remove(item)}></i></span></li>
                })}
            </ul>
            <p>{item.length === 0 ? "No hay ningun elemento." : item.length}</p>
        </>
    );
};

export default List
