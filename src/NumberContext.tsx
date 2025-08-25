import {createContext, FC, useContext, useState} from "react";

interface NumberContextProviderProps {
    numberValue: number;
    setNumberValue: (value: number) => void;
}

interface NumberProviderInitialProps{
    children?: React.ReactNode;
    initialNumberValue: number;
}

const NumberContext = createContext<NumberContextProviderProps | undefined>(undefined);

export const NumberProvider: FC<NumberProviderInitialProps> = ({ initialNumberValue, children }) => {
    const [numberValue, setNumberValue] = useState<number>(initialNumberValue);

    return (
        <NumberContext.Provider
            value={{
                numberValue,
                setNumberValue
        }}>
            {children}
        </NumberContext.Provider>
    );
}

export const useNumberContext = () => {
    const context = useContext(NumberContext);
    if (!context) {
        throw new Error('useNumberContext must be used within a NumberProvider');
    }
    return context;
}
