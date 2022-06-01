import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogout, isLogin }) => {
    return (
        <button
            className="btn btn-primary"
            onClick={isLogin ? onLogout : onLogin}
        >
            {isLogin ? "Выйти из системы" : "Войти"}
        </button>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
    isLogin: PropTypes.bool
};

export default SimpleComponent;
