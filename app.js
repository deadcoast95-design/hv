const KEY='hausverwaltung_pwa_v26';
const OLD_KEYS=['hausverwaltung_pwa_v25','hausverwaltung_pwa_v24','hausverwaltung_pwa_v23','hausverwaltung_pwa_v22','hausverwaltung_pwa_v21','hausverwaltung_pwa_v20','hausverwaltung_pwa_v19','hausverwaltung_pwa_v18','hausverwaltung_pwa_v17','hausverwaltung_pwa_v16','hausverwaltung_pwa_v15','hausverwaltung_pwa_v14','hausverwaltung_pwa_v13','hausverwaltung_pwa_v12','hausverwaltung_pwa_v11','hausverwaltung_pwa_v10','hausverwaltung_pwa_v9','hausverwaltung_pwa_v8','hausverwaltung_pwa_v7','hausverwaltung_pwa_v6','hausverwaltung_pwa_v5','hausverwaltung_pwa_v4','hausverwaltung_pwa_v3','hausverwaltung_pwa_v2','hausverwaltung_pwa'];

const LANG_KEY='hausverwaltung_ui_language_v1';
const UI_TEXT={
 de:{
  overview:'Übersicht', account:'Konto', objects:'Objekte', planning:'Planung', vehicles:'Fahrzeuge', more:'Mehr',
  private:'PRIVATE IMMOBILIENVERWALTUNG', local:'Lokal gespeichert',
  loan:'Kreditübersicht', objectCosts:'Kosten je Objekt', contributions:'Monatliche Einzahlungen der Personen',
  lastBookings:'Letzte Buchungen', waste:'Müllabfuhr-Kalender', costs:'Kostenpositionen',
  objectOverview:'Objektübersicht', vehicleOverview:'Fahrzeugübersicht', taskOverview:'Aufgabenübersicht',
  infoOnly:'Nur Information', dateTap:'Datum antippen',
  bookings:'Buchungen', costPlan:'Kostenplan', addBooking:'+ Buchung', addCost:'+ Kostenposition',
  monthlyPlan:'Monatlich geplant', yearlyPlan:'Jährlich geplant',
  addObject:'+ Objekt', addPerson:'+ Person', shares:'Anteile',
  tasks:'Aufgaben', maintenance:'Wartungen', reserves:'Rücklagen', addTask:'+ Aufgabe',
  addVehicle:'+ Fahrzeug', vehicleFile:'Fahrzeugakte',
  loanManagement:'Kreditverwaltung', editLoan:'Kredit bearbeiten', management:'Verwaltung',
  language:'Sprache', basicSettings:'Grundeinstellungen', name:'Bezeichnung',
  startBalance:'Startkontostand', minReserve:'Mindestreserve', monthlyReserve:'Monatliche Rücklage',
  save:'Speichern', backup:'Datensicherung', export:'Exportieren', import:'Importieren',
  deleteData:'Alle lokalen Daten löschen', localMode:'Lokaler App-Modus', privacy:'Datenschutz',
  storage:'Speicherort', sync:'Synchronisierung', offline:'Offline', appVersion:'App-Version',
  category:'Kategorie', object:'Objekt', monthly:'Monatlich', interval:'Intervall', yearTotal:'Jahr gesamt',vehicleHint:'Ölwechsel, Kilometerstand, HU/TÜV und wichtige Wartungen im Blick behalten.',vehiclesCount:'Fahrzeuge',noInterval:'Kein Intervall',inOrder:'In Ordnung',soonDue:'Bald fällig',oilDue:'Ölwechsel fällig',mileage:'Kilometerstand',lastOil:'Letzter Ölwechsel',nextOil:'Nächster Ölwechsel',tuvDue:'HU / TÜV bis',motorOil:'Motoröl',tires:'Reifen',brakesLast:'Bremsen zuletzt',batteryLast:'Batterie zuletzt',edit:'Bearbeiten',delete:'Löschen',addService:'+ Wartung',lastWorkshop:'Letzter Werkstatteintrag',makeModel:'Marke / Modell',plate:'Kennzeichen',nextMaintenance:'Nächste Wartungen / Informationen',noMaintenance:'Keine weiteren Wartungsinformationen',remaining:'km verbleibend',petrol:'Benzin',diesel:'Diesel',hybrid:'Hybrid',electric:'Elektro',gas:'Gas',other:'Sonstiges',serviceOil:'Ölwechsel',inspection:'Inspektion',brakes:'Bremsen',tireChange:'Reifenwechsel',battery:'Batterie',climate:'Klimaservice',sparkPlugs:'Zündkerzen',airFilter:'Luftfilter',cabinFilter:'Innenraumfilter',gearOil:'Getriebeöl',repair:'Reparatur',vehicleAddTitle:'Fahrzeug hinzufügen',vehicleEditTitle:'Fahrzeug bearbeiten',vehicleData:'Fahrzeugdaten',manufacturer:'Hersteller',model:'Modell',year:'Baujahr',fuel:'Antrieb',currentMileage:'Aktueller Kilometerstand',oilSection:'Ölwechsel',lastOilDate:'Letzter Ölwechsel',atMileage:'bei Kilometerstand',nextOilDate:'Nächster Ölwechsel Datum',nextOilKm:'Nächster Ölwechsel bei km',oilSpec:'Motoröl / Spezifikation',otherMaintenance:'Weitere Wartung',notes:'Notizen',cancel:'Abbrechen',serviceAdd:'Wartung eintragen',date:'Datum',work:'Arbeit / Wartung',cost:'Kosten €',note:'Notiz',noVehicles:'Noch keine Fahrzeuge angelegt',noPlate:'Kein Kennzeichen',unknownYear:'Baujahr unbekannt',unknownFuel:'Antrieb unbekannt',checkAsNeeded:'Kontrolle nach Bedarf',
 },
 ru:{
  overview:'Обзор', account:'Счёт', objects:'Объекты', planning:'Планирование', vehicles:'Автомобили', more:'Ещё',
  private:'ЧАСТНОЕ УПРАВЛЕНИЕ НЕДВИЖИМОСТЬЮ', local:'Сохранено локально',
  loan:'Обзор кредита', objectCosts:'Расходы по объектам', contributions:'Ежемесячные взносы',
  lastBookings:'Последние операции', waste:'Календарь вывоза мусора', costs:'Статьи расходов',
  objectOverview:'Обзор объектов', vehicleOverview:'Обзор автомобилей', taskOverview:'Обзор задач',
  infoOnly:'Только информация', dateTap:'Нажмите дату',
  bookings:'Операции', costPlan:'План расходов', addBooking:'+ Операция', addCost:'+ Статья расходов',
  monthlyPlan:'План в месяц', yearlyPlan:'План за год',
  addObject:'+ Объект', addPerson:'+ Человек', shares:'Доли',
  tasks:'Задачи', maintenance:'Обслуживание', reserves:'Резервы', addTask:'+ Задача',
  addVehicle:'+ Автомобиль', vehicleFile:'Карточка автомобиля',
  loanManagement:'Управление кредитом', editLoan:'Редактировать кредит', management:'Управление',
  language:'Язык', basicSettings:'Основные настройки', name:'Название',
  startBalance:'Начальный баланс', minReserve:'Минимальный резерв', monthlyReserve:'Ежемесячный резерв',
  save:'Сохранить', backup:'Резервная копия', export:'Экспорт', import:'Импорт',
  deleteData:'Удалить локальные данные', localMode:'Локальный режим', privacy:'Конфиденциальность',
  storage:'Место хранения', sync:'Синхронизация', offline:'Офлайн', appVersion:'Версия приложения',
  category:'Категория', object:'Объект', monthly:'В месяц', interval:'Интервал', yearTotal:'За год',vehicleHint:'Следите за заменой масла, пробегом, техосмотром и важным обслуживанием.',vehiclesCount:'Автомобилей',noInterval:'Интервал не задан',inOrder:'В порядке',soonDue:'Скоро требуется',oilDue:'Пора менять масло',mileage:'Пробег',lastOil:'Последняя замена масла',nextOil:'Следующая замена масла',tuvDue:'Техосмотр до',motorOil:'Моторное масло',tires:'Шины',brakesLast:'Тормоза: последнее обслуживание',batteryLast:'Аккумулятор: последнее обслуживание',edit:'Изменить',delete:'Удалить',addService:'+ Обслуживание',lastWorkshop:'Последняя запись сервиса',makeModel:'Марка / модель',plate:'Госномер',nextMaintenance:'Следующие обслуживания / информация',noMaintenance:'Других записей обслуживания нет',remaining:'км осталось',petrol:'Бензин',diesel:'Дизель',hybrid:'Гибрид',electric:'Электро',gas:'Газ',other:'Другое',serviceOil:'Замена масла',inspection:'Инспекция',brakes:'Тормоза',tireChange:'Смена шин',battery:'Аккумулятор',climate:'Обслуживание кондиционера',sparkPlugs:'Свечи зажигания',airFilter:'Воздушный фильтр',cabinFilter:'Салонный фильтр',gearOil:'Масло КПП',repair:'Ремонт',vehicleAddTitle:'Добавить автомобиль',vehicleEditTitle:'Редактировать автомобиль',vehicleData:'Данные автомобиля',manufacturer:'Марка',model:'Модель',year:'Год выпуска',fuel:'Тип топлива',currentMileage:'Текущий пробег',oilSection:'Замена масла',lastOilDate:'Последняя замена масла',atMileage:'при пробеге',nextOilDate:'Дата следующей замены масла',nextOilKm:'Следующая замена масла при км',oilSpec:'Масло / спецификация',otherMaintenance:'Другое обслуживание',notes:'Заметки',cancel:'Отмена',serviceAdd:'Добавить обслуживание',date:'Дата',work:'Работа / обслуживание',cost:'Стоимость €',note:'Заметка',noVehicles:'Автомобили ещё не добавлены',noPlate:'Нет госномера',unknownYear:'Год неизвестен',unknownFuel:'Тип топлива неизвестен',checkAsNeeded:'Проверка по необходимости',
 }
};
function uiLanguage(){try{const c=localStorage.getItem(LANG_KEY)||'de';return LANGUAGE_REGISTRY_V24.languages.some(x=>x.code===c)?c:'de'}catch{return 'de'}}
function uiText(key){return UI_TEXT[uiLanguage()]?.[key]||UI_TEXT.de[key]||key}
function applyUiLanguage(){
 const current=uiLanguage();
 document.documentElement.lang=current==='ru'?'ru':'de';
 document.querySelectorAll('[data-i18n]').forEach(el=>{
  const value=uiText(el.dataset.i18n);
  if(value)el.textContent=value;
 });
 translateVehicleOptions();
 const select=document.getElementById('uiLanguageSelect');
 if(select)select.value=current;
 const active=document.querySelector('.view.active')?.dataset.view||'dashboard';
 const titles={dashboard:'overview',transactions:'account',properties:'objects',tasks:'planning',vehicles:'vehicles',settings:'more'};
 const title=document.getElementById('pageTitle');
 if(title)title.textContent=uiText(titles[active]||'overview');
 try{renderVehicles()}catch{}
 try{renderDashboardVehicles()}catch{}
 try{renderDashboard()}catch{}
 try{renderProperties()}catch{}
 try{renderDashboardProperties()}catch{}
 try{renderOwners()}catch{}
 try{renderCosts()}catch{}
 try{renderTasks()}catch{}
 populateLanguagesV24();
 translateDomV24(document.body);
 applyLocalPermissionsV24();
}
async function setUiLanguage(value){
 const code=LANGUAGE_REGISTRY_V24.languages.some(x=>x.code===value)?value:'de';
 try{localStorage.setItem(LANG_KEY,code)}catch{}
 await loadLanguagePackV24(code);
 applyUiLanguage();
 populateLanguagesV24();
 translateDomV24(document.body);
}
function fuelLabel(value){
 const map={'Benzin':'petrol','Diesel':'diesel','Hybrid':'hybrid','Elektro':'electric','Gas':'gas','Sonstiges':'other'};
 return uiText(map[value]||'other');
}
function serviceTypeLabel(value){
 const map={'Ölwechsel':'serviceOil','Inspektion':'inspection','Bremsen':'brakes','Reifenwechsel':'tireChange','Batterie':'battery','HU / TÜV':'tuvDue','Klimaservice':'climate','Zündkerzen':'sparkPlugs','Luftfilter':'airFilter','Innenraumfilter':'cabinFilter','Getriebeöl':'gearOil','Reparatur':'repair','Sonstiges':'other'};
 return uiText(map[value]||'other');
}
function translateVehicleOptions(){
 const fuelMap={'Benzin':'petrol','Diesel':'diesel','Hybrid':'hybrid','Elektro':'electric','Gas':'gas','Sonstiges':'other'};
 const fuelSelect=document.querySelector('#vehicleForm select[name="fuel"]');
 if(fuelSelect)[...fuelSelect.options].forEach(o=>{if(fuelMap[o.value])o.textContent=uiText(fuelMap[o.value])});
 const serviceMap={'Ölwechsel':'serviceOil','Inspektion':'inspection','Bremsen':'brakes','Reifenwechsel':'tireChange','Batterie':'battery','HU / TÜV':'tuvDue','Klimaservice':'climate','Zündkerzen':'sparkPlugs','Luftfilter':'airFilter','Innenraumfilter':'cabinFilter','Getriebeöl':'gearOil','Reparatur':'repair','Sonstiges':'other'};
 const serviceSelect=document.querySelector('#vehicleServiceForm select[name="type"]');
 if(serviceSelect)[...serviceSelect.options].forEach(o=>{if(serviceMap[o.value])o.textContent=uiText(serviceMap[o.value])});
}



