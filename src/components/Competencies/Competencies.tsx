import { FC } from 'react';
import styles from './Competencies.module.scss';
import { competencies } from '../../constants/Competencies';
import { ArrowDown } from '../../assets/CourseCover/ArrowDown';

const Competencies: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Компетенции</h2>
      <ul>
        {competencies.map((obj) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
        <button>Показать еще <ArrowDown/></button>
      </ul>
    </div>
  );
};

export default Competencies;
