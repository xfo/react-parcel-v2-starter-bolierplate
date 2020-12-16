import React from "react";
import { injectIntl } from "react-intl";
import Icon from "../../components/Icon";

const FirstScreen = ({ intl: { formatMessage } }) => {
  return (
    <div>
      <h2>FirstScreen</h2>
      {formatMessage({ id: "test.locale" })}
      <Icon type="box" width="42" height="40" />
    </div>
  );
};

export default injectIntl(FirstScreen);
