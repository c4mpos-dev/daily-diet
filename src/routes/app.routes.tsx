import { createNativeStackNavigator } from "@react-navigation/native-stack"

import {Main} from "@screens/Main"
import {Details} from "@screens/Details"


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="details"
        component={Details}
      />
      
      <Screen 
        name="main"
        component={Main}
      />
    </Navigator>
  )
}