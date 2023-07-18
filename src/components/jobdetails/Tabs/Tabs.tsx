import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

import styles from './Tabs.style';
import {SIZES} from '../../../constants';

const TabButton = ({name, activeTab, onHandleSearchType}: any) => (
  <TouchableOpacity
    style={styles.btn(name, activeTab)}
    onPress={onHandleSearchType}>
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
);

const Tabs = ({tabs, activeTab, setActiveTab}: any) => {
  const {container} = styles;

  return (
    <View style={container}>
      <FlatList
        data={tabs}
        renderItem={({item}) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{
          columnGap: SIZES.small / 2,
        }}
      />
    </View>
  );
};

export default Tabs;
