import { Parent } from './components/Parent';
import { UserProvider } from './context/UserContext';

function App() {
  
  return (
    <div>
      <UserProvider value= {{
        developer: "cesenrique",

      }}>
        <Parent />
      </UserProvider>    
    </div>
  )
}

export default App
