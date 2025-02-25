import { Tabs } from 'expo-router';
import { Image, View, Text, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.activeBar} />}
              <Image
                source={
                  focused ? require('../../assets/icons/home-active.png') : require('../../assets/icons/home.png')
                }
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => <Text style={[styles.label, focused && styles.activeLabel]}>Home</Text>,
        }}
      />

      {/* Categories Tab */}
      <Tabs.Screen
        name="Categories/Categories"
        options={{
          title: 'Categories',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.activeBar} />}
              <Image source={require('../../assets/icons/categories.png')} style={styles.icon} resizeMode="contain" />
            </View>
          ),
          tabBarLabel: ({ focused }) => <Text style={[styles.label, focused && styles.activeLabel]}>Categories</Text>,
        }}
      />

      {/* Bag Tab */}
      <Tabs.Screen
        name="Bag/Bag"
        options={{
          title: 'Bag',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.activeBar} />}
              <Image
                source={focused ? require('../../assets/icons/bag-active.png') : require('../../assets/icons/bag.png')}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => <Text style={[styles.label, focused && styles.activeLabel]}>Bag</Text>,
        }}
      />

      {/* Wishlist Tab */}
      <Tabs.Screen
        name="Wishlist/Wishlist"
        options={{
          title: 'Wishlist',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.activeBar} />}
              <Image
                source={
                  focused
                    ? require('../../assets/icons/wishlist-active.png')
                    : require('../../assets/icons/wishlist.png')
                }
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => <Text style={[styles.label, focused && styles.activeLabel]}>Wishlist</Text>,
        }}
      />

      {/* Account Tab */}
      <Tabs.Screen
        name="Account/Account"
        options={{
          title: 'Account',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.activeBar} />}
              <Image
                source={
                  focused ? require('../../assets/icons/account-active.png') : require('../../assets/icons/account.png')
                }
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => <Text style={[styles.label, focused && styles.activeLabel]}>Account</Text>,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    elevation: 5,
    backgroundColor: '#fff',
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: '400',
  },
  iconContainer: {
    alignItems: 'center',
  },
  activeBar: {
    width: 48,
    height: 6,
    backgroundColor: '#E05E63',
    borderRadius: 10,
    position: 'absolute',
    top: -10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    color: '#A0A0A0',
    fontSize: 10,
  },
  activeLabel: {
    color: '#E05E63',
  },
});
