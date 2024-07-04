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
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

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
                  { minWidth: Breakpoints.BigScreen, value: 80 },
                  { minWidth: Breakpoints.Desktop, value: 70 },
                  { minWidth: Breakpoints.Laptop, value: 60 },
                  { minWidth: Breakpoints.Tablet, value: 60 },
                ],
                width: [
                  { minWidth: Breakpoints.Desktop, value: 70 },
                  { minWidth: Breakpoints.Laptop, value: 60 },
                  { minWidth: Breakpoints.Tablet, value: 60 },
                  { minWidth: Breakpoints.BigScreen, value: 80 },
                ],
              }
            ),
            dimensions.width
          )}
        >
          <Icon
            name={'Feather/chevron-left'}
            size={28}
            style={StyleSheet.applyWidth(
              {
                height: { minWidth: Breakpoints.Tablet, value: 50 },
                width: { minWidth: Breakpoints.Tablet, value: 50 },
              },
              dimensions.width
            )}
          />
        </View>
      </Pressable>
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
              { minWidth: Breakpoints.BigScreen, value: 32 },
              { minWidth: Breakpoints.Laptop, value: 28 },
              { minWidth: Breakpoints.Desktop, value: 30 },
            ],
            textAlign: 'center',
          }),
          dimensions.width
        )}
      >
        {'Log in'}
      </Text>

      <KeyboardAwareScrollView
        enableAutomaticScroll={false}
        enableOnAndroid={false}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 40 },
          dimensions.width
        )}
      >
        {/* Form */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, padding: 20 },
            dimensions.width
          )}
        >
          {/* Email */}
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
                      { minWidth: Breakpoints.Tablet, value: 18 },
                      { minWidth: Breakpoints.Desktop, value: 20 },
                      { minWidth: Breakpoints.BigScreen, value: 24 },
                    ],
                    opacity: 0.7,
                  }
                ),
                dimensions.width
              )}
            >
              {'Email'}
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
              placeholder={'example@mail.com'}
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
                    textAlign: 'left',
                  }
                ),
                dimensions.width
              )}
              value={textInputValue}
            />
          </View>
          {/* Password */}
          <View
            style={StyleSheet.applyWidth(
              {
                marginTop: [
                  { minWidth: Breakpoints.Mobile, value: 20 },
                  { minWidth: Breakpoints.Tablet, value: 40 },
                  { minWidth: Breakpoints.BigScreen, value: 60 },
                ],
              },
              dimensions.width
            )}
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
                      { minWidth: Breakpoints.Tablet, value: 18 },
                      { minWidth: Breakpoints.Desktop, value: 20 },
                      { minWidth: Breakpoints.BigScreen, value: 24 },
                    ],
                    opacity: 0.7,
                  }
                ),
                dimensions.width
              )}
            >
              {'Password'}
            </Text>
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue2(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
              placeholder={'Enter password'}
              placeholderTextColor={theme.colors['Light']}
              secureTextEntry={true}
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
              value={textInputValue2}
            />
          </View>
        </View>
        {/* Bottom View */}
        <View
          style={StyleSheet.applyWidth(
            {
              marginBottom: 20,
              marginTop: [
                { minWidth: Breakpoints.Mobile, value: 12 },
                { minWidth: Breakpoints.BigScreen, value: 40 },
              ],
            },
            dimensions.width
          )}
        >
          {/* Log in */}
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
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                {
                  borderRadius: 12,
                  fontFamily: 'Inter_500Medium',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 16 },
                    { minWidth: Breakpoints.Tablet, value: 20 },
                    { minWidth: Breakpoints.BigScreen, value: 24 },
                  ],
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 48 },
                    { minWidth: Breakpoints.Tablet, value: 60 },
                    { minWidth: Breakpoints.BigScreen, value: 80 },
                  ],
                  margin: 20,
                }
              ),
              dimensions.width
            )}
            title={'Log in'}
          />
          {/* or */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Inter_400Regular',
                fontSize: [
                  { minWidth: Breakpoints.Tablet, value: 18 },
                  { minWidth: Breakpoints.BigScreen, value: 25 },
                ],
                margin: [
                  { minWidth: Breakpoints.Tablet, value: 25 },
                  { minWidth: Breakpoints.BigScreen, value: 80 },
                ],
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'or'}
          </Text>
          {/* Social options */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingBottom: 6,
                paddingTop: 6,
              },
              dimensions.width
            )}
          >
            {/* Google */}
            <Pressable
              style={StyleSheet.applyWidth(
                {
                  marginLeft: 6,
                  marginRight: [
                    { minWidth: Breakpoints.Mobile, value: 6 },
                    { minWidth: Breakpoints.Tablet, value: 15 },
                    { minWidth: Breakpoints.BigScreen, value: 50 },
                  ],
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 48,
                    justifyContent: 'center',
                    width: 48,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={Images.Google}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      {
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 40 },
                          { minWidth: Breakpoints.BigScreen, value: 65 },
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 40 },
                          { minWidth: Breakpoints.BigScreen, value: 65 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
            {/* FB */}
            <Pressable
              style={StyleSheet.applyWidth(
                {
                  marginLeft: [
                    { minWidth: Breakpoints.Mobile, value: 6 },
                    { minWidth: Breakpoints.Tablet, value: 15 },
                    { minWidth: Breakpoints.BigScreen, value: 50 },
                  ],
                  marginRight: [
                    { minWidth: Breakpoints.Mobile, value: 6 },
                    { minWidth: Breakpoints.Tablet, value: 15 },
                    { minWidth: Breakpoints.BigScreen, value: 50 },
                  ],
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 48,
                    justifyContent: 'center',
                    width: 48,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={Images.FB}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      {
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 40 },
                          { minWidth: Breakpoints.BigScreen, value: 65 },
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 40 },
                          { minWidth: Breakpoints.BigScreen, value: 65 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
            {/* Apple */}
            <Pressable
              style={StyleSheet.applyWidth(
                {
                  marginLeft: [
                    { minWidth: Breakpoints.Mobile, value: 6 },
                    { minWidth: Breakpoints.Tablet, value: 15 },
                    { minWidth: Breakpoints.BigScreen, value: 50 },
                  ],
                  marginRight: [
                    { minWidth: Breakpoints.Mobile, value: 6 },
                    { minWidth: Breakpoints.Tablet, value: 15 },
                    { minWidth: Breakpoints.BigScreen, value: 50 },
                  ],
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 48,
                    justifyContent: 'center',
                    width: 48,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={Images.Apple}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      {
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 40 },
                          { minWidth: Breakpoints.BigScreen, value: 65 },
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 40 },
                          { minWidth: Breakpoints.BigScreen, value: 65 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
          </View>
          {/* Forgot password? */}
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
                  navigation.navigate('ForgotPasswordScreen');
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
                      fontFamily: 'Inter_400Regular',
                      fontSize: [
                        { minWidth: Breakpoints.Tablet, value: 18 },
                        { minWidth: Breakpoints.BigScreen, value: 25 },
                      ],
                      marginTop: [
                        { minWidth: Breakpoints.Tablet, value: 25 },
                        { minWidth: Breakpoints.BigScreen, value: 60 },
                      ],
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Forgot password?'}
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(LoginScreen);
