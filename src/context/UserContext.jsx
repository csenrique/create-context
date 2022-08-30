import { createContext, useState } from 'react';

export const UserContext = createContext();

//luego de creado el contexto y usado con la constante userCount, usamos su provider,
//creando uma variable que contendra este provider ... a continuacion

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        name: 'Jane',
        age: 35
      });
    

    return(
        <UserContext.Provider value={{
            developer: "csenrique",
            community: "Full Stack",
            year: 2022,
            user,
            setUser
        }}>
            { children }
        </UserContext.Provider>
    );
}