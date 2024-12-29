import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Theme = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>System</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Light</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Dark</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Theme;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  btn: {
    width: 100,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
