import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      {/* <Button title="Trending" onPress={() => router.push('/(tabs)/Home/Trending')} /> */}
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

export default Index;
