import { createNativeStackNavigator } from "@react-navigation/native-stack"

import {Main} from "@screens/Main"


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="main"
        component={Main}
      />
    </Navigator>
  )
}