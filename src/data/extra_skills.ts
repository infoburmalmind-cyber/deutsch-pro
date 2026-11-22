import type {
  CaseDrillItem,
  ExamModule,
  IdiomDrillItem,
  RoleplayDialog,
  VerbPrepItem
} from "../types";

export const VERB_PREPS: VerbPrepItem[] = [
  { verb: "warten", prep: "auf", kasus: "Akkusativ", question: "Ich warte ___ den Bus.", ru: "ждать кого/чего-то", exampleDe: "Ich warte schon zehn Minuten auf den Bus.", exampleRu: "Я уже десять минут жду автобус.", options: ["auf", "an", "für", "über"], lvl: "A1" },
  { verb: "denken", prep: "an", kasus: "Akkusativ", question: "Ich denke oft ___ meine Familie.", ru: "думать о ком/чём-то", exampleDe: "Ich denke oft an meine Familie in Bischkek.", exampleRu: "Я часто думаю о своей семье в Бишкеке.", options: ["an", "auf", "über", "von"], lvl: "A2" },
  { verb: "sich erinnern", prep: "an", kasus: "Akkusativ", question: "Erinnerst du dich ___ diesen Tag?", ru: "вспоминать о", exampleDe: "Ich erinnere mich noch gut an diesen Tag.", exampleRu: "Я ещё хорошо помню этот день.", options: ["an", "über", "auf", "mit"], lvl: "A2" },
  { verb: "sich freuen (будущее)", prep: "auf", kasus: "Akkusativ", question: "Wir freuen uns ___ den Urlaub.", ru: "радоваться предстоящему", exampleDe: "Wir freuen uns sehr auf den Urlaub im Juli.", exampleRu: "Мы с нетерпением ждём отпуска в июле.", options: ["auf", "über", "an", "für"], lvl: "A2" },
  { verb: "sich freuen (прошлое/факт)", prep: "über", kasus: "Akkusativ", question: "Sie freut sich ___ das Geschenk.", ru: "радоваться полученному", exampleDe: "Sie freut sich sehr über das schöne Geschenk.", exampleRu: "Она очень радуется красивому подарку.", options: ["über", "auf", "mit", "nach"], lvl: "A2" },
  { verb: "sich interessieren", prep: "für", kasus: "Akkusativ", question: "Er interessiert sich ___ Musik.", ru: "интересоваться чем-то", exampleDe: "Er interessiert sich besonders für klassische Musik.", exampleRu: "Он особенно интересуется классической музыкой.", options: ["für", "über", "an", "zu"], lvl: "A2" },
  { verb: "sprechen (человек)", prep: "mit", kasus: "Dativ", question: "Ich spreche ___ meiner Lehrerin.", ru: "говорить с кем-то", exampleDe: "Nach dem Unterricht spreche ich mit meiner Lehrerin.", exampleRu: "После урока я поговорю со своей учительницей.", options: ["mit", "über", "zu", "an"], lvl: "A1" },
  { verb: "sprechen (тема)", prep: "über", kasus: "Akkusativ", question: "Wir sprechen ___ das neue Projekt.", ru: "говорить о чём-то", exampleDe: "Im Meeting sprechen wir über das neue Projekt.", exampleRu: "На встрече мы говорим о новом проекте.", options: ["über", "mit", "auf", "nach"], lvl: "A2" },
  { verb: "fragen", prep: "nach", kasus: "Dativ", question: "Der Tourist fragt ___ dem Weg.", ru: "спрашивать о чём-то", exampleDe: "Der Tourist fragt freundlich nach dem Weg zum Bahnhof.", exampleRu: "Турист вежливо спрашивает дорогу к вокзалу.", options: ["nach", "über", "um", "für"], lvl: "A2" },
  { verb: "danken", prep: "für", kasus: "Akkusativ", question: "Ich danke dir ___ deine Hilfe.", ru: "благодарить за", exampleDe: "Vielen Dank für deine schnelle Hilfe!", exampleRu: "Большое спасибо за твою быструю помощь!", options: ["für", "über", "mit", "von"], lvl: "A1" },
  { verb: "bitten", prep: "um", kasus: "Akkusativ", question: "Darf ich Sie ___ einen Rat bitten?", ru: "просить о чём-то", exampleDe: "Ich möchte Sie um einen kurzen Rat bitten.", exampleRu: "Я хотел бы попросить Вас о коротком совете.", options: ["um", "für", "nach", "auf"], lvl: "A2" },
  { verb: "anfangen", prep: "mit", kasus: "Dativ", question: "Wann fangen wir ___ der Übung an?", ru: "начинать с чего-то", exampleDe: "Wir fangen pünktlich um neun mit der Übung an.", exampleRu: "Мы начинаем упражнение ровно в девять.", options: ["mit", "an", "zu", "bei"], lvl: "A2" },
  { verb: "aufhören", prep: "mit", kasus: "Dativ", question: "Es hat ___ dem Regen aufgehört.", ru: "переставать / заканчивать", exampleDe: "Er hat letztes Jahr mit dem Rauchen aufgehört.", exampleRu: "В прошлом году он бросил курить.", options: ["mit", "von", "auf", "aus"], lvl: "A2" },
  { verb: "teilnehmen", prep: "an", kasus: "Dativ", question: "Ich nehme ___ dem Kurs teil.", ru: "участвовать в", exampleDe: "Alle Mitarbeiter nehmen an dem Workshop teil.", exampleRu: "Все сотрудники участвуют в воркшопе.", options: ["an", "in", "auf", "zu"], lvl: "B1" },
  { verb: "einladen", prep: "zu", kasus: "Dativ", question: "Ich lade dich ___ meinem Geburtstag ein.", ru: "приглашать на", exampleDe: "Ich lade dich herzlich zu meiner Party ein.", exampleRu: "Я сердечно приглашаю тебя на мою вечеринку.", options: ["zu", "auf", "in", "für"], lvl: "A1" },
  { verb: "gratulieren", prep: "zu", kasus: "Dativ", question: "Wir gratulieren dir ___ dem Erfolg!", ru: "поздравлять с", exampleDe: "Ich gratuliere dir herzlich zum bestandenen Test!", exampleRu: "Сердечно поздравляю тебя со сдачей теста!", options: ["zu", "für", "mit", "über"], lvl: "A2" },
  { verb: "helfen", prep: "bei", kasus: "Dativ", question: "Hilfst du mir ___ dem Umzug?", ru: "помогать в деле", exampleDe: "Kannst du mir am Samstag beim Umzug helfen?", exampleRu: "Поможешь мне в субботу с переездом?", options: ["bei", "mit", "für", "in"], lvl: "A2" },
  { verb: "arbeiten", prep: "an", kasus: "Dativ", question: "Sie arbeitet ___ einem Roman.", ru: "работать над чем-то", exampleDe: "Seit Monaten arbeitet sie an ihrem ersten Roman.", exampleRu: "Уже несколько месяцев она работает над своим первым романом.", options: ["an", "auf", "über", "mit"], lvl: "B1" },
  { verb: "träumen", prep: "von", kasus: "Dativ", question: "Er träumt ___ einer Weltreise.", ru: "мечтать о", exampleDe: "Viele Menschen träumen von einer großen Weltreise.", exampleRu: "Многие люди мечтают о большом кругосветном путешествии.", options: ["von", "über", "an", "auf"], lvl: "A2" },
  { verb: "erzählen", prep: "von", kasus: "Dativ", question: "Opa erzählt ___ seiner Kindheit.", ru: "рассказывать о", exampleDe: "Meine Oma erzählt oft von ihrer Kindheit.", exampleRu: "Моя бабушка часто рассказывает о своём детстве.", options: ["von", "an", "auf", "mit"], lvl: "A2" },
  { verb: "gehören", prep: "zu", kasus: "Dativ", question: "Wiederholung gehört ___ dem Lernen.", ru: "относиться к", exampleDe: "Geduld gehört unbedingt zum Sprachenlernen.", exampleRu: "Терпение обязательно относится к изучению языков.", options: ["zu", "in", "an", "bei"], lvl: "B1" },
  { verb: "passen", prep: "zu", kasus: "Dativ", question: "Die Krawatte passt ___ dem Hemd.", ru: "подходить к (по стилю)", exampleDe: "Diese Schuhe passen perfekt zu deiner Jeans.", exampleRu: "Эти туфли идеально подходят к твоим джинсам.", options: ["zu", "mit", "an", "für"], lvl: "A2" },
  { verb: "schmecken", prep: "nach", kasus: "Dativ", question: "Die Suppe schmeckt ___ Knoblauch.", ru: "быть на вкус как", exampleDe: "Dieser Tee schmeckt leicht nach Zitrone und Honig.", exampleRu: "Этот чай слегка отдаёт вкусом лимона и мёда.", options: ["nach", "wie", "von", "mit"], lvl: "B1" },
  { verb: "riechen", prep: "nach", kasus: "Dativ", question: "Es riecht ___ frischem Kaffee.", ru: "пахнуть чем-то", exampleDe: "In der Bäckerei riecht es morgens nach frischem Brot.", exampleRu: "В пекарне по утрам пахнет свежим хлебом.", options: ["nach", "von", "über", "mit"], lvl: "B1" },
  { verb: "sich ärgern", prep: "über", kasus: "Akkusativ", question: "Er ärgert sich ___ den Stau.", ru: "злиться на / из-за", exampleDe: "Ärgere dich nicht über den langen Stau.", exampleRu: "Не злись из-за длинной пробки.", options: ["über", "an", "auf", "für"], lvl: "A2" },
  { verb: "sich entschuldigen (причина)", prep: "für", kasus: "Akkusativ", question: "Ich entschuldige mich ___ den Fehler.", ru: "извиняться за что-то", exampleDe: "Er entschuldigte sich sofort für seinen Fehler.", exampleRu: "Он сразу извинился за свою ошибку.", options: ["für", "bei", "über", "um"], lvl: "A2" },
  { verb: "sich entschuldigen (человек)", prep: "bei", kasus: "Dativ", question: "Sie entschuldigt sich ___ dem Chef.", ru: "извиняться перед кем-то", exampleDe: "Du solltest dich bei deinem Nachbarn entschuldigen.", exampleRu: "Тебе стоит извиниться перед соседом.", options: ["bei", "für", "mit", "an"], lvl: "B1" },
  { verb: "sich bedanken", prep: "bei", kasus: "Dativ", question: "Ich bedanke mich ___ allen Gästen.", ru: "благодарить кого-то", exampleDe: "Wir bedanken uns herzlich bei Ihnen für Ihre Geduld.", exampleRu: "Мы сердечно благодарим Вас за Ваше терпение.", options: ["bei", "für", "zu", "mit"], lvl: "B1" },
  { verb: "sich kümmern", prep: "um", kasus: "Akkusativ", question: "Wer kümmert sich ___ die Kinder?", ru: "заботиться о", exampleDe: "Unsere Großeltern kümmern sich gern um die Kinder.", exampleRu: "Наши бабушка с дедушкой с радостью заботятся о детях.", options: ["um", "für", "über", "an"], lvl: "A2" },
  { verb: "sich bewerben", prep: "um", kasus: "Akkusativ", question: "Ich bewerbe mich ___ diese Stelle.", ru: "подавать заявку на", exampleDe: "Sie bewirbt sich um eine Stelle als Designerin.", exampleRu: "Она подаёт заявку на должность дизайнера.", options: ["um", "für", "auf", "zu"], lvl: "B1" },
  { verb: "sich informieren", prep: "über", kasus: "Akkusativ", question: "Ich informiere mich ___ den Preis.", ru: "узнавать информацию о", exampleDe: "Informieren Sie sich online über die neuen Abfahrtszeiten.", exampleRu: "Узнайте онлайн о новом расписании отправления.", options: ["über", "nach", "von", "auf"], lvl: "A2" },
  { verb: "sich konzentrieren", prep: "auf", kasus: "Akkusativ", question: "Konzentriere dich ___ den Text!", ru: "сосредоточиться на", exampleDe: "Im Test muss man sich gut auf die Fragen konzentrieren.", exampleRu: "На тесте нужно хорошо сосредоточиться на вопросах.", options: ["auf", "an", "in", "für"], lvl: "B1" },
  { verb: "sich gewöhnen", prep: "an", kasus: "Akkusativ", question: "Ich gewöhne mich ___ das Klima.", ru: "привыкать к", exampleDe: "Nach zwei Wochen gewöhnt man sich an die neue Uhrzeit.", exampleRu: "Через две недели привыкаешь к новому времени.", options: ["an", "auf", "zu", "mit"], lvl: "B1" },
  { verb: "sich entscheiden", prep: "für", kasus: "Akkusativ", question: "Wir entscheiden uns ___ das Blau.", ru: "выбрать (решиться в пользу)", exampleDe: "Ich habe mich für den Intensivkurs entschieden.", exampleRu: "Я выбрал интенсивный курс.", options: ["für", "über", "zu", "auf"], lvl: "B1" },
  { verb: "sich vorbereiten", prep: "auf", kasus: "Akkusativ", question: "Sie bereitet sich ___ das Examen vor.", ru: "готовиться к", exampleDe: "Wir bereiten uns gemeinsam auf das B1-Zertifikat vor.", exampleRu: "Мы вместе готовимся к сертификату B1.", options: ["auf", "für", "zu", "an"], lvl: "A2" },
  { verb: "sich treffen", prep: "mit", kasus: "Dativ", question: "Ich treffe mich ___ meinem Bruder.", ru: "встречаться с", exampleDe: "Am Abend treffe ich mich mit meinem besten Freund.", exampleRu: "Вечером я встречаюсь со своим лучшим другом.", options: ["mit", "zu", "bei", "an"], lvl: "A2" },
  { verb: "sich unterhalten", prep: "über", kasus: "Akkusativ", question: "Sie unterhalten sich ___ Reisen.", ru: "беседовать о", exampleDe: "Wir haben uns beim Kaffee über unsere Pläne unterhalten.", exampleRu: "За кофе мы побеседовали о наших планах.", options: ["über", "von", "mit", "auf"], lvl: "B1" },
  { verb: "sich beschweren", prep: "über", kasus: "Akkusativ", question: "Der Kunde beschwert sich ___ den Service.", ru: "жаловаться на", exampleDe: "Niemand hat sich über die Temperatur beschwert.", exampleRu: "Никто не жаловался на температуру.", options: ["über", "gegen", "auf", "an"], lvl: "B1" },
  { verb: "lachen", prep: "über", kasus: "Akkusativ", question: "Alle lachen ___ den guten Witz.", ru: "смеяться над", exampleDe: "Wir haben herzlich über diese komische Geschichte gelacht.", exampleRu: "Мы от души посмеялись над этой смешной историей.", options: ["über", "auf", "für", "mit"], lvl: "A2" },
  { verb: "glauben", prep: "an", kasus: "Akkusativ", question: "Ich glaube ___ deinen Erfolg!", ru: "верить в", exampleDe: "Wenn du an dich selbst glaubst, schaffst du es!", exampleRu: "Если веришь в себя, у тебя получится!", options: ["an", "auf", "in", "für"], lvl: "B1" },
  { verb: "hoffen", prep: "auf", kasus: "Akkusativ", question: "Wir hoffen ___ eine schnelle Antwort.", ru: "надеяться на", exampleDe: "Alle hoffen auf besseres Wetter am Wochenende.", exampleRu: "Все надеются на лучшую погоду в выходные.", options: ["auf", "an", "über", "um"], lvl: "B1" },
  { verb: "achten", prep: "auf", kasus: "Akkusativ", question: "Achten Sie ___ die Großschreibung!", ru: "обращать внимание на", exampleDe: "Bei Substantiven muss man auf die Großschreibung achten.", exampleRu: "У существительных нужно обращать внимание на заглавную букву.", options: ["auf", "an", "über", "nach"], lvl: "B1" },
  { verb: "abhängen", prep: "von", kasus: "Dativ", question: "Alles hängt ___ deiner Übung ab.", ru: "зависеть от", exampleDe: "Dein Erfolg hängt vor allem von deiner Regelmäßigkeit ab.", exampleRu: "Твой успех зависит прежде всего от твоей регулярности.", options: ["von", "aus", "mit", "bei"], lvl: "B1" },
  { verb: "bestehen (состав)", prep: "aus", kasus: "Dativ", question: "Der Test besteht ___ drei Teilen.", ru: "состоять из", exampleDe: "Ein gutes Frühstück besteht aus Brot, Käse und Tee.", exampleRu: "Хороший завтрак состоит из хлеба, сыра и чая.", options: ["aus", "von", "in", "mit"], lvl: "B1" },
  { verb: "führen", prep: "zu", kasus: "Dativ", question: "Fleiß führt ___ großen Erfolgen.", ru: "приводить к", exampleDe: "Zu wenig Schlaf führt oft zu Konzentrationsfehlern.", exampleRu: "Недостаток сна часто приводит к ошибкам внимания.", options: ["zu", "in", "auf", "an"], lvl: "B1" },
  { verb: "schützen", prep: "vor", kasus: "Dativ", question: "Der Schirm schützt ___ dem Regen.", ru: "защищать от", exampleDe: "Eine gute Mütze schützt im Winter vor dem kalten Wind.", exampleRu: "Хорошая шапка защищает зимой от холодного ветра.", options: ["vor", "gegen", "von", "aus"], lvl: "B1" },
  { verb: "warnen", prep: "vor", kasus: "Dativ", question: "Die App warnt ___ dem Sturm.", ru: "предупреждать о", exampleDe: "Der Lehrer warnt vor diesem typischen Fehler.", exampleRu: "Учитель предупреждает об этой типичной ошибке.", options: ["vor", "über", "gegen", "an"], lvl: "B1" },
  { verb: "zweifeln", prep: "an", kasus: "Dativ", question: "Ich zweifle nicht ___ deinem Talent.", ru: "сомневаться в", exampleDe: "Niemand zweifelt an der Richtigkeit dieser Lösung.", exampleRu: "Никто не сомневается в правильности этого решения.", options: ["an", "über", "auf", "in"], lvl: "B1" },
  { verb: "nachdenken", prep: "über", kasus: "Akkusativ", question: "Ich denke lange ___ das Problem nach.", ru: "размышлять о", exampleDe: "Lass uns in Ruhe über diese Idee nachdenken.", exampleRu: "Давай спокойно подумаем об этой идее.", options: ["über", "an", "von", "auf"], lvl: "B1" },
  { verb: "sich verlieben", prep: "in", kasus: "Akkusativ", question: "Sie hat sich ___ Wien verliebt.", ru: "влюбиться в", exampleDe: "Schon am ersten Tag habe ich mich in diese Stadt verliebt.", exampleRu: "Уже в первый день я влюбился в этот город.", options: ["in", "an", "auf", "zu"], lvl: "A2" }
];

