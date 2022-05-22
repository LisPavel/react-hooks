import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutBtn = ({ onLogOut }) => {
    useEffect(() => console.log("render button"));
    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            Logout
        </button>
    );
};
LogOutBtn.propTypes = {
    onLogOut: PropTypes.func.isRequired
};

function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) return false;
    return true;
}

const MemoizedLogOutBtn = React.memo(LogOutBtn, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, []);

    console.log(state);

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState((ps) => !ps)}
            >
                change state
            </button>
            <MemoizedLogOutBtn onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
