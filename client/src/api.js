import axios from "axios";

const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export const authApi = {
    register(data){
        return instance.post('/register',{...data})
            .then(function (response) {
                // handle success
                console.log(response);
            })
    }
}