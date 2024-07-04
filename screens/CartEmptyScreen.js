import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const CartEmptyScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* Screen heading */}
      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            fontFamily: 'Inter_500Medium',
            fontSize: [
              { minWidth: Breakpoints.Mobile, value: 19 },
              { minWidth: Breakpoints.Tablet, value: 22 },
              { minWidth: Breakpoints.Laptop, value: 25 },
              { minWidth: Breakpoints.Desktop, value: 28 },
              { minWidth: Breakpoints.BigScreen, value: 30 },
            ],
            lineHeight: [
              { minWidth: Breakpoints.Mobile, value: 50 },
              { minWidth: Breakpoints.Tablet, value: 65 },
              { minWidth: Breakpoints.Laptop, value: 75 },
              { minWidth: Breakpoints.Desktop, value: 85 },
              { minWidth: Breakpoints.BigScreen, value: 90 },
            ],
            textAlign: 'center',
          }),
          dimensions.width
        )}
      >
        {'Cart'}
      </Text>
      {/* Main View */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            padding: 20,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center' },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Image'].props}
            source={Images.Group11498986}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Image'].style,
                {
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 110 },
                    { minWidth: Breakpoints.Tablet, value: 165 },
                    { minWidth: Breakpoints.Desktop, value: 220 },
                    { minWidth: Breakpoints.BigScreen, value: 295 },
                  ],
                  width: [
                    { minWidth: Breakpoints.Mobile, value: 150 },
                    { minWidth: Breakpoints.Tablet, value: 225 },
                    { minWidth: Breakpoints.Desktop, value: 300 },
                    { minWidth: Breakpoints.BigScreen, value: 400 },
                  ],
                }
              ),
              dimensions.width
            )}
          />
        </View>

        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              fontFamily: 'Inter_400Regular',
              fontSize: [
                { minWidth: Breakpoints.Mobile, value: 15 },
                { minWidth: Breakpoints.Tablet, value: 18 },
                { minWidth: Breakpoints.Laptop, value: 20 },
                { minWidth: Breakpoints.Desktop, value: 22 },
                { minWidth: Breakpoints.BigScreen, value: 24 },
              ],
              marginBottom: [
                { minWidth: Breakpoints.Mobile, value: 16 },
                { minWidth: Breakpoints.Tablet, value: 32 },
                { minWidth: Breakpoints.Laptop, value: 36 },
                { minWidth: Breakpoints.Desktop, value: 42 },
                { minWidth: Breakpoints.BigScreen, value: 50 },
              ],
              marginTop: [
                { minWidth: Breakpoints.Mobile, value: 20 },
                { minWidth: Breakpoints.Tablet, value: 40 },
                { minWidth: Breakpoints.Laptop, value: 50 },
                { minWidth: Breakpoints.Desktop, value: 60 },
                { minWidth: Breakpoints.BigScreen, value: 75 },
              ],
              opacity: 0.5,
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'There is no food yet'}
        </Text>
        {/* Let’s discover foods */}
        <Button
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'HomeScreen',
              });
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['action btn big screen'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['action btn big screen'].style,
              {
                height: { minWidth: Breakpoints.Tablet, value: 60 },
                marginTop: 20,
                paddingLeft: [
                  { minWidth: Breakpoints.Mobile, value: 20 },
                  { minWidth: Breakpoints.Tablet, value: 35 },
                  { minWidth: Breakpoints.Laptop, value: 45 },
                  { minWidth: Breakpoints.Desktop, value: 50 },
                  { minWidth: Breakpoints.BigScreen, value: 60 },
                ],
                paddingRight: [
                  { minWidth: Breakpoints.Mobile, value: 20 },
                  { minWidth: Breakpoints.Tablet, value: 35 },
                  { minWidth: Breakpoints.Laptop, value: 45 },
                  { minWidth: Breakpoints.Desktop, value: 50 },
                  { minWidth: Breakpoints.BigScreen, value: 60 },
                ],
              }
            ),
            dimensions.width
          )}
          title={'Let’s discover foods  →'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(CartEmptyScreen);
