---
title: "MONSTRIX Robot v2.0"
date: 2025-02-06
description: "Эмоциональный робот-компаньон на ESP32-C3 — вдохновлён Love, Death & Robots"
---

## [o_o] MONSTRIX Robot — Эмоциональный компаньон

Прошивка для робота с эмоциями на базе **ESP32-C3**. Робот реагирует на тряску, меняет настроение и моргает!

### [+] Информация

| | |
|---|---|
| **Устройство** | ESP32-C3 + OLED 0.96" + MPU6050 |
| **Версия** | 2.0 |
| **Чип** | ESP32-C3 |
| **Размер** | ~1.2 MB |

### [o_o] Возможности

- :) Автоматическая смена эмоций каждые 6 секунд
- [!] Реакция на тряску — робот злится!
- [o_o] Реалистичное моргание и анимации глаз
- [+-] Оптимизировано для работы от батареи
- 5 эмоций: радость, усталость, смущение, нейтральный, злость

---

## [+-] Прошить устройство

1. Подключи **ESP32-C3** к компьютеру по USB-C
2. Нажми кнопку ниже
3. Выбери COM-порт в появившемся окне
4. Дождись окончания (~1-2 минуты)

<script type="module" src="https://unpkg.com/esp-web-tools@10/dist/web/install-button.js?module"></script>

<esp-web-install-button manifest="/firmware/monstrix-robot/manifest.json">
  <button slot="activate" style="background:#ff6b35; color:white; border:none; padding:15px 40px; font-size:18px; border-radius:8px; cursor:pointer;">
    [~] Прошить робота
  </button>
  <span slot="unsupported">
    [x] Твой браузер не поддерживает Web Serial. Используй <b>Chrome</b>, <b>Edge</b> или <b>Opera</b> на компьютере.
  </span>
  <span slot="not-allowed">
    [x] Нет доступа к Serial порту. Разреши доступ в настройках браузера.
  </span>
</esp-web-install-button>

---

## [>] После прошивки

1. Поставь робота на ровную поверхность
2. Подожди 5 секунд — гироскоп калибруется
3. Когда появятся глаза — робот готов!

### Управление

| Действие | Реакция |
|----------|---------|
| Просто смотреть | Эмоции меняются каждые 6 сек |
| Потрясти робота | Злится на 3 секунды [!] |
| Нажать Reset | Перезагрузка |

---

## [+] Скачать файл

Если хочешь прошить через Arduino IDE:

**[[+] Скачать MONSTRIX_Robot_v2.0.bin](/firmware/monstrix-robot/MONSTRIX_Robot_v2.0.bin)** (1.2 MB)

---

## [+] История версий

### v2.0 (2025-02-06)
- Улучшены анимации глаз
- Исправлены баги
- Оптимизация энергопотребления

### v1.0 (2025-01-15)
- Первый релиз
- 5 базовых эмоций
- Реакция на тряску

---

## <> Связанные материалы

- [Проект MONSTRIX Robot](/projects/monstrix-robot/) — полная инструкция по сборке
- [Исходный код (GitHub)](https://github.com/Belyiiii/monstrix-cod)

---

## [+] Где купить компоненты?

**[[+-] Контроллеры ESP32](/components/esp32-controllers/)**

**[[#] Дисплеи](/components/displays/)**

---

## <3 Поддержать проект

Если материал был полезен — буду рад поддержке! Все средства идут на новые эксперименты и компоненты.

<a href="https://t.me/tribute/app?startapp=dEq7" target="_blank" style="display:inline-block; background:transparent; color:#ffb000; border:1px solid #ffb000; padding:12px 24px; font-size:14px; font-family:'JetBrains Mono',ui-monospace,monospace; letter-spacing:2px; text-transform:uppercase; cursor:pointer; text-decoration:none; text-shadow:0 0 4px rgba(255,176,0,.6);">
  [ <3 Поддержать автора ]
</a>

---

*Вопросы? Пиши в [Telegram](https://t.me/belyiiii)*
