import React from 'react';
import {View, Text} from 'react-native';

import styles from './Specifics.style';

const Specifics = ({title, points}: any) => {
  const {
    container,
    title: titleStyle,
    pointsContainer,
    pointWrapper,
    pointDot,
    pointText,
  } = styles;

  return (
    <View style={container}>
      <Text style={titleStyle}>{title}:</Text>
      <View style={pointsContainer}>
        {points.map((item: any, index: any) => (
          <View style={pointWrapper} key={item + index}>
            <View style={pointDot} />
            <Text style={pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
