import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import LoginScreen from './screens/LoginScreen';//
import SignupScreen from './screens/SignupScreen';
import CreateAdScreen from './screens/CreateAdScreen';
import ListItemScreen from './screens/ListItemScreen';
import AccountScreen from './screens/AccountScreen';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'deepskyblue',
  },
};

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();
const AuthNavigator = ()=>{
  return(
     <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="signup" component={SignupScreen} options={{headerShown:false}} />
      </Stack.Navigator>
  )
}


const TabNavigator = ()=>{
  return(
    <Tab.Navigator
    
    screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home'
                
            }else if(route.name==='create'){

              iconName = 'plus-circle'
            }else if (route.name=== 'account'){
              iconName ="user"
            }

           
            return<View style={{borderWidth:15,borderColor:"white",borderRadius:30}}><Feather name={iconName} size={35} color={color} /></View> 
          },
        })}
        tabBarOptions={{
          activeTintColor: 'deepskyblue',
          inactiveTintColor: 'gray',
        }}
    
    
    
    
    >
        <Tab.Screen name="Home" component={ListItemScreen} />
        <Tab.Screen name="create" component={CreateAdScreen} />
        <Tab.Screen name="account" component={AccountScreen} />
      </Tab.Navigator>
  )

}

const Navigation = ()=>{
  const user = ""
  return(
      <NavigationContainer>
      {user? <TabNavigator />:<AuthNavigator />}
      
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
    <View style={styles.container}>
      <Navigation />
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    //alignItems: 'center',//
    //justifyContent: 'center',//
  },
});
