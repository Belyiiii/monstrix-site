+++
title = "ESP32 WiFi сервер"
date = "2025-08-17"
author = "MONSTRIX"
description = "Создание веб-сервера на ESP32"
+++

# ESP32: WiFi веб-сервер за 5 минут

Простой пример создания веб-сервера на ESP32.

## Что понадобится

- ESP32 (любая модель)
- Arduino IDE
- WiFi сеть

## Код

```cpp
#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "YOUR_WIFI";
const char* password = "YOUR_PASSWORD";

WebServer server(80);

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println("WiFi подключен!");
  Serial.print("IP: ");
  Serial.println(WiFi.localIP());
  
  server.on("/", [](){
    server.send(200, "text/html", "<h1>ESP32 работает!</h1>");
  });
  
  server.begin();
}

void loop() {
  server.handleClient();
}
