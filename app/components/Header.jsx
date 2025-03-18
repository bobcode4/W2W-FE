import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={Styles.header}>
      <Image source={require('../../assets/images/home_header_logo.png')} style={Styles.image} />
      <Icon name="notifications-outline" size={28} onPress={() => {}} style={Styles.notificationIcon} />
    </View>
  );
};

const Styles = StyleSheet.create({
  header: {
    width: '100%',
    position: 'fixed',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  image: {
    height: 40,
    resizeMode: 'contain',
    marginRight: 120,
  },
  notificationIcon: {
    color: '#000',
  },
});
export default Header;
