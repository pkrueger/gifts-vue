export class Gift {
  /**
   *
   * @param {{id:string, tag:string, url:string, opened:boolean}} data
   */
  constructor(data) {
    this.id = data.id;
    this.tag = data.tag || "";
    this.url = data.url;
    this.opened = data.opened;
  }
}
