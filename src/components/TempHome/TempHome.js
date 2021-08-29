import React from 'react';
import './tempHome.scss';
import { toFixedTemp } from '../../utils/toFixedTemp';
import { useStatusColorContext } from '../../hooks/useStatusColor';

const TempHome = (props) => {
    const { data } = props;
    const { statusColor } = useStatusColorContext();
    return (
        <section className="container-temp-top">
            <p>{toFixedTemp(data.current?.temp_c) || 'N/A'}</p>
            <div className="temp-top-right">
                <p>°C</p>
                <div className="row-min-max-temp">
                    <p className={statusColor == 'snowy' ? 'textBlack' : 'textWithe'}>↑</p>
                    <p className={statusColor == 'snowy' ? 'textBlack' : 'textWithe'}>
                        {toFixedTemp(data.forecast?.forecastday[0]?.day?.maxtemp_c) || 'N/A'}°
                    </p>
                </div>
                <div className="row-min-max-temp">
                    <p className={statusColor == 'snowy' ? 'textBlack' : 'textWithe'}>↓</p>
                    <p className={statusColor == 'snowy' ? 'textBlack' : 'textWithe'}>
                        {toFixedTemp(data.forecast?.forecastday[0]?.day?.mintemp_c) || 'N/A'}°
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TempHome;