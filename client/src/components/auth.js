import {authApi} from "../api";
import {useState} from "react";

export const Auth = (props) => {
    const [form, setForm] = useState({
        email: null,
        password: null
    });

    const submitHandler = (e) => {
        authApi.register({...form}).then(
            response => console.log(response)
        );
        e.preventDefault();
    }
    const changeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
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
                    <input className={'btn'} type={'submit'} value={'Send'}/>
                </form>
            </div>
        </div>
    )
}