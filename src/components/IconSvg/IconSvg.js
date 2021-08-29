import React from 'react';
import './iconSvg.scss';

const IconSvg = (props) => {
    const {
        Icon,
        className = 'iconWhite',
        width = '8rem',
        height = '8rem',
        color,
        style = {
            color: color,
            width: width,
            height: height
        },
        ...rest
    } = props;
    return (
        <Icon
            {...rest}
            className={className}
            style={{ width, height, color, ...style }}
        />
    );
};

export default IconSvg;