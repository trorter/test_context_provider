import {FC} from "react";
import {useNumberContext} from "./NumberContext";

export const DisplayNumber: FC = () => {

    const {numberValue, } = useNumberContext();

    return (
        <div>
            - {numberValue} -
        </div>
    );
}
