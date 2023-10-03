import fetch from "unfetch";

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
    fetch("http://studentportal.ap-east-1.elasticbeanstalk.com/students")
        .then(checkStatus);

export const addNewStudent = (student) => {
    return fetch("http://studentportal.ap-east-1.elasticbeanstalk.com/students", {
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
    return fetch(`http://studentportal.ap-east-1.elasticbeanstalk.com/students/${studentId}`,
        {method: 'DELETE'
        }).then(checkStatus)
}