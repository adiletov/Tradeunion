import React from 'react';
import style from './Links.module.css';
import Fpk from './img/fpk.jpg';
import Gov from './img/govkg.jpg';
import Kenesh from './img/keneshkg.jpg';
import Edu from './img/edugovkg.jpg';
import Mopron from './img/mopronru.jpg';
import Eseur from './img/eseurru.jpg';
import Uaseb from './img/uaeseborg.jpg';
import Vkp from './img/vkpru.jpg';
import Etuse from './img/csee-etuceorg.jpg';
import Trade from './img/iloorg.jpg'
const Links = () => {
    return (
        <div className={style.links}>
            <p className={style.txt}>НАШИ ПАРТНЕРЫ</p>
            <a href="http://fpk.kg/">
                <img className={style.img} src={Fpk} alt="das"/>
            </a>
            <a href="https://www.gov.kg/ky">
                <img className={style.img} src={Gov} alt="das"/>
            </a>
            <a href="http://www.kenesh.kg/">
                <img className={style.img} src={Kenesh} alt="das"/>
            </a>
            <a href="http://www.edu.gov.kg/">
                <img className={style.img} src={Edu} alt="das"/>
            </a>
            <a href="http://www.mopron.ru/">
                <img className={style.img} src={Mopron} alt="das"/>
            </a>
            <a href="http://www.eseur.ru/">
                <img className={style.img} src={Eseur} alt="das"/>
            </a>
            <a href="http://uaeseb.org/">
                <img className={style.img} src={Uaseb} alt="das"/>
            </a>
            <a href="http://vkp.ru/">
                <img className={style.img} src={Vkp} alt="das"/>
            </a>
            <a href="http://csee-etuce.org/ru/">
                <img className={style.img} src={Etuse} alt="das"/>
            </a>
            <a href="http://www.ilo.org/public/russian/region/eurpro/moscow/index.htm">
                <img className={style.img} src={Trade} alt="das"/>
            </a>
        </div>
    );
};

export default Links;