export const CASE_DRILLS: CaseDrillItem[] = [
  { sentence: "___ Tisch ist neu. (der Tisch)", answer: "Der", options: ["Der", "Den", "Dem", "Des"], kasus: "Nominativ", rule: "Подлежащее (кто? что?) → Nominativ м.р. = der", ru: "Стол новый.", lvl: "A1" },
  { sentence: "Ich kaufe ___ Tisch. (der Tisch)", answer: "den", options: ["der", "den", "dem", "des"], kasus: "Akkusativ", rule: "kaufen + кого/что? (Akkusativ м.р.) → der становится den", ru: "Я покупаю этот стол.", lvl: "A1" },
  { sentence: "Das Buch liegt auf ___ Tisch. (Wo?)", answer: "dem", options: ["der", "den", "dem", "des"], kasus: "Dativ", rule: "Вопрос Wo? (где?) с предлогом auf → Dativ м.р. = dem", ru: "Книга лежит на столе.", lvl: "A2" },
  { sentence: "Ich lege das Buch auf ___ Tisch. (Wohin?)", answer: "den", options: ["der", "den", "dem", "des"], kasus: "Akkusativ", rule: "Вопрос Wohin? (куда?) с предлогом auf → Akkusativ м.р. = den", ru: "Я кладу книгу на стол.", lvl: "A2" },
  { sentence: "Ich möchte ___ Kaffee, bitte. (der Kaffee)", answer: "einen", options: ["ein", "eine", "einen", "einem"], kasus: "Akkusativ", rule: "möchte + Akkusativ м.р. → einen", ru: "Я хотел бы кофе, пожалуйста.", lvl: "A1" },
  { sentence: "Ich möchte ___ Suppe, bitte. (die Suppe)", answer: "eine", options: ["ein", "eine", "einen", "einer"], kasus: "Akkusativ", rule: "Женский род в Akkusativ не меняется → eine", ru: "Я хотел бы суп, пожалуйста.", lvl: "A1" },
  { sentence: "Er hat ___ Hund. (отрицание, der Hund)", answer: "keinen", options: ["kein", "keine", "keinen", "keinem"], kasus: "Akkusativ", rule: "haben + Akkusativ м.р. → keinen", ru: "У него нет собаки.", lvl: "A1" },
  { sentence: "Ich fahre mit ___ Bus. (der Bus)", answer: "dem", options: ["der", "den", "dem", "das"], kasus: "Dativ", rule: "Предлог mit всегда требует Dativ → der меняется на dem", ru: "Я еду на автобусе.", lvl: "A1" },
  { sentence: "Wir fahren mit ___ U-Bahn. (die U-Bahn)", answer: "der", options: ["die", "der", "dem", "den"], kasus: "Dativ", rule: "Предлог mit + Dativ ж.р. → die меняется на der", ru: "Мы едем на метро.", lvl: "A1" },
  { sentence: "Das Geschenk ist für ___ Vater. (der Vater)", answer: "meinen", options: ["mein", "meine", "meinen", "meinem"], kasus: "Akkusativ", rule: "Предлог für всегда требует Akkusativ → mein м.р. = meinen", ru: "Подарок для моего отца.", lvl: "A1" },
  { sentence: "Ohne ___ Schlüssel komme ich nicht rein. (der Schlüssel)", answer: "den", options: ["der", "den", "dem", "des"], kasus: "Akkusativ", rule: "Предлог ohne всегда требует Akkusativ → den", ru: "Без ключа я не войду.", lvl: "A1" },
  { sentence: "Wir gehen durch ___ Park. (der Park)", answer: "den", options: ["der", "den", "dem", "des"], kasus: "Akkusativ", rule: "Предлог durch всегда требует Akkusativ → den", ru: "Мы идём через парк.", lvl: "A1" },
  { sentence: "Nach ___ Unterricht gehen wir heim. (der Unterricht)", answer: "dem", options: ["der", "den", "dem", "des"], kasus: "Dativ", rule: "Предлог nach всегда требует Dativ → dem", ru: "После урока мы идём домой.", lvl: "A1" },
  { sentence: "Ich lerne seit ___ Jahr Deutsch. (das Jahr)", answer: "einem", options: ["ein", "eine", "einen", "einem"], kasus: "Dativ", rule: "Предлог seit всегда требует Dativ ср.р. → einem", ru: "Я учу немецкий уже год.", lvl: "A2" },
  { sentence: "Er wohnt bei ___ Eltern. (мн. ч.)", answer: "seinen", options: ["seine", "seinen", "seiner", "seinem"], kasus: "Dativ", rule: "bei + Dativ мн. ч. → окончание -n (seinen Eltern)", ru: "Он живёт у своих родителей.", lvl: "A2" },
  { sentence: "Kannst du ___ bitte helfen? (ich)", answer: "mir", options: ["ich", "mich", "mir", "mein"], kasus: "Dativ", rule: "Глагол helfen всегда требует Dativ (кому?) → mir", ru: "Ты можешь мне помочь?", lvl: "A1" },
  { sentence: "Der Pullover gefällt ___ sehr. (du)", answer: "dir", options: ["du", "dich", "dir", "dein"], kasus: "Dativ", rule: "Глагол gefallen (нравиться кому?) требует Dativ → dir", ru: "Свитер тебе очень нравится.", lvl: "A1" },
  { sentence: "Die Schuhe passen ___ gut. (sie — она)", answer: "ihr", options: ["sie", "ihr", "ihm", "ihnen"], kasus: "Dativ", rule: "passen (подходить кому?) + Dativ ж.р. → ihr", ru: "Туфли ей хорошо подходят.", lvl: "A2" },
  { sentence: "Ich danke ___ herzlich! (Sie — Вы)", answer: "Ihnen", options: ["Sie", "Ihnen", "Ihr", "Ihn"], kasus: "Dativ", rule: "danken (благодарить кого?) требует Dativ → Ihnen", ru: "Я сердечно благодарю Вас!", lvl: "A1" },
  { sentence: "Ich rufe ___ heute Abend an. (du)", answer: "dich", options: ["du", "dir", "dich", "dein"], kasus: "Akkusativ", rule: "anrufen (звонить кому?) в немецком требует Akkusativ → dich", ru: "Я позвоню тебе сегодня вечером.", lvl: "A2" },
  { sentence: "Ich besuche ___ am Sonntag. (er)", answer: "ihn", options: ["er", "ihm", "ihn", "sein"], kasus: "Akkusativ", rule: "besuchen (навещать кого?) требует Akkusativ → ihn", ru: "Я навещу его в воскресенье.", lvl: "A1" },
  { sentence: "Das Bild hängt an ___ Wand. (Wo? die Wand)", answer: "der", options: ["die", "der", "dem", "den"], kasus: "Dativ", rule: "Wo? (висит где?) + an → Dativ ж.р. = der", ru: "Картина висит на стене.", lvl: "A2" },
  { sentence: "Ich hänge das Bild an ___ Wand. (Wohin? die Wand)", answer: "die", options: ["die", "der", "dem", "den"], kasus: "Akkusativ", rule: "Wohin? (вешаю куда?) + an → Akkusativ ж.р. = die", ru: "Я вешаю картину на стену.", lvl: "A2" },
  { sentence: "Die Katze sitzt unter ___ Stuhl. (Wo? der Stuhl)", answer: "dem", options: ["der", "den", "dem", "des"], kasus: "Dativ", rule: "Wo? + unter → Dativ м.р. = dem", ru: "Кошка сидит под стулом.", lvl: "A2" },
  { sentence: "Der Hund läuft unter ___ Stuhl. (Wohin?)", answer: "den", options: ["der", "den", "dem", "des"], kasus: "Akkusativ", rule: "Wohin? + unter → Akkusativ м.р. = den", ru: "Собака забегает под стул.", lvl: "A2" },
  { sentence: "Das Auto steht vor ___ Haus. (Wo? das Haus)", answer: "dem", options: ["das", "dem", "den", "des"], kasus: "Dativ", rule: "Wo? + vor → Dativ ср.р. = dem", ru: "Машина стоит перед домом.", lvl: "A2" },
  { sentence: "Wegen ___ Regens bleiben wir zu Hause. (der Regen)", answer: "des", options: ["der", "den", "dem", "des"], kasus: "Genitiv", rule: "Предлог wegen требует Genitiv м.р. → des (+ -s у сущ.)", ru: "Из-за дождя мы остаёмся дома.", lvl: "B1" },
  { sentence: "Trotz ___ Kälte gehen wir spazieren. (die Kälte)", answer: "der", options: ["die", "der", "dem", "des"], kasus: "Genitiv", rule: "Предлог trotz требует Genitiv ж.р. → der", ru: "Несмотря на холод, мы идём гулять.", lvl: "B1" },
  { sentence: "Während ___ Unterrichts sprechen wir Deutsch. (der Unterricht)", answer: "des", options: ["der", "den", "dem", "des"], kasus: "Genitiv", rule: "während + Genitiv м.р. → des Unterrichts", ru: "Во время урока мы говорим по-немецки.", lvl: "B1" },
  { sentence: "Das ist das Auto ___ Bruders. (мой брат)", answer: "meines", options: ["mein", "meinen", "meinem", "meines"], kasus: "Genitiv", rule: "Чья машина? → Genitiv м.р. = meines Bruders", ru: "Это машина моего брата.", lvl: "B1" },
  { sentence: "Sie arbeitet mit ___ guten Freund. (ein)", answer: "einem", options: ["ein", "einen", "einem", "einer"], kasus: "Dativ", rule: "mit + Dativ м.р. → einem guten Freund", ru: "Она работает с хорошим другом.", lvl: "A2" },
  { sentence: "Ich habe eine ___ Wohnung gefunden. (klein, ж.р. Akk.)", answer: "kleine", options: ["klein", "kleine", "kleinen", "kleiner"], kasus: "Akkusativ", rule: "eine + прилагательное в ж.р. Akkusativ → -e (kleine)", ru: "Я нашёл маленькую квартиру.", lvl: "A2" },
  { sentence: "Er trägt einen ___ Mantel. (schwarz, м.р. Akk.)", answer: "schwarzen", options: ["schwarze", "schwarzer", "schwarzen", "schwarzes"], kasus: "Akkusativ", rule: "einen + прилагательное в м.р. Akkusativ → всегда -en", ru: "Он носит чёрное пальто.", lvl: "A2" },
  { sentence: "Das ist ein ___ Buch. (interessant, ср.р. Nom.)", answer: "interessantes", options: ["interessante", "interessanter", "interessanten", "interessantes"], kasus: "Nominativ", rule: "ein + ср.р. Nominativ → окончание -es (от das)", ru: "Это интересная книга.", lvl: "A2" },
  { sentence: "Ich trinke gern ___ Kaffee. (горячий, без артикля Akk.)", answer: "heißen", options: ["heißer", "heiße", "heißen", "heißes"], kasus: "Akkusativ", rule: "Без артикля в м.р. Akk. прилагательное берёт -en от den", ru: "Я люблю пить горячий кофе.", lvl: "B1" },
  { sentence: "Die Kinder spielen mit ___ Freunden. (их мн. ч.)", answer: "ihren", options: ["ihre", "ihren", "ihrer", "ihrem"], kasus: "Dativ", rule: "mit + Dativ мн. ч. → ihren Freunden", ru: "Дети играют со своими друзьями.", lvl: "A2" },
  { sentence: "Ich gebe ___ Kind einen Apfel. (das Kind)", answer: "dem", options: ["das", "den", "dem", "des"], kasus: "Dativ", rule: "geben (кому? Dativ + что? Akkusativ) → dem Kind", ru: "Я даю ребёнку яблоко.", lvl: "A2" },
  { sentence: "Der Arzt hilft ___ Patienten. (мн. ч.)", answer: "den", options: ["die", "der", "dem", "den"], kasus: "Dativ", rule: "helfen + Dativ мн. ч. → den", ru: "Врач помогает пациентам.", lvl: "A2" },
  { sentence: "Wir gehen heute Abend ___ Restaurant. (in + das)", answer: "ins", options: ["im", "ins", "am", "zum"], kasus: "Akkusativ", rule: "Wohin? (куда? в заведение) → in + das = ins", ru: "Сегодня вечером мы идём в ресторан.", lvl: "A1" },
  { sentence: "Wir essen heute ___ Restaurant. (in + dem)", answer: "im", options: ["im", "ins", "am", "ans"], kasus: "Dativ", rule: "Wo? (где? внутри) → in + dem = im", ru: "Сегодня мы едим в ресторане.", lvl: "A1" },
  { sentence: "Er geht ___ Arzt. (zu + dem)", answer: "zum", options: ["zur", "zum", "beim", "vom"], kasus: "Dativ", rule: "Направление к человеку/месту м.р. → zu + dem = zum", ru: "Он идёт к врачу.", lvl: "A1" },
  { sentence: "Sie geht ___ Schule. (zu + der)", answer: "zur", options: ["zur", "zum", "ins", "in"], kasus: "Dativ", rule: "Направление к учреждению ж.р. (die Schule) → zu + der = zur", ru: "Она идёт в школу.", lvl: "A1" },
  { sentence: "Der Brief kommt ___ meiner Schwester. (от)", answer: "von", options: ["von", "aus", "bei", "nach"], kasus: "Dativ", rule: "От кого-то (человека) → von + Dativ", ru: "Письмо от моей сестры.", lvl: "A1" },
  { sentence: "Gegen ___ Uhr komme ich zurück. (время)", answer: "acht", options: ["acht", "den", "dem", "der"], kasus: "Akkusativ", rule: "Около какого-то часа → gegen + число + Uhr (без артикля)", ru: "Около восьми часов я вернусь.", lvl: "A1" },
  { sentence: "In ___ alten Stadt gibt es viele Cafés. (die Stadt, Dat.)", answer: "der", options: ["die", "der", "dem", "den"], kasus: "Dativ", rule: "Wo? + die Stadt → in der alten Stadt", ru: "В старом городе много кафе.", lvl: "A2" },
  { sentence: "Sie spricht mit einer ___ Stimme. (klar, ж.р. Dat.)", answer: "klaren", options: ["klare", "klaren", "klarer", "klares"], kasus: "Dativ", rule: "После einer/der/dem в Dativ прилагательное ВСЕГДА получает -en", ru: "Она говорит чётким голосом.", lvl: "B1" },
  { sentence: "Alle Studenten ___ dieses Kurses lernen schnell. (мн. ч.)", answer: "-", options: ["-", "der", "des", "dem"], kasus: "Nominativ", rule: "После alle + существительное артикль не нужен (или без него: alle Studenten)", ru: "Все студенты этого курса учатся быстро.", lvl: "B1" },
  { sentence: "Der Mann, ___ ich getroffen habe, ist Lehrer. (м.р. Akk.)", answer: "den", options: ["der", "den", "dem", "dessen"], kasus: "Akkusativ", rule: "treffen + кого? (Akkusativ м.р.) → относит. местоимение den", ru: "Мужчина, которого я встретил, — учитель.", lvl: "B1" },
  { sentence: "Die Frau, ___ ich das Buch leihe, ist meine Kollegin. (ж.р. Dat.)", answer: "der", options: ["die", "der", "den", "deren"], kasus: "Dativ", rule: "leihen (кому? Dativ ж.р.) → относит. местоимение der", ru: "Женщина, которой я одалживаю книгу, — моя коллега.", lvl: "B1" },
  { sentence: "Die Leute, mit ___ wir sprechen, sind sehr nett. (мн. ч. Dat.)", answer: "denen", options: ["die", "den", "denen", "deren"], kasus: "Dativ", rule: "Относит. местоимение Dativ множественного числа → denen", ru: "Люди, с которыми мы говорим, очень милые.", lvl: "B1" }
];

