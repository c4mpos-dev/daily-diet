import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "@screens/Home"
import { Details } from "@screens/Details"
import { NewMeal } from "@screens/NewMeal";
import { Feedback } from "@screens/Feedback";
import { Meal } from "@screens/Meal";
import { EditMeal } from "@screens/EditMeal";


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>

      <Screen 
        name="home"
        component={Home}
      />

      <Screen 
        name="meal"
        component={Meal}
      />

      <Screen 
        name="edit"
        component={EditMeal}
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