import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';


import SearchResultScreen from './SearchResultScreen';
import SearchParamScreen from './SearchParamsScreen';

const Drawer = createDrawerNavigator();

export default function SearchMenu() {
    return (
      <Drawer.Navigator
        useLegacyImplementation
        drawerContent={(props) => <SearchParamScreen {...props} />}
      >
        <Drawer.Screen name="Rechercher" component={SearchResultScreen} />
      </Drawer.Navigator>
    );
  }