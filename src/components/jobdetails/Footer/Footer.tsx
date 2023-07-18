import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './Footer.style';

const Footer = ({url}: any) => {
  const {container, likeBtn, applyBtn, applyBtnText} = styles;

  return (
    <View style={container}>
      <TouchableOpacity style={likeBtn}>
        <Icon name="heart" size={24} color="#F37453" />
      </TouchableOpacity>
      <TouchableOpacity style={applyBtn} onPress={() => Linking.openURL(url)}>
        <Text style={applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