export const ROLEPLAY_DIALOGS: RoleplayDialog[] = [
  {
    id: "cafe",
    title: "Заказ в уютном кафе в Берлине",
    level: "A1",
    setting: "Вы зашли позавтракать в берлинскую кофейню.",
    steps: [
      {
        npcDe: "Guten Morgen! Was darf ich Ihnen heute bringen?",
        npcRu: "Доброе утро! Что я могу Вам сегодня принести?",
        options: [
          { de: "Ich möchte bitte einen Cappuccino und ein Käsebrot.", ru: "Я хотел бы, пожалуйста, капучино и бутерброд с сыром.", isBest: true, feedback: "Отлично! Вежливо и грамматически точно (einen Cappuccino, ein Käsebrot)." },
          { de: "Geben mir Kaffee jetzt.", ru: "Дай мне кофе сейчас.", isBest: false, feedback: "Слишком грубо и с ошибкой. Лучше использовать «Ich möchte bitte…»." },
          { de: "Ich bin Kaffee.", ru: "Я есть кофе.", isBest: false, feedback: "Неправильный глагол! Нужен заказ через möchte или hätte gern." }
        ]
      },
      {
        npcDe: "Sehr gern! Möchten Sie den Cappuccino mit normaler Milch oder Hafermilch?",
        npcRu: "С удовольствием! Вам капучино на обычном молоке или на овсяном?",
        options: [
          { de: "Mit Hafermilch, bitte. Wie viel kostet das zusammen?", ru: "На овсяном молоке, пожалуйста. Сколько всё вместе стоит?", isBest: true, feedback: "Супер! Чёткий выбор и естественный вопрос о цене." },
          { de: "Nein, ich trinke Tee nicht.", ru: "Нет, я не пью чай.", isBest: false, feedback: "Официант спрашивал про молоко для кофе." },
          { de: "Ja, normale Stadt.", ru: "Да, обычный город.", isBest: false, feedback: "Milch — молоко, Stadt — город." }
        ]
      },
      {
        npcDe: "Das macht sieben Euro fünfzig. Zahlen Sie bar oder mit Karte?",
        npcRu: "С Вас семь евро пятьдесят. Оплатите наличными или картой?",
        options: [
          { de: "Mit Karte, bitte. Und stimmt so — acht Euro!", ru: "Картой, пожалуйста. И сдачи не надо — восемь евро!", isBest: true, feedback: "Блестяще! Вы ещё и вежливо оставили чаевые («stimmt so»)." },
          { de: "Ich habe keine Karte gekauft.", ru: "Я не покупал карту.", isBest: false, feedback: "Звучит неестественно. Достаточно «Bar, bitte» или «Mit Karte, bitte»." },
          { de: "Auf Wiedersehen, sieben!", ru: "До свидания, семь!", isBest: false, feedback: "Сначала нужно выбрать способ оплаты." }
        ]
      }
    ]
  },
  {
    id: "station",
    title: "Покупка билета и пересадка на вокзале",
    level: "A1",
    setting: "Вы в кассе на вокзале в Мюнхене и покупаете билет в Зальцбург.",
    steps: [
      {
        npcDe: "Guten Tag! Wohin möchten Sie fahren?",
        npcRu: "Добрый день! Куда Вы хотите поехать?",
        options: [
          { de: "Guten Tag! Eine Fahrkarte nach Salzburg, bitte.", ru: "Добрый день! Один билет до Зальцбурга, пожалуйста.", isBest: true, feedback: "Идеально! С городами используем предлог nach." },
          { de: "Ich wohne in Salzburg.", ru: "Я живу в Зальцбурге.", isBest: false, feedback: "Вас спросили, куда вы хотите поехать, а не где живёте." },
          { de: "Ein Ticket für Bahnhof.", ru: "Билет для вокзала.", isBest: false, feedback: "Нужен предлог nach + название города." }
        ]
      },
      {
        npcDe: "Einfach oder hin und zurück? Der nächste Zug fährt in zehn Minuten ab.",
        npcRu: "В одну сторону или туда и обратно? Следующий поезд отправляется через 10 минут.",
        options: [
          { de: "Hin und zurück, bitte. Auf welchem Gleis fährt der Zug ab?", ru: "Туда и обратно, пожалуйста. С какого пути отправляется поезд?", isBest: true, feedback: "Отлично! Точный вопрос про платформу (auf welchem Gleis)." },
          { de: "Nein, ich gehe zu Fuß.", ru: "Нет, я пойду пешком.", isBest: false, feedback: "Вы же покупаете билет на поезд!" },
          { de: "Wo ist mein Bett?", ru: "Где моя кровать?", isBest: false, feedback: "Не подходит к ситуации на вокзале." }
        ]
      },
      {
        npcDe: "Auf Gleis 4. In Rosenheim müssen Sie leider einmal umsteigen.",
        npcRu: "С четвёртого пути. В Розенхайме Вам нужно один раз сделать пересадку.",
        options: [
          { de: "Alles klar, vielen Dank für Ihre Hilfe!", ru: "Всё понятно, большое спасибо за Вашу помощь!", isBest: true, feedback: "Вежливо и естественно!" },
          { de: "Ich steige nicht ein.", ru: "Я не сажусь.", isBest: false, feedback: "Здесь уместнее поблагодарить." },
          { de: "Guten Appetit!", ru: "Приятного аппетита!", isBest: false, feedback: "Эта фраза используется только за столом." }
        ]
      }
    ]
  },
  {
    id: "doctor",
    title: "На приёме у врача",
    level: "A2",
    setting: "Вы пришли на приём к терапевту с простудой.",
    steps: [
      {
        npcDe: "Guten Tag! Nehmen Sie bitte Platz. Was fehlt Ihnen denn?",
        npcRu: "Добрый день! Присаживайтесь, пожалуйста. Что Вас беспокоит?",
        options: [
          { de: "Mir tut seit gestern der Hals weh und ich habe Fieber.", ru: "У меня со вчерашнего дня болит горло и есть температура.", isBest: true, feedback: "Безупречно! Правильный Dativ «mir» и глагол «tut ... weh»." },
          { de: "Ich habe Hals verloren.", ru: "Я потерял горло.", isBest: false, feedback: "Глагол verlieren тут не подходит — нужно «mir tut ... weh»." },
          { de: "Ich bin Arzt, danke.", ru: "Я врач, спасибо.", isBest: false, feedback: "Вы на приёме в роли пациента." }
        ]
      },
      {
        npcDe: "Das sieht nach einer Erkältung aus. Wie hoch ist Ihr Fieber?",
        npcRu: "Похоже на простуду. Какая у Вас температура?",
        options: [
          { de: "Heute Morgen waren es 38,5 Grad. Soll ich Tabletten nehmen?", ru: "Сегодня утром было 38,5 градусов. Мне нужно пить таблетки?", isBest: true, feedback: "Отлично! Очень грамотный вопрос с глаголом sollen." },
          { de: "Es ist 14 Uhr.", ru: "Сейчас 14 часов.", isBest: false, feedback: "Fieber — это температура тела, а не время." },
          { de: "Sehr billig.", ru: "Очень дёшево.", isBest: false, feedback: "Не подходит по смыслу." }
        ]
      },
      {
        npcDe: "Ja, nehmen Sie diese Tabletten zweimal täglich und bleiben Sie drei Tage zu Hause.",
        npcRu: "Да, принимайте эти таблетки дважды в день и оставайтесь три дня дома.",
        options: [
          { de: "Verstanden, vielen Dank! Könnten Sie mir bitte eine Krankschreibung geben?", ru: "Понял, большое спасибо! Не могли бы Вы дать мне больничный лист?", isBest: true, feedback: "Уровень A2/B1! Очень вежливая форма «Könnten Sie…»." },
          { de: "Ich arbeite gern krank.", ru: "Я люблю работать больным.", isBest: false, feedback: "Лучше поблагодарить врача и попросить справку для работы." },
          { de: "Prost, Herr Doktor!", ru: "За здоровье (тост), доктор!", isBest: false, feedback: "«Prost» говорят только с напитками в компании." }
        ]
      }
    ]
  },
  {
    id: "shop",
    title: "Возврат товара в магазине",
    level: "A2",
    setting: "Вы купили свитер, но дома поняли, что размер мал.",
    steps: [
      {
        npcDe: "Guten Tag, kann ich Ihnen behilflich sein?",
        npcRu: "Добрый день, могу я Вам помочь?",
        options: [
          { de: "Ja, ich möchte diesen Pullover umtauschen, er ist mir leider zu klein.", ru: "Да, я хотел бы обменять этот свитер, он мне, к сожалению, мал.", isBest: true, feedback: "Точно! Глагол umtauschen (обменивать) и правильный Akkusativ «diesen Pullover»." },
          { de: "Ich kaufe das Geschäft.", ru: "Я покупаю этот магазин.", isBest: false, feedback: "Не та фраза!" },
          { de: "Dieser Pullover schläft gut.", ru: "Этот свитер хорошо спит.", isBest: false, feedback: "Ошибочный глагол." }
        ]
      },
      {
        npcDe: "Kein Problem! Haben Sie noch den Kassenbon dabei?",
        npcRu: "Без проблем! У Вас сохранился кассовый чек?",
        options: [
          { de: "Ja, hier ist der Bon. Haben Sie den Pullover auch in Größe L?", ru: "Да, вот чек. У Вас есть этот свитер в размере L?", isBest: true, feedback: "Отлично! Чётко и по делу." },
          { de: "Nein, ich bin Student.", ru: "Нет, я студент.", isBest: false, feedback: "Спрашивали про чек (Kassenbon)." },
          { de: "Das Wasser ist kalt.", ru: "Вода холодная.", isBest: false, feedback: "Не по теме диалога." }
        ]
      }
    ]
  },
  {
    id: "apartment",
    title: "Звонок по объявлению о квартире",
    level: "A2",
    setting: "Вы звоните арендодателю насчёт 2-комнатной квартиры.",
    steps: [
      {
        npcDe: "Weber am Apparat, guten Tag!",
        npcRu: "Вебер у аппарата, добрый день!",
        options: [
          { de: "Guten Tag, Herr Weber! Ich rufe wegen Ihrer Wohnungsanzeige an. Ist die Wohnung noch frei?", ru: "Добрый день, господин Вебер! Я звоню по поводу Вашего объявления о квартире. Она ещё свободна?", isBest: true, feedback: "Блестяще! Правильный предлог wegen + Genitiv и отделяемая приставка an в конце." },
          { de: "Hallo, gib mir Schlüssel.", ru: "Привет, дай мне ключи.", isBest: false, feedback: "Слишком фамильярно для делового звонка." },
          { de: "Auf Wiederhören!", ru: "До свидания (по телефону)!", isBest: false, feedback: "Вы только начали разговор!" }
        ]
      },
      {
        npcDe: "Ja, sie ist noch frei. Wann könnten Sie zur Besichtigung vorbeikommen?",
        npcRu: "Да, она ещё свободна. Когда Вы могли бы прийти на осмотр?",
        options: [
          { de: "Passt es Ihnen morgen Nachmittag um 17 Uhr?", ru: "Вам удобно завтра после обеда в 17 часов?", isBest: true, feedback: "Идеальная формулировка для согласования времени!" },
          { de: "Ich wohne im Keller.", ru: "Я живу в подвале.", isBest: false, feedback: "Нужно предложить время встречи." },
          { de: "Es schneit heute.", ru: "Сегодня идёт снег.", isBest: false, feedback: "Не отвечает на вопрос." }
        ]
      }
    ]
  },
  {
    id: "hotel",
    title: "Заселение в отель",
    level: "A1",
    setting: "Вы приехали в отель в Гамбурге после долгого переезда.",
    steps: [
      {
        npcDe: "Herzlich willkommen im Hotel Hafenblick! Haben Sie reserviert?",
        npcRu: "Добро пожаловать в отель! Вы бронировали номер?",
        options: [
          { de: "Ja, ich habe ein Einzelzimmer auf den Namen Alimow gebucht.", ru: "Да, я забронировал одноместный номер на фамилию Алимов.", isBest: true, feedback: "Отлично! Выражение «auf den Namen ...» звучит как у носителя." },
          { de: "Ich habe Hunger.", ru: "Я голоден.", isBest: false, feedback: "Сначала нужно сказать о бронировании." },
          { de: "Wo ist das Flugzeug?", ru: "Где самолёт?", isBest: false, feedback: "Не подходит." }
        ]
      },
      {
        npcDe: "Hier ist Ihre Zimmerkarte für Zimmer 304. Das Frühstück gibt es ab sieben Uhr.",
        npcRu: "Вот Ваша ключ-карта от номера 304. Завтрак с семи утра.",
        options: [
          { de: "Vielen Dank! Wie lautet bitte das Passwort für das WLAN?", ru: "Большое спасибо! Подскажите, пожалуйста, пароль от Wi-Fi?", isBest: true, feedback: "Супер полезная реальная фраза!" },
          { de: "Ich möchte keinen Schlaf.", ru: "Я не хочу сна.", isBest: false, feedback: "Странная фраза." },
          { de: "Wie viel kostet der Name?", ru: "Сколько стоит имя?", isBest: false, feedback: "Бессмысленно." }
        ]
      }
    ]
  },
  {
    id: "interview",
    title: "Собеседование в компании (B1)",
    level: "B1",
    setting: "Финальный этап собеседования с руководителем команды.",
    steps: [
      {
        npcDe: "Warum möchten Sie gerade bei unserem Unternehmen arbeiten?",
        npcRu: "Почему Вы хотите работать именно в нашей компании?",
        options: [
          { de: "Weil mich Ihre modernen Projekte begeistern und ich meine Erfahrung hier sinnvoll einbringen kann.", ru: "Потому что меня вдохновляют Ваши современные проекты, и я могу с пользой применить здесь свой опыт.", isBest: true, feedback: "Отличный ответ B1! Правильный порядок слов после weil (глагол в конце)." },
          { de: "Weil ich brauche viel Geld sofort.", ru: "Потому что мне нужно много денег сразу.", isBest: false, feedback: "И порядок слов неверный (глагол не в конце), и мотивация грубовата." },
          { de: "Keine Ahnung, zufällig.", ru: "Понятия не имею, случайно.", isBest: false, feedback: "Так на собеседовании говорить не стоит." }
        ]
      },
      {
        npcDe: "Welche Stärken bringen Sie für diese Position mit?",
        npcRu: "Какие сильные стороны Вы привносите на эту должность?",
        options: [
          { de: "Ich bin zuverlässig, lerne schnell und arbeite sowohl selbstständig als auch gern im Team.", ru: "Я надёжен, быстро учусь и охотно работаю как самостоятельно, так и в команде.", isBest: true, feedback: "Уверенное владение B1 + парный союз «sowohl ... als auch»!" },
          { de: "Ich schlafe immer bis elf.", ru: "Я всегда сплю до одиннадцати.", isBest: false, feedback: "Точно не для резюме!" },
          { de: "Nur Bahnhof.", ru: "Ничего не понимаю.", isBest: false, feedback: "Неуместно на собеседовании." }
        ]
      }
    ]
  },
  {
    id: "debate",
    title: "Обсуждение планов с другом (B1)",
    level: "B1",
    setting: "Вы с другом выбираете, как провести выходные.",
    steps: [
      {
        npcDe: "Hast du am Samstag Lust, in die Berge zu wandern, oder gehen wir lieber ins Museum?",
        npcRu: "Хочешь в субботу пойти в поход в горы, или лучше сходим в музей?",
        options: [
          { de: "Wenn das Wetter sonnig bleibt, würde ich lieber wandern, sonst könnten wir ins Museum gehen.", ru: "Если погода останется солнечной, я бы предпочёл пойти в поход, иначе мы могли бы пойти в музей.", isBest: true, feedback: "Высший балл! Использованы wenn, Konjunktiv II (würde / könnten) и sonst." },
          { de: "Ich wandere im Museum.", ru: "Я хожу в поход в музее.", isBest: false, feedback: "Смешались оба варианта." },
          { de: "Montag ist besser als Freitag.", ru: "Понедельник лучше пятницы.", isBest: false, feedback: "Речь шла о субботе." }
        ]
      }
    ]
  }
];

