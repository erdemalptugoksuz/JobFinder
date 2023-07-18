import {StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  innerContainer: {
    flex: 1,
    padding: SIZES.medium,
  },
});
