import BuildConfig from 'react-native-build-config';

export function isConfigurable() {
  return (
    BuildConfig?.CFBundleIdentifier?.includes('.dev') ||
    BuildConfig?.CFBundleIdentifier?.includes('.staging')
  );
}

export async function getReadableVersion() {
  return BuildConfig?.CFBundleShortVersionString;
}

export async function getBuildDetail() {
  return `${BuildConfig?.CFBundleIdentifier} - ${BuildConfig?.CFBundleShortVersionString}`;
}
