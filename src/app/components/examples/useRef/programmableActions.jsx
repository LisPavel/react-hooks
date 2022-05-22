import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        // console.log(inputRef);
        inputRef.current?.focus();
    };

    const handleChangeWidth = () => {
        inputRef.current.style.width = "100px";
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                ref={inputRef}
            />
            <button className="btn btn-primary" onClick={handleClick}>
                Focus on input
            </button>
            <button className="btn btn-secondary" onClick={handleChangeWidth}>
                change width
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
