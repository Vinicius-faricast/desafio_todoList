import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [modal, setModal] = useState(false);
    const handleModal = () => setModal(!modal);
    const [task, setTask] = useState(null);

    return (
        <Context.Provider value={{modal, handleModal, task, setTask}}>
            {children}
        </Context.Provider>
    );
};