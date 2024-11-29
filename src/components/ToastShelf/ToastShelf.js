import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toastList, handleDismiss } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toastList.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            type={toast.type}
            message={toast.message}
            handleDismiss={() => handleDismiss(toast.id)}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
