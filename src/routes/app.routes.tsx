import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {Main} from "@screens/Main"
import {Details} from "@screens/Details"
import { NewMeal } from "@screens/NewMeal";


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      

      <Screen 
        name="new"
        component={NewMeal}
      />

      <Screen 
        name="main"
        component={Main}
      />

      <Screen 
        name="details"
        component={Details}
      />
    </Navigator>
  )
}