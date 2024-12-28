import { MealType } from "@screens/Home";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
        home: undefined;
        details: undefined;
        new: undefined;
        feedback: { isOnDiet: boolean };
        meal: { meal: MealType };
        edit: { meal: MealType };
    }
  }
}