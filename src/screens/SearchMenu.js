import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Button, View, Text } from 'react-native';
import SearchResultScreen from './SearchResultScreen';
import SearchParamScreen from './SearchParamsScreen';


const Stack = createStackNavigator();

export default function SearchMenu({ navigation }) {

    let gotoSearch=()=>{
      navigation.navigate('SearchParamScreen');
    }
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil" 
      screenOptions={{
        headerShown: true,
        defaultNavigationOptions : ({ navigation }) => ({
          title: "Screen"
        })
       
      }}
      
      >
        <Stack.Screen name="Accueil" component={SearchResultScreen} 
          options={{
            headerRight: () => (
              <Button
                onPress={() => {gotoSearch();
                }}
                title="Info"
                color="#fff"
              />
            ),
          }}
        />
        <Stack.Screen name="SearchParamScreen" component={SearchParamScreen} />
      </Stack.Navigator>
      </NavigationContainer>

      
    );
  }