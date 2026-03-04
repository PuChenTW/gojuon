import type { KanaCard } from '../../types';
import { openDatabase } from '../client';

export async function getAllCards(): Promise<KanaCard[]> {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('cards', 'readonly');
    const request = tx.objectStore('cards').getAll();
    request.onsuccess = () => resolve(request.result as KanaCard[]);
    request.onerror = () => reject(request.error);
  });
}

export async function seedCards(cards: KanaCard[]): Promise<void> {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('cards', 'readwrite');
    const store = tx.objectStore('cards');
    for (const card of cards) {
      store.put(card);
    }
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function countCards(): Promise<number> {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('cards', 'readonly');
    const request = tx.objectStore('cards').count();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
