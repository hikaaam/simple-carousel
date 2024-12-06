import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React from "react";

import Typography from "../shared/ui/Typography/Typography";
import Icon from "../shared/ui/Icon/Icon";
import Divider from "../shared/ui/Divider/Divider";
import MusicList from "../widget/MusicList/MusicList";
import { useGetSongList } from "../entities/songs/songsEntity";
import { colors } from "../shared/constant/colors";

const Home = () => {
  const { data, isFetching, isLoading, refetch } = useGetSongList();

  if (isLoading) {
    return (
      <View
        style={[
          style.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <ActivityIndicator color={colors.white} size={"large"} />
        <Typography style={{ marginTop: 20 }}>
          Getting Your Song Ready...
        </Typography>
      </View>
    );
  }
  return (
    <View style={style.container}>
      <Typography fontFamily="Poppins_800ExtraBold" style={style.textTitle}>
        <Icon name="music" size={14} /> Music
      </Typography>
      <Divider />
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={refetch}
            colors={[colors.white]}
            tintColor={colors.white}
            titleColor={colors.white}
            title="Refreshing..."
          />
        }
        data={data}
        renderItem={({ item }) => <MusicList {...item} />}
        keyExtractor={(item) => item?.title}
      />
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  textTitle: {
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
