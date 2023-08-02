import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/home";
import { Financial } from "../screens/financial";
import { Profile } from "../screens/profile";

import HomeSvg from '../assets/tabs/home.svg'
import HomeSvgWhite from '../assets/tabs/homeWhite.svg'
import Config from '../assets/tabs/config.svg'
import ConfigWhite from '../assets/tabs/configWhite.svg'
import { ButtonTab } from "./buttonTab";

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function TabRouters () {
  return (
    <Tab.Navigator screenOptions={{ 
      headerShown:false,
      tabBarActiveTintColor: '#2E1560',
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        borderRadius: 0,
        height: 60,
        backgroundColor: '#fff'
        // backgroundColor: '#2E1560'
      }
    }}>
      <Tab.Screen name="Home" component={Home}  options={{
        headerShown: false,
        tabBarIcon : ({ focused }) => {
          if(focused) {
            return <HomeSvg />
          } else {
            return <HomeSvgWhite />
          }
        }
        
      }}
      />
      <Tab.Screen name="Financial" component={Financial}  options={{
        headerShown: false,
        tabBarIcon : ({color, size, focused}) => {
          return <ButtonTab />
          // return <Ionicons name="home-outline" size={size} color={color}/>
        }
      }} />
      <Tab.Screen name="Profile" component={Profile}  options={{
        headerShown: false,
        tabBarIcon : ({color, size, focused}) => {
          if(focused) {
            return <Config/>
          }
          return <ConfigWhite/>
        }
      }} />
    </Tab.Navigator>
  );
}
