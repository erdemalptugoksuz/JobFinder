import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';

import {Home, JobDetails, Search} from '../../../screens';
import {COLORS} from '../../../constants';

const Stack = createNativeStackNavigator();

const Stacks = ({navigation}: any) => {
  const renderStackIcon = (
    name: string,
    size: number,
    color: string,
    navigateTo: string,
  ) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
        <Text>
          <Icon name={name} size={size} color={color} />
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerStyle: {backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerLeft: () =>
            renderStackIcon('briefcase', 24, '#000', 'HomeScreen'),
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="JobDetailsScreen"
        component={JobDetails}
        options={{
          headerStyle: {backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerLeft: () =>
            renderStackIcon('arrow-left', 24, '#000', 'HomeScreen'),
          headerRight: () =>
            renderStackIcon('share-2', 24, '#000', 'JobDetailsScreen'),
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={Search}
        options={{
          headerStyle: {backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerLeft: () =>
            renderStackIcon('arrow-left', 24, '#000', 'HomeScreen'),
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default Stacks;
