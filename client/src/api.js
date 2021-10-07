import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    timeout: 3000,
    headers: {'X-Custom-Header': 'foobar'},
});

export const authApi = {
    register(data){
        return instance.post('auth/register',data)
            .then(response => {
                // handle success
                console.log(response);
            })
    }
}