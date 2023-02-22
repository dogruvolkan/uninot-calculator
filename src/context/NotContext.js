import { createContext, useState } from "react";

export const NotContext = createContext();

export const NotContextProvider = ({ children }) => {
  const [notSistem, setNotSistem] = useState("");
  const [dersSayisi, setDersSayisi] = useState("");
  const [krediSayisi, setKrediSayisi] = useState("");
  const [isDonem, setIsDonem] = useState(true);

  const values = {
    notSistem,
    setNotSistem,
    dersSayisi,
    setDersSayisi,
    krediSayisi,
    setKrediSayisi,
    isDonem,
    setIsDonem,
  };

  return <NotContext.Provider value={values}>{children}</NotContext.Provider>;
};
