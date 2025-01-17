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
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const ChangePasswordSuccessScreen = props => {
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
          { alignItems: 'center', flex: 1, justifyContent: 'center' },
          dimensions.width
        )}
      >
        {/* Top view */}
        <View
          style={StyleSheet.applyWidth(
            {
              flex: 1,
              justifyContent: 'center',
              marginBottom: 100,
              padding: 20,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', marginBottom: 45 },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Primary']}
              name={'AntDesign/checkcircle'}
              size={104}
              style={StyleSheet.applyWidth(
                { height: 104, width: 104 },
                dimensions.width
              )}
            />
          </View>
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
            {'Congrats!'}
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
                  { minWidth: Breakpoints.Laptop, value: 20 },
                  { minWidth: Breakpoints.Desktop, value: 22 },
                  { minWidth: Breakpoints.BigScreen, value: 25 },
                ],
                lineHeight: 21,
                padding: 20,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'Your password changed successfully'}
          </Text>
          {/* Return to login */}
          <Button
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('LoginScreen');
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
                  fontFamily: 'Inter_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 16 },
                    { minWidth: Breakpoints.Tablet, value: 20 },
                    { minWidth: Breakpoints.Desktop, value: 24 },
                  ],
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 48 },
                    { minWidth: Breakpoints.Tablet, value: 60 },
                    { minWidth: Breakpoints.BigScreen, value: 70 },
                  ],
                  marginTop: [
                    { minWidth: Breakpoints.Mobile, value: 8 },
                    { minWidth: Breakpoints.Tablet, value: 18 },
                    { minWidth: Breakpoints.Laptop, value: 22 },
                    { minWidth: Breakpoints.BigScreen, value: 30 },
                  ],
                }
              ),
              dimensions.width
            )}
            title={'Return to login'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ChangePasswordSuccessScreen);
