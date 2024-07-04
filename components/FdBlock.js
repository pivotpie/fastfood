import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { TextInput, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const FdBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <View style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}>
      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            fontFamily: 'Inter_400Regular',
            opacity: 0.7,
          }),
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
            setValue(value);
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
  );
};

export default withTheme(FdBlock);
