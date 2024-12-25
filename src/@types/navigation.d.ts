import { MealType } from "@screens/Main";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
        main: undefined;
        details: undefined;
        new: undefined;
        feedback: { isOnDiet: boolean };
        meal: { meal: MealType };
        edit: { meal: MealType };
    }
  }
}