/**
 *
 * Geolocation Module
 *
 */
import Geolocation from 'react-native-geolocation-service';
import DeviceInfo from 'react-native-device-info';

import { Warn } from 'platform/Logger';
import { getLocationPermission } from 'platform/Permission';

interface Location {
  latitude: number;
  longitude: number;
}

const OPTIONS = {
  enableHighAccuracy: true,
  timeout: 15000,
  maximumAge: 10000,
};

export async function isLocationEnabled() {
  const resp = await DeviceInfo.isLocationEnabled();
  return resp;
}

export function getDeviceLocation(params = {}): Promise<{
  coords: Location;
}> {
  const options = {
    ...OPTIONS,
    ...params,
  };
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      Warn('REJECTING PROMISE');
      reject(Error('TIMEOUT'));
    }, options.timeout);
    Geolocation.getCurrentPosition(
      (...args) => {
        clearTimeout(timer);
        resolve(...args);
      },
      (e) => {
        clearTimeout(timer);
        reject(e);
      },
      options,
    );
  });
}

export const getGeolocation = async (payload: {
  askPermission: boolean | undefined;
}): Promise<
  | {
      latitude: number;
      longitude: number;
    }
  | Error
> => {
  try {
    const permission = await getLocationPermission(payload.askPermission);
    if (permission !== 'AUTHORIZED') {
      throw permission;
    }
    const locationEnabled = await isLocationEnabled();
    if (!payload.askPermission && !locationEnabled) {
      throw Error('Location turned off');
    }
    const location = await getDeviceLocation();
    const coords = {
      latitude: location.coords?.latitude,
      longitude: location.coords?.longitude,
    };
    return coords;
  } catch (error: Error | any) {
    Warn(error);
    throw error;
  }
};
