const KEY='hausverwaltung_pwa_v351';
const OLD_KEYS=['hausverwaltung_pwa_v29','hausverwaltung_pwa_v28','hausverwaltung_pwa_v27','hausverwaltung_pwa_v26','hausverwaltung_pwa_v25','hausverwaltung_pwa_v24','hausverwaltung_pwa_v23','hausverwaltung_pwa_v22','hausverwaltung_pwa_v21','hausverwaltung_pwa_v20','hausverwaltung_pwa_v19','hausverwaltung_pwa_v18','hausverwaltung_pwa_v17','hausverwaltung_pwa_v16','hausverwaltung_pwa_v15','hausverwaltung_pwa_v14','hausverwaltung_pwa_v13','hausverwaltung_pwa_v12','hausverwaltung_pwa_v11','hausverwaltung_pwa_v10','hausverwaltung_pwa_v9','hausverwaltung_pwa_v8','hausverwaltung_pwa_v7','hausverwaltung_pwa_v6','hausverwaltung_pwa_v5','hausverwaltung_pwa_v4','hausverwaltung_pwa_v3','hausverwaltung_pwa_v2','hausverwaltung_pwa'];

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
 d.properties=(Array.isArray(data.properties)?data.properties:clone(seed.properties)).slice(0,5).map(x=>{
 const meterHistory=Array.isArray(x.meterHistory)?x.meterHistory:[];
 if(!meterHistory.length&&x.meterReadingDate&&(x.electricityMeter!==''||x.waterMeter!=='')){
  meterHistory.push({id:Date.now()+Math.random(),date:x.meterReadingDate,electricity:x.electricityMeter??'',water:x.waterMeter??''});
 }
 return {...x,
  photo:x.photo||'',constructionYear:x.constructionYear||'',plotArea:x.plotArea??'',
  rooms:x.rooms??'',bathrooms:x.bathrooms??'',toilets:x.toilets??'',
  electricityMeter:x.electricityMeter??'',waterMeter:x.waterMeter??'',meterReadingDate:x.meterReadingDate||'',
  meterHistory,renovationCosts:Array.isArray(x.renovationCosts)?x.renovationCosts:[],
  energyClass:x.energyClass||'',heatingType:x.heatingType||'',notes:x.notes||''
 };
});
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
 member:{rights:{finance:false,objects:false,planning:true,vehicles:false,remove:false}},
 caretaker:{rights:{finance:false,objects:false,planning:true,vehicles:false,remove:false}},
 tax:{rights:{finance:true,objects:false,planning:false,vehicles:false,remove:false}},
 resident:{rights:{finance:false,objects:false,planning:true,vehicles:false,remove:false}},
 guest:{rights:{finance:false,objects:false,planning:false,vehicles:false,remove:false}}
};
function localProfileKeyV24(){return currentRoleV27()||'admin'}
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


const AUTH_REGISTRY_KEY_V27='auth:registry:v1',AUTH_SESSION_KEY_V27='hausverwaltung_session_v1';
let authRegistryV27={version:1,tenants:[],users:[]};
const ROLE_DEFS_V27={
 admin:{label:'Administrator',rights:{finance:true,objects:true,planning:true,vehicles:true,remove:true,userAdmin:true}},
 owner:{label:'Eigentümer',rights:{finance:true,objects:true,planning:true,vehicles:true,remove:false,userAdmin:false}},
 member:{label:'Familienmitglied',rights:{finance:false,objects:false,planning:true,vehicles:false,remove:false,userAdmin:false}},
 caretaker:{label:'Hausmeister',rights:{finance:false,objects:false,planning:true,vehicles:false,remove:false,userAdmin:false}},
 tax:{label:'Steuerberater',rights:{finance:true,objects:false,planning:false,vehicles:false,remove:false,userAdmin:false}}
};
const BOOTSTRAP_ACCOUNT_V30={
 tenant:{id:'tenant_bootstrap_00001',name:'2m6d1m4',code:'00001',createdAt:'2026-08-07T00:00:00.000Z',maxUsers:6,bootstrap:true},
 user:{id:'user_bootstrap_admin_00001',tenantId:'tenant_bootstrap_00001',displayName:'Dmitrij Kovalevich',username:'2m6d1m4',role:'admin',active:true,salt:'v30-bootstrap-salt-00001',passwordHash:'9691eefb',bootstrap:true,hashType:'local-v1'}
};
async function ensureBootstrapAccountV30(){
 let tenant=authRegistryV27.tenants.find(t=>t.code===BOOTSTRAP_ACCOUNT_V30.tenant.code);
 if(!tenant){
  tenant={...BOOTSTRAP_ACCOUNT_V30.tenant};
  authRegistryV27.tenants.push(tenant);
 }
 let user=authRegistryV27.users.find(u=>u.tenantId===tenant.id&&normV27(u.username)===BOOTSTRAP_ACCOUNT_V30.user.username);
 if(!user){
  user={...BOOTSTRAP_ACCOUNT_V30.user,tenantId:tenant.id};
  authRegistryV27.users.push(user);
 }else if(user.bootstrap===true || user.id==='user_bootstrap_admin_00001' || user.username==='2m6d1m4'){
  Object.assign(user,{
   displayName:BOOTSTRAP_ACCOUNT_V30.user.displayName,
   username:BOOTSTRAP_ACCOUNT_V30.user.username,
   role:'admin',active:true,
   salt:BOOTSTRAP_ACCOUNT_V30.user.salt,
   passwordHash:BOOTSTRAP_ACCOUNT_V30.user.passwordHash,
   hashType:'local-v1',bootstrap:true
  });
 }
 await saveRegistryV27();
 return {tenant,user};
}

