import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/Global";

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default About;
