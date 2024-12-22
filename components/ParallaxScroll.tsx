import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {IMAGE_6, IMAGES_LIST} from '../utils/constants';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useAnimatedRef,
  useScrollViewOffset,
} from 'react-native-reanimated';
import ImageCard from './ImageCard';
const window = Dimensions.get('window');
const IMG_HEIGHT = 300;

const ParallaxScroll = () => {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffSet = useScrollViewOffset(scrollRef);

  const ImageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffSet.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75],
          ),
        },
        {
          scale: interpolate(
            scrollOffSet.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1],
          ),
        },
      ],
    };
  });
  return (
    <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
      <Animated.Image
        source={{uri: IMAGE_6}}
        style={[styles.img, ImageAnimatedStyle]}
      />
      <View style={{backgroundColor: 'white'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Parallax Scroll
        </Text>
        <FlatList
          data={IMAGES_LIST}
          scrollEnabled={false}
          style={{backgroundColor: 'white'}}
          keyExtractor={item => item.imgSrc}
          numColumns={2}
          renderItem={({item}) => (
            <ImageCard creator={item.creator} imgSrc={item.imgSrc} />
          )}
        />
      </View>
    </Animated.ScrollView>
  );
};

export default ParallaxScroll;

const styles = StyleSheet.create({
  img: {
    width: window.width,
    height: IMG_HEIGHT,
  },
});
