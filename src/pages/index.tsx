import React from 'react';
import styles from './index.less';

export default (props: any) => {
  console.log(333, props);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div>{props.children}</div>
    </div>
  );
};
