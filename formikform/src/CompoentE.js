import React, {useContext} from 'react';
import ComponentF from './ComponentF';
import {userContext,ageContext } from './App';




function CompoentE() {
    const user=useContext(userContext);
    const age=useContext(ageContext);
    return (
        <div>
            {user}-{age}
            <ComponentF/>
            
        </div>
    )
}

export default CompoentE;

