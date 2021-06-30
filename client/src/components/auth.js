import {authApi} from "../api";

export const Auth = () => {
    return (
        <div>
            <h2>Auth</h2>
            <div>
                <button onClick={function(){
                    authApi.register({email: 'asdftest@ya.ru', password: '123qwe'});
                }}>Test Reg</button>
            </div>
        </div>
    )
}