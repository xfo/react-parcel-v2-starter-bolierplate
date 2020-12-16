import React from "react";
import "./utils/configAxios";
import "./utils/normalize.css";
import Localization from "./components/Localization";
import FirstScreen from './screens/FirstScreen';

const App = () => (
  <Localization>
    <FirstScreen />
  </Localization>
);

export default App;
