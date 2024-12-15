import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {Text} from 'react-native';
import {View} from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';

export interface IImageCard {
  imgSrc: string;
  creator: string;
}

const win = Dimensions.get('window');

const ImageCard: React.FC<IImageCard> = ({imgSrc, creator}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: imgSrc}} style={styles.img} />
      <View style={styles.card_footer}>
        <Text style={styles.creator_name}>{creator}</Text>
        <IIcon name="heart" size={20} color={'white'} />
      </View>
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: win.width / 2.1,
    margin: 3,
    position: 'relative',
    borderRadius: 10,
    height: win.height / 2,
  },
  img: {
    flex: 1,
    borderRadius: 10,
  },
  card_footer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'space-between',
    backgroundColor: '#000',
    paddingVertical: 10,
    color: '#fff',
    position: 'absolute',
    zIndex: 34,
    bottom: 0,
  },
  creator_name: {
    color: '#ff2',
  },
});
