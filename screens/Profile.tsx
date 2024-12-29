import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Auth from '../components/Auth';
import About from '../components/About';
import Theme from '../components/Theme';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.pageTitle}>Panels</Text>
        <Text>Sign in to save your data</Text>
      </View>
      <Auth />
      <Theme />
      <About />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 20,
  },
  titleContainer: {
    gap: 5,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
