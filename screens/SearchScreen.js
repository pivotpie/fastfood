import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
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
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const SearchScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* Search */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: theme.colors['Custom Color_7'],
            borderColor: theme.colors['Light'],
            borderRadius: 100,
            borderWidth: 1,
            flexDirection: 'row',
            height: [
              { minWidth: Breakpoints.Mobile, value: 50 },
              { minWidth: Breakpoints.Tablet, value: 65 },
              { minWidth: Breakpoints.Laptop, value: 70 },
              { minWidth: Breakpoints.Desktop, value: 75 },
              { minWidth: Breakpoints.BigScreen, value: 80 },
            ],
            justifyContent: 'space-between',
            margin: [
              { minWidth: Breakpoints.Mobile, value: 20 },
              { minWidth: Breakpoints.Tablet, value: 30 },
            ],
            marginBottom: 10,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        <Icon
          size={24}
          color={theme.colors['Light']}
          name={'AntDesign/search1'}
        />
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flex: 1,
              flexDirection: 'row',
              paddingLeft: 10,
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
            placeholder={'Search your Snack'}
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
                  fontSize: 15,
                  width: '100%',
                }
              ),
              dimensions.width
            )}
            value={textInputValue}
          />
        </View>
      </View>
      {/* Suggestions View */}
      <View
        style={StyleSheet.applyWidth(
          {
            flex: 1,
            margin: { minWidth: Breakpoints.Tablet, value: 20 },
            marginTop: { minWidth: Breakpoints.Tablet, value: 0 },
          },
          dimensions.width
        )}
      >
        {/* Suggestions */}
        <ExampleDataApi.FetchFoodSuggestionsGET>
          {({ loading, error, data, refetchFoodSuggestions }) => {
            const suggestionsData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <FlatList
                data={suggestionsData}
                horizontal={false}
                inverted={false}
                keyExtractor={(listData, index) =>
                  listData?.id ?? listData?.uuid ?? index.toString()
                }
                keyboardShouldPersistTaps={'never'}
                listKey={'fOhFeSaT'}
                nestedScrollEnabled={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <>
                      {/* Item */}
                      <Pressable
                        style={StyleSheet.applyWidth(
                          {
                            marginBottom: [
                              { minWidth: Breakpoints.Mobile, value: 12 },
                              { minWidth: Breakpoints.Tablet, value: 15 },
                              { minWidth: Breakpoints.Laptop, value: 18 },
                              { minWidth: Breakpoints.Desktop, value: 22 },
                            ],
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderColor: theme.colors['Light'],
                              borderRadius: 100,
                              borderWidth: 1,
                              flexDirection: 'row',
                              justifyContent: 'center',
                              marginRight: [
                                { minWidth: Breakpoints.Mobile, value: 10 },
                                { minWidth: Breakpoints.Tablet, value: 14 },
                                { minWidth: Breakpoints.Laptop, value: 16 },
                                { minWidth: Breakpoints.Desktop, value: 18 },
                                { minWidth: Breakpoints.BigScreen, value: 20 },
                              ],
                              padding: [
                                { minWidth: Breakpoints.Mobile, value: 12 },
                                { minWidth: Breakpoints.Tablet, value: 16 },
                                { minWidth: Breakpoints.Laptop, value: 20 },
                                { minWidth: Breakpoints.Desktop, value: 22 },
                                { minWidth: Breakpoints.BigScreen, value: 24 },
                              ],
                              paddingBottom: 10,
                              paddingTop: 10,
                            },
                            dimensions.width
                          )}
                        >
                          <Image
                            resizeMode={'cover'}
                            {...GlobalStyles.ImageStyles(theme)['Image'].props}
                            source={{ uri: `${listData?.url}` }}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.ImageStyles(theme)['Image'].style,
                                {
                                  height: [
                                    { minWidth: Breakpoints.Mobile, value: 24 },
                                    { minWidth: Breakpoints.Tablet, value: 32 },
                                    { minWidth: Breakpoints.Laptop, value: 35 },
                                    {
                                      minWidth: Breakpoints.Desktop,
                                      value: 38,
                                    },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 40,
                                    },
                                  ],
                                  width: [
                                    { minWidth: Breakpoints.Mobile, value: 24 },
                                    { minWidth: Breakpoints.Tablet, value: 32 },
                                    { minWidth: Breakpoints.Laptop, value: 35 },
                                    {
                                      minWidth: Breakpoints.Desktop,
                                      value: 38,
                                    },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 40,
                                    },
                                  ],
                                }
                              ),
                              dimensions.width
                            )}
                          />
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                {
                                  fontFamily: 'Inter_400Regular',
                                  fontSize: [
                                    { minWidth: Breakpoints.Mobile, value: 12 },
                                    { minWidth: Breakpoints.Tablet, value: 15 },
                                    { minWidth: Breakpoints.Laptop, value: 18 },
                                    {
                                      minWidth: Breakpoints.Desktop,
                                      value: 20,
                                    },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 22,
                                    },
                                  ],
                                  paddingLeft: 5,
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {listData?.name}
                          </Text>
                        </View>
                      </Pressable>
                    </>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                {...GlobalStyles.FlatListStyles(theme)['List'].props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.FlatListStyles(theme)['List'].style,
                  dimensions.width,
                  ['width', 'height', 'flexGrow']
                )}
                contentContainerStyle={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.FlatListStyles(theme)['List'].style,
                    {
                      alignItems: 'flex-start',
                      flex: 0,
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      margin: 15,
                    }
                  ),
                  dimensions.width
                )}
              />
            );
          }}
        </ExampleDataApi.FetchFoodSuggestionsGET>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SearchScreen);
