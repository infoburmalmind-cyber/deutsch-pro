import type { GrammarSheet, SentenceTuple, StoryItem, VerbItem } from "../types";

export const SENTENCES: SentenceTuple[] = [
  [
    "Ich heiße Anna und komme aus Bischkek.",
    "Меня зовут Анна, и я из Бишкека.",
    "Глагол на 2-м месте (V2)",
    "A1"
  ],
  [
    "Wie geht es Ihnen heute?",
    "Как у Вас сегодня дела?",
    "Вежливое Sie с большой буквы",
    "A1"
  ],
  [
    "Mein Vater arbeitet in einer großen Firma.",
    "Мой отец работает в крупной фирме.",
    "муж. род -> mein, Dativ -> einer",
    "A1"
  ],
  [
    "Meine Schwester lernt jeden Tag Deutsch.",
    "Моя сестра каждый день учит немецкий.",
    "жен. род -> meine",
    "A1"
  ],
  [
    "Ich möchte bitte einen Kaffee mit Milch.",
    "Я хотел бы, пожалуйста, кофе с молоком.",
    "Akkusativ муж. рода: einen Kaffee",
    "A1"
  ],
  [
    "Hast du heute Abend Zeit für mich?",
    "У тебя есть сегодня вечером время для меня?",
    "Вопрос да/нет: глагол на 1-м месте",
    "A1"
  ],
  [
    "Wir wohnen in einer kleinen Wohnung.",
    "Мы живём в маленькой квартире.",
    "Wo? -> Dativ (in einer)",
    "A1"
  ],
  [
    "Wo ist der nächste Supermarkt?",
    "Где находится ближайший супермаркет?",
    "W-вопрос: Wo + ist",
    "A1"
  ],
  [
    "Ich trinke morgens immer grünen Tee.",
    "По утрам я всегда пью зелёный чай.",
    "Время (morgens) после глагола",
    "A1"
  ],
  [
    "Zum Frühstück esse ich Brot mit Käse.",
    "На завтрак я ем хлеб с сыром.",
    "Инверсия: глагол остаётся на 2-м месте",
    "A1"
  ],
  [
    "Der Zug fährt um acht Uhr ab.",
    "Поезд отправляется в восемь часов.",
    "Отделяемая приставка ab в конце",
    "A1"
  ],
  [
    "Am Montag beginnt mein neuer Deutschkurs.",
    "В понедельник начинается мой новый курс немецкого.",
    "Дни недели: am + день",
    "A1"
  ],
  [
    "Ich habe leider kein Auto.",
    "У меня, к сожалению, нет машины.",
    "das Auto -> kein Auto",
    "A1"
  ],
  [
    "Das Buch ist nicht teuer, aber interessant.",
    "Книга недорогая, но интересная.",
    "nicht перед прилагательным",
    "A1"
  ],
  [
    "Kannst du mir bitte ein Glas Wasser bringen?",
    "Можешь принести мне стакан воды?",
    "können + инфинитив в конце",
    "A1"
  ],
  [
    "Ich muss heute noch viel arbeiten.",
    "Мне сегодня ещё нужно много работать.",
    "müssen + работать в конце",
    "A1"
  ],
  [
    "Wir wollen am Samstag ins Kino gehen.",
    "Мы хотим пойти в субботу в кино.",
    "wollen + gehen в конце",
    "A1"
  ],
  [
    "Um wie viel Uhr stehst du morgens auf?",
    "Во сколько ты встаёшь по утрам?",
    "aufstehen -> stehst ... auf",
    "A1"
  ],
  [
    "Abends sehe ich selten fern.",
    "Вечерами я редко смотрю телевизор.",
    "fernsehen -> sehe ... fern",
    "A1"
  ],
  [
    "Ich rufe dich morgen Nachmittag an.",
    "Я позвоню тебе завтра после обеда.",
    "anrufen -> rufe ... an",
    "A1"
  ],
  [
    "Kommst du heute mit ins Café?",
    "Ты пойдёшь сегодня с нами в кафе?",
    "mitkommen -> kommst ... mit",
    "A1"
  ],
  [
    "Nimm bitte deinen Regenschirm mit!",
    "Возьми с собой свой зонт!",
    "Повелительное: Nimm ... mit",
    "A1"
  ],
  [
    "Ich fahre jeden Morgen mit dem Bus.",
    "Я езжу каждое утро на автобусе.",
    "mit + Dativ (dem Bus)",
    "A1"
  ],
  [
    "Gehen Sie an der Ampel geradeaus!",
    "На светофоре идите прямо!",
    "Вежливый императив: Gehen Sie",
    "A1"
  ],
  [
    "Die Apotheke ist gleich um die Ecke.",
    "Аптека сразу за углом.",
    "Устойчивое выражение um die Ecke",
    "A1"
  ],
  [
    "Wie viel kostet diese blaue Jacke?",
    "Сколько стоит эта синяя куртка?",
    "Вопросительная связка Wie viel",
    "A1"
  ],
  [
    "Dieser Mantel gefällt mir sehr gut.",
    "Это пальто мне очень нравится.",
    "gefallen + mir (Dativ)",
    "A1"
  ],
  [
    "Kann ich hier mit Karte bezahlen?",
    "Могу я оплатить здесь картой?",
    "mit + сущ. без артикля",
    "A1"
  ],
  [
    "Mein Handy funktioniert heute leider nicht.",
    "Мой телефон сегодня, к сожалению, не работает.",
    "nicht в конце отрицает действие",
    "A1"
  ],
  [
    "Wie ist deine Telefonnummer?",
    "Какой у тебя номер телефона?",
    "жен. род die Nummer -> deine",
    "A1"
  ],
  [
    "Ich komme aus Kirgisistan und spreche Russisch.",
    "Я из Кыргызстана и говорю по-русски.",
    "Языки с большой буквы",
    "A1"
  ],
  [
    "Meine Mutter kocht heute eine leckere Suppe.",
    "Моя мама готовит сегодня вкусный суп.",
    "Akkusativ жен. рода: eine Suppe",
    "A1"
  ],
  [
    "Im Sommer scheint die Sonne sehr warm.",
    "Летом солнце светит очень тепло.",
    "Время года: im Sommer",
    "A1"
  ],
  [
    "Heute regnet es den ganzen Tag.",
    "Сегодня весь день идёт дождь.",
    "Безличное es regnet",
    "A1"
  ],
  [
    "Unsere Kinder spielen gern im Garten.",
    "Наши дети любят играть в саду.",
    "im = in + dem (Dativ)",
    "A1"
  ],
  [
    "Ich brauche ein Wörterbuch für den Unterricht.",
    "Мне нужен словарь для урока.",
    "für + Akkusativ (den Unterricht)",
    "A1"
  ],
  [
    "Woher kennt ihr diese gute Lehrerin?",
    "Откуда вы знаете эту хорошую учительницу?",
    "Woher = откуда",
    "A1"
  ],
  [
    "Bitte sprechen Sie etwas langsamer!",
    "Пожалуйста, говорите немного медленнее!",
    "Вежливая просьба",
    "A1"
  ],
  [
    "Wie schreibt man dieses Wort auf Deutsch?",
    "Как пишется это слово по-немецки?",
    "Безличное man + 3-е лицо ед. ч.",
    "A1"
  ],
  [
    "Ich habe zwei Brüder und eine Katze.",
    "У меня есть два брата и одна кошка.",
    "Мн. ч. Brüder с умлаутом",
    "A1"
  ],
  [
    "In meiner Freizeit höre ich gern Musik.",
    "В свободное время я люблю слушать музыку.",
    "gern стоит после глагола",
    "A1"
  ],
  [
    "Der Tisch steht zwischen dem Bett und dem Schrank.",
    "Стол стоит между кроватью и шкафом.",
    "Wo? -> Dativ (dem)",
    "A1"
  ],
  [
    "Darf ich hier ein Foto machen?",
    "Можно мне здесь сделать фотографию?",
    "dürfen = иметь разрешение",
    "A1"
  ],
  [
    "Am Wochenende bleiben wir oft zu Hause.",
    "На выходных мы часто остаёмся дома.",
    "zu Hause = дома",
    "A1"
  ],
  [
    "Vielen Dank für deine schnelle Hilfe!",
    "Большое спасибо за твою быструю помощь!",
    "für + Akkusativ",
    "A1"
  ],
  [
    "Gestern habe ich zwei Stunden Deutsch gelernt.",
    "Вчера я два часа учил немецкий.",
    "Perfekt с haben + gelernt в конце",
    "A2"
  ],
  [
    "Am Sonntag sind wir in die Berge gefahren.",
    "В воскресенье мы поехали в горы.",
    "Движение -> Perfekt с sein",
    "A2"
  ],
  [
    "Hast du schon die neue E-Mail gelesen?",
    "Ты уже прочитал новое электронное письмо?",
    "Partizip II от lesen -> gelesen",
    "A2"
  ],
  [
    "Mein Freund ist gestern aus Berlin angekommen.",
    "Мой друг вчера прибыл из Берлина.",
    "ankommen -> ist angekommen",
    "A2"
  ],
  [
    "Ich habe meinen Schlüssel im Büro vergessen.",
    "Я забыл свой ключ в офисе.",
    "Неотделяемая приставка ver- без ge-",
    "A2"
  ],
  [
    "Letztes Jahr war ich zwei Wochen in Wien.",
    "В прошлом году я был две недели в Вене.",
    "Präteritum от sein -> war",
    "A2"
  ],
  [
    "Gestern hatte ich leider keine Freizeit.",
    "Вчера у меня, к сожалению, не было свободного времени.",
    "Präteritum от haben -> hatte",
    "A2"
  ],
  [
    "Er konnte wegen der Arbeit nicht kommen.",
    "Он не мог прийти из-за работы.",
    "Präteritum от können -> konnte",
    "A2"
  ],
  [
    "Mir tut seit gestern der Rücken weh.",
    "У меня со вчерашнего дня болит спина.",
    "Dativ mir + tut ... weh",
    "A2"
  ],
  [
    "Der Arzt sagt, ich soll viel schlafen.",
    "Врач говорит, мне следует много спать.",
    "Совет через sollen",
    "A2"
  ],
  [
    "Ich lerne Deutsch, weil ich in Europa studieren will.",
    "Я учу немецкий, потому что хочу учиться в Европе.",
    "weil -> спрягаемый глагол will в конце",
    "A2"
  ],
  [
    "Ich weiß, dass tägliche Übung sehr wichtig ist.",
    "Я знаю, что ежедневная практика очень важна.",
    "dass -> ist в самом конце",
    "A2"
  ],
  [
    "Wenn das Wetter schön ist, gehen wir spazieren.",
    "Если погода хорошая, мы пойдём гулять.",
    "Придаточное на 1-м месте -> глагол после запятой",
    "A2"
  ],
  [
    "Weißt du, ob der Supermarkt noch offen ist?",
    "Ты знаешь, открыт ли ещё супермаркет?",
    "Косвенный вопрос с ob",
    "A2"
  ],
  [
    "Es regnet stark, deshalb nehme ich den Bus.",
    "Идёт сильный дождь, поэтому я еду на автобусе.",
    "deshalb -> глагол сразу после него",
    "A2"
  ],
  [
    "Ich bin müde, trotzdem lerne ich weiter.",
    "Я устал, но всё равно продолжаю учиться.",
    "trotzdem -> глагол сразу после него",
    "A2"
  ],
  [
    "Ich stelle die frischen Blumen auf den Tisch.",
    "Я ставлю свежие цветы на стол.",
    "Wohin? (куда) -> Akkusativ (den)",
    "A2"
  ],
  [
    "Die frischen Blumen stehen jetzt auf dem Tisch.",
    "Свежие цветы стоят сейчас на столе.",
    "Wo? (где) -> Dativ (dem)",
    "A2"
  ],
  [
    "Der Zug ist viel schneller als das Fahrrad.",
    "Поезд намного быстрее велосипеда.",
    "Сравнение: Komparativ + als",
    "A2"
  ],
  [
    "Dieses Zimmer ist genauso groß wie deins.",
    "Эта комната такая же большая, как твоя.",
    "Равенство: so ... wie",
    "A2"
  ],
  [
    "Am liebsten trinke ich heißen Tee mit Honig.",
    "Больше всего я люблю пить горячий чай с мёдом.",
    "Superlativ от gern -> am liebsten",
    "A2"
  ],
  [
    "Ich freue mich sehr auf unseren nächsten Urlaub.",
    "Я очень жду нашего следующего отпуска.",
    "sich freuen auf + Akkusativ",
    "A2"
  ],
  [
    "Interessierst du dich für moderne Technik?",
    "Ты интересуешься современной техникой?",
    "sich interessieren für",
    "A2"
  ],
  [
    "Ich erinnere mich noch gut an diesen Tag.",
    "Я ещё хорошо помню этот день.",
    "sich erinnern an + Akkusativ",
    "A2"
  ],
  [
    "Wir müssen uns beeilen, sonst verpassen wir den Zug.",
    "Нам нужно поторопиться, иначе опоздаем на поезд.",
    "Возвратный глагол sich beeilen",
    "A2"
  ],
  [
    "Könnten Sie das bitte noch einmal erklären?",
    "Не могли бы Вы объяснить это ещё раз?",
    "Вежливый Konjunktiv II: könnten",
    "A2"
  ],
  [
    "Ich würde gern besser Deutsch sprechen können.",
    "Я бы хотел уметь лучше говорить по-немецки.",
    "Конструкция würde + инфинитив",
    "A2"
  ],
  [
    "Sie arbeitet seit drei Jahren als Programmiererin.",
    "Она работает уже три года программистом.",
    "seit + настоящее время (Präsens)",
    "A2"
  ],
  [
    "Kannst du mir dein Wörterbuch für morgen leihen?",
    "Можешь одолжить мне свой словарь на завтра?",
    "Dativ (mir) + Akkusativ (dein Wörterbuch)",
    "A2"
  ],
  [
    "Wir haben uns um sechs vor dem Theater getroffen.",
    "Мы встретились в шесть перед театром.",
    "Perfekt возвратного глагола: haben uns getroffen",
    "A2"
  ],
  [
    "Bitte schalten Sie im Unterricht das Handy aus!",
    "Пожалуйста, выключите телефон на уроке!",
    "ausschalten -> schalten ... aus",
    "A2"
  ],
  [
    "Vergiss nicht, die wichtigen Dateien zu speichern!",
    "Не забудь сохранить важные файлы!",
    "Инфинитивный оборот zu + speichern",
    "A2"
  ],
  [
    "Er bereitet sich jeden Abend auf die Prüfung vor.",
    "Он каждый вечер готовится к экзамену.",
    "sich vorbereiten auf",
    "A2"
  ],
  [
    "Die Kunden sind mit dem schnellen Service zufrieden.",
    "Клиенты довольны быстрым обслуживанием.",
    "zufrieden mit + Dativ",
    "A2"
  ],
  [
    "Ich schlage vor, dass wir eine Pause machen.",
    "Я предлагаю нам сделать перерыв.",
    "dass -> machen в конце",
    "A2"
  ],
  [
    "Hätten Sie morgen Vormittag kurz Zeit für ein Gespräch?",
    "Не нашлось бы у Вас завтра до обеда времени для беседы?",
    "Konjunktiv II: hätten",
    "A2"
  ],
  [
    "Wir ziehen nächsten Monat in eine ruhige Straße um.",
    "В следующем месяце мы переезжаем на тихую улицу.",
    "umziehen (в знач. переезжать) -> um",
    "A2"
  ],
  [
    "Auf dem Markt kaufe ich immer frisches Gemüse ein.",
    "На рынке я всегда закупаю свежие овощи.",
    "einkaufen -> kaufe ... ein",
    "A2"
  ],
  [
    "Welche Größe tragen Sie bei Schuhen?",
    "Какой размер обуви Вы носите?",
    "Вопросительное слово welche",
    "A2"
  ],
  [
    "Entschuldigen Sie bitte, dass ich zu spät bin.",
    "Извините, пожалуйста, что я опоздал.",
    "dass -> bin в конце",
    "A2"
  ],
  [
    "Obwohl es den ganzen Tag regnete, gingen wir wandern.",
    "Хотя весь день шёл дождь, мы пошли в поход.",
    "obwohl -> глагол в конец, главное с глагола",
    "B1"
  ],
  [
    "Während des Kurses sprechen wir ausschließlich Deutsch.",
    "Во время курса мы говорим исключительно по-немецки.",
    "während + Genitiv (des Kurses)",
    "B1"
  ],
  [
    "Trotz des kalten Windes sitzen wir auf dem Balkon.",
    "Несмотря на холодный ветер, мы сидим на балконе.",
    "trotz + Genitiv (des ... Windes)",
    "B1"
  ],
  [
    "Meiner Meinung nach ist tägliches Hören sehr effektiv.",
    "По моему мнению, ежедневное слушание очень эффективно.",
    "Выражение мнения + глагол ist на 2-м месте",
    "B1"
  ],
  [
    "Je mehr man liest, desto schneller wächst der Wortschatz.",
    "Чем больше читаешь, тем быстрее растёт словарный запас.",
    "Парный союз je ..., desto ...",
    "B1"
  ],
  [
    "Ich lerne regelmäßig, um meine Ziele zu erreichen.",
    "Я учусь регулярно, чтобы достичь своих целей.",
    "Целевой оборот um ... zu + Infinitiv",
    "B1"
  ],
  [
    "Anstatt fernzusehen, übt er zwanzig Minuten Vokabeln.",
    "Вместо того чтобы смотреть телевизор, он 20 минут учит слова.",
    "Оборот anstatt ... zu (внутрь отд. глагола)",
    "B1"
  ],
  [
    "Das ist der Film, den wir gestern gesehen haben.",
    "Это тот фильм, который мы вчера смотрели.",
    "Относительное местоимение Akk. м.р.: den",
    "B1"
  ],
  [
    "Die Frau, mit der ich gesprochen habe, ist Ärztin.",
    "Женщина, с которой я говорил, — врач.",
    "Относительное местоимение mit + der (Dativ)",
    "B1"
  ],
  [
    "Es ist wichtig, aus eigenen Fehlern zu lernen.",
    "Важно учиться на собственных ошибках.",
    "Инфинитивная группа с zu",
    "B1"
  ],
  [
    "Der Vertrag muss bis Ende der Woche unterschrieben werden.",
    "Договор должен быть подписан до конца недели.",
    "Пассив с модальным: muss ... unterschrieben werden",
    "B1"
  ],
  [
    "Diese Übung wurde speziell für Anfänger entwickelt.",
    "Это упражнение было разработано специально для начинающих.",
    "Präteritum Passiv: wurde entwickelt",
    "B1"
  ],
  [
    "Nachdem ich gefrühstückt hatte, begann ich mit dem Lernen.",
    "После того как я позавтракал, я начал учёбу.",
    "nachdem + Plusquamperfekt",
    "B1"
  ],
  [
    "Ich habe nicht nur ein Buch gekauft, sondern auch ein Heft.",
    "Я купил не только книгу, но и тетрадь.",
    "Парный союз nicht nur ..., sondern auch ...",
    "B1"
  ],
  [
    "Einerseits ist die Stadt laut, andererseits bietet sie viele Chancen.",
    "С одной стороны город шумный, с другой — даёт много шансов.",
    "Парный союз einerseits ..., andererseits ...",
    "B1"
  ],
  [
    "Ich bin davon überzeugt, dass du es schaffen wirst.",
    "Я убеждён в том, что у тебя всё получится.",
    "Местоименное наречие davon + dass",
    "B1"
  ],
  [
    "Es lohnt sich, jeden Tag zwei Stunden zu trainieren.",
    "Имеет смысл тренироваться каждый день по два часа.",
    "Возвратное es lohnt sich + zu",
    "B1"
  ],
  [
    "Könnten Sie mir bitte mitteilen, wann die Prüfung stattfindet?",
    "Не могли бы Вы сообщить мне, когда состоится экзамен?",
    "Косвенный вопрос с wann -> глагол в конце",
    "B1"
  ],
  [
    "Die Aufgabe ist mir am Ende doch noch gelungen.",
    "Задача мне в конце концов всё-таки удалась.",
    "gelingen с sein + Dativ (mir)",
    "B1"
  ],
  [
    "Mit genügend Geduld erreicht man jedes sprachliche Niveau.",
    "При достаточном терпении достигаешь любого языкового уровня.",
    "Обобщающее подлежащее man",
    "B1"
  ]
];

