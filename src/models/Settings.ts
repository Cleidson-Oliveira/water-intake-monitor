interface SettingsOptions {
    cupSize?: number
} 

export class Settings {
    cupSize: number;
    constructor(options: SettingsOptions | undefined = {}) {
        this.cupSize = options?.cupSize ?? 200;
    }
}