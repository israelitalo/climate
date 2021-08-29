import React from 'react';
import { Card } from './components';
import './astroInformation.scss';

const AstroInformation = (props) => {

    const { data } = props;

    return (
        <section className="astro-container">
            <Card
                title="wind speed"
                value={data.wind}
            />
            <Card
                title="sunrise"
                value={data.sunrise}
                after
            />
            <Card
                title="sunset"
                value={data.sunset}
                after
            />
            <Card
                title="humidity"
                value={data.humidity}
                after
            />
        </section>
    );
};

export default AstroInformation;