const LANGUAGE_REGISTRY_V24={"default": "de", "languages": [{"code": "de", "label": "Deutsch", "file": "lang/de.json"}, {"code": "ru", "label": "Русский", "file": "lang/ru.json"}]};
const LANGUAGE_FALLBACK_V24={de:{"meta": {"code": "de", "label": "Deutsch", "version": 1}, "phrases": {"Übersicht": "Übersicht", "Konto": "Konto", "Objekte": "Objekte", "Planung": "Planung", "Fahrzeuge": "Fahrzeuge", "Mehr": "Mehr", "PRIVATE IMMOBILIENVERWALTUNG": "PRIVATE IMMOBILIENVERWALTUNG", "Lokal gespeichert": "Lokal gespeichert", "Gespeichert": "Gespeichert", "Speichern": "Speichern", "Monatliche Ausgaben": "Monatliche Ausgaben", "Monatliche Einnahmen": "Monatliche Einnahmen", "Monatlicher Saldo": "Monatlicher Saldo", "Kreditübersicht": "Kreditübersicht", "Darlehenssumme": "Darlehenssumme", "Bereits getilgt": "Bereits getilgt", "Restschuld": "Restschuld", "Monatsrate": "Monatsrate", "Bank": "Bank", "Sollzins": "Sollzins", "Zinsanteil nächster Monat": "Zinsanteil nächster Monat", "Tilgungsanteil nächster Monat": "Tilgungsanteil nächster Monat", "Zinsbindung bis": "Zinsbindung bis", "Berechnung": "Berechnung", "Kosten je Objekt": "Kosten je Objekt", "Nur Information": "Nur Information", "Beide Objekte zusammen": "Beide Objekte zusammen", "Gesamte Kostenpositionen": "Gesamte Kostenpositionen", "Anzeige der rechnerischen Kosten je Objekt. Bearbeitung erfolgt im Kostenplan.": "Anzeige der rechnerischen Kosten je Objekt. Bearbeitung erfolgt im Kostenplan.", "Monatliche Einzahlungen der Personen": "Monatliche Einzahlungen der Personen", "Letzte Buchungen": "Letzte Buchungen", "Alle": "Alle", "Müllabfuhr-Kalender": "Müllabfuhr-Kalender", "Datum antippen": "Datum antippen", "Restmüll": "Restmüll", "Bio": "Bio", "Papier": "Papier", "Plastik": "Plastik", "Kostenpositionen": "Kostenpositionen", "Kategorie": "Kategorie", "Objekt": "Objekt", "Monatlich": "Monatlich", "Intervall": "Intervall", "Jahr gesamt": "Jahr gesamt", "Gesamt": "Gesamt", "Monatsdurchschnitt": "Monatsdurchschnitt", "Objektübersicht": "Objektübersicht", "Fahrzeugübersicht": "Fahrzeugübersicht", "Aufgabenübersicht": "Aufgabenübersicht", "Buchungen": "Buchungen", "Kostenplan": "Kostenplan", "+ Buchung": "+ Buchung", "+ Kostenposition": "+ Kostenposition", "Monatlich geplant": "Monatlich geplant", "Jährlich geplant": "Jährlich geplant", "+ Objekt": "+ Objekt", "+ Person": "+ Person", "Anteile": "Anteile", "Personen und Objekte verwalten.": "Personen und Objekte verwalten.", "Aufgaben": "Aufgaben", "Wartungen": "Wartungen", "Rücklagen": "Rücklagen", "+ Aufgabe": "+ Aufgabe", "+ Wartung": "+ Wartung", "+ Rücklage": "+ Rücklage", "Kreditverwaltung": "Kreditverwaltung", "Kredit bearbeiten": "Kredit bearbeiten", "Die Übersicht zeigt nur die aktuellen Werte. Bankdaten, Stichtag und automatische Fortschreibung werden hier gepflegt.": "Die Übersicht zeigt nur die aktuellen Werte. Bankdaten, Stichtag und automatische Fortschreibung werden hier gepflegt.", "Verwaltung": "Verwaltung", "Grundeinstellungen": "Grundeinstellungen", "Bezeichnung": "Bezeichnung", "Startkontostand": "Startkontostand", "Mindestreserve": "Mindestreserve", "Monatliche Rücklage": "Monatliche Rücklage", "Datensicherung": "Datensicherung", "Exportiere alle Daten als JSON-Datei oder importiere eine zuvor gespeicherte Sicherung.": "Exportiere alle Daten als JSON-Datei oder importiere eine zuvor gespeicherte Sicherung.", "Exportieren": "Exportieren", "Importieren": "Importieren", "Alle lokalen Daten löschen": "Alle lokalen Daten löschen", "Lokaler App-Modus": "Lokaler App-Modus", "Aktiv": "Aktiv", "Speicherort": "Speicherort", "Dieses Gerät": "Dieses Gerät", "Synchronisierung": "Synchronisierung", "Aus": "Aus", "Offline": "Offline", "Verfügbar": "Verfügbar", "App-Version": "App-Version", "Datenschutz": "Datenschutz", "Sprache": "Sprache", "Fahrzeugakte": "Fahrzeugakte", "Werkstattübersicht": "Werkstattübersicht", "Ölwechsel, Kilometerstand, HU/TÜV und wichtige Wartungen im Blick behalten.": "Ölwechsel, Kilometerstand, HU/TÜV und wichtige Wartungen im Blick behalten.", "Kein Intervall": "Kein Intervall", "In Ordnung": "In Ordnung", "Bald fällig": "Bald fällig", "Ölwechsel fällig": "Ölwechsel fällig", "Kilometerstand": "Kilometerstand", "Letzter Ölwechsel": "Letzter Ölwechsel", "Nächster Ölwechsel": "Nächster Ölwechsel", "HU / TÜV bis": "HU / TÜV bis", "Motoröl": "Motoröl", "Reifen": "Reifen", "Bremsen zuletzt": "Bremsen zuletzt", "Batterie zuletzt": "Batterie zuletzt", "Bearbeiten": "Bearbeiten", "Löschen": "Löschen", "Letzter Werkstatteintrag": "Letzter Werkstatteintrag", "Marke / Modell": "Marke / Modell", "Kennzeichen": "Kennzeichen", "Nächste Wartungen / Informationen": "Nächste Wartungen / Informationen", "Keine weiteren Wartungsinformationen": "Keine weiteren Wartungsinformationen", "Benzin": "Benzin", "Diesel": "Diesel", "Hybrid": "Hybrid", "Elektro": "Elektro", "Gas": "Gas", "Sonstiges": "Sonstiges", "Ölwechsel": "Ölwechsel", "Inspektion": "Inspektion", "Bremsen": "Bremsen", "Reifenwechsel": "Reifenwechsel", "Batterie": "Batterie", "HU / TÜV": "HU / TÜV", "Klimaservice": "Klimaservice", "Zündkerzen": "Zündkerzen", "Luftfilter": "Luftfilter", "Innenraumfilter": "Innenraumfilter", "Getriebeöl": "Getriebeöl", "Reparatur": "Reparatur", "Fahrzeug hinzufügen": "Fahrzeug hinzufügen", "Fahrzeug bearbeiten": "Fahrzeug bearbeiten", "Fahrzeugdaten": "Fahrzeugdaten", "Hersteller": "Hersteller", "Modell": "Modell", "Baujahr": "Baujahr", "Antrieb": "Antrieb", "Aktueller Kilometerstand": "Aktueller Kilometerstand", "bei Kilometerstand": "bei Kilometerstand", "Nächster Ölwechsel Datum": "Nächster Ölwechsel Datum", "Nächster Ölwechsel bei km": "Nächster Ölwechsel bei km", "Motoröl / Spezifikation": "Motoröl / Spezifikation", "Weitere Wartung": "Weitere Wartung", "Notizen": "Notizen", "Abbrechen": "Abbrechen", "Wartung eintragen": "Wartung eintragen", "Datum": "Datum", "Arbeit / Wartung": "Arbeit / Wartung", "Kosten €": "Kosten €", "Notiz": "Notiz", "Foto": "Foto", "Adresse": "Adresse", "Wohnfläche m²": "Wohnfläche m²", "Grundstücksgröße m²": "Grundstücksgröße m²", "Zimmer": "Zimmer", "Badezimmer": "Badezimmer", "WC": "WC", "Nutzung": "Nutzung", "Eigennutzung": "Eigennutzung", "Mietfreie Überlassung": "Mietfreie Überlassung", "Vermietung": "Vermietung", "Leerstand": "Leerstand", "Energie und Technik": "Energie und Technik", "Energieeffizienzklasse": "Energieeffizienzklasse", "Energieklasse": "Energieklasse", "Heizungsart": "Heizungsart", "Zählerstände": "Zählerstände", "Stromzählerstand kWh": "Stromzählerstand kWh", "Wasserzählerstand m³": "Wasserzählerstand m³", "Datum der Ablesung": "Datum der Ablesung", "Notiz zum Objekt": "Notiz zum Objekt", "Grundstück": "Grundstück", "Bäder / WC": "Bäder / WC", "Bäder": "Bäder", "Stromzähler": "Stromzähler", "Wasserzähler": "Wasserzähler", "Ablesedatum": "Ablesedatum", "Heizung": "Heizung", "ohne Termin": "ohne Termin", "Person": "Person", "Eigentümer": "Eigentümer", "Bewohner": "Bewohner", "Administrator": "Administrator", "Gast": "Gast", "Inaktiv": "Inaktiv", "Eigentum": "Eigentum", "Zahlung": "Zahlung", "Aktivieren": "Aktivieren", "Deaktivieren": "Deaktivieren", "Entfernen": "Entfernen", "Keine Aufgabe eingetragen": "Keine Aufgabe eingetragen", "keine Zuordnung": "keine Zuordnung", "Gemeinsam": "Gemeinsam", "Keine Aufgaben": "Keine Aufgaben", "Keine Wartungen": "Keine Wartungen", "Keine Rücklagenziele": "Keine Rücklagenziele", "Erledigen": "Erledigen", "Erledigt": "Erledigt", "Offen": "Offen", "Ziel": "Ziel", "gespart": "gespart", "offen": "offen", "Monate": "Monate", "Gemeinsame Kosten": "Gemeinsame Kosten", "Keine Person ausgewählt": "Keine Person ausgewählt", "kein Hinweis": "kein Hinweis", "je Zahlung": "je Zahlung", "je Anteil": "je Anteil", "Alle Objekte / gemeinsam": "Alle Objekte / gemeinsam", "Alle Objekte": "Alle Objekte", "monatlich": "monatlich", "5× jährlich": "5× jährlich", "vierteljährlich": "vierteljährlich", "halbjährlich": "halbjährlich", "jährlich": "jährlich", "Objekt hinzufügen": "Objekt hinzufügen", "Objekt bearbeiten": "Objekt bearbeiten", "Person hinzufügen": "Person hinzufügen", "Person bearbeiten": "Person bearbeiten", "Aufgabe hinzufügen": "Aufgabe hinzufügen", "Aufgabe bearbeiten": "Aufgabe bearbeiten", "Titel": "Titel", "Fälligkeit": "Fälligkeit", "Verantwortlich": "Verantwortlich", "Kostenposition hinzufügen": "Kostenposition hinzufügen", "Kostenposition bearbeiten": "Kostenposition bearbeiten", "Beteiligte Personen": "Beteiligte Personen", "Betrag je Zahlung": "Betrag je Zahlung", "Fälligkeit / Hinweis": "Fälligkeit / Hinweis", "Rolle": "Rolle", "Status": "Status", "Priorität": "Priorität", "Niedrig": "Niedrig", "Mittel": "Mittel", "Hoch": "Hoch", "Keine offenen Termine": "Keine offenen Termine", "Noch keine Personen": "Noch keine Personen", "Noch keine Objekte": "Noch keine Objekte", "Noch keine Kostenpositionen": "Noch keine Kostenpositionen", "Noch keine Buchungen": "Noch keine Buchungen", "Lokales Profil & Rechte": "Lokales Profil & Rechte", "Nur lokal": "Nur lokal", "Bleibt vollständig lokal auf diesem Gerät. Später kann dieselbe Struktur an NAS-Benutzerkonten angebunden werden.": "Bleibt vollständig lokal auf diesem Gerät. Später kann dieselbe Struktur an NAS-Benutzerkonten angebunden werden.", "Aktives Profil": "Aktives Profil", "NAS später möglich": "NAS später möglich", "Finanzen": "Finanzen"}},ru:{"meta": {"code": "ru", "label": "Русский", "version": 1}, "phrases": {"Übersicht": "Обзор", "Konto": "Счёт", "Objekte": "Объекты", "Planung": "Планирование", "Fahrzeuge": "Автомобили", "Mehr": "Ещё", "PRIVATE IMMOBILIENVERWALTUNG": "ЧАСТНОЕ УПРАВЛЕНИЕ НЕДВИЖИМОСТЬЮ", "Lokal gespeichert": "Сохранено локально", "Gespeichert": "Сохранено", "Speichern": "Сохранить", "Monatliche Ausgaben": "Расходы в месяц", "Monatliche Einnahmen": "Доходы в месяц", "Monatlicher Saldo": "Баланс за месяц", "Kreditübersicht": "Обзор кредита", "Darlehenssumme": "Сумма кредита", "Bereits getilgt": "Уже погашено", "Restschuld": "Остаток долга", "Monatsrate": "Ежемесячный платёж", "Bank": "Банк", "Sollzins": "Процентная ставка", "Zinsanteil nächster Monat": "Проценты в следующем месяце", "Tilgungsanteil nächster Monat": "Погашение тела кредита в следующем месяце", "Zinsbindung bis": "Фиксированная ставка до", "Berechnung": "Расчёт", "Kosten je Objekt": "Расходы по объектам", "Nur Information": "Только информация", "Beide Objekte zusammen": "Все объекты вместе", "Gesamte Kostenpositionen": "Все статьи расходов", "Anzeige der rechnerischen Kosten je Objekt. Bearbeitung erfolgt im Kostenplan.": "Расчётные расходы по объектам. Редактирование выполняется в плане расходов.", "Monatliche Einzahlungen der Personen": "Ежемесячные взносы", "Letzte Buchungen": "Последние операции", "Alle": "Все", "Müllabfuhr-Kalender": "Календарь вывоза мусора", "Datum antippen": "Нажмите дату", "Restmüll": "Остаточный мусор", "Bio": "Био", "Papier": "Бумага", "Plastik": "Пластик", "Kostenpositionen": "Статьи расходов", "Kategorie": "Категория", "Objekt": "Объект", "Monatlich": "В месяц", "Intervall": "Интервал", "Jahr gesamt": "За год", "Gesamt": "Итого", "Monatsdurchschnitt": "Среднее за месяц", "Objektübersicht": "Обзор объектов", "Fahrzeugübersicht": "Обзор автомобилей", "Aufgabenübersicht": "Обзор задач", "Buchungen": "Операции", "Kostenplan": "План расходов", "+ Buchung": "+ Операция", "+ Kostenposition": "+ Статья расходов", "Monatlich geplant": "План в месяц", "Jährlich geplant": "План за год", "+ Objekt": "+ Объект", "+ Person": "+ Человек", "Anteile": "Доли", "Personen und Objekte verwalten.": "Управление людьми и объектами.", "Aufgaben": "Задачи", "Wartungen": "Обслуживание", "Rücklagen": "Резервы", "+ Aufgabe": "+ Задача", "+ Wartung": "+ Обслуживание", "+ Rücklage": "+ Резерв", "Kreditverwaltung": "Управление кредитом", "Kredit bearbeiten": "Редактировать кредит", "Die Übersicht zeigt nur die aktuellen Werte. Bankdaten, Stichtag und automatische Fortschreibung werden hier gepflegt.": "На обзоре показаны текущие значения. Данные банка, дата и автоматический расчёт настраиваются здесь.", "Verwaltung": "Управление", "Grundeinstellungen": "Основные настройки", "Bezeichnung": "Название", "Startkontostand": "Начальный баланс", "Mindestreserve": "Минимальный резерв", "Monatliche Rücklage": "Ежемесячный резерв", "Datensicherung": "Резервная копия", "Exportiere alle Daten als JSON-Datei oder importiere eine zuvor gespeicherte Sicherung.": "Экспортируйте все данные в JSON-файл или импортируйте ранее сохранённую копию.", "Exportieren": "Экспорт", "Importieren": "Импорт", "Alle lokalen Daten löschen": "Удалить все локальные данные", "Lokaler App-Modus": "Локальный режим приложения", "Aktiv": "Активно", "Speicherort": "Место хранения", "Dieses Gerät": "Это устройство", "Synchronisierung": "Синхронизация", "Aus": "Выкл.", "Offline": "Офлайн", "Verfügbar": "Доступно", "App-Version": "Версия приложения", "Datenschutz": "Конфиденциальность", "Sprache": "Язык", "Fahrzeugakte": "Карточка автомобиля", "Werkstattübersicht": "Сервисная история", "Ölwechsel, Kilometerstand, HU/TÜV und wichtige Wartungen im Blick behalten.": "Следите за заменой масла, пробегом, техосмотром и важным обслуживанием.", "Kein Intervall": "Интервал не задан", "In Ordnung": "В порядке", "Bald fällig": "Скоро требуется", "Ölwechsel fällig": "Пора менять масло", "Kilometerstand": "Пробег", "Letzter Ölwechsel": "Последняя замена масла", "Nächster Ölwechsel": "Следующая замена масла", "HU / TÜV bis": "Техосмотр до", "Motoröl": "Моторное масло", "Reifen": "Шины", "Bremsen zuletzt": "Тормоза: последнее обслуживание", "Batterie zuletzt": "Аккумулятор: последнее обслуживание", "Bearbeiten": "Изменить", "Löschen": "Удалить", "Letzter Werkstatteintrag": "Последняя запись сервиса", "Marke / Modell": "Марка / модель", "Kennzeichen": "Госномер", "Nächste Wartungen / Informationen": "Следующие обслуживания / информация", "Keine weiteren Wartungsinformationen": "Других записей обслуживания нет", "Benzin": "Бензин", "Diesel": "Дизель", "Hybrid": "Гибрид", "Elektro": "Электро", "Gas": "Газ", "Sonstiges": "Другое", "Ölwechsel": "Замена масла", "Inspektion": "Инспекция", "Bremsen": "Тормоза", "Reifenwechsel": "Смена шин", "Batterie": "Аккумулятор", "HU / TÜV": "Техосмотр", "Klimaservice": "Обслуживание кондиционера", "Zündkerzen": "Свечи зажигания", "Luftfilter": "Воздушный фильтр", "Innenraumfilter": "Салонный фильтр", "Getriebeöl": "Масло КПП", "Reparatur": "Ремонт", "Fahrzeug hinzufügen": "Добавить автомобиль", "Fahrzeug bearbeiten": "Редактировать автомобиль", "Fahrzeugdaten": "Данные автомобиля", "Hersteller": "Марка", "Modell": "Модель", "Baujahr": "Год постройки", "Antrieb": "Тип топлива", "Aktueller Kilometerstand": "Текущий пробег", "bei Kilometerstand": "при пробеге", "Nächster Ölwechsel Datum": "Дата следующей замены масла", "Nächster Ölwechsel bei km": "Следующая замена масла при км", "Motoröl / Spezifikation": "Масло / спецификация", "Weitere Wartung": "Другое обслуживание", "Notizen": "Заметки", "Abbrechen": "Отмена", "Wartung eintragen": "Добавить обслуживание", "Datum": "Дата", "Arbeit / Wartung": "Работа / обслуживание", "Kosten €": "Стоимость €", "Notiz": "Заметка", "Foto": "Фото", "Adresse": "Адрес", "Wohnfläche m²": "Жилая площадь м²", "Grundstücksgröße m²": "Площадь участка м²", "Zimmer": "Комнаты", "Badezimmer": "Ванные", "WC": "Туалеты", "Nutzung": "Использование", "Eigennutzung": "Собственное проживание", "Mietfreie Überlassung": "Бесплатное проживание", "Vermietung": "Аренда", "Leerstand": "Пустует", "Energie und Technik": "Энергия и техника", "Energieeffizienzklasse": "Класс энергоэффективности", "Energieklasse": "Класс энергоэффективности", "Heizungsart": "Тип отопления", "Zählerstände": "Показания счётчиков", "Stromzählerstand kWh": "Электросчётчик кВт⋅ч", "Wasserzählerstand m³": "Счётчик воды м³", "Datum der Ablesung": "Дата показаний", "Notiz zum Objekt": "Заметка об объекте", "Grundstück": "Участок", "Bäder / WC": "Ванные / туалеты", "Bäder": "Ванные", "Stromzähler": "Электросчётчик", "Wasserzähler": "Счётчик воды", "Ablesedatum": "Дата показаний", "Heizung": "Отопление", "ohne Termin": "без даты", "Person": "Человек", "Eigentümer": "Собственник", "Bewohner": "Житель", "Administrator": "Администратор", "Gast": "Гость", "Inaktiv": "Неактивен", "Eigentum": "Собственность", "Zahlung": "Оплата", "Aktivieren": "Активировать", "Deaktivieren": "Деактивировать", "Entfernen": "Удалить", "Keine Aufgabe eingetragen": "Задача не указана", "keine Zuordnung": "нет привязки", "Gemeinsam": "Совместно", "Keine Aufgaben": "Нет задач", "Keine Wartungen": "Нет обслуживаний", "Keine Rücklagenziele": "Нет целей резерва", "Erledigen": "Выполнить", "Erledigt": "Выполнено", "Offen": "Открыто", "Ziel": "Цель", "gespart": "накоплено", "offen": "открыто", "Monate": "месяцев", "Gemeinsame Kosten": "Общие расходы", "Keine Person ausgewählt": "Не выбран человек", "kein Hinweis": "без примечания", "je Zahlung": "за платёж", "je Anteil": "за долю", "Alle Objekte / gemeinsam": "Все объекты / общие", "Alle Objekte": "Все объекты", "monatlich": "ежемесячно", "5× jährlich": "5× в год", "vierteljährlich": "ежеквартально", "halbjährlich": "раз в полгода", "jährlich": "ежегодно", "Objekt hinzufügen": "Добавить объект", "Objekt bearbeiten": "Редактировать объект", "Person hinzufügen": "Добавить человека", "Person bearbeiten": "Редактировать человека", "Aufgabe hinzufügen": "Добавить задачу", "Aufgabe bearbeiten": "Редактировать задачу", "Titel": "Название", "Fälligkeit": "Срок", "Verantwortlich": "Ответственный", "Kostenposition hinzufügen": "Добавить статью расходов", "Kostenposition bearbeiten": "Редактировать статью расходов", "Beteiligte Personen": "Участники", "Betrag je Zahlung": "Сумма за платёж", "Fälligkeit / Hinweis": "Срок / примечание", "Rolle": "Роль", "Status": "Статус", "Priorität": "Приоритет", "Niedrig": "Низкий", "Mittel": "Средний", "Hoch": "Высокий", "Keine offenen Termine": "Нет открытых сроков", "Noch keine Personen": "Люди ещё не добавлены", "Noch keine Objekte": "Объекты ещё не добавлены", "Noch keine Kostenpositionen": "Статьи расходов ещё не добавлены", "Noch keine Buchungen": "Операций ещё нет", "Lokales Profil & Rechte": "Локальный профиль и права", "Nur lokal": "Только локально", "Bleibt vollständig lokal auf diesem Gerät. Später kann dieselbe Struktur an NAS-Benutzerkonten angebunden werden.": "Всё остаётся локально на этом устройстве. Позже эту же структуру можно подключить к учётным записям NAS.", "Aktives Profil": "Активный профиль", "NAS später möglich": "Позже можно подключить NAS", "Finanzen": "Финансы"}}};
let LANGUAGE_PACKS_V24={...LANGUAGE_FALLBACK_V24};
async function loadLanguagePackV24(code){
 const item=LANGUAGE_REGISTRY_V24.languages.find(x=>x.code===code);
 if(!item)return false;
 try{const r=await fetch(item.file,{cache:'no-store'});if(!r.ok)throw new Error('lang');LANGUAGE_PACKS_V24[code]=await r.json();return true}
 catch(error){console.warn('Sprachdatei Fallback',error);return false}
}
function translatePhraseV24(value){
 const text=String(value??'').trim();if(!text||uiLanguage()==='de')return text;
 const exact=LANGUAGE_PACKS_V24[uiLanguage()]?.phrases?.[text];if(exact)return exact;
 let m;
 if((m=text.match(/^(\d+) zugeordnete Personen$/)))return `${m[1]} привязанных человека`;
 if((m=text.match(/^(\d+) zugeordnete Person$/)))return `${m[1]} привязанный человек`;
 if((m=text.match(/^Person (\d+)$/)))return `Человек ${m[1]}`;
 if((m=text.match(/^Objekte:\s*(.*)$/)))return `Объекты: ${m[1]}`;
 if((m=text.match(/^Ziel\s+(.+)$/)))return `Цель ${m[1]}`;
 return text;
}
function translateDomV24(root=document.body){
 if(!root)return;
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),nodes=[];
 while(walker.nextNode())nodes.push(walker.currentNode);
 nodes.forEach(n=>{
  const p=n.parentElement;if(!p||['SCRIPT','STYLE','TEXTAREA','INPUT'].includes(p.tagName))return;
  const raw=n.nodeValue,trim=raw.trim();if(!trim)return;
  const src=n._sourceDe||trim;n._sourceDe=src;
  const out=uiLanguage()==='de'?src:translatePhraseV24(src);
  n.nodeValue=raw.replace(trim,out);
 });
 document.querySelectorAll('option').forEach(o=>{
  const src=o.dataset.sourceDe||o.textContent.trim();o.dataset.sourceDe=src;
  o.textContent=uiLanguage()==='de'?src:translatePhraseV24(src);
 });
 document.querySelectorAll('input[placeholder],textarea[placeholder]').forEach(el=>{
  const src=el.dataset.sourcePlaceholderDe||el.placeholder||'';el.dataset.sourcePlaceholderDe=src;
  el.placeholder=uiLanguage()==='de'?src:translatePhraseV24(src);
 });
}
function populateLanguagesV24(){
 const s=document.getElementById('uiLanguageSelect');if(!s)return;
 s.innerHTML=LANGUAGE_REGISTRY_V24.languages.map(x=>`<option value="${x.code}">${x.label}</option>`).join('');
 s.value=uiLanguage();
}

