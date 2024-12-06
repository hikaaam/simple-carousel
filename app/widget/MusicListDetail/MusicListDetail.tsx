import { Dimensions } from "react-native";
import React, { useRef, useState } from "react";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { iSong } from "../../shared/constant/interface";
import MusicDetail from "../../features/MusicDetail/MusicDetail";
const { width, height } = Dimensions.get("window");

interface iMusicListDetail {
  list?: iSong[];
  title?: string;
}

const MusicListDetail = (props: iMusicListDetail) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<ICarouselInstance>(null);
  return (
    <>
      <Carousel
        ref={carouselRef}
        width={width}
        height={height}
        data={props?.list ?? []}
        style={{
          width,
        }}
        renderItem={(props) => (
          <MusicDetail {...props} activeIndex={activeIndex} />
        )}
        onSnapToItem={setActiveIndex}
      />
    </>
  );
};

export default MusicListDetail;
