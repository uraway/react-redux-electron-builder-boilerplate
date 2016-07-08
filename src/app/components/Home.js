import React from 'react';
import version from '../../config/version';

const Home = () => {
  const styles = {
    content: {
      margin: '32px',
      fontFamily: 'Helvetica',
    }
  };
  return (
    <div style={styles.content}>
      <h1>Welcome to React Redux Electron Builder Boilerplate</h1>
      <p>VERSION {version}</p>
    </div>
  );
};

export default Home;
