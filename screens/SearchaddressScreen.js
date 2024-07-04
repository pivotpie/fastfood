import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Icon,
  Pressable,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const SearchaddressScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
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
          {'New address'}
        </Text>
      </View>
      {/* Main View */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color'],
            flex: [
              { minWidth: Breakpoints.Mobile, value: 0.5 },
              { minWidth: Breakpoints.Laptop, value: 0.7 },
            ],
            padding: [
              { minWidth: Breakpoints.BigScreen, value: 20 },
              { minWidth: Breakpoints.Tablet, value: 10 },
            ],
          },
          dimensions.width
        )}
      >
        {/* Search view */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderColor: theme.colors['Light'],
              borderRadius: 100,
              borderWidth: 1,
              flexDirection: 'row',
              height: [
                { minWidth: Breakpoints.Mobile, value: 48 },
                { minWidth: Breakpoints.Tablet, value: 60 },
                { minWidth: Breakpoints.Laptop, value: 65 },
                { minWidth: Breakpoints.Desktop, value: 70 },
                { minWidth: Breakpoints.BigScreen, value: 80 },
              ],
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
              paddingLeft: [
                { minWidth: Breakpoints.Mobile, value: 16 },
                { minWidth: Breakpoints.Tablet, value: 25 },
                { minWidth: Breakpoints.BigScreen, value: 30 },
              ],
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={theme.colors['Light']}
            name={'Ionicons/md-search-outline'}
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
            placeholder={'Search a place'}
            placeholderTextColor={theme.colors['Light']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                {
                  borderBottomWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  fontFamily: 'Inter_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Tablet, value: 17 },
                    { minWidth: Breakpoints.Laptop, value: 19 },
                    { minWidth: Breakpoints.Desktop, value: 20 },
                    { minWidth: Breakpoints.BigScreen, value: 22 },
                  ],
                  width: '85%',
                }
              ),
              dimensions.width
            )}
            value={textInputValue}
          />
        </View>

        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flex: 1, justifyContent: 'center' },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Image'].props}
            source={Images.Searchaddrss}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Image'].style,
                {
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 85 },
                    { minWidth: Breakpoints.Tablet, value: 140 },
                    { minWidth: Breakpoints.Laptop, value: 168 },
                    { minWidth: Breakpoints.BigScreen, value: 170 },
                  ],
                  width: [
                    { minWidth: Breakpoints.Mobile, value: 120 },
                    { minWidth: Breakpoints.Tablet, value: 200 },
                    { minWidth: Breakpoints.BigScreen, value: 240 },
                  ],
                }
              ),
              dimensions.width
            )}
          />
        </View>
      </View>
      {/* Bottom view */}
      <View style={StyleSheet.applyWidth({ padding: 20 }, dimensions.width)}>
        {/* Choose on map */}
        <Pressable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingBottom: 20,
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Image'].props}
              source={Images.Location}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageStyles(theme)['Image'].style,
                  { height: 24, width: 24 }
                ),
                dimensions.width
              )}
            />
            {/* Choose on map */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    fontFamily: 'Inter_500Medium',
                    fontSize: [
                      { minWidth: Breakpoints.Tablet, value: 18 },
                      { minWidth: Breakpoints.Laptop, value: 20 },
                      { minWidth: Breakpoints.Desktop, value: 22 },
                      { minWidth: Breakpoints.BigScreen, value: 24 },
                    ],
                    marginLeft: 10,
                  }
                ),
                dimensions.width
              )}
            >
              {'Choose on map'}
            </Text>
          </View>
        </Pressable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SearchaddressScreen);
