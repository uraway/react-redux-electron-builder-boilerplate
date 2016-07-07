import React from "react";
import styles from "../stylesheets/homepage.scss";

class HomepageComponent extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <h1 className={styles.title}>Welcome to Electron Base!</h1>
      </div>
    );
  }
}

export default HomepageComponent;
