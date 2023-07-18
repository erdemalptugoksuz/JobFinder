import {StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../../../constants';

export default StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBox: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: SIZES.large,
  },
  logoImage: {
    width: '80%',
    height: '80%',
  },
  jobTitleBox: {
    marginTop: SIZES.small,
  },
  jobTitle: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    textAlign: 'center',
  },
  companyInfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.primary,
  },
  locationBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationImage: {
    width: 14,
    height: 14,
    tintColor: COLORS.gray,
  },
  locationName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    marginLeft: 2,
  },
});
