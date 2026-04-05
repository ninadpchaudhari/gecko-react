import React from 'react';
import { saveGraphJSON } from 'utils';
import SecondaryButton from 'core/components/SecondaryButton';
import styles from './styles.module.css';

export const DownloadGraph = ({ data }) => {
  return (
    <div className={styles['downloadGraph']}>
      <SecondaryButton
        text={'Export Graph JSON'}
        onClick={() => saveGraphJSON(data.Papers, data.Edges)}
      />
    </div>
  );
};
