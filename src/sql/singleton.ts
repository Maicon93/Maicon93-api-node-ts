export class TakeShower {
  private WettingHair: boolean = false
  private applyShampoo: boolean = false
  private Enxaguar: boolean = false

  private WettingBody: boolean = false
  private ApplyingSoap: boolean = false
  private Cleaning: boolean = false

  private DryingBody: boolean = false

  async takeShower(sql: string) {
    this.WashHair()
    this.WashBody()
    this.Drying()
  }

  private WashHair() {
    this.WettingHair = true
    this.applyShampoo = true
    this.Enxaguar = true
  }

  private WashBody() {
    this.WettingBody = true
    this.ApplyingSoap = true
    this.Cleaning = true
  }

  private Drying() {
    this.DryingBody = true
  }
}