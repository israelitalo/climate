import React from 'react';
import { useHistory } from 'react-router-dom';
import './button.scss';

const Button = (props) => {

    const history = useHistory();

    const {
        city,
        children,
        ...rest
    } = props;

    const handleClick = () => history.push(`/climate/${city}`);

    return (
        <button
            {...rest}
            className="button"
            onClick={handleClick}
        >
            {city}
        </button>
    )
}

export default Button;