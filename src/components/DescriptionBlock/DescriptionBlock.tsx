import { FC } from 'react';
import styles from './Description.module.scss';

const DescriptionBlock: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <h2>Описание</h2>
        <p>
          Пара слов о вакансии. MAPS.ME — #1 офлайн-карты для путешественников. Наш проект
          opensource, он основан на OpenStreetMap (Википедия в картах), где мы один из ключевых
          контрибьюторов благодаря встроенному редактору карт для пользователей.
        </p>
      </div>
      <div className={styles.useful}>
        <h3>Чем будет полезен курс</h3>
        <p>
          Профессия «Developer» востребована во все времена и имеет ряд значительных преимуществ по
          сравнению со многими другими. Однако она сопряжена с некоторыми трудностями и рядом
          сложных задач:
        </p>
        <ul>
          <li>верстка, поддержка и развитие веб-интерфейсов;</li>
          <li>
            взаимодействие с разработчиками, тестировщиками, дизайнерами, менеджерами и другими
            членами команды.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DescriptionBlock;
