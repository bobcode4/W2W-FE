import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { corousal_list } from '../../utils/mockData';
import CorousalContainer from '../../components/CorousalContainer';

const Home = () => {
  return (
    <View style={Styles.container}>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 100, flexGrow: 1, backgroundColor: 'white' }}>
        <View style={Styles.banner}>
          <Image source={require('../../../assets/images/home_product_image.png')} style={Styles.bannerImage} />
          <View style={Styles.bannerContent}>
            <Text style={Styles.bannerTitle}>Emerald Elegance</Text>
            <Text style={Styles.bannerDescription}>Explore the charm of our Emerald Elegance gown!</Text>
            <TouchableOpacity style={Styles.shopNowButton}>
              <Text style={Styles.shopNowText}>Shop Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        {corousal_list.map((data, index) => {
          return <CorousalContainer key={index} heading={data.heading} id={data.id} />;
        })}
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  banner: {
    position: 'relative',
    marginBottom: 50,
  },
  bannerImage: {
    width: '100%',
    height: 500,
  },
  bannerContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 10,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  bannerDescription: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 12,
  },
  // shopNowButton: {
  //   paddingVertical: 8,
  //   paddingHorizontal: 16,
  // },
  shopNowText: {
    color: '#fff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default Home;
