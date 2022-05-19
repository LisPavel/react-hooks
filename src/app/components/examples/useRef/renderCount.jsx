import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const RenderCountExample = () => {
    const ref = useRef(0);
    const [defState, setDefState] = useState(false);
    const toggleDefState = () => {
        setDefState((ps) => !ps);
    };

    useEffect(() => ref.current++);

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>render count:{ref.current}</p>
            <button className="btn btn-primary" onClick={toggleDefState}>
                Toggle {defState}
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
