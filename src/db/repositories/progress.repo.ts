import type { ProgressRecord } from '../../types';
import { openDatabase } from '../client';

export async function getProgress(cardId: string): Promise<ProgressRecord | undefined> {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('progress', 'readonly');
    const request = tx.objectStore('progress').get(cardId);
    request.onsuccess = () => resolve(request.result as ProgressRecord | undefined);
    request.onerror = () => reject(request.error);
  });
}

export async function getAllProgress(): Promise<ProgressRecord[]> {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('progress', 'readonly');
    const request = tx.objectStore('progress').getAll();
    request.onsuccess = () => resolve(request.result as ProgressRecord[]);
    request.onerror = () => reject(request.error);
  });
}

// Returns cards due for review (nextReview <= now)
export async function getDueCards(now: number): Promise<ProgressRecord[]> {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('progress', 'readonly');
    const index = tx.objectStore('progress').index('nextReview');
    const range = IDBKeyRange.upperBound(now);
    const request = index.getAll(range);
    request.onsuccess = () => resolve(request.result as ProgressRecord[]);
    request.onerror = () => reject(request.error);
  });
}

export async function upsertProgress(record: ProgressRecord): Promise<void> {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('progress', 'readwrite');
    tx.objectStore('progress').put(record);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error ?? new Error('Transaction aborted'));
  });
}
