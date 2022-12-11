import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ navigation, title }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={30}
        style={styles.icon}
        onPress={openMenu}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    minWidth: "100%",
    height: "100%",
    minHeight: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    fontFamily: "nunito-bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },

  icon: {
    position: "absolute",
    left: 0,
  },
});

export default Header;
