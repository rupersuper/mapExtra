export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ["theme", "dark"],
      ["music", "trance"],
      ["difficulty", "easy"],
    ]);
    this.userSettings = new Map();
  }

  setUserSetting(name, value) {
    if (!this.defaultSettings.has(name)) {
      throw new Error("Неверное имя настройки");
    }

    const validValues = this.getValidValues(name);

    if (!validValues.includes(value)) {
      throw new Error(`Неверное значение '${value}' для настройки ${name}`);
    }

    this.userSettings.set(name, value);
  }

  getValidValues(name) {
    const validValues = {
      theme: ["dark", "light", "gray"],
      music: ["trance", "pop", "rock", "chillout", "off"],
      difficulty: ["easy", "normal", "hard", "nightmare"],
    };
    return validValues[name];
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
