import React from 'react';
import { IconSvg } from '..';
import './hourTemp.scss';

const HourTemp = (props) => {

    const {
        title,
        Icon,
        temp
    } = props;

    return (
        <div className="container-temp-hour">
            <p>{title}</p>
            <IconSvg Icon={Icon} width={60} height={45} />
            <p className="temp-hour">{temp || 'N/A'} °C</p>
        </div>
    );
};

export default HourTemp;