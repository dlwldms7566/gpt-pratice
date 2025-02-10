import React from "react";
import styles from "../styles/TextSection.module.css";

const TextSection = ({ title, content, isInline = false, className }) => {
  return (
    <div className={`${className} ${isInline ? styles.inline : styles.block}`}>
      {isInline ? (
        <span>
          <span className={styles.Text_title}>{title} </span>
          <span className={styles.Text_content}>{content}</span>
        </span>
      ) : (
        <div>
          <div className={styles.Text_title}>{title}</div>
          <p className={styles.Text_content}>{content}</p>
        </div>
      )}
    </div>
  );
};

export default TextSection;
