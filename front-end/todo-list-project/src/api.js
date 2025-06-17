export const API_URL = "http://localhost:8080/api/todos";

export const TASK_GET = () => {
    return {
        url: API_URL,
        options: {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        }
    }
}

export const TASK_POST = (task) => {
    return {
        url: API_URL,
        options: {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        }
    }
}

export const TASK_PUT = (task) => {
    return {
        url: `${API_URL}/${task.id}`,
        options: {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        }
    }
}
