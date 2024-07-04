import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, View } from 'react-native';

const WelcomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      {/* Content View */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            marginBottom: 50,
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          source={Images.Content}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
              height: [
                { minWidth: Breakpoints.Mobile, value: 500 },
                { minWidth: Breakpoints.Tablet, value: 750 },
                { minWidth: Breakpoints.Laptop, value: 600 },
                { minWidth: Breakpoints.Desktop, value: 750 },
                { minWidth: Breakpoints.BigScreen, value: 900 },
              ],
              width: [
                { minWidth: Breakpoints.Mobile, value: 327 },
                { minWidth: Breakpoints.Tablet, value: 490 },
                { minWidth: Breakpoints.Laptop, value: 392 },
                { minWidth: Breakpoints.Desktop, value: 490 },
                { minWidth: Breakpoints.BigScreen, value: 588 },
              ],
            }),
            dimensions.width
          )}
        />
      </View>
      {/* Actions View */}
      <View style={StyleSheet.applyWidth({ padding: 20 }, dimensions.width)}>
        {/* Log in */}
        <Button
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('LoginScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['action btn big screen'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['action btn big screen'].style,
              {
                backgroundColor: theme.colors['Custom Color'],
                borderColor: theme.colors['Primary'],
                borderWidth: 1.5,
                color: theme.colors['Primary'],
                fontSize: [
                  { minWidth: Breakpoints.Tablet, value: 20 },
                  { minWidth: Breakpoints.BigScreen, value: 25 },
                ],
                height: [
                  { minWidth: Breakpoints.Tablet, value: 60 },
                  { minWidth: Breakpoints.BigScreen, value: 75 },
                ],
              }
            ),
            dimensions.width
          )}
          title={'Log in'}
        />
        {/* Sign up */}
        <Button
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('SignupScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['action btn big screen'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['action btn big screen'].style,
              {
                backgroundColor: {
                  minWidth: Breakpoints.Laptop,
                  value: theme.colors['Secondary'],
                },
                fontSize: [
                  { minWidth: Breakpoints.Tablet, value: 20 },
                  { minWidth: Breakpoints.BigScreen, value: 25 },
                ],
                height: [
                  { minWidth: Breakpoints.Tablet, value: 60 },
                  { minWidth: Breakpoints.BigScreen, value: 75 },
                ],
                marginTop: 25,
              }
            ),
            dimensions.width
          )}
          title={'Sign up'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(WelcomeScreen);
