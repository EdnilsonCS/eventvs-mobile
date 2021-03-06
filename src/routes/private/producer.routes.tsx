import React from 'react';
import ProducerEventScreen from '@screens/Producer/Event';
import ProducerAddScreen from '@screens/Producer/AddEvent';
import ProducerProfileScreen from '@screens/Producer/Profile';
import ProducerAddCategoryScreen from '@screens/Producer/Categories';
import ProducerDetailScreen from '@screens/Producer/Details';
import ProducerParticipantScreen from '@screens/Producer/Participants';
import ProducerEditEventScreen from '@screens/Producer/EditEvent';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '@styles/theme';
import { PrivateRoutesConstants } from '../constants.routes';

export type ProducerRootTabParamList = {
  [PrivateRoutesConstants.Profile]: undefined;
  [PrivateRoutesConstants.Event]: undefined;
  [PrivateRoutesConstants.Add]: undefined;
  [PrivateRoutesConstants.AddCategory]: undefined;
};

const Stack = createStackNavigator();

const ProducerTab =
  createMaterialBottomTabNavigator<ProducerRootTabParamList>();

const ProducerNavigation: React.FC = props => {
  return (
    <>
      <ProducerTab.Navigator
        initialRouteName={PrivateRoutesConstants.Event}
        activeColor={Colors.white}
        inactiveColor={Colors.purplePink}
        shifting
      >
        <ProducerTab.Screen
          name={PrivateRoutesConstants.Event}
          component={ProducerEventScreen}
          options={{
            title: 'Eventos',
            tabBarIcon: 'calendar-month-outline',
            tabBarColor: Colors.purple,
          }}
        />

        <ProducerTab.Screen
          name={PrivateRoutesConstants.Profile}
          component={ProducerProfileScreen}
          options={{
            title: 'Perfil',
            tabBarIcon: 'account-outline',
            tabBarColor: Colors.purple,
          }}
        />
      </ProducerTab.Navigator>
    </>
  );
};

export default function App(): JSX.Element {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Menu" component={ProducerNavigation} />
      <Stack.Screen
        name={PrivateRoutesConstants.AddCategory}
        component={ProducerAddCategoryScreen}
      />
      <ProducerTab.Screen
        name={PrivateRoutesConstants.Edit}
        component={ProducerEditEventScreen}
        options={{
          title: 'Perfil',
          tabBarIcon: 'account-outline',
          tabBarColor: Colors.purple,
        }}
      />
      <Stack.Screen
        name={PrivateRoutesConstants.Add}
        component={ProducerAddScreen}
      />
      <Stack.Screen
        name={PrivateRoutesConstants.EventDetail}
        component={ProducerDetailScreen}
      />
      <Stack.Screen
        name={PrivateRoutesConstants.ProducerParticipantScreen}
        component={ProducerParticipantScreen}
      />
    </Stack.Navigator>
  );
}
