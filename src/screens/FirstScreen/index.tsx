import React from "react";
import { injectIntl } from "react-intl";
import Icon from "../../components/Icon";
import styles from "./styles.module.scss";

const FirstScreen = ({ intl: { formatMessage } }) => {
  return (
    <div className={styles.firstScreen}>
      <h2>FirstScreen</h2>
      <p>Current language: {formatMessage({ id: "test.locale" })}</p>
      <Icon id="box" width="42" height="40" />
    </div>
  );
};

export default injectIntl(FirstScreen);
