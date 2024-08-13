import styles from './CourseCover.module.scss';
import avatar from '../../assets/header/Avatar.png';
import { ArrowBack } from '../../assets/CourseCover/arrowBack';
import { tags } from '../../constants/CourseCover';
import { FC } from 'react';
import { ArrowDown } from '../../assets/CourseCover/ArrowDown';
import { Star } from '../../assets/CourseCover/star';
import { Education } from '../../assets/CourseCover/education';
import { Calenadr } from '../../assets/CourseCover/calendar';
import { Clock } from '../../assets/CourseCover/clock';
import { Refresh } from '../../assets/CourseCover/refresh';

const CourseCover: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.opacity}>
        <div className={styles.info}>
          <button className={styles.back}>
            <span>
              <ArrowBack />
            </span>
            <p>Назад</p>
          </button>
          <div className={styles.list}>
            <ul>
              {tags.map((obj) => (
                <li key={obj.id}>{obj.name}</li>
              ))}
            </ul>
            <button>
              2
              <span>
                <ArrowDown />
              </span>
            </button>
          </div>
          <h1>Прохождение базовых тестов для компетенций</h1>
        </div>
        <ul className={styles.infoForCourse}>
          <li>
            <img src={avatar} />
            <div>
              <h2>Алена Малюченко</h2>
              <p>Куратор курса</p>
            </div>
          </li>
          <li>
            <img src={avatar} />
            <div>
              <h2>Роман Левченко</h2>
              <p>Автор</p>
            </div>
          </li>
        </ul>
        <ul className={styles.rating}>
          <li>
            <span>
              <Star />
            </span>
            4.5
          </li>
          <li>
            <span>
              <Education />
            </span>
            Онлайн курс
          </li>
          <li>
            <span>
              <Refresh />
            </span>
            Попыток: 3
          </li>
          <li>
            <span>
              <Calenadr />
            </span>
            с 16.03.22 09:00 - до 17.03.22 12:00
          </li>
          <li>
            <span>
              <Clock />
            </span>
            1 час
          </li>
        </ul>
        <button className={styles.start}>Начать</button>
      </div>
    </div>
  );
};

export default CourseCover;
