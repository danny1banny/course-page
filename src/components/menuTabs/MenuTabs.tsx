import { FC } from 'react';
import {tabs} from '../../constants/MenuTabs';
import styles from './MenuTabs.module.scss'

const MenuTabs:FC = () => {
  return (
    <div className={styles.tabs}>
      {tabs.map((tabs) => <button key={tabs.id}>{tabs.name}</button>)}
    </div>
  );
};

export default MenuTabs;