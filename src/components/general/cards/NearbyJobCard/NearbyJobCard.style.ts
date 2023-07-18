import {StyleSheet} from 'react-native';

import {COLORS, SIZES, SHADOWS} from '../../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: '#FFF',
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: '70%',
    height: '70%',
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobName: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  jobType: {
    fontSize: SIZES.small + 2,
    color: COLORS.gray,
    marginTop: 3,
    textTransform: 'capitalize',
  },
});
