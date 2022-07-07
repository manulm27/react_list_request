export const getter = () => {
    return fetch('https://assets.breatheco.de/apis/fake/todos/user/ManuelMartret')
}

export const update = (data) => {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/ManuelMartret', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            if (res.ok) {
                console.log(res.ok); // Será true (verdad) si la respuesta es exitosa.
                console.log(res.status); // el código de estado = 200 o código = 400 etc.
                return res.json(); // (regresa una promesa) analizar el como json para devolver una promesa y obtener los resultados
            }else{
                throw Error(res.statusText)
            }
        })
        .then((response) => {
            console.log(response); // Intentará devolver el resultado exacto como cadena (string)
        })
        .catch(err => {
            console.log(err); //manejo de errores
        });
}
