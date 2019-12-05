import React from 'react';
import {NavLink} from "react-router-dom";
import style from "../SlaidBar/SlaidBar.module.css";
import Sections from "./Sections/Sections";
import Materials from "./Materials/Materials";
import Links from "../Links/Links";
import Calendar from "../Calendar/Calendar";

const SlaidBar = () => {
    return (
        <div className={style.slaidBar}>
            <div className={style.boss}>
                <p>Председатель</p>
                <img src="data:image/jpeg;base64,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" alt=""/>
                <a className={style.boss_txt} href="">ТОКТОГУЛОВ АСЫЛБЕК ТОКТОГУЛОВИЧ</a>
            </div>

            <Sections/>
            <Materials/>
            <div className="calendar">
                <Calendar options={{minDate: '2017-01-01'}} />
            </div>
            <Links/>

        </div>
    );
};

export default SlaidBar;