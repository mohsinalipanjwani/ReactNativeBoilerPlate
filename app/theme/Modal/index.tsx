/**
 *
 * Modal
 *
 */
import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import RNModal from 'react-native-modal';
import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'theme/Icon';
import TouchFeedback from 'theme/TouchFeedback';
import Text from 'theme/Text';
import style from './style';

interface ModalProps {
  visible: boolean;
  onRequestClose: (...args: any[]) => any;
  children: React.ReactNode;
  heading?: React.ReactNode | string;
  headerRight?: React.ReactNode;
  footer?: React.ReactNode;
  leftHeaderContent?: React.ReactNode;
  contentContainerStyle?: {};
}

function Modal(props: ModalProps) {
  return (
    <RNModal
      isVisible={props.visible}
      hasBackdrop
      coverScreen={false}
      backdropOpacity={0.8}
      style={style.modal}
      onBackdropPress={props.onRequestClose}
    >
      <View style={style.container}>
        <View style={style.header}>
          {!!props.heading && (
            <Text style={style.headerTitle} numberOfLines={1}>
              {props.heading}
            </Text>
          )}
          {!!props?.leftHeaderContent && (
            <View style={style.leftHeaderContent}>
              {props.leftHeaderContent}
            </View>
          )}
          <View style={style.rightHeaderContainer}>
            {props.headerRight ? props.headerRight : <View />}
            <TouchFeedback onPress={props.onRequestClose}>
              <Icon
                testID="closeModal"
                name="close-circle"
                style={style.headerIcon}
              />
            </TouchFeedback>
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView
            style={style.scrollView}
            contentContainerStyle={[
              style.scrollContent,
              props.contentContainerStyle,
            ]}
            bounces={false}
            keyboardShouldPersistTaps="handled"
          >
            {props.children}
          </ScrollView>
        </KeyboardAvoidingView>
        <View style={style.footer}>{props.footer}</View>
      </View>
    </RNModal>
  );
}
export default Modal;
