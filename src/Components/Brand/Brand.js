import React from 'react';
import style from './Brand.module.css';
const Brand = () => {
    return (
        <div className={style.brandBlock}>
            <img src="http://tradeunion-ed.kg/assets/templates/tradeunion/images/logotype.png" alt=""/>
            <p className={style.brand_txt}>ЦЕНТРАЛЬНЫЙ КОМИТЕТ ПРОФСОЮЗА</p>
            <p className={style.brand_text}>РАБОТНИКОВ ОБРАЗОВАНИЯ И НАУКИ КЫРГЫЗСКОЙ РЕСПУБЛИКИ</p>
        </div>
    );
};

export default Brand;