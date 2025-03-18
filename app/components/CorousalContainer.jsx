import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import ProductCard from './ProductCard';
import { product_data } from '../utils/mockData';
import { useRouter } from 'expo-router';
import {} from 'react-native-web';

const CorousalContainer = ({ heading, id }) => {
  const router = useRouter();
  const handleViewAllButton = (id) => {
    router.push('/(tabs)/(home)/trending');
    return console.log(`card ${id} clicked`);
  };

  const renderItem = ({ item }) => {
    const size = 'large';
    return <ProductCard product={item} size={size} />;
  };
  return (
    <View style={Styles.container}>
      <Text style={Styles.heading}>{heading}</Text>
      <FlatList
        data={product_data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        nestedScrollEnabled={true}
        contentContainerStyle={Styles.flatList}
      />
      <TouchableOpacity onPress={() => handleViewAllButton(id)} style={Styles.viewAllButton}>
        <Text style={Styles.viewAllBtnText}>View All</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    padding: 16,
    // backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  flatList: {
    paddingVertical: 10,
    flexGrow: 1,
  },
  viewAllButton: {
    borderColor: '#E57373',
    borderWidth: 2,
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 10,
    // alignSelf: 'center',
    marginTop: 10,
  },
  viewAllBtnText: {
    fontSize: 22,
    color: '#E57373',
    textAlign: 'center',
  },
});

export default CorousalContainer;
