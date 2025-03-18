import { View, Text, StyleSheet, Image } from 'react-native';

const ProductCard = ({ product, size }) => {
  const { id, smallImageUrl, largeImageUrl, title, description, price } = product;
  return (
    <View>
      <View style={size == 'large' ? largeStyles.productCard : smallStyles.productCard}>
        <View style={size == 'large' ? largeStyles.imageContainer : smallStyles.imageContainer}>
          <Image
            source={size == 'large' ? largeImageUrl : smallImageUrl}
            style={size == 'large' ? largeStyles.image : smallStyles.image}
          />
        </View>
        <Text style={size == 'large' ? largeStyles.title : smallStyles.title}>{title}</Text>
        <Text style={size == 'large' ? largeStyles.description : smallStyles.description}>{description}</Text>
        <Text style={size == 'large' ? largeStyles.price : smallStyles.price}>{price}</Text>
      </View>
    </View>
  );
};

const largeStyles = StyleSheet.create({
  productCard: {
    // padding: 16,
    width: 324,
    height: 493,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    // elevation: 3,
    margin: 16,
  },
  imageContainer: {
    width: '100%',
    height: 383,
    borderRadius: 14,
    backgroundColor: '#ebeced',
    // shadowRadius: 5,
    overflow: 'hidden',
    marginBottom: 20,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '245',
    height: '289',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
  },
});

const smallStyles = StyleSheet.create({
  productCard: {
    // padding: 16,
    width: 190,
    height: 390,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    // elevation: 3,
    margin: 16,
  },
  imageContainer: {
    width: '100%',
    height: 256,
    borderRadius: 14,
    backgroundColor: '#ebeced',
    // shadowRadius: 5,
    overflow: 'hidden',
    marginBottom: 20,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '151',
    height: '178',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  description: {
    fontSize: 10,
    color: '#666',
    marginBottom: 4,
  },
  price: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export const badgedProductCard = (ProductCard) => {
  return (props) => {
    return <ProductCard {...props} />;
  };
};

export default ProductCard;
