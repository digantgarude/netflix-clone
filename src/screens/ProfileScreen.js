import React from 'react'
import "./ProfileScreen.css"
import "./PlansScreen.css"
import Nav from '../Nav'
import PlansScreen from './PlansScreen'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth';
function ProfileScreen() {
    const user = useSelector(selectUser); 
    return (
        <div className='profileScreen'>
            <Nav/>
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png" alt="" />
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>Plans</h3>

                            <PlansScreen />

                            <button onClick={()=> signOut(auth)} className='profileScreen_signout'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default ProfileScreen