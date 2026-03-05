import type { SessionRecord } from '../../types';
import { openDatabase } from '../client';

export async function addSession(session: Omit<SessionRecord, 'id'>): Promise<void> {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('sessions', 'readwrite');
    tx.objectStore('sessions').add(session);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error ?? new Error('Transaction aborted'));
  });
}

export async function getSessionsByDate(date: string): Promise<SessionRecord[]> {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('sessions', 'readonly');
    const index = tx.objectStore('sessions').index('date');
    const request = index.getAll(date);
    request.onsuccess = () => resolve(request.result as SessionRecord[]);
    request.onerror = () => reject(request.error);
  });
}

export async function getAllSessions(): Promise<SessionRecord[]> {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('sessions', 'readonly');
    const request = tx.objectStore('sessions').getAll();
    request.onsuccess = () => resolve(request.result as SessionRecord[]);
    request.onerror = () => reject(request.error);
  });
}
