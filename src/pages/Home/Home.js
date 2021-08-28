import React from 'react';
import { IoEarthOutline } from 'react-icons/all';
import { Button } from '../../components';
import './home.scss';

const Home = () => {
    return (
        <div className="container-home">
            <div className="container-body">
                <aside>
                    <p className="title">WEATHER</p>
                    <p className="subtitle">select a city</p>
                    <IoEarthOutline className="earth-logo" />
                </aside>
                <article>
                    <section>
                        <Button city="Dallol" />
                        <Button city="Fairbanks" />
                        <Button city="Londres" />
                        <Button city="Recife" />
                        <Button city="Vancouver" />
                        <Button city="Yakutsk" />
                    </section>
                </article>
            </div>
        </div>
    );
};

export default Home;