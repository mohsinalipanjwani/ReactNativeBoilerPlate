import DeviceInfo from 'react-native-device-info';
import BuildConfig from 'react-native-build-config';

export function isConfigurable() {
  const buildType = BuildConfig.FLAVOR;
  return buildType === 'dev' || buildType === 'staging';
}

export async function getReadableVersion() {
  return DeviceInfo.getReadableVersion();
}

export async function getBuildDetail() {
  const buildId = await DeviceInfo.getBundleId();
  const buildNumber = await DeviceInfo.getBuildNumber();
  return `${buildNumber} - ${buildId}`;
}
