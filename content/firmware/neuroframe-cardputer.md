---
title: "NeuroFrame Cardputer v1.0"
date: 2025-02-05
description: "AI-генератор картинок для M5Stack Cardputer — расширенная версия с клавиатурой"
---

## NeuroFrame Cardputer — AI-генератор с клавиатурой

Расширенная версия NeuroFrame для **M5Stack Cardputer**. Полноценная клавиатура позволяет вводить свои запросы для генерации!

![Пример](/images/projects/neuroframe/cardputer.jpg)

### [+] Информация

| | |
|---|---|
| **Устройство** | M5Stack Cardputer |
| **Версия** | 1.0 |
| **Чип** | ESP32-S3 |
| **Размер** | ~1.5 MB |

### [>] Возможности

- ⌨ **Свои запросы** — печатай что хочешь сгенерировать
- [o_o] 20 стилей генерации (Симпсоны, киберпанк, аниме и др.)
- [+] Автоматическая генерация по таймеру
- [+] История запросов
- <> Веб-интерфейс для настройки
- [+] Сохранение любимых промптов

### vs Отличия от версии для M5StickC

| Функция | M5StickC Plus 2 | Cardputer |
|---------|-----------------|-----------|
| Ввод запросов | Только стили | Полноценный текст |
| Дисплей | 135x240 | 240x135 (больше) |
| Управление | 2 кнопки | Клавиатура |
| История | Нет | Да |

---

## [+-] Прошить устройство

1. Подключи **M5Stack Cardputer** к компьютеру по USB-C
2. Нажми кнопку ниже
3. Выбери COM-порт в появившемся окне
4. Дождись окончания (~1-2 минуты)

<script type="module" src="https://unpkg.com/esp-web-tools@10/dist/web/install-button.js?module"></script>

<esp-web-install-button manifest="/firmware/neuroframe-cardputer/manifest.json">
  <button slot="activate" style="background:#ff6b35; color:white; border:none; padding:15px 40px; font-size:18px; border-radius:8px; cursor:pointer;">
    [~] Прошить Cardputer
  </button>
  <span slot="unsupported">
    [x] Твой браузер не поддерживает Web Serial. Используй <b>Chrome</b>, <b>Edge</b> или <b>Opera</b> на компьютере.
  </span>
  <span slot="not-allowed">
    [x] Нет доступа к Serial порту. Разреши доступ в настройках браузера.
  </span>
</esp-web-install-button>

---

## ⌨ Управление

### Основные клавиши

| Клавиша | Действие |
|---------|----------|
| `Enter` | Генерация изображения |
| `Backspace` (стрелка влево над Enter) | Удалить символ |
| `` ` `` или `~` (рядом с 1) | Переключение режима (стиль/свой промпт) |
| `<` или `,` (Fn + ,) | Предыдущий стиль |
| `>` или `.` или `/` (Fn + .) | Следующий стиль |
| `Пробел` | Показать текущий режим |
| `Esc` | Очистить промпт |

### Режим своего промпта

| Клавиша | Действие |
|---------|----------|
| Буквы и цифры | Ввод текста |
| `Backspace` | Удалить символ |
| `Enter` | Сгенерировать по промпту |

### Режим стилей

| Клавиша | Действие |
|---------|----------|
| `<` / `>` | Листать стили |
| `Enter` | Генерация в выбранном стиле |

---

## [#] После прошивки

1. Устройство создаст WiFi точку: **MONSTRIX-NeuroCard**
2. Подключись к ней (пароль: `12345678`)
3. Открой в браузере: **192.168.4.1**
4. Выбери свою WiFi сеть и введи пароль
5. Введи API ключ от [Pollinations.ai](https://pollinations.ai) (бесплатно)

---

## [i] Примеры запросов

```
cyberpunk cat with neon lights
medieval castle in the clouds
robot eating pizza in space
portrait of a wizard, oil painting style
```

Можно писать на английском или русском — AI понимает оба языка.

---

## [+] Скачать файл

Если хочешь прошить через Arduino IDE или другой инструмент:

**[[+] Скачать NeuroFrame_Cardputer_v1.0.bin](/firmware/neuroframe-cardputer/NeuroFrame_Cardputer_v1.0.bin)** (1.5 MB)

---

## [+] История версий

### v1.0 (2025-02-05)
- Первый релиз для Cardputer
- Ввод произвольных запросов
- 20 стилей генерации
- История промптов
- Веб-интерфейс настройки

---

## <> Связанные проекты

- [NeuroFrame для M5StickC Plus 2](/firmware/neuroframe/) — компактная версия
- [Проект NeuroFrame](/projects/neuroframe/) — подробное описание

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

*Вопросы? Пиши в [Telegram](https://t.me/techminimal)*
