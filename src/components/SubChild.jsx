import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

import { Button } from './Button';

export const SubChild = () => {

    const { user } = useContext(UserContext);

    return (
      <>
        <h3>SubChild</h3>
        <hr />
         <pre>
             {JSON.stringify(user, null, 2)}
         </pre> 
         <hr />
        <Button />
      </>
    )
  }
  