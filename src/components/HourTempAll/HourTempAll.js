import React from 'react';
import { HourTemp } from '..';

const HourTempAll = (props) => {

    const { data } = props;

    return (
        <>
            <HourTemp
                title={data.dawn?.title}
                Icon={data.dawn?.Icon}
                temp={data.dawn?.temp}
            />
            <HourTemp
                title={data.morgning?.title}
                Icon={data.morgning?.Icon}
                temp={data.morgning?.temp}
            />
            <HourTemp
                title={data.afternoon?.title}
                Icon={data.afternoon?.Icon}
                temp={data.afternoon?.temp}
            />
            <HourTemp
                title={data.night?.title}
                Icon={data.night?.Icon}
                temp={data.night?.temp}
            />
        </>
    );
};

export default HourTempAll;