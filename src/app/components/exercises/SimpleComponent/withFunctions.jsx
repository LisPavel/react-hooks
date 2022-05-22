import React, { useState } from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const [isLogin, setIsLogin] = useState(
        localStorage.getItem("user")?.length > 0
    );
    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsLogin(false);
    };
    const handleLogin = () => {
        localStorage.setItem("user", "user");
        setIsLogin(true);
    };

    const newProps = {
        ...props,
        onLogin: handleLogin,
        onLogout: handleLogout,
        isLogin
    };

    return (
        <CardWrapper>
            <Component {...newProps} />
        </CardWrapper>
    );
};

export default withFunctions;
