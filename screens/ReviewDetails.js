import { StatusBar } from "expo-status-bar";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/Global";

const ReviewDetails = ({ navigation, route }) => {
  // const pressHandler = () => {
  //   navigation.goBack();
  // };

  return (
    <View style={globalStyles.container}>
      {/*Passing Data*/}
      <Text>{route.params.title}</Text>
      <Text>{route.params.body}</Text>
      <Text>{route.params.rating}</Text>
      {/* <Button title="go to home" onPress={() => pressHandler()} /> */}
      <StatusBar style="auto" />
    </View>
  );
};

export default ReviewDetails;
