import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([
    {id: 1, name: "Vladimir Tasic", email: "vlada@gmail.com", password: "12345678"},
    {id: 2, name: "Aleksandra Mircic", email: "aleksandra@gmail.com", password: "11223344"}
  ]);

  function toggleVisible() {
    setVisible(Toggle => !Toggle);
  }

  function getEmail(e) {
    setEmail(e.target.value)
  }

  function getPassword(e) {
    setPassword(e.target.value)
  }

  const existingEmail = users.some((user) => {
    return email === user.email
  })

  const existingPassword = (email, password) => {
    const user = users.find((user)=> user.email === email)
    if(user && user.password === password) {
    return true
    }     
    else return false    
}
      
  

  
  

  return (
    <UserContext.Provider value={{ visible, toggleVisible, email, password, getEmail, getPassword, existingEmail, existingPassword }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