export const IDIOM_DRILLS: IdiomDrillItem[] = [
  { phrase: "die Daumen drücken", ru: "держать кулаки (желать удачи)", literal: "досл.: жать большие пальцы", exampleDe: "Viel Erfolg morgen — ich drücke dir fest die Daumen!", exampleRu: "Удачи завтра — крепко держу за тебя кулаки!", options: ["держать кулаки (желать удачи)", "считать деньги", "открывать дверь", "опаздывать на поезд"], lvl: "A2" },
  { phrase: "nur Bahnhof verstehen", ru: "вообще ничего не понимать", literal: "досл.: понимать только «вокзал»", exampleDe: "Er redet so kompliziert, ich verstehe nur Bahnhof!", exampleRu: "Он говорит так сложно, я вообще ничего не понимаю!", options: ["вообще ничего не понимать", "любить путешествовать", "покупать билет", "жить рядом с вокзалом"], lvl: "A2" },
  { phrase: "eine Entscheidung treffen", ru: "принять решение", literal: "устойчивая связка Nomen-Verb", exampleDe: "Nach langem Nachdenken hat er eine klare Entscheidung getroffen.", exampleRu: "После долгих раздумий он принял чёткое решение.", options: ["принять решение", "встретить друга", "потерять время", "построить дом"], lvl: "B1" },
  { phrase: "Bescheid geben", ru: "сообщить, дать знать", literal: "устойчивая связка Nomen-Verb", exampleDe: "Gib mir bitte rechtzeitig Bescheid, wann du ankommst.", exampleRu: "Дай мне, пожалуйста, вовремя знать, когда приедешь.", options: ["сообщить, дать знать", "дать в долг", "задать вопрос", "отказаться от встречи"], lvl: "A2" },
  { phrase: "Schwein haben", ru: "крупно повезти", literal: "досл.: иметь свинью", exampleDe: "Der Zug hatte Verspätung, sonst hättest du ihn verpasst — du hast echt Schwein gehabt!", exampleRu: "Поезд опоздал, иначе ты бы не успел — вот это тебе повезло!", options: ["крупно повезти", "купить мясо", "быть ленивым", "сильно устать"], lvl: "B1" },
  { phrase: "auf die Nerven gehen", ru: "действовать на нервы, раздражать", literal: "досл.: идти на нервы", exampleDe: "Diese laute Musik am Abend geht mir auf die Nerven.", exampleRu: "Эта громкая музыка вечером действует мне на нервы.", options: ["действовать на нервы, раздражать", "радовать друзей", "идти к врачу", "быть спокойным"], lvl: "B1" },
  { phrase: "Tomaten auf den Augen haben", ru: "не видеть очевидного", literal: "досл.: иметь помидоры на глазах", exampleDe: "Dein Handy liegt direkt neben dem Buch — hast du Tomaten auf den Augen?", exampleRu: "Твой телефон лежит прямо рядом с книгой — ты совсем не видишь?", options: ["не видеть очевидного", "готовить салат", "носить очки", "плакать от лука"], lvl: "B1" },
  { phrase: "das Eis brechen", ru: "разрядить обстановку, начать общение", literal: "досл.: сломать лёд", exampleDe: "Ein guter Witz kann zu Beginn eines Treffens das Eis brechen.", exampleRu: "Хорошая шутка в начале встречи помогает разрядить обстановку.", options: ["разрядить обстановку, начать общение", "устроить каток", "закончить дружбу", "охладить напиток"], lvl: "B1" },
  { phrase: "ein Katzensprung", ru: "рукой подать, очень близко", literal: "досл.: кошачий прыжок", exampleDe: "Bis zur U-Bahn ist es von hier nur ein Katzensprung.", exampleRu: "До метро отсюда буквально рукой подать.", options: ["рукой подать, очень близко", "очень далеко", "домашнее животное", "быстрый поезд"], lvl: "B1" },
  { phrase: "unter vier Augen", ru: "с глазу на глаз, наедине", literal: "досл.: под четырьмя глазами", exampleDe: "Ich möchte diese Frage gern unter vier Augen mit dir klären.", exampleRu: "Я хотел бы обсудить этот вопрос с тобой с глазу на глаз.", options: ["с глазу на глаз, наедине", "перед всей группой", "смотреть телевизор", "носить очки"], lvl: "B1" },
  { phrase: "Alles in Butter", ru: "всё в полном порядке", literal: "досл.: всё в масле", exampleDe: "Mach dir keine Sorgen, beim Projekt ist alles in Butter!", exampleRu: "Не переживай, в проекте всё в полном порядке!", options: ["всё в полном порядке", "всё испорчено", "пора завтракать", "слишком дорого"], lvl: "B1" },
  { phrase: "auf Wolke sieben schweben", ru: "быть на седьмом небе от счастья", literal: "досл.: парить на седьмом облаке", exampleDe: "Nach der bestandenen Prüfung schwebte sie auf Wolke sieben.", exampleRu: "После сдачи экзамена она была на седьмом небе от счастья.", options: ["быть на седьмом небе от счастья", "лететь в самолёте", "бояться грозы", "скучать дома"], lvl: "B1" },
  { phrase: "die Nase voll haben", ru: "надоело по горло", literal: "досл.: иметь полный нос", exampleDe: "Ich habe die Nase voll vom ewigen Stau auf der Autobahn!", exampleRu: "Мне по горло надоели вечные пробки на автобане!", options: ["надоело по горло", "иметь насморк", "быть в восторге", "много работать"], lvl: "B1" },
  { phrase: "im Handumdrehen", ru: "в два счёта, моментально", literal: "досл.: за поворот руки", exampleDe: "Im Handumdrehen war das Abendessen fertig.", exampleRu: "В мгновение ока ужин был готов.", options: ["в два счёта, моментально", "очень медленно", "делать вручную", "ждать целый день"], lvl: "B1" },
  { phrase: "ins Schwarze treffen", ru: "попасть точно в цель", literal: "досл.: попасть в чёрное (центр мишени)", exampleDe: "Mit deiner Vermutung hast du genau ins Schwarze getroffen.", exampleRu: "Своим предположением ты попал прямо в яблочко.", options: ["попасть точно в цель", "ошибиться", "купить чёрное пальто", "прийти ночью"], lvl: "B1" },
  { phrase: "zur Verfügung stehen", ru: "быть в распоряжении", literal: "связка Nomen-Verb B1", exampleDe: "Bei weiteren Fragen stehen wir Ihnen gern zur Verfügung.", exampleRu: "При дальнейших вопросах мы с радостью в Вашем распоряжении.", options: ["быть в распоряжении", "стоять в очереди", "уезжать в отпуск", "ждать автобус"], lvl: "B1" },
  { phrase: "Rücksicht nehmen auf", ru: "учитывать, проявлять внимание к", literal: "связка Nomen-Verb B1", exampleDe: "Im Straßenverkehr muss man auf Kinder Rücksicht nehmen.", exampleRu: "На дороге нужно быть внимательным к детям.", options: ["учитывать, проявлять внимание к", "смотреть назад", "забывать о правилах", "спорить с соседом"], lvl: "B1" },
  { phrase: "in Frage kommen", ru: "рассматриваться как вариант", literal: "связка Nomen-Verb B1", exampleDe: "Für unseren Urlaub kommt nur der August in Frage.", exampleRu: "Для нашего отпуска подходит только август.", options: ["рассматриваться как вариант", "задавать лишний вопрос", "не иметь ответа", "сомневаться во всём"], lvl: "B1" },
  { phrase: "Kritik üben an", ru: "критиковать", literal: "связка Nomen-Verb B1", exampleDe: "Er übte faire Kritik an dem alten System.", exampleRu: "Он справедливо раскритиковал старую систему.", options: ["критиковать", "хвалить всех", "тренировать произношение", "молчать на уроке"], lvl: "B1" },
  { phrase: "Verantwortung übernehmen", ru: "брать ответственность", literal: "связка Nomen-Verb B1", exampleDe: "Als Teamleiterin übernimmt sie große Verantwortung.", exampleRu: "Как руководитель команды она берёт большую ответственность.", options: ["брать ответственность", "отказываться от дела", "подписывать чек", "менять работу"], lvl: "B1" },
  { phrase: "Übung macht den Meister", ru: "практика делает мастером", literal: "немецкая пословица", exampleDe: "Jeden Tag sprechen — Übung macht den Meister!", exampleRu: "Говорить каждый день — дело мастера боится!", options: ["практика делает мастером", "утро вечера мудренее", "тише едешь — дальше будешь", "все дороги ведут в Рим"], lvl: "A2" },
  { phrase: "Aller Anfang ist schwer", ru: "всякое начало трудно", literal: "немецкая пословица", exampleDe: "Nur Mut am ersten Tag, aller Anfang ist schwer.", exampleRu: "Смелее в первый день, всякое начало трудно.", options: ["всякое начало трудно", "конец — делу венец", "без труда не выловишь", "лучше поздно, чем никогда"], lvl: "A2" },
  { phrase: "auf Nummer sicher gehen", ru: "перестраховаться, действовать наверняка", literal: "досл.: идти на надёжный номер", exampleDe: "Ich speichere die Datei doppelt, um auf Nummer sicher zu gehen.", exampleRu: "Я сохраню файл дважды, чтобы перестраховаться.", options: ["перестраховаться, действовать наверняка", "рисковать всем", "забыть пароль", "менять номер телефона"], lvl: "B1" },
  { phrase: "auf eigenen Beinen stehen", ru: "быть самостоятельным", literal: "досл.: стоять на собственных ногах", exampleDe: "Nach dem Studium möchte er auf eigenen Beinen stehen.", exampleRu: "После учёбы он хочет жить самостоятельно.", options: ["быть самостоятельным", "бегать по утрам", "устать от ходьбы", "жить у родителей"], lvl: "B1" },
  { phrase: "auf dem Holzweg sein", ru: "ошибаться, идти ложным путём", literal: "досл.: быть на лесной дороге (в тупике)", exampleDe: "Wer denkt, ohne Wortschatz sprechen zu können, ist auf dem Holzweg.", exampleRu: "Кто думает говорить без словарного запаса, тот заблуждается.", options: ["ошибаться, идти ложным путём", "гулять в лесу", "строить деревянный дом", "найти короткий путь"], lvl: "B1" },
  { phrase: "eine Rolle spielen", ru: "играть роль, иметь значение", literal: "связка Nomen-Verb B1", exampleDe: "Beim Hören spielt die Sprechgeschwindigkeit eine große Rolle.", exampleRu: "При аудировании скорость речи играет большую роль.", options: ["играть роль, иметь значение", "выступать в театре", "смотреть кино", "играть в футбол"], lvl: "B1" },
  { phrase: "Wert legen auf", ru: "придавать большое значение", literal: "связка Nomen-Verb B1", exampleDe: "Unsere Schule legt Wert auf klare Aussprache.", exampleRu: "Наша школа уделяет особое внимание чёткому произношению.", options: ["придавать большое значение", "тратить много денег", "покупать украшения", "считать проценты"], lvl: "B1" },
  { phrase: "einen Termin vereinbaren", ru: "назначить встречу / приём", literal: "связка Nomen-Verb A2", exampleDe: "Rufen Sie an, um einen Termin zu vereinbaren.", exampleRu: "Позвоните, чтобы назначить время приёма.", options: ["назначить встречу / приём", "опоздать на урок", "отменить поездку", "прочитать календарь"], lvl: "A2" },
  { phrase: "Abschied nehmen", ru: "прощаться", literal: "связка Nomen-Verb B1", exampleDe: "Am Flughafen nahmen wir herzlich Abschied.", exampleRu: "В аэропорту мы тепло попрощались.", options: ["прощаться", "встречать гостей", "получать подарок", "покупать билет"], lvl: "B1" },
  { phrase: "einen Eindruck machen", ru: "произвести впечатление", literal: "связка Nomen-Verb B1", exampleDe: "Dein Vortrag hat einen sehr professionellen Eindruck gemacht.", exampleRu: "Твой доклад произвёл очень профессиональное впечатление.", options: ["произвести впечатление", "сделать фотографию", "оставить отзыв", "написать письмо"], lvl: "B1" }
];

