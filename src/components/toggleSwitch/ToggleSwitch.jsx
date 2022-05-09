import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.css'


const ToggleSwitch = ( props ) => {

    const [toggle, setToggle] = useState(false);
    const { defaultChecked, onChange, disabled, className } = props;

    useEffect(() => {
        if (defaultChecked) {
            setToggle(defaultChecked)
        }
    }, [defaultChecked]);

    const triggerToggle = () => {
        if ( disabled ) {
            return;
        }

        setToggle(!toggle);

        if ( typeof onChange === 'function' ) {
            onChange(!toggle);
        }
    }

    const getIcon = (type) => {
        const { icons } = props;
        if ( ! icons ) {
            return null;
        }

        return icons[type] === undefined ?
            ToggleSwitch.defaultProps.icons[type] :
            icons[type];
    }

    const toggleClasses = classNames('wrg-toggle', {
        'wrg-toggle--checked': toggle,
        'wrg-toggle--disabled': disabled
    }, className);
    const checkedClass = classNames('wrg-toggle-container', {
        'toggle--checked': toggle,
    }, className);
    const checkedCircle = classNames('wrg-toggle-circle', {
        'circle--checked': toggle,
    }, className);

    return (
        <div onClick={triggerToggle} className={toggleClasses}>
            <div className={checkedClass}>
                <div className="wrg-toggle-check">
                    <span>{ getIcon('checked') }</span>
                </div>
                <div className="wrg-toggle-uncheck">
                    <span>{ getIcon('unchecked') }</span>
                </div>
            </div>
            <div className={checkedCircle}></div>
            <input type="checkbox" aria-label="Toggle Button" className="wrg-toggle-input" />
        </div>
    );
}


ToggleSwitch.propTypes = {
    disabled: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
    icons: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            checked: PropTypes.node,
            unchecked: PropTypes.node
        })
    ])
};

export default ToggleSwitch;