import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/Draftbit.js';
import LinkingConfiguration from './LinkingConfiguration.js';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import Breakpoints from './utils/Breakpoints';
import useWindowDimensions from './utils/useWindowDimensions';

import AboutusScreen from './screens/AboutusScreen';
import AddnewaddressScreen from './screens/AddnewaddressScreen';
import CartEmptyScreen from './screens/CartEmptyScreen';
import CartScreen from './screens/CartScreen';
import ChangePasswordErrorScreen from './screens/ChangePasswordErrorScreen';
import ChangePasswordSuccessScreen from './screens/ChangePasswordSuccessScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import ConfirmCodeScreen from './screens/ConfirmCodeScreen';
import DeliveryAddressScreen from './screens/DeliveryAddressScreen';
import DeliveryDetailsScreen from './screens/DeliveryDetailsScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import GetDiscountScreen from './screens/GetDiscountScreen';
import HomeScreen from './screens/HomeScreen';
import ItemDetailsScreen from './screens/ItemDetailsScreen';
import LoginScreen from './screens/LoginScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';
import NotificationDetailsScreen from './screens/NotificationDetailsScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import OrdersScreen from './screens/OrdersScreen';
import PaymentmethodsScreen from './screens/PaymentmethodsScreen';
import ProfileScreen from './screens/ProfileScreen';
import PromocodeScreen from './screens/PromocodeScreen';
import RestaurantDetailsScreen from './screens/RestaurantDetailsScreen';
import SearchScreen from './screens/SearchScreen';
import SearchaddressScreen from './screens/SearchaddressScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

function BottomTabNavigator() {
  const tabBarIcons = {
    HomeScreen: 'AntDesign/home',
    OrdersScreen: 'Ionicons/ios-document-text-outline',
    CartScreen: 'Ionicons/cart-outline',
    SearchScreen: 'Feather/search',
    ProfileScreen: 'FontAwesome/user-circle',
  };

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ navigation }) => ({
        headerBackImage:
          Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
        headerShown: false,
        tabBarActiveTintColor: theme.colors['Primary'],
        tabBarStyle: { borderTopColor: 'transparent' },
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/home"
              size={25}
              color={focused ? theme.colors['Primary'] : color}
            />
          ),
          title: 'Home',
        })}
      />
      <Tab.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/ios-document-text-outline"
              size={25}
              color={focused ? theme.colors['Primary'] : color}
            />
          ),
          title: 'Orders',
        })}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/cart-outline"
              size={25}
              color={focused ? theme.colors['Primary'] : color}
            />
          ),
          title: 'Cart',
        })}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Feather/search"
              size={25}
              color={focused ? theme.colors['Primary'] : color}
            />
          ),
          title: 'Search',
        })}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="FontAwesome/user-circle"
              size={25}
              color={focused ? theme.colors['Primary'] : color}
            />
          ),
          title: 'Profile',
        })}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#FFFFFF',
        },
      }}
      linking={LinkingConfiguration}
    >
      <Stack.Navigator
        initialRouteName="OnboardingScreen"
        screenOptions={({ navigation }) => ({
          headerBackImage:
            Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
          headerMode: 'none',
          headerShown: false,
        })}
      >
        <Stack.Screen
          name="ItemDetailsScreen"
          component={ItemDetailsScreen}
          options={({ navigation }) => ({
            title: 'Item Details',
          })}
        />
        <Stack.Screen
          name="ConfirmCodeScreen"
          component={ConfirmCodeScreen}
          options={({ navigation }) => ({
            title: 'Confirm Code',
          })}
        />
        <Stack.Screen
          name="CheckoutScreen"
          component={CheckoutScreen}
          options={({ navigation }) => ({
            title: 'Checkout',
          })}
        />
        <Stack.Screen
          name="DeliveryDetailsScreen"
          component={DeliveryDetailsScreen}
          options={({ navigation }) => ({
            title: 'Delivery Details',
          })}
        />
        <Stack.Screen
          name="AddnewaddressScreen"
          component={AddnewaddressScreen}
          options={({ navigation }) => ({
            title: 'Add new address',
          })}
        />
        <Stack.Screen
          name="PaymentmethodsScreen"
          component={PaymentmethodsScreen}
          options={({ navigation }) => ({
            title: 'Payment methods',
          })}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={({ navigation }) => ({
            title: 'Forgot Password',
          })}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={({ navigation }) => ({
            title: 'Log in',
          })}
        />
        <Stack.Screen
          name="DeliveryAddressScreen"
          component={DeliveryAddressScreen}
          options={({ navigation }) => ({
            title: 'Delivery Address',
          })}
        />
        <Stack.Screen
          name="NewPasswordScreen"
          component={NewPasswordScreen}
          options={({ navigation }) => ({
            title: 'New Password ',
          })}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={({ navigation }) => ({
            title: 'Sign up',
          })}
        />
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={({ navigation }) => ({
            title: 'Onboarding',
          })}
        />
        <Stack.Screen
          name="PromocodeScreen"
          component={PromocodeScreen}
          options={({ navigation }) => ({
            title: 'Promo code',
          })}
        />
        <Stack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={({ navigation }) => ({
            title: 'Edit Profile',
          })}
        />
        <Stack.Screen
          name="SearchaddressScreen"
          component={SearchaddressScreen}
          options={({ navigation }) => ({
            title: 'Search address',
          })}
        />
        <Stack.Screen
          name="CartEmptyScreen"
          component={CartEmptyScreen}
          options={({ navigation }) => ({
            title: 'Cart Empty',
          })}
        />
        <Stack.Screen
          name="RestaurantDetailsScreen"
          component={RestaurantDetailsScreen}
          options={({ navigation }) => ({
            title: 'Restaurant Details',
          })}
        />
        <Stack.Screen
          name="ChangePasswordSuccessScreen"
          component={ChangePasswordSuccessScreen}
          options={({ navigation }) => ({
            title: 'Change Password  Success',
          })}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={({ navigation }) => ({
            title: 'Notifications',
          })}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={({ navigation }) => ({
            title: 'Welcome Screen',
          })}
        />
        <Stack.Screen
          name="ChangePasswordErrorScreen"
          component={ChangePasswordErrorScreen}
          options={({ navigation }) => ({
            title: 'Change Password  Error',
          })}
        />
        <Stack.Screen
          name="GetDiscountScreen"
          component={GetDiscountScreen}
          options={({ navigation }) => ({
            title: 'Get Discount',
          })}
        />
        <Stack.Screen
          name="AboutusScreen"
          component={AboutusScreen}
          options={({ navigation }) => ({
            title: 'About us',
          })}
        />
        <Stack.Screen
          name="NotificationDetailsScreen"
          component={NotificationDetailsScreen}
          options={({ navigation }) => ({
            title: 'Notification Details',
          })}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});
