import type { AlphabetTuple, LessonItem, SoundRuleTuple } from "../types";

export const ALPHABET: AlphabetTuple[] = [
  [
    "A",
    "а",
    "A"
  ],
  [
    "B",
    "бэ",
    "Be"
  ],
  [
    "C",
    "цэ",
    "Tse"
  ],
  [
    "D",
    "дэ",
    "De"
  ],
  [
    "E",
    "э",
    "E"
  ],
  [
    "F",
    "эф",
    "Eff"
  ],
  [
    "G",
    "гэ",
    "Ge"
  ],
  [
    "H",
    "ха",
    "Ha"
  ],
  [
    "I",
    "и",
    "I"
  ],
  [
    "J",
    "йот",
    "Jott"
  ],
  [
    "K",
    "ка",
    "Ka"
  ],
  [
    "L",
    "эль",
    "Ell"
  ],
  [
    "M",
    "эм",
    "Emm"
  ],
  [
    "N",
    "эн",
    "Enn"
  ],
  [
    "O",
    "о",
    "O"
  ],
  [
    "P",
    "пэ",
    "Pe"
  ],
  [
    "Q",
    "ку",
    "Ku"
  ],
  [
    "R",
    "эр",
    "Err"
  ],
  [
    "S",
    "эс",
    "Ess"
  ],
  [
    "T",
    "тэ",
    "Te"
  ],
  [
    "U",
    "у",
    "U"
  ],
  [
    "V",
    "фау",
    "Fau"
  ],
  [
    "W",
    "вэ",
    "We"
  ],
  [
    "X",
    "икс",
    "Iks"
  ],
  [
    "Y",
    "ипсилон",
    "Ypsilon"
  ],
  [
    "Z",
    "цет",
    "Zett"
  ],
  [
    "Ä",
    "э",
    "Ä"
  ],
  [
    "Ö",
    "ё",
    "Ö"
  ],
  [
    "Ü",
    "ю",
    "Ü"
  ],
  [
    "ß",
    "эсцет",
    "Eszett"
  ]
];

export const SOUND_RULES: SoundRuleTuple[] = [
  [
    "ei",
    "«ай»",
    [
      [
        "nein",
        "нет"
      ],
      [
        "das Ei",
        "яйцо"
      ],
      [
        "die Zeit",
        "время"
      ]
    ]
  ],
  [
    "ie",
    "долгое «и»",
    [
      [
        "das Bier",
        "пиво"
      ],
      [
        "lieben",
        "любить"
      ],
      [
        "das Tier",
        "животное"
      ]
    ]
  ],
  [
    "eu / äu",
    "«ой»",
    [
      [
        "neu",
        "новый"
      ],
      [
        "heute",
        "сегодня"
      ],
      [
        "die Häuser",
        "дома"
      ]
    ]
  ],
  [
    "au",
    "«ау»",
    [
      [
        "das Haus",
        "дом"
      ],
      [
        "die Frau",
        "женщина"
      ],
      [
        "auch",
        "тоже"
      ]
    ]
  ],
  [
    "z",
    "«ц»",
    [
      [
        "die Zeit",
        "время"
      ],
      [
        "zehn",
        "десять"
      ],
      [
        "das Zimmer",
        "комната"
      ]
    ]
  ],
  [
    "v",
    "обычно «ф»",
    [
      [
        "der Vater",
        "отец"
      ],
      [
        "der Vogel",
        "птица"
      ],
      [
        "viel",
        "много"
      ]
    ]
  ],
  [
    "w",
    "«в»",
    [
      [
        "das Wasser",
        "вода"
      ],
      [
        "wo",
        "где"
      ],
      [
        "die Wohnung",
        "квартира"
      ]
    ]
  ],
  [
    "j",
    "«й»",
    [
      [
        "ja",
        "да"
      ],
      [
        "jung",
        "молодой"
      ],
      [
        "das Jahr",
        "год"
      ]
    ]
  ],
  [
    "s перед гласной",
    "«з»",
    [
      [
        "sieben",
        "семь"
      ],
      [
        "die Suppe",
        "суп"
      ],
      [
        "sagen",
        "говорить"
      ]
    ]
  ],
  [
    "sch",
    "«ш»",
    [
      [
        "die Schule",
        "школа"
      ],
      [
        "schön",
        "красивый"
      ],
      [
        "der Fisch",
        "рыба"
      ]
    ]
  ],
  [
    "sp- / st-",
    "«шп-», «шт-»",
    [
      [
        "das Spiel",
        "игра"
      ],
      [
        "die Stadt",
        "город"
      ],
      [
        "die Straße",
        "улица"
      ]
    ]
  ],
  [
    "ch после e, i, ä, ö, ü",
    "мягкое «х»",
    [
      [
        "ich",
        "я"
      ],
      [
        "das Mädchen",
        "девочка"
      ],
      [
        "die Milch",
        "молоко"
      ]
    ]
  ],
  [
    "ch после a, o, u",
    "твёрдое «х»",
    [
      [
        "acht",
        "восемь"
      ],
      [
        "das Buch",
        "книга"
      ],
      [
        "die Nacht",
        "ночь"
      ]
    ]
  ],
  [
    "ä",
    "«э»",
    [
      [
        "der Käse",
        "сыр"
      ],
      [
        "spät",
        "поздно"
      ],
      [
        "die Väter",
        "отцы"
      ]
    ]
  ],
  [
    "ö",
    "«ё» без «й»",
    [
      [
        "zwölf",
        "двенадцать"
      ],
      [
        "möchte",
        "хотел бы"
      ],
      [
        "der Löffel",
        "ложка"
      ]
    ]
  ],
  [
    "ü",
    "«ю» без «й»",
    [
      [
        "über",
        "над"
      ],
      [
        "die Küche",
        "кухня"
      ],
      [
        "fünf",
        "пять"
      ]
    ]
  ],
  [
    "ß",
    "«сс»",
    [
      [
        "die Straße",
        "улица"
      ],
      [
        "heißen",
        "называться"
      ],
      [
        "groß",
        "большой"
      ]
    ]
  ],
  [
    "-er на конце",
    "почти «а»",
    [
      [
        "der Vater",
        "отец"
      ],
      [
        "die Mutter",
        "мать"
      ],
      [
        "der Bruder",
        "брат"
      ]
    ]
  ],
  [
    "b, d, g на конце",
    "как «п, т, к»",
    [
      [
        "der Tag",
        "день"
      ],
      [
        "der Hund",
        "собака"
      ],
      [
        "das Kind",
        "ребёнок"
      ]
    ]
  ]
];

