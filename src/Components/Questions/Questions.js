import React, {Fragment} from 'react';
import style from './Question.module.css';


const Questions = () => {
    return (
        <Fragment>
            <div className={style.Question}>
                <header className={style.heading}>
                    <p className={style.heading_txt}>ВОПРОСЫ И ОТВЕТЫ</p>
                </header>
            </div>
        </Fragment>

    );
};

export default Questions;