import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './NearbyJobCard.style';
import {checkImageURL} from '../../../../utils';

const NearbyJobCard = ({job, handleNavigate}: any) => {
  const {container, logoContainer, logoImage, textContainer, jobName, jobType} =
    styles;

  return (
    <TouchableOpacity style={container} onPress={handleNavigate}>
      <TouchableOpacity style={logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
          resizeMode="contain"
          style={logoImage}
        />
      </TouchableOpacity>

      <View style={textContainer}>
        <Text style={jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
