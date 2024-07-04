import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Pressable, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, ScrollView, Text, View } from 'react-native';

const NotificationDetailsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');

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
            { paddingLeft: 10 }
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
      </View>

      <ScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        {/* Main View */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color'],
              flex: 1,
              padding: 20,
              paddingTop: 0,
            },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Image'].props}
            source={Images.NotifBanner}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Image'].style,
                { borderRadius: 9, height: 250, width: '100%' }
              ),
              dimensions.width
            )}
          />
          {/* ~ title */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Inter_500Medium',
                fontSize: 28,
                marginTop: 20,
              }),
              dimensions.width
            )}
          >
            {props.route?.params?.Title ?? 'Bonus week - %20'}
          </Text>
          {/* ~ details */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: theme.colors['Custom Color_6'],
                fontFamily: 'Inter_300Light',
                fontSize: 18,
                lineHeight: 25,
                marginTop: 8,
                textAlign: 'left',
              }),
              dimensions.width
            )}
          >
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum sit eu morbi velit praesent. Fermentum mauris fringilla vitae feugiat vel sit blandit quam. In mi sodales nisl eleifend duis porttitor. Convallis euismod facilisis neque eget praesent diam in nulla. Faucibus interdum vulputate rhoncus mauris id facilisis est nunc habitant. Velit posuere facilisi tortor sed. Lectus a velit sed pretium egestas integer lacus, mi. Risus eget venenatis at amet sed. Fames rhoncus purus ornare nulla. Lorem dolor eget sagittis mattis eget nam. Nulla nisi egestas nisl nibh eleifend luctus.'
            }
          </Text>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(NotificationDetailsScreen);
