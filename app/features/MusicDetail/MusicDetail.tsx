import { View, Image, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { colors } from "../../shared/constant/colors";
import Typography from "../../shared/ui/Typography/Typography";
import { iSong } from "../../shared/constant/interface";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "../../shared/ui/Icon/Icon";

const { width, height } = Dimensions.get("window");

export interface iMusicDetail {
  item: Partial<iSong>;
  index: number;
  activeIndex: number;
}

const MusicDetail = ({ index, item, activeIndex }: iMusicDetail) => {
  const [play, setPlay] = useState(true);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withSpring(activeIndex === index ? 1 : 0.9, {
          velocity: activeIndex === index ? 20 : 0,
          duration: 300,
        }),
      },
    ],
  }));
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Image
        src={item?.img}
        style={[styles.img, { borderRadius: activeIndex === index ? 0 : 10 }]}
      />
      <View
        style={{
          position: "absolute",
          bottom: 30,
          backgroundColor: colors.gray,
          padding: 20,
          width,
        }}
      >
        <View>
          <Typography fontFamily="Poppins_700Bold">{item?.title}</Typography>
          <Typography fontFamily="Poppins_200ExtraLight">
            Artist . {item?.artist}
          </Typography>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Icon name="skip-previous-outline" color={colors.white} size={30} />
          <TouchableOpacity
            onPress={() => {
              setPlay(!play);
            }}
          >
            <Icon
              name={activeIndex === index && play ? "pause" : "play-outline"}
              color={colors.white}
              size={30}
            />
          </TouchableOpacity>

          <Icon name="skip-next-outline" color={colors.white} size={30} />
        </View>
      </View>
    </Animated.View>
  );
};

export default MusicDetail;

const styles = StyleSheet.create({
  container: {
    width,
  },
  img: {
    width,
    height: height - 50,
    backgroundColor: colors.gray,
  },
});
