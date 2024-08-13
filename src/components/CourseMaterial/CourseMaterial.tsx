import styles from './CourseMaterial.module.scss';
import { tags } from '../../constants/courseMaterial';
import { DownloadButton, PreLookButton } from '../../assets/CourseMaterial/buttons';
import ToolTipComponent from '../../tools/Tooltip';

const CourseMaterial = () => {

  function truncate(str:string, maxlengh: number) {
    return (str.length > maxlengh) ?
      <ToolTipComponent customClass={styles.right} text={str}>{<div>{str.slice(0, maxlengh - 1) + '…'}</div>}</ToolTipComponent> : str;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h2>Материалы к курсу</h2>
        <button>Скачать все</button>
      </div>

      <div className={styles.listTask}>
        {tags.map(({ id, icon, descr, fileName, name }) => (
          <div key={id} className={styles.task}>
            {icon}
            <div className={styles.desc}>
              <h3 >{truncate(name, 116)}</h3>
              <p >{fileName}</p>
            </div>
            <div className={styles.subTitle}>
              <p>{truncate(descr, 128)}</p>
            </div>
            <div className={styles.buttons}>
              <button>
                <PreLookButton />
              </button>
              <button>
                <DownloadButton />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.wigthspace}></div>
    </div>
  );
};

export default CourseMaterial;
