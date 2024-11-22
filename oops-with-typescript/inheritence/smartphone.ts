class Smartphone extends Device {
    private _screenSize: number;
  
    constructor(brand: string, model: string, screenSize: number) {
      super(brand, model); // Call the constructor of the base class
      this._screenSize = screenSize;
    }
  
    public getScreenSize(): number {
      return this._screenSize;
    }
  
    public setScreenSize(screenSize: number): void {
      this._screenSize = screenSize;
    }
  
    public deviceInfo(): string {
      return `${super.deviceInfo()}, Screen Size: ${this._screenSize}"`;
    }
  }