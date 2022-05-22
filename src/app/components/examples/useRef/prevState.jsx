import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [defState, setDefState] = useState("false");
    const toggleDefState = () => {
        setDefState((ps) => (ps === "false" ? "true" : "false"));
    };

    useEffect(() => (prevState.current = defState), [defState]);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>prev state :{prevState.current}</p>
            <p>current state:{defState}</p>
            <button className="btn btn-primary" onClick={toggleDefState}>
                Toggle
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
