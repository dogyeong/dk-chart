type Listener = (...args: any[]) => any;

export default abstract class PubSub {
  protected listeners: Listener[] = [];

  public subscribe(listener: Listener) {
    this.listeners.push(listener);
  }

  protected publish(...args: any[]) {
    this.listeners.forEach((listener) => listener(...args));
  }
}
