import React from "react";
import { useState } from "react";

const Input = ()=>{

    const [data, setData] = useState("");
    const [item, setItem] = useState([]);
    const [styles, setStyles] = useState(false);
    const [item_id, setItem_id] = useState(false)

    const id_random = ()=>{
        const ids = [];
        const characters = 'abcdefghi0123456789';
        for(let i = 0; i < characters.length; i++){
            const random = Math.floor(Math.random() * characters.length);
            ids.push(characters[random]);
        };
        return ids.join('');
    };

    const intro = (e)=>{
        setData(e.target.value);
        console.log(e.code);
        if(e.code === "Enter"){
            if(data.length === 0){
                alert("Datos no validos.");
            }else{
                setItem((elem)=>{return elem.concat({label: data, id: id_random()})});
                e.target.value = ""
            };
        };
    };

    const select = (e)=>{
        setItem_id(e.target.id)
        styles === false ? setStyles(true) : setStyles(false);
    };

    const remove = ()=>{
        let arr = item.filter(elem => elem.id != item_id)
        setItem(arr)
    };

    return (
        <>
        <input type="text" onKeyUp={intro} />
        {item.map((item, key)=>{
            return <li className="itemsLi" id={item.id} key={key} onClick={(e)=>{select(e)}}>{item.label}</li>
        })}
        <button className={styles===true?'d-block':'d-none'} onClick={remove}>Eliminar</button>
        </>
    );
};

export default Input
