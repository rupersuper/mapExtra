import Settings from "../app";

test("Проверка новых настроек", () => {
  const settings = new Settings();
  settings.setUserSetting("music", "off");
  settings.setUserSetting("difficulty", "hard");

  const expectedSettings = new Map([
    ["theme", "dark"],
    ["music", "off"],
    ["difficulty", "hard"],
  ]);

  expect(settings.settings).toEqual(expectedSettings);
});

test("Проверка default настроек", () => {
  const settings = new Settings();

  const expectedSettings = new Map([
    ["theme", "dark"],
    ["music", "trance"],
    ["difficulty", "easy"],
  ]);

  expect(settings.settings).toEqual(expectedSettings);
});

test("Невалидное значение имени", () => {
  const settings = new Settings();
  expect(() => {
    settings.setUserSetting("тема", "");
  }).toThrow("Неверное имя настройки");
});

test("Невалидное значение для настройки", () => {
    const settings = new Settings();
    expect(() => {
      settings.setUserSetting("theme", "темная");
    }).toThrow("Неверное значение 'темная' для настройки theme");
  });
