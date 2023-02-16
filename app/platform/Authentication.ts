import firebaseAuth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

// import { MOCK_PHONE_VERIFICATION } from 'configs';
import LocalStorage from './LocalStorage';
import { Log, Warn } from './Logger';

const { settings } = firebaseAuth();
settings.setAutoRetrievedSmsCodeForPhoneNumber('+93343122402', '111111');

let codeConfirmation: FirebaseAuthTypes.ConfirmationResult;

export async function sendCodeToPhoneNumber(payload: {
  phone: string;
  onAutoVerification?: (args: { user: FirebaseAuthTypes.User | null }) => void;
}): Promise<{
  message: string;
}> {
  // if (MOCK_PHONE_VERIFICATION) {
  //   setTimeout(() => {
  //     if (payload.onAutoVerification) {
  //       payload.onAutoVerification();
  //     }
  //   }, 2000);
  //   return new Promise((res, _rej) => {
  //     res({
  //       msg: 'Code sent successfully',
  //     });
  //   });
  // }

  try {
    if (payload.onAutoVerification) {
      const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
        if (
          user?.phoneNumber === payload.phone.replace(/-/g, '') &&
          payload.onAutoVerification
        ) {
          Log('onAuthStateChanged', { user });
          payload.onAutoVerification({ user });
          try {
            unsubscribe();
          } catch (e) {
            Warn(e);
          }
        }
      };
      let unsubscribe = firebaseAuth().onAuthStateChanged(onAuthStateChanged);
    }
    codeConfirmation = await firebaseAuth().signInWithPhoneNumber(
      payload.phone,
    );

    return new Promise((res, _rej) => {
      if (codeConfirmation) {
        res({
          message: 'Code sent successfully',
        });
      }
    });
  } catch (e) {
    Warn(e);
    throw e;
  }
}

export async function confirmCode({
  code,
}: {
  code: string;
  phone?: string;
}): Promise<any> {
  try {
    const resp = await codeConfirmation.confirm(code);
    if (!resp?.user?.phoneNumber) {
      throw new Error('No phone number found');
    }
    return resp;
  } catch (e) {
    Warn(e);
    throw e;
  }
}

export const signOut = async () => {
  await LocalStorage.clear();
  firebaseAuth().signOut();
};
