export default abstract class PubSub {
  protected listeners: any[] = [];

  public subscribe(listener: any) {
    this.listeners.push(listener);
  }

  protected publish(...args: any[]) {
    this.listeners.forEach((listener) => listener(...args));
  }
}
