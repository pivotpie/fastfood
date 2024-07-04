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
  Swiper,
  SwiperItem,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList, MasonryFlashList } from '@shopify/flash-list';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const HomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* Header - Current Location */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', flexDirection: 'row', margin: 20 },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          source={Images.Map}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
              height: [
                { minWidth: Breakpoints.Mobile, value: 24 },
                { minWidth: Breakpoints.Tablet, value: 35 },
                { minWidth: Breakpoints.Laptop, value: 40 },
                { minWidth: Breakpoints.Desktop, value: 45 },
                { minWidth: Breakpoints.BigScreen, value: 50 },
              ],
              width: [
                { minWidth: Breakpoints.Mobile, value: 24 },
                { minWidth: Breakpoints.Tablet, value: 35 },
                { minWidth: Breakpoints.Laptop, value: 40 },
                { minWidth: Breakpoints.Desktop, value: 45 },
                { minWidth: Breakpoints.BigScreen, value: 50 },
              ],
            }),
            dimensions.width
          )}
        />
        <View
          style={StyleSheet.applyWidth({ marginLeft: 12 }, dimensions.width)}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: theme.colors['Medium'],
                fontFamily: 'Inter_400Regular',
                fontSize: [
                  { minWidth: Breakpoints.Mobile, value: 13 },
                  { minWidth: Breakpoints.Tablet, value: 17 },
                  { minWidth: Breakpoints.Laptop, value: 19 },
                  { minWidth: Breakpoints.Desktop, value: 21 },
                  { minWidth: Breakpoints.BigScreen, value: 23 },
                ],
                opacity: 0.8,
              }),
              dimensions.width
            )}
          >
            {'Current location'}
          </Text>

          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Inter_500Medium',
                fontSize: [
                  { minWidth: Breakpoints.BigScreen, value: 18 },
                  { minWidth: Breakpoints.Tablet, value: 18 },
                  { minWidth: Breakpoints.Laptop, value: 20 },
                  { minWidth: Breakpoints.Desktop, value: 24 },
                ],
                marginTop: 2,
              }),
              dimensions.width
            )}
          >
            {'NYC, Boardway ave 79'}
          </Text>
        </View>
      </View>

      <ScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 12 },
          dimensions.width
        )}
      >
        {/* Banners */}
        <Swiper
          dotActiveColor={theme.colors.primary}
          dotColor={theme.colors.light}
          dotsTouchable={true}
          loop={false}
          minDistanceForAction={0.2}
          minDistanceToCapture={5}
          timeout={0}
          vertical={false}
          {...GlobalStyles.SwiperStyles(theme)['Swiper'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.SwiperStyles(theme)['Swiper'].style,
              {
                height: [
                  { minWidth: Breakpoints.Mobile, value: 200 },
                  { minWidth: Breakpoints.Laptop, value: 400 },
                  { minWidth: Breakpoints.Desktop, value: 540 },
                  { minWidth: Breakpoints.BigScreen, value: 620 },
                  { minWidth: Breakpoints.Tablet, value: 450 },
                ],
                marginTop: 10,
              }
            ),
            dimensions.width
          )}
        >
          <SwiperItem
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: [
                  { minWidth: Breakpoints.Mobile, value: 100 },
                  { minWidth: Breakpoints.Tablet, value: 400 },
                  { minWidth: Breakpoints.Laptop, value: 350 },
                  { minWidth: Breakpoints.Desktop, value: 490 },
                  { minWidth: Breakpoints.BigScreen, value: 550 },
                ],
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Image'].props}
              source={Images.Banner}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageStyles(theme)['Image'].style,
                  {
                    borderRadius: 12,
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 170 },
                      { minWidth: Breakpoints.Tablet, value: 400 },
                      { minWidth: Breakpoints.Laptop, value: 350 },
                      { minWidth: Breakpoints.Desktop, value: 490 },
                      { minWidth: Breakpoints.BigScreen, value: 550 },
                    ],
                    width: '94%',
                  }
                ),
                dimensions.width
              )}
            />
          </SwiperItem>
        </Swiper>
        {/* Top categories */}
        <View
          style={StyleSheet.applyWidth(
            {
              paddingBottom: { minWidth: Breakpoints.Laptop, value: 10 },
              paddingLeft: { minWidth: Breakpoints.Tablet, value: 15 },
              paddingRight: { minWidth: Breakpoints.Tablet, value: 15 },
            },
            dimensions.width
          )}
        >
          {/* Header */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 12,
                paddingBottom: 0,
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
                    fontFamily: 'Inter_500Medium',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 18 },
                      { minWidth: Breakpoints.Tablet, value: 21 },
                      { minWidth: Breakpoints.Laptop, value: 24 },
                      { minWidth: Breakpoints.Desktop, value: 26 },
                      { minWidth: Breakpoints.BigScreen, value: 28 },
                    ],
                  }
                ),
                dimensions.width
              )}
            >
              {'Top categories'}
            </Text>
            {/* View all */}
            <Pressable>
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: theme.colors['Light'],
                      fontFamily: 'Inter_400Regular',
                      fontSize: [
                        { minWidth: Breakpoints.Tablet, value: 17 },
                        { minWidth: Breakpoints.Laptop, value: 19 },
                        { minWidth: Breakpoints.Desktop, value: 21 },
                        { minWidth: Breakpoints.BigScreen, value: 23 },
                      ],
                    }
                  ),
                  dimensions.width
                )}
              >
                {'View all'}
              </Text>
            </Pressable>
          </View>

          <ExampleDataApi.FetchFoodCategoriesGET>
            {({ loading, error, data, refetchFoodCategories }) => {
              const fetchData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlashList
                  data={fetchData}
                  estimatedItemSize={50}
                  inverted={false}
                  keyExtractor={(flashListData, index) =>
                    flashListData?.id ?? flashListData?.uuid ?? index.toString()
                  }
                  listKey={'gvarshv1'}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  renderItem={({ item, index }) => {
                    const flashListData = item;
                    return (
                      <>
                        {/* Category */}
                        <Pressable>
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                borderColor: theme.colors['Light'],
                                borderRadius: [
                                  { minWidth: Breakpoints.Mobile, value: 20 },
                                  { minWidth: Breakpoints.Tablet, value: 30 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 37,
                                  },
                                ],
                                borderWidth: 1,
                                flexDirection: 'row',
                                height: [
                                  { minWidth: Breakpoints.Mobile, value: 40 },
                                  { minWidth: Breakpoints.Tablet, value: 60 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 74,
                                  },
                                ],
                                justifyContent: 'center',
                                marginLeft: 6,
                                marginRight: [
                                  { minWidth: Breakpoints.Tablet, value: 10 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 15,
                                  },
                                ],
                                marginTop: [
                                  { minWidth: Breakpoints.Mobile, value: 12 },
                                  { minWidth: Breakpoints.Tablet, value: 15 },
                                  { minWidth: Breakpoints.Laptop, value: 20 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 30,
                                  },
                                ],
                                paddingLeft: [
                                  { minWidth: Breakpoints.Mobile, value: 12 },
                                  { minWidth: Breakpoints.Tablet, value: 15 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 20,
                                  },
                                ],
                                paddingRight: [
                                  { minWidth: Breakpoints.Mobile, value: 12 },
                                  { minWidth: Breakpoints.Tablet, value: 15 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 20,
                                  },
                                ],
                              },
                              dimensions.width
                            )}
                          >
                            <Image
                              resizeMode={'cover'}
                              {...GlobalStyles.ImageStyles(theme)['Image']
                                .props}
                              source={{ uri: `${flashListData?.url}` }}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ImageStyles(theme)['Image']
                                    .style,
                                  {
                                    height: [
                                      {
                                        minWidth: Breakpoints.Mobile,
                                        value: 32,
                                      },
                                      {
                                        minWidth: Breakpoints.Tablet,
                                        value: 40,
                                      },
                                    ],
                                    width: [
                                      {
                                        minWidth: Breakpoints.Mobile,
                                        value: 32,
                                      },
                                      {
                                        minWidth: Breakpoints.Tablet,
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
                                    fontFamily: 'Inter_500Medium',
                                    fontSize: [
                                      {
                                        minWidth: Breakpoints.Tablet,
                                        value: 18,
                                      },
                                      {
                                        minWidth: Breakpoints.Laptop,
                                        value: 21,
                                      },
                                      {
                                        minWidth: Breakpoints.Desktop,
                                        value: 23,
                                      },
                                      {
                                        minWidth: Breakpoints.BigScreen,
                                        value: 25,
                                      },
                                    ],
                                    marginLeft: 4,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {flashListData?.name}
                            </Text>
                          </View>
                        </Pressable>
                      </>
                    );
                  }}
                  showsVerticalScrollIndicator={true}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              );
            }}
          </ExampleDataApi.FetchFoodCategoriesGET>
        </View>
        {/* Recommended */}
        <>
          {dimensions.width >= Breakpoints.Tablet ? null : (
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginTop: 16 },
                dimensions.width
              )}
            >
              {/* Header */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 12,
                    paddingBottom: 0,
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
                        fontFamily: 'Inter_500Medium',
                        fontSize: [
                          { minWidth: Breakpoints.Mobile, value: 18 },
                          { minWidth: Breakpoints.Tablet, value: 21 },
                          { minWidth: Breakpoints.Laptop, value: 23 },
                          { minWidth: Breakpoints.Desktop, value: 25 },
                          { minWidth: Breakpoints.BigScreen, value: 27 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Recommended'}
                </Text>
                {/* View all */}
                <Pressable>
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          color: theme.colors['Light'],
                          fontFamily: 'Inter_400Regular',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'View all'}
                  </Text>
                </Pressable>
              </View>
              {/* Restaurants */}
              <ExampleDataApi.FetchRestaurantsGET>
                {({ loading, error, data, refetchRestaurants }) => {
                  const restaurantsData = data?.json;
                  if (loading) {
                    return <ActivityIndicator />;
                  }

                  if (error || data?.status < 200 || data?.status >= 300) {
                    return <ActivityIndicator />;
                  }

                  return (
                    <MasonryFlashList
                      data={restaurantsData}
                      estimatedItemSize={50}
                      keyExtractor={(masonryListData, index) =>
                        masonryListData?.id ??
                        masonryListData?.uuid ??
                        index.toString()
                      }
                      listKey={'RqwjXNe1'}
                      onEndReachedThreshold={0.5}
                      renderItem={({ item, index }) => {
                        const masonryListData = item;
                        return (
                          <>
                            {/* Record */}
                            <Pressable
                              onPress={() => {
                                try {
                                  navigation.navigate(
                                    'RestaurantDetailsScreen'
                                  );
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    marginTop: 16,
                                    paddingLeft: '5%',
                                    paddingRight: 4,
                                    width: '96%',
                                  },
                                  dimensions.width
                                )}
                              >
                                <Image
                                  resizeMode={'cover'}
                                  {...GlobalStyles.ImageStyles(theme)['Image']
                                    .props}
                                  source={{ uri: `${masonryListData?.url}` }}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.ImageStyles(theme)['Image']
                                        .style,
                                      {
                                        borderRadius: 8,
                                        height: 120,
                                        width: '100%',
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                />
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      flexDirection: 'row',
                                      justifyContent: 'space-between',
                                      marginTop: 8,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {/* Name */}
                                  <Text
                                    accessible={true}
                                    {...GlobalStyles.TextStyles(theme)['Text']
                                      .props}
                                    style={StyleSheet.applyWidth(
                                      StyleSheet.compose(
                                        GlobalStyles.TextStyles(theme)['Text']
                                          .style,
                                        { fontFamily: 'Inter_500Medium' }
                                      ),
                                      dimensions.width
                                    )}
                                  >
                                    {masonryListData?.name}
                                  </Text>
                                  {/* Rating */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    <Icon
                                      name={'AntDesign/star'}
                                      size={14}
                                      style={StyleSheet.applyWidth(
                                        { marginRight: 5 },
                                        dimensions.width
                                      )}
                                    />
                                    <Text
                                      accessible={true}
                                      {...GlobalStyles.TextStyles(theme)['Text']
                                        .props}
                                      style={StyleSheet.applyWidth(
                                        GlobalStyles.TextStyles(theme)['Text']
                                          .style,
                                        dimensions.width
                                      )}
                                    >
                                      {masonryListData?.Rating}
                                    </Text>
                                  </View>
                                </View>
                                {/* Avg Cost */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      alignSelf: 'flex-start',
                                      backgroundColor:
                                        theme.colors['Custom Color_4'],
                                      borderRadius: 10,
                                      justifyContent: 'center',
                                      marginTop: 6,
                                      paddingBottom: 3,
                                      paddingLeft: 7,
                                      paddingRight: 7,
                                      paddingTop: 3,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Text
                                    accessible={true}
                                    {...GlobalStyles.TextStyles(theme)['Text']
                                      .props}
                                    style={StyleSheet.applyWidth(
                                      StyleSheet.compose(
                                        GlobalStyles.TextStyles(theme)['Text']
                                          .style,
                                        {
                                          color: theme.colors['Custom Color'],
                                          fontFamily: 'Inter_400Regular',
                                          fontSize: 12,
                                        }
                                      ),
                                      dimensions.width
                                    )}
                                  >
                                    {'$'}
                                    {masonryListData?.['Avg Cost']}
                                    {'0'}
                                  </Text>
                                </View>
                              </View>
                            </Pressable>
                          </>
                        );
                      }}
                      showsHorizontalScrollIndicator={true}
                      showsVerticalScrollIndicator={true}
                      numColumns={2}
                    />
                  );
                }}
              </ExampleDataApi.FetchRestaurantsGET>
            </View>
          )}
        </>
        {/* Recommended */}
        <>
          {!(dimensions.width >= Breakpoints.Tablet) ? null : (
            <View
              style={StyleSheet.applyWidth(
                {
                  flex: 1,
                  marginTop: 16,
                  paddingLeft: { minWidth: Breakpoints.Tablet, value: 15 },
                  paddingRight: { minWidth: Breakpoints.Tablet, value: 15 },
                },
                dimensions.width
              )}
            >
              {/* Header */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 12,
                    paddingBottom: 0,
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
                        fontFamily: 'Inter_500Medium',
                        fontSize: [
                          { minWidth: Breakpoints.Mobile, value: 18 },
                          { minWidth: Breakpoints.Tablet, value: 21 },
                          { minWidth: Breakpoints.Laptop, value: 23 },
                          { minWidth: Breakpoints.Desktop, value: 25 },
                          { minWidth: Breakpoints.BigScreen, value: 27 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Recommended'}
                </Text>
                {/* View all */}
                <Pressable>
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          color: theme.colors['Light'],
                          fontFamily: 'Inter_400Regular',
                          fontSize: [
                            { minWidth: Breakpoints.Tablet, value: 17 },
                            { minWidth: Breakpoints.Laptop, value: 19 },
                            { minWidth: Breakpoints.Desktop, value: 21 },
                            { minWidth: Breakpoints.BigScreen, value: 23 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'View all'}
                  </Text>
                </Pressable>
              </View>
              {/* Restaurants */}
              <ExampleDataApi.FetchRestaurantsGET>
                {({ loading, error, data, refetchRestaurants }) => {
                  const restaurantsData = data?.json;
                  if (loading) {
                    return <ActivityIndicator />;
                  }

                  if (error || data?.status < 200 || data?.status >= 300) {
                    return <ActivityIndicator />;
                  }

                  return (
                    <MasonryFlashList
                      data={restaurantsData}
                      estimatedItemSize={50}
                      keyExtractor={(masonryListData, index) =>
                        masonryListData?.id ??
                        masonryListData?.uuid ??
                        index.toString()
                      }
                      listKey={'hsdatf40'}
                      onEndReachedThreshold={0.5}
                      renderItem={({ item, index }) => {
                        const masonryListData = item;
                        return (
                          <>
                            {/* Record */}
                            <Pressable
                              onPress={() => {
                                try {
                                  navigation.navigate(
                                    'RestaurantDetailsScreen'
                                  );
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    marginTop: 16,
                                    paddingLeft: '5%',
                                    paddingRight: 4,
                                    width: '96%',
                                  },
                                  dimensions.width
                                )}
                              >
                                <Image
                                  resizeMode={'cover'}
                                  {...GlobalStyles.ImageStyles(theme)['Image']
                                    .props}
                                  source={{ uri: `${masonryListData?.url}` }}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.ImageStyles(theme)['Image']
                                        .style,
                                      {
                                        borderRadius: 8,
                                        height: [
                                          {
                                            minWidth: Breakpoints.Mobile,
                                            value: 120,
                                          },
                                          {
                                            minWidth: Breakpoints.Laptop,
                                            value: 150,
                                          },
                                          {
                                            minWidth: Breakpoints.Desktop,
                                            value: 220,
                                          },
                                          {
                                            minWidth: Breakpoints.BigScreen,
                                            value: 300,
                                          },
                                        ],
                                        width: '100%',
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                />
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      flexDirection: 'row',
                                      justifyContent: 'space-between',
                                      marginTop: 8,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {/* Name */}
                                  <Text
                                    accessible={true}
                                    {...GlobalStyles.TextStyles(theme)['Text']
                                      .props}
                                    style={StyleSheet.applyWidth(
                                      StyleSheet.compose(
                                        GlobalStyles.TextStyles(theme)['Text']
                                          .style,
                                        {
                                          fontFamily: 'Inter_500Medium',
                                          fontSize: [
                                            {
                                              minWidth: Breakpoints.Tablet,
                                              value: 18,
                                            },
                                            {
                                              minWidth: Breakpoints.Laptop,
                                              value: 18,
                                            },
                                            {
                                              minWidth: Breakpoints.Desktop,
                                              value: 20,
                                            },
                                            {
                                              minWidth: Breakpoints.BigScreen,
                                              value: 22,
                                            },
                                          ],
                                        }
                                      ),
                                      dimensions.width
                                    )}
                                  >
                                    {masonryListData?.name}
                                  </Text>
                                  {/* Rating */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    <Icon
                                      name={'AntDesign/star'}
                                      size={14}
                                      style={StyleSheet.applyWidth(
                                        { marginRight: 5 },
                                        dimensions.width
                                      )}
                                    />
                                    <Text
                                      accessible={true}
                                      {...GlobalStyles.TextStyles(theme)['Text']
                                        .props}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)['Text']
                                            .style,
                                          {
                                            fontFamily: 'Inter_400Regular',
                                            fontSize: [
                                              {
                                                minWidth: Breakpoints.Tablet,
                                                value: 18,
                                              },
                                              {
                                                minWidth: Breakpoints.Desktop,
                                                value: 20,
                                              },
                                              {
                                                minWidth: Breakpoints.BigScreen,
                                                value: 22,
                                              },
                                            ],
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {masonryListData?.Rating}
                                    </Text>
                                  </View>
                                </View>
                                {/* Avg Cost */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      alignSelf: 'flex-start',
                                      backgroundColor:
                                        theme.colors['Custom Color_4'],
                                      borderRadius: 10,
                                      justifyContent: 'center',
                                      marginTop: 6,
                                      paddingBottom: 3,
                                      paddingLeft: 7,
                                      paddingRight: 7,
                                      paddingTop: 3,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Text
                                    accessible={true}
                                    {...GlobalStyles.TextStyles(theme)['Text']
                                      .props}
                                    style={StyleSheet.applyWidth(
                                      StyleSheet.compose(
                                        GlobalStyles.TextStyles(theme)['Text']
                                          .style,
                                        {
                                          color: theme.colors['Custom Color'],
                                          fontFamily: 'Inter_400Regular',
                                          fontSize: [
                                            {
                                              minWidth: Breakpoints.Mobile,
                                              value: 12,
                                            },
                                            {
                                              minWidth: Breakpoints.Tablet,
                                              value: 16,
                                            },
                                            {
                                              minWidth: Breakpoints.BigScreen,
                                              value: 18,
                                            },
                                          ],
                                        }
                                      ),
                                      dimensions.width
                                    )}
                                  >
                                    {'$'}
                                    {masonryListData?.['Avg Cost']}
                                    {'0'}
                                  </Text>
                                </View>
                              </View>
                            </Pressable>
                          </>
                        );
                      }}
                      showsHorizontalScrollIndicator={true}
                      showsVerticalScrollIndicator={true}
                      numColumns={3}
                    />
                  );
                }}
              </ExampleDataApi.FetchRestaurantsGET>
            </View>
          )}
        </>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
