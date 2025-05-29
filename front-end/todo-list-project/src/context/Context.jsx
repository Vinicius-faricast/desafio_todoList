import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [modal, setModal] = useState(false);
    const handleModal = () => setModal(!modal);

    return (
        <Context.Provider value={{modal, handleModal}}>
            {children}
        </Context.Provider>
    );
};