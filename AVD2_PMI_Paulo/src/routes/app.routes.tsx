import { createBottomTabNavigator, BottomTabNavigationProp }
  from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons'
import { Resume } from '../pages/Resumo'
import { Register } from '../pages/Register'


type AppRoutes = {
  Resume: undefined;
  Register: undefined;
}

export type AppNavigationRoutesProp =
  BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  const theme = useTheme()

  return (
    <Navigator screenOptions={{
      headerShown: false,
      // tabBarShowLabel: false,
      tabBarLabelPosition: 'beside-icon',
      tabBarActiveTintColor: theme.colors.secondary,
      tabBarInactiveTintColor: theme.colors.text,
      tabBarStyle: {
        height: 88
      }
    }}>
      
      <Screen
        name='Register'
        component={Register}
        options={{
          tabBarLabel: 'Register',
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name='add'
              size={size}
              color={color}
              />
            )
          }}
        />

      <Screen
        name='Resume'
        component={Resume}
        options={{
          tabBarLabel: 'Resume',
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name='home'
              size={size}
              color={color}
            />
          )
        }}
      />
      
    </Navigator>
  )

}