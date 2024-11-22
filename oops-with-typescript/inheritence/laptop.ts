// Subclass for Laptops
class Laptop extends Device {
    private _batteryLife: number;
  
    constructor(brand: string, model: string, batteryLife: number) {
      super(brand, model); // Call the constructor of the base class
      this._batteryLife = batteryLife;
    }
  
    public getBatteryLife(): number {
      return this._batteryLife;
    }
  
    public setBatteryLife(batteryLife: number): void {
      this._batteryLife = batteryLife;
    }
  
    public deviceInfo(): string {
      return `${super.deviceInfo()}, Battery Life: ${this._batteryLife} hours`;
    }
  }