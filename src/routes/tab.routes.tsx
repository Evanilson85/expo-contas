import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/home";
import { Financial } from "../screens/financial";
import { Profile } from "../screens/profile";

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function TabRouters () {
  return (
    <Tab.Navigator screenOptions={{ 
      headerShown:false,
      tabBarActiveTintColor: '#fff',
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 14,
        left: 14,
        right: 14,
        elevation: 0,
        borderRadius: 14,
        height: 60,
        backgroundColor: '#22c55e'
      }
    }}>
      <Tab.Screen name="Home" component={Home}  options={{
        headerShown: false,
        tabBarIcon : ({color, size, focused}) => {
          if(focused) {
            return <Ionicons name="home" size={size} color={color}/>
          }
          return <Ionicons name="home-outline" size={size} color={color}/>
        }
      }}
      />
      <Tab.Screen name="Financial" component={Financial}  options={{
        headerShown: false,
        tabBarIcon : ({color, size, focused}) => {
          if(focused) {
            return <Ionicons name="home" size={size} color={color}/>
          }
          return <Ionicons name="home-outline" size={size} color={color}/>
        }
      }} />
      <Tab.Screen name="Profile" component={Profile}  options={{
        headerShown: false,
        tabBarIcon : ({color, size, focused}) => {
          if(focused) {
            return <Ionicons name="home" size={size} color={color}/>
          }
          return <Ionicons name="home-outline" size={size} color={color}/>
        }
      }} />
    </Tab.Navigator>
  );
}
