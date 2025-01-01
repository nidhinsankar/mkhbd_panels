import {FlatList, Text, View} from 'react-native';

import {IMAGES_LIST} from '../utils/constants';
import ImageCard from '../components/ImageCard';
import ImageBotttomSheet from '../components/ImageBottomSheet';
import React from 'react';

const LibraryScreen = () => {
  return (
    <>
      <View>
        <Text style={{marginBlock: 20, textAlign: 'center'}}>
          No purchases found in Library
        </Text>
        <ImageBotttomSheet />

        <FlatList
          data={IMAGES_LIST}
          keyExtractor={item => item.imgSrc}
          ListHeaderComponent={
            <Text
              style={{
                paddingInline: 20,
                marginBlock: 10,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Makes some purchases
            </Text>
          }
          numColumns={2}
          renderItem={({item}) => (
            <ImageCard creator={item.creator} imgSrc={item.imgSrc} />
          )}
        />
      </View>
    </>
  );
};

export default LibraryScreen;
