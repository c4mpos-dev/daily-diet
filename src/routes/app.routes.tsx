import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Main } from "@screens/Main"
import { Details } from "@screens/Details"
import { NewMeal } from "@screens/NewMeal";
import { Feedback } from "@screens/Feedback";


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>

      <Screen 
        name="main"
        component={Main}
      />

      <Screen 
        name="details"
        component={Details}
      />

      <Screen 
        name="new"
        component={NewMeal}
      />

      <Screen 
        name="feedback"
        component={Feedback}
      />
    </Navigator>
  )
}