import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
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

const EditProfileScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Custom Color'] },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        {...GlobalStyles.ViewStyles(theme)['screen header view'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ViewStyles(theme)['screen header view'].style,
            {
              height: [
                { minWidth: Breakpoints.Tablet, value: 65 },
                { minWidth: Breakpoints.Laptop, value: 75 },
                { minWidth: Breakpoints.Desktop, value: 85 },
                { minWidth: Breakpoints.BigScreen, value: 90 },
              ],
              marginRight: 48,
            }
          ),
          dimensions.width
        )}
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
        {/* Screen heading */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              flex: 1,
              fontFamily: 'Inter_500Medium',
              fontSize: [
                { minWidth: Breakpoints.Mobile, value: 19 },
                { minWidth: Breakpoints.Tablet, value: 22 },
                { minWidth: Breakpoints.Laptop, value: 25 },
                { minWidth: Breakpoints.Desktop, value: 28 },
                { minWidth: Breakpoints.BigScreen, value: 30 },
              ],
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'Edit profile'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        enableAutomaticScroll={false}
        enableOnAndroid={false}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        contentContainerStyle={StyleSheet.applyWidth(
          { justifyContent: 'space-between' },
          dimensions.width
        )}
      >
        {/* Form */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color'],
              flex: 1,
              padding: [
                { minWidth: Breakpoints.Mobile, value: 20 },
                { minWidth: Breakpoints.Tablet, value: 30 },
                { minWidth: Breakpoints.BigScreen, value: 40 },
              ],
            },
            dimensions.width
          )}
        >
          {/* Photo */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center' },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Image'].props}
              source={Images.Avatar}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageStyles(theme)['Image'].style,
                  {
                    height: [
                      { minWidth: Breakpoints.Tablet, value: 150 },
                      { minWidth: Breakpoints.Desktop, value: 180 },
                      { minWidth: Breakpoints.BigScreen, value: 200 },
                    ],
                    width: [
                      { minWidth: Breakpoints.Tablet, value: 150 },
                      { minWidth: Breakpoints.Desktop, value: 180 },
                      { minWidth: Breakpoints.BigScreen, value: 200 },
                    ],
                  }
                ),
                dimensions.width
              )}
            />
            {/* Change photo */}
            <Pressable
              onPress={() => {
                const handler = async () => {
                  try {
                    await openImagePickerUtil({
                      mediaTypes: 'All',
                      allowsEditing: false,
                      quality: 0.2,
                      allowsMultipleSelection: false,
                      permissionErrorMessage:
                        'Sorry, we need media library permissions to make this work.',
                      showAlertOnPermissionError: true,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: theme.colors['Primary'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: [
                        { minWidth: Breakpoints.Tablet, value: 17 },
                        { minWidth: Breakpoints.Laptop, value: 19 },
                        { minWidth: Breakpoints.Desktop, value: 21 },
                        { minWidth: Breakpoints.BigScreen, value: 23 },
                      ],
                      padding: 14,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Change photo'}
              </Text>
            </Pressable>
          </View>
          {/* Name */}
          <View
            style={StyleSheet.applyWidth(
              {
                marginTop: [
                  { minWidth: Breakpoints.Mobile, value: 20 },
                  { minWidth: Breakpoints.Tablet, value: 30 },
                  { minWidth: Breakpoints.BigScreen, value: 40 },
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
                      { minWidth: Breakpoints.BigScreen, value: 23 },
                      { minWidth: Breakpoints.Desktop, value: 21 },
                      { minWidth: Breakpoints.Laptop, value: 19 },
                      { minWidth: Breakpoints.Tablet, value: 17 },
                    ],
                    opacity: 0.7,
                  }
                ),
                dimensions.width
              )}
            >
              {'Name'}
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
              placeholder={'Enter your name'}
              placeholderTextColor={theme.colors['Light']}
              selectionColor={theme.colors['Primary']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    fontFamily: 'Inter_400Regular',
                    fontSize: [
                      { minWidth: Breakpoints.Tablet, value: 17 },
                      { minWidth: Breakpoints.Laptop, value: 19 },
                      { minWidth: Breakpoints.Desktop, value: 20 },
                      { minWidth: Breakpoints.BigScreen, value: 21 },
                    ],
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 48 },
                      { minWidth: Breakpoints.Tablet, value: 60 },
                      { minWidth: Breakpoints.Laptop, value: 65 },
                      { minWidth: Breakpoints.Desktop, value: 70 },
                      { minWidth: Breakpoints.BigScreen, value: 80 },
                    ],
                    marginTop: [
                      { minWidth: Breakpoints.Mobile, value: 10 },
                      { minWidth: Breakpoints.Tablet, value: 15 },
                    ],
                    paddingLeft: 16,
                    paddingRight: 16,
                  }
                ),
                dimensions.width
              )}
              value={textInputValue}
            />
          </View>
          {/* Surname */}
          <View
            style={StyleSheet.applyWidth(
              {
                marginTop: [
                  { minWidth: Breakpoints.Mobile, value: 20 },
                  { minWidth: Breakpoints.Tablet, value: 30 },
                  { minWidth: Breakpoints.BigScreen, value: 40 },
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
                      { minWidth: Breakpoints.Tablet, value: 17 },
                      { minWidth: Breakpoints.Laptop, value: 19 },
                      { minWidth: Breakpoints.Desktop, value: 21 },
                      { minWidth: Breakpoints.BigScreen, value: 23 },
                    ],
                    opacity: 0.7,
                  }
                ),
                dimensions.width
              )}
            >
              {'Surname'}
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
              placeholder={'Enter your surname'}
              placeholderTextColor={theme.colors['Light']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    fontFamily: 'Inter_400Regular',
                    fontSize: [
                      { minWidth: Breakpoints.BigScreen, value: 21 },
                      { minWidth: Breakpoints.Desktop, value: 20 },
                      { minWidth: Breakpoints.Laptop, value: 19 },
                      { minWidth: Breakpoints.Tablet, value: 17 },
                    ],
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 48 },
                      { minWidth: Breakpoints.BigScreen, value: 80 },
                      { minWidth: Breakpoints.Desktop, value: 70 },
                      { minWidth: Breakpoints.Laptop, value: 65 },
                      { minWidth: Breakpoints.Tablet, value: 60 },
                    ],
                    marginTop: [
                      { minWidth: Breakpoints.Mobile, value: 10 },
                      { minWidth: Breakpoints.Tablet, value: 15 },
                    ],
                    paddingLeft: 16,
                    paddingRight: 16,
                  }
                ),
                dimensions.width
              )}
              value={textInputValue}
            />
          </View>
          {/* Email */}
          <View
            style={StyleSheet.applyWidth(
              {
                marginTop: [
                  { minWidth: Breakpoints.Mobile, value: 20 },
                  { minWidth: Breakpoints.Tablet, value: 30 },
                  { minWidth: Breakpoints.BigScreen, value: 40 },
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
                      { minWidth: Breakpoints.BigScreen, value: 23 },
                      { minWidth: Breakpoints.Desktop, value: 21 },
                      { minWidth: Breakpoints.Laptop, value: 19 },
                      { minWidth: Breakpoints.Tablet, value: 17 },
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
              placeholder={'Enter your email'}
              placeholderTextColor={theme.colors['Light']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    fontFamily: 'Inter_400Regular',
                    fontSize: [
                      { minWidth: Breakpoints.Tablet, value: 17 },
                      { minWidth: Breakpoints.Laptop, value: 19 },
                      { minWidth: Breakpoints.Desktop, value: 20 },
                      { minWidth: Breakpoints.BigScreen, value: 21 },
                    ],
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 48 },
                      { minWidth: Breakpoints.BigScreen, value: 80 },
                      { minWidth: Breakpoints.Tablet, value: 60 },
                      { minWidth: Breakpoints.Laptop, value: 65 },
                      { minWidth: Breakpoints.Desktop, value: 70 },
                    ],
                    marginTop: [
                      { minWidth: Breakpoints.Mobile, value: 10 },
                      { minWidth: Breakpoints.Tablet, value: 15 },
                    ],
                    paddingLeft: 16,
                    paddingRight: 16,
                  }
                ),
                dimensions.width
              )}
              value={textInputValue}
            />
          </View>
          {/* Phone */}
          <View
            style={StyleSheet.applyWidth(
              {
                marginTop: [
                  { minWidth: Breakpoints.Mobile, value: 20 },
                  { minWidth: Breakpoints.Tablet, value: 30 },
                  { minWidth: Breakpoints.BigScreen, value: 40 },
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
                      { minWidth: Breakpoints.Tablet, value: 17 },
                      { minWidth: Breakpoints.Laptop, value: 19 },
                      { minWidth: Breakpoints.Desktop, value: 21 },
                      { minWidth: Breakpoints.BigScreen, value: 23 },
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
              keyboardType={'numeric'}
              placeholder={'Enter phone number'}
              placeholderTextColor={theme.colors['Light']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    fontFamily: 'Inter_400Regular',
                    fontSize: [
                      { minWidth: Breakpoints.BigScreen, value: 21 },
                      { minWidth: Breakpoints.Desktop, value: 20 },
                      { minWidth: Breakpoints.Laptop, value: 19 },
                      { minWidth: Breakpoints.Tablet, value: 17 },
                    ],
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 48 },
                      { minWidth: Breakpoints.Tablet, value: 60 },
                      { minWidth: Breakpoints.Laptop, value: 65 },
                      { minWidth: Breakpoints.Desktop, value: 70 },
                      { minWidth: Breakpoints.BigScreen, value: 80 },
                    ],
                    marginTop: [
                      { minWidth: Breakpoints.Mobile, value: 10 },
                      { minWidth: Breakpoints.Tablet, value: 15 },
                    ],
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
                    color: theme.colors['Light'],
                    fontFamily: 'Inter_300Light',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 11 },
                      { minWidth: Breakpoints.Tablet, value: 14 },
                      { minWidth: Breakpoints.Laptop, value: 16 },
                      { minWidth: Breakpoints.Desktop, value: 18 },
                      { minWidth: Breakpoints.BigScreen, value: 20 },
                    ],
                    marginTop: 8,
                  }
                ),
                dimensions.width
              )}
            >
              {'Firstly add country code, then phone'}
            </Text>
          </View>
        </View>
        {/* Save details */}
        <Button
          iconPosition={'left'}
          {...GlobalStyles.ButtonStyles(theme)['action btn big screen'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['action btn big screen'].style,
              {
                margin: 20,
                marginTop: { minWidth: Breakpoints.BigScreen, value: 40 },
              }
            ),
            dimensions.width
          )}
          title={'Save details'}
        />
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(EditProfileScreen);
