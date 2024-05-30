import * as Crypto from 'expo-crypto';

export class WaterIntake {
    id: string;
    createdAt: string;
    amount: number;

    constructor(amount: number) {
        this.id = Crypto.randomUUID();
        this.createdAt = (new Date()).toString();
        this.amount = amount;
    }
}