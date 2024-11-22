import { Address } from './address.model';

export class User {
  constructor(
    public name: string,
    public email: string,
    public phone: number,
    public course: string,
    public startDate: Date,
    public additionalInfo: string,
    public address: Address
  ) {}
}
