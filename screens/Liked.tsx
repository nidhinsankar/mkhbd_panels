import {FlatList, Text, View} from 'react-native';
import {IMAGES_LIST} from '../utils/constants';
import ImageCard from '../components/ImageCard';

const LikedScreen = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBlock: 20,
        }}>
        <Text>No favourites found</Text>
      </View>
      <FlatList
        data={IMAGES_LIST}
        keyExtractor={item => item.imgSrc}
        ListHeaderComponent={
          <Text style={{textAlign: 'center', marginBlock: 20}}>
            Add Favourites
          </Text>
        }
        numColumns={2}
        renderItem={({item}) => (
          <ImageCard creator={item.creator} imgSrc={item.imgSrc} />
        )}
      />
    </View>
  );
};

export default LikedScreen;
