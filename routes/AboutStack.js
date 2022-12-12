import { createStackNavigator } from "@react-navigation/stack";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

import About from "../screens/About";
import Header from "../shared/Header";

const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator();

const AboutStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About GameZone"
        component={About}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title="About Game Zone" />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
