import React from "react";
import { useState, useEffect } from "react";
import { id_random } from "../script/id_generator";
import { getter } from "../script/petitions";
import { update } from "../script/petitions"

const List = () => {

    const [data, setData] = useState("");
    const [task, setTask] = useState([])

    useEffect(() => {
        getter()
            .then(label => label.json())
            .then(data => setTask(data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        update(task)
    }, [task])

    const enter = (e) => {
        setData(e.target.value);
        if (e.code === "Enter") {
            if (data.length === 0) {
                alert("Datos no validos.");
            } else {
                setTask((elem) => { return elem.concat({ label: data, done: false, id: id_random() }) });
                e.target.value = ""
            };
        };
    };

    const remove = (element) => {
        let arr = task.filter(elem => elem.id != element.id)
        setTask(arr)
    };

    return (
        <>
            <input className="m-2" type="text" onKeyUp={enter
            } placeholder="Add chores" />
            <ul>
                {task.map((elem, index) => {
                    if (!elem.id) {
                        elem["id"] = id_random()
                    }
                    return <li className="items-li" id={elem.id} key={index}>{elem.label}<span><i className="fa fa-trash" onClick={() => remove(elem)}></i></span></li>
                })}
            </ul>
            <p>{task.length === 0 ? "You have no pending tasks." : task.length+" pending tasks"}</p>
            <br/>
        </>
    );
};

export default List
