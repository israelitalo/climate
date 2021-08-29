import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import api, { key_weatherapi } from '../../services/api';
import { getState } from '../../utils/getStateForCity';
import { climateList } from '../../constants/ClimateList';
import { HourTemp, IconSvg } from '../../components';
import './cityClimate.scss';
import { WiSnowWind } from 'react-icons/wi';

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
            };
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
            <FaArrowLeft
                className={`button-back ${backgroundClassName}`}
                onClick={() => history.goBack()}
            />
            <div className="container-body">
                <aside className="aside-top">
                    <p className="title">{city?.toUpperCase() || 'WEATHER'}</p>
                    <p className="subtitle">{climate.current?.condition?.text || 'not informed'}</p>
                    <section className="container-temp-top">
                        <p>{climate.current?.temp_c?.toFixed() || 'N/A'}</p>
                        <div className="temp-top-right">
                            <p>°C</p>
                            <div className="row-min-max-temp">
                                <p>↑</p>
                                <p>{climate.forecast?.forecastday[0]?.day?.maxtemp_c?.toFixed() || 'N/A'}°</p>
                            </div>
                            <div className="row-min-max-temp">
                                <p>↓</p>
                                <p>{climate.forecast?.forecastday[0]?.day?.mintemp_c?.toFixed() || 'N/A'}°</p>
                            </div>
                        </div>
                    </section>
                    <IconSvg
                        Icon={getIcon(climate.current)}
                    />
                </aside>
                <article>
                    <section className="temp-hour-container-main">
                        <HourTemp
                            title="dawn"
                            Icon={WiSnowWind}
                            temp="13"
                        />
                        <HourTemp
                            title="morgning"
                            Icon={WiSnowWind}
                            temp="13"
                        />
                        <HourTemp
                            title="afternoon"
                            Icon={WiSnowWind}
                            temp="13"
                        />
                        <HourTemp
                            title="night"
                            Icon={WiSnowWind}
                            temp="13"
                        />
                    </section>
                    <section className="astro-container">
                        <div className="astro-column">
                            <div className="astro-column-content">
                                <div className="astro-content-children">
                                    <p>wind speed</p>
                                    <p>5.1 m/s</p>
                                </div>
                            </div>
                        </div>
                        <div className="astro-column">
                            <div className="after-test astro-column-content">
                                <div className="astro-content-children">
                                    <p>sunrise</p>
                                    <p>5:14 AM</p>
                                </div>
                            </div>
                        </div>
                        <div className="astro-column">
                            <div className="after-test astro-column-content">
                                <div className="astro-content-children">
                                    <p>sunset</p>
                                    <p>5:14 AM</p>
                                </div>
                            </div>
                        </div>
                        <div className="astro-column">
                            <div className="after-test astro-column-content">
                                <div className="astro-content-children">
                                    <p>humidity</p>
                                    <p>52%</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    );
};

export default CityClimate;