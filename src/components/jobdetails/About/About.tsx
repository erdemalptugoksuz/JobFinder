import React from 'react';
import {View, Text} from 'react-native';

import styles from './About.style';

const About = ({info}: any) => {
  const {container, headText, contentBox, contextText} = styles;

  return (
    <View style={container}>
      <Text style={headText}>About the job:</Text>
      <View style={contentBox}>
        <Text style={contextText}>{info}</Text>
      </View>
    </View>
  );
};

export default About;
