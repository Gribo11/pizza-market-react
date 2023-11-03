import React from "react";
import styles from "./NotFoundBlock.module.scss";

const NotFound:React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Not Found
      </h1>
      <p className={styles.description}>
        Unfortunately this page is not available in our onlin
      </p>
    </div>
  );
};
export default NotFound;
