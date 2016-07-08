import React from 'react';
import { ipcRenderer } from 'electron';
import version from '../../config/version';

const Home = () => {
  const checkForUpdate = () => {
    ipcRenderer.send('check-update');
  };
  const styles = {
    content: {
      margin: '32px',
      fontFamily: 'Helvetica',
    }
  };
  return (
    <div style={styles.content}>
      <h1>Welcome to React Redux Electron Builder Boilerplate</h1>
      <p>CURRENT VERSION {version}</p>
      <button onClick={checkForUpdate}>
        Check for Update
      </button>
    </div>
  );
};

export default Home;
