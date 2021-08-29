import React from 'react';
import { WiCloud } from 'react-icons/wi';
import { useStatusColorContext } from '../../hooks/useStatusColor';
import './iconSvg.scss';

const IconSvg = (props) => {

    const { statusColor } = useStatusColorContext();

    const {
        Icon = WiCloud,
        className,
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
            className={statusColor === 'snowy' ? 'iconBlack' : 'iconWhite'}
            style={{ width, height, color, ...style }}
        />
    );
};

export default IconSvg;