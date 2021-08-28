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
    const [backgroundClassName, setBackgroundClassName] = useState('');
    const [loading, setLoading] = useState('');

    const getIcon = (current) => {
        const itemList = climateList.find(item => item.code === current.condition.code);
        if (current.condition.icon.indexOf('day') > -1) {
            return itemList.IconDay;
        } else {
            return itemList.IconNight;
        }
    }

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
                return alert(response.error.message);
            }
            setClimate(response);
            const itemList = climateList.find(item => item.code === response.current.condition.code);
            if (itemList) {
                setBackgroundClassName(itemList.status);
            }
            console.log(response);
        }
        getClimate();
    }, [city]);

    const history = useHistory();

    if (!climate) {
        return (
            <div className="container-city-climate">
                <p>Carregando...</p>
            </div>
        )
    }

    return (
        <div className={`container-city-climate ${backgroundClassName}`}>
            <FaArrowLeft className="button-back" onClick={() => history.goBack()} />
            <div className="container-body">
                <aside>
                    <p className="title">{city?.toUpperCase() || 'WEATHER'}</p>
                    <p className="subtitle">select a city</p>
                </aside>
                <article>
                    {climate &&
                        <IconSvg
                            Icon={getIcon(climate.current)}
                        />
                    }
                </article>
            </div>
        </div>
    );
};

export default CityClimate;