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
