import { View, Text, Dimensions } from "react-native";
import React, { useRef, useState } from "react";
import Typography from "../../shared/ui/Typography/Typography";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MusicCard from "../../features/MusicCard/MusicCard";
import { iSong } from "../../shared/constant/interface";
import Divider from "../../shared/ui/Divider/Divider";
import DetailModal from "../../features/DetailModal/DetailModal";

interface iMusicList {
  list: iSong[];
  title: string;
}

const MusicList = (props: iMusicList) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<ICarouselInstance>(null);
  const [modal, setModal] = useState(false);

  const onPress = (index: number) => {
    carouselRef.current?.scrollTo({
      index,
      animated: true,
    });
    setTimeout(() => {
      setModal(true);
    }, 500);
  };
  return (
    <View style={{ marginTop: 10 }}>
      <View style={{ marginVertical: 20, paddingHorizontal: 20 }}>
        <Typography
          fontFamily="Poppins_700Bold"
          style={{ fontSize: 14, marginBottom: 10 }}
        >
          {props?.title}
        </Typography>
        <Carousel
          ref={carouselRef}
          width={220}
          height={250}
          data={props?.list}
          style={{
            width: Dimensions.get("window").width,
          }}
          renderItem={(props) => (
            <MusicCard
              {...props}
              activeIndex={activeIndex}
              onPress={() => {
                onPress(props?.index);
              }}
            />
          )}
          onSnapToItem={setActiveIndex}
        />
      </View>
      <Divider />
      <DetailModal
        activeIndex={activeIndex}
        list={props?.list ?? []}
        title={props?.title ?? ""}
        onClose={() => setModal(false)}
        visible={modal}
      />
    </View>
  );
};

export default MusicList;
