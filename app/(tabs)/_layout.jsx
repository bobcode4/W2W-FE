import { Tabs } from 'expo-router';
import { Image, View, Text } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          elevation: 5,
          backgroundColor: '#fff',
        },
        tabBarLabelStyle: {
          fontSize: 2,
          fontWeight: '400',
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              {focused && <View style={styles.activeBar} />}
              <Image
                source={
                  focused ? require('../../assets/icons/home-active.png') : require('../../assets/icons/home.png')
                }
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            </>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#E05E63' : '#A0A0A0', fontSize: 10 }}>Home</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="Categories"
        options={{
          title: 'Categories',
          tabBarIcon: ({ focused }) => (
            <>
              {focused && <View style={styles.activeBar} />}
              <Image
                source={require('../../assets/icons/categories.png')}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            </>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#E05E63' : '#A0A0A0', fontSize: 10 }}>Categories</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="Bag"
        options={{
          title: 'Bag',
          tabBarIcon: ({ focused }) => (
            <>
              {focused && <View style={styles.activeBar} />}
              <Image
                source={focused ? require('../../assets/icons/bag-active.png') : require('../../assets/icons/bag.png')}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            </>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#E05E63' : '#A0A0A0', fontSize: 10 }}>Bag</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="Wishlist"
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ focused }) => (
            <>
              {focused && <View style={styles.activeBar} />}
              <Image
                source={
                  focused
                    ? require('../../assets/icons/wishlist-active.png')
                    : require('../../assets/icons/wishlist.png')
                }
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            </>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#E05E63' : '#A0A0A0', fontSize: 10 }}>Wishlist</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        options={{
          title: 'Account',
          tabBarIcon: ({ focused }) => (
            <>
              {focused && <View style={styles.activeBar} />}
              <Image
                source={
                  focused ? require('../../assets/icons/account-active.png') : require('../../assets/icons/account.png')
                }
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            </>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#E05E63' : '#A0A0A0', fontSize: 10 }}>Account</Text>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = {
  activeBar: {
    width: 48,
    height: 6,
    backgroundColor: '#E05E63',
    borderRadius: 10,
    position: 'absolute',
    top: -10,
  },
};
