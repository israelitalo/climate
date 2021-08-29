import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import api, { key_weatherapi } from '../../services/api';
import { getState } from '../../utils/getStateForCity';
import { climateList } from '../../constants/ClimateList';
import { AstroInformation, HourTemp, IconSvg } from '../../components';
import './cityClimate.scss';
import { WiCloud } from 'react-icons/wi';
import { KmhToMts } from '../../utils/convertKmHToMtS';
import { toFixedTemp } from '../../utils/toFixedTemp';
import { useStatusColorContext } from '../../hooks/useStatusColor';

const CityClimate = (props) => {

    const city = props.match.params?.city;

    const { statusColor, setStatusColor } = useStatusColorContext();

    const initialAstro = {
        wind: null,
        sunrise: null,
        sunset: null,
        humidity: null
    };

    const initialHours = {
        dawn: { title: 'dawn' },
        morgning: { title: 'morgning' },
        afternoon: { title: 'afternoon' },
        night: { title: 'night' }
    }

    const [climate, setClimate] = useState(null);
    const [astroValues, setAstro] = useState({ ...initialAstro });
    const [hoursValues, setHours] = useState({ ...initialHours });
    const [loading, setLoading] = useState('');

    const getIcon = (current) => {
        const itemList = climateList.find(item => item.code === current?.condition?.code);

        if (!itemList) {
            return WiCloud;
        }

        if (current.condition.icon.indexOf('day') > -1) {
            return itemList.IconDay;
        }

        return itemList.IconNight;
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

            const { astro, hour } = response.forecast?.forecastday[0];

            if (!hour || hour?.length < 1) {
                setHours({ ...initialHours });
            } else {
                const dawn = {
                    ...initialHours.dawn,
                    Icon: getIcon(hour[3]),
                    temp: toFixedTemp(hour[3]?.temp_c)
                };
                const morgning = {
                    ...initialHours.morgning,
                    Icon: getIcon(hour[9]),
                    temp: toFixedTemp(hour[9]?.temp_c)
                };
                const afternoon = {
                    ...initialHours.afternoon,
                    Icon: getIcon(hour[15]),
                    temp: toFixedTemp(hour[15]?.temp_c)
                };
                const night = {
                    ...initialHours.night,
                    Icon: getIcon(hour[21]),
                    temp: toFixedTemp(hour[21]?.temp_c)
                };

                setHours({
                    dawn,
                    morgning,
                    afternoon,
                    night
                });
            }

            if (!astro) {
                setAstro({ ...initialAstro });
            } else {
                setAstro({
                    wind: `${KmhToMts(Number(response.current?.wind_kph))}m/s`,
                    sunrise: astro.sunrise,
                    sunset: astro.sunset,
                    humidity: `${response.current?.humidity}%`
                });
            }

            const itemList = climateList.find(item => item.code === response.current?.condition?.code);

            if (itemList) {
                setStatusColor(itemList.status);
            }

            setClimate(response);


            console.log(response);
        }
        getClimate();
    }, [city]);

    const history = useHistory();

    if (!climate) {
        return (
            <div className="container-city-climate">
                <p className="textLoading">Loading...</p>
            </div>
        )
    }

    return (
        <div className={`container-city-climate ${statusColor}`}>
            <FaArrowLeft
                className={`button-back ${statusColor}`}
                onClick={() => history.goBack()}
            />
            <div className="container-body">
                <aside className="aside-top">
                    <p className="title">{city?.toUpperCase() || 'WEATHER'}</p>
                    <p className="subtitle">{climate.current?.condition?.text || 'not informed'}</p>
                    <section className="container-temp-top">
                        <p>{toFixedTemp(climate.current?.temp_c) || 'N/A'}</p>
                        <div className="temp-top-right">
                            <p>°C</p>
                            <div className="row-min-max-temp">
                                <p className={statusColor == 'snowy' ? 'textBlack' : 'textWithe'}>↑</p>
                                <p className={statusColor == 'snowy' ? 'textBlack' : 'textWithe'}>
                                    {toFixedTemp(climate.forecast?.forecastday[0]?.day?.maxtemp_c) || 'N/A'}°
                                </p>
                            </div>
                            <div className="row-min-max-temp">
                                <p className={statusColor == 'snowy' ? 'textBlack' : 'textWithe'}>↓</p>
                                <p className={statusColor == 'snowy' ? 'textBlack' : 'textWithe'}>
                                    {toFixedTemp(climate.forecast?.forecastday[0]?.day?.mintemp_c) || 'N/A'}°
                                </p>
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
                            title={hoursValues.dawn?.title}
                            Icon={hoursValues.dawn?.Icon}
                            temp={hoursValues.dawn?.temp}
                        />
                        <HourTemp
                            title={hoursValues.morgning?.title}
                            Icon={hoursValues.morgning?.Icon}
                            temp={hoursValues.morgning?.temp}
                        />
                        <HourTemp
                            title={hoursValues.afternoon?.title}
                            Icon={hoursValues.afternoon?.Icon}
                            temp={hoursValues.afternoon?.temp}
                        />
                        <HourTemp
                            title={hoursValues.night?.title}
                            Icon={hoursValues.night?.Icon}
                            temp={hoursValues.night?.temp}
                        />
                    </section>
                    <AstroInformation data={astroValues} />
                </article>
            </div>
        </div>
    );
};

export default CityClimate;