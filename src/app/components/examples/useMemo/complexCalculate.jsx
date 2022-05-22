import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const factorial = (n) => {
    return n ? n * factorial(n - 1) : 1;
};

const runFact = (n) => {
    console.log("run  factorial");
    return factorial(n);
};

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [other, setOther] = useState(false);
    const fact = useMemo(() => runFact(value), [value]);
    const color = useMemo(
        () => ({
            value: other ? "primary" : "secondary"
        }),
        [other]
    );

    useEffect(() => console.log("render color"), [color]);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value}</p>
                <p>Factorial: {fact}</p>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((ps) => ps + 10)}
                >
                    Inc
                </button>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((ps) => ps - 10)}
                >
                    Dec
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn btn-" + color.value}
                    onClick={() => setOther((ps) => !ps)}
                >
                    change color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
