---
title: "NeuroFrame v1.0"
date: 2025-02-05
description: "AI-рамка с генерацией картинок для M5StickC Plus 2"
---

## NeuroFrame — AI-рамка с генерацией картинок

Прошивка для **M5StickC Plus 2**, которая генерирует картинки нейросетью в 20 разных стилях.

### [+] Информация

| | |
|---|---|
| **Устройство** | M5StickC Plus 2 |
| **Версия** | 1.0 |
| **Чип** | ESP32-PICO |
| **Размер** | ~1.5 MB |

### [>] Возможности

- 20 стилей генерации (Симпсоны, киберпанк, аниме и др.)
- Автоматическая генерация каждые 5 минут
- Переключение стилей кнопкой
- Веб-интерфейс для настройки
- Режим сна для экономии батареи

---

## [+-] Прошить устройство

1. Подключи **M5StickC Plus 2** к компьютеру по USB-C
2. Нажми кнопку ниже
3. Выбери COM-порт в появившемся окне
4. Дожидись окончания (~1-2 минуты)

<script type="module" src="https://unpkg.com/esp-web-tools@10/dist/web/install-button.js?module"></script>

<esp-web-install-button manifest="/firmware/neuroframe/manifest.json">
  <button slot="activate" style="background:#ff6b35; color:white; border:none; padding:15px 40px; font-size:18px; border-radius:8px; cursor:pointer;">
    [~] Прошить устройство
  </button>
  <span slot="unsupported">
    [x] Твой браузер не поддерживает Web Serial. Используй <b>Chrome</b>, <b>Edge</b> или <b>Opera</b> на компьютере.
  </span>
  <span slot="not-allowed">
    [x] Нет доступа к Serial порту. Разреши доступ в настройках браузера.
  </span>
</esp-web-install-button>

---

## [#] После прошивки

1. Устройство создаст WiFi точку: **MONSTRIX-NeuroFrame**
2. Подключись к ней (пароль: `12345678`)
3. Открой в браузере: **192.168.4.1**
4. Выбери свою WiFi сеть и введи пароль
5. Введи API ключ от [Pollinations.ai](https://pollinations.ai) (бесплатно)

Подробная инструкция: [Проект NeuroFrame](/projects/neuroframe/)

---

## [+] Скачать файл

Если хочешь прошить через Arduino IDE или другой инструмент:

**[[+] Скачать NeuroFrame_v1.0.bin](/firmware/neuroframe/NeuroFrame_v1.0.bin)** (1.5 MB)

---

## [+] Где купить устройство?

Все компоненты и готовые девайсы собраны в разделе:

**[[+] Готовые устройства](/components/ready-devices/)**

---

## <3 Поддержать проект

Если материал был полезен — буду рад поддержке! Все средства идут на новые эксперименты и компоненты.

<a href="https://t.me/tribute/app?startapp=dEq7" target="_blank" style="display:inline-block; background:transparent; color:#eec35e; border:2px solid #eec35e; padding:12px 30px; font-size:16px; font-family:monospace; cursor:pointer; text-decoration:none;">
  [ <3 Поддержать автора ]
</a>

---

## [+] История версий

### v1.0 (2025-02-05)
- Первый релиз
- 20 стилей генерации
- Веб-интерфейс настройки
- Режим сна

---

*Вопросы? Пиши в [Telegram](https://t.me/techminimal)*
