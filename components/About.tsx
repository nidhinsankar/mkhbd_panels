import {StyleSheet, Text, View} from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.link}>Account</Text>
      <Text style={styles.link}>Privacy policy</Text>
      <Text style={styles.link}>Terms of Service</Text>
      <Text style={styles.link}>Terms of Licenses</Text>
      <Text style={styles.link}>Version 1.3.1</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 16,
    fontWeight: 'medium',
  },
});
