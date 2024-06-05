import { TSettings } from "types/settings";

type SettingsOptions = Partial<TSettings>;

export class Settings {
    cupSize: number;
    dailyGoal: number;

    constructor(options: SettingsOptions | undefined = {}) {
        this.cupSize = options?.cupSize ?? 200;
        this.dailyGoal = options?.dailyGoal ?? 2000
    }
}