export const VERBS: VerbItem[] = [
  {
    "inf": "sein",
    "ru": "быть",
    "pr": [
      "bin",
      "bist",
      "ist",
      "sind",
      "seid",
      "sind"
    ],
    "pf": "ist gewesen",
    "pt": "war",
    "lvl": "A1"
  },
  {
    "inf": "haben",
    "ru": "иметь",
    "pr": [
      "habe",
      "hast",
      "hat",
      "haben",
      "habt",
      "haben"
    ],
    "pf": "hat gehabt",
    "pt": "hatte",
    "lvl": "A1"
  },
  {
    "inf": "werden",
    "ru": "становиться",
    "pr": [
      "werde",
      "wirst",
      "wird",
      "werden",
      "werdet",
      "werden"
    ],
    "pf": "ist geworden",
    "pt": "wurde",
    "lvl": "A1"
  },
  {
    "inf": "können",
    "ru": "мочь, уметь",
    "pr": [
      "kann",
      "kannst",
      "kann",
      "können",
      "könnt",
      "können"
    ],
    "pf": "hat gekonnt",
    "pt": "konnte",
    "lvl": "A1"
  },
  {
    "inf": "müssen",
    "ru": "быть должным",
    "pr": [
      "muss",
      "musst",
      "muss",
      "müssen",
      "müsst",
      "müssen"
    ],
    "pf": "hat gemusst",
    "pt": "musste",
    "lvl": "A1"
  },
  {
    "inf": "wollen",
    "ru": "хотеть",
    "pr": [
      "will",
      "willst",
      "will",
      "wollen",
      "wollt",
      "wollen"
    ],
    "pf": "hat gewollt",
    "pt": "wollte",
    "lvl": "A1"
  },
  {
    "inf": "dürfen",
    "ru": "иметь разрешение",
    "pr": [
      "darf",
      "darfst",
      "darf",
      "dürfen",
      "dürft",
      "dürfen"
    ],
    "pf": "hat gedurft",
    "pt": "durfte",
    "lvl": "A1"
  },
  {
    "inf": "sollen",
    "ru": "следовать",
    "pr": [
      "soll",
      "sollst",
      "soll",
      "sollen",
      "sollt",
      "sollen"
    ],
    "pf": "hat gesollt",
    "pt": "sollte",
    "lvl": "A1"
  },
  {
    "inf": "mögen",
    "ru": "любить, нравиться",
    "pr": [
      "mag",
      "magst",
      "mag",
      "mögen",
      "mögt",
      "mögen"
    ],
    "pf": "hat gemocht",
    "pt": "mochte",
    "lvl": "A1"
  },
  {
    "inf": "machen",
    "ru": "делать",
    "pr": [
      "mache",
      "machst",
      "macht",
      "machen",
      "macht",
      "machen"
    ],
    "pf": "hat gemacht",
    "pt": "machte",
    "lvl": "A1"
  },
  {
    "inf": "gehen",
    "ru": "идти",
    "pr": [
      "gehe",
      "gehst",
      "geht",
      "gehen",
      "geht",
      "gehen"
    ],
    "pf": "ist gegangen",
    "pt": "ging",
    "lvl": "A1"
  },
  {
    "inf": "kommen",
    "ru": "приходить",
    "pr": [
      "komme",
      "kommst",
      "kommt",
      "kommen",
      "kommt",
      "kommen"
    ],
    "pf": "ist gekommen",
    "pt": "kam",
    "lvl": "A1"
  },
  {
    "inf": "wohnen",
    "ru": "жить (по адресу)",
    "pr": [
      "wohne",
      "wohnst",
      "wohnt",
      "wohnen",
      "wohnt",
      "wohnen"
    ],
    "pf": "hat gewohnt",
    "pt": "wohnte",
    "lvl": "A1"
  },
  {
    "inf": "arbeiten",
    "ru": "работать",
    "pr": [
      "arbeite",
      "arbeitest",
      "arbeitet",
      "arbeiten",
      "arbeitet",
      "arbeiten"
    ],
    "pf": "hat gearbeitet",
    "pt": "arbeitete",
    "lvl": "A1"
  },
  {
    "inf": "lernen",
    "ru": "учить",
    "pr": [
      "lerne",
      "lernst",
      "lernt",
      "lernen",
      "lernt",
      "lernen"
    ],
    "pf": "hat gelernt",
    "pt": "lernte",
    "lvl": "A1"
  },
  {
    "inf": "sprechen",
    "ru": "говорить",
    "pr": [
      "spreche",
      "sprichst",
      "spricht",
      "sprechen",
      "sprecht",
      "sprechen"
    ],
    "pf": "hat gesprochen",
    "pt": "sprach",
    "lvl": "A1"
  },
  {
    "inf": "essen",
    "ru": "есть, кушать",
    "pr": [
      "esse",
      "isst",
      "isst",
      "essen",
      "esst",
      "essen"
    ],
    "pf": "hat gegessen",
    "pt": "aß",
    "lvl": "A1"
  },
  {
    "inf": "trinken",
    "ru": "пить",
    "pr": [
      "trinke",
      "trinkst",
      "trinkt",
      "trinken",
      "trinkt",
      "trinken"
    ],
    "pf": "hat getrunken",
    "pt": "trank",
    "lvl": "A1"
  },
  {
    "inf": "schlafen",
    "ru": "спать",
    "pr": [
      "schlafe",
      "schläfst",
      "schläft",
      "schlafen",
      "schlaft",
      "schlafen"
    ],
    "pf": "hat geschlafen",
    "pt": "schlief",
    "lvl": "A1"
  },
  {
    "inf": "lesen",
    "ru": "читать",
    "pr": [
      "lese",
      "liest",
      "liest",
      "lesen",
      "lest",
      "lesen"
    ],
    "pf": "hat gelesen",
    "pt": "las",
    "lvl": "A1"
  },
  {
    "inf": "schreiben",
    "ru": "писать",
    "pr": [
      "schreibe",
      "schreibst",
      "schreibt",
      "schreiben",
      "schreibt",
      "schreiben"
    ],
    "pf": "hat geschrieben",
    "pt": "schrieb",
    "lvl": "A1"
  },
  {
    "inf": "sehen",
    "ru": "видеть",
    "pr": [
      "sehe",
      "siehst",
      "sieht",
      "sehen",
      "seht",
      "sehen"
    ],
    "pf": "hat gesehen",
    "pt": "sah",
    "lvl": "A1"
  },
  {
    "inf": "hören",
    "ru": "слышать, слушать",
    "pr": [
      "höre",
      "hörst",
      "hört",
      "hören",
      "hört",
      "hören"
    ],
    "pf": "hat gehört",
    "pt": "hörte",
    "lvl": "A1"
  },
  {
    "inf": "fahren",
    "ru": "ехать",
    "pr": [
      "fahre",
      "fährst",
      "fährt",
      "fahren",
      "fahrt",
      "fahren"
    ],
    "pf": "ist gefahren",
    "pt": "fuhr",
    "lvl": "A1"
  },
  {
    "inf": "fliegen",
    "ru": "летать",
    "pr": [
      "fliege",
      "fliegst",
      "fliegt",
      "fliegen",
      "fliegt",
      "fliegen"
    ],
    "pf": "ist geflogen",
    "pt": "flog",
    "lvl": "A1"
  },
  {
    "inf": "laufen",
    "ru": "бегать",
    "pr": [
      "laufe",
      "läufst",
      "läuft",
      "laufen",
      "lauft",
      "laufen"
    ],
    "pf": "ist gelaufen",
    "pt": "lief",
    "lvl": "A1"
  },
  {
    "inf": "geben",
    "ru": "давать",
    "pr": [
      "gebe",
      "gibst",
      "gibt",
      "geben",
      "gebt",
      "geben"
    ],
    "pf": "hat gegeben",
    "pt": "gab",
    "lvl": "A1"
  },
  {
    "inf": "nehmen",
    "ru": "брать",
    "pr": [
      "nehme",
      "nimmst",
      "nimmt",
      "nehmen",
      "nehmt",
      "nehmen"
    ],
    "pf": "hat genommen",
    "pt": "nahm",
    "lvl": "A1"
  },
  {
    "inf": "helfen",
    "ru": "помогать",
    "pr": [
      "helfe",
      "hilfst",
      "hilft",
      "helfen",
      "helft",
      "helfen"
    ],
    "pf": "hat geholfen",
    "pt": "half",
    "lvl": "A1"
  },
  {
    "inf": "wissen",
    "ru": "знать (факт)",
    "pr": [
      "weiß",
      "weißt",
      "weiß",
      "wissen",
      "wisst",
      "wissen"
    ],
    "pf": "hat gewusst",
    "pt": "wusste",
    "lvl": "A1"
  },
  {
    "inf": "kennen",
    "ru": "знать (быть знакомым)",
    "pr": [
      "kenne",
      "kennst",
      "kennt",
      "kennen",
      "kennt",
      "kennen"
    ],
    "pf": "hat gekannt",
    "pt": "kannte",
    "lvl": "A1"
  },
  {
    "inf": "finden",
    "ru": "находить",
    "pr": [
      "finde",
      "findest",
      "findet",
      "finden",
      "findet",
      "finden"
    ],
    "pf": "hat gefunden",
    "pt": "fand",
    "lvl": "A1"
  },
  {
    "inf": "bleiben",
    "ru": "оставаться",
    "pr": [
      "bleibe",
      "bleibst",
      "bleibt",
      "bleiben",
      "bleibt",
      "bleiben"
    ],
    "pf": "ist geblieben",
    "pt": "blieb",
    "lvl": "A1"
  },
  {
    "inf": "stehen",
    "ru": "стоять",
    "pr": [
      "stehe",
      "stehst",
      "steht",
      "stehen",
      "steht",
      "stehen"
    ],
    "pf": "hat gestanden",
    "pt": "stand",
    "lvl": "A1"
  },
  {
    "inf": "liegen",
    "ru": "лежать",
    "pr": [
      "liege",
      "liegst",
      "liegt",
      "liegen",
      "liegt",
      "liegen"
    ],
    "pf": "hat gelegen",
    "pt": "lag",
    "lvl": "A1"
  },
  {
    "inf": "sitzen",
    "ru": "сидеть",
    "pr": [
      "sitze",
      "sitzt",
      "sitzt",
      "sitzen",
      "sitzt",
      "sitzen"
    ],
    "pf": "hat gesessen",
    "pt": "saß",
    "lvl": "A1"
  },
  {
    "inf": "kaufen",
    "ru": "покупать",
    "pr": [
      "kaufe",
      "kaufst",
      "kauft",
      "kaufen",
      "kauft",
      "kaufen"
    ],
    "pf": "hat gekauft",
    "pt": "kaufte",
    "lvl": "A1"
  },
  {
    "inf": "tragen",
    "ru": "носить, нести",
    "pr": [
      "trage",
      "trägst",
      "trägt",
      "tragen",
      "tragt",
      "tragen"
    ],
    "pf": "hat getragen",
    "pt": "trug",
    "lvl": "A1"
  },
  {
    "inf": "waschen",
    "ru": "мыть, стирать",
    "pr": [
      "wasche",
      "wäschst",
      "wäscht",
      "waschen",
      "wascht",
      "waschen"
    ],
    "pf": "hat gewaschen",
    "pt": "wusch",
    "lvl": "A1"
  },
  {
    "inf": "treffen",
    "ru": "встречать",
    "pr": [
      "treffe",
      "triffst",
      "trifft",
      "treffen",
      "trefft",
      "treffen"
    ],
    "pf": "hat getroffen",
    "pt": "traf",
    "lvl": "A2"
  },
  {
    "inf": "vergessen",
    "ru": "забывать",
    "pr": [
      "vergesse",
      "vergisst",
      "vergisst",
      "vergessen",
      "vergesst",
      "vergessen"
    ],
    "pf": "hat vergessen",
    "pt": "vergaß",
    "lvl": "A2"
  },
  {
    "inf": "verstehen",
    "ru": "понимать",
    "pr": [
      "verstehe",
      "verstehst",
      "versteht",
      "verstehen",
      "versteht",
      "verstehen"
    ],
    "pf": "hat verstanden",
    "pt": "verstand",
    "lvl": "A1"
  },
  {
    "inf": "bekommen",
    "ru": "получать",
    "pr": [
      "bekomme",
      "bekommst",
      "bekommt",
      "bekommen",
      "bekommt",
      "bekommen"
    ],
    "pf": "hat bekommen",
    "pt": "bekam",
    "lvl": "A1"
  },
  {
    "inf": "bringen",
    "ru": "приносить",
    "pr": [
      "bringe",
      "bringst",
      "bringt",
      "bringen",
      "bringt",
      "bringen"
    ],
    "pf": "hat gebracht",
    "pt": "brachte",
    "lvl": "A1"
  },
  {
    "inf": "denken",
    "ru": "думать",
    "pr": [
      "denke",
      "denkst",
      "denkt",
      "denken",
      "denkt",
      "denken"
    ],
    "pf": "hat gedacht",
    "pt": "dachte",
    "lvl": "A2"
  },
  {
    "inf": "bitten",
    "ru": "просить",
    "pr": [
      "bitte",
      "bittest",
      "bittet",
      "bitten",
      "bittet",
      "bitten"
    ],
    "pf": "hat gebeten",
    "pt": "bat",
    "lvl": "A2"
  },
  {
    "inf": "empfehlen",
    "ru": "рекомендовать",
    "pr": [
      "empfehle",
      "empfiehlst",
      "empfiehlt",
      "empfehlen",
      "empfehlt",
      "empfehlen"
    ],
    "pf": "hat empfohlen",
    "pt": "empfahl",
    "lvl": "A2"
  },
  {
    "inf": "gewinnen",
    "ru": "выигрывать",
    "pr": [
      "gewinne",
      "gewinnst",
      "gewinnt",
      "gewinnen",
      "gewinnt",
      "gewinnen"
    ],
    "pf": "hat gewonnen",
    "pt": "gewann",
    "lvl": "A2"
  },
  {
    "inf": "verlieren",
    "ru": "терять, проигрывать",
    "pr": [
      "verliere",
      "verlierst",
      "verliert",
      "verlieren",
      "verliert",
      "verlieren"
    ],
    "pf": "hat verloren",
    "pt": "verlor",
    "lvl": "A2"
  },
  {
    "inf": "einladen",
    "ru": "приглашать",
    "pr": [
      "lade ein",
      "lädst ein",
      "lädt ein",
      "laden ein",
      "ladet ein",
      "laden ein"
    ],
    "pf": "hat eingeladen",
    "pt": "lud ein",
    "lvl": "A2"
  },
  {
    "inf": "anfangen",
    "ru": "начинать",
    "pr": [
      "fange an",
      "fängst an",
      "fängt an",
      "fangen an",
      "fangt an",
      "fangen an"
    ],
    "pf": "hat angefangen",
    "pt": "fing an",
    "lvl": "A2"
  },
  {
    "inf": "aufstehen",
    "ru": "вставать",
    "pr": [
      "stehe auf",
      "stehst auf",
      "steht auf",
      "stehen auf",
      "steht auf",
      "stehen auf"
    ],
    "pf": "ist aufgestanden",
    "pt": "stand auf",
    "lvl": "A1"
  }
];

