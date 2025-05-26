import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    setVisible(Toggle => !Toggle);
  }

  return (
    <UserContext.Provider value={{ visible, toggleVisible }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