export const EXAM_MODULES: ExamModule[] = [
  {
    level: "A1",
    title: "Goethe-Zertifikat A1: Пробный экзамен",
    desc: "Проверь готовность к официальному экзамену A1 (Lesen, Hören, Grammatik).",
    questions: [
      {
        part: "Lesen",
        textBlock: "Объявление в кафе: «Frühstück von 7:00 bis 11:00 Uhr. Montags geschlossen! Kaffee + Brötchen: 4,50 €.»",
        prompt: "Можно ли позавтракать в этом кафе в понедельник утром?",
        answer: "Нет, в понедельник кафе закрыто",
        options: ["Да, с 7 часов", "Нет, в понедельник кафе закрыто", "Только после 11 часов"],
        explain: "В объявлении написано: «Montags geschlossen!» (по понедельникам закрыто)."
      },
      {
        part: "Lesen",
        textBlock: "СМС от Анны: «Hallo Max, der Zug hat 20 Minuten Verspätung. Ich komme erst um 18:20 Uhr am Gleis 5 an.»",
        prompt: "Во сколько приезжает Анна?",
        answer: "В 18:20",
        options: ["В 18:00", "В 18:20", "Через 5 минут"],
        explain: "Она пишет: «Ich komme erst um 18:20 Uhr ... an.»"
      },
      {
        part: "Lesen",
        textBlock: "Записка дома: «Lieber Lukas, ich kaufe Brot und Milch ein. Das Abendessen steht im Kühlschrank. Bis 19 Uhr! Mama»",
        prompt: "Где находится ужин для Лукаса?",
        answer: "В холодильнике",
        options: ["На столе", "В магазине", "В холодильнике"],
        explain: "«Das Abendessen steht im Kühlschrank» — ужин в холодильнике."
      },
      {
        part: "Hören",
        audioScript: "Guten Tag! Die Apotheke am Marktplatz hat heute bis zwanzig Uhr geöffnet. Am Sonntag ist nur die Notapotheke offen.",
        prompt: "До скольких сегодня открыта аптека на рыночной площади?",
        answer: "До 20:00",
        options: ["До 18:00", "До 20:00", "Круглосуточно"],
        explain: "В записи прозвучало: «bis zwanzig Uhr geöffnet»."
      },
      {
        part: "Hören",
        audioScript: "Entschuldigung, der Deutschkurs für Anfänger findet heute nicht in Raum 12, sondern in Raum 24 im zweiten Stock statt.",
        prompt: "В каком кабинете сегодня проходит курс немецкого?",
        answer: "В кабинете 24",
        options: ["В кабинете 12", "В кабинете 24", "На первом этаже"],
        explain: "Курс перенесли в Raum 24 на втором этаже."
      },
      {
        part: "Hören",
        audioScript: "Ich heiße Timur, bin 26 Jahre alt und komme aus Kirgisistan. Jetzt wohne ich in Berlin und arbeite als Programmierer.",
        prompt: "Кто Тимур по профессии?",
        answer: "Программист",
        options: ["Врач", "Учитель", "Программист"],
        explain: "Он сказал: «arbeite als Programmierer»."
      },
      {
        part: "Grammatik",
        prompt: "Ich möchte bitte ___ Glas Wasser und ___ Apfel.",
        answer: "ein / einen",
        options: ["ein / ein", "ein / einen", "eine / einen"],
        explain: "das Glas → ein Glas (ср.р.), der Apfel → einen Apfel (Akk. м.р.)."
      },
      {
        part: "Grammatik",
        prompt: "Am Samstag ___ wir mit dem Zug nach Dresden.",
        answer: "fahren",
        options: ["fahre", "fährt", "fahren"],
        explain: "Местоимение wir (мы) → окончание -en: fahren."
      },
      {
        part: "Grammatik",
        prompt: "Ich habe leider ___ Zeit und ___ Auto.",
        answer: "keine / kein",
        options: ["nicht / kein", "keine / kein", "kein / keine"],
        explain: "die Zeit → keine Zeit; das Auto → kein Auto."
      },
      {
        part: "Grammatik",
        prompt: "Письмо другу: «___ Max, wie geht’s dir? Viele Grüße, Anna»",
        answer: "Lieber",
        options: ["Liebe", "Lieber", "Sehr geehrter"],
        explain: "Обращение к другу-мужчине: Lieber."
      }
    ]
  },
  {
    level: "A2",
    title: "Goethe-Zertifikat A2: Пробный экзамен",
    desc: "Проверь уровень A2: Perfekt, придаточные weil/dass, двойные предлоги и чтение.",
    questions: [
      {
        part: "Lesen",
        textBlock: "Письмо о работе: «Sehr geehrte Frau Müller, leider bin ich seit heute Morgen erkältet und habe Fieber. Der Arzt hat mich bis Mittwoch krankgeschrieben.»",
        prompt: "Почему автор письма не может прийти на работу?",
        answer: "Он заболел (простуда и температура)",
        options: ["Он в отпуске", "Он заболел (простуда и температура)", "Он опоздал на поезд"],
        explain: "У автора простуда (erkältet) и температура (Fieber)."
      },
      {
        part: "Lesen",
        textBlock: "Объявление: «Suche Nachhilfe in Deutsch für zweimal pro Woche am Abend. Biete 15 Euro pro Stunde. Tel: 0176-554321»",
        prompt: "Что ищет автор объявления?",
        answer: "Репетитора немецкого языка",
        options: ["Новую квартиру", "Репетитора немецкого языка", "Учебник по математике"],
        explain: "«Suche Nachhilfe in Deutsch» — ищет репетитора по немецкому."
      },
      {
        part: "Hören",
        audioScript: "Letztes Wochenende bin ich mit meinen Freunden in die Berge gewandert. Obwohl wir am Abend müde waren, hat der Ausflug allen großen Spaß gemacht.",
        prompt: "Как автор оценивает поход в горы?",
        answer: "Все получили большое удовольствие, хоть и устали",
        options: ["Было скучно из-за дождя", "Все получили большое удовольствие, хоть и устали", "Они потерялись в лесу"],
        explain: "В тексте сказано: «hat der Ausflug allen großen Spaß gemacht»."
      },
      {
        part: "Hören",
        audioScript: "Wenn Sie vom Bahnhof kommen, nehmen Sie bitte den Bus 14 bis zur Haltestelle Rathaus. Dort steigen Sie aus und gehen hundert Meter geradeaus.",
        prompt: "Где нужно выйти из автобуса №14?",
        answer: "На остановке Rathaus",
        options: ["На вокзале", "На остановке Rathaus", "Через две минуты"],
        explain: "«bis zur Haltestelle Rathaus. Dort steigen Sie aus»."
      },
      {
        part: "Grammatik",
        prompt: "Gestern ___ wir zusammen eine Pizza gegessen und lange geredet.",
        answer: "haben",
        options: ["sind", "haben", "waren"],
        explain: "Глаголы essen и reden образуют Perfekt с haben."
      },
      {
        part: "Grammatik",
        prompt: "Wann ___ du gestern nach Hause gekommen?",
        answer: "bist",
        options: ["hast", "bist", "warst"],
        explain: "kommen (движение) в Perfekt требует sein: du bist ... gekommen."
      },
      {
        part: "Grammatik",
        prompt: "Ich lerne jeden Abend, weil ich meine Aussprache ___.",
        answer: "verbessern möchte",
        options: ["möchte verbessern", "verbessern möchte", "verbessere möchte"],
        explain: "После weil спрягаемый глагол (möchte) стоит в самом конце."
      },
      {
        part: "Grammatik",
        prompt: "Ich stelle die Blumen auf ___ Tisch. Jetzt stehen sie auf ___ Tisch.",
        answer: "den / dem",
        options: ["dem / den", "den / dem", "der / dem"],
        explain: "Куда? (stellen) → Akkusativ den; Где? (stehen) → Dativ dem."
      },
      {
        part: "Grammatik",
        prompt: "Der Zug fährt viel schneller ___ das Fahrrad.",
        answer: "als",
        options: ["wie", "als", "denn"],
        explain: "При сравнительной степени (schneller) используется als."
      },
      {
        part: "Grammatik",
        prompt: "Ich freue ___ sehr auf unsere gemeinsame Reise!",
        answer: "mich",
        options: ["mir", "mich", "sich"],
        explain: "Возвратное местоимение для ich в Akkusativ — mich."
      }
    ]
  },
  {
    level: "B1",
    title: "Goethe-Zertifikat B1: Пробный экзамен",
    desc: "Проверь уровень B1: управление глаголов, Passiv, Relativsätze, um…zu и парные союзы.",
    questions: [
      {
        part: "Lesen",
        textBlock: "Статья: «Immer mehr Berufstätige arbeiten heute teilweise im Homeoffice. Einerseits spart man viel Zeit für den Arbeitsweg, andererseits fehlt manchen der persönliche Kontakt zu den Kollegen.»",
        prompt: "Какой минус удалённой работы назван в тексте?",
        answer: "Некоторым не хватает живого общения с коллегами",
        options: ["Слишком высокая зарплата", "Некоторым не хватает живого общения с коллегами", "Нужно рано вставать"],
        explain: "«andererseits fehlt manchen der persönliche Kontakt zu den Kollegen»."
      },
      {
        part: "Lesen",
        textBlock: "Письмо: «Sehr geehrter Herr Weber, vielen Dank für die Einladung zum Gespräch. Leider muss ich den Termin verschieben, da ich an diesem Tag an einer Konferenz teilnehme.»",
        prompt: "Почему автор переносит встречу?",
        answer: "Потому что в этот день участвует в конференции",
        options: ["Он потерял адрес", "Потому что в этот день участвует в конференции", "Он заболел"],
        explain: "Упомянуто участие в конференции: «an einer Konferenz teilnehme»."
      },
      {
        part: "Hören",
        audioScript: "Um eine Fremdsprache wirklich flüssig zu beherrschen, sollte man nicht nur Regeln auswendig lernen, sondern sie täglich in kurzen Dialogen anwenden.",
        prompt: "Что рекомендуется делать для свободного владения языком?",
        answer: "Ежедневно применять правила в коротких диалогах",
        options: ["Учить только списки правил", "Ежедневно применять правила в коротких диалогах", "Заниматься раз в месяц"],
        explain: "«sondern sie täglich in kurzen Dialogen anwenden»."
      },
      {
        part: "Hören",
        audioScript: "Der Vertrag wurde gestern von beiden Partnern unterschrieben und wird heute per E-Mail an die Buchhaltung geschickt.",
        prompt: "Что происходит с договором сегодня?",
        answer: "Его отправляют в бухгалтерию по электронной почте",
        options: ["Его только пишут", "Его отправляют в бухгалтерию по электронной почте", "Его отменили"],
        explain: "«wird heute per E-Mail an die Buchhaltung geschickt»."
      },
      {
        part: "Grammatik",
        prompt: "___ wartest du? — Ich warte darauf, dass der Kurs anfängt.",
        answer: "Worauf",
        options: ["Auf wen", "Worauf", "Darauf"],
        explain: "Вопрос о предмете/событии с глаголом warten auf → Worauf."
      },
      {
        part: "Grammatik",
        prompt: "Das neue Krankenhaus ___ im letzten Jahr modernisiert.",
        answer: "wurde",
        options: ["wird", "wurde", "hat"],
        explain: "Прошедшее время пассивного залога (Präteritum Passiv): wurde + Partizip II."
      },
      {
        part: "Grammatik",
        prompt: "Er verließ das Büro, ___ sich zu verabschieden.",
        answer: "ohne",
        options: ["um", "ohne", "damit"],
        explain: "«не попрощавшись» (без того чтобы попрощаться) → ohne ... zu."
      },
      {
        part: "Grammatik",
        prompt: "Die Kollegen, mit ___ ich am Projekt arbeite, sind sehr hilfsbereit.",
        answer: "denen",
        options: ["die", "den", "denen"],
        explain: "mit + Dativ множественного числа относительного местоимения → denen."
      },
      {
        part: "Grammatik",
        prompt: "___ mehr man auf Deutsch hört, ___ leichter versteht man Filme.",
        answer: "Je / desto",
        options: ["Sowohl / als", "Je / desto", "Weder / noch"],
        explain: "Конструкция «чем…, тем…» → Je ..., desto ..."
      },
      {
        part: "Grammatik",
        prompt: "Wegen ___ starken Sturms fielen mehrere Züge aus.",
        answer: "des",
        options: ["der", "dem", "des"],
        explain: "Предлог wegen + Genitiv м.р. (der Sturm) → des starken Sturms."
      }
    ]
  }
];
