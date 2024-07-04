import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  Pressable,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const ForgotPasswordScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
    >
      {/* Back */}
      <Pressable
        onPress={() => {
          try {
            navigation.goBack();
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <View
          {...GlobalStyles.ViewStyles(theme)['header action'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['header action'].style,
              {
                height: [
                  { minWidth: Breakpoints.Tablet, value: 60 },
                  { minWidth: Breakpoints.Desktop, value: 70 },
                  { minWidth: Breakpoints.BigScreen, value: 80 },
                ],
                width: [
                  { minWidth: Breakpoints.Tablet, value: 60 },
                  { minWidth: Breakpoints.Desktop, value: 70 },
                  { minWidth: Breakpoints.BigScreen, value: 80 },
                ],
              }
            ),
            dimensions.width
          )}
        >
          <Icon name={'Feather/chevron-left'} size={28} />
        </View>
      </Pressable>
      {/* Main View */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'space-between' },
          dimensions.width
        )}
      >
        {/* Top view */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 0.75, padding: 20 },
            dimensions.width
          )}
        >
          {/* Screen heading */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Inter_600SemiBold',
                fontSize: [
                  { minWidth: Breakpoints.Mobile, value: 21 },
                  { minWidth: Breakpoints.Tablet, value: 25 },
                  { minWidth: Breakpoints.Laptop, value: 28 },
                  { minWidth: Breakpoints.Desktop, value: 30 },
                  { minWidth: Breakpoints.BigScreen, value: 32 },
                ],
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'Forgot password'}
          </Text>
          {/* details */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Inter_300Light',
                fontSize: [
                  { minWidth: Breakpoints.Tablet, value: 18 },
                  { minWidth: Breakpoints.Laptop, value: 21 },
                  { minWidth: Breakpoints.Desktop, value: 23 },
                  { minWidth: Breakpoints.BigScreen, value: 25 },
                ],
                lineHeight: [
                  { minWidth: Breakpoints.Mobile, value: 21 },
                  { minWidth: Breakpoints.Tablet, value: 25 },
                ],
                marginTop: 12,
                padding: 20,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {
              'Enter your phone number. We will send to you a code to reset password'
            }
          </Text>
        </View>
        {/* Form */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, marginBottom: 35, padding: 20 },
            dimensions.width
          )}
        >
          {/* Phone */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    fontFamily: 'Inter_400Regular',
                    fontSize: [
                      { minWidth: Breakpoints.BigScreen, value: 24 },
                      { minWidth: Breakpoints.Desktop, value: 20 },
                      { minWidth: Breakpoints.Tablet, value: 18 },
                    ],
                    opacity: 0.7,
                  }
                ),
                dimensions.width
              )}
            >
              {'Phone'}
            </Text>
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                const textInputValue = newTextInputValue;
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
              keyboardType={'email-address'}
              placeholder={'+0 000 000 00 00'}
              placeholderTextColor={theme.colors['Light']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    fontFamily: 'Inter_400Regular',
                    fontSize: [
                      { minWidth: Breakpoints.Tablet, value: 18 },
                      { minWidth: Breakpoints.Desktop, value: 20 },
                      { minWidth: Breakpoints.BigScreen, value: 24 },
                    ],
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 48 },
                      { minWidth: Breakpoints.Tablet, value: 60 },
                      { minWidth: Breakpoints.BigScreen, value: 70 },
                    ],
                    marginTop: 10,
                    paddingLeft: 16,
                    paddingRight: 16,
                  }
                ),
                dimensions.width
              )}
              value={textInputValue}
            />
            {/* Note */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: theme.colors['Medium'],
                    fontFamily: 'Inter_300Light',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 11 },
                      { minWidth: Breakpoints.Tablet, value: 15 },
                      { minWidth: Breakpoints.Desktop, value: 17 },
                      { minWidth: Breakpoints.BigScreen, value: 20 },
                    ],
                    marginTop: [
                      { minWidth: Breakpoints.Mobile, value: 6 },
                      { minWidth: Breakpoints.BigScreen, value: 12 },
                      { minWidth: Breakpoints.Desktop, value: 10 },
                      { minWidth: Breakpoints.Laptop, value: 8 },
                      { minWidth: Breakpoints.Tablet, value: 8 },
                    ],
                    opacity: 0.7,
                  }
                ),
                dimensions.width
              )}
            >
              {'Firstly add country code, then phone'}
            </Text>
          </View>
          {/* Send code */}
          <Button
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('ConfirmCodeScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.ButtonStyles(theme)['action btn tablet'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['action btn tablet'].style,
                { marginTop: 40 }
              ),
              dimensions.width
            )}
            title={'Send code'}
          />
        </View>
        {/* Bottom View */}
        <View
          style={StyleSheet.applyWidth(
            {
              flex: 1,
              justifyContent: 'flex-end',
              marginBottom: 20,
              paddingBottom: 40,
            },
            dimensions.width
          )}
        >
          {/* Return to login */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Pressable
              onPress={() => {
                try {
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ marginLeft: 8 }, dimensions.width)}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: theme.colors['Custom Color_3'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: [
                        { minWidth: Breakpoints.Tablet, value: 18 },
                        { minWidth: Breakpoints.BigScreen, value: 25 },
                      ],
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Return to login'}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ForgotPasswordScreen);
