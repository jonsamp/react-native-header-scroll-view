import { StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const headerHeight = ifIphoneX(88, 60);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent' },
  headerContainer: {
    height: headerHeight,
  },
  headerComponentContainer: {
    height: headerHeight,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 12,
  },
  headline: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '500',
    letterSpacing: 0.019,
  },
  title: {
    letterSpacing: 0.011,
    fontWeight: '700',
    marginLeft: 16,
  },
});

export default styles;