const categories=['Einzahlung Eigentümer','Kredit','Strom','Wasser','Internet','Versicherung','Grundsteuer','Müll','Wartung','Reparatur','Rücklage','Sanierung','Sonstiges'];
const seed={
 settings:{name:'Unsere Immobilien',startBalance:0,minimumReserve:5000,monthlyReserve:600},
 owners:[{id:1,name:'Dmitrij',ownershipShare:33.33,paymentShare:33.33,role:'Technik / Verwaltung',personType:'Eigentümer',active:true,propertyIds:[1,2]},{id:2,name:'Freundin',ownershipShare:33.33,paymentShare:33.33,role:'Finanzen / Verträge',personType:'Eigentümer',active:true,propertyIds:[1,2]},{id:3,name:'Schwager',ownershipShare:33.34,paymentShare:33.34,role:'Abstimmung / Grundstück',personType:'Eigentümer',active:true,propertyIds:[1,2]}],
 properties:[{id:1,name:'Haus 1',address:'',area:159,usage:'Eigennutzung',photo:''},{id:2,name:'Haus 2',address:'',area:152,usage:'Mietfreie Überlassung',photo:''}],
 loan:{bank:'',original:0,remaining:0,interest:0,monthlyPayment:0,startDate:'2024-01-01',fixedUntil:'2034-01-01',extraPayment:0,autoCalculate:true,balanceDate:''},
 costPlans:[{id:1,category:'Kredit',name:'Kreditrate',propertyId:'all',amount:0,interval:'monthly',note:'',splitCount:3},{id:2,category:'Versicherung',name:'Gebäudeversicherung',propertyId:'all',amount:0,interval:'yearly',note:'',splitCount:3},{id:3,category:'Grundsteuer',name:'Grundsteuer',propertyId:'all',amount:0,interval:'quarterly',note:'',splitCount:3},{id:4,category:'Strom',name:'Strom Haus 1',propertyId:1,amount:0,interval:'monthly',note:'',splitCount:3},{id:5,category:'Strom',name:'Strom Haus 2',propertyId:2,amount:0,interval:'monthly',note:'',splitCount:3},{id:6,category:'Wasser',name:'Wasser / Abwasser',propertyId:'all',amount:0,interval:'quarterly',note:'',splitCount:3},{id:7,category:'Internet',name:'Internet',propertyId:'all',amount:0,interval:'monthly',note:'',splitCount:3}],
 transactions:[],wasteDates:[],vehicles:[],vehicleServices:[],tasks:[],maintenance:[{id:1,title:'Wärmepumpe warten',propertyId:1,due:'',intervalMonths:12,owner:'Gemeinsam',cost:0,status:'Offen'}],reserves:[{id:1,title:'Dach',propertyId:'all',target:30000,saved:0,year:2035},{id:2,title:'Fassade',propertyId:'all',target:20000,saved:0,year:2027},{id:3,title:'Keller / Sockel',propertyId:'all',target:10000,saved:0,year:2027}]
};
let state=load();
let deferredPrompt=null;
let activePlanningTab='tasks';
let propertyPhotoData='';
let calendarCursor=new Date();
calendarCursor.setDate(1);
let lastSaveTime=null;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function clone(x){return JSON.parse(JSON.stringify(x))}
function migrate(data){
 const d={...clone(seed),...data};d.settings={...seed.settings,...(data.settings||{})};d.loan={...seed.loan,...(data.loan||{})};
 if(d.loan.autoCalculate===undefined)d.loan.autoCalculate=true;
 if(!d.loan.balanceDate&&Number(d.loan.remaining)>0)d.loan.balanceDate=new Date().toISOString().slice(0,10);
 d.owners=(Array.isArray(data.owners)?data.owners:clone(seed.owners)).slice(0,5).map((x,index)=>({...x,personNumber:index+1,propertyIds:Array.isArray(x.propertyIds)?x.propertyIds.map(String):statePropertyFallback(x)}));
 d.properties=(Array.isArray(data.properties)?data.properties:clone(seed.properties)).map(x=>({
 ...x,
 photo:x.photo||'',
 constructionYear:x.constructionYear||'',
 plotArea:x.plotArea??'',
 rooms:x.rooms??'',
 bathrooms:x.bathrooms??'',
 toilets:x.toilets??'',
 electricityMeter:x.electricityMeter??'',
 waterMeter:x.waterMeter??'',
 meterReadingDate:x.meterReadingDate||'',
 energyClass:x.energyClass||'',
 heatingType:x.heatingType||'',
 notes:x.notes||''
}));
 d.vehicles=Array.isArray(data.vehicles)?data.vehicles:[];
 d.vehicleServices=Array.isArray(data.vehicleServices)?data.vehicleServices:[];
 d.transactions=Array.isArray(data.transactions)?data.transactions:[];
 d.tasks=(data.tasks||[]).map(x=>({...x,propertyId:x.propertyId??'all'}));
 d.maintenance=(data.maintenance||[]).map(x=>({...x,propertyId:x.propertyId??'all',intervalMonths:x.intervalMonths||12,cost:Number(x.cost)||0}));
 d.reserves=(data.reserves||[]).map(x=>({...x,propertyId:x.propertyId??'all'}));
 d.costPlans=(Array.isArray(data.costPlans)?data.costPlans:clone(seed.costPlans)).map(x=>{
 const active=d.owners.filter(o=>o.active!==false);
 const count=Math.min(5,Math.max(1,Number(x.splitCount)||active.length||1));
 const personIds=Array.isArray(x.personIds)&&x.personIds.length?x.personIds.map(Number):active.slice(0,count).map(o=>Number(o.id));
 return {...x,splitCount:personIds.length,personIds};
});
 d.wasteDates=Array.isArray(data.wasteDates)?data.wasteDates.map(x=>({...x,type:x.type||'Restmüll',date:x.date||'',note:x.note||''})):[];
 return d
}
function statePropertyFallback(){return ['1','2']}


