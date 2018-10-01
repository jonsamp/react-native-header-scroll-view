import { StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const headerHeight = ifIphoneX(88, 60);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  headerContainer: {
    height: headerHeight,
  },
  headerComponentContainer: {
    height: headerHeight,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 12,
  },
  headerText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 17,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 36,
    marginLeft: 16,
    marginBottom: 16,
  },
});

export default styles;
