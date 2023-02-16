import { MMKV } from 'react-native-mmkv';
import { LOCAL_STORAGE_ENCRYPTION_KEY } from 'configs';

class LocalStorage {
  storage: MMKV | null = null;
  constructor() {
    this.storage = new MMKV({
      id: 'global-app-storage',
      encryptionKey: LOCAL_STORAGE_ENCRYPTION_KEY,
    });
  }
  setItem(key: string, data: any) {
    return this.storage?.set(key, JSON.stringify(data));
  }

  getItem(key: string) {
    const data = this.storage?.getString(key);
    try {
      return JSON.parse(data || '');
    } catch (e) {
      return data;
    }
  }

  removeItem(key: string) {
    this.storage?.delete(key);
  }

  createInstance() {
    return this;
  }
  clear() {
    this.storage?.clearAll();
  }
  listener(value: (key: string) => void) {
    this.storage?.addOnValueChangedListener(value);
  }
}

export default new LocalStorage();
