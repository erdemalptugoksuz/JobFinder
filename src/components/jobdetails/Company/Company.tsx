import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './Company.style';
import {checkImageURL} from '../../../utils';

const Company = ({companyLogo, jobTitle, companyName, location}: any) => {
  const {
    container,
    logoBox,
    logoImage,
    jobTitleBox,
    jobTitle: jobTitleStyle,
    companyInfoBox,
    companyName: companyNameStyle,
    locationBox,
    locationName,
  } = styles;

  return (
    <View style={container}>
      <View style={logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
          resizeMode="contain"
          style={logoImage}
        />
      </View>
      <View style={jobTitleBox}>
        <Text style={jobTitleStyle}>{jobTitle}</Text>
      </View>
      <View style={companyInfoBox}>
        <Text style={companyNameStyle}>{companyName} / </Text>
        <View style={locationBox}>
          <Icon name="map-pin" size={16} color="#000" />
          <Text style={locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
