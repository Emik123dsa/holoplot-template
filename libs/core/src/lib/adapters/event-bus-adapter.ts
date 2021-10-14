import { TinyEmitter as EventEmitter } from 'tiny-emitter';
import { EventBus } from '../events/event-bus';

export abstract class EventBusAdapter<T> implements EventBus<T> {
  private _eventStream: EventEmitter;

  private constructor() {
    this._eventStream = new EventEmitter();
  }

  public abstract on(callback: (...args: unknown[]) => void): T;

  public abstract once(callback: (...args: unknown[]) => void): T;

  public abstract off(callback: (...args: unknown[]) => void): T;

  public abstract emit(callback: (...args: unknown[]) => void): T;

  public getEventStream(): EventEmitter {
    return this._eventStream;
  }
}
