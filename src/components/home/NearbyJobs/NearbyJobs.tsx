import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

import styles from './NearbyJobs.style';
import {COLORS} from '../../../constants';
import {NearbyJobCard} from '../../../components';
import useFetch from '../../../hook/useFetch';

const NearbyJobs = ({navigation}: any) => {
  const {data, isLoading, error} = useFetch('search', {
    query: 'React developer',
    num_pages: 1,
  });

  const handleNearbyJobDetailNavigate = (id: any) => {
    navigation.navigate('JobDetailsScreen', {id});
  };

  const {container, header, headerTitle, headerBtn, cardsContainer} = styles;

  return (
    <View style={container}>
      <View style={header}>
        <Text style={headerTitle}>Nearby jobs</Text>
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
          data?.map(job => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => handleNearbyJobDetailNavigate(job?.job_id)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
