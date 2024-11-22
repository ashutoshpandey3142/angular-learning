// Base class
class Device {
    private _brand: string;
    private _model: string;
  
    constructor(brand: string, model: string) {
      this._brand = brand;
      this._model = model;
    }
  
    public getBrand(): string {
      return this._brand;
    }
  
    public setBrand(brand: string): void {
      this._brand = brand;
    }
  
    public getModel(): string {
      return this._model;
    }
  
    public setModel(model: string): void {
      this._model = model;
    }
  
    public deviceInfo(): string {
      return `Brand: ${this._brand}, Model: ${this._model}`;
    }
  }
  