import { createContext, useState, useContext } from 'react';

const StatusColorContext = createContext();

export function StatusColorContextProvider({ children }) {

    const [statusColor, setStatusColor] = useState('snowy');

    return (
        <StatusColorContext.Provider value={{ statusColor, setStatusColor }}>
            {children}
        </StatusColorContext.Provider>
    );
};

export function useStatusColorContext() {
    const context = useContext(StatusColorContext);
    return context;
}