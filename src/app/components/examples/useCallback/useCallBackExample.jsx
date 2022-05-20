import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});

    const withoutCallback = useRef(0);
    const withCallback = useRef(0);

    const handleChange = ({ target }) => {
        setData((ps) => ({ ...ps, [target.name]: target.value }));
    };

    const validateWithoutCallback = (data) => {
        console.log(data);
    };
    const validateWithCB = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        validateWithoutCallback(data);
        validateWithCB(data);
    }, [data]);

    useEffect(() => withoutCallback.current++, [validateWithoutCallback]);
    useEffect(() => withCallback.current++, [validateWithCB]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Without cb: {withoutCallback.current}</p>
            <p>With cb: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={handleChange}
                value={data.email || ""}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
