import {StyleSheet, Text, View} from 'react-native';
import ParallaxScroll from '../components/ParallaxScroll';

const ExploreScreen = () => {
  return (
    <View style={Styles.container}>
      <ParallaxScroll />
    </View>
  );
};

export default ExploreScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
