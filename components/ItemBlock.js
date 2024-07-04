import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Pressable, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const ItemBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Pressable>
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            borderBottomWidth: 2,
            borderColor: theme.colors['Divider'],
            flexDirection: 'row',
            marginLeft: 20,
            marginRight: 20,
            paddingBottom: 15,
            paddingTop: 15,
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          source={Images.Burger}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
              height: 70,
              width: 88,
            }),
            dimensions.width
          )}
        />
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, paddingLeft: 16 },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Inter_600SemiBold',
                fontSize: 16,
              }),
              dimensions.width
            )}
          >
            {'Hamburger'}
          </Text>

          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: theme.colors['Light'],
                fontFamily: 'Inter_400Regular',
                fontSize: 13,
                marginTop: 4,
              }),
              dimensions.width
            )}
          >
            {'1 big tasty, 1 large french fries, 1 large drink'}
          </Text>

          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: theme.colors['Custom Color_4'],
                fontFamily: 'Inter_600SemiBold',
                marginTop: 6,
              }),
              dimensions.width
            )}
          >
            {'$4.80'}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default withTheme(ItemBlock);