const LOCAL_PROFILE_KEY_V24='hausverwaltung_local_profile_v1';
const LOCAL_PROFILES_V24={
 admin:{rights:{finance:true,objects:true,planning:true,vehicles:true,remove:true}},
 owner:{rights:{finance:true,objects:true,planning:true,vehicles:true,remove:false}},
 resident:{rights:{finance:false,objects:false,planning:true,vehicles:false,remove:false}},
 guest:{rights:{finance:false,objects:false,planning:false,vehicles:false,remove:false}}
};
function localProfileKeyV24(){try{return localStorage.getItem(LOCAL_PROFILE_KEY_V24)||'admin'}catch{return 'admin'}}
function setLocalProfileV24(key){if(!LOCAL_PROFILES_V24[key])key='admin';try{localStorage.setItem(LOCAL_PROFILE_KEY_V24,key)}catch{}applyLocalPermissionsV24()}
function requiredRightV24(btn){
 const s=(btn.getAttribute('onclick')||'')+' '+(btn.id||'')+' '+(btn.dataset.modal||'');
 if(/Vehicle|vehicle/.test(s))return 'vehicles';
 if(/Property|property|Owner|owner/.test(s))return 'objects';
 if(/Task|task|Planning|planning|Reserve|reserve|completeItem/.test(s))return 'planning';
 if(/Transaction|transaction|Cost|cost|Loan|loan/.test(s))return 'finance';
 return '';
}
function applyLocalPermissionsV24(){
 const profile=LOCAL_PROFILES_V24[localProfileKeyV24()]||LOCAL_PROFILES_V24.admin;
 const sel=document.getElementById('localProfileSelectV24');if(sel)sel.value=localProfileKeyV24();
 document.querySelectorAll('button').forEach(btn=>{
  const right=requiredRightV24(btn);if(!right)return;
  const deleteAction=btn.classList.contains('danger')||/delete|Löschen|Entfernen/.test(btn.getAttribute('onclick')||'');
  const disabled=!profile.rights[right]||(deleteAction&&!profile.rights.remove);
  btn.disabled=disabled;btn.classList.toggle('permission-disabled',disabled);
 });
 const box=document.getElementById('permissionSummaryV24');
 if(box){
  const names={finance:'Finanzen',objects:'Objekte',planning:'Planung',vehicles:'Fahrzeuge',remove:'Löschen'};
  box.innerHTML=Object.entries(names).map(([k,n])=>`<span class="${profile.rights[k]?'perm-ok':'perm-no'}">${profile.rights[k]?'✓':'–'} ${uiLanguage()==='ru'?translatePhraseV24(n):n}</span>`).join('');
 }
}

const DB_NAME='hausverwaltung_local_db';
const DB_VERSION=1;
const DB_STORE='appdata';
const DB_STATE_KEY='state';

function openLocalDb(){
 return new Promise((resolve,reject)=>{
  if(!('indexedDB' in window)){reject(new Error('IndexedDB nicht verfügbar'));return}
  const request=indexedDB.open(DB_NAME,DB_VERSION);
  request.onupgradeneeded=()=>{
   const db=request.result;
   if(!db.objectStoreNames.contains(DB_STORE))db.createObjectStore(DB_STORE);
  };
  request.onsuccess=()=>resolve(request.result);
  request.onerror=()=>reject(request.error||new Error('Datenbank konnte nicht geöffnet werden'));
 });
}
async function dbGetState(){
 const db=await openLocalDb();
 return new Promise((resolve,reject)=>{
  const tx=db.transaction(DB_STORE,'readonly');
  const store=tx.objectStore(DB_STORE);
  const req=store.get(DB_STATE_KEY);
  req.onsuccess=()=>resolve(req.result||null);
  req.onerror=()=>reject(req.error);
  tx.oncomplete=()=>db.close();
 });
}
async function dbSetState(value){
 const db=await openLocalDb();
 return new Promise((resolve,reject)=>{
  const tx=db.transaction(DB_STORE,'readwrite');
  tx.objectStore(DB_STORE).put(value,DB_STATE_KEY);
  tx.oncomplete=()=>{db.close();resolve(true)};
  tx.onerror=()=>{const err=tx.error;db.close();reject(err)};
  tx.onabort=()=>{const err=tx.error;db.close();reject(err)};
 });
}
async function dbClearState(){
 try{
  const db=await openLocalDb();
  await new Promise((resolve,reject)=>{
   const tx=db.transaction(DB_STORE,'readwrite');
   tx.objectStore(DB_STORE).delete(DB_STATE_KEY);
   tx.oncomplete=()=>resolve();
   tx.onerror=()=>reject(tx.error);
  });
  db.close();
 }catch(error){console.warn('IndexedDB konnte nicht geleert werden',error)}
}
function load(){
 try{
  let raw=localStorage.getItem(KEY);
  if(!raw){
   for(const k of OLD_KEYS){
    raw=localStorage.getItem(k);
    if(raw)break;
   }
  }
  return migrate(raw?JSON.parse(raw):clone(seed));
 }catch(error){
  console.warn('Fallback-Startdaten konnten nicht gelesen werden',error);
  return clone(seed);
 }
}
async function persistState(showAlert=true){
 try{
  await dbSetState(state);
  lastSaveTime=new Date();
  updateLocalStatus('Gespeichert');
  // Small compatibility copy without large photos if localStorage has room.
  try{
   const compact=JSON.parse(JSON.stringify(state));
   (compact.properties||[]).forEach(p=>{if(p.photo&&String(p.photo).length>200000)p.photo=''});
   localStorage.setItem(KEY,JSON.stringify(compact));
  }catch(e){
   console.warn('Kompatibilitätskopie in localStorage übersprungen',e);
  }
  return true;
 }catch(error){
  console.error('Lokales Speichern in IndexedDB fehlgeschlagen',error);
  updateLocalStatus('Speichern fehlgeschlagen',true);
  if(showAlert)alert('Die Daten konnten nicht lokal gespeichert werden. Bitte exportiere vorsichtshalber eine Sicherung.');
  return false;
 }
}
function save(){
 render();
 persistState(true);
}
async function restoreIndexedDbState(){
 try{
  const stored=await dbGetState();
  if(stored&&typeof stored==='object'){
   state=migrate(stored);
   render();
   applyUiLanguage();
   updateLocalStatus('Lokal gespeichert');
   return true;
  }
  // First migration: move current localStorage state into IndexedDB.
  await dbSetState(state);
  return true;
 }catch(error){
  console.warn('IndexedDB Start nicht möglich, App nutzt Fallback',error);
  return false;
 }
}

