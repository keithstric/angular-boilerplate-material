import {Injectable} from '@angular/core';
import {LocalStorageTypes} from 'src/app/core/interfaces/local-storage.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  /**
   * Get the storage facility
   * @param storageType {LocalStorageTypes}
   * @private
   * @returns {localStorage|sessionStorage}
   */
  private static _getStorage(storageType: LocalStorageTypes) {
    return storageType === LocalStorageTypes.LOCAL ? localStorage : sessionStorage;
  }

  /**
   * Get a localStorage or sessionStorage item value
   * @param storageType {'local'|'session'}
   * @param varName {string}
   */
  getItem(storageType: LocalStorageTypes, varName: string) {
    const storage = LocalStorageService._getStorage(storageType);
    const val = storage.getItem(`code-review:${varName}`);
    try {
      return JSON.parse(val);
    }catch (e) {
      return val;
    }
  }

  /**
   * Set a localStorage or sessionStorage item value
   * @param storageType {LocalStorageTypes}
   * @param varName {string}
   * @param value {any}
   */
  setItem(storageType: LocalStorageTypes, varName: string, value: any) {
    const storage = LocalStorageService._getStorage(storageType);
    const val = typeof value === 'string' ? value : JSON.stringify(value);
    storage.setItem(`code-review:${varName}`, val);
  }

  /**
   * Remove an item from localStorage or sessionStorage
   * @param storageType {LocalStorageTypes}
   * @param varName {string}
   */
  removeItem(storageType: LocalStorageTypes, varName: string) {
    const storage = LocalStorageService._getStorage(storageType);
    storage.removeItem(`code-review:${varName}`);
  }

}
