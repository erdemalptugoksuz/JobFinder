import {StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../../../constants';

export default StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: '#FFF',
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  },
  headText: {
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  contentBox: {
    marginVertical: SIZES.small,
  },
  contextText: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    marginVertical: SIZES.small / 1.25,
  },
});