function updateLocalStatus(text='Lokal gespeichert',isError=false){
 const el=$('#localStatus');if(!el)return;
 el.textContent=text+(lastSaveTime&&!isError?' · '+lastSaveTime.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'}):'');
 el.classList.toggle('status-error',Boolean(isError));
}
function eur(n){return new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(Number(n)||0)}
function dateDE(v){if(!v)return 'ohne Termin';return new Date(v+'T12:00:00').toLocaleDateString('de-DE')}
function esc(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function sum(type){return state.transactions.filter(x=>x.type===type).reduce((a,b)=>a+Number(b.amount),0)}
function balance(){return Number(state.settings.startBalance)+sum('Einnahme')-sum('Ausgabe')}
function intervalFactor(i){return {monthly:12,fiveyearly:5,quarterly:4,semiannual:2,yearly:1}[i]||12}
function costYearly(x){return Number(x.amount||0)*intervalFactor(x.interval)}
function costMonthly(x){return costYearly(x)/12}
function plannedCostMonthly(){return state.costPlans.reduce((a,x)=>a+costMonthly(x),0)}
function plannedMonthly(){return plannedCostMonthly()+Number(state.settings.monthlyReserve||0)}
function activeOwnersList(){return state.owners.filter(x=>x.active!==false)}
function activePaymentShareTotal(){return activeOwnersList().reduce((a,x)=>a+Number(x.paymentShare||0),0)}
function eligibleOwnersForCost(cost){
 const ids=Array.isArray(cost.personIds)?cost.personIds.map(Number):[];
 const active=activeOwnersList().map((x,index)=>({...x,personNumber:index+1}));
 if(ids.length)return active.filter(owner=>ids.includes(Number(owner.id)));
 const count=Math.min(Math.max(1,Number(cost.splitCount)||active.length||1),active.length);
 return active.slice(0,count);
}
function ownerMonthlyCostShare(x){
 if(x.active===false)return 0;
 let amount=0;
 state.costPlans.forEach(cost=>{
  const people=eligibleOwnersForCost(cost);
  if(people.some(person=>Number(person.id)===Number(x.id)))amount+=costMonthly(cost)/Math.max(people.length,1);
 });
 return amount;
}
function ownerMonthlyContribution(x){
 if(x.active===false)return 0;
 let amount=0;
 state.costPlans.forEach(cost=>{const people=eligibleOwnersForCost(cost);if(people.some(p=>p.id===x.id))amount+=costMonthly(cost)/Math.max(people.length,1)});
 const total=activePaymentShareTotal();
 if(total>0)amount+=Number(state.settings.monthlyReserve||0)*Number(x.paymentShare||0)/total;
 return amount;
}
function plannedMonthlyIncome(){return state.owners.reduce((a,x)=>a+ownerMonthlyContribution(x),0)}
function projectedMonthlyBalance(){return plannedMonthlyIncome()-plannedMonthly()}
function projectedAccountBalance(){return Number(state.settings.startBalance||0)+projectedMonthlyBalance()}
function monthsElapsed(start){if(!start)return 0;const d=new Date(start+'T12:00:00'),n=new Date();let m=(n.getFullYear()-d.getFullYear())*12+(n.getMonth()-d.getMonth());if(n.getDate()<d.getDate())m--;return Math.max(0,m)}
function loanProjection(){
 const l=state.loan, original=Number(l.original)||0, entered=Math.max(0,Number(l.remaining)||0), rate=(Number(l.interest)||0)/100/12, payment=Number(l.monthlyPayment)||0;
 if(!l.autoCalculate||!entered||!payment||!l.balanceDate){return {remaining:entered,paid:Math.max(0,original-entered),months:0}}
 let remaining=entered;const months=monthsElapsed(l.balanceDate);
 for(let i=0;i<months&&remaining>0;i++){
  const interest=remaining*rate;const principal=Math.max(0,payment-interest);remaining=Math.max(0,remaining-principal);
  if((i+1)%12===0&&Number(l.extraPayment)>0)remaining=Math.max(0,remaining-Number(l.extraPayment));
 }
 return {remaining,paid:Math.max(0,original-remaining),months}
}
function propertyName(id){if(id==='all'||id===''||id==null)return 'Alle Objekte';return state.properties.find(x=>String(x.id)===String(id))?.name||'Unbekanntes Objekt'}
function runModule(name,fn){
 try{fn();return true}
 catch(error){
  console.error(`Modul ${name} konnte nicht geladen werden`,error);
  const notice=$('#appNotice');
  if(notice){
   notice.classList.remove('hidden');
   notice.innerHTML=`<strong>${esc(name)} konnte nicht vollständig geladen werden.</strong><span>Die übrigen Bereiche funktionieren weiter. Aktualisiere die Seite oder importiere deine letzte Sicherung.</span>`;
  }
  return false;
 }
}
function render(){
 const notice=$('#appNotice');if(notice){notice.classList.add('hidden');notice.innerHTML=''}
 runModule('Auswahllisten',populateSelects);
 runModule('Übersicht',renderDashboard);
 runModule('Objektübersicht',renderDashboardProperties);
 runModule('Fahrzeuge',renderVehicles);
 runModule('Fahrzeugübersicht',renderDashboardVehicles);
 runModule('Buchungen',renderTransactions);
 runModule('Kostenplan',renderCosts);
 runModule('Objekte',renderProperties);
 runModule('Personen',renderOwners);
 runModule('Planung',renderTasks);
 runModule('Einstellungen',renderSettings);
 runModule('Müllkalender',renderWasteCalendar);
 updateLocalStatus(lastSaveTime?'Gespeichert':'Lokal gespeichert');
}

function renderDashboardProperties(){
 const box=$('#dashboardPropertyOverview');
 if(!box)return;
 const props=Array.isArray(state.properties)?state.properties:[];
 if(!props.length){
  box.innerHTML='<div class="empty">Noch keine Objekte angelegt</div>';
  return;
 }
 box.innerHTML=props.map(x=>`<article class="dashboard-property-card">
  ${x.photo?`<img class="dashboard-property-image" src="${x.photo}" alt="${esc(x.name||'Objekt')}">`:`<div class="dashboard-property-placeholder">🏠</div>`}
  <div class="dashboard-property-body">
   <div class="card-top"><span class="tag">${esc(x.usage||'Objekt')}</span><span>${Number(x.area)||0} m² Wohnfläche</span></div>
   <h3>${esc(x.name||'Ohne Namen')}</h3>
   <p>${esc(x.address||'Adresse noch nicht eingetragen')}</p>
   <div class="dashboard-property-details">
    <div><span>Baujahr</span><strong>${esc(x.constructionYear||'–')}</strong></div>
    <div><span>Grundstück</span><strong>${x.plotArea!==''&&x.plotArea!=null?Number(x.plotArea).toLocaleString('de-DE')+' m²':'–'}</strong></div>
    <div><span>Zimmer</span><strong>${x.rooms!==''&&x.rooms!=null?Number(x.rooms).toLocaleString('de-DE'):'–'}</strong></div>
    <div><span>Bäder</span><strong>${x.bathrooms!==''&&x.bathrooms!=null?Number(x.bathrooms).toLocaleString('de-DE'):'–'}</strong></div>
    <div><span>WC</span><strong>${x.toilets!==''&&x.toilets!=null?Number(x.toilets).toLocaleString('de-DE'):'–'}</strong></div>
    <div><span>Energieklasse</span><strong>${esc(x.energyClass||'–')}</strong></div>
    <div><span>Heizung</span><strong>${esc(x.heatingType||'–')}</strong></div>
    <div><span>Stromzähler</span><strong>${x.electricityMeter!==''&&x.electricityMeter!=null?Number(x.electricityMeter).toLocaleString('de-DE')+' kWh':'–'}</strong></div>
    <div><span>Wasserzähler</span><strong>${x.waterMeter!==''&&x.waterMeter!=null?Number(x.waterMeter).toLocaleString('de-DE')+' m³':'–'}</strong></div>
    <div><span>Ablesedatum</span><strong>${x.meterReadingDate?dateDE(x.meterReadingDate):'–'}</strong></div>
   </div>
   ${x.notes?`<p class="property-notes"><strong>Notiz:</strong> ${esc(x.notes)}</p>`:''}
  </div>
 </article>`).join('');
}

function vehicleName(v){return [v.make,v.model].filter(Boolean).join(' ')||'Fahrzeug'}
function km(v){return Number(v||0).toLocaleString('de-DE')+' km'}
function serviceDueStatus(v){
 const current=Number(v.currentKm)||0,next=Number(v.nextOilKm)||0;
 if(!next)return {text:uiText('noInterval'),cls:'service-neutral'};
 if(current>=next)return {text:uiText('oilDue'),cls:'service-due'};
 if(next-current<=1000)return {text:uiText('soonDue'),cls:'service-soon'};
 return {text:uiText('inOrder'),cls:'service-ok'};
}
function renderVehicles(){
 const list=$('#vehicleList');if(!list)return;
 const vehicleCountTag=$('#vehicleCountTag');if(vehicleCountTag)vehicleCountTag.textContent=`${(state.vehicles||[]).length} / 6 ${uiText('vehiclesCount')}`;
 list.innerHTML=(state.vehicles||[]).length?state.vehicles.map(v=>{
  const status=serviceDueStatus(v);
  const services=(state.vehicleServices||[]).filter(s=>Number(s.vehicleId)===Number(v.id)).sort((a,b)=>String(b.date).localeCompare(String(a.date)));
  const last=services[0];
  return `<article class="vehicle-card"><div class="vehicle-placeholder">🚗</div><div class="vehicle-body">
   <div class="card-top"><span class="tag">${esc(v.plate||uiText('noPlate'))}</span><span class="vehicle-status ${status.cls}">${status.text}</span></div>
   <h3>${esc(vehicleName(v))}</h3><p>${esc(v.year||uiText('unknownYear'))} · ${esc(v.fuel?fuelLabel(v.fuel):uiText('unknownFuel'))}</p>
   <div class="vehicle-kpis"><div><span>${uiText('mileage')}</span><strong>${km(v.currentKm)}</strong></div><div><span>${uiText('lastOil')}</span><strong>${v.lastOilDate?dateDE(v.lastOilDate):'–'}</strong><small>${v.lastOilKm?km(v.lastOilKm):''}</small></div><div><span>${uiText('nextOil')}</span><strong>${v.nextOilKm?km(v.nextOilKm):'–'}</strong><small>${v.nextOilDate?dateDE(v.nextOilDate):''}</small></div><div><span>${uiText('tuvDue')}</span><strong>${v.tuvDate?dateDE(v.tuvDate):'–'}</strong></div></div>
   <div class="vehicle-info-grid"><div><span>${uiText('motorOil')}</span><strong>${esc(v.oilSpec||'–')}</strong></div><div><span>${uiText('tires')}</span><strong>${esc(v.tires||'–')}</strong></div><div><span>${uiText('brakesLast')}</span><strong>${v.brakesDate?dateDE(v.brakesDate):'–'}</strong></div><div><span>${uiText('batteryLast')}</span><strong>${v.batteryDate?dateDE(v.batteryDate):'–'}</strong></div></div>
   ${last?`<div class="last-service"><span>${uiText('lastWorkshop')}</span><strong>${dateDE(last.date)} · ${esc(serviceTypeLabel(last.type))}</strong><small>${last.km?km(last.km):''}${last.cost?` · ${eur(last.cost)}`:''}</small></div>`:''}
   <div class="card-actions"><button class="secondary small" onclick="editVehicle(${v.id})">${uiText('edit')}</button><button class="secondary small" onclick="openServiceModal(${v.id})">${uiText('addService')}</button><button class="danger small" onclick="deleteVehicle(${v.id})">${uiText('delete')}</button></div>
  </div></article>`;
 }).join(''):`<div class="empty">${uiText('noVehicles')}</div>`;
}
function openVehicleModal(v=null){const f=$('#vehicleForm');f.reset();f.dataset.mode=v?'edit':'new';$('#vehicleModalTitle').textContent=v?uiText('vehicleEditTitle'):uiText('vehicleAddTitle');f.elements.id.value=v?String(v.id):'';['make','model','plate','year','fuel','currentKm','lastOilDate','lastOilKm','nextOilDate','nextOilKm','tuvDate','oilSpec','tires','brakesDate','batteryDate','notes'].forEach(k=>{if(f.elements[k])f.elements[k].value=v?.[k]??''});$('#vehicleModal').showModal()}
function editVehicle(id){const v=state.vehicles.find(x=>Number(x.id)===Number(id));if(v)openVehicleModal(v)}
function deleteVehicle(id){const v=state.vehicles.find(x=>Number(x.id)===Number(id));if(v&&confirm(`Fahrzeug „${vehicleName(v)}“ wirklich löschen?`)){state.vehicles=state.vehicles.filter(x=>Number(x.id)!==Number(id));state.vehicleServices=(state.vehicleServices||[]).filter(x=>Number(x.vehicleId)!==Number(id));save()}}
function openServiceModal(vehicleId){const v=state.vehicles.find(x=>Number(x.id)===Number(vehicleId));if(!v)return;const f=$('#vehicleServiceForm');f.reset();f.elements.vehicleId.value=vehicleId;$('#vehicleServiceTitle').textContent=uiText('serviceAdd')+' – '+vehicleName(v);$('#vehicleServiceModal').showModal()}


function nextVehicleServiceInfo(v){
 const services=(state.vehicleServices||[]).filter(s=>Number(s.vehicleId)===Number(v.id)).sort((a,b)=>String(b.date).localeCompare(String(a.date)));
 const current=Number(v.currentKm)||0;
 const nextOilKm=Number(v.nextOilKm)||0;
 const kmRemaining=nextOilKm?Math.max(0,nextOilKm-current):null;
 const nextItems=[];
 if(v.nextOilDate||nextOilKm){
  nextItems.push({type:uiText('serviceOil'),text:[v.nextOilDate?dateDE(v.nextOilDate):'',nextOilKm?km(nextOilKm):''].filter(Boolean).join(' · '),detail:kmRemaining!==null?`${kmRemaining.toLocaleString('de-DE')} ${uiText('remaining')}`:''});
 }
 if(v.tuvDate)nextItems.push({type:uiText('tuvDue'),text:dateDE(v.tuvDate),detail:''});
 if(v.brakesDate)nextItems.push({type:uiText('brakesLast'),text:dateDE(v.brakesDate),detail:uiText('checkAsNeeded')});
 if(v.batteryDate)nextItems.push({type:uiText('batteryLast'),text:dateDE(v.batteryDate),detail:uiText('checkAsNeeded')});
 const recentOther=services.filter(s=>s.type!=='Ölwechsel').slice(0,3).map(s=>({type:serviceTypeLabel(s.type),text:dateDE(s.date),detail:s.note||''}));
 return [...nextItems,...recentOther].slice(0,5);
}
function renderDashboardVehicles(){
 const box=$('#dashboardVehicleOverview');if(!box)return;
 const vehicles=Array.isArray(state.vehicles)?state.vehicles:[];
 if(!vehicles.length){box.innerHTML=`<div class="empty">${uiText('noVehicles')}</div>`;return}
 box.innerHTML=vehicles.map(v=>{
  const items=nextVehicleServiceInfo(v);
  return `<article class="dashboard-vehicle-card">
   <div class="dashboard-vehicle-head"><div class="vehicle-icon">🚗</div><div><h3>${esc(vehicleName(v))}</h3><p>${esc(v.plate||uiText('noPlate'))}</p></div></div>
   <div class="dashboard-vehicle-details">
    <div><span>${uiText('makeModel')}</span><strong>${esc(vehicleName(v))}</strong></div>
    <div><span>${uiText('plate')}</span><strong>${esc(v.plate||'–')}</strong></div>
    <div><span>${uiText('mileage')}</span><strong>${km(v.currentKm)}</strong></div>
    <div><span>${uiText('nextOil')}</span><strong>${v.nextOilDate?dateDE(v.nextOilDate):(v.nextOilKm?km(v.nextOilKm):'–')}</strong><small>${v.nextOilKm?km(v.nextOilKm):''}</small></div>
   </div>
   <div class="next-maintenance-list"><strong>${uiText('nextMaintenance')}</strong>
    ${items.length?items.map(item=>`<div class="maintenance-info-row"><span>${esc(item.type)}</span><strong>${esc(item.text||'–')}</strong>${item.detail?`<small>${esc(item.detail)}</small>`:''}</div>`).join(''):`<div class="empty small-empty">${uiText('noMaintenance')}</div>`}
   </div>
  </article>`;
 }).join('');
}

function renderDashboard(){
 const monthlyCosts=plannedMonthly(),monthlyIncome=plannedMonthlyIncome(),monthNet=projectedMonthlyBalance();
 $('#monthlyNeed').textContent=eur(monthlyCosts);$('#monthlyIncome').textContent=eur(monthlyIncome);$('#monthlyNet').textContent=eur(monthNet);
 const l=state.loan, original=Number(l.original)||0,projection=loanProjection(),remaining=Math.min(projection.remaining,original||projection.remaining),paid=projection.paid,pct=original?Math.min(100,Math.max(0,paid/original*100)):0;$('#loanPercent').textContent=pct.toLocaleString('de-DE',{maximumFractionDigits:1})+' %';$('#loanDonut').style.setProperty('--p',pct);$('#loanOriginal').textContent=eur(original);$('#loanPaid').textContent=eur(paid);$('#loanRemaining').textContent=eur(remaining);$('#loanPayment').textContent=eur(l.monthlyPayment);const monthInterest=remaining*(Number(l.interest)||0)/100/12,monthPrincipal=Math.max(0,Math.min(remaining,Number(l.monthlyPayment)-monthInterest));$('#loanDetails').innerHTML=`<div><span>Bank</span><strong>${esc(l.bank||'nicht eingetragen')}</strong></div><div><span>Sollzins</span><strong>${Number(l.interest||0).toLocaleString('de-DE')} %</strong></div><div><span>Zinsanteil nächster Monat</span><strong>${eur(monthInterest)}</strong></div><div><span>Tilgungsanteil nächster Monat</span><strong>${eur(monthPrincipal)}</strong></div><div><span>Zinsbindung bis</span><strong>${dateDE(l.fixedUntil)}</strong></div><div><span>Berechnung</span><strong>${l.autoCalculate?'Automatisch ab '+dateDE(l.balanceDate)+' · '+projection.months+' Monate':'Manuelle Restschuld'}</strong></div>`;
 const propCosts=state.properties.map(property=>{
 const persons=state.owners.filter(owner=>owner.active!==false&&(owner.propertyIds||[]).map(String).includes(String(property.id)));
 const value=persons.reduce((sum,person)=>sum+ownerMonthlyCostShare(person),0);
 return {name:property.name,value,persons:persons.length};


 renderDashboardProperties();

 renderDashboardVehicles();
});
const combined=plannedCostMonthly();
$('#dashboardObjectCosts').innerHTML=[
 ...propCosts.map(item=>({name:item.name,value:item.value,note:`${item.persons} zugeordnete Person${item.persons===1?'':'en'}`})),
 {name:'Beide Objekte zusammen',value:combined,note:'Gesamte Kostenpositionen'}
].map((item,index)=>`<div class="${index===propCosts.length?'total-row':''}"><span>${esc(item.name)}<small>${esc(item.note)}</small></span><strong>${eur(item.value)} / Monat · ${eur(item.value*12)} / Jahr</strong></div>`).join('');
 $('#ownerIncomeSummary').innerHTML=state.owners.filter(x=>x.active!==false).map(x=>`<div><span>${esc(x.name)}</span><strong>${eur(ownerMonthlyContribution(x))} / Monat</strong></div>`).join('')||'<div class="empty">Keine aktiven Personen</div>';
 const tx=[...state.transactions].sort((a,b)=>String(b.date).localeCompare(String(a.date))).slice(0,5);$('#recentTransactions').innerHTML=tx.length?tx.map(transactionRow).join(''):'<div class="empty">Noch keine Buchungen</div>';const upcoming=[...state.tasks].sort((a,b)=>(a.due||'9999').localeCompare(b.due||'9999'));$('#upcomingItems').innerHTML=upcoming.length?upcoming.map(x=>`<div class="list-item"><div class="list-main"><strong>${esc(x.title)}</strong><span>${dateDE(x.due)} · ${esc(propertyName(x.propertyId))}${x.owner?' · '+esc(x.owner):''}</span></div><span class="task-status ${x.status==='Erledigt'?'task-status-done':'task-status-open'}">${esc(x.status||'Offen')}</span></div>`).join(''):'<div class="empty">Noch keine Aufgaben erstellt</div>'

 const dashboardCostBox=$('#dashboardCostPositions');
 if(dashboardCostBox){
  dashboardCostBox.innerHTML=(state.costPlans||[]).length?[
  ...state.costPlans.map(cost=>`<div class="cost-info-row"><span class="cost-category-cell"><strong>${esc(cost.category)}</strong><small>${esc(cost.name||"")}</small></span><span>${esc(propertyName(cost.propertyId))}</span><strong>${eur(costMonthly(cost))}</strong><span>${intervalLabel(cost.interval)}</span><strong>${eur(costYearly(cost))}</strong></div>`),
  `<div class="cost-info-row cost-info-total"><span></span><span class="total-label">Gesamt</span><strong>${eur(plannedCostMonthly())}</strong><span>Monatsdurchschnitt</span><strong>${eur(state.costPlans.reduce((sum,cost)=>sum+costYearly(cost),0))}</strong></div>`
 ].join(''):'<div class="empty">Noch keine Kostenpositionen</div>';
 }
}

const wasteColors={'Restmüll':'#111111','Biotonne':'#8B5E3C','Papiertonne':'#2E8B57','Plastik':'#EAB308','Sonstige':'#7C3AED'};
function wasteColor(type){return wasteColors[type]||'#64748b'}
function monthTitle(d){return d.toLocaleDateString('de-DE',{month:'long',year:'numeric'})}
function renderWasteCalendar(){
 const box=$('#wasteCalendar');if(!box)return;
 if(!(calendarCursor instanceof Date)||Number.isNaN(calendarCursor.getTime())){calendarCursor=new Date();calendarCursor.setDate(1)}
 const year=calendarCursor.getFullYear(),month=calendarCursor.getMonth();
 $('#wasteMonthTitle').textContent=monthTitle(calendarCursor);
 const first=new Date(year,month,1),last=new Date(year,month+1,0),start=(first.getDay()+6)%7;
 const entries=(state.wasteDates||[]).filter(x=>{if(!x.date)return false;const d=new Date(x.date+'T12:00:00');return d.getFullYear()===year&&d.getMonth()===month});
 let cells=['Mo','Di','Mi','Do','Fr','Sa','So'].map(x=>`<div class="calendar-weekday">${x}</div>`).join('');
 for(let i=0;i<start;i++)cells+='<div class="calendar-day muted-day"></div>';
 for(let day=1;day<=last.getDate();day++){
  const iso=`${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
  const todays=entries.filter(x=>x.date===iso);
  cells+=`<button type="button" class="calendar-day calendar-date-button ${todays.length?'has-events':''}" data-waste-date="${iso}">
   <span class="day-number">${day}</span>
   <div class="calendar-dots">${todays.map(x=>`<i title="${esc(x.type)}" style="background:${wasteColor(x.type)}"></i>`).join('')}</div>
  </button>`;
 }
 box.innerHTML=cells;
 box.querySelectorAll('[data-waste-date]').forEach(button=>button.addEventListener('click',()=>openWasteDate(button.dataset.wasteDate)));
}
function changeWasteMonth(delta){calendarCursor=new Date(calendarCursor.getFullYear(),calendarCursor.getMonth()+delta,1);renderWasteCalendar()}
function openWasteDate(date){
 const existing=(state.wasteDates||[]).filter(x=>x.date===date);
 const form=$('#wasteDateForm');
 form.elements.date.value=date;
 form.querySelectorAll('input[name="types"]').forEach(input=>input.checked=existing.some(x=>x.type===input.value));
 $('#wasteDateTitle').textContent='Müllabfuhr am '+dateDE(date);
 $('#wasteDateModal').showModal();
}
function saveWasteDateSelections(){
 const form=$('#wasteDateForm'),date=form.elements.date.value;
 const selected=[...form.querySelectorAll('input[name="types"]:checked')].map(x=>x.value);
 state.wasteDates=(state.wasteDates||[]).filter(x=>x.date!==date);
 selected.forEach((type,index)=>state.wasteDates.push({id:Date.now()+index,type,date,note:''}));
 $('#wasteDateModal').close();save();
}

function transactionRow(x){return `<div class="list-item"><div class="list-main"><strong>${esc(x.description)}</strong><span>${esc(x.category)} · ${esc(propertyName(x.propertyId))} · ${dateDE(x.date)}</span></div><div class="amount ${x.type==='Einnahme'?'income':'expense'}">${x.type==='Einnahme'?'+':'−'} ${eur(x.amount)}</div></div>`}
function renderTransactions(){const filter=$('#transactionFilter').value;const list=[...state.transactions].filter(x=>filter==='all'||x.type===filter).sort((a,b)=>String(b.date).localeCompare(String(a.date)));$('#transactionList').innerHTML=list.length?list.map(transactionRow).join(''):'<div class="empty">Keine passenden Buchungen</div>';$('#incomeTotal').textContent=eur(sum('Einnahme'));$('#expenseTotal').textContent=eur(sum('Ausgabe'))}
function renderCosts(){
 const monthly=plannedCostMonthly(),yearly=state.costPlans.reduce((a,x)=>a+costYearly(x),0);
 $('#costMonthlyTotal').textContent=eur(monthly);$('#costYearlyTotal').textContent=eur(yearly);
 const rows=state.properties.map(p=>{
  const m=state.costPlans.filter(x=>String(x.propertyId)===String(p.id)).reduce((a,x)=>a+costMonthly(x),0);
  return `<div><span>${esc(p.name)}</span><strong>${eur(m)} / Monat · ${eur(m*12)} / Jahr</strong></div>`;
 });
 const shared=state.costPlans.filter(x=>x.propertyId==='all'||x.propertyId===''||x.propertyId==null).reduce((a,x)=>a+costMonthly(x),0);
 rows.push(`<div><span>Gemeinsame Kosten</span><strong>${eur(shared)} / Monat · ${eur(shared*12)} / Jahr</strong></div>`,
 `<div class="total-row"><span>Gesamt</span><strong>${eur(monthly)} / Monat · ${eur(yearly)} / Jahr</strong></div>`);
 $('#costObjectSummary').innerHTML=rows.join('');
 $('#costPlanList').innerHTML=state.costPlans.length?state.costPlans.map(x=>{
  const people=eligibleOwnersForCost(x);
  const perPayment=people.length?` <span class="per-person-note">(${eur(Number(x.amount||0)/people.length)} je Anteil)</span>`:'';
  const personBreakdown=people.length?`<div class="cost-person-breakdown">${people.map((person,index)=>`<span><b>P${person.personNumber||index+1}</b> ${esc(person.name)}: ${eur(costMonthly(x)/people.length)} / Monat</span>`).join('')}</div>`:'<div class="warning-text">Keine Person ausgewählt</div>';
  return `<article class="entity-card"><div class="card-top"><span class="tag">${esc(x.category)}</span><span class="tag subtle">${esc(propertyName(x.propertyId))}</span></div><h3><span class="person-id-badge">Person ${x.personNumber||''}</span> ${esc(x.name)}</h3><p>${intervalLabel(x.interval)} · ${esc(x.note||'kein Hinweis')}</p><div class="meta cost-meta"><span>${eur(x.amount)} je Zahlung${perPayment}</span><strong>${eur(costMonthly(x))} / Monat · ${eur(costYearly(x))} / Jahr</strong></div>${personBreakdown}<div class="card-actions"><button class="secondary small" onclick="editCost(${x.id})">Bearbeiten</button><button class="danger small" onclick="deleteCost(${x.id})">Löschen</button></div></article>`;
 }).join(''):'<div class="empty">Noch keine Kostenpositionen</div>';
}
function intervalLabel(i){return {monthly:'monatlich',fiveyearly:'5× jährlich',quarterly:'vierteljährlich',semiannual:'halbjährlich',yearly:'jährlich'}[i]||i}
function renderProperties(){
 $('#propertyList').innerHTML=state.properties.length?state.properties.map(x=>`<article class="entity-card property-card">
  ${x.photo?`<img class="property-image" src="${x.photo}" alt="${esc(x.name)}">`:`<div class="property-placeholder">🏠</div>`}
  <div class="card-top"><span class="tag">${esc(x.usage)}</span><span>${Number(x.area)||0} m²</span></div>
  <h3>${esc(x.name)}</h3>
  <p>${esc(x.address||'Adresse noch nicht eingetragen')}</p>
  <div class="property-info-grid">
   <div><span>Baujahr</span><strong>${esc(x.constructionYear||'–')}</strong></div><div><span>Grundstück</span><strong>${x.plotArea!==''?Number(x.plotArea).toLocaleString('de-DE')+' m²':'–'}</strong></div><div><span>Zimmer</span><strong>${x.rooms!==''?Number(x.rooms).toLocaleString('de-DE'):'–'}</strong></div><div><span>Bäder / WC</span><strong>${x.bathrooms!==''?Number(x.bathrooms):'–'} / ${x.toilets!==''?Number(x.toilets):'–'}</strong></div>
   <div><span>Energieklasse</span><strong>${esc(x.energyClass||'–')}</strong></div>
   <div><span>Stromzähler</span><strong>${x.electricityMeter!==''?Number(x.electricityMeter).toLocaleString('de-DE')+' kWh':'–'}</strong></div>
   <div><span>Wasserzähler</span><strong>${x.waterMeter!==''?Number(x.waterMeter).toLocaleString('de-DE')+' m³':'–'}</strong></div>
   <div><span>Ablesedatum</span><strong>${dateDE(x.meterReadingDate)}</strong></div>
   <div><span>Heizung</span><strong>${esc(x.heatingType||'–')}</strong></div>
  </div>${x.notes?`<p class="property-notes"><strong>Notiz:</strong> ${esc(x.notes)}</p>`:''}
  <div class="card-actions"><button class="secondary small" onclick="editProperty(${x.id})">Bearbeiten</button><button class="danger small" onclick="deleteProperty(${x.id})">Löschen</button></div>
 </article>`).join(''):'<div class="empty">Noch keine Objekte</div>'
}
function renderOwners(){const total=state.owners.filter(x=>x.active!==false).reduce((a,b)=>a+Number(b.ownershipShare),0);$('#shareCheck').textContent=total.toLocaleString('de-DE',{maximumFractionDigits:2})+' %';$('#shareCheck').classList.toggle('warning',Math.abs(total-100)>0.01);$('#ownerList').innerHTML=state.owners.length?state.owners.map(x=>`<article class="entity-card"><div class="card-top"><span class="tag">${x.active===false?'Inaktiv':'Aktiv'}</span><span class="tag subtle">${esc(x.personType||'Eigentümer')}</span></div><h3><span class="person-id-badge">Person ${x.personNumber||''}</span> ${esc(x.name)}</h3><p>${esc(x.role||'Keine Aufgabe eingetragen')}</p><p class="owner-objects">Objekte: ${esc((x.propertyIds||[]).map(propertyName).join(', ')||'keine Zuordnung')}</p><div class="meta"><span>Eigentum: <strong>${Number(x.ownershipShare||0).toLocaleString('de-DE')}%</strong></span><span>Zahlung: <strong>${Number(x.paymentShare||0).toLocaleString('de-DE')}%</strong></span></div><div class="card-actions"><button class="secondary small" onclick="editOwner(${x.id})">Bearbeiten</button><button class="secondary small" onclick="toggleOwner(${x.id})">${x.active===false?'Aktivieren':'Deaktivieren'}</button><button class="danger small" onclick="deleteOwner(${x.id})">Entfernen</button></div></article>`).join(''):'<div class="empty">Noch keine Personen</div>'}
function renderTasks(){
 $('#taskList').innerHTML=state.tasks.length?state.tasks.map(x=>planningCard(x,'task')).join(''):'<div class="empty">Keine Aufgaben</div>';
 $('#maintenanceList').innerHTML=state.maintenance.length?state.maintenance.map(x=>planningCard(x,'maintenance')).join(''):'<div class="empty">Keine Wartungen</div>';
 $('#reserveList').innerHTML=state.reserves.length?state.reserves.map(x=>`<article class="entity-card"><div class="card-top"><span class="tag">${esc(propertyName(x.propertyId))}</span><span class="tag subtle">Ziel ${x.year||'offen'}</span></div><h3>${esc(x.title)}</h3><div class="progress"><span style="width:${Math.min(100,Number(x.target)?Number(x.saved)/Number(x.target)*100:0)}%"></span></div><div class="meta"><span>${eur(x.saved)} gespart</span><strong>${eur(Math.max(0,Number(x.target)-Number(x.saved)))} offen</strong></div><div class="card-actions"><button class="secondary small" onclick="editReserve(${x.id})">Bearbeiten</button><button class="danger small" onclick="deletePlanning('reserve',${x.id})">Löschen</button></div></article>`).join(''):'<div class="empty">Keine Rücklagenziele</div>'
}
function planningCard(x,type){return `<article class="entity-card"><div class="card-top"><span class="tag">${esc(x.priority||x.status||'Offen')}</span><span class="tag subtle">${esc(propertyName(x.propertyId))}</span></div><h3>${esc(x.title)}</h3><p>${dateDE(x.due)} · ${esc(x.owner||'Gemeinsam')}${type==='maintenance'?` · ${x.intervalMonths||0} Monate · ${eur(x.cost||0)}`:''}</p><div class="card-actions">${x.status!=='Erledigt'?`<button class="primary small" onclick="completeItem('${type}',${x.id})">Erledigen</button>`:'<span class="tag">Erledigt</span>'}<button class="danger small" onclick="deletePlanning('${type}',${x.id})">Löschen</button></div></article>`}
function renderSettings(){$('#settingName').value=state.settings.name;$('#settingStartBalance').value=state.settings.startBalance;$('#settingMinimumReserve').value=state.settings.minimumReserve;$('#settingMonthlyReserve').value=state.settings.monthlyReserve}
function populateSelects(){const opts=`<option value="all">Alle Objekte / gemeinsam</option>`+state.properties.map(x=>`<option value="${x.id}">${esc(x.name)}</option>`).join('');$$('.property-select').forEach(s=>{const old=s.value;s.innerHTML=opts;if([...s.options].some(o=>o.value===old))s.value=old});$('#transactionCategory').innerHTML=categories.map(x=>`<option>${esc(x)}</option>`).join('')}
function renderOwnerPropertyChoices(selected=[]){
 const box=$('#ownerPropertyChoices');if(!box)return;const set=new Set((selected||[]).map(String));
 box.innerHTML=state.properties.map(p=>`<label class="check-row"><input type="checkbox" name="propertyIds" value="${p.id}" ${set.has(String(p.id))?'checked':''}> ${esc(p.name)}</label>`).join('')||'<span class="empty">Zuerst ein Objekt anlegen</span>';
}
function openOwnerModal(owner=null){const f=$('#ownerForm');f.reset();$('#ownerModalTitle').textContent=owner?'Person bearbeiten':'Person hinzufügen';f.elements.id.value=owner?.id||'';f.elements.name.value=owner?.name||'';f.elements.personType.value=owner?.personType||'Eigentümer';f.elements.ownershipShare.value=owner?.ownershipShare??0;f.elements.paymentShare.value=owner?.paymentShare??0;f.elements.role.value=owner?.role||'';f.elements.active.checked=owner?.active!==false;renderOwnerPropertyChoices(owner?.propertyIds||[]);$('#ownerModal').showModal()}
function editOwner(id){const x=state.owners.find(x=>x.id===id);if(x)openOwnerModal(x)} function toggleOwner(id){const x=state.owners.find(x=>x.id===id);if(x){x.active=x.active===false;save()}} function deleteOwner(id){const x=state.owners.find(x=>x.id===id);if(x&&confirm(`Person „${x.name}“ wirklich entfernen?`)){state.owners=state.owners.filter(y=>y.id!==id);save()}}
function openPropertyModal(x=null){const f=$('#propertyForm');f.reset();propertyPhotoData=x?.photo||'';$('#propertyModalTitle').textContent=x?'Objekt bearbeiten':'Objekt hinzufügen';f.elements.id.value=x?.id||'';f.elements.name.value=x?.name||'';f.elements.address.value=x?.address||'';f.elements.area.value=x?.area??'';f.elements.plotArea.value=x?.plotArea??'';f.elements.constructionYear.value=x?.constructionYear??'';f.elements.rooms.value=x?.rooms??'';f.elements.bathrooms.value=x?.bathrooms??'';f.elements.toilets.value=x?.toilets??'';f.elements.usage.value=x?.usage||'Eigennutzung';f.elements.energyClass.value=x?.energyClass||'';f.elements.heatingType.value=x?.heatingType||'';f.elements.electricityMeter.value=x?.electricityMeter??'';f.elements.waterMeter.value=x?.waterMeter??'';f.elements.meterReadingDate.value=x?.meterReadingDate||'';f.elements.notes.value=x?.notes||'';showPhotoPreview();$('#propertyModal').showModal()}
function showPhotoPreview(){const p=$('#propertyPhotoPreview');p.classList.toggle('hidden',!propertyPhotoData);p.innerHTML=propertyPhotoData?`<img src="${propertyPhotoData}" alt="Vorschau">`:''}
function editProperty(id){const x=state.properties.find(x=>x.id===id);if(x)openPropertyModal(x)}
function deleteProperty(id){const x=state.properties.find(x=>x.id===id);if(!x||!confirm(`Objekt „${x.name}“ löschen? Zugeordnete Planungen bleiben erhalten und werden dann als unbekannt angezeigt.`))return;state.properties=state.properties.filter(y=>y.id!==id);save()}
function renderCostPersonChoices(selectedIds=[]){
 const selected=new Set((selectedIds||[]).map(Number));
 const box=$('#costPersonChoices');if(!box)return;
 box.innerHTML=state.owners.slice(0,5).map((owner,index)=>`<label class="person-choice ${owner.active===false?'choice-inactive':''}"><input type="checkbox" name="personIds" value="${owner.id}" ${selected.has(Number(owner.id))?'checked':''} ${owner.active===false?'disabled':''}><span><strong>Person ${owner.personNumber||index+1}</strong><small>${esc(owner.name||'Ohne Namen')}${owner.active===false?' · inaktiv':''}</small></span></label>`).join('');
}
function openCostModal(x=null){const f=$('#costForm');f.reset();$('#costModalTitle').textContent=x?'Kostenposition bearbeiten':'Kostenposition hinzufügen';f.elements.id.value=x?.id||'';f.elements.category.value=x?.category||'';f.elements.name.value=x?.name||'';renderCostPersonChoices(x?.personIds||[]);f.elements.propertyId.value=String(x?.propertyId??'all');f.elements.amount.value=x?.amount??'';f.elements.interval.value=x?.interval||'monthly';f.elements.note.value=x?.note||'';$('#costModal').showModal()}
function editCost(id){const x=state.costPlans.find(x=>x.id===id);if(x)openCostModal(x)} function deleteCost(id){if(confirm('Kostenposition wirklich löschen?')){state.costPlans=state.costPlans.filter(x=>x.id!==id);save()}}
function editReserve(id){const x=state.reserves.find(x=>x.id===id);if(!x)return;const f=$('#reserveForm');f.reset();f.dataset.editId=id;f.elements.title.value=x.title;f.elements.propertyId.value=String(x.propertyId??'all');f.elements.target.value=x.target;f.elements.saved.value=x.saved;f.elements.year.value=x.year||'';$('#reserveModal').showModal()}
function completeItem(type,id){const arr=type==='task'?state.tasks:state.maintenance;const x=arr.find(x=>x.id===id);if(x)x.status='Erledigt';save()}
function deletePlanning(type,id){if(!confirm('Eintrag wirklich löschen?'))return;const key=type==='task'?'tasks':type==='maintenance'?'maintenance':'reserves';state[key]=state[key].filter(x=>x.id!==id);save()}
function openLoan(){const f=$('#loanForm'),l=state.loan;Object.keys(l).forEach(k=>{if(!f.elements[k])return;if(f.elements[k].type==='checkbox')f.elements[k].checked=Boolean(l[k]);else f.elements[k].value=l[k]??''});$('#loanModal').showModal()}
function switchView(name){$$('.view').forEach(v=>v.classList.toggle('active',v.dataset.view===name));$$('.bottom-nav .nav-item').forEach(b=>b.classList.toggle('active',b.dataset.target===name));const titles={dashboard:'Übersicht',transactions:'Hauskonto',properties:'Objekte',owners:'Personen',tasks:'Planung',settings:'Einstellungen'};$('#pageTitle').textContent=titles[name]||'Hausverwaltung';window.scrollTo({top:0,behavior:'smooth'})}
$$('.bottom-nav .nav-item').forEach(b=>b.addEventListener('click',()=>switchView(b.dataset.target)));$$('[data-go]').forEach(b=>b.addEventListener('click',()=>switchView(b.dataset.go)));$$('[data-modal]').forEach(b=>b.addEventListener('click',()=>{const m=b.dataset.modal;if(m==='ownerModal')openOwnerModal();else if(m==='propertyModal')openPropertyModal();else if(m==='costModal')openCostModal();else if(m==='loanModal')openLoan();else document.getElementById(m).showModal()}));
$$('[data-account-tab]').forEach(b=>b.addEventListener('click',()=>{$$('[data-account-tab]').forEach(x=>x.classList.toggle('active',x===b));$('#bookingsArea').classList.toggle('hidden',b.dataset.accountTab!=='bookings');$('#costsArea').classList.toggle('hidden',b.dataset.accountTab!=='costs')}));
$$('[data-task-tab]').forEach(b=>b.addEventListener('click',()=>{activePlanningTab=b.dataset.taskTab;$$('[data-task-tab]').forEach(x=>x.classList.toggle('active',x===b));$('#taskList').classList.toggle('hidden',activePlanningTab!=='tasks');$('#maintenanceList').classList.toggle('hidden',activePlanningTab!=='maintenance');$('#reserveList').classList.toggle('hidden',activePlanningTab!=='reserves');$('#planningAddBtn').textContent=activePlanningTab==='tasks'?'+ Aufgabe':activePlanningTab==='maintenance'?'+ Wartung':'+ Rücklage'}));
$('#planningAddBtn').addEventListener('click',()=>document.getElementById(activePlanningTab==='tasks'?'taskModal':activePlanningTab==='maintenance'?'maintenanceModal':'reserveModal').showModal());
$('#transactionFilter').addEventListener('change',renderTransactions);
$('#wastePrev').addEventListener('click',()=>changeWasteMonth(-1));
$('#wasteNext').addEventListener('click',()=>changeWasteMonth(1));
$('#wasteDateSave').addEventListener('click',saveWasteDateSelections);
$('#transactionForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);state.transactions.push({id:Date.now(),type:f.get('type'),category:f.get('category'),propertyId:f.get('propertyId'),description:f.get('description'),amount:Number(f.get('amount')),date:f.get('date')});e.target.reset();$('#transactionModal').close();save()});
$('#costForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target),id=Number(f.get('id')),personIds=f.getAll('personIds').map(Number);if(!personIds.length){alert('Bitte mindestens eine aktive Person auswählen.');return}const data={category:f.get('category'),name:f.get('name'),personIds,splitCount:personIds.length,propertyId:f.get('propertyId'),amount:Number(f.get('amount')),interval:f.get('interval'),note:f.get('note')};if(id)Object.assign(state.costPlans.find(x=>x.id===id),data);else state.costPlans.push({id:Date.now(),...data});e.target.reset();$('#costModal').close();save()});
$('#loanForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);state.loan={bank:f.get('bank'),original:Number(f.get('original')),remaining:Number(f.get('remaining')),balanceDate:f.get('balanceDate'),interest:Number(f.get('interest')),monthlyPayment:Number(f.get('monthlyPayment')),startDate:f.get('startDate'),fixedUntil:f.get('fixedUntil'),extraPayment:Number(f.get('extraPayment')),autoCalculate:f.get('autoCalculate')==='on'};$('#loanModal').close();save()});

$('#addVehicleBtn').addEventListener('click',()=>{if((state.vehicles||[]).length>=6){alert('Es können maximal 6 Fahrzeuge angelegt werden.');return}openVehicleModal(null)});
$('#vehicleForm').addEventListener('submit',e=>{e.preventDefault();const form=e.target,f=new FormData(form),mode=form.dataset.mode||'new',id=Number(f.get('id'));const data={make:f.get('make').trim(),model:f.get('model').trim(),plate:f.get('plate').trim(),year:f.get('year'),fuel:f.get('fuel'),currentKm:Number(f.get('currentKm'))||0,lastOilDate:f.get('lastOilDate'),lastOilKm:Number(f.get('lastOilKm'))||0,nextOilDate:f.get('nextOilDate'),nextOilKm:Number(f.get('nextOilKm'))||0,tuvDate:f.get('tuvDate'),oilSpec:f.get('oilSpec').trim(),tires:f.get('tires').trim(),brakesDate:f.get('brakesDate'),batteryDate:f.get('batteryDate'),notes:f.get('notes').trim()};if(mode==='edit'&&id){const existing=state.vehicles.find(x=>Number(x.id)===id);if(existing)Object.assign(existing,data)}else{if((state.vehicles||[]).length>=6){alert('Es können maximal 6 Fahrzeuge angelegt werden.');return}let newId=Date.now()+Math.floor(Math.random()*100000);while(state.vehicles.some(x=>Number(x.id)===newId))newId++;state.vehicles.push({id:newId,...data})}form.reset();form.dataset.mode='new';form.elements.id.value='';$('#vehicleModal').close();save()});
$('#vehicleServiceForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target),vehicleId=Number(f.get('vehicleId'));const entry={id:Date.now(),vehicleId,date:f.get('date'),km:Number(f.get('km'))||0,type:f.get('type'),cost:Number(f.get('cost'))||0,note:f.get('note').trim()};state.vehicleServices.push(entry);const v=state.vehicles.find(x=>Number(x.id)===vehicleId);if(v){if(entry.km)v.currentKm=Math.max(Number(v.currentKm)||0,entry.km);if(entry.type==='Ölwechsel'){v.lastOilDate=entry.date;v.lastOilKm=entry.km;if(entry.km&&!v.nextOilKm)v.nextOilKm=entry.km+15000}}e.target.reset();$('#vehicleServiceModal').close();save()});

$('#propertyForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target),id=Number(f.get('id')),data={name:f.get('name'),address:f.get('address'),area:Number(f.get('area')),plotArea:f.get('plotArea')===''?'':Number(f.get('plotArea')),constructionYear:f.get('constructionYear'),rooms:f.get('rooms')===''?'':Number(f.get('rooms')),bathrooms:f.get('bathrooms')===''?'':Number(f.get('bathrooms')),toilets:f.get('toilets')===''?'':Number(f.get('toilets')),usage:f.get('usage'),energyClass:f.get('energyClass'),heatingType:f.get('heatingType'),electricityMeter:f.get('electricityMeter')===''?'':Number(f.get('electricityMeter')),waterMeter:f.get('waterMeter')===''?'':Number(f.get('waterMeter')),meterReadingDate:f.get('meterReadingDate'),notes:f.get('notes'),photo:propertyPhotoData};if(id)Object.assign(state.properties.find(x=>x.id===id),data);else state.properties.push({id:Date.now(),...data});e.target.reset();propertyPhotoData='';$('#propertyModal').close();save()});
$('#propertyForm').elements.photo.addEventListener('change',e=>{const file=e.target.files[0];if(!file)return;if(file.size>2_500_000){alert('Das Foto ist zu groß. Bitte ein Foto unter etwa 2,5 MB verwenden.');e.target.value='';return}const r=new FileReader();r.onload=()=>{propertyPhotoData=r.result;showPhotoPreview()};r.readAsDataURL(file)});
$('#ownerForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target),id=Number(f.get('id'));if(!id&&state.owners.length>=5){alert('Maximal fünf Personen.');return}const data={name:f.get('name').trim(),personType:f.get('personType'),ownershipShare:Number(f.get('ownershipShare')),paymentShare:Number(f.get('paymentShare')),role:f.get('role').trim(),propertyIds:f.getAll('propertyIds').map(String),active:f.get('active')==='on'};if(id)Object.assign(state.owners.find(x=>x.id===id),data);else state.owners.push({id:Date.now(),...data});state.owners=state.owners.slice(0,5).map((owner,index)=>({...owner,personNumber:index+1}));e.target.reset();$('#ownerModal').close();save()});
$('#taskForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);state.tasks.push({id:Date.now(),title:f.get('title'),propertyId:f.get('propertyId'),due:f.get('due'),owner:f.get('owner'),priority:f.get('priority'),status:'Offen'});e.target.reset();$('#taskModal').close();save()});
$('#maintenanceForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);state.maintenance.push({id:Date.now(),title:f.get('title'),propertyId:f.get('propertyId'),due:f.get('due'),intervalMonths:Number(f.get('intervalMonths')),owner:f.get('owner'),cost:Number(f.get('cost')),status:'Offen'});e.target.reset();$('#maintenanceModal').close();save()});
$('#reserveForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target),id=Number(e.target.dataset.editId),data={title:f.get('title'),propertyId:f.get('propertyId'),target:Number(f.get('target')),saved:Number(f.get('saved')),year:Number(f.get('year'))||''};if(id){Object.assign(state.reserves.find(x=>x.id===id),data);delete e.target.dataset.editId}else state.reserves.push({id:Date.now(),...data});e.target.reset();$('#reserveModal').close();save()});
$('#saveSettings').addEventListener('click',()=>{state.settings={name:$('#settingName').value,startBalance:Number($('#settingStartBalance').value),minimumReserve:Number($('#settingMinimumReserve').value),monthlyReserve:Number($('#settingMonthlyReserve').value)};save();alert('Gespeichert')});
$('#exportBtn').addEventListener('click',()=>{
 const payload={...state,_backupInfo:{version:22,exportedAt:new Date().toISOString(),storage:'IndexedDB'}};
 const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
 const a=document.createElement('a');
 a.href=URL.createObjectURL(blob);
 a.download='hausverwaltung-sicherung-v22.json';
 a.click();
 setTimeout(()=>URL.revokeObjectURL(a.href),1000);
});
$('#importInput').addEventListener('change',async e=>{
 const input=e.target,file=input.files?.[0];
 if(!file)return;
 try{
  const text=(await file.text()).replace(/^\uFEFF/,'').trim();
  const parsed=JSON.parse(text);
  if(!parsed||typeof parsed!=='object'||Array.isArray(parsed))throw new Error('Ungültige Sicherungsdatei');
  const imported=migrate(parsed);
  const oldState=state;
  state=imported;
  const ok=await persistState(false);
  if(!ok){
   state=oldState;
   render();
   alert('Die Sicherung wurde gelesen, konnte aber nicht gespeichert werden.');
   return;
  }
  render();
  applyUiLanguage();
  alert('Sicherung erfolgreich importiert');
 }catch(error){
  console.error('Importfehler',error);
  alert('Die JSON-Datei konnte nicht importiert werden. Bitte prüfe, ob es eine Sicherung dieser App ist.');
 }finally{
  input.value='';
 }
});
$('#resetBtn').addEventListener('click',async()=>{
 if(confirm('Wirklich alle lokalen Daten löschen?')){
  state=clone(seed);
  await dbClearState();
  try{
   localStorage.removeItem(KEY);
   OLD_KEYS.forEach(k=>localStorage.removeItem(k));
  }catch{}
  await persistState(false);
  render();
  applyUiLanguage();
 }
});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('#installBtn').classList.remove('hidden')});$('#installBtn').addEventListener('click',async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('#installBtn').classList.add('hidden')});
$$('button[value="cancel"]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();b.closest('dialog').close()}));
if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js');
Object.assign(window,{editOwner,toggleOwner,deleteOwner,editProperty,deleteProperty,editCost,deleteCost,completeItem,deletePlanning,editReserve,deleteWaste,editVehicle,deleteVehicle,openServiceModal,setUiLanguage,applyUiLanguage,setLocalProfileV24});render();applyUiLanguage();restoreIndexedDbState();
