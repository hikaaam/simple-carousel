import React, { useMemo } from "react";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { iIcon } from "./interface";

const Icon = (props: iIcon) => {
  const GetIcon = useMemo(() => {
    switch (props?.type) {
      case "Ionicons":
        return <Ionicons {...props} />;
      case "FontAwesome5":
        return <FontAwesome5 {...props} />;
      default:
        return <MaterialCommunityIcon {...props} />;
    }
  }, [props]);

  return GetIcon;
};

export default Icon;
