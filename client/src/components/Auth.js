import {authApi} from "../api";
import {useState} from "react";
import {Alert} from "./common/alerts/Alert";


export const Auth = (props) => {
    const [form, setForm] = useState({
        email: null,
        password: null
    });
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({type: null, text: null, active: false});
    const submitHandler = (e) => {
        setLoading(true);
        authApi.register({...form}).then(
            response => {
                console.log(response.data);
                response.data.ok ? setAlert({
                    ...alert,
                    type: 'success',
                    text: response.data.message,
                    active: true
                }) : setAlert({
                    ...alert,
                    type: 'error',
                    text: response.data.message,
                    active: true
                })
                setLoading(false);
            }
        );
        e.preventDefault();
    }
    const changeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const closeAlert = (e) => {
        setAlert({
            ...alert,
            type: null,
            text: null,
            active: false
        })
    }
    return (
        <div>
            <h2>Auth</h2>
            <div>
                <form onSubmit={submitHandler} onChange={changeHandler}>
                    <label>
                        Email:
                        <input type={'text'} name={'email'}/>
                    </label>
                    <label>
                        Password:
                        <input type={'password'} name={'password'}/>
                    </label>
                    <input disabled={loading} className={'btn'} type={'submit'} value={'Send'}/>
                    {alert.active && <Alert type={alert.type} text={alert.text} onClose={closeAlert}/>}
                </form>
            </div>
        </div>
    )
}