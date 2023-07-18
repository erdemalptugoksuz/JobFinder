import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './PopularJobCard.style';
import {checkImageURL} from '../../../../utils';

const PopularJobCard = ({item, selectedJob, handleCardPress}: any) => {
  const {
    container,
    logoContainer,
    logoImage,
    companyName,
    infoContainer,
    jobName,
    location,
  } = styles;

  return (
    <TouchableOpacity
      style={container(selectedJob, item)}
      onPress={() => handleCardPress(item)}>
      <TouchableOpacity style={logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
          resizeMode="contain"
          style={logoImage}
        />
      </TouchableOpacity>
      <Text style={companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={infoContainer}>
        <Text style={jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
