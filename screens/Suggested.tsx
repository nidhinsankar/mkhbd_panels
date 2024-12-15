import {Text, View, Image, ScrollView, FlatList} from 'react-native';
import {IMAGE_1, IMAGES_LIST} from '../utils/constants';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import ImageCard from '../components/ImageCard';

const SuggestedScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={Styles.container}>
        <FlatList
          data={IMAGES_LIST}
          keyExtractor={item => item.imgSrc}
          renderItem={({item}) => (
            <ImageCard creator={item.creator} imgSrc={item.imgSrc} />
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SuggestedScreen;
