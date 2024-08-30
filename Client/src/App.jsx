import { Routes, Route, Navigate} from "react-router-dom"
import ChatPage from "./webPages/ChatPage"
import LoginPage from "./webPages/LoginPage"
import RegisterPage from "./webPages/RegisterPage"
import Navbar from "./components/Navbar"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import { ChatContextProvider } from "./context/chatContext"



function App(){

  const {user}=useContext(AuthContext)
  return(
    <ChatContextProvider user={user}>
    <Navbar/>
    <Routes>
      <Route path="/" element={user ? <ChatPage/> :<LoginPage/>} />
      <Route path="/login" element={user ? <ChatPage/> :<LoginPage />} />
      <Route path="/register" element={user ? <ChatPage/> :<RegisterPage />} />
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
    
    </ChatContextProvider>
  )

}

export default App;