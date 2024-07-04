import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text } from 'react-native';

const HdrBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Text
      accessible={true}
      {...GlobalStyles.TextStyles(theme)['Text'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
          fontFamily: 'Inter_500Medium',
          fontSize: 21,
          paddingBottom: 8,
          paddingTop: 8,
          textAlign: 'center',
        }),
        dimensions.width
      )}
    >
      {'Orders'}
    </Text>
  );
};

export default withTheme(HdrBlock);
