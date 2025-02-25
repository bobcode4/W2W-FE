import { View, Text, StyleSheet } from 'react-native';

const Trending = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trending Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Trending;
