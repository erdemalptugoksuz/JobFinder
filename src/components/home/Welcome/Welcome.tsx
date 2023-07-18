import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './Welcome.style';
import {COLORS, SIZES} from '../../../constants';

const JobTypes = ['Full-Time', 'Part-Time', 'Contractor'];

const Welcome = ({navigation}: any) => {
  const [activeJobType, setActiveJobType] = useState('Full-Time');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    navigation.navigate('SearchScreen', {item: searchTerm});
  };

  const {
    container,
    userName,
    welcomeMessage,
    searchContainer,
    searchWrapper,
    searchInput,
    searchBtn,
    tabsContainer,
    tab,
    tabText,
  } = styles;

  return (
    <View>
      <View style={container}>
        <Text style={userName}>Hello Erdem Alptuğ</Text>
        <Text style={welcomeMessage}>Find your perfect job!</Text>
      </View>
      <View style={searchContainer}>
        <View style={searchWrapper}>
          <TextInput
            style={searchInput}
            value={searchTerm}
            onChangeText={setSearchTerm}
            placeholder="What do you looking for?"
          />
        </View>
        <TouchableOpacity style={searchBtn} onPress={handleSearch}>
          <Icon name="search" size={SIZES.xLarge} color={COLORS.lightWhite} />
        </TouchableOpacity>
      </View>
      <View style={tabsContainer}>
        <FlatList
          data={JobTypes}
          renderItem={({item}) => (
            <TouchableOpacity
              style={tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                navigation.navigate('SearchScreen', {item});
              }}>
              <Text style={tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
