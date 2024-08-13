import { FC, useState } from 'react';
import { tabs } from '../../constants/MenuTabs';
import styles from './MenuTabs.module.scss';

const MenuTabs: FC = () => {
  const [active, setActive] = useState('Описание');

  return (
    <div className={styles.tabs}>
      {tabs.map((tabs) => (
        <button
          className={tabs.name === active ? styles.class : ''}
          onClick={() => setActive(tabs.name)}
          key={tabs.id}
        >
          {tabs.name}
        </button>
      ))}
    </div>
  );
};

export default MenuTabs;
