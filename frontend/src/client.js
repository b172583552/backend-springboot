import fetch from "unfetch";
import config from "./config.json"
const checkStatus = response => {
    if (response.ok) {
        console.log(response => response.json());
        return response;
    }
    // convert non-2xx HTTP responses into errors:
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}
export const getAllStudents = () =>
    fetch(config.SERVER_URL)
        .then(checkStatus);

export const addNewStudent = (student) => {
    return fetch(config.SERVER_URL, {
        headers:{
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(student)
    }).then(checkStatus)
}

export const deleteStudent = studentId =>
{
    console.log(studentId)
    return fetch(`${config.SERVER_URL}/${studentId}`,
        {method: 'DELETE'
        }).then(checkStatus)
}