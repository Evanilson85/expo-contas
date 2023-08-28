import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Financial } from "../screens/financial";
import { CardCreateScreen } from '../screens/cardCreate';
import { Notification } from '../screens/notification';
import TabRouters from './tab.routes';
import { FormCreateCard } from '../screens/cardCreate/form';

const Stack = createStackNavigator();

type AppRoutes = {
  homes: undefined;
  Financial: undefined;
  CardCreateScreen: undefined;
  history: undefined;
  Notification: undefined;
  FormCreateCard: undefined;
}

export type AppNavigatorRoutesProps = StackNavigationProp<AppRoutes>;

export const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PageHome" component={TabRouters} />
      <Stack.Screen name="CardCreateScreen" component={CardCreateScreen} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="FormCreateCard" component={FormCreateCard} />
      {/* <Stack.Screen name="PageFinancial" component={TabRouters} /> */}
      {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}