function authSessionV27(){try{return JSON.parse(sessionStorage.getItem(AUTH_SESSION_KEY_V27)||'null')}catch{return null}}
function setAuthSessionV27(s){try{s?sessionStorage.setItem(AUTH_SESSION_KEY_V27,JSON.stringify(s)):sessionStorage.removeItem(AUTH_SESSION_KEY_V27)}catch{}}
function currentTenantIdV27(){return authSessionV27()?.tenantId||null}
function currentUserIdV27(){return authSessionV27()?.userId||null}
function currentTenantV27(){return authRegistryV27.tenants.find(t=>t.id===currentTenantIdV27())||null}
function currentAuthUserV27(){return authRegistryV27.users.find(u=>u.id===currentUserIdV27()&&u.tenantId===currentTenantIdV27())||null}
function currentRoleV27(){return currentAuthUserV27()?.role||'admin'}
function currentRightsV27(){return ROLE_DEFS_V27[currentAuthUserV27()?.role]?.rights||ROLE_DEFS_V27.admin.rights}
function makeIdV27(p){return p+'_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,9)}
function normV27(v){return String(v||'').trim().toLowerCase()}
function saltV27(){return 's_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,12)}
async function hashV27(p,s){
 const text=String(s)+':'+String(p);
 let h=2166136261>>>0;
 for(let i=0;i<text.length;i++){h^=text.charCodeAt(i)&255;h=Math.imul(h,16777619)>>>0}
 return h.toString(16).padStart(8,'0');
}
async function loadRegistryV27(){
 let r=null;
 try{r=await dbRawGet(AUTH_REGISTRY_KEY_V27)}catch(error){console.warn('IndexedDB Auth-Fallback',error)}
 if(!r){try{r=JSON.parse(localStorage.getItem(AUTH_REGISTRY_KEY_V27)||'null')}catch{}}
 authRegistryV27=r&&typeof r==='object'?r:{version:1,tenants:[],users:[]};
 authRegistryV27.tenants=Array.isArray(authRegistryV27.tenants)?authRegistryV27.tenants:[];
 authRegistryV27.users=Array.isArray(authRegistryV27.users)?authRegistryV27.users:[];
}
async function saveRegistryV27(){
 try{await dbRawPut(AUTH_REGISTRY_KEY_V27,authRegistryV27)}catch(error){console.warn('IndexedDB Auth-Speicherung',error)}
 try{localStorage.setItem(AUTH_REGISTRY_KEY_V27,JSON.stringify(authRegistryV27))}catch{}
}
function showAuthV27(mode){document.body.classList.add('auth-locked');$('#authGate').classList.remove('hidden');$('#loginCard').classList.toggle('hidden',mode!=='login');$('#setupCard').classList.toggle('hidden',mode!=='setup')}
function hideAuthV27(){$('#authGate').classList.add('hidden');document.body.classList.remove('auth-locked')}
function authErrV27(id,msg){const e=$('#'+id);e.textContent=msg||'';e.classList.toggle('hidden',!msg)}
async function loadTenantStateV27(){
 const tid=currentTenantIdV27();if(!tid)return;
 const fallbackKey='tenant_state_fallback:'+tid;
 let s=null;
 try{s=await dbRawGet(`tenant:${tid}:state`)}catch(error){console.warn('IndexedDB Mandant-Fallback',error)}
 if(!s){try{s=JSON.parse(localStorage.getItem(fallbackKey)||'null')}catch{}}
 if(!s){
  try{const legacy=await dbRawGet(LEGACY_DB_STATE_KEY);s=legacy||state}
  catch(error){s=state}
 }
 state=migrate(s||state);
 try{await dbRawPut(`tenant:${tid}:state`,state)}catch{}
 try{localStorage.setItem(fallbackKey,JSON.stringify(state))}catch{}
 render();applyUiLanguage();applyAuthPermissionsV27();renderTenantAdminV27();updateLocalStatus('Lokal gespeichert');
}
async function createTenantV27(form){const f=new FormData(form),name=String(f.get('tenantName')).trim(),code=normV27(f.get('tenantCode')),dn=String(f.get('displayName')).trim(),un=normV27(f.get('username')),p=String(f.get('password')),p2=String(f.get('password2'));if(p!==p2)throw Error('Passwörter stimmen nicht überein.');if(p.length<6)throw Error('Passwort mindestens 6 Zeichen.');if(authRegistryV27.tenants.some(t=>t.code===code))throw Error('Kontocode existiert bereits.');const t={id:makeIdV27('tenant'),name,code,createdAt:new Date().toISOString(),maxUsers:6},s=saltV27(),u={id:makeIdV27('user'),tenantId:t.id,displayName:dn,username:un,role:'admin',active:true,salt:s,passwordHash:await hashV27(p,s)};authRegistryV27.tenants.push(t);authRegistryV27.users.push(u);await saveRegistryV27();const legacy=await dbRawGet(LEGACY_DB_STATE_KEY);await dbRawPut(`tenant:${t.id}:state`,migrate(legacy||state));setAuthSessionV27({tenantId:t.id,userId:u.id});await loadTenantStateV27();hideAuthV27()}
async function loginV27(form){
 const f=new FormData(form);
 const code=normV27(f.get('tenantCode'));
 const un=normV27(f.get('username'));
 const p=String(f.get('password')||'');

 if(code===BOOTSTRAP_ACCOUNT_V30.tenant.code && un===BOOTSTRAP_ACCOUNT_V30.user.username){
  const entered=await hashV27(p,BOOTSTRAP_ACCOUNT_V30.user.salt);
  if(entered!==BOOTSTRAP_ACCOUNT_V30.user.passwordHash)throw Error('Passwort ist falsch.');
  const fixed=await ensureBootstrapAccountV30();
  setAuthSessionV27({tenantId:fixed.tenant.id,userId:fixed.user.id});
  await loadTenantStateV27();
  hideAuthV27();
  return true;
 }

 let t=authRegistryV27.tenants.find(x=>x.code===code);
 if(!t){
  try{await ensureBootstrapAccountV30()}catch{}
  t=authRegistryV27.tenants.find(x=>x.code===code);
 }
 if(!t)throw Error('Kontocode nicht gefunden.');

 const u=authRegistryV27.users.find(x=>x.tenantId===t.id&&normV27(x.username)===un&&x.active!==false);
 if(!u)throw Error('Benutzername nicht gefunden.');

 const enteredHash=await hashV27(p,u.salt);
 if(enteredHash!==u.passwordHash)throw Error('Passwort ist falsch.');

 setAuthSessionV27({tenantId:t.id,userId:u.id});
 await loadTenantStateV27();
 hideAuthV27();
 return true;
}
async function logoutV27(){await persistState(false);setAuthSessionV27(null);showAuthV27('login')}
function roleLabelV27(r){return ROLE_DEFS_V27[r]?.label||r}
function tenantUsersV27(){return authRegistryV27.users.filter(u=>u.tenantId===currentTenantIdV27())}
function renderTenantAdminV27(){const t=currentTenantV27(),me=currentAuthUserV27(),sum=$('#tenantAccountSummary'),list=$('#tenantUserList'),add=$('#addTenantUserBtn');if(!sum||!list||!t||!me)return;const us=tenantUsersV27(),admin=currentRightsV27().userAdmin;sum.innerHTML=`<div class="tenant-summary-grid"><div><span>Konto</span><strong>${esc(t.name)}</strong></div><div><span>Kontocode</span><strong>${esc(t.code)}</strong></div><div><span>Angemeldet als</span><strong>${esc(me.displayName)}</strong></div><div><span>Rolle</span><strong>${esc(roleLabelV27(me.role))}</strong></div></div>`;add.disabled=!admin||us.length>=6;add.textContent=us.length>=6?'Max. 6 Benutzer':'+ Benutzer';list.innerHTML=us.map(u=>`<article class="tenant-user-row"><div><strong>${esc(u.displayName)}</strong><span>@${esc(u.username)} · ${esc(roleLabelV27(u.role))}</span></div><div>${admin&&u.id!==me.id?`<button class="secondary small" onclick="editTenantUserV27('${u.id}')">Bearbeiten</button><button class="danger small" onclick="deleteTenantUserV27('${u.id}')">Löschen</button>`:''}</div></article>`).join('')}
function openTenantUserModalV27(u=null){if(!currentRightsV27().userAdmin)return;if(!u&&tenantUsersV27().length>=6){alert('Maximal 5 zusätzliche Benutzer.');return}const f=$('#tenantUserForm');f.reset();f.elements.id.value=u?.id||'';f.elements.displayName.value=u?.displayName||'';f.elements.username.value=u?.username||'';f.elements.role.value=u?.role||'member';f.elements.password.required=!u;$('#tenantUserPasswordLabel span').textContent=u?'Neues Passwort (optional)':'Passwort';$('#tenantUserModalTitle').textContent=u?'Benutzer bearbeiten':'Benutzer hinzufügen';$('#tenantUserModal').showModal()}
function editTenantUserV27(id){const u=tenantUsersV27().find(x=>x.id===id);if(u)openTenantUserModalV27(u)}
async function deleteTenantUserV27(id){if(!currentRightsV27().userAdmin||id===currentUserIdV27())return;const u=tenantUsersV27().find(x=>x.id===id);if(!u||!confirm(`Benutzer „${u.displayName}“ löschen?`))return;authRegistryV27.users=authRegistryV27.users.filter(x=>x.id!==id);await saveRegistryV27();renderTenantAdminV27()}
async function saveTenantUserV27(form){if(!currentRightsV27().userAdmin)return;const f=new FormData(form),id=String(f.get('id')||''),dn=String(f.get('displayName')).trim(),un=normV27(f.get('username')),role=String(f.get('role')),p=String(f.get('password')||''),tid=currentTenantIdV27();if(authRegistryV27.users.some(u=>u.tenantId===tid&&u.id!==id&&normV27(u.username)===un))throw Error('Benutzername bereits vergeben.');if(id){const u=authRegistryV27.users.find(x=>x.id===id&&x.tenantId===tid);u.displayName=dn;u.username=un;u.role=role;if(p){if(p.length<6)throw Error('Passwort mindestens 6 Zeichen.');u.salt=saltV27();u.passwordHash=await hashV27(p,u.salt)}}else{if(tenantUsersV27().length>=6)throw Error('Maximal 5 zusätzliche Benutzer.');if(p.length<6)throw Error('Passwort mindestens 6 Zeichen.');const s=saltV27();authRegistryV27.users.push({id:makeIdV27('user'),tenantId:tid,displayName:dn,username:un,role,active:true,salt:s,passwordHash:await hashV27(p,s)})}await saveRegistryV27();renderTenantAdminV27();applyAuthPermissionsV27()}
function authRightV27(btn){const s=(btn.getAttribute('onclick')||'')+' '+(btn.id||'')+' '+(btn.dataset.modal||'');if(/Vehicle|vehicle/.test(s))return'vehicles';if(/Property|property|Owner|owner/.test(s))return'objects';if(/Task|task|Planning|planning|Reserve|reserve|completeItem/.test(s))return'planning';if(/Transaction|transaction|Cost|cost|Loan|loan/.test(s))return'finance';return''}
function applyAuthPermissionsV27(){const r=currentRightsV27();document.querySelectorAll('button').forEach(b=>{if(b.closest('#authGate')||b.closest('#tenantAccountPanel'))return;const right=authRightV27(b);if(!right)return;const del=b.classList.contains('danger')||/delete|Löschen|Entfernen/.test(b.getAttribute('onclick')||'');const dis=!r[right]||(del&&!r.remove);b.disabled=dis;b.classList.toggle('permission-disabled',dis)});document.body.classList.toggle('role-no-finance',!r.finance);renderTenantAdminV27()}
async function bootstrapAuthV27(){
 document.body.classList.add('auth-locked');
 showAuthV27('login');
 try{
  await loadRegistryV27();
  await ensureBootstrapAccountV30();
 }catch(error){
  console.error('Lokale Kontodaten konnten nicht initialisiert werden; Bootstrap-Login bleibt verfügbar.',error);
  authRegistryV27={version:1,tenants:[],users:[]};
 }
 setAuthSessionV27(null);
 showAuthV27('login');
}

const DB_NAME='hausverwaltung_local_db';
const DB_VERSION=1;
const DB_STORE='appdata';
const LEGACY_DB_STATE_KEY='state';
function activeTenantStateKey(){const tid=currentTenantIdV27();return tid?`tenant:${tid}:state`:LEGACY_DB_STATE_KEY;}

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
async function dbRawGet(key){const db=await openLocalDb();return new Promise((resolve,reject)=>{const tx=db.transaction(DB_STORE,'readonly'),req=tx.objectStore(DB_STORE).get(key);req.onsuccess=()=>resolve(req.result??null);req.onerror=()=>reject(req.error);tx.oncomplete=()=>db.close()})}
async function dbRawPut(key,value){const db=await openLocalDb();return new Promise((resolve,reject)=>{const tx=db.transaction(DB_STORE,'readwrite');tx.objectStore(DB_STORE).put(value,key);tx.oncomplete=()=>{db.close();resolve(true)};tx.onerror=()=>{const e=tx.error;db.close();reject(e)}})}

async function dbGetState(){
 const db=await openLocalDb();
 return new Promise((resolve,reject)=>{
  const tx=db.transaction(DB_STORE,'readonly');
  const store=tx.objectStore(DB_STORE);
  const req=store.get(activeTenantStateKey());
  req.onsuccess=()=>resolve(req.result||null);
  req.onerror=()=>reject(req.error);
  tx.oncomplete=()=>db.close();
 });
}
async function dbSetState(value){
 const db=await openLocalDb();
 return new Promise((resolve,reject)=>{
  const tx=db.transaction(DB_STORE,'readwrite');
  tx.objectStore(DB_STORE).put(value,activeTenantStateKey());
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
   tx.objectStore(DB_STORE).delete(activeTenantStateKey());
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
  try{if(currentTenantIdV27())localStorage.setItem('tenant_state_fallback:'+currentTenantIdV27(),JSON.stringify(state))}catch{}
  lastSaveTime=new Date();
  updateLocalStatus('Gespeichert');
  // Small compatibility copy without large photos if localStorage has room.
  try{
   const compact=JSON.parse(JSON.stringify(state));
   (compact.properties||[]).forEach(p=>{if(p.photo&&String(p.photo).length>200000)p.photo=''});
   localStorage.setItem(KEY+':'+(currentTenantIdV27()||'legacy'),JSON.stringify(compact));
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
function costIsPaid(x){return x?.paid===true}
function costYearlyOriginal(x){return Number(x.amount||0)*intervalFactor(x.interval)}
function costMonthlyOriginal(x){return costYearlyOriginal(x)/12}
function costYearly(x){return costIsPaid(x)?0:costYearlyOriginal(x)}
function costMonthly(x){return costIsPaid(x)?0:costMonthlyOriginal(x)}
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
    <div><span>Ablesedatum</span><strong>${x.meterReadingDate?dateDE(x.meterReadingDate):'–'}</strong></div><div><span>Sanierung bezahlt</span><strong>${eur(renovationTotalV35(x))}</strong></div>
   </div>
   ${x.notes?`<p class="property-notes"><strong>Notiz:</strong> ${esc(x.notes)}</p>`:''}
  </div>
 </article>`).join('');
}


async function imageFileToDataUrlV31(file,maxWidth=1400,maxHeight=1000,quality=.82){
 if(!file)return '';
 const raw=await new Promise((resolve,reject)=>{
  const r=new FileReader();
  r.onload=()=>resolve(String(r.result||''));
  r.onerror=()=>reject(r.error||new Error('Bild konnte nicht gelesen werden'));
  r.readAsDataURL(file);
 });
 try{
  const img=await new Promise((resolve,reject)=>{
   const i=new Image(); i.onload=()=>resolve(i); i.onerror=reject; i.src=raw;
  });
  const scale=Math.min(1,maxWidth/img.width,maxHeight/img.height);
  if(scale>=1)return raw;
  const c=document.createElement('canvas');
  c.width=Math.max(1,Math.round(img.width*scale));
  c.height=Math.max(1,Math.round(img.height*scale));
  c.getContext('2d').drawImage(img,0,0,c.width,c.height);
  return c.toDataURL('image/jpeg',quality);
 }catch{return raw}
}
function updateVehiclePhotoPreviewV31(photo){
 const wrap=document.getElementById('vehiclePhotoPreviewWrap');
 const img=document.getElementById('vehiclePhotoPreview');
 if(!wrap||!img)return;
 if(photo){img.src=photo;wrap.classList.remove('hidden')}
 else{img.removeAttribute('src');wrap.classList.add('hidden')}
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
  return `<article class="vehicle-card">${v.photo?`<img class="vehicle-photo" src="${v.photo}" alt="${esc(vehicleName(v))}">`:`<div class="vehicle-placeholder">🚗</div>`}<div class="vehicle-body">
   <div class="card-top"><span class="tag">${esc(v.plate||uiText('noPlate'))}</span><span class="vehicle-status ${status.cls}">${status.text}</span></div>
   <h3>${esc(vehicleName(v))}</h3><p>${esc(v.year||uiText('unknownYear'))} · ${esc(v.fuel?fuelLabel(v.fuel):uiText('unknownFuel'))}</p>
   <div class="vehicle-kpis"><div><span>${uiText('mileage')}</span><strong>${km(v.currentKm)}</strong></div><div><span>${uiText('lastOil')}</span><strong>${v.lastOilDate?dateDE(v.lastOilDate):'–'}</strong><small>${v.lastOilKm?km(v.lastOilKm):''}</small></div><div><span>${uiText('nextOil')}</span><strong>${v.nextOilKm?km(v.nextOilKm):'–'}</strong><small>${v.nextOilDate?dateDE(v.nextOilDate):''}</small></div><div><span>${uiText('tuvDue')}</span><strong>${v.tuvDate?dateDE(v.tuvDate):'–'}</strong></div></div>
   <div class="vehicle-info-grid"><div><span>${uiText('motorOil')}</span><strong>${esc(v.oilSpec||'–')}</strong></div><div><span>${uiText('tires')}</span><strong>${esc(v.tires||'–')}</strong></div><div><span>${uiText('brakesLast')}</span><strong>${v.brakesDate?dateDE(v.brakesDate):'–'}</strong></div><div><span>${uiText('batteryLast')}</span><strong>${v.batteryDate?dateDE(v.batteryDate):'–'}</strong></div></div>
   ${last?`<div class="last-service"><span>${uiText('lastWorkshop')}</span><strong>${dateDE(last.date)} · ${esc(serviceTypeLabel(last.type))}</strong><small>${last.km?km(last.km):''}${last.cost?` · ${eur(last.cost)}`:''}</small></div>`:''}
   <div class="card-actions"><button class="secondary small" onclick="editVehicle(${v.id})">${uiText('edit')}</button><button class="secondary small" onclick="openServiceModal(${v.id})">${uiText('addService')}</button><button class="danger small" onclick="deleteVehicle(${v.id})">${uiText('delete')}</button></div>
  </div></article>`;
 }).join(''):`<div class="empty">${uiText('noVehicles')}</div>`;
}
function openVehicleModal(v=null){
 const f=$('#vehicleForm');
 f.reset();
 f.dataset.mode=v?'edit':'new';
 f.dataset.currentPhoto=v?.photo||'';
 f.dataset.removePhoto='0';
 $('#vehicleModalTitle').textContent=v?uiText('vehicleEditTitle'):uiText('vehicleAddTitle');
 f.elements.id.value=v?String(v.id):'';
 ['make','model','plate','year','fuel','currentKm','lastOilDate','lastOilKm','nextOilDate','nextOilKm','tuvDate','oilSpec','tires','brakesDate','batteryDate','notes'].forEach(k=>{if(f.elements[k])f.elements[k].value=v?.[k]??''});
 updateVehiclePhotoPreviewV31(v?.photo||'');
 $('#vehicleModal').showModal();
}
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
   <div class="dashboard-vehicle-head">${v.photo?`<img class="dashboard-vehicle-photo" src="${v.photo}" alt="${esc(vehicleName(v))}">`:`<div class="vehicle-icon">🚗</div>`}<div><h3>${esc(vehicleName(v))}</h3><p>${esc(v.plate||uiText('noPlate'))}</p></div></div>
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
 const upcoming=[...state.tasks].sort((a,b)=>{
  const ad=a.status==='Erledigt'?1:0,bd=b.status==='Erledigt'?1:0;
  if(ad!==bd)return ad-bd;
  return (a.due||'9999').localeCompare(b.due||'9999');
 });
 $('#upcomingItems').innerHTML=upcoming.length?upcoming.map(dashboardTaskCardV33).join(''):'<div class="empty">Noch keine Aufgaben erstellt</div>'

 const dashboardCostBox=$('#dashboardCostPositions');
 if(dashboardCostBox){
  dashboardCostBox.innerHTML=(state.costPlans||[]).length?[
  ...state.costPlans.map(cost=>`<div class="cost-info-row ${costIsPaid(cost)?'cost-info-paid':''}"><span class="cost-category-cell"><strong>${esc(cost.category)}</strong><small>${esc(cost.name||"")}${costIsPaid(cost)?' · ✓ bezahlt':''}</small></span><span>${esc(propertyName(cost.propertyId))}</span><strong>${costIsPaid(cost)?`<s>${eur(costMonthlyOriginal(cost))}</s>`:eur(costMonthly(cost))}</strong><span>${intervalLabel(cost.interval)}</span><strong>${costIsPaid(cost)?`<s>${eur(costYearlyOriginal(cost))}</s>`:eur(costYearly(cost))}</strong></div>`),
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




function updateTaskPhotoPreviewV35(photo){
 const wrap=$('#taskPhotoPreviewWrap'),img=$('#taskPhotoPreview');
 if(!wrap||!img)return;
 if(photo){img.src=photo;wrap.classList.remove('hidden')}
 else{img.removeAttribute('src');wrap.classList.add('hidden')}
}

function taskMonthLabelV34(value){
 const raw=String(value||'');
 if(!raw)return 'Kein Termin';
 const m=raw.match(/^(\d{4})-(\d{2})/);
 if(!m)return dateDE(raw);
 return `${m[2]}/${m[1]}`;
}
function taskDueMonthDateV34(value){
 const raw=String(value||'');
 const m=raw.match(/^(\d{4})-(\d{2})/);
 if(!m)return null;
 // Last day of selected month so the task remains "current" for the whole month.
 return new Date(Number(m[1]),Number(m[2]),0,12,0,0,0);
}
function completedByLabelV34(task){
 return task?.completedByName||task?.completedBy||'Unbekannter Benutzer';
}

function dashboardTaskVisualV33(task){
 if(task?.photo)return {type:'photo',value:task.photo};
 const property=state.properties.find(p=>String(p.id)===String(task.propertyId));
 if(property?.photo)return {type:'photo',value:property.photo};
 const text=String(task.title||'').toLowerCase();
 let icon='🛠️';
 if(/rauch|melder|brand/.test(text))icon='🔔';
 else if(/heiz|druck|therm|wärme/.test(text))icon='🌡️';
 else if(/regen|rinne|dach/.test(text))icon='🏠';
 else if(/spül|wasch|küche/.test(text))icon='🧽';
 else if(/strom|elektr|licht|lampe/.test(text))icon='⚡';
 else if(/wasser|rohr|pumpe/.test(text))icon='💧';
 else if(/garten|rasen|baum|hecke/.test(text))icon='🌿';
 else if(/auto|fahrzeug/.test(text))icon='🚗';
 return {type:'icon',value:icon};
}
function dashboardTaskStatusV33(task){
 if(String(task.status||'').toLowerCase()==='erledigt')return {key:'ok',label:'Erledigt'};
 const due=taskDueMonthDateV34(task.due);
 const today=new Date();today.setHours(12,0,0,0);
 const diff=due&&!Number.isNaN(due.getTime())?Math.ceil((due-today)/86400000):null;
 const priority=String(task.priority||'').toLowerCase();
 if((diff!==null&&diff<0)||priority==='hoch'||priority==='sofort')return {key:'urgent',label:'Handlungsbedarf'};
 if((diff!==null&&diff<=45)||priority==='mittel')return {key:'soon',label:'Bald erforderlich'};
 return {key:'ok',label:'Kein Handlungsbedarf'};
}
function dashboardTaskCardV33(task){
 const visual=dashboardTaskVisualV33(task);
 const status=dashboardTaskStatusV33(task);
 const property=propertyName(task.propertyId);
 const done=String(task.status||'').toLowerCase()==='erledigt';
 return `<article class="dashboard-task-card ${done?'dashboard-task-card-done':''}">
  <div class="dashboard-task-visual ${visual.type==='icon'?'is-icon':''}">
   ${visual.type==='photo'?`<img src="${visual.value}" alt="${esc(task.title||'Aufgabe')}">`:`<span>${visual.value}</span>`}
  </div>
  <div class="dashboard-task-main">
   <h3>${esc(task.title||'Aufgabe')}</h3>
   <div class="dashboard-task-meta">
    <span>🗓 ${taskMonthLabelV34(task.due)}</span>
    <span class="task-object-name">🏠 ${esc(property)}</span>
    ${done?`<span class="task-completed-by">✓ Erledigt von ${esc(completedByLabelV34(task))}</span>`:''}
   </div>
  </div>
  <div class="dashboard-task-state dashboard-task-state-${status.key}">
   <i></i><strong>${status.label}</strong>
   ${!done?`<button class="dashboard-task-done-btn" onclick="completeItem('task',${task.id})">Erledigt</button>`:''}
  </div>
  <span class="dashboard-task-chevron" aria-hidden="true">›</span>
 </article>`;
}

function transactionRow(x){return `<div class="list-item"><div class="list-main"><strong>${esc(x.description)}</strong><span>${esc(x.category)} · ${esc(propertyName(x.propertyId))} · ${dateDE(x.date)}</span></div><div class="amount ${x.type==='Einnahme'?'income':'expense'}">${x.type==='Einnahme'?'+':'−'} ${eur(x.amount)}</div></div>`}
function renderTransactions(){return}
function renderCosts(){
 const monthly=plannedCostMonthly(),yearly=state.costPlans.reduce((a,x)=>a+costYearly(x),0);
 $('#costMonthlyTotal').textContent=eur(monthly);
 $('#costYearlyTotal').textContent=eur(yearly);

 const rows=state.properties.map(p=>{
  const m=state.costPlans.filter(x=>String(x.propertyId)===String(p.id)).reduce((a,x)=>a+costMonthly(x),0);
  return `<div><span>${esc(p.name)}</span><strong>${eur(m)} / Monat · ${eur(m*12)} / Jahr</strong></div>`;
 });
 const shared=state.costPlans.filter(x=>x.propertyId==='all'||x.propertyId===''||x.propertyId==null).reduce((a,x)=>a+costMonthly(x),0);
 rows.push(
  `<div><span>Gemeinsame Kosten</span><strong>${eur(shared)} / Monat · ${eur(shared*12)} / Jahr</strong></div>`,
  `<div class="total-row"><span>Gesamt</span><strong>${eur(monthly)} / Monat · ${eur(yearly)} / Jahr</strong></div>`
 );
 $('#costObjectSummary').innerHTML=rows.join('');

 $('#costPlanList').innerHTML=state.costPlans.length?state.costPlans.map(x=>{
  const people=eligibleOwnersForCost(x);
  const paid=costIsPaid(x);
  const originalMonthly=costMonthlyOriginal(x);
  const originalYearly=costYearlyOriginal(x);
  const perPayment=people.length?` <span class="per-person-note">(${eur(Number(x.amount||0)/people.length)} je Anteil)</span>`:'';
  const personBreakdown=people.length
   ?`<div class="cost-person-breakdown">${people.map((person,index)=>`<span><b>P${person.personNumber||index+1}</b> ${esc(person.name)}: ${paid?`<s>${eur(originalMonthly/people.length)} / Monat</s> <em>nicht mehr angerechnet</em>`:`${eur(originalMonthly/people.length)} / Monat`}</span>`).join('')}</div>`
   :'<div class="warning-text">Keine Person ausgewählt</div>';

  return `<article class="entity-card cost-card ${paid?'cost-card-paid':''}">
   <div class="card-top">
    <div class="cost-tags">
     <span class="tag">${esc(x.category)}</span>
     ${paid?'<span class="tag paid-tag">✓ Vollständig bezahlt</span>':'<span class="tag active-cost-tag">Laufend</span>'}
    </div>
    <span class="tag subtle">${esc(propertyName(x.propertyId))}</span>
   </div>
   <h3><span class="person-id-badge">Person ${x.personNumber||''}</span> ${esc(x.name)}</h3>
   <p>${intervalLabel(x.interval)} · ${esc(x.note||'kein Hinweis')}</p>
   <div class="meta cost-meta">
    <span>${eur(x.amount)} je Zahlung${perPayment}</span>
    <strong>${paid?`<s>${eur(originalMonthly)} / Monat · ${eur(originalYearly)} / Jahr</s>`:`${eur(originalMonthly)} / Monat · ${eur(originalYearly)} / Jahr`}</strong>
   </div>
   ${paid?`<div class="paid-cost-info">✓ Bezahlt${x.paidAt?` · markiert am ${new Date(x.paidAt).toLocaleDateString('de-DE')}`:''} · wird nicht mehr in Summen eingerechnet</div>`:''}
   ${personBreakdown}
   <div class="card-actions">
    <button class="secondary small" onclick="editCost(${x.id})">Bearbeiten</button>
    <button class="${paid?'secondary':'success'} small" onclick="toggleCostPaid(${x.id})">${paid?'Wieder aktivieren':'Komplett bezahlt'}</button>
    <button class="danger small" onclick="deleteCost(${x.id})">Löschen</button>
   </div>
  </article>`;
 }).join(''):'<div class="empty">Noch keine Kostenpositionen</div>';
}
function intervalLabel(i){return {monthly:'monatlich',fiveyearly:'5× jährlich',quarterly:'vierteljährlich',semiannual:'halbjährlich',yearly:'jährlich'}[i]||i}

function propertyMeterHistoryHtmlV35(x){
 const rows=(x.meterHistory||[]).slice().sort((a,b)=>String(b.date).localeCompare(String(a.date)));
 if(!rows.length)return '<div class="property-sub-empty">Noch keine Zählerstände historisiert</div>';
 return `<div class="meter-history-list">${rows.map(r=>`<div class="meter-history-row">
  <span>${dateDE(r.date)}</span>
  <strong>⚡ ${r.electricity!==''&&r.electricity!=null?Number(r.electricity).toLocaleString('de-DE')+' kWh':'–'}</strong>
  <strong>💧 ${r.water!==''&&r.water!=null?Number(r.water).toLocaleString('de-DE')+' m³':'–'}</strong>
 </div>`).join('')}</div>`;
}
function renovationTotalV35(x){return (x.renovationCosts||[]).reduce((s,r)=>s+Number(r.amount||0),0)}
function propertyRenovationHtmlV35(x){
 const rows=(x.renovationCosts||[]).slice().sort((a,b)=>String(b.date||'').localeCompare(String(a.date||'')));
 return `<div class="renovation-summary"><span>Bereits bezahlte Sanierungskosten</span><strong>${eur(renovationTotalV35(x))}</strong></div>
 <div class="renovation-list">${rows.length?rows.map(r=>`<div class="renovation-row">
  <div><strong>${esc(r.title||'Sanierung')}</strong><span>${r.date?dateDE(r.date):'ohne Datum'}${r.note?' · '+esc(r.note):''}</span></div>
  <strong>${eur(r.amount)}</strong>
  <button class="danger tiny" onclick="deleteRenovationV35(${x.id},${r.id})">×</button>
 </div>`).join(''):'<div class="property-sub-empty">Noch keine Sanierungskosten eingetragen</div>'}</div>`;
}
function openRenovationModalV35(propertyId){
 const f=$('#renovationForm');f.reset();f.elements.propertyId.value=propertyId;f.elements.date.value=new Date().toISOString().slice(0,10);$('#renovationModal').showModal();
}
function deleteRenovationV35(propertyId,id){
 const p=state.properties.find(x=>Number(x.id)===Number(propertyId));if(!p)return;
 if(!confirm('Diesen Sanierungskosten-Eintrag löschen?'))return;
 p.renovationCosts=(p.renovationCosts||[]).filter(r=>Number(r.id)!==Number(id));save();
}

function renderProperties(){
 const addButton=document.querySelector('[data-view="properties"] [data-modal="propertyModal"]');
 if(addButton){addButton.disabled=(state.properties||[]).length>=5;addButton.textContent=(state.properties||[]).length>=5?'Max. 5 Objekte':'+ Objekt'}
 $('#propertyList').innerHTML=state.properties.length?state.properties.map(x=>`<article class="entity-card property-card">
  ${x.photo?`<img class="property-image" src="${x.photo}" alt="${esc(x.name)}">`:`<div class="property-placeholder">🏠</div>`}
  <div class="card-top"><span class="tag">${esc(x.usage)}</span><span>${Number(x.area)||0} m²</span></div>
  <h3>${esc(x.name)}</h3><p>${esc(x.address||'Adresse noch nicht eingetragen')}</p>
  <div class="property-info-grid">
   <div><span>Baujahr</span><strong>${esc(x.constructionYear||'–')}</strong></div>
   <div><span>Grundstück</span><strong>${x.plotArea!==''?Number(x.plotArea).toLocaleString('de-DE')+' m²':'–'}</strong></div>
   <div><span>Zimmer</span><strong>${x.rooms!==''?Number(x.rooms).toLocaleString('de-DE'):'–'}</strong></div>
   <div><span>Bäder / WC</span><strong>${x.bathrooms!==''?Number(x.bathrooms):'–'} / ${x.toilets!==''?Number(x.toilets):'–'}</strong></div>
   <div><span>Energieklasse</span><strong>${esc(x.energyClass||'–')}</strong></div>
   <div><span>Heizung</span><strong>${esc(x.heatingType||'–')}</strong></div>
  </div>
  <details class="property-detail-block"><summary>Zählerstände & Historie</summary>${propertyMeterHistoryHtmlV35(x)}</details>
  <section class="property-detail-block renovation-block">
   <div class="property-sub-head"><strong>Sanierungskosten</strong><button class="secondary small" onclick="openRenovationModalV35(${x.id})">+ Kosten</button></div>
   ${propertyRenovationHtmlV35(x)}
  </section>
  ${x.notes?`<p class="property-notes"><strong>Notiz:</strong> ${esc(x.notes)}</p>`:''}
  <div class="card-actions"><button class="secondary small" onclick="editProperty(${x.id})">Bearbeiten</button><button class="danger small" onclick="deleteProperty(${x.id})">Löschen</button></div>
 </article>`).join(''):'<div class="empty">Noch keine Objekte</div>'
}
function renderOwners(){const total=state.owners.filter(x=>x.active!==false).reduce((a,b)=>a+Number(b.ownershipShare),0);$('#shareCheck').textContent=total.toLocaleString('de-DE',{maximumFractionDigits:2})+' %';$('#shareCheck').classList.toggle('warning',Math.abs(total-100)>0.01);$('#ownerList').innerHTML=state.owners.length?state.owners.map(x=>`<article class="entity-card"><div class="card-top"><span class="tag">${x.active===false?'Inaktiv':'Aktiv'}</span><span class="tag subtle">${esc(x.personType||'Eigentümer')}</span></div><h3><span class="person-id-badge">Person ${x.personNumber||''}</span> ${esc(x.name)}</h3><p>${esc(x.role||'Keine Aufgabe eingetragen')}</p><p class="owner-objects">Objekte: ${esc((x.propertyIds||[]).map(propertyName).join(', ')||'keine Zuordnung')}</p><div class="meta"><span>Eigentum: <strong>${Number(x.ownershipShare||0).toLocaleString('de-DE')}%</strong></span><span>Zahlung: <strong>${Number(x.paymentShare||0).toLocaleString('de-DE')}%</strong></span></div><div class="card-actions"><button class="secondary small" onclick="editOwner(${x.id})">Bearbeiten</button><button class="secondary small" onclick="toggleOwner(${x.id})">${x.active===false?'Aktivieren':'Deaktivieren'}</button><button class="danger small" onclick="deleteOwner(${x.id})">Entfernen</button></div></article>`).join(''):'<div class="empty">Noch keine Personen</div>'}
function renderTasks(){
 $('#taskList').innerHTML=state.tasks.length?state.tasks.map(x=>planningCard(x,'task')).join(''):'<div class="empty">Keine Aufgaben</div>';
 $('#maintenanceList').innerHTML=state.maintenance.length?state.maintenance.map(x=>planningCard(x,'maintenance')).join(''):'<div class="empty">Keine Wartungen</div>';
 $('#reserveList').innerHTML=state.reserves.length?state.reserves.map(x=>`<article class="entity-card"><div class="card-top"><span class="tag">${esc(propertyName(x.propertyId))}</span><span class="tag subtle">Ziel ${x.year||'offen'}</span></div><h3>${esc(x.title)}</h3><div class="progress"><span style="width:${Math.min(100,Number(x.target)?Number(x.saved)/Number(x.target)*100:0)}%"></span></div><div class="meta"><span>${eur(x.saved)} gespart</span><strong>${eur(Math.max(0,Number(x.target)-Number(x.saved)))} offen</strong></div><div class="card-actions"><button class="secondary small" onclick="editReserve(${x.id})">Bearbeiten</button><button class="danger small" onclick="deletePlanning('reserve',${x.id})">Löschen</button></div></article>`).join(''):'<div class="empty">Keine Rücklagenziele</div>'
}
function planningCard(x,type){
 const isTask=type==='task';
 const done=x.status==='Erledigt';
 const when=isTask?taskMonthLabelV34(x.due):dateDE(x.due);
 const details=isTask
  ?`${when}`
  :`${when} · ${esc(x.owner||'Gemeinsam')} · ${x.intervalMonths||0} Monate · ${eur(x.cost||0)}`;
 return `<article class="entity-card">
  <div class="card-top"><span class="tag">${esc(x.priority||x.status||'Offen')}</span><span class="tag subtle">${esc(propertyName(x.propertyId))}</span></div>
  <h3>${esc(x.title)}</h3>
  <p>${details}${done&&x.completedByName?` · ✓ Erledigt von ${esc(x.completedByName)}`:''}</p>
  <div class="card-actions">${!done?`<button class="primary small" onclick="completeItem('${type}',${x.id})">Erledigen</button>`:'<span class="tag">Erledigt</span>'}<button class="danger small" onclick="deletePlanning('${type}',${x.id})">Löschen</button></div>
 </article>`;
}
function renderSettings(){$('#settingName').value=state.settings.name;$('#settingStartBalance').value=state.settings.startBalance;$('#settingMinimumReserve').value=state.settings.minimumReserve;$('#settingMonthlyReserve').value=state.settings.monthlyReserve}
function populateSelects(){
 const opts=`<option value="all">Alle Objekte / gemeinsam</option>`+
  state.properties.map(x=>`<option value="${x.id}">${esc(x.name)}</option>`).join('');

 $$('.property-select').forEach(s=>{
  if(!s)return;
  const old=s.value;
  s.innerHTML=opts;
  if([...s.options].some(o=>o.value===old))s.value=old;
 });

 // Das Buchungsformular wurde in V35 entfernt.
 const transactionCategory=$('#transactionCategory');
 if(transactionCategory){
  transactionCategory.innerHTML=categories.map(x=>`<option>${esc(x)}</option>`).join('');
 }
}
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
function editCost(id){const x=state.costPlans.find(x=>x.id===id);if(x)openCostModal(x)}
function toggleCostPaid(id){
 const x=state.costPlans.find(x=>x.id===id);if(!x)return;
 if(x.paid===true){
  x.paid=false;x.paidAt='';
 }else{
  if(!confirm('Diese Kostenposition als vollständig bezahlt markieren? Sie wird danach nicht mehr in den laufenden Kosten und Personenanteilen angerechnet.'))return;
  x.paid=true;x.paidAt=new Date().toISOString();
 }
 save();
}
function deleteCost(id){if(confirm('Kostenposition wirklich löschen?')){state.costPlans=state.costPlans.filter(x=>x.id!==id);save()}}
function editReserve(id){const x=state.reserves.find(x=>x.id===id);if(!x)return;const f=$('#reserveForm');f.reset();f.dataset.editId=id;f.elements.title.value=x.title;f.elements.propertyId.value=String(x.propertyId??'all');f.elements.target.value=x.target;f.elements.saved.value=x.saved;f.elements.year.value=x.year||'';$('#reserveModal').showModal()}
function completeItem(type,id){
 const arr=type==='task'?state.tasks:state.maintenance;
 const x=arr.find(x=>x.id===id);
 if(!x)return;
 x.status='Erledigt';
 x.completedAt=new Date().toISOString();
 const user=typeof currentAuthUserV27==='function'?currentAuthUserV27():null;
 x.completedByUserId=user?.id||'';
 x.completedByName=user?.displayName||user?.username||'Lokaler Benutzer';
 save();
}
function deletePlanning(type,id){if(!confirm('Eintrag wirklich löschen?'))return;const key=type==='task'?'tasks':type==='maintenance'?'maintenance':'reserves';state[key]=state[key].filter(x=>x.id!==id);save()}
function openLoan(){const f=$('#loanForm'),l=state.loan;Object.keys(l).forEach(k=>{if(!f.elements[k])return;if(f.elements[k].type==='checkbox')f.elements[k].checked=Boolean(l[k]);else f.elements[k].value=l[k]??''});$('#loanModal').showModal()}
function switchView(name){$$('.view').forEach(v=>v.classList.toggle('active',v.dataset.view===name));$$('.bottom-nav .nav-item').forEach(b=>b.classList.toggle('active',b.dataset.target===name));const titles={dashboard:'Übersicht',transactions:'Hauskonto',properties:'Objekte',owners:'Personen',tasks:'Planung',settings:'Einstellungen'};$('#pageTitle').textContent=titles[name]||'Hausverwaltung';window.scrollTo({top:0,behavior:'smooth'})}
$$('.bottom-nav .nav-item').forEach(b=>b.addEventListener('click',()=>switchView(b.dataset.target)));$$('[data-go]').forEach(b=>b.addEventListener('click',()=>switchView(b.dataset.go)));$$('[data-modal]').forEach(b=>b.addEventListener('click',()=>{const m=b.dataset.modal;if(m==='ownerModal')openOwnerModal();else if(m==='propertyModal'){if((state.properties||[]).length>=5){alert('Es können maximal 5 Objekte angelegt werden.');return}openPropertyModal();}else if(m==='costModal')openCostModal();else if(m==='loanModal')openLoan();else document.getElementById(m).showModal()}));
$$('[data-task-tab]').forEach(b=>b.addEventListener('click',()=>{activePlanningTab=b.dataset.taskTab;$$('[data-task-tab]').forEach(x=>x.classList.toggle('active',x===b));$('#taskList').classList.toggle('hidden',activePlanningTab!=='tasks');$('#maintenanceList').classList.toggle('hidden',activePlanningTab!=='maintenance');$('#reserveList').classList.toggle('hidden',activePlanningTab!=='reserves');$('#planningAddBtn').textContent=activePlanningTab==='tasks'?'+ Aufgabe':activePlanningTab==='maintenance'?'+ Wartung':'+ Rücklage'}));
$('#planningAddBtn').addEventListener('click',()=>document.getElementById(activePlanningTab==='tasks'?'taskModal':activePlanningTab==='maintenance'?'maintenanceModal':'reserveModal').showModal());
$('#wastePrev').addEventListener('click',()=>changeWasteMonth(-1));
$('#wasteNext').addEventListener('click',()=>changeWasteMonth(1));
$('#wasteDateSave').addEventListener('click',saveWasteDateSelections);
$('#costForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target),id=Number(f.get('id')),personIds=f.getAll('personIds').map(Number);if(!personIds.length){alert('Bitte mindestens eine aktive Person auswählen.');return}const data={category:f.get('category'),name:f.get('name'),personIds,splitCount:personIds.length,propertyId:f.get('propertyId'),amount:Number(f.get('amount')),interval:f.get('interval'),note:f.get('note')};if(id)Object.assign(state.costPlans.find(x=>x.id===id),data);else state.costPlans.push({id:Date.now(),paid:false,paidAt:'',...data});e.target.reset();$('#costModal').close();save()});
$('#loanForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);state.loan={bank:f.get('bank'),original:Number(f.get('original')),remaining:Number(f.get('remaining')),balanceDate:f.get('balanceDate'),interest:Number(f.get('interest')),monthlyPayment:Number(f.get('monthlyPayment')),startDate:f.get('startDate'),fixedUntil:f.get('fixedUntil'),extraPayment:Number(f.get('extraPayment')),autoCalculate:f.get('autoCalculate')==='on'};$('#loanModal').close();save()});

$('#addVehicleBtn').addEventListener('click',()=>{if((state.vehicles||[]).length>=6){alert('Es können maximal 6 Fahrzeuge angelegt werden.');return}openVehicleModal(null)});

$('#vehicleForm')?.elements.photoFile?.addEventListener('change',async e=>{
 const file=e.target.files?.[0]; if(!file)return;
 try{
  const preview=await imageFileToDataUrlV31(file,900,700,.78);
  $('#vehicleForm').dataset.removePhoto='0';
  updateVehiclePhotoPreviewV31(preview);
 }catch{}
});
$('#removeVehiclePhotoBtn')?.addEventListener('click',()=>{
 const f=$('#vehicleForm');
 f.dataset.currentPhoto='';
 f.dataset.removePhoto='1';
 if(f.elements.photoFile)f.elements.photoFile.value='';
 updateVehiclePhotoPreviewV31('');
});

$('#vehicleForm').addEventListener('submit',async e=>{
 e.preventDefault();
 const form=e.target,f=new FormData(form),mode=form.dataset.mode||'new',id=Number(f.get('id'));
 let photo=form.dataset.removePhoto==='1'?'':(form.dataset.currentPhoto||'');
 const file=f.get('photoFile');
 if(file&&file.size){
  try{photo=await imageFileToDataUrlV31(file)}
  catch{alert('Das Fahrzeugfoto konnte nicht verarbeitet werden.');return}
 }
 const data={
  make:String(f.get('make')||'').trim(),model:String(f.get('model')||'').trim(),
  plate:String(f.get('plate')||'').trim(),year:f.get('year'),fuel:f.get('fuel'),
  currentKm:Number(f.get('currentKm'))||0,lastOilDate:f.get('lastOilDate'),
  lastOilKm:Number(f.get('lastOilKm'))||0,nextOilDate:f.get('nextOilDate'),
  nextOilKm:Number(f.get('nextOilKm'))||0,tuvDate:f.get('tuvDate'),
  oilSpec:String(f.get('oilSpec')||'').trim(),tires:String(f.get('tires')||'').trim(),
  brakesDate:f.get('brakesDate'),batteryDate:f.get('batteryDate'),
  notes:String(f.get('notes')||'').trim(),photo
 };
 if(mode==='edit'&&id){
  const existing=state.vehicles.find(x=>Number(x.id)===id);
  if(existing)Object.assign(existing,data);
 }else{
  if((state.vehicles||[]).length>=6){alert('Es können maximal 6 Fahrzeuge angelegt werden.');return}
  let newId=Date.now()+Math.floor(Math.random()*100000);
  while(state.vehicles.some(x=>Number(x.id)===newId))newId++;
  state.vehicles.push({id:newId,...data});
 }
 form.reset(); form.dataset.mode='new'; form.dataset.currentPhoto=''; form.dataset.removePhoto='0';
 form.elements.id.value=''; updateVehiclePhotoPreviewV31('');
 $('#vehicleModal').close(); save();
});
$('#vehicleServiceForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target),vehicleId=Number(f.get('vehicleId'));const entry={id:Date.now(),vehicleId,date:f.get('date'),km:Number(f.get('km'))||0,type:f.get('type'),cost:Number(f.get('cost'))||0,note:f.get('note').trim()};state.vehicleServices.push(entry);const v=state.vehicles.find(x=>Number(x.id)===vehicleId);if(v){if(entry.km)v.currentKm=Math.max(Number(v.currentKm)||0,entry.km);if(entry.type==='Ölwechsel'){v.lastOilDate=entry.date;v.lastOilKm=entry.km;if(entry.km&&!v.nextOilKm)v.nextOilKm=entry.km+15000}}e.target.reset();$('#vehicleServiceModal').close();save()});

$('#renovationForm')?.addEventListener('submit',e=>{
 e.preventDefault();
 const f=new FormData(e.target),propertyId=Number(f.get('propertyId'));
 const p=state.properties.find(x=>Number(x.id)===propertyId);if(!p)return;
 p.renovationCosts=Array.isArray(p.renovationCosts)?p.renovationCosts:[];
 p.renovationCosts.push({id:Date.now(),title:String(f.get('title')||'').trim(),amount:Number(f.get('amount'))||0,date:f.get('date')||'',note:String(f.get('note')||'').trim()});
 e.target.reset();$('#renovationModal').close();save();
});

$('#propertyForm').addEventListener('submit',e=>{
 e.preventDefault();
 const form=e.target,f=new FormData(form),id=Number(f.get('id'));
 if(!id&&(state.properties||[]).length>=5){alert('Es können maximal 5 Objekte angelegt werden.');return}
 const existing=id?state.properties.find(x=>x.id===id):null;
 const data={
  name:f.get('name'),address:f.get('address'),area:Number(f.get('area')),
  plotArea:f.get('plotArea')===''?'':Number(f.get('plotArea')),constructionYear:f.get('constructionYear'),
  rooms:f.get('rooms')===''?'':Number(f.get('rooms')),bathrooms:f.get('bathrooms')===''?'':Number(f.get('bathrooms')),
  toilets:f.get('toilets')===''?'':Number(f.get('toilets')),usage:f.get('usage'),
  energyClass:f.get('energyClass'),heatingType:f.get('heatingType'),
  electricityMeter:f.get('electricityMeter')===''?'':Number(f.get('electricityMeter')),
  waterMeter:f.get('waterMeter')===''?'':Number(f.get('waterMeter')),
  meterReadingDate:f.get('meterReadingDate'),notes:f.get('notes'),photo:propertyPhotoData
 };
 const history=Array.isArray(existing?.meterHistory)?[...existing.meterHistory]:[];
 if(data.meterReadingDate&&(data.electricityMeter!==''||data.waterMeter!=='')){
  const same=history.find(r=>r.date===data.meterReadingDate);
  if(same){same.electricity=data.electricityMeter;same.water=data.waterMeter}
  else history.push({id:Date.now()+Math.random(),date:data.meterReadingDate,electricity:data.electricityMeter,water:data.waterMeter});
  history.sort((a,b)=>String(b.date).localeCompare(String(a.date)));
 }
 data.meterHistory=history;
 data.renovationCosts=Array.isArray(existing?.renovationCosts)?existing.renovationCosts:[];
 if(id)Object.assign(existing,data);else state.properties.push({id:Date.now(),...data});
 form.reset();propertyPhotoData='';$('#propertyModal').close();save();
});
$('#propertyForm').elements.photo.addEventListener('change',e=>{const file=e.target.files[0];if(!file)return;if(file.size>2_500_000){alert('Das Foto ist zu groß. Bitte ein Foto unter etwa 2,5 MB verwenden.');e.target.value='';return}const r=new FileReader();r.onload=()=>{propertyPhotoData=r.result;showPhotoPreview()};r.readAsDataURL(file)});
$('#ownerForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target),id=Number(f.get('id'));if(!id&&state.owners.length>=5){alert('Maximal fünf Personen.');return}const data={name:f.get('name').trim(),personType:f.get('personType'),ownershipShare:Number(f.get('ownershipShare')),paymentShare:Number(f.get('paymentShare')),role:f.get('role').trim(),propertyIds:f.getAll('propertyIds').map(String),active:f.get('active')==='on'};if(id)Object.assign(state.owners.find(x=>x.id===id),data);else state.owners.push({id:Date.now(),...data});state.owners=state.owners.slice(0,5).map((owner,index)=>({...owner,personNumber:index+1}));e.target.reset();$('#ownerModal').close();save()});
$('#taskForm')?.elements.photoFile?.addEventListener('change',async e=>{
 const file=e.target.files?.[0];if(!file)return;
 try{updateTaskPhotoPreviewV35(await imageFileToDataUrlV31(file,850,650,.76))}catch{}
});
$('#removeTaskPhotoBtn')?.addEventListener('click',()=>{
 const f=$('#taskForm');if(f?.elements.photoFile)f.elements.photoFile.value='';
 updateTaskPhotoPreviewV35('');
});

$('#taskForm').addEventListener('submit',async e=>{
 e.preventDefault();
 const form=e.target,f=new FormData(form);
 let photo='';
 const file=f.get('photoFile');
 if(file&&file.size){
  try{photo=await imageFileToDataUrlV31(file,1100,800,.80)}
  catch{alert('Das Aufgabenfoto konnte nicht verarbeitet werden.');return}
 }
 state.tasks.push({id:Date.now(),title:f.get('title'),propertyId:f.get('propertyId'),due:f.get('due'),priority:f.get('priority'),status:'Offen',completedAt:'',completedByUserId:'',completedByName:'',photo});
 form.reset();updateTaskPhotoPreviewV35('');$('#taskModal').close();save();
});
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
document.getElementById('showSetupBtn')?.addEventListener('click',()=>showAuthV27('setup'));
document.getElementById('showLoginBtn')?.addEventListener('click',()=>showAuthV27('login'));
document.getElementById('loginForm')?.addEventListener('submit',async e=>{e.preventDefault();authErrV27('loginError','');try{await loginV27(e.target)}catch(x){authErrV27('loginError',x.message)}});
document.getElementById('setupTenantForm')?.addEventListener('submit',async e=>{e.preventDefault();authErrV27('setupError','');try{await createTenantV27(e.target)}catch(x){authErrV27('setupError',x.message)}});
document.getElementById('logoutBtn')?.addEventListener('click',logoutV27);
document.getElementById('addTenantUserBtn')?.addEventListener('click',()=>openTenantUserModalV27());
document.getElementById('tenantUserForm')?.addEventListener('submit',async e=>{e.preventDefault();try{await saveTenantUserV27(e.target);$('#tenantUserModal').close()}catch(x){alert(x.message)}});
Object.assign(window,{editOwner,toggleOwner,deleteOwner,editProperty,deleteProperty,editCost,deleteCost,completeItem,deletePlanning,editReserve,deleteWaste,editVehicle,deleteVehicle,openServiceModal,setUiLanguage,applyUiLanguage,setLocalProfileV24,editTenantUserV27,deleteTenantUserV27,toggleCostPaid,openRenovationModalV35,deleteRenovationV35});render();applyUiLanguage();bootstrapAuthV27();
