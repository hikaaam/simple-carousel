import { View } from "react-native";
import React from "react";
import { colors } from "../../constant/colors";

const Divider = (props: { color?: string; height?: number }) => {
  return (
    <View
      style={{
        width: "100%",
        height: props?.height || 1,
        backgroundColor: props?.color || colors.gray,
      }}
    />
  );
};

export default Divider;
