import { View, Modal, SafeAreaView, StyleSheet, Pressable } from "react-native";
import React, { useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import { colors } from "../../shared/constant/colors";
import MusicListDetail from "../../widget/MusicListDetail/MusicListDetail";
import Typography from "../../shared/ui/Typography/Typography";
import Icon from "../../shared/ui/Icon/Icon";
import { iSong } from "../../shared/constant/interface";

interface iDetailModal {
  title: string;
  list: iSong[];
  activeIndex: number;
  onClose: () => void;
  visible: boolean;
}

const DetailModal = (props: iDetailModal) => {
  const data = useMemo(() => {
    return props.list
      .slice(props.activeIndex)
      .concat(props.list.slice(0, props.activeIndex));
  }, [props?.list, props?.activeIndex]);
  if (!props?.visible) return null;
  return (
    <Modal
      style={{ flex: 1 }}
      visible={props?.visible}
      onRequestClose={props?.onClose}
      animationType="slide"
    >
      <StatusBar style="dark" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: colors.white }}>
          <View style={styles.header}>
            <Pressable onPress={props?.onClose}>
              <Icon name="arrow-left" size={20} />
            </Pressable>
            <Typography
              fontFamily="Poppins_800ExtraBold"
              style={styles.textHeader}
            >
              {props?.title}
            </Typography>
          </View>
          <MusicListDetail list={data} title={props?.title} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default DetailModal;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 10,
  },
  textHeader: {
    fontSize: 14,
    color: colors.black,
    marginLeft: 10,
  },
});