export const LESSONS: LessonItem[] = [
  {
    "t": "Чтение и произношение",
    "lvl": "A1.1",
    "desc": "Алфавит, умлауты ä ö ü, дифтонги и главные правила чтения.",
    "g": "<p>Немецкий читается почти так, как пишется. Главные правила:</p><ul><li><b>ei</b> = «ай» (nein), <b>ie</b> = долгое «и» (Bier), <b>eu/äu</b> = «ой», <b>au</b> = «ау»</li><li><b>z</b> = «ц», <b>v</b> = «ф» (Vogel), <b>w</b> = «в», <b>j</b> = «й», <b>s</b> перед гласной = «з»</li><li><b>sch</b> = «ш», <b>sp/st</b> в начале слова = «шп/шт», <b>ch</b> = мягкое или твёрдое «х»</li><li><b>ä</b> = «э», <b>ö</b> = как «ё» без «й», <b>ü</b> = как «ю» без «й», <b>ß</b> = «сс»</li><li>Ударение обычно на первый слог. Все существительные пишутся с большой буквы.</li></ul>",
    "e": "<p><b>Гласные:</b> долгие, если после них одна согласная или h (Name «на́мэ», Zahl «цаль»), краткие, если после них две согласные (Mann «ман»).</p><p><b>-er в конце слова</b> звучит почти как «а» (Vater), а <b>-e</b> как «э».</p><p><b>b, d, g в конце слова</b> оглушаются: Tag «так», Hund «хунт».</p>",
    "w": [
      [
        "die Schule",
        "шу́лэ",
        "школа"
      ],
      [
        "das Spiel",
        "шпиль",
        "игра"
      ],
      [
        "die Straße",
        "штра́сэ",
        "улица"
      ],
      [
        "die Zeit",
        "цайт",
        "время"
      ],
      [
        "das Eis",
        "айс",
        "лёд, мороженое"
      ],
      [
        "das Bier",
        "бир",
        "пиво"
      ],
      [
        "das Haus",
        "хаус",
        "дом"
      ],
      [
        "der Vogel",
        "фо́гель",
        "птица"
      ],
      [
        "die Nacht",
        "нахт",
        "ночь"
      ],
      [
        "der Euro",
        "о́йро",
        "евро"
      ],
      [
        "ich",
        "их",
        "я"
      ],
      [
        "das Buch",
        "бух",
        "книга"
      ],
      [
        "schön",
        "шён",
        "красивый"
      ],
      [
        "über",
        "ю́бер",
        "над, о"
      ],
      [
        "neu",
        "ной",
        "новый"
      ],
      [
        "das Mädchen",
        "мэ́дхен",
        "девочка"
      ]
    ],
    "d": [],
    "f": [
      [
        "Буква z читается как…",
        "ц",
        [
          "ц",
          "з",
          "с"
        ]
      ],
      [
        "Сочетание sch читается как…",
        "ш",
        [
          "ш",
          "сх",
          "с"
        ]
      ],
      [
        "Сочетание ie читается как…",
        "долгое «и»",
        [
          "долгое «и»",
          "ай",
          "ие"
        ]
      ],
      [
        "Сочетание eu читается как…",
        "ой",
        [
          "ой",
          "еу",
          "ай"
        ]
      ]
    ],
    "sb": [
      [
        "Das Haus ist schön.",
        "Дом красивый.",
        "Существительные с большой буквы"
      ],
      [
        "Ich lese ein Buch.",
        "Я читаю книгу.",
        "Глагол на 2-м месте"
      ]
    ],
    "r": [
      "Guten Tag! Ich heiße Daniel.",
      "гу́тен таг! их ха́йсэ да́ниэль",
      "Добрый день! Меня зовут Даниэль."
    ],
    "wr": "<p>Если на клавиатуре нет умлаутов: <b>ä = ae, ö = oe, ü = ue, ß = ss</b>. А в тренажёрах нашего сайта под полем ввода всегда есть кнопки <b>ä ö ü ß</b>.</p>",
    "sn": [
      [
        "ei",
        "«ай»",
        [
          [
            "nein",
            "нет"
          ],
          [
            "das Ei",
            "яйцо"
          ],
          [
            "die Zeit",
            "время"
          ]
        ]
      ],
      [
        "ie",
        "долгое «и»",
        [
          [
            "das Bier",
            "пиво"
          ],
          [
            "lieben",
            "любить"
          ],
          [
            "das Tier",
            "животное"
          ]
        ]
      ],
      [
        "eu / äu",
        "«ой»",
        [
          [
            "neu",
            "новый"
          ],
          [
            "heute",
            "сегодня"
          ],
          [
            "die Häuser",
            "дома"
          ]
        ]
      ],
      [
        "au",
        "«ау»",
        [
          [
            "das Haus",
            "дом"
          ],
          [
            "die Frau",
            "женщина"
          ],
          [
            "auch",
            "тоже"
          ]
        ]
      ],
      [
        "z",
        "«ц»",
        [
          [
            "die Zeit",
            "время"
          ],
          [
            "zehn",
            "десять"
          ],
          [
            "das Zimmer",
            "комната"
          ]
        ]
      ],
      [
        "v",
        "обычно «ф»",
        [
          [
            "der Vater",
            "отец"
          ],
          [
            "der Vogel",
            "птица"
          ],
          [
            "viel",
            "много"
          ]
        ]
      ],
      [
        "w",
        "«в»",
        [
          [
            "das Wasser",
            "вода"
          ],
          [
            "wo",
            "где"
          ],
          [
            "die Wohnung",
            "квартира"
          ]
        ]
      ],
      [
        "j",
        "«й»",
        [
          [
            "ja",
            "да"
          ],
          [
            "jung",
            "молодой"
          ],
          [
            "das Jahr",
            "год"
          ]
        ]
      ],
      [
        "s перед гласной",
        "«з»",
        [
          [
            "sieben",
            "семь"
          ],
          [
            "die Suppe",
            "суп"
          ],
          [
            "sagen",
            "говорить"
          ]
        ]
      ],
      [
        "sch",
        "«ш»",
        [
          [
            "die Schule",
            "школа"
          ],
          [
            "schön",
            "красивый"
          ],
          [
            "der Fisch",
            "рыба"
          ]
        ]
      ],
      [
        "sp- / st-",
        "«шп-», «шт-»",
        [
          [
            "das Spiel",
            "игра"
          ],
          [
            "die Stadt",
            "город"
          ],
          [
            "die Straße",
            "улица"
          ]
        ]
      ],
      [
        "ch после e, i, ä, ö, ü",
        "мягкое «х»",
        [
          [
            "ich",
            "я"
          ],
          [
            "das Mädchen",
            "девочка"
          ],
          [
            "die Milch",
            "молоко"
          ]
        ]
      ],
      [
        "ch после a, o, u",
        "твёрдое «х»",
        [
          [
            "acht",
            "восемь"
          ],
          [
            "das Buch",
            "книга"
          ],
          [
            "die Nacht",
            "ночь"
          ]
        ]
      ],
      [
        "ä",
        "«э»",
        [
          [
            "der Käse",
            "сыр"
          ],
          [
            "spät",
            "поздно"
          ],
          [
            "die Väter",
            "отцы"
          ]
        ]
      ],
      [
        "ö",
        "«ё» без «й»",
        [
          [
            "zwölf",
            "двенадцать"
          ],
          [
            "möchte",
            "хотел бы"
          ],
          [
            "der Löffel",
            "ложка"
          ]
        ]
      ],
      [
        "ü",
        "«ю» без «й»",
        [
          [
            "über",
            "над"
          ],
          [
            "die Küche",
            "кухня"
          ],
          [
            "fünf",
            "пять"
          ]
        ]
      ],
      [
        "ß",
        "«сс»",
        [
          [
            "die Straße",
            "улица"
          ],
          [
            "heißen",
            "называться"
          ],
          [
            "groß",
            "большой"
          ]
        ]
      ],
      [
        "-er на конце",
        "почти «а»",
        [
          [
            "der Vater",
            "отец"
          ],
          [
            "die Mutter",
            "мать"
          ],
          [
            "der Bruder",
            "брат"
          ]
        ]
      ],
      [
        "b, d, g на конце",
        "как «п, т, к»",
        [
          [
            "der Tag",
            "день"
          ],
          [
            "der Hund",
            "собака"
          ],
          [
            "das Kind",
            "ребёнок"
          ]
        ]
      ]
    ]
  },
  {
    "t": "Знакомство и приветствие",
    "lvl": "A1.1",
    "desc": "Глагол sein, фразы приветствия, обращение на ты (du) и на Вы (Sie).",
    "g": "<p><b>sein</b> (быть): ich <b>bin</b>, du <b>bist</b>, er/sie/es <b>ist</b>, wir <b>sind</b>, ihr <b>seid</b>, sie/Sie <b>sind</b>.</p><p>Имя: <b>Ich heiße Daniel.</b> или <b>Ich bin Daniel.</b> Вежливое «Вы» — <b>Sie</b> (всегда с большой буквы).</p>",
    "e": "<p><b>Порядок слов:</b> глагол всегда на втором месте. Ich <b>heiße</b> Daniel. Ich <b>komme</b> aus Kirgisistan.</p><p><b>Вопрос «да/нет»:</b> глагол на первом месте: <b>Bist</b> du Student? — Ja, ich bin Student.</p><p><b>Откуда:</b> Woher kommst du? — Ich komme <b>aus</b> Bischkek.</p>",
    "w": [
      [
        "Hallo",
        "ха́ло",
        "привет"
      ],
      [
        "Guten Morgen",
        "гу́тен мо́ргэн",
        "доброе утро"
      ],
      [
        "Guten Abend",
        "гу́тен а́бэнт",
        "добрый вечер"
      ],
      [
        "Auf Wiedersehen",
        "ауф ви́дерзэен",
        "до свидания"
      ],
      [
        "Tschüss",
        "чюс",
        "пока"
      ],
      [
        "Danke",
        "да́нкэ",
        "спасибо"
      ],
      [
        "Bitte",
        "би́ттэ",
        "пожалуйста"
      ],
      [
        "Entschuldigung",
        "энтшу́льдигунг",
        "извините"
      ],
      [
        "Wie geht’s?",
        "ви гейтс",
        "как дела?"
      ],
      [
        "Ich heiße",
        "их ха́йсэ",
        "меня зовут"
      ],
      [
        "ja",
        "я",
        "да"
      ],
      [
        "nein",
        "найн",
        "нет"
      ]
    ],
    "d": [
      [
        "Hallo! Ich heiße Anna.",
        "ха́ло! их ха́йсэ а́нна",
        "Привет! Меня зовут Анна."
      ],
      [
        "Hallo Anna, ich bin Daniel. Wie geht’s?",
        "ха́ло а́нна, их бин да́ниэль. ви гейтс",
        "Привет, Анна, я Даниэль. Как дела?"
      ],
      [
        "Gut, danke! Und dir?",
        "гут, да́нкэ! унд дир",
        "Хорошо, спасибо! А у тебя?"
      ]
    ],
    "f": [
      [
        "Ich ___ Daniel.",
        "bin",
        [
          "bin",
          "bist",
          "ist"
        ]
      ],
      [
        "Du ___ Student.",
        "bist",
        [
          "bin",
          "bist",
          "ist"
        ]
      ],
      [
        "Er ___ Lehrer.",
        "ist",
        [
          "bin",
          "sind",
          "ist"
        ]
      ],
      [
        "Wir ___ aus Bischkek.",
        "sind",
        [
          "bin",
          "seid",
          "sind"
        ]
      ]
    ],
    "sb": [
      [
        "Hallo, wie geht es dir?",
        "Привет, как у тебя дела?",
        "Приветствие + вопрос"
      ],
      [
        "Ich komme aus Kirgisistan.",
        "Я из Кыргызстана.",
        "Глагол komme на 2-м месте"
      ]
    ],
    "r": [
      "Ich komme aus Kirgisistan. Ich bin Student.",
      "их ко́ммэ аус кирги́зиен. их бин штуде́нт",
      "Я из Киргизии. Я студент."
    ],
    "wr": "<ul><li>Имена и города с большой буквы: Daniel, Bischkek</li><li>Вежливое «Вы» (Sie) всегда с большой буквы</li><li>После обращения с запятой (Hallo Anna, wie geht’s?) следующее слово пишется с маленькой</li></ul>"
  },
  {
    "t": "Семья и люди",
    "lvl": "A1.1",
    "desc": "Род существительных der/die/das, множественное число и глагол haben.",
    "g": "<p>Три рода: <b>der</b> (мужской — синий), <b>die</b> (женский — красный), <b>das</b> (средний — зелёный). Множественное число: всегда <b>die</b>.</p><p>Мой: <b>mein</b> (der/das), <b>meine</b> (die / мн. ч.). Пример: <b>Das ist mein Vater.</b> / <b>Das ist meine Mutter.</b></p>",
    "e": "<p><b>Множественное число.</b> Артикль всегда <b>die</b>, а окончание разное:</p><ul><li>-e: der Tisch → die Tische</li><li>-er (+умлаут): das Kind → die Kinder, der Mann → die Männer</li><li>-(e)n: die Frau → die Frauen, die Schwester → die Schwestern</li><li>только умлаут: der Bruder → die Brüder, der Vater → die Väter</li><li>-s: das Auto → die Autos</li></ul><p><b>haben</b> (иметь): ich habe, du hast, er/sie hat, wir haben, ihr habt, sie haben.</p>",
    "w": [
      [
        "der Vater",
        "фа́тер",
        "отец"
      ],
      [
        "die Mutter",
        "му́ттер",
        "мать"
      ],
      [
        "der Bruder",
        "бру́дер",
        "брат"
      ],
      [
        "die Schwester",
        "шве́стер",
        "сестра"
      ],
      [
        "das Kind",
        "кинд",
        "ребёнок"
      ],
      [
        "der Freund",
        "фройнд",
        "друг"
      ],
      [
        "die Frau",
        "фрау",
        "женщина, жена"
      ],
      [
        "der Mann",
        "ман",
        "мужчина, муж"
      ],
      [
        "die Familie",
        "фами́лиэ",
        "семья"
      ],
      [
        "der Hund",
        "хунд",
        "собака"
      ]
    ],
    "d": [
      [
        "Das ist meine Familie.",
        "дас ист ма́йнэ фами́лиэ",
        "Это моя семья."
      ],
      [
        "Das ist mein Bruder Max.",
        "дас ист майн бру́дер макс",
        "Это мой брат Макс."
      ],
      [
        "Er hat einen Hund.",
        "эр хат а́йнен хунд",
        "У него есть собака."
      ]
    ],
    "f": [
      [
        "Das ist ___ Vater.",
        "mein",
        [
          "mein",
          "meine",
          "meinen"
        ]
      ],
      [
        "Das ist ___ Schwester.",
        "meine",
        [
          "mein",
          "meine",
          "meiner"
        ]
      ],
      [
        "Das ist ___ Kind.",
        "mein",
        [
          "mein",
          "meine",
          "meiner"
        ]
      ],
      [
        "Du ___ zwei Brüder.",
        "hast",
        [
          "habe",
          "hast",
          "hat"
        ]
      ]
    ],
    "sb": [
      [
        "Das ist meine Mutter.",
        "Это моя мама.",
        "Женский род -> meine"
      ],
      [
        "Ich habe eine Schwester.",
        "У меня есть сестра.",
        "haben + Akkusativ"
      ]
    ],
    "r": [
      "Meine Familie ist groß. Ich habe zwei Brüder und eine Schwester.",
      "ма́йнэ фами́лиэ ист грос. их ха́бэ цвай брю́дер унт а́йнэ шве́стер",
      "Моя семья большая. У меня два брата и сестра."
    ],
    "wr": "<ul><li>Во множественном числе часто появляется умлаут: Brüder, Väter, Mütter</li><li>Запоминай существительные сразу с цветным артиклем!</li></ul>"
  },
  {
    "t": "Еда, напитки и Akkusativ",
    "lvl": "A1.1",
    "desc": "Заказ в кафе, глаголы essen/trinken и первый шаг в винительный падеж.",
    "g": "<p>Заказ: <b>Ich möchte …</b> (я хотел бы). После <b>möchte, essen, trinken, haben, kaufen</b> существительное стоит в <b>Akkusativ</b> — меняется только мужской род:</p><p><b>der → den</b>, <b>ein → einen</b> (der Apfel → Ich möchte <b>einen</b> Apfel). Женский и средний род не меняются: <b>eine Suppe</b>, <b>ein Brot</b>.</p>",
    "e": "<p><b>Отрицание с kein:</b> <b>kein/keine/keinen</b> вместо ein/eine/einen: Ich habe <b>keinen</b> Hund (der Hund). Ich esse <b>kein</b> Fleisch (das Fleisch).</p><p><b>Глагол essen (есть):</b> ich esse, du <b>isst</b>, er/sie <b>isst</b> (корневая e → i).</p>",
    "w": [
      [
        "das Wasser",
        "ва́ссер",
        "вода"
      ],
      [
        "das Brot",
        "брот",
        "хлеб"
      ],
      [
        "der Apfel",
        "а́пфель",
        "яблоко"
      ],
      [
        "die Milch",
        "мильх",
        "молоко"
      ],
      [
        "der Kaffee",
        "ка́фе",
        "кофе"
      ],
      [
        "der Tee",
        "те",
        "чай"
      ],
      [
        "die Suppe",
        "зу́ппэ",
        "суп"
      ],
      [
        "der Käse",
        "кэ́зэ",
        "сыр"
      ],
      [
        "das Fleisch",
        "флайш",
        "мясо"
      ],
      [
        "der Fisch",
        "фиш",
        "рыба"
      ],
      [
        "essen",
        "э́ссен",
        "есть"
      ],
      [
        "trinken",
        "три́нкен",
        "пить"
      ]
    ],
    "d": [
      [
        "Ich möchte einen Kaffee, bitte.",
        "их мёхтэ а́йнен ка́фе, би́ттэ",
        "Я хотел бы кофе, пожалуйста."
      ],
      [
        "Und ich möchte eine Suppe.",
        "унт их мёхтэ а́йнэ зу́ппэ",
        "А я хотел бы суп."
      ],
      [
        "Zahlen, bitte! Zusammen oder getrennt?",
        "ца́лен, би́ттэ! цуза́ммен о́дэр гетрэ́нт",
        "Счёт, пожалуйста! Вместе или раздельно?"
      ]
    ],
    "f": [
      [
        "Ich möchte ___ Apfel.",
        "einen",
        [
          "ein",
          "eine",
          "einen"
        ]
      ],
      [
        "Ich möchte ___ Suppe.",
        "eine",
        [
          "ein",
          "eine",
          "einen"
        ]
      ],
      [
        "Ich ___ Wasser.",
        "trinke",
        [
          "trinke",
          "esse",
          "bin"
        ]
      ],
      [
        "Du ___ gern Käse.",
        "isst",
        [
          "esse",
          "isst",
          "essen"
        ]
      ]
    ],
    "sb": [
      [
        "Ich möchte einen Kaffee, bitte.",
        "Я хотел бы кофе, пожалуйста.",
        "der Kaffee -> einen Kaffee"
      ],
      [
        "Zum Frühstück trinke ich Tee.",
        "На завтрак я пью чай.",
        "Глагол на 2-м месте"
      ]
    ],
    "r": [
      "Zum Frühstück esse ich Brot und trinke Tee.",
      "цум фрю́штюк э́ссэ их брот унт три́нкэ те",
      "На завтрак я ем хлеб и пью чай."
    ],
    "wr": "<ul><li>Перед <b>bitte</b> в конце просьбы обычно ставится запятая: Einen Tee, bitte.</li></ul>"
  },
  {
    "t": "Числа, время и дни недели",
    "lvl": "A1.1",
    "desc": "Счёт от 0 до 1000, как назвать время и дни недели.",
    "g": "<p>Числа 1–12 нужно знать наизусть. <b>Дни недели</b> все мужского рода: <b>der Montag</b>. «В понедельник» — <b>am Montag</b>.</p><p><b>Время:</b> Wie spät ist es? — Es ist acht Uhr. (8:00) / Es ist halb neun. (8:30 — «половина девятого»).</p>",
    "e": "<p><b>Числа 13–19:</b> число + zehn (dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn).</p><p><b>21–99 читаются задом наперёд:</b> единицы + <b>und</b> + десятки: 21 = <b>einundzwanzig</b>, 35 = <b>fünfunddreißig</b>.</p><p>Дни недели: Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag.</p>",
    "w": [
      [
        "eins",
        "айнс",
        "один"
      ],
      [
        "zwei",
        "цвай",
        "два"
      ],
      [
        "drei",
        "драй",
        "три"
      ],
      [
        "vier",
        "фир",
        "четыре"
      ],
      [
        "fünf",
        "фюнф",
        "пять"
      ],
      [
        "sechs",
        "зекс",
        "шесть"
      ],
      [
        "sieben",
        "зи́бен",
        "семь"
      ],
      [
        "acht",
        "ахт",
        "восемь"
      ],
      [
        "neun",
        "нойн",
        "девять"
      ],
      [
        "zehn",
        "цен",
        "десять"
      ],
      [
        "der Montag",
        "мо́нтаг",
        "понедельник"
      ],
      [
        "der Dienstag",
        "ди́нстаг",
        "вторник"
      ]
    ],
    "d": [
      [
        "Wie viel ist drei plus vier?",
        "ви филь ист драй плюс фир",
        "Сколько будет три плюс четыре?"
      ],
      [
        "Das ist sieben.",
        "дас ист зи́бен",
        "Это семь."
      ],
      [
        "Um wie viel Uhr beginnt der Kurs?",
        "ум ви филь ур беги́нт дер курс",
        "Во сколько начинается курс?"
      ]
    ],
    "f": [
      [
        "drei + vier = ___",
        "sieben",
        [
          "sechs",
          "sieben",
          "acht"
        ]
      ],
      [
        "zwei + acht = ___",
        "zehn",
        [
          "neun",
          "zehn",
          "sechs"
        ]
      ],
      [
        "25 по-немецки это…",
        "fünfundzwanzig",
        [
          "zwanzigfünf",
          "fünfundzwanzig",
          "fünfzwanzig"
        ]
      ],
      [
        "___ Montag habe ich frei.",
        "Am",
        [
          "Am",
          "In",
          "Zu"
        ]
      ]
    ],
    "sb": [
      [
        "Heute ist Montag.",
        "Сегодня понедельник.",
        "Простое предложение"
      ],
      [
        "Der Kurs beginnt um neun Uhr.",
        "Курс начинается в девять часов.",
        "Со временем предлог um"
      ]
    ],
    "r": [
      "Heute ist Montag. Ich lerne zehn Wörter.",
      "хо́йтэ ист мо́нтаг. их ле́рнэ цен вёртер",
      "Сегодня понедельник. Я учу десять слов."
    ],
    "wr": "<ul><li>Составные числа до миллиона пишутся слитно: einundzwanzig</li><li>Дни недели и названия месяцев всегда с большой буквы</li></ul>"
  },
  {
    "t": "Дом, квартира и город",
    "lvl": "A1.1",
    "desc": "Спряжение правильных глаголов, комнаты, мебель и предлоги in / aus.",
    "g": "<p><b>wohnen</b> (жить): ich wohn<b>e</b>, du wohn<b>st</b>, er/sie wohn<b>t</b>, wir wohn<b>en</b>, ihr wohn<b>t</b>, sie wohn<b>en</b>.</p><p>Вопрос «где?» — <b>Wo?</b> Ответ: <b>in</b> + город (Ich wohne in Bischkek). Вопрос «что это?» — <b>Was ist das?</b> — <b>Das ist ein Haus.</b></p>",
    "e": "<p><b>Окончания правильных глаголов в настоящем времени:</b></p><ul><li>ich → <b>-e</b>, du → <b>-st</b>, er/sie/es → <b>-t</b>, wir → <b>-en</b>, ihr → <b>-t</b>, sie/Sie → <b>-en</b>.</li><li>Если основа на -t или -d (arbeiten, finden), вставляется «e»: du arbeit<b>e</b>st, er arbeit<b>e</b>t.</li></ul>",
    "w": [
      [
        "das Haus",
        "хаус",
        "дом"
      ],
      [
        "die Wohnung",
        "во́нунг",
        "квартира"
      ],
      [
        "die Stadt",
        "штат",
        "город"
      ],
      [
        "die Straße",
        "штра́сэ",
        "улица"
      ],
      [
        "das Zimmer",
        "ци́ммер",
        "комната"
      ],
      [
        "die Küche",
        "кю́хэ",
        "кухня"
      ],
      [
        "der Tisch",
        "тиш",
        "стол"
      ],
      [
        "das Bett",
        "бетт",
        "кровать"
      ],
      [
        "die Schule",
        "шу́лэ",
        "школа"
      ],
      [
        "das Auto",
        "а́уто",
        "машина"
      ],
      [
        "wohnen",
        "во́нен",
        "жить"
      ]
    ],
    "d": [
      [
        "Wo wohnst du?",
        "во вонст ду",
        "Где ты живёшь?"
      ],
      [
        "Ich wohne in Bischkek. Und du?",
        "их во́нэ ин бишке́к. унт ду",
        "Я живу в Бишкеке. А ты?"
      ],
      [
        "Ich wohne in Berlin. Meine Wohnung hat drei Zimmer.",
        "их во́нэ ин берли́н. ма́йнэ во́нунг хат драй ци́ммер",
        "Я живу в Берлине. В моей квартире три комнаты."
      ]
    ],
    "f": [
      [
        "Ich ___ in Bischkek.",
        "wohne",
        [
          "wohne",
          "wohnst",
          "wohnt"
        ]
      ],
      [
        "Du ___ in Berlin.",
        "wohnst",
        [
          "wohne",
          "wohnst",
          "wohnen"
        ]
      ],
      [
        "Das ist ___ Küche.",
        "die",
        [
          "der",
          "die",
          "das"
        ]
      ],
      [
        "Er ___ sehr viel.",
        "arbeitet",
        [
          "arbeite",
          "arbeitst",
          "arbeitet"
        ]
      ]
    ],
    "sb": [
      [
        "Meine Wohnung hat drei Zimmer.",
        "В моей квартире три комнаты.",
        "Порядок слов V2"
      ],
      [
        "Wo wohnst du jetzt?",
        "Где ты сейчас живёшь?",
        "W-вопрос"
      ]
    ],
    "r": [
      "Ich wohne in Bischkek. Meine Wohnung hat drei Zimmer.",
      "их во́нэ ин бишке́к. ма́йнэ во́нунг хат драй ци́ммер",
      "Я живу в Бишкеке. В моей квартире три комнаты."
    ],
    "wr": "<ul><li><b>ß</b> пишется после долгой гласной (Straße), <b>ss</b> — после краткой (Wasser)</li></ul>"
  },
  {
    "t": "Вопросы и порядок слов",
    "lvl": "A1.1",
    "desc": "Вопросительные слова (W-Fragen), отрицание nicht/kein и союзы und/aber.",
    "g": "<p><b>W-вопросы</b> начинаются с вопросительного слова, затем обязательно идёт <b>глагол</b>: <b>Wo</b> wohnst du? <b>Was</b> machst du? <b>Wer</b> ist das?</p>",
    "e": "<p><b>Союзы нулевой позиции:</b> <b>und</b> (и), <b>aber</b> (но), <b>oder</b> (или), <b>denn</b> (так как) не меняют порядок слов: Ich lerne Deutsch, <b>aber</b> es ist schwer.</p><p><b>Отрицание:</b> <b>kein</b> стоит перед существительным (Ich habe kein Auto). <b>nicht</b> отрицает глагол или прилагательное (Das ist nicht gut).</p>",
    "w": [
      [
        "wer",
        "вэр",
        "кто"
      ],
      [
        "was",
        "вас",
        "что"
      ],
      [
        "wo",
        "во",
        "где"
      ],
      [
        "wie",
        "ви",
        "как"
      ],
      [
        "woher",
        "вохе́р",
        "откуда"
      ],
      [
        "warum",
        "вару́м",
        "почему"
      ],
      [
        "nicht",
        "нихт",
        "не"
      ],
      [
        "kein",
        "кайн",
        "ни один, нет (перед сущ.)"
      ],
      [
        "und",
        "унд",
        "и"
      ],
      [
        "aber",
        "а́бер",
        "но"
      ],
      [
        "auch",
        "аух",
        "тоже"
      ],
      [
        "sehr",
        "зер",
        "очень"
      ]
    ],
    "d": [
      [
        "Woher kommst du?",
        "вохе́р комст ду",
        "Откуда ты?"
      ],
      [
        "Ich komme aus Kirgisistan. Und du?",
        "их ко́ммэ аус кирги́зиен. унт ду",
        "Я из Киргизии. А ты?"
      ]
    ],
    "f": [
      [
        "___ wohnst du? (где)",
        "Wo",
        [
          "Wo",
          "Wer",
          "Was"
        ]
      ],
      [
        "Ich habe ___ Auto. (нет машины)",
        "kein",
        [
          "kein",
          "keine",
          "nicht"
        ]
      ],
      [
        "Das ist ___ gut. (не хорошо)",
        "nicht",
        [
          "nicht",
          "kein",
          "keine"
        ]
      ],
      [
        "___ lernst du Deutsch? (почему)",
        "Warum",
        [
          "Warum",
          "Woher",
          "Wer"
        ]
      ]
    ],
    "sb": [
      [
        "Ich habe heute keine Zeit.",
        "У меня сегодня нет времени.",
        "die Zeit -> keine Zeit"
      ],
      [
        "Warum lernst du jeden Tag?",
        "Почему ты учишься каждый день?",
        "W-слово + глагол"
      ]
    ],
    "r": [
      "Wer bist du? Woher kommst du?",
      "вэр бист ду? вохе́р комст ду",
      "Кто ты? Откуда ты?"
    ],
    "wr": "<ul><li>Запятая всегда ставится перед <b>aber, denn, weil, dass</b>, но обычно не ставится перед <b>und / oder</b>.</li></ul>"
  },
  {
    "t": "Письмо: личные и деловые письма",
    "lvl": "A1.2",
    "desc": "Как правильно начать и закончить письмо другу или официальное письмо.",
    "g": "<p><b>Письмо другу:</b><br>Liebe Anna,<br>wie geht’s dir? …<br>Viele Grüße<br>Daniel</p><p><b>Официальное письмо:</b><br>Sehr geehrte Frau Müller,<br>…<br>Mit freundlichen Grüßen<br>Max Beispiel</p>",
    "e": "<ul><li><b>Liebe</b> — женщине, <b>Lieber</b> — мужчине. После запятой новая строка пишется <b>с маленькой буквы</b>!</li><li><b>Sehr geehrte Frau / Sehr geehrter Herr</b> — официальное обращение.</li><li>du, dein, dir — другу; <b>Sie, Ihr, Ihnen</b> — официально (всегда с большой буквы).</li></ul>",
    "w": [
      [
        "schreiben",
        "шра́йбен",
        "писать"
      ],
      [
        "der Brief",
        "бриф",
        "письмо"
      ],
      [
        "die E-Mail",
        "и́-мэйл",
        "электронное письмо"
      ],
      [
        "Liebe",
        "ли́бэ",
        "дорогая (обращение)"
      ],
      [
        "Lieber",
        "ли́бер",
        "дорогой (обращение)"
      ],
      [
        "Viele Grüße",
        "фи́лэ грю́сэ",
        "с приветом (другу)"
      ],
      [
        "Mit freundlichen Grüßen",
        "мит фро́йндлихен грю́сэн",
        "с уважением"
      ],
      [
        "Sehr geehrte",
        "зэр гээ́ртэ",
        "уважаемая"
      ],
      [
        "die Adresse",
        "адрэ́ссэ",
        "адрес"
      ],
      [
        "das Datum",
        "да́тум",
        "дата"
      ]
    ],
    "d": [],
    "f": [
      [
        "___ Anna, wie geht’s dir?",
        "Liebe",
        [
          "Liebe",
          "Lieber",
          "Sehr"
        ]
      ],
      [
        "Sehr ___ Frau Müller,",
        "geehrte",
        [
          "geehrte",
          "liebe",
          "viele"
        ]
      ],
      [
        "Письмо другу заканчивают: Viele ___",
        "Grüße",
        [
          "Grüße",
          "Brief",
          "Datum"
        ]
      ],
      [
        "После запятой в обращении строка начинается с…",
        "маленькой буквы",
        [
          "маленькой буквы",
          "большой буквы",
          "восклицательного знака"
        ]
      ]
    ],
    "sb": [
      [
        "Liebe Anna, wie geht es dir?",
        "Дорогая Анна, как твои дела?",
        "Неформальное письмо"
      ],
      [
        "Ich schreibe dir eine E-Mail.",
        "Я пишу тебе письмо.",
        "Dativ: dir"
      ]
    ],
    "r": [
      "Liebe Anna, wie geht’s dir? Viele Grüße, Daniel",
      "ли́бэ а́нна, ви гейтс дир? фи́лэ грю́сэ, да́ниэль",
      "Дорогая Анна, как дела? С приветом, Даниэль"
    ],
    "wr": "<p>Попробуй написать короткое письмо из 4–5 предложений: кто ты, откуда, где живёшь и что делаешь каждый день. Используй глагол на 2-м месте!</p>"
  },
  {
    "t": "Модальные глаголы (können, müssen, wollen)",
    "lvl": "A1.2",
    "desc": "Рамочная конструкция (Satzklammer) и главные модальные глаголы.",
    "g": "<p>Модальный глагол стоит <b>на 2-м месте</b> (спрягается), а основной глагол в неопределённой форме уходит <b>в самый конец предложения</b>!</p><p>Пример: Ich <b>kann</b> gut Deutsch <b>sprechen</b>. Wir <b>müssen</b> viel <b>üben</b>.</p>",
    "e": "<p><b>Формы ich и er/sie/es у модальных глаголов одинаковы (без окончания -e/-t):</b></p><ul><li><b>können</b> (мочь, уметь): ich kann, du kannst, er kann, wir können</li><li><b>müssen</b> (быть должным): ich muss, du musst, er muss, wir müssen</li><li><b>wollen</b> (хотеть): ich will, du willst, er will, wir wollen</li><li><b>dürfen</b> (иметь разрешение): ich darf, du darfst, er darf, wir dürfen</li><li><b>sollen</b> (следует): ich soll, du sollst, er soll, wir sollen</li></ul>",
    "w": [
      [
        "können",
        "кё́ннэн",
        "мочь, уметь"
      ],
      [
        "müssen",
        "мю́ссэн",
        "быть должным"
      ],
      [
        "wollen",
        "во́ллен",
        "хотеть"
      ],
      [
        "dürfen",
        "дю́рфен",
        "иметь разрешение, мочь"
      ],
      [
        "sollen",
        "зо́ллен",
        "долженствовать (по совету)"
      ],
      [
        "mögen",
        "мё́ген",
        "любить, нравиться"
      ],
      [
        "üben",
        "ю́бен",
        "тренироваться"
      ],
      [
        "verstehen",
        "ферштэ́эн",
        "понимать"
      ],
      [
        "helfen",
        "хе́льфен",
        "помогать"
      ],
      [
        "schaffen",
        "ша́ффен",
        "справляться"
      ]
    ],
    "d": [
      [
        "Kannst du mir bitte helfen?",
        "каннст ду мир би́ттэ хе́льфен",
        "Ты можешь мне помочь?"
      ],
      [
        "Gern, aber ich muss um fünf gehen.",
        "герн, а́бер их мусс ум фюнф ге́эн",
        "С радостью, но мне нужно уйти в пять."
      ],
      [
        "Kein Problem, wir schaffen das schnell.",
        "кайн пробле́м, вир ша́ффен дас шнэлль",
        "Нет проблем, мы справимся быстро."
      ]
    ],
    "f": [
      [
        "Ich ___ heute viel lernen.",
        "muss",
        [
          "muss",
          "musst",
          "müssen"
        ]
      ],
      [
        "___ man hier parken?",
        "Darf",
        [
          "Darf",
          "Darfst",
          "Dürfen"
        ]
      ],
      [
        "Wir wollen Deutsch ___.",
        "lernen",
        [
          "lernen",
          "lerne",
          "lernt"
        ]
      ],
      [
        "Er ___ sehr gut Gitarre spielen.",
        "kann",
        [
          "kann",
          "kannst",
          "könnt"
        ]
      ]
    ],
    "sb": [
      [
        "Ich kann schon gut Deutsch sprechen.",
        "Я уже умею хорошо говорить по-немецки.",
        "können на 2-м месте, sprechen в конце"
      ],
      [
        "Wir müssen jeden Tag üben.",
        "Мы должны заниматься каждый день.",
        "müssen + инфинитив в конце"
      ]
    ],
    "r": [
      "Ich will jeden Tag zwei Stunden Deutsch lernen.",
      "их виль е́дэн таг цвай шту́ндэн дойч ле́рнэн",
      "Я хочу каждый день два часа учить немецкий."
    ],
    "wr": "<ul><li>Вся информация (время, место, дополнения) помещается <b>внутри рамки</b> между модальным глаголом и инфинитивом в конце.</li></ul>"
  },
  {
    "t": "Распорядок дня и отделяемые глаголы",
    "lvl": "A1.2",
    "desc": "Приставки auf-, ein-, an-, fern-, mit-, которые отделяются и уходят в конец.",
    "g": "<p>У многих немецких глаголов приставка под ударением отделяется и ставится <b>в самый конец предложения</b>:</p><p><b>auf</b>stehen → Ich <b>stehe</b> um sieben Uhr <b>auf</b>.<br><b>ein</b>kaufen → Wir <b>kaufen</b> im Supermarkt <b>ein</b>.</p>",
    "e": "<p><b>Отделяемые приставки (всегда ударные):</b> <b>ab-, an-, auf-, aus-, ein-, fern-, mit-, vor-, zu-, zurück-</b>.</p><p><b>Неотделяемые (безударные):</b> <b>be-, emp-, ent-, er-, ge-, ver-, zer-</b> (verstehen → Ich verstehe alles — НЕ отделяется!).</p>",
    "w": [
      [
        "aufstehen",
        "а́уфштээн",
        "вставать"
      ],
      [
        "einkaufen",
        "а́йнкауфен",
        "делать покупки"
      ],
      [
        "anrufen",
        "а́нруфен",
        "звонить по телефону"
      ],
      [
        "anfangen",
        "а́нфанген",
        "начинать"
      ],
      [
        "aufhören",
        "а́уфхёрен",
        "прекращать"
      ],
      [
        "fernsehen",
        "фэ́рнзээн",
        "смотреть телевизор"
      ],
      [
        "aufräumen",
        "а́уфроймен",
        "убирать"
      ],
      [
        "mitkommen",
        "ми́ткоммен",
        "идти вместе"
      ],
      [
        "abfahren",
        "а́пфарэн",
        "отправляться"
      ],
      [
        "ankommen",
        "а́нкоммен",
        "прибывать"
      ]
    ],
    "d": [
      [
        "Wann stehst du morgens auf?",
        "ванн ште́ст ду мо́ргэнс ауф",
        "Во сколько ты встаёшь по утрам?"
      ],
      [
        "Ich stehe um halb sieben auf und rufe dich später an.",
        "их штэ́э ум хальб зи́бен ауф унд ру́фэ дих шпэ́тер ан",
        "Я встаю в полседьмого и позвоню тебе позже."
      ]
    ],
    "f": [
      [
        "Ich ___ dich heute Abend ___.",
        "rufe … an",
        [
          "rufe … an",
          "anrufe",
          "ruft … an"
        ]
      ],
      [
        "Der Film ___ um acht Uhr ___.",
        "fängt … an",
        [
          "fängt … an",
          "anfängt",
          "fangen … an"
        ]
      ],
      [
        "Какая приставка НЕ отделяется?",
        "ver-",
        [
          "auf-",
          "ein-",
          "ver-"
        ]
      ],
      [
        "Wir sehen abends ___.",
        "fern",
        [
          "fern",
          "auf",
          "mit"
        ]
      ]
    ],
    "sb": [
      [
        "Ich stehe um sieben Uhr auf.",
        "Я встаю в семь часов.",
        "Приставка auf уходит в конец"
      ],
      [
        "Der Zug kommt um zehn Uhr an.",
        "Поезд прибывает в десять часов.",
        "ankommen -> kommt ... an"
      ]
    ],
    "r": [
      "Morgens stehe ich früh auf und abends räume ich mein Zimmer auf.",
      "мо́ргэнс штэ́э их фрю ауф унт а́бэндс ро́ймэ их майн ци́ммер ауф",
      "Утром я рано встаю, а вечером убираю свою комнату."
    ],
    "wr": "<ul><li>Если в предложении есть модальный глагол (muss, kann), то глагол с отделяемой приставкой <b>не делится</b> и стоит целиком в конце: Ich muss früh <b>aufstehen</b>.</li></ul>"
  },
  {
    "t": "Транспорт и предлоги Dativ",
    "lvl": "A1.2",
    "desc": "Дательный падеж (Dativ) с предлогами mit, nach, aus, zu, bei, von, seit.",
    "g": "<p>После предлогов <b>aus, bei, mit, nach, seit, von, zu</b> всегда используется падеж <b>Dativ</b> (кому/чему?):</p><ul><li><b>der → dem</b> (mit dem Bus)</li><li><b>das → dem</b> (mit dem Auto)</li><li><b>die → der</b> (mit der U-Bahn)</li><li><b>Pl. → den + n</b> (mit den Freunden)</li></ul>",
    "e": "<p><b>Частые слияния артикля с предлогом:</b></p><ul><li>zu + dem = <b>zum</b> (zum Bahnhof)</li><li>zu + der = <b>zur</b> (zur Arbeit, zur Schule)</li><li>bei + dem = <b>beim</b> (beim Arzt)</li><li>von + dem = <b>vom</b> (vom Flughafen)</li></ul>",
    "w": [
      [
        "der Bahnhof",
        "ба́нхоф",
        "вокзал"
      ],
      [
        "der Flughafen",
        "флю́гхафэн",
        "аэропорт"
      ],
      [
        "die Haltestelle",
        "ха́льтештелле",
        "остановка"
      ],
      [
        "der Bus",
        "бус",
        "автобус"
      ],
      [
        "der Zug",
        "цуг",
        "поезд"
      ],
      [
        "die U-Bahn",
        "у́-бан",
        "метро"
      ],
      [
        "das Fahrrad",
        "фа́ррад",
        "велосипед"
      ],
      [
        "umsteigen",
        "у́мштайген",
        "делать пересадку"
      ],
      [
        "geradeaus",
        "гера́дэ-аус",
        "прямо"
      ],
      [
        "die Verspätung",
        "фершпэ́тунг",
        "опоздание"
      ]
    ],
    "d": [
      [
        "Entschuldigung, wie komme ich zum Bahnhof?",
        "энтшу́льдигунг, ви ко́ммэ их цум ба́нхоф",
        "Извините, как мне добраться до вокзала?"
      ],
      [
        "Fahren Sie mit der U-Bahn oder gehen Sie geradeaus.",
        "фа́рэн зи мит дер у́-бан о́дэр ге́эн зи гера́дэ-аус",
        "Поезжайте на метро или идите прямо."
      ]
    ],
    "f": [
      [
        "Ich fahre mit ___ Bus.",
        "dem",
        [
          "dem",
          "den",
          "der"
        ]
      ],
      [
        "Sie fährt mit ___ Straßenbahn.",
        "der",
        [
          "dem",
          "der",
          "die"
        ]
      ],
      [
        "Wir gehen ___ Bahnhof.",
        "zum",
        [
          "zur",
          "zum",
          "zu der"
        ]
      ],
      [
        "Ich komme ___ Deutschland.",
        "aus",
        [
          "aus",
          "bei",
          "nach"
        ]
      ]
    ],
    "sb": [
      [
        "Ich fahre mit dem Zug nach Berlin.",
        "Я еду на поезде в Берлин.",
        "mit + dem (Dativ)"
      ],
      [
        "Gehen Sie an der Ampel links.",
        "На светофоре идите налево.",
        "Указание пути"
      ]
    ],
    "r": [
      "Mit der U-Bahn bin ich in zehn Minuten am Bahnhof.",
      "мит дер у́-бан бин их ин цен мину́тэн ам ба́нхоф",
      "На метро я через десять минут на вокзале."
    ],
    "wr": "<ul><li>Запомни рифму предлогов Dativ: <b>aus, bei, mit, nach, seit, von, zu — immer mit Dativ dazu!</b></li></ul>"
  },
  {
    "t": "Покупки, одежда и указательные местоимения",
    "lvl": "A1.2",
    "desc": "Выбор товара, размеры, цены и местоимения dieser / welcher.",
    "g": "<p>Слова <b>dieser</b> (этот) и <b>welcher</b> (какой) получают окончания прямо как определённые артикли der/die/das/den:</p><ul><li><b>dieser</b> Mantel (м.), <b>diese</b> Jacke (ж.), <b>dieses</b> Hemd (ср.)</li><li>Akkusativ (м.): Ich kaufe <b>diesen</b> Mantel.</li></ul>",
    "e": "<p><b>Важные глаголы в магазине:</b></p><ul><li><b>kosten</b> (стоить): Wie viel kostet das? — Es kostet 30 Euro.</li><li><b>passen</b> (подходить по размеру + Dativ): Die Hose passt <b>mir</b> gut.</li><li><b>gefallen</b> (нравиться + Dativ): Der Pullover gefällt <b>mir</b>.</li></ul>",
    "w": [
      [
        "die Jacke",
        "я́кэ",
        "куртка"
      ],
      [
        "der Mantel",
        "ма́нтель",
        "пальто"
      ],
      [
        "die Hose",
        "хо́зэ",
        "брюки"
      ],
      [
        "das Hemd",
        "хемд",
        "рубашка"
      ],
      [
        "der Pullover",
        "пулло́вер",
        "свитер"
      ],
      [
        "das Kleid",
        "клайд",
        "платье"
      ],
      [
        "der Schuh",
        "шу",
        "ботинок, туфля"
      ],
      [
        "die Größe",
        "грё́сэ",
        "размер"
      ],
      [
        "günstig",
        "гю́нстиг",
        "выгодный, недорогой"
      ],
      [
        "teuer",
        "то́йер",
        "дорогой"
      ]
    ],
    "d": [
      [
        "Entschuldigung, haben Sie diese Jacke auch in Größe M?",
        "энтшу́льдигунг, ха́бен зи ди́зэ я́кэ аух ин грё́сэ эм",
        "Извините, у вас есть эта куртка в размере M?"
      ],
      [
        "Ja, hier bitte. Sie kostet 59 Euro.",
        "я, хир би́ттэ. зи ко́стэт нойнундфю́нфциг о́йро",
        "Да, вот пожалуйста. Она стоит 59 евро."
      ]
    ],
    "f": [
      [
        "Wie gefällt dir ___ Kleid?",
        "dieses",
        [
          "dieser",
          "diese",
          "dieses"
        ]
      ],
      [
        "Ich nehme ___ Pullover hier. (der Pullover)",
        "diesen",
        [
          "dieser",
          "diesen",
          "dieses"
        ]
      ],
      [
        "Die Schuhe passen ___ perfekt.",
        "mir",
        [
          "ich",
          "mich",
          "mir"
        ]
      ],
      [
        "___ Farbe möchten Sie?",
        "Welche",
        [
          "Welcher",
          "Welche",
          "Welches"
        ]
      ]
    ],
    "sb": [
      [
        "Diese Jacke gefällt mir sehr.",
        "Эта куртка мне очень нравится.",
        "gefallen + mir (Dativ)"
      ],
      [
        "Kann ich mit Karte bezahlen?",
        "Можно оплатить картой?",
        "Вежливый вопрос на кассе"
      ]
    ],
    "r": [
      "Dieser schwarze Mantel passt mir perfekt und ist nicht zu teuer.",
      "ди́зер шва́рцэ ма́нтель паст мир перфэ́кт унд ист нихт цу то́йер",
      "Это чёрное пальто идеально мне подходит и не слишком дорогое."
    ],
    "wr": "<ul><li>После предлога <b>in</b> для цвета или размера артикль не нужен: in Rot, in Größe 40.</li></ul>"
  },
  {
    "t": "Прошедшее время Perfekt (с haben)",
    "lvl": "A2.1",
    "desc": "Разговорное прошедшее время: haben + Partizip II в конце фразы.",
    "g": "<p>В устной речи о прошлом немцы почти всегда используют <b>Perfekt</b>:</p><p><b>haben</b> (на 2-м месте) + ... + <b>Partizip II</b> (в конце).</p><p>Правильные глаголы: <b>ge- + основа + -t</b> (machen → <b>gemacht</b>, lernen → <b>gelernt</b>).</p>",
    "e": "<p><b>Когда НЕ добавляется ge-:</b></p><ul><li>Глаголы на <b>-ieren</b>: telefonieren → <b>telefoniert</b>, studieren → <b>studiert</b>.</li><li>Глаголы с неотделяемыми приставками (be-, er-, ver-): bezahlen → <b>bezahlt</b>, verstehen → <b>verstanden</b>.</li><li>С отделяемой приставкой <b>ge-</b> встаёт внутрь: einkaufen → ein<b>ge</b>kauft.</li></ul>",
    "w": [
      [
        "gemacht",
        "гема́хт",
        "сделал (machen)"
      ],
      [
        "gelernt",
        "геле́рнт",
        "выучил (lernen)"
      ],
      [
        "gekauft",
        "гека́уфт",
        "купил (kaufen)"
      ],
      [
        "gekocht",
        "геко́хт",
        "приготовил (kochen)"
      ],
      [
        "gespielt",
        "гешпи́льт",
        "сыграл (spielen)"
      ],
      [
        "gelesen",
        "геле́зэн",
        "прочитал (lesen)"
      ],
      [
        "geschrieben",
        "гешри́бен",
        "написал (schreiben)"
      ],
      [
        "gegessen",
        "геге́ссен",
        "съел (essen)"
      ],
      [
        "getrunken",
        "гетру́нкен",
        "выпил (trinken)"
      ],
      [
        "gesehen",
        "гезэ́эн",
        "увидел (sehen)"
      ]
    ],
    "d": [
      [
        "Was hast du gestern gemacht?",
        "вас хаст ду ге́стерн гема́хт",
        "Что ты делал вчера?"
      ],
      [
        "Ich habe zwei Stunden Deutsch gelernt und dann gekocht.",
        "их ха́бэ цвай шту́ндэн дойч геле́рнт унд данн геко́хт",
        "Я два часа учил немецкий, а потом готовил."
      ]
    ],
    "f": [
      [
        "Ich ___ gestern viel gearbeitet.",
        "habe",
        [
          "habe",
          "bin",
          "hat"
        ]
      ],
      [
        "Wir haben eine Pizza ___.",
        "bestellt",
        [
          "gebestellt",
          "bestellt",
          "bestellen"
        ]
      ],
      [
        "Sie hat einen Brief ___.",
        "geschrieben",
        [
          "geschreibt",
          "geschrieben",
          "schriebt"
        ]
      ],
      [
        "Er hat im Supermarkt ___.",
        "eingekauft",
        [
          "geeinkauft",
          "eingekauft",
          "einkauft"
        ]
      ]
    ],
    "sb": [
      [
        "Ich habe gestern ein Buch gelesen.",
        "Я вчера прочитал книгу.",
        "haben на 2-м месте, gelesen в конце"
      ],
      [
        "Wir haben zusammen Kaffee getrunken.",
        "Мы вместе выпили кофе.",
        "Рамка Perfekt"
      ]
    ],
    "r": [
      "Am Samstag habe ich meine Wohnung aufgeräumt und Freunde besucht.",
      "ам за́мстаг ха́бэ их ма́йнэ во́нунг а́уфгероймт унд фро́йндэ безу́хт",
      "В субботу я убрал квартиру и навестил друзей."
    ],
    "wr": "<ul><li>У сильных (неправильных) глаголов форма Partizip II заканчивается на <b>-en</b> (gegessen, getrunken, geschlafen).</li></ul>"
  },
  {
    "t": "Прошедшее время Perfekt (с sein)",
    "lvl": "A2.1",
    "desc": "Глаголы движения и смены состояния с вспомогательным sein.",
    "g": "<p>С глаголами <b>движения из точки А в точку Б</b> и <b>смены состояния</b> в Perfekt вместо haben используется <b>sein</b>:</p><p>Ich <b>bin</b> nach Berlin <b>gefahren</b>. Er <b>ist</b> früh <b>aufgestanden</b>.</p>",
    "e": "<p><b>Главные глаголы с sein:</b></p><ul><li>gehen → ist <b>gegangen</b>, kommen → ist <b>gekommen</b></li><li>fahren → ist <b>gefahren</b>, fliegen → ist <b>geflogen</b></li><li>laufen → ist <b>gelaufen</b>, reisen → ist <b>gereist</b></li><li>aufstehen → ist <b>aufgestanden</b>, einschlafen → ist <b>eingeschlafen</b></li><li>Исключения, которые тоже с sein: <b>sein → ist gewesen</b>, <b>bleiben → ist geblieben</b>, <b>passieren → ist passiert</b>.</li></ul>",
    "w": [
      [
        "gegangen",
        "гега́нген",
        "пошёл (gehen)"
      ],
      [
        "gekommen",
        "геко́ммэн",
        "пришёл (kommen)"
      ],
      [
        "gefahren",
        "гефа́рэн",
        "поехал (fahren)"
      ],
      [
        "geflogen",
        "гефло́ген",
        "полетел (fliegen)"
      ],
      [
        "geblieben",
        "гебли́бен",
        "остался (bleiben)"
      ],
      [
        "gewesen",
        "гевэ́зэн",
        "был (sein)"
      ],
      [
        "aufgestanden",
        "а́уфгештандэн",
        "встал (aufstehen)"
      ],
      [
        "eingeschlafen",
        "а́йнгешлафен",
        "заснул (einschlafen)"
      ],
      [
        "gestiegen",
        "гешти́ген",
        "поднялся (steigen)"
      ],
      [
        "passiert",
        "пасси́рт",
        "произошло (passieren)"
      ]
    ],
    "d": [
      [
        "Wo bist du im Urlaub gewesen?",
        "во бист ду им у́рлауб гевэ́зэн",
        "Где ты был в отпуске?"
      ],
      [
        "Ich bin ans Meer geflogen und zwei Wochen dort geblieben.",
        "их бин анс мэр гефло́ген унд цвай во́хен дорт гебли́бен",
        "Я летал на море и оставался там две недели."
      ]
    ],
    "f": [
      [
        "Gestern ___ wir ins Kino gegangen.",
        "sind",
        [
          "haben",
          "sind",
          "war"
        ]
      ],
      [
        "Wann ___ der Zug angekommen?",
        "ist",
        [
          "hat",
          "ist",
          "wurde"
        ]
      ],
      [
        "Ich bin am Wochenende zu Hause ___.",
        "geblieben",
        [
          "gebleibt",
          "geblieben",
          "bleiben"
        ]
      ],
      [
        "Sie ___ nach München geflogen.",
        "ist",
        [
          "hat",
          "ist",
          "wird"
        ]
      ]
    ],
    "sb": [
      [
        "Wir sind mit dem Zug gefahren.",
        "Мы поехали на поезде.",
        "Движение -> sein"
      ],
      [
        "Ich bin heute früh aufgestanden.",
        "Я сегодня рано встал.",
        "Смена состояния -> sein"
      ]
    ],
    "r": [
      "Gestern bin ich lange spazieren gegangen und um zehn Uhr eingeschlafen.",
      "ге́стерн бин их ля́нгэ шпаци́рен гега́нген унд ум цен ур а́йнгешлафен",
      "Вчера я долго гулял и в десять часов уснул."
    ],
    "wr": "<ul><li>Запомни: даже если вы сидели и никуда не двигались (<b>bleiben</b> — оставаться, <b>sein</b> — быть), в немецком они всё равно образуют Perfekt с <b>sein</b>!</li></ul>"
  },
  {
    "t": "Здоровье, тело и визит к врачу",
    "lvl": "A2.1",
    "desc": "Как описать симптомы, дательный падеж личных местоимений и глагол sollen.",
    "g": "<p><b>Личные местоимения в Dativ (кому?):</b></p><p>ich → <b>mir</b>, du → <b>dir</b>, er/es → <b>ihm</b>, sie → <b>ihr</b>, wir → <b>uns</b>, ihr → <b>euch</b>, sie/Sie → <b>ihnen/Ihnen</b>.</p><p><b>Болит:</b> <b>Mir</b> tut der Kopf weh. / <b>Mir</b> tun die Augen weh.</p>",
    "e": "<p><b>Рекомендации врача (глагол sollen):</b></p><ul><li>Der Arzt sagt, ich <b>soll</b> im Bett bleiben.</li><li>Sie <b>sollen</b> viel Tee trinken und diese Tabletten nehmen.</li></ul><p>Предлог места для врача: Ich gehe <b>zum</b> Arzt. Ich bin <b>beim</b> Arzt.</p>",
    "w": [
      [
        "der Kopf",
        "копф",
        "голова"
      ],
      [
        "der Hals",
        "хальс",
        "горло, шея"
      ],
      [
        "der Rücken",
        "рю́кен",
        "спина"
      ],
      [
        "der Bauch",
        "баух",
        "живот"
      ],
      [
        "das Fieber",
        "фи́бер",
        "температура"
      ],
      [
        "der Schmerz",
        "шмерц",
        "боль"
      ],
      [
        "die Erkältung",
        "эркэ́льтунг",
        "простуда"
      ],
      [
        "die Apotheke",
        "апоте́кэ",
        "аптека"
      ],
      [
        "das Medikament",
        "медикамэ́нт",
        "лекарство"
      ],
      [
        "wehtun",
        "ве́тун",
        "болеть"
      ]
    ],
    "d": [
      [
        "Guten Tag, was fehlt Ihnen?",
        "гу́тен таг, вас фэльт и́нен",
        "Добрый день, что Вас беспокоит?"
      ],
      [
        "Mir tut der Hals weh und ich habe Fieber.",
        "мир тут дер хальс ве унд их ха́бэ фи́бер",
        "У меня болит горло и температура."
      ],
      [
        "Sie haben eine Erkältung und sollen drei Tage zu Hause bleiben.",
        "зи ха́бен а́йнэ эркэ́льтунг унд зо́ллен драй та́гэ цу ха́узэ бля́йбен",
        "У Вас простуда, и Вам следует три дня оставаться дома."
      ]
    ],
    "f": [
      [
        "___ tut der Zahn weh. (у меня)",
        "Mir",
        [
          "Ich",
          "Mich",
          "Mir"
        ]
      ],
      [
        "Die Augen ___ mir weh.",
        "tun",
        [
          "tut",
          "tun",
          "ist"
        ]
      ],
      [
        "Der Arzt sagt, du ___ viel schlafen.",
        "sollst",
        [
          "soll",
          "sollst",
          "darfst"
        ]
      ],
      [
        "Ich hole das Rezept in der ___.",
        "Apotheke",
        [
          "Apotheke",
          "Schule",
          "Kasse"
        ]
      ]
    ],
    "sb": [
      [
        "Mir tut der Kopf weh.",
        "У меня болит голова.",
        "Dativ mir + tut ... weh"
      ],
      [
        "Sie sollen viel Wasser trinken.",
        "Вам следует пить много воды.",
        "Совет через sollen"
      ]
    ],
    "r": [
      "Gute Besserung! Trinken Sie heißen Tee mit Honig.",
      "гу́тэ бэ́ссэрунг! три́нкен зи ха́йссэн те мит хо́ниг",
      "Выздоравливайте! Пейте горячий чай с мёдом."
    ],
    "wr": "<ul><li>Слова с <b>-schmerzen</b> всегда женского/множественного числа: Kopfschmerzen, Halsschmerzen (Ich habe Kopfschmerzen — без артикля).</li></ul>"
  },
  {
    "t": "Профессия, работа и Präteritum (war / hatte)",
    "lvl": "A2.1",
    "desc": "Прошедшее время Präteritum для sein, haben и модальных глаголов.",
    "g": "<p>У глаголов <b>sein, haben</b> и <b>модальных</b> в прошлом почти всегда используется короткая форма <b>Präteritum</b> вместо длинного Perfekt:</p><ul><li><b>sein</b>: ich <b>war</b>, du warst, er war, wir waren</li><li><b>haben</b>: ich <b>hatte</b>, du hattest, er hatte, wir hatten</li><li><b>können / müssen / wollen</b>: ich <b>konnte / musste / wollte</b></li></ul>",
    "e": "<p><b>Как сказать о профессии:</b> Перед профессией после <b>sein</b> и <b>arbeiten als</b> артикль НЕ ставится!</p><p>Ich bin <b>Programmierer</b>. Sie arbeitet als <b>Ärztin</b>.</p>",
    "w": [
      [
        "der Beruf",
        "беру́ф",
        "профессия"
      ],
      [
        "das Büro",
        "бюро́",
        "офис"
      ],
      [
        "der Kollege",
        "колле́гэ",
        "коллега"
      ],
      [
        "die Besprechung",
        "бешпрэ́хунг",
        "совещание"
      ],
      [
        "die Bewerbung",
        "бэвэ́рбунг",
        "резюме, заявка"
      ],
      [
        "das Gehalt",
        "геха́льт",
        "зарплата"
      ],
      [
        "die Erfahrung",
        "эрфа́рунг",
        "опыт"
      ],
      [
        "war",
        "вар",
        "был (Präteritum от sein)"
      ],
      [
        "hatte",
        "ха́ттэ",
        "имел (Präteritum от haben)"
      ],
      [
        "musste",
        "му́стэ",
        "должен был (Präteritum)"
      ]
    ],
    "d": [
      [
        "Wie war dein Arbeitstag heute?",
        "ви вар дайн а́рбайтстаг хо́йтэ",
        "Как прошёл твой рабочий день сегодня?"
      ],
      [
        "Sehr stressig! Ich hatte drei Besprechungen und musste lange bleiben.",
        "зэр штрэ́ссиг! их ха́ттэ драй бешпрэ́хунген унд му́стэ ля́нгэ бля́йбен",
        "Очень напряжённо! У меня было три совещания, и пришлось долго оставаться."
      ]
    ],
    "f": [
      [
        "Gestern ___ ich den ganzen Tag im Büro.",
        "war",
        [
          "bin",
          "war",
          "hatte"
        ]
      ],
      [
        "Früher ___ wir wenig Zeit.",
        "hatten",
        [
          "waren",
          "hatten",
          "mussten"
        ]
      ],
      [
        "Er arbeitet als ___.",
        "Ingenieur",
        [
          "ein Ingenieur",
          "Ingenieur",
          "der Ingenieur"
        ]
      ],
      [
        "Ich ___ leider nicht kommen.",
        "konnte",
        [
          "konnte",
          "kann",
          "gekönnt"
        ]
      ]
    ],
    "sb": [
      [
        "Gestern hatte ich keine Zeit.",
        "Вчера у меня не было времени.",
        "Präteritum hatte"
      ],
      [
        "Sie arbeitet als Ärztin im Krankenhaus.",
        "Она работает врачом в больнице.",
        "Без артикля после als"
      ]
    ],
    "r": [
      "Letztes Jahr war ich Student, jetzt arbeite ich in einer IT-Firma.",
      "ле́тцтэс яр вар их штудэ́нт, етцт а́рбайтэ их ин а́йнер и-тэ́-фи́рма",
      "В прошлом году я был студентом, сейчас я работаю в IT-компании."
    ],
    "wr": "<ul><li>У модальных глаголов в Präteritum пропадает умлаут: können → konnte, müssen → musste, dürfen → durfte.</li></ul>"
  },
  {
    "t": "Сложные предложения: weil, dass, wenn",
    "lvl": "A2.2",
    "desc": "Придаточные предложения (Nebensatz): глагол уходит в самый конец!",
    "g": "<p>Союзы <b>weil</b> (потому что), <b>dass</b> (что), <b>wenn</b> (если/когда), <b>ob</b> (ли) открывают придаточное предложение. Главное правило: <b>спрягаемый глагол уходит в самый конец!</b></p><p>Пример: Ich lerne Deutsch, <b>weil</b> ich in Deutschland arbeiten <b>möchte</b>.</p>",
    "e": "<p><b>Важные нюансы:</b></p><ul><li>Перед союзом всегда ставится <b>запятая</b>.</li><li>Если придаточное стоит <b>первым</b>, то сразу после запятой идёт <b>глагол</b> главного предложения: <b>Wenn</b> es regnet<b>, bleibe</b> ich zu Hause.</li><li>Отделяемая приставка в придаточном соединяется обратно: …, weil ich früh <b>aufstehe</b>.</li></ul>",
    "w": [
      [
        "weil",
        "вайль",
        "потому что"
      ],
      [
        "dass",
        "дасс",
        "что (союз)"
      ],
      [
        "wenn",
        "вэнн",
        "если; когда"
      ],
      [
        "ob",
        "об",
        "ли"
      ],
      [
        "obwohl",
        "опво́ль",
        "хотя"
      ],
      [
        "deshalb",
        "дэ́схальб",
        "поэтому"
      ],
      [
        "trotzdem",
        "тро́тцдэм",
        "несмотря на это"
      ],
      [
        "wichtig",
        "ви́хтиг",
        "важный"
      ],
      [
        "die Meinung",
        "ма́йнунг",
        "мнение"
      ],
      [
        "hoffen",
        "хо́ффен",
        "надеяться"
      ]
    ],
    "d": [
      [
        "Warum lernst du jeden Abend zwei Stunden?",
        "вару́м лернст ду е́дэн а́бэнд цвай шту́ндэн",
        "Почему ты занимаешься каждый вечер по два часа?"
      ],
      [
        "Weil ich bald fließend Deutsch sprechen will!",
        "вайль их бальт фли́сэнд дойч шпрэ́хен виль",
        "Потому что я хочу скоро свободно говорить по-немецки!"
      ]
    ],
    "f": [
      [
        "Ich weiß, ___ du Recht hast.",
        "dass",
        [
          "dass",
          "weil",
          "denn"
        ]
      ],
      [
        "Ich bleibe hier, weil es draußen ___.",
        "regnet",
        [
          "regnet",
          "es regnet",
          "regnen"
        ]
      ],
      [
        "Wenn ich Zeit habe, ___ ich dich an.",
        "rufe",
        [
          "ich rufe",
          "rufe",
          "anrufe"
        ]
      ],
      [
        "Ich weiß nicht, ___ er morgen kommt.",
        "ob",
        [
          "dass",
          "ob",
          "weil"
        ]
      ]
    ],
    "sb": [
      [
        "Ich lerne Deutsch, weil es mir Spaß macht.",
        "Я учу немецкий, потому что мне это нравится.",
        "weil -> macht в конце"
      ],
      [
        "Ich hoffe, dass alles gut klappt.",
        "Я надеюсь, что всё получится хорошо.",
        "dass -> klappt в конце"
      ]
    ],
    "r": [
      "Ich bin sicher, dass du die Prüfung bestehst, wenn du fleißig übst.",
      "их бин зи́хер, дасс ду ди прю́фунг бештэ́ст, вэнн ду фля́йсиг юбст",
      "Я уверен, что ты сдашь экзамен, если будешь прилежно тренироваться."
    ],
    "wr": "<ul><li>Не путай <b>denn</b> (глагол на 2-м месте: ..., denn ich habe Zeit) и <b>weil</b> (глагол в конце: ..., weil ich Zeit habe).</li></ul>"
  },
  {
    "t": "Предлоги места: Wo? (Dativ) vs Wohin? (Akkusativ)",
    "lvl": "A2.2",
    "desc": "Двойные предлоги (Wechselpräpositionen) и пары глаголов legen/liegen, stellen/stehen.",
    "g": "<p>9 предлогов (<b>in, an, auf, unter, über, vor, hinter, neben, zwischen</b>) меняют падеж в зависимости от вопроса:</p><ul><li><b>Wo? (Где? Покой) → Dativ</b>: Das Buch <b>liegt</b> auf <b>dem</b> Tisch.</li><li><b>Wohin? (Куда? Движение) → Akkusativ</b>: Ich <b>lege</b> das Buch auf <b>den</b> Tisch.</li></ul>",
    "e": "<p><b>Пары глаголов:</b></p><ul><li><b>legen</b> (класть, куда? Akk.) ↔ <b>liegen</b> (лежать, где? Dat.)</li><li><b>stellen</b> (ставить, куда? Akk.) ↔ <b>stehen</b> (стоять, где? Dat.)</li><li><b>setzen</b> (сажать, куда? Akk.) ↔ <b>sitzen</b> (сидеть, где? Dat.)</li><li><b>hängen</b> (вешать Akk. / висеть Dat.)</li></ul><p>Слияния: in + dem = <b>im</b>, in + das = <b>ins</b>, an + dem = <b>am</b>, an + das = <b>ans</b>, auf + das = <b>aufs</b>.</p>",
    "w": [
      [
        "liegen",
        "ли́ген",
        "лежать (где?)"
      ],
      [
        "legen",
        "ле́ген",
        "класть (куда?)"
      ],
      [
        "stehen",
        "штэ́эн",
        "стоять (где?)"
      ],
      [
        "stellen",
        "штэ́ллен",
        "ставить (куда?)"
      ],
      [
        "sitzen",
        "зи́тцен",
        "сидеть (где?)"
      ],
      [
        "hängen",
        "хэ́нген",
        "висеть / вешать"
      ],
      [
        "neben",
        "нэ́бен",
        "рядом с"
      ],
      [
        "zwischen",
        "цви́шен",
        "между"
      ],
      [
        "hinter",
        "хи́нтэр",
        "позади"
      ],
      [
        "unter",
        "у́нтер",
        "под"
      ]
    ],
    "d": [
      [
        "Wo ist mein Handy?",
        "во ист майн хэ́нди",
        "Где мой телефон?"
      ],
      [
        "Du hast es auf den Schreibtisch gelegt, jetzt liegt es neben dem Laptop.",
        "ду хаст эс ауф дэн шра́йптиш геле́гт, етцт лигт эс нэ́бен дэм лэ́птоп",
        "Ты положил его на письменный стол, сейчас он лежит рядом с ноутбуком."
      ]
    ],
    "f": [
      [
        "Die Lampe steht auf ___ Tisch. (Wo?)",
        "dem",
        [
          "dem",
          "den",
          "das"
        ]
      ],
      [
        "Ich stelle die Tasse auf ___ Tisch. (Wohin?)",
        "den",
        [
          "dem",
          "den",
          "der"
        ]
      ],
      [
        "Das Bild hängt an ___ Wand. (Wo?)",
        "der",
        [
          "die",
          "der",
          "dem"
        ]
      ],
      [
        "Wir gehen heute Abend ___ Kino. (in + das)",
        "ins",
        [
          "im",
          "ins",
          "in der"
        ]
      ]
    ],
    "sb": [
      [
        "Das Buch liegt auf dem Tisch.",
        "Книга лежит на столе.",
        "Wo? -> Dativ (dem)"
      ],
      [
        "Ich lege das Buch auf den Tisch.",
        "Я кладу книгу на стол.",
        "Wohin? -> Akkusativ (den)"
      ]
    ],
    "r": [
      "Die Katze sitzt unter dem Stuhl und schläft ruhig.",
      "ди ка́цэ зитцт у́нтер дэм штуль унд шлэ́фт ру́иг",
      "Кошка сидит под стулом и спокойно спит."
    ],
    "wr": "<ul><li>Проверяй вопрос! Если предмет уже находится там (нет перемещения), всегда выбирай <b>Dativ</b>.</li></ul>"
  },
  {
    "t": "Сравнение прилагательных (Komparativ & Superlativ)",
    "lvl": "A2.2",
    "desc": "Степени сравнения: быстрее, лучше, больше всего.",
    "g": "<p>Сравнительная степень образуется суффиксом <b>-er</b>: schnell → schnell<b>er</b>, klein → klein<b>er</b>.</p><p>Превосходная степень: <b>am ...-sten</b>: <b>am</b> schnell<b>sten</b>.</p><p>Для сравнения используют <b>als</b> («чем», при разнице) и <b>so … wie</b> («такой же … как», при равенстве).</p>",
    "e": "<p><b>Важные исключения (заучить!):</b></p><ul><li><b>gut</b> → <b>besser</b> → <b>am besten</b> (хороший — лучше — лучше всего)</li><li><b>viel</b> → <b>mehr</b> → <b>am meisten</b> (много — больше)</li><li><b>gern</b> → <b>lieber</b> → <b>am liebsten</b> (охотно — охотнее)</li><li>Короткие с a, o, u часто получают умлаут: alt → <b>älter</b>, groß → <b>größer</b>, lang → <b>länger</b>.</li></ul>",
    "w": [
      [
        "besser",
        "бэ́ссер",
        "лучше"
      ],
      [
        "am besten",
        "ам бэ́стэн",
        "лучше всего"
      ],
      [
        "lieber",
        "ли́бер",
        "охотнее, лучше бы"
      ],
      [
        "am liebsten",
        "ам ли́бстэн",
        "охотнее всего"
      ],
      [
        "mehr",
        "мэр",
        "больше"
      ],
      [
        "größer",
        "грё́ссер",
        "больше (по размеру)"
      ],
      [
        "schneller",
        "шнэ́ллер",
        "быстрее"
      ],
      [
        "älter",
        "э́льтер",
        "старше"
      ],
      [
        "teurer",
        "то́йрер",
        "дороже"
      ],
      [
        "als",
        "альс",
        "чем (при сравнении)"
      ]
    ],
    "d": [
      [
        "Trinkst du lieber Kaffee oder Tee?",
        "три́нкст ду ли́бер ка́фе о́дэр те",
        "Ты предпочитаешь кофе или чай?"
      ],
      [
        "Ich trinke gern Kaffee, aber am liebsten trinke ich grünen Tee.",
        "их три́нкэ герн ка́фе, а́бер ам ли́бстэн три́нкэ их грю́нэн те",
        "Я люблю кофе, но больше всего люблю зелёный чай."
      ]
    ],
    "f": [
      [
        "Der Zug ist schneller ___ der Bus.",
        "als",
        [
          "wie",
          "als",
          "denn"
        ]
      ],
      [
        "Berlin ist genauso interessant ___ Hamburg.",
        "wie",
        [
          "als",
          "wie",
          "ob"
        ]
      ],
      [
        "Deutsch gefällt mir heute ___ als gestern.",
        "besser",
        [
          "guter",
          "besser",
          "am besten"
        ]
      ],
      [
        "___ esse ich Pizza.",
        "Am liebsten",
        [
          "Lieber",
          "Am besten",
          "Am liebsten"
        ]
      ]
    ],
    "sb": [
      [
        "Der Zug ist schneller als der Bus.",
        "Поезд быстрее, чем автобус.",
        "Сравнение с als"
      ],
      [
        "Am liebsten lerne ich am Morgen.",
        "Больше всего я люблю заниматься утром.",
        "Превосходная степень"
      ]
    ],
    "r": [
      "Mit jedem Tag spreche ich besser und verstehe mehr Wörter.",
      "мит е́дэм таг шпрэ́хэ их бэ́ссер унд ферштэ́э мэр вё́ртэр",
      "С каждым днём я говорю лучше и понимаю больше слов."
    ],
    "wr": "<ul><li><b>als</b> используется после формы на -er (größer als), а <b>wie</b> — при равенстве (so groß wie).</li></ul>"
  },
  {
    "t": "Возвратные глаголы и вежливость (Konjunktiv II)",
    "lvl": "A2.2",
    "desc": "Глаголы с sich (sich freuen, sich fühlen) и вежливые просьбы könnte / würde / hätte.",
    "g": "<p><b>Возвратные глаголы</b> используют местоимение <b>sich</b> («себя»): ich <b>mich</b>, du <b>dich</b>, er/sie/es <b>sich</b>, wir <b>uns</b>, ihr <b>euch</b>, sie/Sie <b>sich</b>.</p><p>Пример: Ich freue <b>mich</b>. Wie fühlst du <b>dich</b>?</p>",
    "e": "<p><b>Вежливые просьбы и мечты (Konjunktiv II):</b></p><ul><li><b>Könnten Sie</b> mir bitte helfen? (Не могли бы Вы мне помочь?)</li><li><b>Hätten Sie</b> kurz Zeit? (Не нашлось бы у Вас минутки?)</li><li><b>Ich würde gern</b> nach Berlin fahren. (Я бы с удовольствием поехал в Берлин.)</li></ul>",
    "w": [
      [
        "sich freuen",
        "зихь фро́йен",
        "радоваться"
      ],
      [
        "sich interessieren",
        "зихь интэрэсси́рен",
        "интересоваться"
      ],
      [
        "sich erinnern",
        "зихь эр-и́ннерн",
        "помнить, вспоминать"
      ],
      [
        "sich fühlen",
        "зихь фю́лен",
        "чувствовать себя"
      ],
      [
        "sich beeilen",
        "зихь бэ-а́йлен",
        "торопиться"
      ],
      [
        "sich ausruhen",
        "зихь а́усруэн",
        "отдыхать"
      ],
      [
        "könnten",
        "кё́нтэн",
        "могли бы"
      ],
      [
        "hätten",
        "хэ́ттэн",
        "имели бы"
      ],
      [
        "würden",
        "вю́рдэн",
        "бы (вспом. глагол)"
      ],
      [
        "höflich",
        "хё́флих",
        "вежливый"
      ]
    ],
    "d": [
      [
        "Könnten Sie mir bitte den Weg zum Museum erklären?",
        "кё́нтэн зи мир би́ттэ дэн вег цум музэ́ум эрклэ́рен",
        "Не могли бы Вы подсказать мне дорогу к музею?"
      ],
      [
        "Sehr gern! Ich freue mich, wenn ich helfen kann.",
        "зэр герн! их фро́йэ мих, вэнн их хе́льфен канн",
        "С радостью! Я рад, когда могу помочь."
      ]
    ],
    "f": [
      [
        "Ich freue ___ sehr auf den Urlaub!",
        "mich",
        [
          "mir",
          "mich",
          "sich"
        ]
      ],
      [
        "Wie fühlst du ___ heute?",
        "dich",
        [
          "dir",
          "dich",
          "sich"
        ]
      ],
      [
        "___ Sie das bitte wiederholen?",
        "Könnten",
        [
          "Können",
          "Könnten",
          "Werden"
        ]
      ],
      [
        "Ich ___ gern fließend Deutsch sprechen.",
        "würde",
        [
          "bin",
          "habe",
          "würde"
        ]
      ]
    ],
    "sb": [
      [
        "Ich interessiere mich für Musik.",
        "Я интересуюсь музыкой.",
        "sich interessieren für"
      ],
      [
        "Könnten Sie bitte langsamer sprechen?",
        "Не могли бы Вы говорить медленнее?",
        "Вежливая просьба Konjunktiv II"
      ]
    ],
    "r": [
      "Ich freue mich sehr, denn ich mache jeden Tag echte Fortschritte.",
      "их фро́йэ мих зэр, дэнн их ма́хэ е́дэн таг э́хтэ фо́ртшриттэ",
      "Я очень рад, ведь я каждый день делаю настоящие успехи."
    ],
    "wr": "<ul><li>После <b>sich freuen auf</b> — ожидание будущего радостного события; после <b>sich freuen über</b> — радость от того, что уже есть.</li></ul>"
  },
  {
    "t": "Управление глаголов и worauf / darauf",
    "lvl": "B1.1",
    "desc": "Глаголы с фиксированными предлогами (warten auf, denken an) и местоименные наречия.",
    "g": "<p>Многие немецкие глаголы требуют <b>строго определённого предлога и падежа</b>:</p><ul><li><b>warten auf</b> (+ Akk): Ich warte <b>auf den Bus</b>.</li><li><b>sich interessieren für</b> (+ Akk): Er interessiert sich <b>für Sport</b>.</li><li><b>sprechen mit</b> (+ Dat) <b>über</b> (+ Akk): Wir sprechen mit ihm über das Projekt.</li></ul>",
    "e": "<p><b>Вопросы и указания на неодушевлённый предмет:</b><br><b>wo(r)- + предлог</b> в вопросе и <b>da(r)- + предлог</b> в ответе (буква <b>r</b> вставляется, если предлог начинается с гласной):</p><ul><li><b>Worauf</b> wartest du? — Ich warte <b>darauf</b>, dass der Film beginnt.</li><li><b>Wofür</b> interessierst du dich? — <b>Dafür</b> habe ich viel Zeit!</li><li>Для людей так нельзя: <b>Auf wen</b> wartest du? — Auf meinen Freund.</li></ul>",
    "w": [
      [
        "warten auf",
        "ва́ртэн ауф",
        "ждать (кого/чего)"
      ],
      [
        "denken an",
        "дэ́нкен ан",
        "думать о"
      ],
      [
        "teilnehmen an",
        "та́йльнэмэн ан",
        "участвовать в (+ Dat)"
      ],
      [
        "bitten um",
        "би́ттэн ум",
        "просить о (+ Akk)"
      ],
      [
        "träumen von",
        "тро́ймен фон",
        "мечтать о (+ Dat)"
      ],
      [
        "abhängen von",
        "а́пхэнген фон",
        "зависеть от (+ Dat)"
      ],
      [
        "worauf",
        "вора́уф",
        "на что? чего?"
      ],
      [
        "darauf",
        "дара́уф",
        "на это, этого"
      ],
      [
        "wofür",
        "вофю́р",
        "за что? чем?"
      ],
      [
        "dafür",
        "дафю́р",
        "за это, этим"
      ]
    ],
    "d": [
      [
        "Worauf freust du dich am meisten?",
        "вора́уф фройст ду дих ам ма́йстэн",
        "Чему ты радуешься больше всего?"
      ],
      [
        "Ich freue mich darauf, im Sommer ans Meer zu fahren!",
        "их фро́йэ мих дара́уф, им зо́ммэр анс мэр цу фа́рэн",
        "Я очень радуюсь тому, что летом поеду на море!"
      ]
    ],
    "f": [
      [
        "Ich warte ___ meinen Freund. (Akk)",
        "auf",
        [
          "auf",
          "an",
          "über"
        ]
      ],
      [
        "Wir nehmen ___ dem Kurs teil.",
        "an",
        [
          "auf",
          "an",
          "für"
        ]
      ],
      [
        "___ interessiert sie sich? (неодуш.)",
        "Wofür",
        [
          "Für wen",
          "Wofür",
          "Dafür"
        ]
      ],
      [
        "Er hat mich ___ Hilfe gebeten.",
        "um",
        [
          "um",
          "nach",
          "von"
        ]
      ]
    ],
    "sb": [
      [
        "Ich freue mich auf das Wochenende.",
        "Я с радостью жду выходных.",
        "sich freuen auf + Akkusativ"
      ],
      [
        "Worüber habt ihr gestern gesprochen?",
        "О чём вы вчера говорили?",
        "worüber (über + гласная -> r)"
      ]
    ],
    "r": [
      "Ich bin davon überzeugt, dass wir viel erreichen können.",
      "их бин дафо́н юберцо́йгт, дасс вир филь эрра́йхен кё́ннэн",
      "Я убеждён в том, что мы можем многого достичь."
    ],
    "wr": "<ul><li>При связке с придаточным предложением (dass / ob / инфинитив с zu) в главном предложении часто ставится <b>da(r)- + предлог</b>.</li></ul>"
  },
  {
    "t": "Пассивный залог (Passiv: Präsens & Präteritum)",
    "lvl": "B1.1",
    "desc": "Как сказать «дом строится / был построен»: werden + Partizip II.",
    "g": "<p>Когда важно <b>само действие</b>, а не кто его делает, используют <b>Passiv</b>:</p><p><b>werden</b> (спрягается на 2-м месте) + ... + <b>Partizip II</b> (в конце).</p><ul><li>Präsens Passiv: Das Haus <b>wird</b> gebaut. (Дом строится.)</li><li>Präteritum Passiv: Das Haus <b>wurde</b> gebaut. (Дом строился / был построен.)</li></ul>",
    "e": "<p><b>Пассив с модальным глаголом:</b><br>Der Vertrag <b>muss</b> heute <b>unterschrieben werden</b>. (Договор должен быть подписан сегодня.)</p><p><b>Кто выполняет действие?</b> Предлог <b>von</b> (+ Dativ): Der Brief wurde <b>von meinem Chef</b> geschrieben.</p>",
    "w": [
      [
        "werden",
        "вэ́рдэн",
        "становиться; вспомог. глагол Passiv"
      ],
      [
        "wurde",
        "ву́рдэ",
        "был (Präteritum от werden)"
      ],
      [
        "gebaut",
        "геба́ут",
        "построен (bauen)"
      ],
      [
        "geschrieben",
        "гешри́бен",
        "написан (schreiben)"
      ],
      [
        "repariert",
        "репари́рт",
        "отремонтирован (reparieren)"
      ],
      [
        "geöffnet",
        "ге-ё́ффнэт",
        "открыт (öffnen)"
      ],
      [
        "bezahlt",
        "беца́льт",
        "оплачен (bezahlen)"
      ],
      [
        "unterschrieben",
        "унтершри́бен",
        "подписан"
      ],
      [
        "entwickelt",
        "энтви́кельт",
        "разработан"
      ],
      [
        "von",
        "фон",
        "кем-либо (в Passiv)"
      ]
    ],
    "d": [
      [
        "Wann wird das neue Museum eröffnet?",
        "ванн вирд дас но́йе музэ́ум эр-ё́ффнэт",
        "Когда откроется новый музей?"
      ],
      [
        "Es wurde schon letzte Woche eröffnet und wird von vielen Touristen besucht.",
        "эс вурдэ шон ле́тцтэ во́хэ эр-ё́ффнэт унд вирд фон фи́лен тури́стэн безу́хт",
        "Он был открыт уже на прошлой неделе, и его посещают многие туристы."
      ]
    ],
    "f": [
      [
        "Hier ___ ein neues Büro gebaut.",
        "wird",
        [
          "wird",
          "hat",
          "ist"
        ]
      ],
      [
        "Die E-Mail ___ gestern geschickt.",
        "wurde",
        [
          "wird",
          "wurde",
          "hat"
        ]
      ],
      [
        "Die Aufgabe muss heute ___ werden.",
        "gemacht",
        [
          "machen",
          "gemacht",
          "machte"
        ]
      ],
      [
        "Das Lied wurde ___ einer bekannten Sängerin gesungen.",
        "von",
        [
          "von",
          "mit",
          "bei"
        ]
      ]
    ],
    "sb": [
      [
        "Das Auto wird gerade in der Werkstatt repariert.",
        "Машина как раз сейчас ремонтируется в сервисе.",
        "Präsens Passiv: wird ... repariert"
      ],
      [
        "Diese App wurde für Lerner entwickelt.",
        "Это приложение было разработано для учеников.",
        "Präteritum Passiv: wurde ... entwickelt"
      ]
    ],
    "r": [
      "Im Unterricht wird nur Deutsch gesprochen und viel geübt.",
      "им у́нтеррихт вирд нур дойч гешпро́хен унд филь ге-ю́бт",
      "На уроке говорят только по-немецки и много тренируются."
    ],
    "wr": "<ul><li>Безличный пассив начинается с <b>Es</b> или обстоятельства: <i>Hier wird nicht geraucht.</i> (Здесь не курят.)</li></ul>"
  },
  {
    "t": "Инфинитивные обороты: um…zu, ohne…zu, statt…zu",
    "lvl": "B1.1",
    "desc": "Как выразить цель («чтобы»), «не делая» и «вместо того чтобы».",
    "g": "<p>Если подлежащее в обеих частях предложения <b>одно и то же</b>, используется инфинитив с частицей <b>zu</b> в самом конце:</p><ul><li><b>um … zu</b> (чтобы): Ich lerne Deutsch, <b>um</b> in Berlin <b>zu studieren</b>.</li><li><b>ohne … zu</b> (не делая): Er ging, <b>ohne</b> ein Wort <b>zu sagen</b>.</li><li><b>statt … zu</b> (вместо того чтобы): Sie lernt, <b>statt</b> fern<b>zu</b>sehen.</li></ul>",
    "e": "<p><b>Важное правило написания zu:</b></p><ul><li>У отделяемых глаголов <b>zu</b> ставится <b>между приставкой и корнем</b> и пишется слитно: aufstehen → <b>aufzustehen</b>, fernsehen → <b>fernzusehen</b>, einkaufen → <b>einzukaufen</b>.</li><li>Если подлежащие разные (я учу, чтобы <i>ты</i> понял), вместо <b>um…zu</b> используют союз <b>damit</b>!</li></ul>",
    "w": [
      [
        "um ... zu",
        "ум ... цу",
        "чтобы (одно подлежащее)"
      ],
      [
        "ohne ... zu",
        "о́нэ ... цу",
        "без того чтобы, не (делая)"
      ],
      [
        "statt ... zu",
        "штатт ... цу",
        "вместо того чтобы"
      ],
      [
        "damit",
        "дами́т",
        "для того чтобы (разные подлежащие)"
      ],
      [
        "erreichen",
        "эрра́йхен",
        "достигать"
      ],
      [
        "verbessern",
        "фербэ́ссерн",
        "улучшать"
      ],
      [
        "sparen",
        "шпа́рен",
        "экономить, копить"
      ],
      [
        "aufzustehen",
        "а́уфцуштээн",
        "встать (zu внутри)"
      ],
      [
        "anzurufen",
        "а́нцуруфен",
        "позвонить (zu внутри)"
      ],
      [
        "mitzubringen",
        "ми́тцубринген",
        "принести с собой"
      ]
    ],
    "d": [
      [
        "Warum stehst du so früh auf?",
        "вару́м штест ду зо фрю ауф",
        "Почему ты так рано встаёшь?"
      ],
      [
        "Ich stehe früh auf, um vor der Arbeit noch eine Stunde zu lernen.",
        "их штэ́э фрю ауф, ум фор дер а́рбайт нох а́йнэ шту́ндэ цу ле́рнэн",
        "Я встаю рано, чтобы перед работой ещё час позаниматься."
      ]
    ],
    "f": [
      [
        "Ich spare Geld, ___ nach Deutschland zu reisen.",
        "um",
        [
          "um",
          "damit",
          "für"
        ]
      ],
      [
        "Er verließ den Raum, ___ Tschüss zu sagen.",
        "ohne",
        [
          "ohne",
          "statt",
          "um"
        ]
      ],
      [
        "Как правильно с zu: einkaufen → …",
        "einzukaufen",
        [
          "zu einkaufen",
          "einzukaufen",
          "einkaufenzu"
        ]
      ],
      [
        "Ich spreche laut, ___ du mich gut verstehst. (разные лица)",
        "damit",
        [
          "um",
          "damit",
          "ohne"
        ]
      ]
    ],
    "sb": [
      [
        "Ich übe jeden Tag, um mein Ziel zu erreichen.",
        "Я тренируюсь каждый день, чтобы достичь своей цели.",
        "um ... zu + достичь"
      ],
      [
        "Statt fernzusehen, liest sie ein deutsches Buch.",
        "Вместо того чтобы смотреть ТВ, она читает немецкую книгу.",
        "zu внутри отд. глагола fernzusehen"
      ]
    ],
    "r": [
      "Es lohnt sich, jeden Tag laut zu sprechen, um sicherer zu werden.",
      "эс лонт зихь, е́дэн таг ляут цу шпрэ́хен, ум зи́херэр цу вэ́рдэн",
      "Стоит каждый день говорить вслух, чтобы стать увереннее."
    ],
    "wr": "<ul><li>После оборотов с <b>um…zu / ohne…zu / statt…zu</b> всегда ставится запятая.</li></ul>"
  },
  {
    "t": "Относительные придаточные (Relativsätze)",
    "lvl": "B1.1",
    "desc": "Придаточные со словом «который» (der, die, das, den, dem, denen).",
    "g": "<p>Относительное местоимение («который») выбирается по <b>роду и числу</b> существительного из главного предложения, но <b>падеж</b> зависит от его роли внутри придаточного (глагол в конце!):</p><ul><li>Nom: Der Mann, <b>der</b> hier wohnt, ist Arzt.</li><li>Akk: Der Film, <b>den</b> wir gestern sahen, war super.</li><li>Dat: Die Freundin, <b>mit der</b> ich lerne, kommt aus Wien.</li></ul>",
    "e": "<p><b>Формы совпадают с определённым артиклем, кроме двух исключений:</b></p><ul><li>Dativ множественного числа: <b>denen</b> (Die Leute, mit <b>denen</b> ich spreche…)</li><li>Genitiv: <b>dessen</b> (м./ср.), <b>deren</b> (ж./мн.) — «чей, которого/которой».</li></ul>",
    "w": [
      [
        "der (который)",
        "дер",
        "который (м.р. Nom.)"
      ],
      [
        "den (которого)",
        "дэн",
        "которого (м.р. Akk.)"
      ],
      [
        "dem (которому)",
        "дэм",
        "которому (м./ср.р. Dat.)"
      ],
      [
        "die (которая/ые)",
        "ди",
        "которая / которые"
      ],
      [
        "das (которое)",
        "дас",
        "которое (ср.р.)"
      ],
      [
        "denen",
        "дэ́нэн",
        "которым (мн. ч. Dat.)"
      ],
      [
        "dessen",
        "дэ́ссэн",
        "чей, которого (м./ср.р. Gen.)"
      ],
      [
        "deren",
        "дэ́рэн",
        "чья, которых (ж./мн.р. Gen.)"
      ],
      [
        "wo (где)",
        "во",
        "где (место)"
      ],
      [
        "was (что)",
        "вас",
        "что (после alles, nichts, etwas)"
      ]
    ],
    "d": [
      [
        "Kennst du das neue Café, das neben dem Bahnhof eröffnet hat?",
        "кэннст ду дас но́йе кафэ́, дас нэ́бен дэм ба́нхоф эр-ё́ффнэт хат",
        "Знаешь новое кафе, которое открылось рядом с вокзалом?"
      ],
      [
        "Ja, der Kaffee, den man dort trinkt, ist fantastisch!",
        "я, дер ка́фе, дэн ман дорт тринкт, ист фанта́стиш",
        "Да, кофе, который там пьют, фантастический!"
      ]
    ],
    "f": [
      [
        "Das ist das Buch, ___ ich gerade lese.",
        "das",
        [
          "der",
          "die",
          "das"
        ]
      ],
      [
        "Der Kollege, ___ mir geholfen hat, heißt Max.",
        "der",
        [
          "der",
          "den",
          "dem"
        ]
      ],
      [
        "Der Zug, auf ___ wir warten, hat Verspätung.",
        "den",
        [
          "der",
          "den",
          "dem"
        ]
      ],
      [
        "Die Freunde, mit ___ ich reise, sind lustig.",
        "denen",
        [
          "die",
          "den",
          "denen"
        ]
      ]
    ],
    "sb": [
      [
        "Das ist die Stadt, in der ich wohne.",
        "Это город, в котором я живу.",
        "die Stadt -> in + Dativ (der)"
      ],
      [
        "Der Lehrer, den wir alle mögen, erklärt super.",
        "Учитель, которого мы все любим, объясняет супер.",
        "mögen + Akkusativ (den)"
      ]
    ],
    "r": [
      "Das Wort, das ich gestern gelernt habe, benutze ich heute schon im Satz.",
      "дас ворт, дас их ге́стерн геле́рнт ха́бэ, бену́тцэ их хо́йтэ шон им затц",
      "Слово, которое я выучил вчера, я уже сегодня использую в предложении."
    ],
    "wr": "<ul><li>Относительное придаточное всегда выделяется <b>запятыми с обеих сторон</b>!</li></ul>"
  },
  {
    "t": "Двойные союзы и аргументация на B1",
    "lvl": "B1.1",
    "desc": "Связки sowohl…als auch, nicht nur…sondern auch, je…desto, einerseits…andererseits.",
    "g": "<p>На уровне B1 речь звучит связно благодаря <b>парным союзам</b>:</p><ul><li><b>sowohl … als auch</b> (как …, так и …)</li><li><b>nicht nur … sondern auch</b> (не только …, но и …)</li><li><b>weder … noch</b> (ни …, ни …)</li><li><b>entweder … oder</b> (или …, или …)</li><li><b>zwar … aber</b> (хотя и …, но …)</li></ul>",
    "e": "<p><b>Сравнительный союз je … desto (чем …, тем …):</b><br><b>Je</b> mehr man liest, <b>desto</b> schneller lernt man.<br>В первой части (с <b>je</b>) глагол уходит в конец, а во второй (с <b>desto</b>) сразу после прилагательного идёт спрягаемый глагол!</p>",
    "w": [
      [
        "sowohl ... als auch",
        "зово́ль ... альс аух",
        "как ..., так и ..."
      ],
      [
        "nicht nur ... sondern auch",
        "нихт нур ... зо́ндэрн аух",
        "не только ..., но и ..."
      ],
      [
        "weder ... noch",
        "вэ́дэр ... нох",
        "ни ..., ни ..."
      ],
      [
        "entweder ... oder",
        "энтвэ́дэр ... о́дэр",
        "либо ..., либо ..."
      ],
      [
        "einerseits ... andererseits",
        "а́йнерзайтс ... а́ндерэрзайтс",
        "с одной стороны ... с другой"
      ],
      [
        "je ... desto",
        "е ... дэ́сто",
        "чем ..., тем ..."
      ],
      [
        "zwar ... aber",
        "цвар ... а́бер",
        "хоть и ..., но ..."
      ],
      [
        "meiner Meinung nach",
        "ма́йнер ма́йнунг нах",
        "по моему мнению"
      ],
      [
        "der Vorteil",
        "фо́ртайль",
        "преимущество"
      ],
      [
        "der Nachteil",
        "на́хтайль",
        "недостаток"
      ]
    ],
    "d": [
      [
        "Wie findest du das tägliche Lernen am Computer?",
        "ви фи́ндэст ду дас тэ́глихе ле́рнэн ам компьютэр",
        "Как тебе ежедневная учёба за компьютером?"
      ],
      [
        "Meiner Meinung nach lernt man sowohl schneller als auch regelmäßiger — je mehr man übt, desto sicherer wird man!",
        "ма́йнер ма́йнунг нах лернт ман зово́ль шнэ́ллер альс аух ре́гельмэссигер",
        "По моему мнению, учишься как быстрее, так и регулярнее — чем больше практикуешься, тем увереннее становишься!"
      ]
    ],
    "f": [
      [
        "Er spricht ___ Deutsch als auch Englisch.",
        "sowohl",
        [
          "sowohl",
          "weder",
          "entweder"
        ]
      ],
      [
        "Sie trinkt ___ Kaffee noch Tee. (ни то, ни другое)",
        "weder",
        [
          "sowohl",
          "weder",
          "nicht nur"
        ]
      ],
      [
        "Je länger wir üben, ___ besser wird unsere Aussprache.",
        "desto",
        [
          "als",
          "desto",
          "aber"
        ]
      ],
      [
        "Das Zimmer ist ___ klein, aber sehr gemütlich.",
        "zwar",
        [
          "zwar",
          "weder",
          "obwohl"
        ]
      ]
    ],
    "sb": [
      [
        "Je mehr man liest, desto größer wird der Wortschatz.",
        "Чем больше читаешь, тем больше становится словарный запас.",
        "je ... desto + сравн. степень"
      ],
      [
        "Ich lerne nicht nur Wörter, sondern auch Grammatik.",
        "Я учу не только слова, но и грамматику.",
        "nicht nur ... sondern auch"
      ]
    ],
    "r": [
      "Einerseits braucht Deutsch Zeit, andererseits macht jeder neue Erfolg große Freude.",
      "а́йнерзайтс бра́ухт дойч цайт, а́ндерэрзайтс махт е́дэр но́йе эрфо́льг гро́сэ фро́йдэ",
      "С одной стороны, немецкий требует времени, с другой — каждый новый успех дарит большую радость."
    ],
    "wr": "<ul><li>При аргументации используй структуру: <i>Meiner Meinung nach… / Einerseits… andererseits… / Zum Schluss möchte ich sagen, dass…</i></li></ul>"
  }
];
