import {authApi} from "../api";

export const Auth = () => {
    return (
        <div>
            <h2>Auth</h2>
            <div>
                <button onClick={function(){
                    authApi.register({email: 'asdftest222@ya.ru', password: '123qwe'}).then(
                        response => console.log(response)
                    )
                }}>Test Reg</button>
            </div>
        </div>
    )
}