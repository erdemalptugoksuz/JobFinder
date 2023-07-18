import React from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';

import styles from './Home.style';
import {Welcome, PopularJobs, NearbyJobs} from '../../components';

const Home = ({navigation}: any) => {
  const {container, innerContainer} = styles;

  return (
    <SafeAreaView style={container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={innerContainer}>
          <Welcome navigation={navigation} />
          <PopularJobs navigation={navigation} />
          <NearbyJobs navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
