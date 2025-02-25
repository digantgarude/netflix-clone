import React, {useRef} from 'react'
import './SignupScreen.css';
import db, {auth} from './../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

function SignupScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(
            auth, 
            emailRef.current.value,
            passwordRef.current.value)
        .then((userCrential) => {
            console.log(userCrential)
            const customersRef = collection(db, 'customers');
            addDoc(customersRef, {
                user: userCrential.user.uid,
                productId: "NONE"
            }).then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            }).catch((error) => {
                console.error("Error adding document: ", error);
            });
        }).catch((error) => {
            alert(error.message);
        })
    }

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, 
        emailRef.current.value,
        passwordRef.current.value)
        .then((userCrential) => {
            console.log(userCrential)
        }).catch(error => {
            alert(error.message);
        })
    }

    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder='Email' />
                <input ref={passwordRef} type="password" placeholder='Password' />
                <button type="submit" onClick={signIn}>Sign In</button>

                <h4>
                    <span className='signupScreen_gray'>New to Netflix?</span> 
                    <span className='signupScreen_link' onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignupScreen