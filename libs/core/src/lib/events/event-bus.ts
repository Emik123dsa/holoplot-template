export interface EventBus<T> {
  on(callback: () => void): T;
  off(callback: () => void): T;
  emit(callback: () => void): T;
  once(callback: () => void): T;
}
