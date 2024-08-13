import { FC } from 'react';
import styles from './Courseprogram.module.scss';
import * as Icons from '../../assets/CourseProgram/CoursProgramSvg';
import ToolTipComponent from '../../tools/Tooltip';

const text = 'Последний результат прохождения  доступен в разделе Оценка задания.';
const someText = 'Вы не можете пройти элемент, пока не пройден ляляляля ?';

const CourseProgram: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Программа курса</h2>
      <div className={styles.listTask}>
        <div className={styles.task}>
          <Icons.Cap />
          <div className={styles.desc}>
            <p className={styles.title}>Задание</p>
            <h3 className={styles.opt}>Твои компетенции</h3>
          </div>
          <div className={styles.time}>
            <Icons.Clock />
            <p>30 минут</p>
          </div>
          <div className={styles.progress}>
            <Icons.Okey />
            <p className={styles.okey}>Пройден (80/100)</p>

            <ToolTipComponent text={text}>
              <Icons.Attention />
            </ToolTipComponent>
          </div>
        </div>
        <div className={styles.listTask}>
          <div className={styles.task}>
            <Icons.List />
            <div className={styles.desc}>
              <p>Статья</p>
              <h3>Построение эффективной команды менеджеров в условиях рыночной экономики</h3>
            </div>
            <div className={styles.time}>
              <Icons.Clock />
              <p>1 час 30 минут</p>
            </div>
            <div className={styles.progress}>
              <Icons.Error />
              <p className={styles.error}>Не пройден</p>
            </div>
          </div>
        </div>
        <div className={styles.listTask}>
          <div className={styles.task}>
            <Icons.Microphone />
            <div className={styles.desc}>
              <p>Вебинар</p>
              <h3>Основы моделирования 3d моделей</h3>
            </div>
            <div className={styles.time}>
              <Icons.Clock />
              <p className={styles.grayFont}> - </p>
            </div>
            <div className={styles.progress}>
              <Icons.Time />
              <p className={styles.process}>В процессе (60%)</p>
            </div>
          </div>
        </div>
        <div className={styles.listTask}>
          <div className={styles.task}>
            <Icons.Check />
            <div className={styles.desc}>
              <div>
                <p>Тест</p> <ToolTipComponent  customClass={styles.right} text={someText}><Icons.Attention /></ToolTipComponent>
              </div>

              <h3>Построение эффективной команды</h3>
            </div>
            <div className={styles.time}>
              <Icons.Clock />
              <p className={styles.grayFont}>10 минут</p>
            </div>
            <div className={styles.progress}>
              <Icons.Minus />
              <p className={styles.notStart}>Не начато</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProgram;
