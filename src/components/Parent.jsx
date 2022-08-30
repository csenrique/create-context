import { useContext } from 'react';
import { Child } from './Child';
import { UserContext } from '../context/UserContext';

export const Parent = () => {

  const { developer, community } = useContext(UserContext);
  
  return (
    <>
      <h1>Parent</h1>
      <p>El developer es: {developer}</p>
      <Child />
    </>
  )
}
