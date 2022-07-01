import React from "react";
import { useState } from "react";

const Input = () => {

    const [data, setData] = useState("");
    const [item, setItem] = useState([]);

    const id_random = () => {
        const ids = [];
        const characters = 'abcdefghi0123456789';
        for (let i = 0; i < characters.length; i++) {
            const random = Math.floor(Math.random() * characters.length);
            ids.push(characters[random]);
        };
        return ids.join('');
    };

    const enter = (e) => {
        setData(e.target.value);
        if (e.code === "Enter") {
            if (data.length === 0) {
                alert("Datos no validos.");
            } else {
                setItem((elem) => { return elem.concat({ label: data, id: id_random() }) });
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
            <input type="text" onKeyUp={enter} placeholder="Escribe aqui" />
            <ul>
                {item.map((item, index) => {
                    return <li className="items-li" id={item.id} key={index}>{item.label}<span><i className="fa fa-trash" onClick={() => remove(item)}></i></span></li>
                })}
            </ul>
            <p>{item.length === 0 ? "No hay ningun elemento." : item.length}</p>
        </>
    );
};

export default Input
