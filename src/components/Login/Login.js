import React, {useState} from 'react';
import './login.css'
import {auth} from "../../firebase/Firebase";
import {useDispatch} from "react-redux";
import {login} from "../../Redux/userStore/userSlice";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";


function Login(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [profileUrl, setProfileUrl] = useState('')
    const dispatch = useDispatch()
    
    const auth = getAuth()
    const register = async (e) => {
        e.preventDefault();
        if (!name) {
            return alert('Please enter a full name')
        }
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (userAuth) => {
                console.log(userAuth.user)
                await userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profileUrl
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profileUrl
                        }))
                    })
            }).catch((error) => alert(error))

    }
    
    const loginApp = () => {
        if (!name) {
            return alert('Please enter a full name')
        }
    }
    return (
        <div className={'login'}>
            <img src={'logobrand.png'} alt={'logo'}/>
            <form>
                <input type={'text'} value={name} onChange={(e) => setName(e.target.value)} placeholder={'Full name'}/>
                <input type={'text'} value={profileUrl} onChange={(e) => setProfileUrl(e.target.value)} placeholder={'Profile pic URL'}/>
                <input type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'Email'}/>
                <input type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={'Password'}/>
                <button onClick={loginApp}>Sign In</button>
            </form>
            <p>Not a member? <span className={'login_register'} onClick={register}> Register Now</span></p>
        </div>
    );
}

export default Login;
