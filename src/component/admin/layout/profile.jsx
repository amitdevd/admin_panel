import React, {useContext} from 'react'
import { UserContext } from './layout'

function Profile() {
  
    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login</div>
    return <div>welcome {user.welcome}</div>
}

export default Profile
