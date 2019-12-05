import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";
import style from './header.module.css';
import kyr from './icons/kyr.png';
import rus from './icons/rus.png';
const Header = () => {
    return (
        <Fragment>

            <header className={style.header}>
                    <div>
                        <NavLink className={style.link}  to="./../Content/Content.js">ГЛАВНАЯ</NavLink>
                    </div>
                    <div>
                        <NavLink className={style.link}   to="./../Legal/Legal.js">НОРМАТИВНО-ПРАВОВЫЕ АКТЫ</NavLink>
                    </div>
                    <div>
                        <NavLink className={style.link}   to="./../About/About.js">О ПРОФСОЮЗЕ</NavLink>
                    </div>
                    <div>
                        <NavLink className={style.link}   to="../PhotoReport/PhotoReport.js">ФОТО ОТЧЕТ</NavLink>
                    </div>
                    <div>
                        <NavLink className={style.link}   to="../Questions/Questions.js">ВОПРОСЫ И ОТВЕТЫ</NavLink>
                    </div>
                    <div>
                        <NavLink to='' className={style.btn}>
                            <img className={style.kyr} src={kyr} alt=""/>
                        </NavLink>
                        <NavLink to='' className={style.btn}>
                            <img className={style.rus} src={rus} alt=""/>
                        </NavLink>
                    </div>

            </header>

        </Fragment>








    );
};

export default Header;