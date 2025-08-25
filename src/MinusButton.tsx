import {FC} from "react";
import {useNumberContext} from "./NumberContext";

export const MinusButton: FC = () => {
    const { numberValue, setNumberValue } = useNumberContext();

    return (
        <button onClick={() => setNumberValue(numberValue -1)}>
            Minus
        </button>
    );
}