export const STORIES: StoryItem[] = [
  {
    "title": "Мой день в Берлине",
    "level": "A1",
    "topic": "Повседневная жизнь",
    "text_lines": [
      [
        "Hallo! Ich heiße Timur und wohne seit drei Monaten in Berlin.",
        "ха́ло! их ха́йсэ ти́мур унт во́нэ зайт драй мо́натэн ин берли́н.",
        "Привет! Меня зовут Тимур, и я уже три месяца живу в Берлине."
      ],
      [
        "Jeden Morgen stehe ich um sieben Uhr auf und trinke eine Tasse Kaffee.",
        "е́дэн мо́ргэн штэ́э их ум зи́бен ур ауф унт три́нкэ а́йнэ та́ссэ ка́фе.",
        "Каждое утро я встаю в семь часов и пью чашку кофе."
      ],
      [
        "Um acht Uhr fahre ich mit der U-Bahn zur Sprachschule.",
        "ум ахт ур фа́рэ их мит дер у́-бан цур шпра́хшулэ.",
        "В восемь часов я еду на метро в языковую школу."
      ],
      [
        "Der Unterricht dauert bis zwölf Uhr, danach esse ich mit Freunden in der Mensa.",
        "дер у́нтеррихт да́уэрт бис цвёльф ур, дана́х э́ссэ их мит фро́йндэн ин дер мэ́нза.",
        "Занятия длятся до двенадцати часов, потом я ем с друзьями в столовой."
      ],
      [
        "Am Abend lerne ich noch zwei Stunden Vokabeln und höre deutsche Podcasts.",
        "ам а́бэнд ле́рнэ их нох цвай шту́ндэн вока́бельн унт хё́рэ до́йче по́дкастс.",
        "Вечером я ещё два часа учу слова и слушаю немецкие подкасты."
      ]
    ],
    "questions": [
      [
        "Wie lange wohnt Timur schon in Berlin?",
        "Seit drei Monaten",
        [
          "Seit drei Wochen",
          "Seit drei Monaten",
          "Seit einem Jahr"
        ]
      ],
      [
        "Womit fährt Timur zur Schule?",
        "Mit der U-Bahn",
        [
          "Mit dem Bus",
          "Mit dem Auto",
          "Mit der U-Bahn"
        ]
      ],
      [
        "Was macht Timur am Abend?",
        "Er lernt Vokabeln und hört Podcasts",
        [
          "Er schaut fern",
          "Er arbeitet im Büro",
          "Er lernt Vokabeln und hört Podcasts"
        ]
      ]
    ]
  },
  {
    "title": "В немецком кафе",
    "level": "A1",
    "topic": "Еда и заказы",
    "text_lines": [
      [
        "Kellner: Guten Tag! Was darf ich Ihnen bringen?",
        "кэ́льнер: гу́тен таг! вас дарф их и́нен бри́нген?",
        "Официант: Добрый день! Что Вам принести?"
      ],
      [
        "Lisa: Guten Tag! Ich hätte gern ein Käsebrot und einen Orangensaft.",
        "ли́за: гу́тен таг! их хэ́ттэ герн айн кэ́зэброт унт а́йнен ора́нжензафт.",
        "Лиза: Добрый день! Я бы хотела бутерброд с сыром и апельсиновый сок."
      ],
      [
        "Kellner: Sehr gern. Möchten Sie auch einen Kaffee?",
        "кэ́льнер: зэр герн. мё́хтэн зи аух а́йнен ка́фе?",
        "Официант: С удовольствием. Хотите также кофе?"
      ],
      [
        "Lisa: Ja, einen Cappuccino mit Hafermilch, bitte. Und gleich die Rechnung!",
        "ли́за: я, а́йнен капучи́но мит ха́фермильх, би́ттэ. унт гляйх ди рэ́хнунг!",
        "Лиза: Да, капучино с овсяным молоком, пожалуйста. И сразу счёт!"
      ],
      [
        "Kellner: Das macht zusammen elf Euro fünfzig.",
        "кэ́льнер: дас махт цуза́ммен эльф о́йро фю́нфциг.",
        "Официант: С Вас вместе одиннадцать евро пятьдесят центов."
      ]
    ],
    "questions": [
      [
        "Was bestellt Lisa zu essen?",
        "Ein Käsebrot",
        [
          "Eine Suppe",
          "Ein Käsebrot",
          "Einen Apfelkuchen"
        ]
      ],
      [
        "Welche Milch möchte Lisa im Cappuccino?",
        "Hafermilch",
        [
          "Kuhmilch",
          "Hafermilch",
          "Keine Milch"
        ]
      ],
      [
        "Wie viel kostet alles zusammen?",
        "11,50 Euro",
        [
          "10,50 Euro",
          "11,50 Euro",
          "12,00 Euro"
        ]
      ]
    ]
  },
  {
    "title": "Поиск дороги к вокзалу",
    "level": "A1",
    "topic": "Город и транспорт",
    "text_lines": [
      [
        "Max: Entschuldigung, können Sie mir helfen? Ich suche den Hauptbahnhof.",
        "макс: энтшу́льдигунг, кё́ннэн зи мир хе́льфен? их зу́хэ дэн ха́уптбанхоф.",
        "Макс: Извините, Вы не поможете? Я ищу главный вокзал."
      ],
      [
        "Passant: Ja, natürlich! Gehen Sie hier immer geradeaus bis zur großen Ampel.",
        "пасса́нт: я, натю́рлих! ге́эн зи хир и́ммер гера́дэ-аус бис цур гро́сэн а́мпель.",
        "Прохожий: Да, конечно! Идите здесь всё время прямо до большого светофора."
      ],
      [
        "Max: Und dann links oder rechts?",
        "макс: унт данн линкс о́дэр рехтс?",
        "Макс: А потом налево или направо?"
      ],
      [
        "Passant: An der Ampel biegen Sie links ab. Nach zweihundert Metern sehen Sie rechts ein großes Gebäude.",
        "пасса́нт: ан дер а́мпель би́ген зи линкс ап. нах цва́йхундэрт мэ́тэрн зэ́эн зи рехтс айн гро́сэс гебо́йдэ.",
        "Прохожий: На светофоре поверните налево. Через 200 метров справа увидите большое здание."
      ],
      [
        "Max: Vielen Dank! Dauert es zu Fuß lange?",
        "макс: фи́лен данк! да́уэрт эс цу фус ля́нгэ?",
        "Макс: Большое спасибо! Пешком это долго?"
      ],
      [
        "Passant: Nein, nur etwa fünf Minuten.",
        "пасса́нт: найн, нур э́тва фюнф мину́тэн.",
        "Прохожий: Нет, всего около пяти минут."
      ]
    ],
    "questions": [
      [
        "Was sucht Max?",
        "Den Hauptbahnhof",
        [
          "Das Museum",
          "Den Hauptbahnhof",
          "Das Hotel"
        ]
      ],
      [
        "Wo muss Max links abbiegen?",
        "An der großen Ampel",
        [
          "Vor dem Park",
          "An der großen Ampel",
          "Nach dem Bahnhof"
        ]
      ],
      [
        "Wie lange dauert der Weg zu Fuß?",
        "Etwa fünf Minuten",
        [
          "Zwanzig Minuten",
          "Eine halbe Stunde",
          "Etwa fünf Minuten"
        ]
      ]
    ]
  },
  {
    "title": "Покупка зимней куртки",
    "level": "A1",
    "topic": "Магазин и одежда",
    "text_lines": [
      [
        "Verkäuferin: Guten Tag, kann ich Ihnen helfen?",
        "ферко́йферин: гу́тен таг, канн их и́нен хе́льфен?",
        "Продавец: Добрый день, могу я Вам помочь?"
      ],
      [
        "Lena: Ja, ich brauche eine warme Winterjacke.",
        "ле́на: я, их бра́ухэ а́йнэ ва́рмэ ви́нтэрякэ.",
        "Лена: Да, мне нужна тёплая зимняя куртка."
      ],
      [
        "Verkäuferin: Welche Größe tragen Sie und welche Farbe mögen Sie?",
        "ферко́йферин: ве́льхэ грё́сэ тра́ген зи унт ве́льхэ фа́рбэ мё́ген зи?",
        "Продавец: Какой размер вы носите и какой цвет любите?"
      ],
      [
        "Lena: Ich trage Größe M und mag Dunkelblau oder Schwarz.",
        "ле́на: их тра́гэ грё́сэ эм унт маг ду́нкельблау о́дэр шварц.",
        "Лена: Я ношу размер M и люблю тёмно-синий или чёрный."
      ],
      [
        "Verkäuferin: Probieren Sie mal diese blaue Jacke an. Sie ist heute im Angebot für 69 Euro.",
        "ферко́йферин: проби́рен зи маль ди́зэ бля́уэ я́кэ ан. зи ист хо́йтэ им а́нгэбот фюр нойнундзэ́хьциг о́йро.",
        "Продавец: Примерьте вот эту синюю куртку. Она сегодня по акции за 69 евро."
      ],
      [
        "Lena: Sie passt super und ist sehr bequem! Ich nehme sie.",
        "ле́на: зи паст зу́пер унт ист зэр беквэ́м! их нэ́мэ зи.",
        "Лена: Она отлично сидит и очень удобная! Я её беру."
      ]
    ],
    "questions": [
      [
        "Was möchte Lena kaufen?",
        "Eine Winterjacke",
        [
          "Einen Sommerhut",
          "Eine Winterjacke",
          "Neue Schuhe"
        ]
      ],
      [
        "Welche Größe trägt Lena?",
        "M",
        [
          "S",
          "M",
          "L"
        ]
      ],
      [
        "Wie viel kostet die Jacke heute?",
        "69 Euro",
        [
          "96 Euro",
          "69 Euro",
          "59 Euro"
        ]
      ]
    ]
  },
  {
    "title": "Письмо другу из поездки",
    "level": "A1",
    "topic": "Путешествия и переписка",
    "text_lines": [
      [
        "Lieber Paul, viele Grüße aus München!",
        "ли́бер па́уль, фи́лэ грю́сэ аус мю́нхен!",
        "Дорогой Пауль, большой привет из Мюнхена!"
      ],
      [
        "Ich bin am Freitag mit dem Zug hierher gefahren.",
        "их бин ам фра́йтаг мит дэм цуг хи́рхэр гефа́рэн.",
        "В пятницу я приехал сюда на поезде."
      ],
      [
        "Das Wetter ist herrlich: Die Sonne scheint und es sind 22 Grad.",
        "дас вэ́ттэр ист хэ́рлих: ди зо́ннэ шайнт унд эс зинд цва́йундцванциг град.",
        "Погода изумительная: светит солнце и 22 градуса."
      ],
      [
        "Gestern habe ich das Deutsche Museum besucht und im Englischen Garten spaziert.",
        "ге́стерн ха́бэ их дас до́йче музэ́ум безу́хт унд им э́нглишен га́ртэн шпаци́рт.",
        "Вчера я посетил Немецкий музей и погулял в Английском саду."
      ],
      [
        "Am Montag komme ich zurück, dann treffen wir uns! Viele Grüße, Lukas.",
        "ам мо́нтаг ко́ммэ их цурю́к, данн трэ́ффен вир унс! фи́лэ грю́сэ, лю́кас.",
        "В понедельник я возвращаюсь, тогда увидимся! С приветом, Лукас."
      ]
    ],
    "questions": [
      [
        "Wie ist Lukas nach München gereist?",
        "Mit dem Zug",
        [
          "Mit dem Flugzeug",
          "Mit dem Zug",
          "Mit dem Auto"
        ]
      ],
      [
        "Wie ist das Wetter in München?",
        "Sonnig und 22 Grad",
        [
          "Kalt und regnerisch",
          "Sonnig und 22 Grad",
          "Bewölkt"
        ]
      ],
      [
        "Wann kommt Lukas zurück?",
        "Am Montag",
        [
          "Am Freitag",
          "Am Sonntag",
          "Am Montag"
        ]
      ]
    ]
  },
  {
    "title": "Квартира моей мечты",
    "level": "A2",
    "topic": "Жильё и переезд",
    "text_lines": [
      [
        "Seit letzter Woche wohne ich in meiner neuen Wohnung.",
        "зайт ле́тцтэр во́хэ во́нэ их ин ма́йнер но́йен во́нунг.",
        "С прошлой недели я живу в своей новой квартире."
      ],
      [
        "Sie liegt im dritten Stock, aber es gibt zum Glück einen Aufzug.",
        "зи лигт им дри́ттэн шток, а́бер эс гибт цум глюк а́йнен а́уфцуг.",
        "Она на третьем этаже, но, к счастью, есть лифт."
      ],
      [
        "Die Wohnung hat drei helle Zimmer, eine moderne Küche und einen kleinen Balkon.",
        "ди во́нунг хат драй хэ́лле ци́ммер, а́йнэ модэ́рнэ кю́хэ унт а́йнен кля́йнен балько́н.",
        "В квартире три светлые комнаты, современная кухня и маленький балкон."
      ],
      [
        "Am besten gefällt mir das Wohnzimmer, weil dort den ganzen Nachmittag die Sonne scheint.",
        "ам бэ́стэн гефэ́льт мир дас во́нциммер, вайль дорт дэн га́нцэн на́хмиттаг ди зо́ннэ шайнт.",
        "Больше всего мне нравится гостиная, потому что там весь вечер светит солнце."
      ],
      [
        "Die Miete ist zwar etwas hoch, aber die Lage im Zentrum ist perfekt.",
        "ди ми́тэ ист цвар э́твас хох, а́бер ди ля́гэ им цэ́нтрум ист перфэ́кт.",
        "Аренда, правда, немного высокая, зато расположение в центре идеальное."
      ]
    ],
    "questions": [
      [
        "In welchem Stock liegt die Wohnung?",
        "Im dritten Stock",
        [
          "Im ersten Stock",
          "Im dritten Stock",
          "Im Keller"
        ]
      ],
      [
        "Warum gefällt dem Autor das Wohnzimmer besonders?",
        "Weil dort nachmittags die Sonne scheint",
        [
          "Weil es sehr groß ist",
          "Weil dort nachmittags die Sonne scheint",
          "Weil es billig ist"
        ]
      ],
      [
        "Wo liegt die Wohnung?",
        "Im Zentrum",
        [
          "Am Stadtrand",
          "Im Zentrum",
          "In einem Dorf"
        ]
      ]
    ]
  },
  {
    "title": "Запись к врачу по телефону",
    "level": "A2",
    "topic": "Здоровье и сервис",
    "text_lines": [
      [
        "Praxis: Praxis Dr. Weber, guten Morgen! Was kann ich für Sie tun?",
        "пра́ксис: пра́ксис до́ктор вэ́бер, гу́тен мо́ргэн! вас канн их фюр зи тун?",
        "Клиника: Кабинет доктора Вебера, доброе утро! Чем могу Вам помочь?"
      ],
      [
        "Patient: Guten Morgen. Ich brauche dringend einen Termin. Ich habe starkes Fieber und Halsschmerzen.",
        "пациэ́нт: гу́тен мо́ргэн. их бра́ухэ дри́нгенд а́йнен терми́н. их ха́бэ шта́ркес фи́бер унт ха́льсшмерцэн.",
        "Пациент: Доброе утро. Мне срочно нужна запись. У меня сильная температура и болит горло."
      ],
      [
        "Praxis: Könnten Sie heute um elf Uhr dreißig vorbeikommen?",
        "пра́ксис: кё́нтэн зи хо́йтэ ум эльф ур дра́йсиг форба́йкоммен?",
        "Клиника: Вы могли бы прийти сегодня в 11:30?"
      ],
      [
        "Patient: Ja, das passt mir gut. Was muss ich mitbringen?",
        "пациэ́нт: я, дас паст мир гут. вас мусс их ми́тбринген?",
        "Пациент: Да, мне это подходит. Что нужно принести с собой?"
      ],
      [
        "Praxis: Bitte bringen Sie Ihre Krankenkassenkarte und Ihren Ausweis mit.",
        "пра́ксис: би́ттэ бри́нген зи и́рэ кра́нкенкассэнкартэ унт и́рэн а́усвайс мит.",
        "Клиника: Пожалуйста, возьмите с собой страховую карточку и паспорт."
      ]
    ],
    "questions": [
      [
        "Welche Beschwerden hat der Patient?",
        "Fieber und Halsschmerzen",
        [
          "Zahnschmerzen",
          "Fieber und Halsschmerzen",
          "Rückenschmerzen"
        ]
      ],
      [
        "Wann ist der Termin?",
        "Um 11:30 Uhr",
        [
          "Um 10:00 Uhr",
          "Um 11:30 Uhr",
          "Morgen früh"
        ]
      ],
      [
        "Was soll der Patient mitbringen?",
        "Krankenkassenkarte und Ausweis",
        [
          "Nur Bargeld",
          "Krankenkassenkarte und Ausweis",
          "Ein altes Rezept"
        ]
      ]
    ]
  },
  {
    "title": "Выходные в горах",
    "level": "A2",
    "topic": "Природа и спорт",
    "text_lines": [
      [
        "Am vergangenen Wochenende haben wir einen Ausflug in die Berge gemacht.",
        "ам ферга́нгенэн во́хенэндэ ха́бен вир а́йнен а́усфлюг ин ди бэ́ргэ гема́хт.",
        "На прошлых выходных мы съездили на экскурсию в горы."
      ],
      [
        "Früh morgens sind wir losgefahren, weil das Wetter perfekt war.",
        "фрю мо́ргэнс зинд вир ло́сгефарэн, вайль дас вэ́ттэр перфэ́кт вар.",
        "Рано утром мы выехали, потому что погода была идеальной."
      ],
      [
        "Wir sind drei Stunden durch den grünen Wald gewandert und haben viele schöne Fotos gemacht.",
        "вир зинд драй шту́ндэн дурх дэн грю́нэн вальд гева́ндэрт унд ха́бен фи́лэ шё́нэ фо́тос гема́хт.",
        "Мы три часа шли по зелёному лесу и сделали много красивых фото."
      ],
      [
        "Oben am See haben wir eine Pause gemacht und unser Picknick gegessen.",
        "о́бен ам зе ха́бен вир а́йнэ па́узэ гема́хт унд у́нзер пи́кник геге́ссен.",
        "Наверху у озера мы сделали привал и съели наш пикник."
      ],
      [
        "Obwohl unsere Beine am Abend müde waren, waren alle sehr glücklich.",
        "опво́ль у́нзерэ ба́йнэ ам а́бэнд мю́дэ ва́рен, ва́рен а́лле зэр глю́клих.",
        "Хотя к вечеру наши ноги устали, все были очень счастливы."
      ]
    ],
    "questions": [
      [
        "Wie lange sind sie gewandert?",
        "Drei Stunden",
        [
          "Eine Stunde",
          "Drei Stunden",
          "Den ganzen Tag"
        ]
      ],
      [
        "Wo haben sie Pause gemacht?",
        "Oben am See",
        [
          "Im Restaurant",
          "Oben am See",
          "Auf dem Bahnhof"
        ]
      ],
      [
        "Wie haben sie sich am Abend gefühlt?",
        "Müde, aber glücklich",
        [
          "Traurig",
          "Müde, aber glücklich",
          "Krank"
        ]
      ]
    ]
  },
  {
    "title": "Собеседование в IT-компанию",
    "level": "A2",
    "topic": "Работа и карьера",
    "text_lines": [
      [
        "Chefin: Guten Tag, Herr Alimow! Schön, dass Sie da sind. Erzählen Sie kurz über sich.",
        "шэ́фин: гу́тен таг, хэр али́мов! шён, дасс зи да зинд. эрцэ́лен зи курц ю́бер зихь.",
        "Руководитель: Добрый день, господин Алимов! Рада, что Вы здесь. Расскажите коротко о себе."
      ],
      [
        "Bewerber: Vielen Dank! Ich bin Informatiker und habe vier Jahre Erfahrung als Programmierer.",
        "бевэ́рбер: фи́лен данк! их бин информа́тикэр унт ха́бэ фир я́рэ эрфа́рунг альс программи́рер.",
        "Кандидат: Спасибо! Я информатик, и у меня 4 года опыта работы программистом."
      ],
      [
        "Chefin: Welche Sprachen sprechen Sie?",
        "шэ́фин: ве́льхэ шпра́хен шпрэ́хен зи?",
        "Руководитель: На каких языках Вы говорите?"
      ],
      [
        "Bewerber: Russisch ist meine Muttersprache, Englisch spreche ich fließend und Deutsch lerne ich jeden Tag intensiv.",
        "бевэ́рбер: ру́ссиш ист ма́йнэ му́ттершпрахэ, э́нглиш шпрэ́хэ их фли́сэнд унт дойч ле́рнэ их е́дэн таг интэнзи́в.",
        "Кандидат: Русский — мой родной, на английском говорю свободно, а немецкий учу каждый день интенсивно."
      ],
      [
        "Chefin: Das klingt super! Wann könnten Sie bei uns anfangen?",
        "шэ́фин: дас клингт зу́пер! ванн кё́нтэн зи бай унс а́нфанген?",
        "Руководитель: Звучит отлично! Когда Вы могли бы начать работать у нас?"
      ]
    ],
    "questions": [
      [
        "Wie viel Berufserfahrung hat der Bewerber?",
        "Vier Jahre",
        [
          "Zwei Jahre",
          "Vier Jahre",
          "Keine Erfahrung"
        ]
      ],
      [
        "Welche Sprache ist seine Muttersprache?",
        "Russisch",
        [
          "Deutsch",
          "Englisch",
          "Russisch"
        ]
      ],
      [
        "Wie gefällt der Chefin das Gespräch?",
        "Sehr gut (es klingt super)",
        [
          "Schlecht",
          "Sehr gut (es klingt super)",
          "Sie weiß es nicht"
        ]
      ]
    ]
  },
  {
    "title": "Потерянный чемодан на вокзале",
    "level": "A2",
    "topic": "Дорога и решение проблем",
    "text_lines": [
      [
        "Entschuldigung, ich habe ein großes Problem!",
        "энтшу́льдигунг, их ха́бэ айн гро́сэс пробле́м!",
        "Извините, у меня большая проблема!"
      ],
      [
        "Ich bin gerade aus dem Zug aus Hamburg ausgestiegen, aber mein blauer Koffer ist noch im Zug.",
        "их бин гера́дэ аус дэм цуг аус ха́мбург а́усгештиген, а́бер майн бля́уэр ко́ффер ист нох им цуг.",
        "Я только что вышел из поезда из Гамбурга, но мой синий чемодан остался в поезде."
      ],
      [
        "Der Mitarbeiter am Schalter sagt: Keine Panik, wir rufen sofort das Fundbüro an.",
        "дер ми́тарбайтер ам ша́льтер загт: ка́йнэ па́ник, вир ру́фен зофо́рт дас фу́ндбюро ан.",
        "Сотрудник на стойке говорит: Без паники, мы сейчас же позвоним в бюро находок."
      ],
      [
        "Zehn Minuten später klingelt das Telefon: Der Koffer wurde an der Endstation gefunden!",
        "цен мину́тэн шпэ́тер кли́нгельт дас тэлэфо́н: дер ко́ффер вурдэ ан дер э́ндштацион гефу́ндэн!",
        "Через десять минут звонит телефон: чемодан нашли на конечной станции!"
      ],
      [
        "Ich bin so erleichtert und danke dem Mitarbeiter herzlich für seine schnelle Hilfe.",
        "их бин зо эрля́йхтерт унд да́нкэ дэм ми́тарбайтер хе́рцлих фюр за́йнэ шнэ́лле хи́льфэ.",
        "Я так облегчён и сердечно благодарю сотрудника за его быструю помощь."
      ]
    ],
    "questions": [
      [
        "Welche Farbe hat der Koffer?",
        "Blau",
        [
          "Schwarz",
          "Rot",
          "Blau"
        ]
      ],
      [
        "Wo wurde der Koffer gefunden?",
        "An der Endstation",
        [
          "Auf dem Bahnsteig",
          "An der Endstation",
          "Im Taxi"
        ]
      ],
      [
        "Wer hat dem Reisenden geholfen?",
        "Der Mitarbeiter am Schalter",
        [
          "Ein Polizist",
          "Der Mitarbeiter am Schalter",
          "Ein Freund"
        ]
      ]
    ]
  },
  {
    "title": "Секрет успеха: правило двух часов",
    "level": "A2",
    "topic": "Обучение и мотивация",
    "text_lines": [
      [
        "Viele Menschen fragen sich, wie man schnell eine neue Sprache lernt.",
        "фи́лэ мэ́ншен фра́ген зихь, ви ман шнэлль а́йнэ но́йе шпра́хэ лернт.",
        "Многие люди задаются вопросом, как быстро выучить новый язык."
      ],
      [
        "Das Geheimnis ist einfach: Regelmäßigkeit ist wichtiger als Talent.",
        "дас геха́ймнис ист а́йнфах: ре́гельмэссихкайт ист ви́хтигер альс талэ́нт.",
        "Секрет прост: регулярность важнее таланта."
      ],
      [
        "Wenn man jeden Tag zwei Stunden konzentriert übt, sieht man schon nach einem Monat große Ergebnisse.",
        "вэнн ман е́дэн таг цвай шту́ндэн концэнтри́рт юбт, зит ман шон нах а́йнэм мо́нат гро́сэ эрге́бниссэ.",
        "Если заниматься каждый день два часа сосредоточенно, уже через месяц видны большие результаты."
      ],
      [
        "Wichtig ist, dass man nicht nur Wörter liest, sondern auch laut mitspricht und Sätze baut.",
        "ви́хтиг ист, дасс ман нихт нур вё́ртер лист, зо́ндэрн аух ляут ми́тшприхт унд зэ́тцэ баут.",
        "Важно не только читать слова, но и повторять вслух и строить предложения."
      ],
      [
        "Aus Fehlern lernt das Gehirn am schnellsten — also habe keine Angst vor dem Sprechen!",
        "аус фэ́лерн лернт дас гехи́рн ам шнэ́льстэн — а́льзо ха́бэ ка́йнэ ангст фор дэм шпрэ́хен!",
        "На ошибках мозг учится быстрее всего — так что не бойся говорить!"
      ]
    ],
    "questions": [
      [
        "Was ist laut dem Text wichtiger als Talent?",
        "Regelmäßigkeit",
        [
          "Teure Bücher",
          "Regelmäßigkeit",
          "Lange Pausen"
        ]
      ],
      [
        "Wie lange sollte man täglich üben?",
        "Zwei Stunden",
        [
          "Zehn Minuten",
          "Zwei Stunden",
          "Einmal pro Woche"
        ]
      ],
      [
        "Wovor sollte man keine Angst haben?",
        "Vor dem Sprechen und Fehlern",
        [
          "Vor dem Lesen",
          "Vor dem Sprechen und Fehlern",
          "Vor dem Kaffee"
        ]
      ]
    ]
  },
  {
    "title": "Оплата в банке и онлайн-перевод",
    "level": "A2",
    "topic": "Финансы и технологии",
    "text_lines": [
      [
        "Heute musste ich zur Bank gehen, weil ich ein neues Konto eröffnen wollte.",
        "хо́йтэ му́стэ их цур банк ге́эн, вайль их айн но́йес ко́нто эр-ё́ффнен во́лльтэ.",
        "Сегодня мне пришлось пойти в банк, потому что я хотел открыть новый счёт."
      ],
      [
        "Der Berater war sehr höflich und hat mir die Online-Banking-App genau erklärt.",
        "дер бера́тэр вар зэр хё́флих унд хат мир ди о́нлайн-бэ́нкинг-эпп гена́у эрклэ́рт.",
        "Консультант был очень вежлив и подробно объяснил мне приложение для онлайн-банкинга."
      ],
      [
        "Jetzt kann ich die Miete und andere Rechnungen bequem vom Handy aus überweisen.",
        "етцт канн их ди ми́тэ унт а́ндэрэ рэ́хнунген беквэ́м фом хэ́нди аус юберва́йзен.",
        "Теперь я могу удобно переводить аренду и другие счета прямо с телефона."
      ],
      [
        "Außerdem bekomme ich automatisch eine Nachricht, wenn mein Gehalt ankommt.",
        "а́усэрдэм беко́ммэ их аутома́тиш а́йнэ на́хрихт, вэнн майн геха́льт а́нкоммт.",
        "Кроме того, я автоматически получаю уведомление, когда приходит зарплата."
      ],
      [
        "Nur beim Passwort muss man immer sehr vorsichtig sein.",
        "нур байм па́ссворт мусс ман и́ммер зэр фо́рзихтиг зайн.",
        "Только с паролем нужно всегда быть очень осторожным."
      ]
    ],
    "questions": [
      [
        "Warum ist der Autor zur Bank gegangen?",
        "Um ein neues Konto zu eröffnen",
        [
          "Um Geld zu leihen",
          "Um ein neues Konto zu eröffnen",
          "Um Briefmarken zu kaufen"
        ]
      ],
      [
        "Womit überweist er jetzt die Miete?",
        "Mit der Online-Banking-App vom Handy",
        [
          "Nur bar am Schalter",
          "Mit der Online-Banking-App vom Handy",
          "Per Brief"
        ]
      ],
      [
        "Worauf muss man besonders achten?",
        "Auf ein sicheres Passwort",
        [
          "Auf die Papierfarbe",
          "Auf ein sicheres Passwort",
          "Auf den Drucker"
        ]
      ]
    ]
  },
  {
    "title": "Празднование дня рождения",
    "level": "A2",
    "topic": "Праздники и традиции",
    "text_lines": [
      [
        "Letzten Samstag hatte meine beste Freundin Sara Geburtstag.",
        "ле́тцтэн за́мстаг ха́ттэ ма́йнэ бэ́стэ фро́йндин за́ра гебу́ртстаг.",
        "В прошлую субботу у моей лучшей подруги Сары был день рождения."
      ],
      [
        "Sie hat zwanzig Gäste in ein gemütliches italienisches Restaurant eingeladen.",
        "зи хат цва́нциг гэ́стэ ин айн гемю́тлихес ита́лиэнишес рэстора́н а́йнгеладэн.",
        "Она пригласила двадцать гостей в уютный итальянский ресторан."
      ],
      [
        "Wir haben für sie gemeinsam eine tolle Überraschung organisiert und eine große Gitarre geschenkt.",
        "вир ха́бен фюр зи гема́йнзам а́йнэ то́лле юберра́шунг организи́рт унд а́йнэ гро́сэ гита́ррэ гешэ́нкт.",
        "Мы вместе организовали для неё отличный сюрприз и подарили гитару."
      ],
      [
        "Sara war total begeistert, weil sie schon lange wieder Musik machen wollte.",
        "за́ра вар тота́ль бега́йстерт, вайль зи шон ля́нгэ ви́дэр музи́к ма́хен во́лльтэ.",
        "Сара была в полном восторге, потому что давно снова хотела заниматься музыкой."
      ],
      [
        "Wir haben viel gelacht, lecker gegessen und bis Mitternacht gefeiert.",
        "вир ха́бен филь геля́хт, ле́кер геге́ссен унд бис ми́ттэрнахт гефа́йерт.",
        "Мы много смеялись, вкусно ели и праздновали до полуночи."
      ]
    ],
    "questions": [
      [
        "Wo hat die Feier stattgefunden?",
        "In einem italienischen Restaurant",
        [
          "Zu Hause im Garten",
          "In einem italienischen Restaurant",
          "Im Park"
        ]
      ],
      [
        "Was haben die Freunde Sara geschenkt?",
        "Eine Gitarre",
        [
          "Ein Buch",
          "Eine Gitarre",
          "Blumen"
        ]
      ],
      [
        "Warum hat sich Sara besonders gefreut?",
        "Weil sie wieder Musik machen wollte",
        [
          "Weil sie Hunger hatte",
          "Weil sie wieder Musik machen wollte",
          "Weil es geregnet hat"
        ]
      ]
    ]
  },
  {
    "title": "Жизнь в городе или в деревне?",
    "level": "B1",
    "topic": "Общество и сравнение",
    "text_lines": [
      [
        "Ob man lieber in der Großstadt oder auf dem Land wohnt, hängt vom Lebensstil ab.",
        "об ман ли́бер ин дер гро́сштат о́дэр ауф дэм ланд вонт, хэнгт фом ле́бенсштиль ап.",
        "Жить ли лучше в мегаполисе или в деревне, зависит от стиля жизни."
      ],
      [
        "Einerseits bietet die Stadt gute Arbeitsplätze, schnelle U-Bahnen und ein reiches Kulturprogramm.",
        "а́йнерзайтс би́тэт ди штат гу́тэ а́рбайтсплэтцэ, шнэ́лле у́-банэн унд айн ра́йхес культу́рпрограмм.",
        "С одной стороны, город предлагает хорошие рабочие места, быстрое метро и богатую культурную программу."
      ],
      [
        "Andererseits sind die Mieten sehr teuer und der Verkehr macht oft Lärm.",
        "а́ндерэрзайтс зинд ди ми́тэн зэр то́йер унд дер феркэ́р махт офт лэрм.",
        "С другой стороны, аренда очень дорогая, а транспорт часто шумит."
      ],
      [
        "Auf dem Land genießt man frische Luft, Ruhe und direkten Kontakt zur Natur.",
        "ауф дэм ланд гени́ст ман фри́шэ люфт, ру́э унд дирэ́ктэн конта́кт цур нату́р.",
        "В деревне наслаждаешься свежим воздухом, тишиной и близостью к природе."
      ],
      [
        "Trotz des längeren Wegs zur Arbeit entscheiden sich heute viele Familien für ein ruhiges Dorf.",
        "тротц дэс ле́нгерэн вегс цур а́рбайт энтша́йдэн зихь хо́йтэ фи́лэ фами́лиен фюр айн ру́игес дорф.",
        "Несмотря на более долгий путь на работу, многие семьи сегодня выбирают тихую деревню."
      ]
    ],
    "questions": [
      [
        "Was ist ein Vorteil der Großstadt?",
        "Gute Arbeitsplätze und Kulturprogramm",
        [
          "Niedrige Mieten",
          "Gute Arbeitsplätze und Kulturprogramm",
          "Weniger Lärm"
        ]
      ],
      [
        "Was schätzen die Menschen auf dem Land?",
        "Frische Luft und Ruhe",
        [
          "Schnelle U-Bahnen",
          "Frische Luft und Ruhe",
          "Viele Kaufhäuser"
        ]
      ],
      [
        "Wovon hängt die Wahl des Wohnorts ab?",
        "Vom Lebensstil",
        [
          "Nur vom Wetter",
          "Vom Lebensstil",
          "Von der Jahreszeit"
        ]
      ]
    ]
  },
  {
    "title": "Новые технологии в изучении языков",
    "level": "B1",
    "topic": "Технологии и образование",
    "text_lines": [
      [
        "Früher brauchte man dicke Wörterbücher und Kassetten, um eine Fremdsprache zu lernen.",
        "фрю́ер бра́ухтэ ман ди́ке вё́ртербухер унт кассэ́тэн, ум а́йнэ фрэ́мдшпрахэ цу ле́рнэн.",
        "Раньше нужны были толстые словари и кассеты, чтобы выучить иностранный язык."
      ],
      [
        "Heute genügen ein Smartphone oder ein Laptop mit guten Übungen.",
        "хо́йтэ геню́ген айн сма́ртфон о́дэр айн лэ́птоп мит гу́тэн ю́бунген.",
        "Сегодня достаточно смартфона или ноутбука с хорошими упражнениями."
      ],
      [
        "Durch digitale Karteikarten wiederholt das Gehirn schwierige Wörter genau zum richtigen Zeitpunkt.",
        "дурх дигита́ле карта́йкартэн видерхо́льт дас гехи́рн шви́ригэ вё́ртер гена́у цум ри́хтиген ца́йтпункт.",
        "Благодаря цифровым карточкам мозг повторяет сложные слова точно в нужный момент."
      ],
      [
        "Außerdem helfen klare Sprachaufnahmen dabei, die deutsche Aussprache von Anfang an sauber zu trainieren.",
        "а́усэрдэм хе́льфен кля́рэ шпра́хауфнамэн даба́й, ди до́йче а́усшпрахэ фон а́нфанг ан за́убер цу трэни́рен.",
        "Кроме того, чёткие аудиозаписи помогают с самого начала чисто тренировать немецкое произношение."
      ],
      [
        "Die beste Methode bleibt jedoch das aktive Üben: Hören, Lesen, Schreiben und selbst Sprechen!",
        "ди бэ́стэ мэто́дэ бляйбт едо́х дас акти́вэ ю́бен: хё́рэн, ле́зэн, шра́йбен унд зе́льбст шпрэ́хен!",
        "Однако лучшим методом остаётся активная практика: слушать, читать, писать и говорить самому!"
      ]
    ],
    "questions": [
      [
        "Was braucht man heute vor allem zum Sprachenlernen?",
        "Smartphone oder Laptop mit Übungen",
        [
          "Nur Kassetten",
          "Smartphone oder Laptop mit Übungen",
          "Ein Faxgerät"
        ]
      ],
      [
        "Wobei helfen digitale Karteikarten?",
        "Wörter im richtigen Moment zu wiederholen",
        [
          "Kaffee zu kochen",
          "Wörter im richtigen Moment zu wiederholen",
          "Tickets zu buchen"
        ]
      ],
      [
        "Welche vier Fähigkeiten bilden die beste Methode?",
        "Hören, Lesen, Schreiben, Sprechen",
        [
          "Schlafen und Essen",
          "Hören, Lesen, Schreiben, Sprechen",
          "Nur Grammatik lesen"
        ]
      ]
    ]
  }
];

