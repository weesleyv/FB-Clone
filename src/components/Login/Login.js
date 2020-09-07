import React from 'react';
import './styles/Login.css';
import { Button } from '@material-ui/core';
import {auth, provider} from '../../firebase';
import {useStateValue} from '../../StateProvider';
import {actionTypes} from '../../reducer';

function Login() {
    const [state, dispatch] = useStateValue()
    const signin = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(err => alert(err.message))
    }
    return(
        <div className="login">
            <div className="login__logo">
                <img alt="logo" src="https://nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/1226/facebook-icon-preview-1.png" />
                <img alt="logo" src="https://about.fb.com/wp-content/uploads/2019/11/FB_Newsroom_Social.png?fit=1200%2C628" />

            </div>

            <Button type="submit" onClick={signin}>
                Sign In
            </Button>
        </div>
    )
}

export default Login