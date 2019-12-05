import React, {Fragment} from 'react';
import style from './News.module.css'
import Example from "./Carousel";


const Content = () => {
    return (
        <Fragment>
            <div className={style.block_news}>
                <header className={style.heading}>
                    <p className={style.heading_txt}>НОВОСТИ И СОБЫТИЯ</p>
                </header>
            </div>
        </Fragment>

    );
};

export default Content;