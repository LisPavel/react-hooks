import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const SimpleOrderedList = ({ children }) => {
    return React.Children.map(children, (child, i) => {
        return React.cloneElement(child, {
            ...child.props,
            index: `${i + 1}. `
        });
    });
};
SimpleOrderedList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <SimpleOrderedList>
                <Component />
                <Component />
                <Component />
            </SimpleOrderedList>
        </CollapseWrapper>
    );
};

const Component = ({ index }) => {
    return <div>{index || ""}Компонент списка</div>;
};
Component.propTypes = {
    index: PropTypes.string
};

export default ChildrenExercise;
