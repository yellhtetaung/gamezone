import { createStackNavigator } from "@react-navigation/stack";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

import Header from "../shared/Header";

const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GameZone"
        component={Home}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title="Game Zone" />
          ),
          // headerStyle: { backgroundColor: "#e9e9e9" },
        }}
      />

      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: "Review Details",
          // headerStyle: { backgroundColor: "#e9e9e9" },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
