import React, { useState } from 'react';
import { UserContext } from '../layout';

const UserbuyermgmtProvider = ({children}) => {

    const [user, setUser] = React.useState(null)

    return (
        <div>
            <UserContext.Provider value={{user, setUser}}>
                {children}
            </UserContext.Provider>
            
        </div>
    )
}

export default UserbuyermgmtProvider;

{/* */}