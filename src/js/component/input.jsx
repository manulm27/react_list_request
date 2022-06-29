import React from "react";
import { useState } from "react";

const Input = ()=>{

    const [data, setData] = useState("");
    const [item, setItem] = useState([]);
    const [view, setView] = useState(null);
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

    const enter = (e)=>{
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

    const select = (e, index)=>{
        setItem_id(e.target.id)
        setView(index);
    };

    const remove = ()=>{
        let arr = item.filter(elem => elem.id != item_id)
        setItem(arr)
    };

    return (
        <>
        <ul>
        <input type="text" onKeyUp={enter} />
        {item.map((item, index)=>{
            return <li className="items-li" id={item.id} key={index} onMouseEnter={(e)=>select(e, index)} onMouseLeave={()=>setView(null)}>{item.label}<button className={view === index?'d-block':'d-none'} onClick={remove}>Eliminar</button></li>
        })}
        </ul>
        </>
    );
};

export default Input
