import React, { useState } from 'react';
import { Tabs } from 'expo-router';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, StatusBar } from 'react-native';

export default function TabLayout() {
  const icons = [
    { iconName: 'list-circle-outline', iName: 'Categories', name: 'categories' },
    { iconName: 'bag-outline', iName: 'Bag', name: 'bag' },
    { iconName: 'heart-outline', iName: 'Wishlist', name: 'wishlist' },
    { iconName: 'person-circle-outline', iName: 'Account', name: 'account' },
    { iconName: 'home-outline', iName: 'Home', name: 'home' },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0,
      }}
    >
      <Tabs
        screenOptions={{
          tabBarShowLabel: true,
          tabBarStyle: {
            height: 60,
            // position: 'absolute',
            elevation: -5,
            shadowOffset: 0,
            // backgroundColor: '#fff',
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '400',
          },
        }}
      >
        {/* {icons.map((icon, idx) => {
        return (
          <Tabs.Screen
            key={idx}
            name={icon.name}
            options={{
              title: icon.iName,
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <>
                  {focused && <View style={styles.activeBar} />}
                  <Icon
                    name={icon.iconName}
                    size={20}
                    style={focused ? { color: 'pink' } : ''}
                    // onPress={(e) => e.stopPropagation()}
                  />
                </>
              ),
              tabBarLabel: ({ focused }) => (
                <Text style={{ color: focused ? '#E05E63' : '#A0A0A0', fontSize: 10 }}>{icon.iName}</Text>
              ),
            }}
          />
        );
      })} */}
        <Tabs.Screen
          name="(home)"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <>
                {focused && <View style={styles.activeBar} />}
                {/* <Icon
                  name="home-outline"
                  size={20}
                  style={focused ? { color: 'pink' } : ''}
                  // onPress={(e) => e.stopPropagation()}
                /> */}
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
          name="(categories)"
          options={{
            title: 'Categories',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <>
                {focused && <View style={styles.activeBar} />}
                <Icon
                  name="list-circle-outline"
                  size={20}
                  style={focused ? { color: 'pink' } : ''}
                  // onPress={(e) => e.stopPropagation()}
                />
              </>
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? '#E05E63' : '#A0A0A0', fontSize: 10 }}>Categories</Text>
            ),
          }}
        />
        <Tabs.Screen
          name="(bag)"
          options={{
            title: 'Bag',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <>
                {focused && <View style={styles.activeBar} />}
                <Icon
                  name="bag-outline"
                  size={20}
                  style={focused ? { color: 'pink' } : ''}
                  // onPress={(e) => e.stopPropagation()}
                />
              </>
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? '#E05E63' : '#A0A0A0', fontSize: 10 }}>Bag</Text>
            ),
          }}
        />
        <Tabs.Screen
          name="(wishlist)"
          options={{
            title: 'Wishlist',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <>
                {focused && <View style={styles.activeBar} />}
                <Icon
                  name="heart-outline"
                  size={20}
                  style={focused ? { color: 'pink' } : ''}
                  // onPress={(e) => e.stopPropagation()}
                />
              </>
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? '#E05E63' : '#A0A0A0', fontSize: 10 }}>Wishlist</Text>
            ),
          }}
        />
        <Tabs.Screen
          name="(account)"
          options={{
            title: 'Account',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <>
                {focused && <View style={styles.activeBar} />}
                <Icon
                  name="person-circle-outline"
                  size={20}
                  style={focused ? { color: 'pink' } : ''}
                  // onPress={(e) => e.stopPropagation()}
                />
              </>
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? '#E05E63' : '#A0A0A0', fontSize: 10 }}>Account</Text>
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
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
