

export class BotBase {
  private state: any

  public constructor(state: any) {
    this.state = state
  }

  public onStart() { }

  public onStop() { }

  public onMessageReceive() { }
}
