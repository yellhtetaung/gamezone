import { createStackNavigator } from "@react-navigation/stack";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

import About from "../screens/About";

const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="About GameZone" component={About} />
    </Stack.Navigator>
  );
};

export default AboutStack;
