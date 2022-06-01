import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { validator } from "../../../utils/validator";

const FormComponent = ({
    children,
    onSubmit,
    validatorConfig,
    defaultData
}) => {
    const [data, setData] = useState(defaultData || {});
    const [errors, setErrors] = useState({});

    const handleChange = useCallback(
        (target) => {
            setData((prevState) => ({
                ...prevState,
                [target.name]: target.value
            }));
        },
        [setData]
    );

    const validate = useCallback(
        (data) => {
            const errors = validator(data, validatorConfig);
            setErrors(errors);
            return Object.keys(errors).length === 0;
        },
        [setErrors, validatorConfig]
    );

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const isValid = validate(data);
        if (!isValid) return;
        onSubmit(data);
    };

    const handleKeyDown = (ev) => {
        if (ev.keyCode !== 13) return;
        ev.preventDefault();
        const form = ev.target.form;
        const fieldIndex = Array.prototype.indexOf.call(form, ev.target);
        form.elements[fieldIndex + 1]?.focus();
        // console.log(form, fieldIndex);
    };

    useEffect(() => validate(data), [data]);

    const isValid = Object.keys(errors).length === 0;

    const clonedElements = React.Children.map(children, (child) => {
        const childType = typeof child.type;
        let config = {};

        switch (childType) {
            case "object":
                if (!child.props.name) {
                    throw new Error("name property required", child);
                }
                config = {
                    ...child.props,
                    onChange: handleChange,
                    value: data[child.props.name] || "",
                    error: errors[child.props.name],
                    onKeyDown: handleKeyDown
                };
                break;

            case "string":
                if (
                    child.props.type === "submit" ||
                    child.props.type === undefined
                ) {
                    config = { ...child.props, disabled: !isValid };
                    break;
                }
                config = child.props;
                break;

            default:
                config = child.props;
        }
        const clonedChild = React.cloneElement(child, config);

        return clonedChild;
    });

    return <form onSubmit={handleSubmit}>{clonedElements}</form>;
};

FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    onSubmit: PropTypes.func,
    validatorConfig: PropTypes.object,
    defaultData: PropTypes.object
};

export default FormComponent;
