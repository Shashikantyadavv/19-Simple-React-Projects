import React, {useContext } from "react";
import LightDark from "../light-dark-mode/LightDark";
import TicTac from "../tic-tac-toe/TicTac";
import Generator from "../randomcolorgenerator/Generator";
import { FeatureFlagsContext } from "./context/Context";


const FeatureFlag = () => {
  const {enabledFlags} = useContext(FeatureFlagsContext);
  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDark />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTac />,
    },
    {
      key: "showRandomColorGenerator",
      component: <Generator />,
    },
  ];

  const checkEnabledFlags = (getKey) => {
    return enabledFlags[getKey];
  };
  return (
    <div>
      <h1>Feature Flag</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key )? componentItem.component : null)
      }
    </div>
  );
};

export default FeatureFlag;
