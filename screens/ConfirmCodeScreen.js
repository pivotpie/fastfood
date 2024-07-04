import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Divider,
  Icon,
  Pressable,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const ConfirmCodeScreen = props => {
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
                  { minWidth: Breakpoints.BigScreen, value: 80 },
                ],
                width: [
                  { minWidth: Breakpoints.Tablet, value: 60 },
                  { minWidth: Breakpoints.BigScreen, value: 80 },
                  { minWidth: Breakpoints.Desktop, value: 80 },
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
            { flex: 0.5, padding: 20 },
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
            {'Reset code'}
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
                  { minWidth: Breakpoints.BigScreen, value: 32 },
                  { minWidth: Breakpoints.Desktop, value: 30 },
                ],
                marginTop: 4,
                padding: 20,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'We sent 6-digit code to +1 234 567 89 00'}
          </Text>
        </View>
        {/* Form */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: [
                { minWidth: Breakpoints.Tablet, value: 'stretch' },
                { minWidth: Breakpoints.Laptop, value: 'stretch' },
              ],
              flex: 1,
              justifyContent: 'space-between',
              padding: 20,
            },
            dimensions.width
          )}
        >
          {/* OTP */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: [
                  { minWidth: Breakpoints.Mobile, value: 'space-between' },
                  { minWidth: Breakpoints.Laptop, value: 'space-between' },
                ],
                marginLeft: [
                  { minWidth: Breakpoints.Laptop, value: '10%' },
                  { minWidth: Breakpoints.Tablet, value: '10%' },
                  { minWidth: Breakpoints.Desktop, value: '20%' },
                ],
                marginRight: [
                  { minWidth: Breakpoints.Laptop, value: '10%' },
                  { minWidth: Breakpoints.Tablet, value: '10%' },
                  { minWidth: Breakpoints.Desktop, value: '20%' },
                ],
                width: [
                  { minWidth: Breakpoints.Tablet, value: '80%' },
                  { minWidth: Breakpoints.Desktop, value: '60%' },
                ],
              },
              dimensions.width
            )}
          >
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
              placeholder={'•'}
              placeholderTextColor={theme.colors['Light']}
              selectTextOnFocus={true}
              selectionColor={theme.colors['Primary']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    fontFamily: 'Inter_400Regular',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 16 },
                      { minWidth: Breakpoints.Tablet, value: 20 },
                      { minWidth: Breakpoints.Desktop, value: 22 },
                      { minWidth: Breakpoints.BigScreen, value: 26 },
                    ],
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 48 },
                      { minWidth: Breakpoints.Tablet, value: 60 },
                      { minWidth: Breakpoints.BigScreen, value: 70 },
                    ],
                    paddingLeft: 16,
                    paddingRight: 16,
                    textAlign: 'center',
                    width: [
                      { minWidth: Breakpoints.Mobile, value: 48 },
                      { minWidth: Breakpoints.Tablet, value: 60 },
                      { minWidth: Breakpoints.BigScreen, value: 70 },
                    ],
                  }
                ),
                dimensions.width
              )}
              value={textInputValue}
            />
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
              placeholder={'•'}
              placeholderTextColor={theme.colors['Light']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    fontFamily: 'Inter_400Regular',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 16 },
                      { minWidth: Breakpoints.Tablet, value: 20 },
                      { minWidth: Breakpoints.Desktop, value: 22 },
                      { minWidth: Breakpoints.BigScreen, value: 24 },
                    ],
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 48 },
                      { minWidth: Breakpoints.Tablet, value: 60 },
                      { minWidth: Breakpoints.BigScreen, value: 70 },
                    ],
                    paddingLeft: 16,
                    paddingRight: 16,
                    textAlign: 'center',
                    width: [
                      { minWidth: Breakpoints.Mobile, value: 48 },
                      { minWidth: Breakpoints.Tablet, value: 60 },
                      { minWidth: Breakpoints.BigScreen, value: 70 },
                    ],
                  }
                ),
                dimensions.width
              )}
              value={textInputValue}
            />
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
              placeholder={'•'}
              placeholderTextColor={theme.colors['Light']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    fontFamily: 'Inter_400Regular',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 16 },
                      { minWidth: Breakpoints.Tablet, value: 20 },
                      { minWidth: Breakpoints.Desktop, value: 22 },
                      { minWidth: Breakpoints.BigScreen, value: 24 },
                    ],
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 48 },
                      { minWidth: Breakpoints.Tablet, value: 60 },
                      { minWidth: Breakpoints.BigScreen, value: 70 },
                    ],
                    paddingLeft: 16,
                    paddingRight: 16,
                    textAlign: 'center',
                    width: [
                      { minWidth: Breakpoints.Mobile, value: 48 },
                      { minWidth: Breakpoints.Tablet, value: 60 },
                      { minWidth: Breakpoints.BigScreen, value: 70 },
                    ],
                  }
                ),
                dimensions.width
              )}
              value={textInputValue}
            />
            <Divider
              {...GlobalStyles.DividerStyles(theme)['Divider'].props}
              color={theme.colors['Divider']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.DividerStyles(theme)['Divider'].style,
                  { height: 2, width: 10 }
                ),
                dimensions.width
              )}
            />
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
              placeholder={'•'}
              placeholderTextColor={theme.colors['Light']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    fontFamily: 'Inter_400Regular',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 16 },
                      { minWidth: Breakpoints.Tablet, value: 20 },
                      { minWidth: Breakpoints.Desktop, value: 22 },
                      { minWidth: Breakpoints.BigScreen, value: 24 },
                    ],
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 48 },
                      { minWidth: Breakpoints.Tablet, value: 60 },
                      { minWidth: Breakpoints.BigScreen, value: 70 },
                    ],
                    paddingLeft: 16,
                    paddingRight: 16,
                    textAlign: 'center',
                    width: [
                      { minWidth: Breakpoints.Mobile, value: 48 },
                      { minWidth: Breakpoints.Tablet, value: 60 },
                      { minWidth: Breakpoints.BigScreen, value: 70 },
                    ],
                  }
                ),
                dimensions.width
              )}
              value={textInputValue}
            />
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
              placeholder={'•'}
              placeholderTextColor={theme.colors['Light']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    fontFamily: 'Inter_400Regular',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 16 },
                      { minWidth: Breakpoints.Tablet, value: 20 },
                      { minWidth: Breakpoints.Desktop, value: 22 },
                      { minWidth: Breakpoints.BigScreen, value: 24 },
                    ],
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 48 },
                      { minWidth: Breakpoints.Tablet, value: 60 },
                      { minWidth: Breakpoints.BigScreen, value: 70 },
                    ],
                    paddingLeft: 16,
                    paddingRight: 16,
                    textAlign: 'center',
                    width: [
                      { minWidth: Breakpoints.Mobile, value: 48 },
                      { minWidth: Breakpoints.Tablet, value: 60 },
                      { minWidth: Breakpoints.BigScreen, value: 70 },
                    ],
                  }
                ),
                dimensions.width
              )}
              value={textInputValue}
            />
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
              placeholder={'•'}
              placeholderTextColor={theme.colors['Light']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    fontFamily: 'Inter_400Regular',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 16 },
                      { minWidth: Breakpoints.Tablet, value: 20 },
                      { minWidth: Breakpoints.Desktop, value: 22 },
                      { minWidth: Breakpoints.BigScreen, value: 24 },
                    ],
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 48 },
                      { minWidth: Breakpoints.Tablet, value: 60 },
                      { minWidth: Breakpoints.BigScreen, value: 70 },
                    ],
                    paddingLeft: 16,
                    paddingRight: 16,
                    textAlign: 'center',
                    width: [
                      { minWidth: Breakpoints.Mobile, value: 48 },
                      { minWidth: Breakpoints.Tablet, value: 60 },
                      { minWidth: Breakpoints.BigScreen, value: 70 },
                    ],
                  }
                ),
                dimensions.width
              )}
              value={textInputValue}
            />
          </View>
          {/* Confirm */}
          <Button
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('NewPasswordScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.ButtonStyles(theme)['action btn big screen'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['action btn big screen'].style,
                {
                  fontSize: { minWidth: Breakpoints.Tablet, value: 20 },
                  height: { minWidth: Breakpoints.Tablet, value: 60 },
                  marginTop: 60,
                }
              ),
              dimensions.width
            )}
            title={'Confirm'}
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

export default withTheme(ConfirmCodeScreen);
