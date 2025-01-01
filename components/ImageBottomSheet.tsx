import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {useCallback, useMemo, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ImageBotttomSheet = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%', '80%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default ImageBotttomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
});
