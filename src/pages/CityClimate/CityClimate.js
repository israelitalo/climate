import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import api, { key_weatherapi } from '../../services/api';
import { getState } from '../../utils/getStateForCity';
import { climateList } from '../../constants/ClimateList';
import { IconSvg } from '../../components';
import './cityClimate.scss';

const CityClimate = (props) => {

    const city = props.match.params?.city;

    const [climate, setClimate] = useState(null);

    useEffect(() => {
        const getClimate = async () => {
            let params = {
                q: `${city},${getState(city)}`,
                days: 1,
                aqi: 'no',
                alerts: 'no',
                key: key_weatherapi
            }
            const response = await api.getClimateCity(params);
            if (response.error) {
                alert(response.error.message);
            }
            setClimate(response);
            console.log(response);
        }
        getClimate();
    }, []);

    const history = useHistory();

    return (
        <div className={`container-city-climate ${'sunny'}`}>
            <FaArrowLeft className="button-back" onClick={() => history.goBack()} />
            <div className="container-body">
                <aside>
                    <p className="title">{city?.toUpperCase() || 'WEATHER'}</p>
                    <p className="subtitle">select a city</p>
                </aside>
                <article>
                    <IconSvg Icon={climateList[11].IconNight} />
                </article>
            </div>
        </div>
    );
};

export default CityClimate;