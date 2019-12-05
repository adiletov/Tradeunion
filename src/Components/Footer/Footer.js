import React from 'react';
import style from './Footer.module.css';
import facebook from './img/facebook.png';
import twitter from './img/twitter.jpeg';
import vk from './img/Vk.png';
import ok from './img/ok.png';
import google from './img/google.png';
import ljournal from './img/ljournal.png';
import mail from './img/mail.png';
import linkedin from './img/linkedin.png';
import print from './img/print.jpeg';
import bookmark from './img/bookmark.png';
import message from './img/message.jpeg';


const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.address}>
                <p>
                    119119, Кыргызская Республика, <br/>
                    Бишкек, пр. Чуй 207, кабинет 51 <br/>
                    Тел.: 0 (312) 62-57-46 <br/>
                    Факс: 0 (312) 62-57-46 <br/>
                    Email: <a href="mailto:tueswk@mail.ru">tueswk@mail.ru</a>
                </p>
            </div>
            <div className={style.icons}>
                <a href="#" title="facebook"><img src={facebook} alt="Facebook"/></a>
                <a href="#" title="twitter"><img src={twitter} alt="twitter"/></a>
                <a href="#" title="vk"><img src={vk} alt="vk"/></a>
                <a href="#" title="ok"><img src={ok} alt="ok"/></a>
                <a href="#" title="google"><img src={google} alt="google"/></a>
                <a href="#" title="ljournal"><img src={ljournal} alt="ljournal"/></a>
                <a href="#" title="mail"><img src={mail} alt="mail"/></a>
                <a href="#" title="Linkedin"><img src={linkedin} alt="linkedin"/></a>
                <a href="#" title="Печатать"><img src={print} alt="print"/></a>
                <a href="#" title="Закладки"><img src={bookmark} alt="bookmark"/></a>
                <a href="#" title="Отправить на Email.ru"><img src={message} alt="message"/></a>
            </div>
            <div>
                <a
                    href="http://www.liveinternet.ru/click"
                    target="_blank">
                    <img src="//counter.yadro.ru/hit?t27.6;r;s1680*1050*24;uhttp%3A//tradeunion-ed.kg/ru/index.html;0.1562071253296653"
                         alt="" title="LiveInternet: показано количество просмотров и посетителей"
                         border="1"
                         width="88"
                         height="120"/>
                    </a>
            </div>
        </footer>
    );
};

export default Footer;