export const GRAMMAR_REF: GrammarSheet[] = [
  {
    "id": "phonetics",
    "title": "1. Правила чтения и фонетика",
    "badge": "A1",
    "html": "<p>Немецкое чтение очень системное — почти нет исключений, как в английском:</p>\n    <table class=\"gtbl\">\n      <tr><th>Буквы</th><th>Звук</th><th>Примеры</th></tr>\n      <tr><td><b>ei / ai</b></td><td>ай</td><td>nein, mein, die Zeit</td></tr>\n      <tr><td><b>ie</b></td><td>долгое и</td><td>das Bier, hier, lieben</td></tr>\n      <tr><td><b>eu / äu</b></td><td>ой</td><td>neu, heute, die Häuser</td></tr>\n      <tr><td><b>au</b></td><td>ау</td><td>das Haus, die Frau, auch</td></tr>\n      <tr><td><b>sch</b></td><td>ш</td><td>die Schule, schön, der Tisch</td></tr>\n      <tr><td><b>sp- / st-</b> (в начале)</td><td>шп / шт</td><td>das Spiel, die Stadt, stehen</td></tr>\n      <tr><td><b>ch</b> (после a, o, u, au)</td><td>твёрдое х</td><td>das Buch, die Nacht, auch</td></tr>\n      <tr><td><b>ch</b> (после e, i, ä, ö, ü)</td><td>мягкое хь</td><td>ich, die Milch, das Mädchen</td></tr>\n      <tr><td><b>s</b> (перед гласной)</td><td>з</td><td>sieben, die Suppe, sagen</td></tr>\n      <tr><td><b>ß</b></td><td>сс (после долгой гл.)</td><td>die Straße, heißen, groß</td></tr>\n      <tr><td><b>z / tz</b></td><td>ц</td><td>die Zeit, zehn, der Platz</td></tr>\n      <tr><td><b>v / w</b></td><td>ф / в</td><td>der Vater (ф) / das Wasser (в)</td></tr>\n      <tr><td><b>j</b></td><td>й</td><td>ja, das Jahr, jung</td></tr>\n      <tr><td><b>ä / ö / ü</b></td><td>э / ё(губы о) / ю(губы у)</td><td>der Käse, schön, die Küche</td></tr>\n    </table>"
  },
  {
    "id": "gender",
    "title": "2. Артикли der / die / das — как угадывать род?",
    "badge": "A1–A2",
    "html": "<p>Главный секрет: <b>75% существительных</b> можно определить по суффиксу или смыслу!</p>\n    <div class=\"g-grid\">\n      <div class=\"g-box g-der-box\">\n        <b><span class=\"badge g-der\">der</span> Мужской род</b>\n        <ul>\n          <li>Дни недели, месяцы, времена года (der Montag, der Juli, der Winter)</li>\n          <li>Осадки и стороны света (der Regen, der Schnee, der Norden)</li>\n          <li>Окончания: <b>-er</b> (профессии: der Lehrer), <b>-ling</b>, <b>-ich</b>, <b>-ig</b>, <b>-or</b>, <b>-ismus</b></li>\n          <li>Алкогольные напитки (кроме das Bier): der Wein, der Kaffee</li>\n        </ul>\n      </div>\n      <div class=\"g-box g-die-box\">\n        <b><span class=\"badge g-die\">die</span> Женский род</b>\n        <ul>\n          <li>Окончания: <b>-ung</b> (die Wohnung), <b>-heit / -keit</b> (die Gesundheit), <b>-schaft</b> (die Freundschaft), <b>-tion / -sion</b> (die Situation), <b>-tät</b> (die Universität), <b>-ei</b> (die Bäckerei), <b>-in</b> (проф.: die Ärztin)</li>\n          <li>Большинство слов на <b>-e</b> (~90%): die Lampe, die Straße, die Tasche</li>\n          <li>Цветы, деревья и числа: die Rose, die Eins</li>\n        </ul>\n      </div>\n      <div class=\"g-box g-das-box\">\n        <b><span class=\"badge g-das\">das</span> Средний род</b>\n        <ul>\n          <li>Уменьшительные: <b>-chen</b> (das Mädchen, das Brötchen), <b>-lein</b></li>\n          <li>Глаголы как существительные: <b>das Essen</b>, das Lesen, das Lernen</li>\n          <li>Окончания: <b>-um</b> (das Museum), <b>-ment</b> (das Medikament), <b>-ma</b> (das Thema)</li>\n          <li>Многие слова с приставкой <b>Ge-</b>: das Gebäude, das Gespräch, das Gemüse</li>\n          <li>Цвета, металлы, буквы и отели/кафе: das Rot, das Café, das Hotel</li>\n        </ul>\n      </div>\n    </div>"
  },
  {
    "id": "cases",
    "title": "3. Таблица 4 падежей (Nominativ, Akkusativ, Dativ, Genitiv)",
    "badge": "A1–B1",
    "html": "<p>Выучите эту одну таблицу — и вся немецкая грамматика встанет на место:</p>\n    <table class=\"gtbl\">\n      <tr><th>Падеж (вопрос)</th><th><span class=\"badge g-der\">М.р. (der)</span></th><th><span class=\"badge g-die\">Ж.р. (die)</span></th><th><span class=\"badge g-das\">Ср.р. (das)</span></th><th>Мн. число</th></tr>\n      <tr><td><b>Nominativ</b> (кто? что?)</td><td><b>der / ein</b></td><td><b>die / eine</b></td><td><b>das / ein</b></td><td><b>die / keine</b></td></tr>\n      <tr><td><b>Akkusativ</b> (кого? что? куда?)</td><td><b>den / einen</b></td><td>die / eine</td><td>das / ein</td><td>die / keine</td></tr>\n      <tr><td><b>Dativ</b> (кому? чему? где?)</td><td><b>dem / einem</b></td><td><b>der / einer</b></td><td><b>dem / einem</b></td><td><b>den + n</b></td></tr>\n      <tr><td><b>Genitiv</b> (чей? кого?)</td><td><b>des +(e)s</b></td><td><b>der / einer</b></td><td><b>des +(e)s</b></td><td><b>der</b></td></tr>\n    </table>\n    <p><b>Предлоги только с Akkusativ:</b> <i>durch, für, gegen, ohne, um</i>.<br>\n    <b>Предлоги только с Dativ:</b> <i>aus, bei, mit, nach, seit, von, zu</i>.<br>\n    <b>Двойные предлоги (Wo? → Dativ / Wohin? → Akkusativ):</b> <i>in, an, auf, unter, über, vor, hinter, neben, zwischen</i>.</p>"
  },
  {
    "id": "verbs",
    "title": "4. Времена глаголов: Präsens, Perfekt, Präteritum",
    "badge": "A1–B1",
    "html": "<p><b>1. Präsens (Настоящее):</b> основа + <i>-e, -st, -t, -en, -t, -en</i>. У сильных глаголов в <b>du</b> и <b>er/sie</b> часто меняется гласная (a→ä: fahren/fährt, e→i/ie: sprechen/spricht, lesen/liest).</p>\n    <p><b>2. Perfekt (Разговорное прошедшее):</b> <b>haben / sein</b> (на 2-м месте) + … + <b>Partizip II</b> (в конце).</p>\n    <ul>\n      <li>Правильные: <b>ge-</b> + основа + <b>-t</b> (gemacht, gelernt).</li>\n      <li>Сильные: <b>ge-</b> + основа + <b>-en</b> (gegessen, geschrieben, gefahren).</li>\n      <li>С <b>sein</b>: движение из А в Б (gegangen, gefahren, geflogen) + смена состояния (aufgestanden, eingeschlafen) + sein/bleiben/passieren.</li>\n    </ul>\n    <p><b>3. Präteritum (Письменное прошедшее, а для sein/haben/модальных — разговорное!):</b><br>\n    sein → <b>war</b> | haben → <b>hatte</b> | werden → <b>wurde</b> | können → <b>konnte</b> | müssen → <b>musste</b> | wollen → <b>wollte</b>.</p>"
  },
  {
    "id": "wordorder",
    "title": "5. Порядок слов: V2, Рамка (Satzklammer) и Nebensatz",
    "badge": "A1–B1",
    "html": "<ul>\n      <li><b>Правило №1 (V2):</b> В обычном повествовательном предложении спрягаемый глагол ВСЕГДА стоит строго <b>на 2-м смысловом месте</b>!<br><i>Ich <b>lerne</b> heute Deutsch.</i> / <i>Heute <b>lerne</b> ich Deutsch.</i></li>\n      <li><b>Правило №2 (Рамка / Satzklammer):</b> Вторая часть сказуемого (инфинитив после модального глагола, Partizip II или отделяемая приставка) улетает <b>в самый конец</b>:<br><i>Ich <b>muss</b> heute Abend zwei Stunden <b>üben</b>.</i></li>\n      <li><b>Правило №3 (Порядок внутри предложения Te-Ka-Mo-Lo):</b> Сначала <b>Когда?</b> (Temporal), потом <b>Почему?</b> (Kausal), потом <b>Как?</b> (Modal), в конце <b>Где/Куда?</b> (Lokal).</li>\n      <li><b>Правило №4 (Придаточное с weil, dass, wenn, ob, obwohl):</b> Спрягаемый глагол уходит <b>в самый конец</b>:<br><i>…, weil ich jeden Tag fleißig <b>lerne</b>.</i></li>\n    </ul>"
  },
  {
    "id": "letters",
    "title": "6. Шаблоны писем для экзаменов Goethe A1 / A2",
    "badge": "Экзамен",
    "html": "<p><b>А. Личное письмо другу (du):</b></p>\n    <div class=\"card\" style=\"font-size:14px\">\n      Liebe Anna, / Lieber Max,<br>\n      vielen Dank für deine Nachricht! Ich habe mich sehr gefreut.<br>\n      Am Samstag möchte ich dich gern besuchen. Hast du um 15 Uhr Zeit?<br>\n      Ich bringe einen Kuchen mit.<br>\n      Schreib mir bitte bald!<br>\n      Viele Grüße<br>\n      Daniel\n    </div>\n    <p><b>Б. Официальное письмо (Sie):</b></p>\n    <div class=\"card\" style=\"font-size:14px\">\n      Sehr geehrte Frau Müller, / Sehr geehrter Herr Weber,<br>\n      ich schreibe Ihnen wegen des Termins am Freitag.<br>\n      Leider kann ich um 10 Uhr nicht kommen, weil ich arbeiten muss.<br>\n      Könnten wir den Termin auf Montag verschieben?<br>\n      Vielen Dank im Voraus!<br>\n      Mit freundlichen Grüßen<br>\n      Daniel Alimow\n    </div>"
  }
];
