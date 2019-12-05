import React, {Fragment} from 'react';
import style from './PhotoReport.module.css';


const PhotoReport = () => {
    return (
        <Fragment>
            <div className={style.PhotoReport}>
                <header className={style.heading}>
                    <p className={style.heading_txt}>ФОТО ОТЧЕТ</p>
                </header>
            </div>
        </Fragment>

    );
};

export default PhotoReport;