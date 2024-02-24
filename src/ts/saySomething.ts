export default class Saysomething {
  message: string;

  // 初期化
  constructor(message: string) {
    this.message = message
  }

  public sayText(elem: HTMLElement) {
    if(elem) {
      elem.innerText = this.message
    }
  }
}
