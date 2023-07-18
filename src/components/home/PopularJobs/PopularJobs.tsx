import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import styles from './PopularJobs.style';
import {COLORS, SIZES} from '../../../constants';
import {PopularJobCard} from '../../../components';
import useFetch from '../../../hook/useFetch';

const PopularJobs = ({navigation}: any) => {
  const {data, isLoading, error} = useFetch('search', {
    query: 'React developer',
    num_pages: 1,
  });

  const handleCardPress = (item: any) => {
    navigation.navigate('JobDetailsScreen', {id: item?.job_id});
  };

  const {container, header, headerTitle, headerBtn, cardsContainer} = styles;

  return (
    <View style={container}>
      <View style={header}>
        <Text style={headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <PopularJobCard item={item} handleCardPress={handleCardPress} />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default PopularJobs;
