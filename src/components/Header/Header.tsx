import { LogoHeader } from '../../assets/header/LogoHeader';
import { Arrow } from '../../assets/header/arrow';
import styles from './Header.module.scss';
import avatar from '../../assets/header/Avatar.png';
import { Flag } from '../../assets/header/Flag';
import { Calenadr } from '../../assets/header/calendar';
import { Bell } from '../../assets/header/bell';
import { Chat } from '../../assets/header/chat';
import { ChatCount } from '../../assets/header/Chat counter';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className={styles.wrapper}>
      <span className={styles.logoheader}>
        <LogoHeader />
      </span>
      <button className={styles.buttonMenu}>
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.500092 0.9C0.500092 0.402944 0.903035 0 1.40009 0H15.6001C16.0971 0 16.5001 0.402944 16.5001 0.9C16.5001 1.39706 16.0971 1.8 15.6001 1.8H1.40009C0.903035 1.8 0.500092 1.39706 0.500092 0.9ZM0.500092 5.9C0.500092 5.40294 0.903035 5 1.40009 5H15.5977C16.0948 5 16.4977 5.40294 16.4977 5.9C16.4977 6.39706 16.0948 6.8 15.5977 6.8H1.40009C0.903035 6.8 0.500092 6.39706 0.500092 5.9ZM14.8226 7.67713C15.3197 7.67715 15.7226 8.08011 15.7226 8.57717L15.7224 12.7275L16.7396 11.7102C17.0911 11.3587 17.661 11.3587 18.0124 11.7102C18.3639 12.0617 18.3639 12.6315 18.0124 12.983L15.4587 15.5367C15.1072 15.8882 14.5374 15.8882 14.1859 15.5367L11.6325 12.9833C11.281 12.6318 11.281 12.062 11.6325 11.7105C11.9839 11.359 12.5538 11.359 12.9052 11.7105L13.9224 12.7276L13.9226 8.57709C13.9226 8.08004 14.3256 7.67711 14.8226 7.67713ZM0.500092 10.9C0.500092 10.4029 0.903035 10 1.40009 10H9.59772C10.0948 10 10.4977 10.4029 10.4977 10.9C10.4977 11.3971 10.0948 11.8 9.59772 11.8H1.40009C0.903035 11.8 0.500092 11.3971 0.500092 10.9Z"
            fill="white"
          />
        </svg>
        <p>Меню</p>
      </button>
      <nav>
        <ul className={styles.menu}>
          <li>
            <a href="#">Моё обучение</a>
          </li>
          <li>
            <a href="#">Каталог</a>
          </li>
          <li>
            <a href="#">База Знаний</a>
          </li>
          <li>
            <a href="#">Моя команда</a>
          </li>
          <li>
            <a href="#">Оценка</a>
          </li>
        </ul>
      </nav>

      <div className={styles.submenu}>
        <button>
          <Flag />
          <Arrow />
        </button>
        <span>
          <Calenadr />
        </span>
        <span>
          <Bell />
        </span>
        <span className={styles.chat}>
          <span>
            <Chat />
          </span>
          <span className={styles.chatCount}>
            <ChatCount />
          </span>
        </span>
        <img src={avatar} alt="#" />
      </div>
    </header>
  );
};

export default Header;
