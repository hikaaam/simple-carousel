import { View, Image, StyleSheet } from "react-native";
import React from "react";
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

export interface iMusicCard {
  item: Partial<iSong>;
  index: number;
  activeIndex: number;
  onPress: () => void;
}

const MusicCard = ({ index, item, activeIndex, onPress }: iMusicCard) => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withSpring(activeIndex === index ? 1 : 0.85, {
          velocity: activeIndex === index ? 15 : 0,
          duration: 350,
        }),
      },
    ],
  }));
  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={[styles.container, animatedStyle]}
        entering={FadeIn.delay(index * 200)}
        exiting={FadeOut.delay(index * 200)}
      >
        <Image src={item?.img} style={styles.img} />
        <View style={styles.desc}>
          <Typography fontFamily="Poppins_700Bold">{item?.title}</Typography>
          <Typography fontFamily="Poppins_200ExtraLight">
            Artist . {item?.artist}
          </Typography>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default MusicCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
  },
  img: {
    width: 200,
    aspectRatio: 1,
    backgroundColor: colors.gray,
  },
  desc: {
    width: 200,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray,
  },
});
