import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  Pressable,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const GetDiscountScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      {/* Close */}
      <Pressable
        onPress={() => {
          try {
            navigation.goBack();
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          { marginLeft: 10, marginTop: 10 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: [
                { minWidth: Breakpoints.Mobile, value: 48 },
                { minWidth: Breakpoints.Tablet, value: 60 },
                { minWidth: Breakpoints.Desktop, value: 70 },
                { minWidth: Breakpoints.BigScreen, value: 80 },
              ],
              justifyContent: 'center',
              width: [
                { minWidth: Breakpoints.Mobile, value: 48 },
                { minWidth: Breakpoints.Tablet, value: 60 },
                { minWidth: Breakpoints.Desktop, value: 70 },
                { minWidth: Breakpoints.BigScreen, value: 80 },
              ],
            },
            dimensions.width
          )}
        >
          <Icon size={24} name={'AntDesign/closecircleo'} />
        </View>
      </Pressable>
      {/* Main View */}
      <View
        style={StyleSheet.applyWidth(
          {
            flex: 1,
            justifyContent: 'space-between',
            padding: 20,
            paddingBottom: 0,
            paddingTop: 0,
          },
          dimensions.width
        )}
      >
        {/* Details */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              fontFamily: 'Inter_600SemiBold',
              fontSize: 31,
              lineHeight: 38,
              paddingLeft: 20,
              paddingRight: 20,
              textAlign: 'left',
            }),
            dimensions.width
          )}
        >
          {'Here’s 50% off for you, and 10% for a friend'}
        </Text>

        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flex: 1, justifyContent: 'center' },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Image'].props}
            source={Images.Illustration}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Image'].style,
                {
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 399 },
                    { minWidth: Breakpoints.Tablet, value: 550 },
                    { minWidth: Breakpoints.Laptop, value: 600 },
                    { minWidth: Breakpoints.Desktop, value: 650 },
                    { minWidth: Breakpoints.BigScreen, value: 750 },
                  ],
                  width: [
                    { minWidth: Breakpoints.Mobile, value: 399 },
                    { minWidth: Breakpoints.Tablet, value: 550 },
                    { minWidth: Breakpoints.Laptop, value: 600 },
                    { minWidth: Breakpoints.Desktop, value: 650 },
                    { minWidth: Breakpoints.BigScreen, value: 750 },
                  ],
                }
              ),
              dimensions.width
            )}
          />
        </View>
        {/* Code */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Custom Color_3'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 31,
              lineHeight: 38,
              paddingLeft: 20,
              paddingRight: 20,
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'DJFGH84'}
        </Text>
      </View>
      {/* Actions */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 15,
            marginTop: [
              { minWidth: Breakpoints.Tablet, value: 20 },
              { minWidth: Breakpoints.Laptop, value: 25 },
              { minWidth: Breakpoints.Desktop, value: 30 },
              { minWidth: Breakpoints.BigScreen, value: 40 },
            ],
            padding: 20,
          },
          dimensions.width
        )}
      >
        {/* Copy */}
        <Button
          iconPosition={'left'}
          {...GlobalStyles.ButtonStyles(theme)['action btn tablet'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['action btn tablet'].style,
              {
                backgroundColor: theme.colors['Custom Color'],
                borderColor: theme.colors['Custom Color_5'],
                borderWidth: 1,
                color: theme.colors['Custom Color_5'],
                marginTop: 0,
                width: '48%',
              }
            ),
            dimensions.width
          )}
          title={'Copy'}
        />
        {/* Share */}
        <Button
          iconPosition={'left'}
          {...GlobalStyles.ButtonStyles(theme)['action btn tablet'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['action btn tablet'].style,
              {
                backgroundColor: theme.colors['Custom Color_5'],
                marginTop: 0,
                width: '48%',
              }
            ),
            dimensions.width
          )}
          title={'Share'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(GetDiscountScreen);
