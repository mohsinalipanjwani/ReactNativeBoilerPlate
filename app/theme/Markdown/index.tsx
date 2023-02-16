/**
 *
 * Markdown
 *
 */
import React from 'react';
import { Linking } from 'react-native';
import MarkdownView from 'react-native-markdown-display';

import { Warn } from 'platform/Logger';

import Text from 'theme/Text';
import Dimensions from 'theme/Dimensions';

const markdownStyles = {
  heading1: {
    // fontFamily: 'Arial',
    marginVertical: Dimensions.space2x,
    lineHeight: 36,
  },
  heading2: {
    marginVertical: Dimensions.space2x,
  },
  link: {
    // fontFamily: 'Arial',
  },
  mailTo: {
    // fontFamily: 'Arial',
  },
  text: {
    // fontFamily: 'Arial',
  },
  bullet_list: {
    marginLeft: 0,
  },
  list_item: {
    marginBottom: Dimensions.space2x,
  },
  bullet_list_icon: {
    width: 8,
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
    borderWidth: 4,
    marginLeft: 3,
    marginRight: 14,
    transform: [{ translateY: 8 }],
  },
  bullet_list_content: {},
};

interface MarkdownProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

const Markdown: React.FC<MarkdownProps> = ({ isLoading = false, ...props }) => {
  if (isLoading) {
    return <Text>Loading ...</Text>;
  }
  return (
    <MarkdownView
      onLinkPress={(url) => {
        Linking.openURL(url).catch((error) =>
          Warn('An error occurred: ', error),
        );
        return true;
      }}
      // @ts-ignore
      style={markdownStyles}
      mergeStyle
    >
      {props.children}
    </MarkdownView>
  );
};

export default Markdown;
