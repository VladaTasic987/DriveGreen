import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [geoLocation, setGeoLocation] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({Punjaci: '', Kw: '', Naplata: ''});
  const [users, setUsers] = useState([
    {id: 1, name: "Vladimir Tasic", email: "vlada@gmail.com", password: "12345678"},
    {id: 2, name: "Aleksandra Mircic", email: "aleksandra@gmail.com", password: "11223344"}
  ]);
  const [partners, setPartners] = useState([]);



  function toggleVisible() {
    setVisible(Toggle => !Toggle);
  }

  function getEmail(e) {
    setEmail("");
    setEmail(e.target.value)
  }

  function getPassword(e) {
    setPassword(e.target.value)
  }

  function getName(e) {
    setName(e.target.value)
  }
  function getGeoLocation(e) {
    setGeoLocation(e.target.value)
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
      
  function registerUser() {
    setUsers([...users, {id: Date.now(), name: name, email: email, password: password}])
  }
  function registerPartner() {
    setPartners([...partners, {id: Date.now(), name: name, email: email, password: password, geoLocation: geoLocation, selectedOptions: selectedOptions}])
  }
  function clearInputs() {
    setEmail("");
    setName("");
    setPassword("");
  }
  

  return (
    <UserContext.Provider value={{ visible, toggleVisible, email, password, getEmail, getPassword, existingEmail, existingPassword, name, getName, registerUser, clearInputs, getGeoLocation, geoLocation, selectedOptions, setSelectedOptions, partners, registerPartner}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

