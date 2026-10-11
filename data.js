window.CONNECTORS = [
  {
    "id": "xlr3",
    "title": "XLR · 3 контакта",
    "category": "Аудио",
    "subtitle": "Балансный микрофон / линейный сигнал",
    "pins": [
      {
        "pin": "1",
        "signal": "Экран / земля"
      },
      {
        "pin": "2",
        "signal": "Сигнал + (hot)"
      },
      {
        "pin": "3",
        "signal": "Сигнал − (cold)"
      }
    ],
    "note": "Кабель: 1 → 1, 2 → 2, 3 → 3. Вид со стороны пайки зеркален виду со стороны контактов. Сверяйте литые номера на вставке.",
    "source": [
      "Shure · соединения аудиокабелей",
      "https://www.shure.com/damfiles/default/global/documents/publications/en/performance-production/us_pro_connecting_to_mixers_ea.pdf-f8a5ed2603ba35a011f6e56b255ca56f.pdf"
    ],
    "shape": "map",
    "tags": "микрофон кэнон canon xlr balanced",
    "wiring": null
  },
  {
    "id": "trs-balanced",
    "title": "Jack TRS · балансный",
    "category": "Аудио",
    "subtitle": "6,3 / 3,5 мм · один балансный канал",
    "pins": [
      {
        "pin": "T",
        "signal": "Сигнал +"
      },
      {
        "pin": "R",
        "signal": "Сигнал −"
      },
      {
        "pin": "S",
        "signal": "Экран / земля"
      }
    ],
    "note": "TRS здесь передаёт один балансный канал. Такой же штекер может использоваться для стерео: это другая схема.",
    "source": [
      "Shure · соединения аудиокабелей",
      "https://www.shure.com/damfiles/default/global/documents/publications/en/performance-production/us_pro_connecting_to_mixers_ea.pdf-f8a5ed2603ba35a011f6e56b255ca56f.pdf"
    ],
    "shape": "jack",
    "tags": "джек jack balanced",
    "wiring": null
  },
  {
    "id": "trs-stereo",
    "title": "Jack TRS · стерео",
    "category": "Аудио",
    "subtitle": "6,3 / 3,5 мм · наушники / AUX",
    "pins": [
      {
        "pin": "T",
        "signal": "Левый канал L"
      },
      {
        "pin": "R",
        "signal": "Правый канал R"
      },
      {
        "pin": "S",
        "signal": "Общая земля"
      }
    ],
    "note": "Контакты идут от кончика к кабелю: Tip → Ring → Sleeve. Для балансного моно используйте отдельную карточку.",
    "source": [
      "Shure · соединения аудиокабелей",
      "https://www.shure.com/damfiles/default/global/documents/publications/en/performance-production/us_pro_connecting_to_mixers_ea.pdf-f8a5ed2603ba35a011f6e56b255ca56f.pdf"
    ],
    "shape": "jack",
    "tags": "джек миниджек наушники aux stereo",
    "wiring": null
  },
  {
    "id": "ts",
    "title": "Jack TS · моно",
    "category": "Аудио",
    "subtitle": "6,3 / 3,5 мм · небалансный сигнал",
    "pins": [
      {
        "pin": "T",
        "signal": "Сигнал"
      },
      {
        "pin": "S",
        "signal": "Экран / земля"
      }
    ],
    "note": "Два контакта: кончик и длинная гильза. Обычно применяется для инструментального или небалансного линейного сигнала.",
    "source": [
      "Shure · соединения аудиокабелей",
      "https://www.shure.com/damfiles/default/global/documents/publications/en/performance-production/us_pro_connecting_to_mixers_ea.pdf-f8a5ed2603ba35a011f6e56b255ca56f.pdf"
    ],
    "shape": "jack",
    "tags": "гитара джек mono",
    "wiring": null
  },
  {
    "id": "ctia",
    "title": "Jack TRRS · CTIA",
    "category": "Аудио",
    "subtitle": "3,5 мм · гарнитура LRGM",
    "pins": [
      {
        "pin": "T",
        "signal": "Левый канал L"
      },
      {
        "pin": "R1",
        "signal": "Правый канал R"
      },
      {
        "pin": "R2",
        "signal": "Земля GND"
      },
      {
        "pin": "S",
        "signal": "Микрофон MIC"
      }
    ],
    "note": "Порядок от кончика к кабелю. У OMTP земля и микрофон поменяны местами. TRRS для видеокамер может иметь другую распайку.",
    "source": [
      "Android · спецификация гарнитуры",
      "https://source.android.com/docs/core/interaction/accessories/headset/plug-headset-spec"
    ],
    "shape": "jack",
    "tags": "гарнитура телефон миниджек",
    "wiring": null
  },
  {
    "id": "omtp",
    "title": "Jack TRRS · OMTP",
    "category": "Аудио",
    "subtitle": "3,5 мм · гарнитура LRMG",
    "pins": [
      {
        "pin": "T",
        "signal": "Левый канал L"
      },
      {
        "pin": "R1",
        "signal": "Правый канал R"
      },
      {
        "pin": "R2",
        "signal": "Микрофон MIC"
      },
      {
        "pin": "S",
        "signal": "Земля GND"
      }
    ],
    "note": "Перед изготовлением переходника проверьте стандарт устройства: CTIA и OMTP отличаются контактами R2 и S.",
    "source": [
      "Android · спецификация гарнитуры",
      "https://source.android.com/docs/core/interaction/accessories/headset/plug-headset-spec"
    ],
    "shape": "jack",
    "tags": "гарнитура nokia миниджек",
    "wiring": null
  },
  {
    "id": "rca-audio",
    "title": "RCA · аудио",
    "category": "Аудио",
    "subtitle": "Phono / «тюльпан» · небалансный",
    "pins": [
      {
        "pin": "Центр",
        "signal": "Сигнал"
      },
      {
        "pin": "Корпус",
        "signal": "Экран / земля"
      }
    ],
    "note": "Один разъём — один канал. Обычно белый — L, красный — R. Цвет корпуса сам по себе не гарантирует назначение.",
    "source": [
      "Shure · соединения аудиокабелей",
      "https://www.shure.com/damfiles/default/global/documents/publications/en/performance-production/us_pro_connecting_to_mixers_ea.pdf-f8a5ed2603ba35a011f6e56b255ca56f.pdf"
    ],
    "shape": "map",
    "tags": "тюльпан phono",
    "wiring": null
  },
  {
    "id": "nl2",
    "title": "speakON · NL2",
    "category": "Аудио",
    "subtitle": "1 акустические цепи",
    "pins": [
      {
        "pin": "1+",
        "signal": "Цепь 1 · плюс"
      },
      {
        "pin": "1−",
        "signal": "Цепь 1 · минус"
      }
    ],
    "note": "Номера указаны на клеммах. Назначение цепей (полный диапазон, LF/HF и т. п.) зависит от усилителя и акустики. В мостовом режиме распайка может отличаться.",
    "source": [
      "Neutrik · speakON Wiring",
      "https://www.neutrik.com/media/10094/download/03%20Section%20speakON%20PG%20EN%20%20202202-V23.pdf?v=11"
    ],
    "shape": "map",
    "tags": "спикон колонка усилитель акустика",
    "wiring": null
  },
  {
    "id": "nl4",
    "title": "speakON · NL4",
    "category": "Аудио",
    "subtitle": "2 акустические цепи",
    "pins": [
      {
        "pin": "1+",
        "signal": "Цепь 1 · плюс"
      },
      {
        "pin": "1−",
        "signal": "Цепь 1 · минус"
      },
      {
        "pin": "2+",
        "signal": "Цепь 2 · плюс"
      },
      {
        "pin": "2−",
        "signal": "Цепь 2 · минус"
      }
    ],
    "note": "Номера указаны на клеммах. Назначение цепей (полный диапазон, LF/HF и т. п.) зависит от усилителя и акустики. В мостовом режиме распайка может отличаться.",
    "source": [
      "Neutrik · speakON Wiring",
      "https://www.neutrik.com/media/10094/download/03%20Section%20speakON%20PG%20EN%20%20202202-V23.pdf?v=11"
    ],
    "shape": "map",
    "tags": "спикон колонка усилитель акустика",
    "wiring": null
  },
  {
    "id": "nl8",
    "title": "speakON · NL8",
    "category": "Аудио",
    "subtitle": "4 акустические цепи",
    "pins": [
      {
        "pin": "1+",
        "signal": "Цепь 1 · плюс"
      },
      {
        "pin": "1−",
        "signal": "Цепь 1 · минус"
      },
      {
        "pin": "2+",
        "signal": "Цепь 2 · плюс"
      },
      {
        "pin": "2−",
        "signal": "Цепь 2 · минус"
      },
      {
        "pin": "3+",
        "signal": "Цепь 3 · плюс"
      },
      {
        "pin": "3−",
        "signal": "Цепь 3 · минус"
      },
      {
        "pin": "4+",
        "signal": "Цепь 4 · плюс"
      },
      {
        "pin": "4−",
        "signal": "Цепь 4 · минус"
      }
    ],
    "note": "Номера указаны на клеммах. Назначение цепей (полный диапазон, LF/HF и т. п.) зависит от усилителя и акустики. В мостовом режиме распайка может отличаться.",
    "source": [
      "Neutrik · speakON Wiring",
      "https://www.neutrik.com/media/10094/download/03%20Section%20speakON%20PG%20EN%20%20202202-V23.pdf?v=11"
    ],
    "shape": "map",
    "tags": "спикон колонка усилитель акустика",
    "wiring": null
  },
  {
    "id": "xlr-trs",
    "title": "XLR ↔ TRS",
    "category": "Переходники",
    "subtitle": "Балансный моно · 3 контакта",
    "pins": [
      {
        "pin": "XLR 1",
        "signal": "TRS S · экран"
      },
      {
        "pin": "XLR 2",
        "signal": "TRS T · сигнал +"
      },
      {
        "pin": "XLR 3",
        "signal": "TRS R · сигнал −"
      }
    ],
    "note": "Переходник для балансного моно. Он не преобразует микрофонный уровень в линейный и не превращает сигнал в стерео.",
    "source": [
      "Shure · соединения аудиокабелей",
      "https://www.shure.com/damfiles/default/global/documents/publications/en/performance-production/us_pro_connecting_to_mixers_ea.pdf-f8a5ed2603ba35a011f6e56b255ca56f.pdf"
    ],
    "shape": "map",
    "tags": "кэнон джек адаптер",
    "wiring": null
  },
  {
    "id": "dmx5",
    "title": "DMX · XLR 5",
    "category": "Свет",
    "subtitle": "DMX512 · стандартный разъём",
    "pins": [
      {
        "pin": "1",
        "signal": "Общий / экран"
      },
      {
        "pin": "2",
        "signal": "Data 1 −"
      },
      {
        "pin": "3",
        "signal": "Data 1 +"
      },
      {
        "pin": "4",
        "signal": "Data 2 − · дополнительная линия"
      },
      {
        "pin": "5",
        "signal": "Data 2 + · дополнительная линия"
      }
    ],
    "note": "Терминатор: 120 Ом между контактами 2 и 3 на конце линии. Контакты 4/5 в обычной однолинейной системе не задействованы. Для DMX нужен кабель 120 Ом; микрофонный кабель не равноценен.",
    "source": [
      "ETC · DMX512",
      "https://support.etcconnect.com/ETC/Getting_Started_with_ETC_and_FAQ/DMX512-Info"
    ],
    "shape": "map",
    "tags": "дмх освещение свет dmx512",
    "wiring": null
  },
  {
    "id": "dmx3",
    "title": "DMX · XLR 3",
    "category": "Свет",
    "subtitle": "DMX512 · распространённый вариант",
    "pins": [
      {
        "pin": "1",
        "signal": "Общий / экран"
      },
      {
        "pin": "2",
        "signal": "Data 1 −"
      },
      {
        "pin": "3",
        "signal": "Data 1 +"
      }
    ],
    "note": "Трёхконтактный XLR встречается на приборах, но стандартный DMX512-разъём — пяти pin. Не подключайте эту линию к аудиооборудованию.",
    "source": [
      "ETC · DMX512",
      "https://support.etcconnect.com/ETC/Getting_Started_with_ETC_and_FAQ/DMX512-Info"
    ],
    "shape": "map",
    "tags": "дмх освещение свет dmx512",
    "wiring": null
  },
  {
    "id": "dmx-adapter",
    "title": "DMX · XLR 3 ↔ 5",
    "category": "Переходники",
    "subtitle": "Переходник основной линии",
    "pins": [
      {
        "pin": "1",
        "signal": "1 · общий"
      },
      {
        "pin": "2",
        "signal": "2 · Data −"
      },
      {
        "pin": "3",
        "signal": "3 · Data +"
      },
      {
        "pin": "4 / 5",
        "signal": "Не подключаются на стороне XLR 3"
      }
    ],
    "note": "Основная линия соединяется 1 → 1, 2 → 2, 3 → 3. Дополнительная линия пяти pin через такой переходник не проходит.",
    "source": [
      "ETC · DMX512",
      "https://support.etcconnect.com/ETC/Getting_Started_with_ETC_and_FAQ/DMX512-Info"
    ],
    "shape": "map",
    "tags": "дмх адаптер",
    "wiring": null
  },
  {
    "id": "dmx-rj45",
    "title": "DMX · RJ45",
    "category": "Свет",
    "subtitle": "ESTA · контакты 8P8C",
    "pins": [
      {
        "pin": "1",
        "signal": "Data 1 +"
      },
      {
        "pin": "2",
        "signal": "Data 1 −"
      },
      {
        "pin": "3",
        "signal": "Data 2 +"
      },
      {
        "pin": "4",
        "signal": "Не назначен"
      },
      {
        "pin": "5",
        "signal": "Не назначен"
      },
      {
        "pin": "6",
        "signal": "Data 2 −"
      },
      {
        "pin": "7",
        "signal": "Общий Data 1"
      },
      {
        "pin": "8",
        "signal": "Общий Data 2"
      }
    ],
    "note": "Это DMX, а не Ethernet. Для адаптера основной линии: RJ45 1 → XLR 3; 2 → XLR 2; 7 и 8 → XLR 1. У фирменных систем могут быть другие схемы.",
    "source": [
      "ETC · DMX over Cat5",
      "https://support.etcconnect.com/ETC/Getting_Started_with_ETC_and_FAQ/DMX_Over_Cat5"
    ],
    "shape": "map",
    "tags": "дмх сеть cat5 ethercon",
    "wiring": null
  },
  {
    "id": "rj45-t568b",
    "title": "RJ45 · T568B",
    "category": "Сеть",
    "subtitle": "Ethernet / etherCON · порядок жил",
    "pins": [
      {
        "pin": "1",
        "signal": "Бело-оранжевый"
      },
      {
        "pin": "2",
        "signal": "Оранжевый"
      },
      {
        "pin": "3",
        "signal": "Бело-зелёный"
      },
      {
        "pin": "4",
        "signal": "Синий"
      },
      {
        "pin": "5",
        "signal": "Бело-синий"
      },
      {
        "pin": "6",
        "signal": "Зелёный"
      },
      {
        "pin": "7",
        "signal": "Бело-коричневый"
      },
      {
        "pin": "8",
        "signal": "Коричневый"
      }
    ],
    "note": "Схема штекера: золотые контакты обращены к вам, защёлка с обратной стороны, кабель вниз. Слева направо 1–8. Для прямого кабеля один стандарт на обоих концах. У розетки порядок IDC-клемм зависит от производителя.",
    "source": [
      "Fluke Networks · T568A / T568B",
      "https://www.flukenetworks.com/knowledge-base/application-or-standards-articles-copper/differences-between-wiring-codes-t568a-vs"
    ],
    "shape": "rj45",
    "tags": "обжим витая пара 8p8c ethercon cat5 cat6 lan",
    "wiring": null
  },
  {
    "id": "rj45-t568a",
    "title": "RJ45 · T568A",
    "category": "Сеть",
    "subtitle": "Ethernet / etherCON · порядок жил",
    "pins": [
      {
        "pin": "1",
        "signal": "Бело-зелёный"
      },
      {
        "pin": "2",
        "signal": "Зелёный"
      },
      {
        "pin": "3",
        "signal": "Бело-оранжевый"
      },
      {
        "pin": "4",
        "signal": "Синий"
      },
      {
        "pin": "5",
        "signal": "Бело-синий"
      },
      {
        "pin": "6",
        "signal": "Оранжевый"
      },
      {
        "pin": "7",
        "signal": "Бело-коричневый"
      },
      {
        "pin": "8",
        "signal": "Коричневый"
      }
    ],
    "note": "Схема штекера: золотые контакты обращены к вам, защёлка с обратной стороны, кабель вниз. Слева направо 1–8. Для прямого кабеля один стандарт на обоих концах. У розетки порядок IDC-клемм зависит от производителя.",
    "source": [
      "Fluke Networks · T568A / T568B",
      "https://www.flukenetworks.com/knowledge-base/application-or-standards-articles-copper/differences-between-wiring-codes-t568a-vs"
    ],
    "shape": "rj45",
    "tags": "обжим витая пара 8p8c ethercon cat5 cat6 lan",
    "wiring": null
  },
  {
    "id": "ethernet-cross",
    "title": "RJ45 · crossover",
    "category": "Переходники",
    "subtitle": "10 / 100BASE-T · T568A ↔ T568B",
    "pins": [
      {
        "pin": "1",
        "signal": "3"
      },
      {
        "pin": "2",
        "signal": "6"
      },
      {
        "pin": "3",
        "signal": "1"
      },
      {
        "pin": "4",
        "signal": "4"
      },
      {
        "pin": "5",
        "signal": "5"
      },
      {
        "pin": "6",
        "signal": "2"
      },
      {
        "pin": "7",
        "signal": "7"
      },
      {
        "pin": "8",
        "signal": "8"
      }
    ],
    "note": "В таблице: контакт первого конца → контакт второго. Это двухпарный crossover для 10/100 Мбит/с. У 1000BASE-T полный crossover имеет другую схему; Auto MDI-X обычно устраняет потребность в нём.",
    "source": [
      "Fluke Networks · T568A / T568B",
      "https://www.flukenetworks.com/knowledge-base/application-or-standards-articles-copper/differences-between-wiring-codes-t568a-vs"
    ],
    "shape": "map",
    "tags": "кроссовер обжим сеть",
    "wiring": null
  },
  {
    "id": "midi-din",
    "title": "MIDI · DIN 5",
    "category": "Управление",
    "subtitle": "DIN 180° · токовая петля",
    "pins": [
      {
        "pin": "1",
        "signal": "Не используется"
      },
      {
        "pin": "2",
        "signal": "Экран"
      },
      {
        "pin": "3",
        "signal": "Не используется"
      },
      {
        "pin": "4",
        "signal": "Источник тока"
      },
      {
        "pin": "5",
        "signal": "Приём тока / данные"
      }
    ],
    "note": "Обычный MIDI-кабель соединяет 2 → 2, 4 → 4, 5 → 5. На MIDI IN экран не соединяют с сигнальной землёй; вход гальванически развязан. Используйте номера на разъёме.",
    "source": [
      "MIDI Association · Electrical Specification",
      "https://midi.org/5-pin-din-electrical-specs"
    ],
    "shape": "map",
    "tags": "миди синтезатор din5",
    "wiring": null
  },
  {
    "id": "midi-trs-a",
    "title": "MIDI · TRS Type A",
    "category": "Управление",
    "subtitle": "3,5 мм · адаптер к DIN 5",
    "pins": [
      {
        "pin": "T",
        "signal": "DIN 5"
      },
      {
        "pin": "R",
        "signal": "DIN 4"
      },
      {
        "pin": "S",
        "signal": "DIN 2 · экран"
      }
    ],
    "note": "Type A: Tip → 5, Ring → 4. Type B: Tip → 4, Ring → 5. Перед подключением проверьте руководство прибора. Одинаковый штекер не гарантирует совместимость.",
    "source": [
      "MIDI Association · DIN и TRS",
      "https://midi.org/updated-how-to-make-your-own-3-5mm-mini-stereo-trs-to-midi-5-pin-din-cables"
    ],
    "shape": "jack",
    "tags": "миди синтезатор адаптер",
    "wiring": null
  },
  {
    "id": "midi-trs-b",
    "title": "MIDI · TRS Type B",
    "category": "Управление",
    "subtitle": "3,5 мм · адаптер к DIN 5",
    "pins": [
      {
        "pin": "T",
        "signal": "DIN 4"
      },
      {
        "pin": "R",
        "signal": "DIN 5"
      },
      {
        "pin": "S",
        "signal": "DIN 2 · экран"
      }
    ],
    "note": "Type A: Tip → 5, Ring → 4. Type B: Tip → 4, Ring → 5. Перед подключением проверьте руководство прибора. Одинаковый штекер не гарантирует совместимость.",
    "source": [
      "MIDI Association · DIN и TRS",
      "https://midi.org/updated-how-to-make-your-own-3-5mm-mini-stereo-trs-to-midi-5-pin-din-cables"
    ],
    "shape": "jack",
    "tags": "миди синтезатор адаптер",
    "wiring": null
  },
  {
    "id": "rs232",
    "title": "RS-232 · DE-9",
    "category": "Управление",
    "subtitle": "COM / DB9 · сторона DTE",
    "pins": [
      {
        "pin": "1",
        "signal": "DCD · вход"
      },
      {
        "pin": "2",
        "signal": "RXD · вход"
      },
      {
        "pin": "3",
        "signal": "TXD · выход"
      },
      {
        "pin": "4",
        "signal": "DTR · выход"
      },
      {
        "pin": "5",
        "signal": "GND · общий"
      },
      {
        "pin": "6",
        "signal": "DSR · вход"
      },
      {
        "pin": "7",
        "signal": "RTS · выход"
      },
      {
        "pin": "8",
        "signal": "CTS · вход"
      },
      {
        "pin": "9",
        "signal": "RI · вход"
      }
    ],
    "note": "Направления указаны для DTE (например, ПК). Для трёхпроводного null-modem: 2 ↔ 3, 3 ↔ 2, 5 ↔ 5. RS-232 не совместим напрямую с TTL UART или RS-485.",
    "source": [
      "Digi · RS-232 DB9 / DB25",
      "https://www.digi.com/support/knowledge-base/edgeport-rs-232-db9-and-db25-pinout-information"
    ],
    "shape": "db9",
    "tags": "com serial последовательный db9",
    "wiring": null
  },
  {
    "id": "rs232-db25",
    "title": "RS-232 · DB25",
    "category": "Управление",
    "subtitle": "Последовательный порт DTE · основные линии",
    "pins": [
      {
        "pin": "1",
        "signal": "Защитная земля / корпус"
      },
      {
        "pin": "2",
        "signal": "TXD · выход"
      },
      {
        "pin": "3",
        "signal": "RXD · вход"
      },
      {
        "pin": "4",
        "signal": "RTS · выход"
      },
      {
        "pin": "5",
        "signal": "CTS · вход"
      },
      {
        "pin": "6",
        "signal": "DSR · вход"
      },
      {
        "pin": "7",
        "signal": "GND · сигнальный общий"
      },
      {
        "pin": "8",
        "signal": "DCD · вход"
      },
      {
        "pin": "20",
        "signal": "DTR · выход"
      },
      {
        "pin": "22",
        "signal": "RI · вход"
      }
    ],
    "note": "Показаны основные RS-232-контакты. Остальные могут использоваться для синхронных или вторичных линий. DB25 также используется для аналогового аудио и LPT — это другие распиновки.",
    "source": [
      "Digi · RS-232 DB9 / DB25",
      "https://www.digi.com/support/knowledge-base/edgeport-rs-232-db9-and-db25-pinout-information"
    ],
    "shape": "map",
    "tags": "com serial db25",
    "wiring": null
  },
  {
    "id": "usb-a",
    "title": "USB 2.0 · Type A",
    "category": "Данные",
    "subtitle": "4 контакта · прямоугольный",
    "pins": [
      {
        "pin": "1",
        "signal": "VBUS · +5 В"
      },
      {
        "pin": "2",
        "signal": "D−"
      },
      {
        "pin": "3",
        "signal": "D+"
      },
      {
        "pin": "4",
        "signal": "GND"
      }
    ],
    "note": "Только четырёхконтактный USB 2.0. У SuperSpeed USB 3.x есть дополнительные контакты. Цвета жил не гарантированы — проверяйте номера и прозвонку.",
    "source": [
      "SparkFun · USB connectors",
      "https://learn.sparkfun.com/tutorials/connector-basics/usb-connectors"
    ],
    "shape": "map",
    "tags": "юсб usb2 принтер",
    "wiring": null
  },
  {
    "id": "usb-b",
    "title": "USB 2.0 · Type B",
    "category": "Данные",
    "subtitle": "4 контакта · квадратный",
    "pins": [
      {
        "pin": "1",
        "signal": "VBUS · +5 В"
      },
      {
        "pin": "2",
        "signal": "D−"
      },
      {
        "pin": "3",
        "signal": "D+"
      },
      {
        "pin": "4",
        "signal": "GND"
      }
    ],
    "note": "Только четырёхконтактный USB 2.0. У SuperSpeed USB 3.x есть дополнительные контакты. Цвета жил не гарантированы — проверяйте номера и прозвонку.",
    "source": [
      "SparkFun · USB connectors",
      "https://learn.sparkfun.com/tutorials/connector-basics/usb-connectors"
    ],
    "shape": "map",
    "tags": "юсб usb2 принтер",
    "wiring": null
  },
  {
    "id": "usb-mini-b",
    "title": "USB 2.0 · Mini-B",
    "category": "Данные",
    "subtitle": "5 контактов · портативные устройства",
    "pins": [
      {
        "pin": "1",
        "signal": "VBUS · +5 В"
      },
      {
        "pin": "2",
        "signal": "D−"
      },
      {
        "pin": "3",
        "signal": "D+"
      },
      {
        "pin": "4",
        "signal": "ID · у B не подключён"
      },
      {
        "pin": "5",
        "signal": "GND"
      }
    ],
    "note": "Не путайте с Micro-B SuperSpeed (10 контактов). ID служит для определения роли OTG; у B-штекера он не подключён.",
    "source": [
      "SparkFun · USB connectors",
      "https://learn.sparkfun.com/tutorials/connector-basics/usb-connectors"
    ],
    "shape": "map",
    "tags": "юсб зарядка mini micro",
    "wiring": null
  },
  {
    "id": "usb-micro-b",
    "title": "USB 2.0 · Micro-B",
    "category": "Данные",
    "subtitle": "5 контактов · портативные устройства",
    "pins": [
      {
        "pin": "1",
        "signal": "VBUS · +5 В"
      },
      {
        "pin": "2",
        "signal": "D−"
      },
      {
        "pin": "3",
        "signal": "D+"
      },
      {
        "pin": "4",
        "signal": "ID · у B не подключён"
      },
      {
        "pin": "5",
        "signal": "GND"
      }
    ],
    "note": "Не путайте с Micro-B SuperSpeed (10 контактов). ID служит для определения роли OTG; у B-штекера он не подключён.",
    "source": [
      "SparkFun · USB connectors",
      "https://learn.sparkfun.com/tutorials/connector-basics/usb-connectors"
    ],
    "shape": "map",
    "tags": "юсб зарядка mini micro",
    "wiring": null
  },
  {
    "id": "usbc",
    "title": "USB-C · гнездо",
    "category": "Данные",
    "subtitle": "24 контакта · полная базовая схема",
    "pins": [
      {
        "pin": "A1",
        "signal": "GND"
      },
      {
        "pin": "A2",
        "signal": "TX1+"
      },
      {
        "pin": "A3",
        "signal": "TX1−"
      },
      {
        "pin": "A4",
        "signal": "VBUS"
      },
      {
        "pin": "A5",
        "signal": "CC1"
      },
      {
        "pin": "A6",
        "signal": "D+"
      },
      {
        "pin": "A7",
        "signal": "D−"
      },
      {
        "pin": "A8",
        "signal": "SBU1"
      },
      {
        "pin": "A9",
        "signal": "VBUS"
      },
      {
        "pin": "A10",
        "signal": "RX2−"
      },
      {
        "pin": "A11",
        "signal": "RX2+"
      },
      {
        "pin": "A12",
        "signal": "GND"
      },
      {
        "pin": "B1",
        "signal": "GND"
      },
      {
        "pin": "B2",
        "signal": "TX2+"
      },
      {
        "pin": "B3",
        "signal": "TX2−"
      },
      {
        "pin": "B4",
        "signal": "VBUS"
      },
      {
        "pin": "B5",
        "signal": "CC2"
      },
      {
        "pin": "B6",
        "signal": "D+"
      },
      {
        "pin": "B7",
        "signal": "D−"
      },
      {
        "pin": "B8",
        "signal": "SBU2"
      },
      {
        "pin": "B9",
        "signal": "VBUS"
      },
      {
        "pin": "B10",
        "signal": "RX1−"
      },
      {
        "pin": "B11",
        "signal": "RX1+"
      },
      {
        "pin": "B12",
        "signal": "GND"
      }
    ],
    "note": "Это распиновка гнезда, не штекера кабеля. Назначение высокоскоростных линий зависит от режима и ориентации. VBUS может быть выше 5 В после согласования USB PD. CC1/CC2 — определение подключения; SBU — вспомогательные линии.",
    "source": [
      "Microchip · USB Type-C",
      "https://developerhelp.microchip.com/xwiki/bin/view/applications/usb/typec-features/cable-connector/"
    ],
    "shape": "map",
    "tags": "type c тайп си юсб thunderbolt",
    "wiring": null
  },
  {
    "id": "hdmi",
    "title": "HDMI · Type A",
    "category": "Видео",
    "subtitle": "19 контактов · базовые сигналы TMDS",
    "pins": [
      {
        "pin": "1",
        "signal": "TMDS Data 2+"
      },
      {
        "pin": "2",
        "signal": "Экран Data 2"
      },
      {
        "pin": "3",
        "signal": "TMDS Data 2−"
      },
      {
        "pin": "4",
        "signal": "TMDS Data 1+"
      },
      {
        "pin": "5",
        "signal": "Экран Data 1"
      },
      {
        "pin": "6",
        "signal": "TMDS Data 1−"
      },
      {
        "pin": "7",
        "signal": "TMDS Data 0+"
      },
      {
        "pin": "8",
        "signal": "Экран Data 0"
      },
      {
        "pin": "9",
        "signal": "TMDS Data 0−"
      },
      {
        "pin": "10",
        "signal": "TMDS Clock+"
      },
      {
        "pin": "11",
        "signal": "Экран Clock"
      },
      {
        "pin": "12",
        "signal": "TMDS Clock−"
      },
      {
        "pin": "13",
        "signal": "CEC"
      },
      {
        "pin": "14",
        "signal": "Utility / HEAC+¹"
      },
      {
        "pin": "15",
        "signal": "DDC SCL"
      },
      {
        "pin": "16",
        "signal": "DDC SDA"
      },
      {
        "pin": "17",
        "signal": "Земля DDC / CEC"
      },
      {
        "pin": "18",
        "signal": "+5 В"
      },
      {
        "pin": "19",
        "signal": "HPD / HEAC−¹"
      }
    ],
    "note": "¹ В старой документации pin 14 обозначается Reserved. HEAC относится к функциям HDMI Ethernet / ARC. Таблица показывает базовые TMDS-сигналы; в режиме HDMI 2.1 FRL назначение высокоскоростных линий меняется. Mini / Micro HDMI имеют другую нумерацию.",
    "source": [
      "Extron · HDMI 201, стр. 21 (базовая TMDS-распиновка)",
      "https://media.extron.com/public/download/files/userman/68-1375-01_F.pdf"
    ],
    "shape": "map",
    "tags": "ашдми монитор проектор",
    "wiring": null
  },
  {
    "id": "displayport",
    "title": "DisplayPort · полноразмерный",
    "category": "Видео",
    "subtitle": "20 контактов · базовая схема",
    "pins": [
      {
        "pin": "1",
        "signal": "Lane 0+"
      },
      {
        "pin": "2",
        "signal": "GND"
      },
      {
        "pin": "3",
        "signal": "Lane 0−"
      },
      {
        "pin": "4",
        "signal": "Lane 1+"
      },
      {
        "pin": "5",
        "signal": "GND"
      },
      {
        "pin": "6",
        "signal": "Lane 1−"
      },
      {
        "pin": "7",
        "signal": "Lane 2+"
      },
      {
        "pin": "8",
        "signal": "GND"
      },
      {
        "pin": "9",
        "signal": "Lane 2−"
      },
      {
        "pin": "10",
        "signal": "Lane 3+"
      },
      {
        "pin": "11",
        "signal": "GND"
      },
      {
        "pin": "12",
        "signal": "Lane 3−"
      },
      {
        "pin": "13",
        "signal": "CONFIG1"
      },
      {
        "pin": "14",
        "signal": "CONFIG2"
      },
      {
        "pin": "15",
        "signal": "AUX+"
      },
      {
        "pin": "16",
        "signal": "GND"
      },
      {
        "pin": "17",
        "signal": "AUX−"
      },
      {
        "pin": "18",
        "signal": "Hot Plug Detect"
      },
      {
        "pin": "19",
        "signal": "Возврат питания"
      },
      {
        "pin": "20",
        "signal": "DP_PWR · 3,3 В"
      }
    ],
    "note": "Контакт 20 не должен соединять питание двух устройств в обычном пассивном кабеле DP ↔ DP. Таблица — для полноразмерного DisplayPort; Mini DP имеет другую нумерацию.",
    "source": [
      "Extron · SW2 DP, распиновка DisplayPort",
      "https://media.extron.com/public/download/files/userman/68-2245-01_C_SW2_DP_User_Guide.pdf"
    ],
    "shape": "map",
    "tags": "дисплейпорт dp монитор",
    "wiring": null
  },
  {
    "id": "vga",
    "title": "VGA · DE-15",
    "category": "Видео",
    "subtitle": "RGBHV · VESA DDC",
    "pins": [
      {
        "pin": "1",
        "signal": "Красный R"
      },
      {
        "pin": "2",
        "signal": "Зелёный G"
      },
      {
        "pin": "3",
        "signal": "Синий B"
      },
      {
        "pin": "4",
        "signal": "Reserved / старый ID2"
      },
      {
        "pin": "5",
        "signal": "GND"
      },
      {
        "pin": "6",
        "signal": "Земля R"
      },
      {
        "pin": "7",
        "signal": "Земля G"
      },
      {
        "pin": "8",
        "signal": "Земля B"
      },
      {
        "pin": "9",
        "signal": "+5 В DDC / ранее ключ"
      },
      {
        "pin": "10",
        "signal": "Земля синхронизации"
      },
      {
        "pin": "11",
        "signal": "Reserved / старый ID0"
      },
      {
        "pin": "12",
        "signal": "DDC SDA / старый ID1"
      },
      {
        "pin": "13",
        "signal": "HSync"
      },
      {
        "pin": "14",
        "signal": "VSync"
      },
      {
        "pin": "15",
        "signal": "DDC SCL"
      }
    ],
    "note": "Показан вариант VESA DDC. У старых VGA часть ID/DDC-контактов могла иметь другое назначение. Корпус разъёма — экран.",
    "source": [
      "Network Technologies · DVI и VGA",
      "https://www.nti.sa.com/technote.html"
    ],
    "shape": "map",
    "tags": "вга монитор rgb dsub hd15",
    "wiring": null
  },
  {
    "id": "dvi",
    "title": "DVI · D / I",
    "category": "Видео",
    "subtitle": "Single Link / Dual Link",
    "pins": [
      {
        "pin": "1",
        "signal": "TMDS Data 2−"
      },
      {
        "pin": "2",
        "signal": "TMDS Data 2+"
      },
      {
        "pin": "3",
        "signal": "Экран Data 2/4"
      },
      {
        "pin": "4",
        "signal": "TMDS Data 4−"
      },
      {
        "pin": "5",
        "signal": "TMDS Data 4+"
      },
      {
        "pin": "6",
        "signal": "DDC Clock"
      },
      {
        "pin": "7",
        "signal": "DDC Data"
      },
      {
        "pin": "8",
        "signal": "Analog VSync (только DVI-I)"
      },
      {
        "pin": "9",
        "signal": "TMDS Data 1−"
      },
      {
        "pin": "10",
        "signal": "TMDS Data 1+"
      },
      {
        "pin": "11",
        "signal": "Экран Data 1/3"
      },
      {
        "pin": "12",
        "signal": "TMDS Data 3−"
      },
      {
        "pin": "13",
        "signal": "TMDS Data 3+"
      },
      {
        "pin": "14",
        "signal": "+5 В"
      },
      {
        "pin": "15",
        "signal": "GND"
      },
      {
        "pin": "16",
        "signal": "Hot Plug Detect"
      },
      {
        "pin": "17",
        "signal": "TMDS Data 0−"
      },
      {
        "pin": "18",
        "signal": "TMDS Data 0+"
      },
      {
        "pin": "19",
        "signal": "Экран Data 0/5"
      },
      {
        "pin": "20",
        "signal": "TMDS Data 5−"
      },
      {
        "pin": "21",
        "signal": "TMDS Data 5+"
      },
      {
        "pin": "22",
        "signal": "Экран Clock"
      },
      {
        "pin": "23",
        "signal": "TMDS Clock+"
      },
      {
        "pin": "24",
        "signal": "TMDS Clock−"
      },
      {
        "pin": "C1",
        "signal": "Analog R · DVI-I"
      },
      {
        "pin": "C2",
        "signal": "Analog G · DVI-I"
      },
      {
        "pin": "C3",
        "signal": "Analog B · DVI-I"
      },
      {
        "pin": "C4",
        "signal": "Analog HSync · DVI-I"
      },
      {
        "pin": "C5",
        "signal": "Analog GND · DVI-I"
      }
    ],
    "note": "Single Link: контакты 4, 5, 12, 13, 20, 21 отсутствуют. DVI-D не имеет аналоговых C1–C5; pin 8 не используется. Пассивный VGA-переходник работает только с аналоговым сигналом DVI-I.",
    "source": [
      "Network Technologies · DVI и VGA",
      "https://www.nti.sa.com/technote.html"
    ],
    "shape": "map",
    "tags": "дви монитор",
    "wiring": null
  },
  {
    "id": "powercon",
    "title": "powerCON · A / B",
    "category": "Питание",
    "subtitle": "Сеть AC · L / N / PE",
    "pins": [
      {
        "pin": "L",
        "signal": "Фаза · коричневый¹"
      },
      {
        "pin": "N",
        "signal": "Нейтраль · синий¹"
      },
      {
        "pin": "PE",
        "signal": "Защитное заземление · жёлто-зелёный¹"
      }
    ],
    "note": "Старая серия NAC3FCA (синий IN) / NAC3FCB (серый OUT) не допускает соединение и разъединение под нагрузкой. Подключайте по маркировке клемм L / N / PE, а не по произвольному виду на схеме. ¹ Цвета по распространённой IEC-системе; не заменяют проверку. Сборка только при снятом напряжении.",
    "source": [
      "Neutrik · powerCON, инструкция сборки",
      "https://www.neutrik.co.jp/media/14385/download/Assembly%20instruction%20powerCON%20Cable%20Connectors.pdf?v=1"
    ],
    "shape": "map",
    "tags": "пауэркон 230 220 true one",
    "wiring": null
  },
  {
    "id": "true1",
    "title": "powerCON · TRUE1",
    "category": "Питание",
    "subtitle": "Сеть AC · L / N / PE",
    "pins": [
      {
        "pin": "L",
        "signal": "Фаза · коричневый¹"
      },
      {
        "pin": "N",
        "signal": "Нейтраль · синий¹"
      },
      {
        "pin": "PE",
        "signal": "Защитное заземление · жёлто-зелёный¹"
      }
    ],
    "note": "TRUE1 — другая система, несовместимая с powerCON A/B. Для сборки следуйте инструкции точной модели разъёма; назначения клемм обозначены на вставке. ¹ Цвета по распространённой IEC-системе; не заменяют проверку. Сборка только при снятом напряжении.",
    "source": [
      "Neutrik · powerCON TRUE1",
      "https://www.neutrik.com/en/product/nac3f-true1-l"
    ],
    "shape": "map",
    "tags": "пауэркон 230 220 true one",
    "wiring": null
  }
];
