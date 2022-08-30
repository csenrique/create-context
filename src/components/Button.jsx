import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const Button = () => {

    const { developer, community, year, setUser } = useContext(UserContext);

    return (
      <>
      <p> { developer } pertenece a la comunidad: { community } / { year } </p>
       <button onClick={ () => setUser({
        name: 'Cristobal',
        age: 42
       })}>Chnge User</button>
      
      </>
    )
  }
  