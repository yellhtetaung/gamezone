import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { globalStyles, images } from "../styles/Global";
import Card from "../shared/Card";

const ReviewDetails = ({ navigation, route }) => {
  // const pressHandler = () => {
  //   navigation.goBack();
  // };

  const rating = route.params.rating;

  return (
    <View style={globalStyles.container}>
      {/*Passing Data*/}
      <Card>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text>Game Zone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
      {/* <Button title="go to home" onPress={() => pressHandler()} /> */}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {},
});

export default ReviewDetails;
