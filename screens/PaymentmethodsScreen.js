import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  DatePicker,
  Icon,
  Pressable,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Image, Modal, Text, View } from 'react-native';

const PaymentmethodsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [AddNewCard, setAddNewCard] = React.useState(false);
  const [DeleteCard, setDeleteCard] = React.useState(false);
  const [EditMode, setEditMode] = React.useState(false);
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState(1);
  const [date, setDate] = React.useState(new Date());
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
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
            <Icon name={'Ionicons/chevron-back'} size={28} />
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
          {'Payment method'}
        </Text>
        {/* Edit */}
        <>
          {EditMode ? null : (
            <Pressable
              onPress={() => {
                try {
                  setEditMode(true);
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
                          { minWidth: Breakpoints.Laptop, value: 21 },
                          { minWidth: Breakpoints.Desktop, value: 23 },
                          { minWidth: Breakpoints.BigScreen, value: 25 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Edit'}
                </Text>
              </View>
            </Pressable>
          )}
        </>
        {/* Done */}
        <>
          {!EditMode ? null : (
            <Pressable
              onPress={() => {
                try {
                  setEditMode(false);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View
                {...GlobalStyles.ViewStyles(theme)['header action'].props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['header action'].style,
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      { fontFamily: 'Inter_400Regular' }
                    ),
                    dimensions.width
                  )}
                >
                  {'Done'}
                </Text>
              </View>
            </Pressable>
          )}
        </>
      </View>
      {/* Main View */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color'],
            flex: 1,
            justifyContent: 'space-between',
          },
          dimensions.width
        )}
      >
        <RadioButtonGroup
          onValueChange={newRadioButtonGroupValue => {
            const radioButtonGroupValue = newRadioButtonGroupValue;
            try {
              setRadioButtonGroupValue(newRadioButtonGroupValue);
            } catch (err) {
              console.error(err);
            }
          }}
          value={radioButtonGroupValue}
        >
          {/* Payment methods */}
          <View
            style={StyleSheet.applyWidth(
              {
                marginTop: 20,
                padding: [
                  { minWidth: Breakpoints.Mobile, value: 20 },
                  { minWidth: Breakpoints.BigScreen, value: 35 },
                  { minWidth: Breakpoints.Desktop, value: 30 },
                  { minWidth: Breakpoints.Tablet, value: 25 },
                ],
              },
              dimensions.width
            )}
          >
            {/* Payoneer */}
            <Pressable
              onPress={() => {
                try {
                  setRadioButtonGroupValue(1);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 50 },
                      { minWidth: Breakpoints.Tablet, value: 65 },
                      { minWidth: Breakpoints.Laptop, value: 70 },
                      { minWidth: Breakpoints.Desktop, value: 75 },
                      { minWidth: Breakpoints.BigScreen, value: 85 },
                    ],
                    justifyContent: 'space-between',
                  },
                  dimensions.width
                )}
              >
                {/* Menu Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={Images.Payoneer}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      {
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 22 },
                          { minWidth: Breakpoints.BigScreen, value: 44 },
                          { minWidth: Breakpoints.Tablet, value: 33 },
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 32 },
                          { minWidth: Breakpoints.BigScreen, value: 64 },
                          { minWidth: Breakpoints.Tablet, value: 48 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                />
                {/* Details */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flex: 1,
                      paddingLeft: [
                        { minWidth: Breakpoints.Mobile, value: 16 },
                        { minWidth: Breakpoints.BigScreen, value: 25 },
                      ],
                      paddingRight: 16,
                    },
                    dimensions.width
                  )}
                >
                  {/* title */}
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Inter_500Medium',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 16 },
                            { minWidth: Breakpoints.Tablet, value: 19 },
                            { minWidth: Breakpoints.Laptop, value: 21 },
                            { minWidth: Breakpoints.Desktop, value: 23 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Payoneer'}
                  </Text>
                  {/* ~ value */}
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Inter_300Light',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 12 },
                            { minWidth: Breakpoints.Tablet, value: 14 },
                            { minWidth: Breakpoints.Laptop, value: 16 },
                            { minWidth: Breakpoints.Desktop, value: 18 },
                            { minWidth: Breakpoints.BigScreen, value: 20 },
                          ],
                          marginTop: 4,
                          opacity: 0.6,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Mastercard **** 7890'}
                  </Text>
                </View>
                <>
                  {EditMode ? null : (
                    <RadioButton
                      selectedIcon={'MaterialIcons/radio-button-checked'}
                      size={24}
                      unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                      color={theme.colors['Custom Color_3']}
                      unselectedColor={theme.colors['Divider']}
                      value={1}
                    />
                  )}
                </>
                <>
                  {!EditMode ? null : (
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      {/* Edit */}
                      <Pressable>
                        <View
                          style={StyleSheet.applyWidth(
                            { alignItems: 'center', justifyContent: 'center' },
                            dimensions.width
                          )}
                        >
                          <Icon
                            size={24}
                            color={theme.colors['Custom Color_2']}
                            name={'AntDesign/edit'}
                          />
                        </View>
                      </Pressable>
                      {/* Delete */}
                      <Pressable
                        onPress={() => {
                          try {
                            setDeleteCard(true);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginLeft: 15,
                            },
                            dimensions.width
                          )}
                        >
                          <Icon
                            size={24}
                            color={theme.colors['Custom Color_4']}
                            name={'AntDesign/delete'}
                          />
                        </View>
                      </Pressable>
                    </View>
                  )}
                </>
              </View>
            </Pressable>
            {/* Transfer wise */}
            <Pressable
              onPress={() => {
                try {
                  setRadioButtonGroupValue(2);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ marginTop: 14 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 50 },
                      { minWidth: Breakpoints.BigScreen, value: 85 },
                      { minWidth: Breakpoints.Desktop, value: 75 },
                      { minWidth: Breakpoints.Laptop, value: 70 },
                      { minWidth: Breakpoints.Tablet, value: 65 },
                    ],
                    justifyContent: 'space-between',
                  },
                  dimensions.width
                )}
              >
                {/* Menu Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={Images.TransferWise}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      {
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 22 },
                          { minWidth: Breakpoints.BigScreen, value: 44 },
                          { minWidth: Breakpoints.Tablet, value: 33 },
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 32 },
                          { minWidth: Breakpoints.BigScreen, value: 64 },
                          { minWidth: Breakpoints.Tablet, value: 48 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                />
                {/* Details */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flex: 1,
                      paddingLeft: [
                        { minWidth: Breakpoints.Mobile, value: 16 },
                        { minWidth: Breakpoints.BigScreen, value: 25 },
                      ],
                      paddingRight: 16,
                    },
                    dimensions.width
                  )}
                >
                  {/* title */}
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Inter_500Medium',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 16 },
                            { minWidth: Breakpoints.Tablet, value: 19 },
                            { minWidth: Breakpoints.Laptop, value: 21 },
                            { minWidth: Breakpoints.Desktop, value: 23 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Transfer wise'}
                  </Text>
                  {/* ~ value */}
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Inter_300Light',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 12 },
                            { minWidth: Breakpoints.BigScreen, value: 20 },
                            { minWidth: Breakpoints.Desktop, value: 18 },
                            { minWidth: Breakpoints.Laptop, value: 16 },
                            { minWidth: Breakpoints.Tablet, value: 14 },
                          ],
                          marginTop: 4,
                          opacity: 0.6,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Visa card **** 7890'}
                  </Text>
                </View>
                <>
                  {EditMode ? null : (
                    <RadioButton
                      selectedIcon={'MaterialIcons/radio-button-checked'}
                      size={24}
                      unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                      color={theme.colors['Custom Color_3']}
                      unselectedColor={theme.colors['Divider']}
                      value={2}
                    />
                  )}
                </>
              </View>
            </Pressable>
            {/* Cash */}
            <Pressable
              onPress={() => {
                try {
                  setRadioButtonGroupValue(3);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ marginTop: 14 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 50 },
                      { minWidth: Breakpoints.Tablet, value: 65 },
                      { minWidth: Breakpoints.Laptop, value: 70 },
                      { minWidth: Breakpoints.Desktop, value: 75 },
                      { minWidth: Breakpoints.BigScreen, value: 85 },
                    ],
                    justifyContent: 'space-between',
                  },
                  dimensions.width
                )}
              >
                {/* Menu Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={Images.Cash}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      {
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 22 },
                          { minWidth: Breakpoints.BigScreen, value: 44 },
                          { minWidth: Breakpoints.Tablet, value: 33 },
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 32 },
                          { minWidth: Breakpoints.BigScreen, value: 64 },
                          { minWidth: Breakpoints.Tablet, value: 48 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                />
                {/* Details */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flex: 1,
                      paddingLeft: [
                        { minWidth: Breakpoints.Mobile, value: 16 },
                        { minWidth: Breakpoints.BigScreen, value: 25 },
                      ],
                      paddingRight: 16,
                    },
                    dimensions.width
                  )}
                >
                  {/* title */}
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Inter_500Medium',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 16 },
                            { minWidth: Breakpoints.Tablet, value: 19 },
                            { minWidth: Breakpoints.Laptop, value: 21 },
                            { minWidth: Breakpoints.Desktop, value: 23 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Cash'}
                  </Text>
                </View>
                <>
                  {EditMode ? null : (
                    <RadioButton
                      onPress={() => {
                        try {
                          setRadioButtonGroupValue(3);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      selectedIcon={'MaterialIcons/radio-button-checked'}
                      size={24}
                      unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                      color={theme.colors['Custom Color_3']}
                      unselectedColor={theme.colors['Divider']}
                      value={3}
                    />
                  )}
                </>
              </View>
            </Pressable>
          </View>
        </RadioButtonGroup>
        {/* Add new card */}
        <Button
          iconPosition={'left'}
          onPress={() => {
            try {
              setAddNewCard(true);
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['action btn big screen'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['action btn big screen'].style,
              {
                margin: [
                  { minWidth: Breakpoints.Mobile, value: 20 },
                  { minWidth: Breakpoints.BigScreen, value: 35 },
                  { minWidth: Breakpoints.Desktop, value: 30 },
                  { minWidth: Breakpoints.Tablet, value: 25 },
                ],
              }
            ),
            dimensions.width
          )}
          title={'Add new card'}
        />
      </View>
      {/* Add New Card Modal */}
      <>
        {!AddNewCard ? null : (
          <Modal
            supportedOrientations={['portrait', 'landscape']}
            animationType={'slide'}
            transparent={true}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Strong'],
                  bottom: 0,
                  flex: 1,
                  left: 0,
                  opacity: 0.25,
                  position: 'absolute',
                  right: 0,
                  top: 0,
                },
                dimensions.width
              )}
            />
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Custom Color'],
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  bottom: 0,
                  flex: 1,
                  left: 0,
                  padding: 20,
                  position: 'absolute',
                  right: 0,
                },
                dimensions.width
              )}
            >
              {/* header */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 25,
                    marginLeft: 48,
                  },
                  dimensions.width
                )}
              >
                {/* heading */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        flex: 1,
                        fontFamily: 'Inter_500Medium',
                        fontSize: 16,
                        textAlign: 'center',
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Add new card'}
                </Text>
                {/* Close */}
                <Pressable
                  onPress={() => {
                    try {
                      setAddNewCard(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View>
                    <Icon size={24} name={'Ionicons/close-circle-outline'} />
                  </View>
                </Pressable>
              </View>
              {/* Card number */}
              <View
                {...GlobalStyles.ViewStyles(theme)['fd'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['fd'].style,
                    { flexDirection: 'column' }
                  ),
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
                        fontSize: 12,
                        opacity: 0.7,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Card number'}
                </Text>
                <TextInput
                  autoCapitalize={'none'}
                  autoCorrect={true}
                  changeTextDelay={500}
                  onChangeText={newTextInputValue => {
                    const textInputValue = newTextInputValue;
                    try {
                      setValue(value);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  webShowOutline={true}
                  {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
                  keyboardType={'numeric'}
                  placeholder={'0000 0000 0000 0000'}
                  placeholderTextColor={theme.colors['Light']}
                  selectionColor={theme.colors['Primary']}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                      {
                        fontFamily: 'Inter_400Regular',
                        height: 48,
                        marginTop: 10,
                        paddingLeft: 16,
                        paddingRight: 16,
                      }
                    ),
                    dimensions.width
                  )}
                  value={textInputValue}
                />
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', justifyContent: 'space-between' },
                  dimensions.width
                )}
              >
                {/* Expired date */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['fd'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['fd'].style,
                      { flex: 1, marginRight: 10, marginTop: 24 }
                    ),
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    style={StyleSheet.applyWidth(
                      {
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12,
                        opacity: 0.7,
                      },
                      dimensions.width
                    )}
                  >
                    {'Expired date'}
                  </Text>
                  <TextInput
                    autoCapitalize={'none'}
                    autoCorrect={true}
                    changeTextDelay={500}
                    onChangeText={newTextInputValue => {
                      const textInputValue = newTextInputValue;
                      try {
                        setValue(value);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    webShowOutline={true}
                    {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
                    keyboardType={'numeric'}
                    placeholder={'MM/YY'}
                    placeholderTextColor={theme.colors['Light']}
                    selectionColor={theme.colors['Primary']}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                        {
                          fontFamily: 'Inter_400Regular',
                          height: 48,
                          marginTop: 10,
                          paddingLeft: 16,
                          paddingRight: 16,
                        }
                      ),
                      dimensions.width
                    )}
                    value={textInputValue}
                  />
                </View>
                {/* CVV */}
                <View
                  {...GlobalStyles.ViewStyles(theme)['fd'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['fd'].style,
                      { flex: 1, marginLeft: 10, marginTop: 24 }
                    ),
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    style={StyleSheet.applyWidth(
                      {
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12,
                        opacity: 0.7,
                      },
                      dimensions.width
                    )}
                  >
                    {'CVV'}
                  </Text>
                  <TextInput
                    autoCapitalize={'none'}
                    autoCorrect={true}
                    changeTextDelay={500}
                    onChangeText={newTextInputValue => {
                      const textInputValue = newTextInputValue;
                      try {
                        setValue(value);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    webShowOutline={true}
                    {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
                    keyboardType={'numeric'}
                    placeholder={'123'}
                    placeholderTextColor={theme.colors['Light']}
                    selectionColor={theme.colors['Primary']}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                        {
                          fontFamily: 'Inter_400Regular',
                          height: 48,
                          marginTop: 10,
                          paddingLeft: 16,
                          paddingRight: 16,
                        }
                      ),
                      dimensions.width
                    )}
                    value={textInputValue}
                  />
                </View>
              </View>
              {/* Save card */}
              <Button
                iconPosition={'left'}
                onPress={() => {
                  try {
                    setAddNewCard(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                {...GlobalStyles.ButtonStyles(theme)['Action button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Action button'].style,
                    { marginTop: 40 }
                  ),
                  dimensions.width
                )}
                title={'Save card'}
              />
            </View>
          </Modal>
        )}
      </>
      {/* Delete Card Modal */}
      <>
        {!DeleteCard ? null : (
          <Modal
            supportedOrientations={['portrait', 'landscape']}
            animationType={'slide'}
            transparent={true}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Strong'],
                  bottom: 0,
                  flex: 1,
                  left: 0,
                  opacity: 0.25,
                  position: 'absolute',
                  right: 0,
                  top: 0,
                },
                dimensions.width
              )}
            />
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Custom Color'],
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  bottom: 0,
                  flex: 1,
                  left: 0,
                  padding: 20,
                  position: 'absolute',
                  right: 0,
                },
                dimensions.width
              )}
            >
              {/* header */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 25,
                  },
                  dimensions.width
                )}
              >
                {/* blank */}
                <Pressable
                  onPress={() => {
                    try {
                      setAddNewCard(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      { position: 'absolute', right: 0 },
                      dimensions.width
                    )}
                  />
                </Pressable>
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={Images.Warning2}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      { height: 40, top: 20, width: 40 }
                    ),
                    dimensions.width
                  )}
                />
                {/* Close */}
                <Pressable
                  onPress={() => {
                    try {
                      setDeleteCard(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      { position: 'absolute', right: 0 },
                      dimensions.width
                    )}
                  >
                    <Icon size={24} name={'Ionicons/close-circle-outline'} />
                  </View>
                </Pressable>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { marginTop: 25 },
                  dimensions.width
                )}
              >
                {/* heading */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        flex: 1,
                        fontFamily: 'Inter_500Medium',
                        fontSize: 18,
                        textAlign: 'center',
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Delete card'}
                </Text>
                {/* sub heading */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        flex: 1,
                        fontFamily: 'Inter_300Light',
                        marginTop: 15,
                        textAlign: 'center',
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Are you sure to delete bank card?'}
                </Text>
              </View>
              {/* Actions */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 20,
                  },
                  dimensions.width
                )}
              >
                {/* Delete */}
                <Button
                  iconPosition={'left'}
                  onPress={() => {
                    try {
                      setDeleteCard(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  {...GlobalStyles.ButtonStyles(theme)['Action button'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ButtonStyles(theme)['Action button'].style,
                      {
                        backgroundColor: theme.colors['Custom Color_4'],
                        marginTop: 40,
                        width: '48%',
                      }
                    ),
                    dimensions.width
                  )}
                  title={'Yes, delete'}
                />
                {/* Cancel */}
                <Button
                  iconPosition={'left'}
                  onPress={() => {
                    try {
                      setDeleteCard(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  {...GlobalStyles.ButtonStyles(theme)['Action button'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ButtonStyles(theme)['Action button'].style,
                      {
                        backgroundColor: theme.colors['Custom Color'],
                        borderWidth: 1,
                        color: theme.colors['Strong'],
                        marginTop: 40,
                        width: '48%',
                      }
                    ),
                    dimensions.width
                  )}
                  title={'Cancel'}
                />
              </View>
            </View>
          </Modal>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(PaymentmethodsScreen);
