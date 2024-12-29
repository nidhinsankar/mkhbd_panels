import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Auth = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    backgroundColor: 'white',
    padding: 20,
  },
  btn: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 10,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
