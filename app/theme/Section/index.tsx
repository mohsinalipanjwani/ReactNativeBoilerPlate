/**
 *
 * Section
 *
 */
import React from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Text from 'theme/Text';
import Skeleton from 'theme/Skeleton';

import style from './style';

export interface SectionProps {
  heading: React.ReactNode | string;
  subHeading?: React.ReactNode | string;
  children?: React.ReactNode;
  headerRight?: React.ReactNode;
  isLoading?: boolean;
  testID?: string;
}

export function HeadingLoader() {
  return <Skeleton loaderStyle={style.headingLoader} numberOfItems={1} />;
}

const Section: React.FC<SectionProps> = function (props) {
  return (
    <Animatable.View
      style={style.section}
      testID={props.testID}
      animation="fadeIn"
      duration={600}
    >
      {props.heading ? (
        <View style={style.sectionHeader}>
          {props.isLoading ? (
            <HeadingLoader />
          ) : (
            <>
              <View style={style.headingRow}>
                <Text style={style.sectionHeading} numberOfLines={1}>
                  {props.heading}
                </Text>
                {props?.subHeading ? (
                  <Text style={style.sectionSubHeading} numberOfLines={1}>
                    {props.subHeading}
                  </Text>
                ) : null}
              </View>
              {props.headerRight}
            </>
          )}
        </View>
      ) : null}
      {props.children}
    </Animatable.View>
  );
};

export default Section;
