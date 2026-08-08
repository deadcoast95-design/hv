const KEY='hausverwaltung_pwa_v077l';
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
  tasks:'Aufgaben', maintenance:'Wartungen',  addTask:'+ Aufgabe',
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
 settings:{name:'Unsere Immobilien',startBalance:0,minimumReserve:5000,monthlyReserve:600,
 darkMode:false,
 dashboardWidgets:{important:true,consumption:true,finance:true,loan:true,objectcosts:true,contributions:true,waste:true,costpositions:true,objects:true,renovations:true,vehicles:true,tasks:true}},
 owners:[],
 properties:[{id:1,name:'Haus 1',address:'',area:159,usage:'Eigennutzung',photo:''},{id:2,name:'Haus 2',address:'',area:152,usage:'Mietfreie Überlassung',photo:''}],
 loan:{bank:'',original:0,remaining:0,interest:0,monthlyPayment:0,startDate:'2024-01-01',fixedUntil:'2034-01-01',extraPayment:0,autoCalculate:true,balanceDate:''},loans:[],
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
 if(!Array.isArray(d.loans))d.loans=[];
 if(!d.loans.length&&d.loan&&(Number(d.loan.original)>0||Number(d.loan.remaining)>0||Number(d.loan.monthlyPayment)>0||String(d.loan.bank||'').trim())){
  d.loans=[{id:Date.now(),name:'Kredit 1',...d.loan}];
 }
 d.loans=d.loans.slice(0,10).map((l,index)=>({
  id:l.id||Date.now()+index,name:l.name||`Kredit ${index+1}`,bank:l.bank||'',
  original:Number(l.original)||0,remaining:Number(l.remaining)||0,balanceDate:l.balanceDate||'',
  interest:Number(l.interest)||0,monthlyPayment:Number(l.monthlyPayment)||0,
  startDate:l.startDate||'',fixedUntil:l.fixedUntil||'',extraPayment:Number(l.extraPayment)||0,
  autoCalculate:l.autoCalculate!==false,
  effectiveInterest:Number(l.effectiveInterest)||0,
  commitmentInterest:Number(l.commitmentInterest)||0,
  paymentFreeMonths:Math.max(0,Number(l.paymentFreeMonths)||0),
  notes:String(l.notes||''),
  bankBalanceHistory:Array.isArray(l.bankBalanceHistory)?l.bankBalanceHistory:[],
  contractYears:Math.max(0,Number(l.contractYears)||0)
 }));
 d.owners=(Array.isArray(data.owners)?data.owners:clone(seed.owners)).slice(0,5).map((x,index)=>({...x,personNumber:index+1,propertyIds:Array.isArray(x.propertyIds)?x.propertyIds.map(String):statePropertyFallback(x)}));
 d.properties=(Array.isArray(data.properties)?data.properties:clone(seed.properties)).slice(0,5).map(x=>{
 const meterHistory=Array.isArray(x.meterHistory)?x.meterHistory:[];
 if(!meterHistory.length&&x.meterReadingDate&&(x.electricityMeter!==''||x.waterMeter!=='')){
  meterHistory.push({id:Date.now()+Math.random(),date:x.meterReadingDate,electricity:x.electricityMeter??'',water:x.waterMeter??''});
 }
 return {...x,
  photo:x.photo||'',estimatedValue:Number(x.estimatedValue)||0,documents:Array.isArray(x.documents)?x.documents:[],constructionYear:x.constructionYear||'',plotArea:x.plotArea??'',
  rooms:x.rooms??'',bathrooms:x.bathrooms??'',toilets:x.toilets??'',
  electricityMeter:x.electricityMeter??'',waterMeter:x.waterMeter??'',meterReadingDate:x.meterReadingDate||'',
  meterHistory,renovationCosts:(Array.isArray(x.renovationCosts)?x.renovationCosts:[]).map(r=>({
 ...r,category:r.category||'Sonstiges',status:r.status||'paid',
 month:r.month||monthValueV37(r.date||''),company:r.company||'',
 plannedAmount:Number(r.plannedAmount ?? r.amount ?? 0)||0,
   openAmount:r.openAmount!=null
    ?Math.max(0,Number(r.openAmount)||0)
    :(String(r.status||'paid')==='open'?Math.max(0,Number(r.amount)||0):0),
   workType:r.workType||'Fachfirma',
   companyRating:r.companyRating||'',
   attachments:Array.isArray(r.attachments)?r.attachments:[]
})),
  energyClass:x.energyClass||'',heatingType:x.heatingType||'',notes:x.notes||''
 };
});
 d.vehicles=(Array.isArray(data.vehicles)?data.vehicles:[]).map(v=>({...v,estimatedValue:Number(v.estimatedValue)||0}));
 d.vehicleServices=(Array.isArray(data.vehicleServices)?data.vehicleServices:[]).map(s=>({...s,workshop:s.workshop||'',attachment:s.attachment||null}));
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
 user:{id:'user_bootstrap_admin_00001',tenantId:'tenant_bootstrap_00001',displayName:'Dmitrij Kovalevich',username:'2m6d1m4',role:'admin',active:true,ownershipShare:0,paymentShare:100,propertyIds:[],salt:'v30-bootstrap-salt-00001',passwordHash:'9691eefb',bootstrap:true,hashType:'local-v1'}
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
   ownershipShare:user.ownershipShare??0,paymentShare:user.paymentShare??100,propertyIds:Array.isArray(user.propertyIds)?user.propertyIds:[],
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

const AUTH_LOCAL_BACKUP_KEY_V051L='hausverwaltung_auth_registry_local_v051l';
const AUTH_SYNC_META_KEY_V051L='hausverwaltung_auth_sync_meta_v051l';

function authSyncMetaV051L(){
 try{return JSON.parse(localStorage.getItem(AUTH_SYNC_META_KEY_V051L)||'{}')}catch{return {}}
}
function setAuthSyncMetaV051L(patch={}){
 const meta={mode:'local',nasEnabled:false,lastLocalSave:'',lastNasSync:'',...authSyncMetaV051L(),...patch};
 try{localStorage.setItem(AUTH_SYNC_META_KEY_V051L,JSON.stringify(meta))}catch{}
 return meta;
}
function saveAuthLocalBackupV051L(){
 try{
  localStorage.setItem(AUTH_LOCAL_BACKUP_KEY_V051L,JSON.stringify(authRegistryV27));
  setAuthSyncMetaV051L({mode:'local',nasEnabled:false,lastLocalSave:new Date().toISOString()});
  return true;
 }catch(error){
  console.warn('Lokale Benutzer-Sicherung fehlgeschlagen',error);
  return false;
 }
}
function loadAuthLocalBackupV051L(){
 try{
  const raw=localStorage.getItem(AUTH_LOCAL_BACKUP_KEY_V051L);
  if(!raw)return null;
  const parsed=JSON.parse(raw);
  return parsed&&typeof parsed==='object'?parsed:null;
 }catch(error){
  console.warn('Lokale Benutzer-Sicherung konnte nicht gelesen werden',error);
  return null;
 }
}
function authNasExportPayloadV051L(){
 const tid=currentTenantIdV27();
 return {
  schema:'hausverwaltung-users-v1',
  generatedAt:new Date().toISOString(),
  tenantId:tid,
  tenants:(authRegistryV27.tenants||[]).filter(t=>t.id===tid),
  users:(authRegistryV27.users||[]).filter(u=>u.tenantId===tid)
 };
}

const USER_TENANT_STORE_PREFIX_V060L='hausverwaltung_users_tenant_v060l:';
const USER_REGISTRY_BACKUP_V060L='hausverwaltung_auth_registry_v060l';

function tenantUserStoreKeyV060L(tid){
 return USER_TENANT_STORE_PREFIX_V060L+String(tid||'');
}
function saveTenantUsersLocalV060L(tid=currentTenantIdV27()){
 if(!tid)return false;
 try{
  const users=(authRegistryV27.users||[]).filter(u=>u.tenantId===tid);
  const tenant=(authRegistryV27.tenants||[]).find(t=>t.id===tid)||null;
  const payload={schema:'hausverwaltung-local-users-v1',tenantId:tid,savedAt:new Date().toISOString(),tenant,users};
  localStorage.setItem(tenantUserStoreKeyV060L(tid),JSON.stringify(payload));
  localStorage.setItem(USER_REGISTRY_BACKUP_V060L,JSON.stringify(authRegistryV27));
  return true;
 }catch(error){
  console.error('Lokaler Benutzerspeicher fehlgeschlagen',error);
  return false;
 }
}
function readTenantUsersLocalV060L(tid){
 try{
  const raw=localStorage.getItem(tenantUserStoreKeyV060L(tid));
  if(!raw)return null;
  const p=JSON.parse(raw);
  return p&&Array.isArray(p.users)?p:null;
 }catch{return null}
}
function restoreAllTenantUsersLocalV060L(){
 let changed=false;
 try{
  for(let i=0;i<localStorage.length;i++){
   const key=localStorage.key(i);
   if(!key||!key.startsWith(USER_TENANT_STORE_PREFIX_V060L))continue;
   let p=null;
   try{p=JSON.parse(localStorage.getItem(key)||'null')}catch{}
   if(!p||!p.tenantId||!Array.isArray(p.users))continue;
   if(p.tenant && !(authRegistryV27.tenants||[]).some(t=>t.id===p.tenant.id)){
    authRegistryV27.tenants.push(p.tenant);changed=true;
   }
   p.users.forEach(user=>{
    if(!(authRegistryV27.users||[]).some(u=>u.id===user.id)){
     authRegistryV27.users.push(user);changed=true;
    }
   });
  }
 }catch(error){console.warn('Benutzer-Fallback konnte nicht geladen werden',error)}
 return changed;
}
async function verifyTenantUserSavedV060L(userId,tid=currentTenantIdV27()){
 const local=readTenantUsersLocalV060L(tid);
 const inBackup=!!local?.users?.some(u=>u.id===userId);
 let registry=null;
 try{registry=await dbRawGet(AUTH_REGISTRY_KEY_V27)}catch{}
 const inDb=!!registry?.users?.some(u=>u.id===userId);
 return inBackup && inDb;
}
async function loadRegistryV27(){
 let r=null;
 try{r=await dbRawGet(AUTH_REGISTRY_KEY_V27)}catch(error){console.warn('IndexedDB Auth-Fallback',error)}
 if(!r){try{r=JSON.parse(localStorage.getItem(AUTH_REGISTRY_KEY_V27)||'null')}catch{}}
 if(!r){try{r=JSON.parse(localStorage.getItem(USER_REGISTRY_BACKUP_V060L)||'null')}catch{}}
 if(!r)r=loadAuthLocalBackupV051L();

 authRegistryV27=r&&typeof r==='object'?r:{version:1,tenants:[],users:[]};
 authRegistryV27.tenants=Array.isArray(authRegistryV27.tenants)?authRegistryV27.tenants:[];
 authRegistryV27.users=Array.isArray(authRegistryV27.users)?authRegistryV27.users:[];

 const restored=restoreAllTenantUsersLocalV060L();
 if(restored){
  try{await dbRawPut(AUTH_REGISTRY_KEY_V27,authRegistryV27)}catch{}
 }
 try{
  localStorage.setItem(AUTH_REGISTRY_KEY_V27,JSON.stringify(authRegistryV27));
  localStorage.setItem(USER_REGISTRY_BACKUP_V060L,JSON.stringify(authRegistryV27));
 }catch{}
 saveAuthLocalBackupV051L();
}
async function saveRegistryV27(){
 let dbOk=true;
 try{await dbRawPut(AUTH_REGISTRY_KEY_V27,authRegistryV27)}
 catch(error){dbOk=false;console.warn('IndexedDB Auth-Speicherung',error)}

 let localOk=true;
 try{
  localStorage.setItem(AUTH_REGISTRY_KEY_V27,JSON.stringify(authRegistryV27));
  localStorage.setItem(USER_REGISTRY_BACKUP_V060L,JSON.stringify(authRegistryV27));
 }catch(error){localOk=false;console.warn('LocalStorage Auth-Speicherung',error)}

 saveAuthLocalBackupV051L();
 const tid=currentTenantIdV27();
 if(tid)saveTenantUsersLocalV060L(tid);
 return dbOk||localOk;
}
function showAuthV27(mode){document.body.classList.add('auth-locked');$('#authGate').classList.remove('hidden');$('#loginCard').classList.toggle('hidden',mode!=='login');$('#setupCard').classList.toggle('hidden',mode!=='setup')}
function hideAuthV27(){$('#authGate').classList.add('hidden');document.body.classList.remove('auth-locked')}
function authErrV27(id,msg){const e=$('#'+id);if(!e)return;e.textContent=msg||'';e.classList.toggle('hidden',!msg)}
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
 await migrateLegacyPersonsToUsersV048L();
 try{await dbRawPut(`tenant:${tid}:state`,state)}catch{}
 try{localStorage.setItem(fallbackKey,JSON.stringify(state))}catch{}
 render();applyUiLanguage();applyAuthPermissionsV27();renderTenantAdminV27();updateLocalStatus('Lokal gespeichert');
}
async function createTenantV27(form){const f=new FormData(form),name=String(f.get('tenantName')).trim(),code=normV27(f.get('tenantCode')),dn=String(f.get('displayName')).trim(),un=normV27(f.get('username')),p=String(f.get('password')),p2=String(f.get('password2'));if(p!==p2)throw Error('Passwörter stimmen nicht überein.');if(p.length<6)throw Error('Passwort mindestens 6 Zeichen.');if(authRegistryV27.tenants.some(t=>t.code===code))throw Error('Kontocode existiert bereits.');const t={id:makeIdV27('tenant'),name,code,createdAt:new Date().toISOString(),maxUsers:6},s=saltV27(),u={id:makeIdV27('user'),tenantId:t.id,displayName:dn,username:un,role:'admin',active:true,ownershipShare:100,paymentShare:100,propertyIds:[],sync:{source:'local',dirty:true,updatedAt:new Date().toISOString(),lastSyncedAt:''},salt:s,passwordHash:await hashV27(p,s)};authRegistryV27.tenants.push(t);authRegistryV27.users.push(u);await saveRegistryV27();const legacy=await dbRawGet(LEGACY_DB_STATE_KEY);await dbRawPut(`tenant:${t.id}:state`,migrate(legacy||state));setAuthSessionV27({tenantId:t.id,userId:u.id});await loadTenantStateV27();hideAuthV27()}
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

function normalizePersonNameV048L(v){return normV27(String(v||'').replace(/[^\p{L}\p{N}]+/gu,' '))}
async function migrateLegacyPersonsToUsersV048L(){
 const users=tenantUsersV27();
 if(!users.length)return false;
 const legacy=Array.isArray(state.owners)?state.owners:[];
 let changed=false;
 const used=new Set();

 legacy.forEach((person,index)=>{
  const pn=normalizePersonNameV048L(person.name);
  let user=users.find(u=>{
   if(used.has(u.id))return false;
   const un=normalizePersonNameV048L(u.displayName);
   return pn&&un&&(pn===un||pn.split(' ')[0]===un.split(' ')[0]);
  });
  if(!user)user=users.find(u=>!used.has(u.id));
  if(!user)return;
  used.add(user.id);
  if(user.ownershipShare==null&&person.ownershipShare!=null){user.ownershipShare=Number(person.ownershipShare)||0;changed=true}
  if(user.paymentShare==null&&person.paymentShare!=null){user.paymentShare=Number(person.paymentShare)||0;changed=true}
  if((!Array.isArray(user.propertyIds)||!user.propertyIds.length)&&Array.isArray(person.propertyIds)){user.propertyIds=person.propertyIds.map(String);changed=true}
 });

 users.forEach((u,index)=>{
  if(u.ownershipShare==null){u.ownershipShare=0;changed=true}
  if(u.paymentShare==null){u.paymentShare=users.length===1?100:0;changed=true}
  if(!Array.isArray(u.propertyIds)){u.propertyIds=[];changed=true}
 });

 (state.costPlans||[]).forEach(cost=>{
  if(Array.isArray(cost.userIds)&&cost.userIds.length)return;
  const oldIds=Array.isArray(cost.personIds)?cost.personIds.map(Number):[];
  const mapped=[];
  oldIds.forEach(oldId=>{
   const oldIndex=legacy.findIndex(p=>Number(p.id)===Number(oldId));
   const oldPerson=oldIndex>=0?legacy[oldIndex]:null;
   let user=null;
   if(oldPerson){
    const pn=normalizePersonNameV048L(oldPerson.name);
    user=users.find(u=>{
     const un=normalizePersonNameV048L(u.displayName);
     return pn&&un&&(pn===un||pn.split(' ')[0]===un.split(' ')[0]);
    });
   }
   if(!user&&oldIndex>=0)user=users[oldIndex]||null;
   if(user&&!mapped.includes(user.id))mapped.push(user.id);
  });
  if(!mapped.length&&users.length){
   const count=Math.min(Math.max(1,Number(cost.splitCount)||users.length),users.length);
   mapped.push(...users.slice(0,count).map(u=>u.id));
  }
  cost.userIds=mapped;
  changed=true;
 });

 if(changed)await saveRegistryV27();
 return changed;
}


function renderLocalUserStorageStatusV051L(){
 const count=tenantUsersV27().length;
 if($('#localUserStorageCount'))$('#localUserStorageCount').textContent=String(count);
 const meta=authSyncMetaV051L();
 if($('#localUserNasStatus'))$('#localUserNasStatus').textContent=meta.nasEnabled?'Verbunden':'Noch nicht verbunden';
}
function renderTenantAdminV27(){
 const t=currentTenantV27(),me=currentAuthUserV27(),sum=$('#tenantAccountSummary'),list=$('#tenantUserList'),add=$('#addTenantUserBtn');
 if(!sum||!list||!t||!me)return;
 renderLocalUserStorageStatusV051L();
 const us=tenantUsersV27(),admin=currentRightsV27().userAdmin;
 const totalShare=us.filter(u=>u.active!==false).reduce((s,u)=>s+Number(u.paymentShare||0),0);
 sum.innerHTML=`<div class="tenant-summary-grid">
  <div><span>Konto</span><strong>${esc(t.name)}</strong></div>
  <div><span>Kontocode</span><strong>${esc(t.code)}</strong></div>
  <div><span>Angemeldet als</span><strong>${esc(me.displayName)}</strong></div>
  <div><span>Kostenanteile gesamt</span><strong class="${Math.abs(totalShare-100)>.01?'warning-text':''}">${totalShare.toLocaleString('de-DE',{maximumFractionDigits:2})} %</strong></div>
 </div>`;
 add.disabled=!admin||us.length>=6;
 add.textContent=us.length>=6?'Max. 6 Benutzer':'+ Benutzer';
 list.innerHTML=us.map((u,index)=>`<article class="tenant-user-row tenant-user-row-v048l">
  <div class="tenant-user-avatar-v048l">${esc(ownerInitialsV045L(u.displayName))}</div>
  <div class="tenant-user-main-v048l">
   <strong>${esc(u.displayName)} ${u.id===me.id?'<small class="tag">Du</small>':''}</strong>
   <span>@${esc(u.username)} · ${esc(roleLabelV27(u.role))}</span>
   <small>${(u.propertyIds||[]).length?`Objekte: ${(u.propertyIds||[]).map(propertyName).map(esc).join(', ')}`:'Keine Objektzuordnung'}</small>
  </div>
  <div class="tenant-user-share-v048l"><span>Eigentum</span><strong>${Number(u.ownershipShare||0).toLocaleString('de-DE',{maximumFractionDigits:2})} %</strong></div>
  <div class="tenant-user-share-v048l"><span>Kostenanteil</span><strong>${Number(u.paymentShare||0).toLocaleString('de-DE',{maximumFractionDigits:2})} %</strong></div>
  <div class="tenant-user-actions-v048l">
   ${admin?`<button class="secondary small" onclick="editTenantUserV27('${u.id}')">Bearbeiten</button>`:''}
   ${admin&&u.id!==me.id?`<button class="danger small" onclick="deleteTenantUserV27('${u.id}')">Löschen</button>`:''}
  </div>
 </article>`).join('')
}
function renderTenantUserPropertyChoicesV048L(selectedIds=[]){
 const selected=new Set((selectedIds||[]).map(String));
 const box=$('#tenantUserPropertyChoices');if(!box)return;
 box.innerHTML=(state.properties||[]).length
  ?state.properties.map(p=>`<label class="check-row"><input type="checkbox" name="propertyIds" value="${esc(p.id)}" ${selected.has(String(p.id))?'checked':''}> ${esc(p.name)}</label>`).join('')
  :'<span class="helper-text">Noch keine Objekte vorhanden.</span>';
}
function openTenantUserModalV27(u=null){
 if(!currentRightsV27().userAdmin)return;
 if(!u&&tenantUsersV27().length>=6){alert('Maximal 5 zusätzliche Benutzer.');return}
 const f=$('#tenantUserForm');f.reset();
 f.elements.id.value=u?.id||'';
 f.elements.displayName.value=u?.displayName||'';
 f.elements.username.value=u?.username||'';
 f.elements.role.value=u?.role||'member';
 f.elements.ownershipShare.value=Number(u?.ownershipShare||0);
 f.elements.paymentShare.value=Number(u?.paymentShare||0);
 renderTenantUserPropertyChoicesV048L(u?.propertyIds||[]);
 f.elements.password.required=!u;
 $('#tenantUserPasswordLabel span').textContent=u?'Neues Passwort (optional)':'Passwort';
 $('#tenantUserModalTitle').textContent=u?'Benutzer bearbeiten':'Benutzer hinzufügen';
 $('#tenantUserModal').showModal()
}
function editTenantUserV27(id){const u=tenantUsersV27().find(x=>x.id===id);if(u)openTenantUserModalV27(u)}
async function deleteTenantUserV27(id){
 if(!currentRightsV27().userAdmin||id===currentUserIdV27())return;
 const u=tenantUsersV27().find(x=>x.id===id);
 if(!u||!confirm(`Benutzer „${u.displayName}“ löschen? Seine Zuordnung wird auch aus Kostenpositionen entfernt.`))return;
 authRegistryV27.users=authRegistryV27.users.filter(x=>x.id!==id);
 (state.costPlans||[]).forEach(c=>{if(Array.isArray(c.userIds))c.userIds=c.userIds.filter(uid=>String(uid)!==String(id))});
 await saveRegistryV27();saveTenantUsersLocalV060L(currentTenantIdV27());await persistState(false);renderTenantAdminV27();render()
}
async function saveTenantUserV27(form){
 if(!currentRightsV27().userAdmin)throw Error('Keine Berechtigung zur Benutzerverwaltung.');

 const f=new FormData(form);
 const id=String(f.get('id')||'');
 const dn=String(f.get('displayName')||'').trim();
 const un=normV27(f.get('username'));
 const role=String(f.get('role')||'member');
 const p=String(f.get('password')||'');
 const tid=currentTenantIdV27();
 const ownershipShare=Number(f.get('ownershipShare'))||0;
 const paymentShare=Number(f.get('paymentShare'))||0;
 const propertyIds=f.getAll('propertyIds').map(String);

 if(!tid)throw Error('Kein lokales Konto aktiv.');
 if(!dn||!un)throw Error('Name und Benutzername sind erforderlich.');
 if(authRegistryV27.users.some(u=>u.tenantId===tid&&u.id!==id&&normV27(u.username)===un))
  throw Error('Benutzername bereits vergeben.');

 let savedUser=null;

 if(id){
  const u=authRegistryV27.users.find(x=>x.id===id&&x.tenantId===tid);
  if(!u)throw Error('Benutzer nicht gefunden.');
  u.displayName=dn;u.username=un;u.role=role;u.ownershipShare=ownershipShare;u.paymentShare=paymentShare;u.propertyIds=propertyIds;u.active=true;
  u.sync={...(u.sync||{}),source:'local',dirty:true,updatedAt:new Date().toISOString()};
  if(p){
   if(p.length<6)throw Error('Passwort mindestens 6 Zeichen.');
   u.salt=saltV27();u.passwordHash=await hashV27(p,u.salt);
  }
  savedUser=u;
 }else{
  if(tenantUsersV27().length>=6)throw Error('Maximal 5 zusätzliche Benutzer.');
  if(p.length<6)throw Error('Passwort mindestens 6 Zeichen.');
  const salt=saltV27();
  savedUser={
   id:makeIdV27('user'),tenantId:tid,displayName:dn,username:un,role,active:true,
   ownershipShare,paymentShare,propertyIds,salt,passwordHash:await hashV27(p,salt),
   createdAt:new Date().toISOString(),
   sync:{source:'local',dirty:true,updatedAt:new Date().toISOString(),lastSyncedAt:''}
  };
  authRegistryV27.users.push(savedUser);
 }

 const ok=await saveRegistryV27();
 saveTenantUsersLocalV060L(tid);
 if(!ok)throw Error('Benutzer konnte lokal nicht gespeichert werden.');

 let verified=await verifyTenantUserSavedV060L(savedUser.id,tid);
 if(!verified){
  try{await dbRawPut(AUTH_REGISTRY_KEY_V27,authRegistryV27)}catch{}
  saveTenantUsersLocalV060L(tid);
  verified=await verifyTenantUserSavedV060L(savedUser.id,tid);
 }
 if(!verified)throw Error('Lokale Speicherung konnte nicht bestätigt werden.');

 renderTenantAdminV27();render();applyAuthPermissionsV27();
 return savedUser;
}
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
function accountUsersV048L(){
 return tenantUsersV27().filter(u=>u.active!==false).map((u,index)=>({
  ...u,
  userNumber:index+1,
  name:u.displayName||u.username||'Benutzer',
  ownershipShare:Number(u.ownershipShare||0),
  paymentShare:Number(u.paymentShare||0),
  propertyIds:Array.isArray(u.propertyIds)?u.propertyIds.map(String):[]
 }));
}
function activeOwnersList(){return accountUsersV048L()}
function activePaymentShareTotal(){return accountUsersV048L().reduce((a,x)=>a+Number(x.paymentShare||0),0)}
function costUserIdsV048L(cost){return Array.isArray(cost.userIds)?cost.userIds.map(String):[]}
function eligibleOwnersForCost(cost){
 const active=accountUsersV048L();
 const ids=costUserIdsV048L(cost);
 if(ids.length)return active.filter(user=>ids.includes(String(user.id)));
 const count=Math.min(Math.max(1,Number(cost.splitCount)||active.length||1),active.length);
 return active.slice(0,count);
}
function costUserWeightV048L(user,people){
 const total=people.reduce((s,p)=>s+Math.max(0,Number(p.paymentShare||0)),0);
 if(total>0)return Math.max(0,Number(user.paymentShare||0))/total;
 return 1/Math.max(people.length,1);
}
function costUserShareAmountV048L(cost,user){
 const people=eligibleOwnersForCost(cost);
 if(!people.some(p=>String(p.id)===String(user.id)))return 0;
 return costMonthly(cost)*costUserWeightV048L(user,people);
}
function costUserSharePercentV048L(cost,user){
 const people=eligibleOwnersForCost(cost);
 if(!people.some(p=>String(p.id)===String(user.id)))return 0;
 return costUserWeightV048L(user,people)*100;
}
function ownerMonthlyCostShare(x){
 if(x.active===false)return 0;
 return (state.costPlans||[]).reduce((amount,cost)=>amount+costUserShareAmountV048L(cost,x),0);
}
function ownerMonthlyContribution(x){
 if(x.active===false)return 0;
 let amount=(state.costPlans||[]).reduce((sum,cost)=>sum+costUserShareAmountV048L(cost,x),0);
 const total=activePaymentShareTotal();
 if(total>0)amount+=Number(state.settings.monthlyReserve||0)*Number(x.paymentShare||0)/total;
 return amount;
}
function plannedMonthlyIncome(){return accountUsersV048L().reduce((a,x)=>a+ownerMonthlyContribution(x),0)}
function projectedMonthlyBalance(){return plannedMonthlyIncome()-plannedMonthly()}
function projectedAccountBalance(){return Number(state.settings.startBalance||0)+projectedMonthlyBalance()}
function monthsElapsed(start){if(!start)return 0;const d=new Date(start+'T12:00:00'),n=new Date();let m=(n.getFullYear()-d.getFullYear())*12+(n.getMonth()-d.getMonth());if(n.getDate()<d.getDate())m--;return Math.max(0,m)}

let loanCalculatorV065L={selection:'all',annualExtra:0,month:8};

function loanCloneWithExtraV065L(l,extra,month){
 return {
  ...l,
  // extraPayment bleibt die Vertragsgrenze.
  // Die tatsächlich getestete Sondertilgung wird separat nur für die Vorschau gesetzt.
  previewExtraPaymentV068L:Math.max(0,Number(extra)||0),
  previewExtraMonthV066L:Math.min(12,Math.max(1,Number(month)||8))
 };
}
function loanCalculatorMaxExtraV066L(){
 const loans=selectedLoansForCalculatorV065L();
 if(!loans.length)return 0;
 if((loanCalculatorV065L.selection||'all')==='all'){
  return loans.reduce((s,l)=>s+Math.max(0,Number(l.extraPayment)||0),0);
 }
 return Math.max(0,Number(loans[0]?.extraPayment)||0);
}
function monthNameV066L(month){
 const names=['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
 return names[Math.min(12,Math.max(1,Number(month)||1))-1];
}
function loanCalendarMonthAtIndexV066L(l,monthIndex){
 const base=l?.balanceDate||l?.startDate;
 if(!base)return ((Number(monthIndex)||0)%12)+1;
 const d=new Date(base+'T12:00:00');
 if(Number.isNaN(d.getTime()))return ((Number(monthIndex)||0)%12)+1;
 // monthIndex 0 = erster Monat nach dem Stichtag
 d.setMonth(d.getMonth()+Number(monthIndex)+1);
 return d.getMonth()+1;
}
function selectedLoansForCalculatorV065L(){
 const value=loanCalculatorV065L.selection||'all';
 return value==='all'?currentLoansV061L():currentLoansV061L().filter(l=>String(l.id)===String(value));
}
function loanSchedulesWithCalculatorV065L(){
 const loans=selectedLoansForCalculatorV065L();
 let extra=Math.max(0,Number(loanCalculatorV065L.annualExtra)||0);
 const month=Math.min(12,Math.max(1,Number(loanCalculatorV065L.month)||8));
 if(!loans.length)return [];

 const maxAllowed=loanCalculatorMaxExtraV066L();
 if(maxAllowed>0)extra=Math.min(extra,maxAllowed);

 if(loanCalculatorV065L.selection==='all'){
  // Gesamtbetrag proportional nach Restschuld verteilen.
  const balances=loans.map(l=>loanCurrentStateV062L(l).remaining);
  const total=balances.reduce((a,b)=>a+b,0);
  return loans.map((l,i)=>{
   const share=total>0?balances[i]/total:1/loans.length;
   return loanCloneWithExtraV065L(l,extra*share,month);
  });
 }
 return loans.map(l=>loanCloneWithExtraV065L(l,extra,month));
}
function loanFutureInterestSumV065L(loans){
 return (loans||[]).reduce((sum,l)=>sum+loanFutureScheduleV062L(l,1200).reduce((a,r)=>a+r.interest,0),0);
}
function loanMaxMonthsV065L(loans){
 return Math.max(0,...(loans||[]).map(l=>loanFutureScheduleV062L(l,1200).length));
}
function monthsDifferenceTextV065L(months){
 months=Math.max(0,Math.round(months||0));
 const y=Math.floor(months/12),m=months%12;
 if(y&&m)return `${y} J. ${m} M.`;
 if(y)return `${y} Jahr${y===1?'':'e'}`;
 return `${m} Monat${m===1?'':'e'}`;
}
function loanMonthlyRateV062L(l){
 return Math.max(0,Number(l?.monthlyPayment)||0);
}
function loanRateV062L(l){
 return Math.max(0,Number(l?.interest)||0)/100/12;
}
function loanStartBalanceV062L(l){
 const entered=Math.max(0,Number(l?.remaining)||0);
 if(entered>0)return entered;
 return Math.max(0,Number(l?.original)||0);
}
function loanMonthsFromBalanceDateV062L(l){
 if(!l?.balanceDate)return 0;
 return monthsElapsed(l.balanceDate);
}
function applyOneLoanMonthV062L(balance,l,monthIndex){
 balance=Math.max(0,Number(balance)||0);
 if(balance<=0)return {payment:0,interest:0,principal:0,extra:0,remaining:0};

 const monthlyRate=loanRateV062L(l);
 const scheduled=loanMonthlyRateV062L(l);
 const interest=balance*monthlyRate;
 const freeMonths=Math.max(0,Number(l?.paymentFreeMonths)||0);

 // Tilgungsfreie Monate: Zinszahlung ja, Kapitaltilgung nein.
 if(monthIndex<freeMonths){
  const payment=Math.min(balance+interest,interest);
  return {payment,interest,principal:0,extra:0,remaining:balance};
 }

 let payment=Math.min(balance+interest,scheduled);
 let principal=Math.max(0,payment-interest);
 let remaining=Math.max(0,balance-principal);

 let extra=0;

 // 0.68l: Der im Kredit gespeicherte Wert extraPayment ist ausschließlich
 // die maximal erlaubte Sondertilgung laut Vertrag und wird NICHT automatisch bezahlt.
 // Nur der Tilgungsrechner setzt previewExtraPaymentV068L + previewExtraMonthV066L.
 const previewExtra=Math.max(0,Number(l?.previewExtraPaymentV068L)||0);
 const previewMonth=Math.min(12,Math.max(1,Number(l?.previewExtraMonthV066L)||0));
 const specialDue=previewExtra>0 && previewMonth>0
  && loanCalendarMonthAtIndexV066L(l,monthIndex)===previewMonth;

 if(specialDue && remaining>0){
  extra=Math.min(remaining,previewExtra);
  remaining=Math.max(0,remaining-extra);
 }
 return {payment,interest,principal,extra,remaining};
}
function loanCurrentStateV062L(l){
 const original=Math.max(0,Number(l?.original)||0);
 let balance=loanStartBalanceV062L(l);
 let interestPaid=0,principalPaid=Math.max(0,original-balance),extraPaid=0;
 const elapsed=l?.autoCalculate===false?0:loanMonthsFromBalanceDateV062L(l);
 if(l?.autoCalculate!==false && l?.balanceDate && balance>0 && loanMonthlyRateV062L(l)>0){
  for(let i=0;i<elapsed&&balance>0;i++){
   const step=applyOneLoanMonthV062L(balance,l,i);
   interestPaid+=step.interest;
   principalPaid+=step.principal;
   extraPaid+=step.extra;
   balance=step.remaining;
  }
 }
 return {
  remaining:balance,
  paidPrincipal:Math.max(0,original-balance),
  interestPaid,
  principalPaid,
  extraPaid,
  elapsedMonths:elapsed
 };
}
function loanFutureScheduleV062L(l,maxMonths=600){
 const current=loanCurrentStateV062L(l);
 let balance=current.remaining;
 const rows=[];
 if(balance<=0)return rows;
 for(let i=0;i<maxMonths&&balance>0;i++){
  const step=applyOneLoanMonthV062L(balance,l,current.elapsedMonths+i);
  rows.push({monthIndex:i,...step});
  balance=step.remaining;
  if(step.payment<=0 && step.extra<=0)break;
  if(step.principal<=0 && step.extra<=0 && step.interest>=step.payment)break;
 }
 return rows;
}
function loanProjectionForV061L(l){
 const c=loanCurrentStateV062L(l||{});
 return {remaining:c.remaining,paid:c.paidPrincipal,months:c.elapsedMonths};
}
function loanProjection(){
 return loanProjectionForV061L((state.loans||[])[0]||state.loan||{});
}
function loanNextSplitV062L(l){
 const c=loanCurrentStateV062L(l);
 return applyOneLoanMonthV062L(c.remaining,l,c.elapsedMonths);
}
function loanWeightedInterestV062L(loans){
 const total=(loans||[]).reduce((s,l)=>s+(Number(l.original)||0),0);
 if(!total)return 0;
 return (loans||[]).reduce((s,l)=>s+(Number(l.original)||0)*(Number(l.interest)||0),0)/total;
}
function loanCombinedScheduleV062L(loans,maxMonths=360){
 const selected=(loans||[]).filter(Boolean);
 const schedules=selected.map(l=>loanFutureScheduleV062L(l,maxMonths));
 const out=[];
 for(let i=0;i<maxMonths;i++){
  let payment=0,interest=0,principal=0,extra=0,remaining=0,has=false;
  schedules.forEach(rows=>{
   const r=rows[i];
   if(r){has=true;payment+=r.payment;interest+=r.interest;principal+=r.principal;extra+=r.extra;remaining+=r.remaining}
  });
  // Loans already paid before this month contribute zero remaining.
  if(!has && i>0)break;
  out.push({monthIndex:i,payment,interest,principal:principal+extra,extra,remaining});
  if(remaining<=0 && i>0)break;
 }
 return out;
}
function loanDateForOffsetV062L(offset){
 const d=new Date(); d.setDate(1); d.setMonth(d.getMonth()+offset+1);
 return d.toLocaleDateString('de-DE',{month:'2-digit',year:'numeric'});
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

function daysUntilV38(dateStr){
 if(!dateStr)return null; const d=new Date(dateStr.length===7?dateStr+'-01T12:00:00':dateStr+'T12:00:00');
 if(Number.isNaN(d.getTime()))return null; return Math.ceil((d-new Date())/86400000);
}
function monthEndDaysV38(month){
 const m=String(month||'').match(/^(\d{4})-(\d{2})/);if(!m)return null;
 const d=new Date(Number(m[1]),Number(m[2]),0,12);return Math.ceil((d-new Date())/86400000);
}
function renderImportantV38(){
 const box=$('#importantItems');if(!box)return;const items=[];
 (state.tasks||[]).filter(t=>t.status!=='Erledigt').forEach(t=>{const d=taskDueMonthDateV34(t.due);if(d){const n=Math.ceil((d-new Date())/86400000);if(n<=45)items.push({level:n<0?'red':'orange',title:t.title,text:`Aufgabe · ${taskMonthLabelV34(t.due)} · ${propertyName(t.propertyId)}`})}});
 (state.maintenance||[]).forEach(x=>{
  if(x.status==='Erledigt'||!x.due)return;
  const due=maintenanceMonthDueDateV040L(x.due);
  if(!due)return;
  const days=Math.ceil((due-new Date())/86400000);
  if(days<=45){
   const level=days<0?'red':days<=14?'red':'orange';
   const when=days<0?'überfällig':days===0?'diesen Monat fällig':days<=31?'bald fällig':`fällig ${maintenanceMonthLabelV040L(x.due)}`;
   items.push({level,title:`Wartung: ${x.title}`,text:`${when} · ${propertyName(x.propertyId)}`});
  }
 });
 (state.vehicles||[]).forEach(v=>{
  const tuv=monthEndDaysV38(v.tuvDate);if(tuv!==null&&tuv<=90)items.push({level:tuv<0?'red':'orange',title:`HU / TÜV ${vehicleName(v)}`,text:`fällig ${monthYearLabelV36(v.tuvDate)}`});
  if(v.nextOilKm&&Number(v.currentKm)>=Number(v.nextOilKm)-1000)items.push({level:Number(v.currentKm)>=Number(v.nextOilKm)?'red':'orange',title:`Ölwechsel ${vehicleName(v)}`,text:`${km(v.currentKm)} / Ziel ${km(v.nextOilKm)}`});
 });
 (state.properties||[]).forEach(p=>(p.renovationCosts||[]).filter(r=>!renovationPaidV37(r)).forEach(r=>items.push({level:'orange',title:`Offene Sanierung: ${r.title}`,text:`${p.name} · ${eur(r.amount)}`})));
 $('#importantCountTag').textContent=`${items.length} Hinweis${items.length===1?'':'e'}`;
 box.innerHTML=items.length?items.slice(0,12).map(i=>`<div class="important-item ${i.level}"><i></i><div><strong>${esc(i.title)}</strong><span>${esc(i.text)}</span></div></div>`).join(''):'<div class="empty">Aktuell nichts Dringendes 🎉</div>';
}
function meterConsumptionsV38(p,key){
 const rows=(p.meterHistory||[]).filter(r=>r[key]!==''&&r[key]!=null).slice().sort((a,b)=>String(a.date).localeCompare(String(b.date)));
 const out=[];for(let i=1;i<rows.length;i++){const val=Number(rows[i][key])-Number(rows[i-1][key]);if(val>=0)out.push({from:rows[i-1].date,to:rows[i].date,value:val})}return out;
}
function renderConsumptionV38(){
 const box=$('#dashboardConsumption');if(!box)return;
 box.innerHTML=(state.properties||[]).map(p=>{
  const e=meterConsumptionsV38(p,'electricity'),w=meterConsumptionsV38(p,'water'),le=e[e.length-1],lw=w[w.length-1];
  const max=Math.max(1,...e.map(x=>x.value),...w.map(x=>x.value));
  const bars=[...e.slice(-4).map(x=>({label:`⚡ ${x.to.slice(0,7)}`,v:x.value,unit:'kWh'})),...w.slice(-4).map(x=>({label:`💧 ${x.to.slice(0,7)}`,v:x.value,unit:'m³'}))];
  return `<article class="consumption-card"><h3>${esc(p.name)}</h3><div class="consumption-kpis"><div><span>Letzter Stromverbrauch</span><strong>${le?le.value.toLocaleString('de-DE')+' kWh':'–'}</strong></div><div><span>Letzter Wasserverbrauch</span><strong>${lw?lw.value.toLocaleString('de-DE')+' m³':'–'}</strong></div></div>${bars.length?`<div class="mini-bars">${bars.map(b=>`<div><span>${esc(b.label)}</span><i><b style="width:${Math.max(4,b.v/max*100)}%"></b></i><strong>${b.v.toLocaleString('de-DE')} ${b.unit}</strong></div>`).join('')}</div>`:'<p class="helper-text">Mindestens zwei Zählerstände werden für eine Verbrauchsberechnung benötigt.</p>'}</article>`;
 }).join('')||'<div class="empty">Noch keine Objekte</div>';
}
function totalVehicleServiceCostV38(v){return (state.vehicleServices||[]).filter(s=>Number(s.vehicleId)===Number(v.id)).reduce((a,s)=>a+Number(s.cost||0),0)}
function applyDashboardWidgetsV38(){
 const cfg=state.settings.dashboardWidgets||{};document.querySelectorAll('[data-widget]').forEach(el=>{const k=el.dataset.widget;el.classList.toggle('widget-hidden',cfg[k]===false)});
}
function renderDashboardWidgetChoicesV38(){
 const box=$('#dashboardWidgetChoices');if(!box)return;const names={important:'Demnächst wichtig',tasks:'Aufgaben',loan:'Kredit',consumption:'Verbrauch',contributions:'Einzahlungen',waste:'Kalender',costpositions:'Kostenpositionen',objects:'Objekte',vehicles:'Fahrzeuge'};
 const cfg=state.settings.dashboardWidgets||{};box.innerHTML=Object.entries(names).map(([k,n])=>`<label class="check-row"><input type="checkbox" data-widget-choice="${k}" ${cfg[k]!==false?'checked':''}> ${n}</label>`).join('');
}
function applyThemeV38(){document.body.classList.toggle('dark-mode',state.settings.darkMode===true);const t=$('#darkModeToggle');if(t)t.checked=state.settings.darkMode===true}

function render(){
 const removedOneTimeMaintenance=cleanupCompletedOneTimeMaintenanceV041L();
 const removedCompletedTasks=cleanupCompletedTasksV044L();
 const activatedMaintenance=activateDueMaintenanceV042L();
 if(removedOneTimeMaintenance||removedCompletedTasks||activatedMaintenance){
  try{localStorage.setItem(KEY,JSON.stringify(state))}catch(e){console.warn('Wartungsstatus lokal speichern fehlgeschlagen',e)}
  setTimeout(()=>{try{persistState(false)}catch(e){console.warn('Wartungsstatus speichern fehlgeschlagen',e)}},0);
 }

 const notice=$('#appNotice');if(notice){notice.classList.add('hidden');notice.innerHTML=''}
 runModule('Auswahllisten',populateSelects);
 runModule('Übersicht',renderDashboardOnlyV071L);
 runModule('Objektübersicht',renderDashboardProperties);
 runModule('Sanierungsübersicht',renderDashboardRenovationsV37);
 runModule('Fahrzeuge',renderVehicles);
 runModule('Fahrzeugübersicht',renderDashboardVehicles);
 runModule('Kostenplan',renderCosts);
 runModule('Objekte',renderProperties);
runModule('Planung',renderTasks);
 runModule('Einstellungen',renderSettings);
 runModule('Müllkalender',renderWasteCalendar);
 runModule('Wichtig',renderImportantV38);
 runModule('Verbrauch',renderConsumptionV38);
 renderDashboardWidgetChoicesV38();applyDashboardWidgetsV38();applyThemeV38();
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
    <div><span>Ablesedatum</span><strong>${x.meterReadingDate?dateDE(x.meterReadingDate):'–'}</strong></div><div><span>Sanierung bezahlt</span><strong>${eur(renovationPaidTotalV37(x))}</strong></div>
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

function monthValueV36(value){
 const raw=String(value||'');
 const m=raw.match(/^(\d{4})-(\d{2})/);
 return m?`${m[1]}-${m[2]}`:'';
}
function monthYearLabelV36(value){
 const raw=monthValueV36(value);
 if(!raw)return '–';
 const [year,month]=raw.split('-');
 return `${month}/${year}`;
}

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
   <div class="vehicle-kpis">
    <div><span>${uiText('mileage')}</span><strong>${km(v.currentKm)}</strong></div>
    <div><span>${uiText('lastOil')}</span><strong>${v.lastOilDate?dateDE(v.lastOilDate):'–'}</strong><small>${v.lastOilKm?km(v.lastOilKm):''}</small></div>
    <div><span>${uiText('nextOil')}</span><strong>${v.nextOilKm?km(v.nextOilKm):'–'}</strong><small>${v.nextOilDate?dateDE(v.nextOilDate):''}</small></div>
    <div><span>HU / TÜV bis</span><strong>${monthYearLabelV36(v.tuvDate)}</strong></div>
   </div>
   <div class="vehicle-info-grid vehicle-maintenance-grid">
    <div><span>Motoröl</span><strong>${esc(v.oilSpec||'–')}</strong></div>
    <div><span>Reifen Zustand</span><strong>${esc(v.tires||'–')}</strong></div>
    <div><span>Bremsen zuletzt</span><strong>${monthYearLabelV36(v.brakesDate)}</strong></div>
    <div><span>Bremsen nächster Wechsel</span><strong>${monthYearLabelV36(v.brakesNextDate)}</strong></div>
    <div><span>Batterie zuletzt</span><strong>${monthYearLabelV36(v.batteryDate)}</strong></div>
    <div><span>Batterie nächster Wechsel</span><strong>${monthYearLabelV36(v.batteryNextDate)}</strong></div>
   </div>
   ${last?`<div class="last-service"><span>${uiText('lastWorkshop')}</span><strong>${dateDE(last.date)} · ${esc(serviceTypeLabel(last.type))}</strong><small>${last.km?km(last.km):''}${last.cost?` · ${eur(last.cost)}`:''}</small></div>`:''}
   <details class="vehicle-history"><summary>Werkstatthistorie · Gesamt ${eur(totalVehicleServiceCostV38(v))}</summary>${services.length?services.map(s=>`<div class="service-history-row"><div><strong>${dateDE(s.date)} · ${esc(serviceTypeLabel(s.type))}</strong><span>${s.workshop?`🏢 ${esc(s.workshop)} · `:''}${s.km?km(s.km):''}${s.note?` · ${esc(s.note)}`:''}</span></div><strong>${eur(s.cost||0)}</strong>${s.attachment?.data?`<a class="secondary tiny" href="${s.attachment.data}" ${String(s.attachment.type||'').startsWith('image/')?'target="_blank"':`download="${esc(s.attachment.name||'Rechnung')}"`}>Datei</a>`:''}</div>`).join(''):'<div class="empty">Noch keine Werkstatteinträge</div>'}</details>
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
 if(f.elements.estimatedValue)f.elements.estimatedValue.value=v?.estimatedValue??'';
 ['make','model','plate','year','fuel','currentKm','lastOilDate','lastOilKm','nextOilDate','nextOilKm','oilSpec','tires','notes'].forEach(k=>{if(f.elements[k])f.elements[k].value=v?.[k]??''});
 if(f.elements.tuvDate)f.elements.tuvDate.value=monthValueV36(v?.tuvDate);
 if(f.elements.brakesDate)f.elements.brakesDate.value=monthValueV36(v?.brakesDate);
 if(f.elements.brakesNextDate)f.elements.brakesNextDate.value=monthValueV36(v?.brakesNextDate);
 if(f.elements.batteryDate)f.elements.batteryDate.value=monthValueV36(v?.batteryDate);
 if(f.elements.batteryNextDate)f.elements.batteryNextDate.value=monthValueV36(v?.batteryNextDate);
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
 if(v.tuvDate)nextItems.push({type:'HU / TÜV',text:monthYearLabelV36(v.tuvDate),detail:'nächster Termin'});
 if(v.brakesNextDate)nextItems.push({type:'Bremsen',text:monthYearLabelV36(v.brakesNextDate),detail:v.brakesDate?`zuletzt ${monthYearLabelV36(v.brakesDate)}`:'nächster Wechsel'});
 else if(v.brakesDate)nextItems.push({type:'Bremsen',text:monthYearLabelV36(v.brakesDate),detail:'zuletzt gewechselt'});
 if(v.batteryNextDate)nextItems.push({type:'Batterie',text:monthYearLabelV36(v.batteryNextDate),detail:v.batteryDate?`zuletzt ${monthYearLabelV36(v.batteryDate)}`:'nächster Wechsel'});
 else if(v.batteryDate)nextItems.push({type:'Batterie',text:monthYearLabelV36(v.batteryDate),detail:'zuletzt gewechselt'});
 if(v.tires)nextItems.push({type:'Reifen',text:v.tires,detail:''});
 const recentOther=services.filter(s=>s.type!=='Ölwechsel').slice(0,2).map(s=>({type:serviceTypeLabel(s.type),text:dateDE(s.date),detail:s.note||''}));
 return [...nextItems,...recentOther].slice(0,6);
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


/* =========================================================
   0.71l – Dashboard-only renderer
   These functions read existing state but do not replace
   shared renderers used by Konto/Objekte/Planung/Fahrzeuge/Mehr.
   ========================================================= */

function dashEnergyIndexV071L(value){
 const c=String(value||'').trim().toUpperCase().replace('+','');
 return ({A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7})[c]??-1;
}
function dashEnergyScaleV071L(value){
 const idx=dashEnergyIndexV071L(value);
 const letters=['A','B','C','D','E','F','G','H'];
 return '<div class="dash-energy-scale-v071l">'+letters.map((l,i)=>'<span class="energy-'+l.toLowerCase()+(i===idx?' active':'')+'">'+l+'</span>').join('')+'</div>';
}
function dashConsumptionBarsV071L(rows,max,kind){
 if(!rows.length)return '<div class="dash-no-history-v071l">Noch keine Historie</div>';
 return '<div class="dash-spark-v071l '+kind+'">'+rows.map(r=>'<i style="height:'+Math.max(8,r.value/max*100)+'%" title="'+r.value.toLocaleString('de-DE')+'"></i>').join('')+'</div>';
}
function dashTaskSortV071L(a,b){
 const doneA=String(a.status||'').toLowerCase()==='erledigt'?1:0;
 const doneB=String(b.status||'').toLowerCase()==='erledigt'?1:0;
 if(doneA!==doneB)return doneA-doneB;
 const pr={sofort:0,hoch:1,mittel:2,niedrig:3};
 const pa=pr[String(a.priority||'').toLowerCase()]??4;
 const pb=pr[String(b.priority||'').toLowerCase()]??4;
 if(pa!==pb)return pa-pb;
 return String(a.due||'9999').localeCompare(String(b.due||'9999'));
}

function meterHistorySortedV077L(p){
 return (p?.meterHistory||[]).filter(r=>r?.date).slice().sort((a,b)=>String(a.date).localeCompare(String(b.date)));
}
function meterLatestPeriodV077L(p,key){
 const periods=meterConsumptionsV38(p,key);
 return periods[periods.length-1]||null;
}
function meterPeriodLabelV077L(period){
 if(!period)return 'Noch keine Verbrauchsperiode';
 return `${dateDE(period.from)} → ${dateDE(period.to)}`;
}
function meterTrendRowsV077L(p,key,unit){
 const periods=meterConsumptionsV38(p,key).slice(-5);
 if(!periods.length)return '<div class="dash-meter-empty-v077l">Für eine Verbrauchsauswertung werden mindestens zwei Ablesungen benötigt.</div>';
 const max=Math.max(1,...periods.map(x=>x.value));
 return `<div class="dash-meter-trend-v077l">${periods.map(x=>`
   <div class="dash-meter-trend-row-v077l">
    <span>${dateDE(x.to)}</span>
    <i><b style="width:${Math.max(5,x.value/max*100)}%"></b></i>
    <strong>${x.value.toLocaleString('de-DE')} ${unit}</strong>
   </div>`).join('')}</div>`;
}
function renderDashboardOnlyV071L(){
 if(!document.querySelector('.dashboard-only-v071l'))return;

 const tasks=(state.tasks||[]);
 const loans=currentLoansV061L();
 const props=(state.properties||[]);
 const cars=(state.vehicles||[]);

 // Status
 $('#dashTaskCountV071L').textContent=tasks.filter(t=>String(t.status||'').toLowerCase()!=='erledigt').length;
 $('#dashLoanCountV071L').textContent=loans.length;
 $('#dashObjectCountV071L').textContent=props.length;
 $('#dashCarCountV071L').textContent=cars.length;

 // Demnächst wichtig
 const important=[];
 tasks.filter(t=>String(t.status||'').toLowerCase()!=='erledigt').forEach(t=>{
  const d=taskDueMonthDateV34(t.due);
  if(!d)return;
  const days=Math.ceil((d-new Date())/86400000);
  if(days<=45)important.push({icon:'✅',level:days<=7?'red':'orange',title:t.title,text:`${taskMonthLabelV34(t.due)} · ${propertyName(t.propertyId)}`,days});
 });
 (state.maintenance||[]).forEach(m=>{
  if(m.status==='Erledigt'||!m.due)return;
  const d=maintenanceMonthDueDateV040L(m.due);
  if(!d)return;
  const days=Math.ceil((d-new Date())/86400000);
  if(days<=45)important.push({icon:'🔧',level:days<=7?'red':'orange',title:m.title,text:`${maintenanceMonthLabelV040L(m.due)} · ${propertyName(m.propertyId)}`,days});
 });
 cars.forEach(v=>{
  const days=monthEndDaysV38(v.tuvDate);
  if(days!==null&&days<=90)important.push({icon:'🚗',level:days<=30?'red':'orange',title:`HU / TÜV · ${vehicleName(v)}`,text:monthYearLabelV36(v.tuvDate),days});
 });
 $('#dashImportantCountV071L').textContent=`${important.length} Hinweis${important.length===1?'':'e'}`;
 $('#dashImportantV071L').innerHTML=important.length?important.slice(0,8).map(i=>`<article class="dash-important-card-v071l ${i.level}">
   <span class="dash-important-icon-v071l">${i.icon}</span>
   <div><strong>${esc(i.title)}</strong><small>${esc(i.text)}</small></div>
   <b>${i.days<0?'Überfällig':i.days===0?'Jetzt':`${i.days} T.`}</b>
  </article>`).join(''):'<div class="dash-ok-v071l"><span>✓</span><div><strong>Alles im grünen Bereich</strong><small>Aktuell nichts Dringendes.</small></div></div>';

 // Aufgaben – existing card function, dashboard only
 const sortedTasks=[...tasks].sort(dashTaskSortV071L);
 $('#dashTasksV071L').innerHTML=sortedTasks.length?sortedTasks.slice(0,8).map(dashboardTaskCardV33).join(''):'<div class="empty">Noch keine Aufgaben erstellt</div>';

 // Kredite
 const lt=loanTotalsV061L();
 const pct=lt.original?Math.min(100,Math.max(0,lt.paid/lt.original*100)):0;
 $('#dashLoanTagV071L').textContent=`${loans.length} Kredit${loans.length===1?'':'e'}`;
 $('#dashLoanPercentV071L').textContent=pct.toLocaleString('de-DE',{maximumFractionDigits:1})+' %';
 $('#dashLoanDonutV071L').style.setProperty('--p',pct);
 $('#dashLoanOriginalV071L').textContent=eur(lt.original);
 $('#dashLoanRemainingV071L').textContent=eur(lt.remaining);
 $('#dashLoanPaidV071L').textContent=eur(lt.paid);
 $('#dashLoanRateV071L').textContent=eur(lt.monthlyPayment);
 $('#dashLoanCardsV071L').innerHTML=loans.length?loans.map((l,i)=>{
  const p=loanProjectionForV061L(l);
  const interest=p.remaining*(Number(l.interest)||0)/100/12;
  const principal=Math.max(0,Math.min(p.remaining,(Number(l.monthlyPayment)||0)-interest));
  const lp=Number(l.original)>0?Math.min(100,Math.max(0,(Number(l.original)-p.remaining)/Number(l.original)*100)):0;
  return `<article class="dash-loan-card-v071l">
    <div class="dash-loan-card-head-v071l"><span>🏦</span><div><strong>${esc(l.name||`Kredit ${i+1}`)}</strong><small>${esc(l.bank||'Keine Bank')}</small></div><b>${lp.toLocaleString('de-DE',{maximumFractionDigits:1})}%</b></div>
    <div class="dash-progress-v071l"><i style="width:${lp}%"></i></div>
    <div class="dash-loan-values-v071l"><div><span>Restschuld</span><strong>${eur(p.remaining)}</strong></div><div><span>Rate</span><strong>${eur(l.monthlyPayment)}</strong></div><div><span>Zins</span><strong>${eur(interest)}</strong></div><div><span>Tilgung</span><strong>${eur(principal)}</strong></div></div>
  </article>`;
 }).join(''):'<div class="empty">Noch keine Kredite eingetragen</div>';

 // Verbrauch – ausführliche Dashboard-Auswertung, Objektseite bleibt unabhängig
 $('#dashConsumptionV071L').innerHTML=props.length?props.map(p=>{
  const history=meterHistorySortedV077L(p);
  const latest=history[history.length-1]||null;
  const prev=history[history.length-2]||null;
  const ePeriod=meterLatestPeriodV077L(p,'electricity');
  const wPeriod=meterLatestPeriodV077L(p,'water');
  const eCurrent=latest&&latest.electricity!==''&&latest.electricity!=null?Number(latest.electricity):null;
  const wCurrent=latest&&latest.water!==''&&latest.water!=null?Number(latest.water):null;

  return `<article class="dash-consumption-card-v077l">
    <div class="dash-consumption-head-v077l">
      <div><strong>${esc(p.name)}</strong><small>${latest?`Letzte Ablesung ${dateDE(latest.date)}`:'Noch keine Ablesung'}</small></div>
      <span>${history.length} Ablesung${history.length===1?'':'en'}</span>
    </div>

    <div class="dash-meter-current-v077l">
      <div class="electricity"><span>⚡ Aktueller Stromstand</span><strong>${eCurrent!=null?eCurrent.toLocaleString('de-DE')+' kWh':'–'}</strong></div>
      <div class="water"><span>💧 Aktueller Wasserstand</span><strong>${wCurrent!=null?wCurrent.toLocaleString('de-DE')+' m³':'–'}</strong></div>
    </div>

    <div class="dash-last-period-v077l">
      <div>
       <span>⚡ Letzter Verbrauch</span>
       <strong>${ePeriod?ePeriod.value.toLocaleString('de-DE')+' kWh':'–'}</strong>
       <small>${meterPeriodLabelV077L(ePeriod)}</small>
      </div>
      <div>
       <span>💧 Letzter Verbrauch</span>
       <strong>${wPeriod?wPeriod.value.toLocaleString('de-DE')+' m³':'–'}</strong>
       <small>${meterPeriodLabelV077L(wPeriod)}</small>
      </div>
    </div>

    <div class="dash-meter-charts-v077l">
      <section><div><strong>⚡ Stromverlauf</strong><small>Verbrauch je Ableseperiode</small></div>${meterTrendRowsV077L(p,'electricity','kWh')}</section>
      <section><div><strong>💧 Wasserverlauf</strong><small>Verbrauch je Ableseperiode</small></div>${meterTrendRowsV077L(p,'water','m³')}</section>
    </div>
  </article>`;
 }).join(''):'<div class="empty">Noch keine Objekte</div>';

 // Einzahlungen
 const users=accountUsersV048L();
 const totalContribution=users.reduce((s,u)=>s+ownerMonthlyContribution(u),0);
 $('#dashContributionTotalV071L').textContent=eur(totalContribution)+' / Monat';
 $('#dashContributionsV071L').innerHTML=users.length?users.map(u=>{
  const amount=ownerMonthlyContribution(u);
  const share=totalContribution?amount/totalContribution*100:0;
  return `<article class="dash-user-card-v071l">
    <div class="dash-user-avatar-v071l">${esc(ownerInitialsV045L(u.name))}</div>
    <div><div class="dash-user-line-v071l"><strong>${esc(u.name)}</strong><b>${eur(amount)}</b></div><div class="dash-progress-v071l"><i style="width:${share}%"></i></div><small>${share.toLocaleString('de-DE',{maximumFractionDigits:1})} % der Einzahlungen</small></div>
  </article>`;
 }).join(''):'<div class="empty">Keine aktiven Benutzer</div>';

 // Kostenpositionen
 const activeCosts=(state.costPlans||[]).filter(c=>!costIsPaid(c)).map(c=>({...c,_monthly:costMonthly(c)})).sort((a,b)=>b._monthly-a._monthly);
 $('#dashCostCountV071L').textContent=`${activeCosts.length} Position${activeCosts.length===1?'':'en'}`;
 const top=activeCosts.slice(0,6),max=Math.max(1,...top.map(c=>c._monthly));
 $('#dashCostBarsV071L').innerHTML=top.length?top.map(c=>`<div class="dash-cost-row-v071l"><span>${esc(c.name||c.category||'Kosten')}</span><i><b style="width:${Math.max(4,c._monthly/max*100)}%"></b></i><strong>${eur(c._monthly)}</strong></div>`).join(''):'<div class="empty">Keine laufenden Kosten</div>';
 $('#dashCostListV071L').innerHTML=activeCosts.length?activeCosts.slice(0,5).map(c=>`<article class="dash-cost-item-v071l"><span>${costIconV046L(c.category,c.name)}</span><div><strong>${esc(c.name||'Kostenposition')}</strong><small>${esc(c.category||'Kosten')} · ${esc(propertyName(c.propertyId))}</small></div><b>${eur(c._monthly)}<small>/Monat</small></b></article>`).join(''):'';

 // Objekte – dashboard-only cards
 $('#dashObjectsV071L').innerHTML=props.length?props.map(x=>`<article class="dashboard-property-card dash-property-v071l">
   ${x.photo?`<img class="dashboard-property-image" src="${x.photo}" alt="${esc(x.name||'Objekt')}">`:`<div class="dashboard-property-placeholder">🏠</div>`}
   <div class="dashboard-property-body">
    <div class="card-top"><span class="tag">${esc(x.usage||'Objekt')}</span><span>${Number(x.area)||0} m²</span></div>
    <h3>${esc(x.name||'Ohne Namen')}</h3><p>${esc(x.address||'Adresse noch nicht eingetragen')}</p>
    <div class="dash-property-facts-v071l"><div><span>Baujahr</span><strong>${esc(x.constructionYear||'–')}</strong></div><div><span>Zimmer</span><strong>${x.rooms!==''&&x.rooms!=null?Number(x.rooms):'–'}</strong></div><div><span>Heizung</span><strong>${esc(x.heatingType||'–')}</strong></div></div>
    <div class="dash-energy-v071l"><div><span>Energieklasse</span><strong>${esc(x.energyClass||'–')}</strong></div>${dashEnergyScaleV071L(x.energyClass)}</div>
   </div>
  </article>`).join(''):'<div class="empty">Noch keine Objekte angelegt</div>';

 // Fahrzeuge – kompakte Dashboard-Karten; Fahrzeug-Seite bleibt unberührt
 $('#dashVehiclesV071L').innerHTML=cars.length?cars.map(v=>{
  const tuv=monthYearLabelV36(v.tuvDate)||'–';
  const oil=v.nextOilKm?km(v.nextOilKm):'–';
  const current=km(v.currentKm);
  const tire=String(v.tires||v.tireCondition||'').trim()||'–';
  return `<article class="dash-vehicle-card-v073l">
    <div class="dash-vehicle-media-v073l">
      ${v.photo?`<img src="${v.photo}" alt="${esc(vehicleName(v))}">`:`<div class="dash-vehicle-placeholder-v073l">🚗</div>`}
      <span class="dash-vehicle-plate-v073l">${esc(v.plate||'Kein Kennzeichen')}</span>
      <span class="dash-vehicle-year-v073l">${esc(v.year||'–')}</span>
    </div>
    <div class="dash-vehicle-body-v073l">
      <div class="dash-vehicle-title-v073l">
        <div><strong>${esc(vehicleName(v))}</strong><small>${esc(v.drive||v.fuelType||'Fahrzeug')}</small></div>
      </div>
      <div class="dash-vehicle-facts-v073l">
        <div><span>KM</span><strong>${current}</strong></div>
        <div><span>HU / TÜV</span><strong>${tuv}</strong></div>
        <div><span>Nächstes Öl</span><strong>${oil}</strong></div>
        <div><span>Reifen</span><strong>${esc(tire)}</strong></div>
      </div>
    </div>
  </article>`;
 }).join(''):'<div class="empty">Noch keine Fahrzeuge angelegt</div>';
}

function renderDashboard(){
 const monthlyCosts=plannedMonthly(),monthlyIncome=plannedMonthlyIncome(),monthNet=projectedMonthlyBalance();
 $('#monthlyNeed').textContent=eur(monthlyCosts);$('#monthlyIncome').textContent=eur(monthlyIncome);$('#monthlyNet').textContent=eur(monthNet);
 const loans=currentLoansV061L(),loanTotal=loanTotalsV061L(),
 original=loanTotal.original,remaining=loanTotal.remaining,paid=loanTotal.paid,
 pct=original?Math.min(100,Math.max(0,paid/original*100)):0;
 $('#loanPercent').textContent=pct.toLocaleString('de-DE',{maximumFractionDigits:1})+' %';
 $('#loanDonut').style.setProperty('--p',pct);
 $('#loanOriginal').textContent=eur(original);$('#loanPaid').textContent=eur(paid);
 $('#loanRemaining').textContent=eur(remaining);$('#loanPayment').textContent=eur(loanTotal.monthlyPayment);
 $('#loanDetails').innerHTML=loans.length?loans.map((l,index)=>{
  const p=loanProjectionForV061L(l),monthInterest=p.remaining*(Number(l.interest)||0)/100/12;
  const monthPrincipal=Math.max(0,Math.min(p.remaining,Number(l.monthlyPayment)-monthInterest));
  return `<div class="dashboard-loan-row-v061l">
   <span><b>${esc(l.name||`Kredit ${index+1}`)}</b><small>${esc(l.bank||'Keine Bank')} · ${Number(l.interest||0).toLocaleString('de-DE')} %</small></span>
   <span><small>Restschuld</small><strong>${eur(p.remaining)}</strong></span>
   <span><small>Rate</small><strong>${eur(l.monthlyPayment)}</strong></span>
   <span><small>Tilgung nächster Monat</small><strong>${eur(monthPrincipal)}</strong></span>
  </div>`;
 }).join(''):'<div class="empty">Noch keine Kredite eingetragen.</div>';
 const propCosts=state.properties.map(property=>{
  const persons=accountUsersV048L().filter(user=>(user.propertyIds||[]).map(String).includes(String(property.id)));
  const value=(state.costPlans||[]).filter(cost=>String(cost.propertyId)===String(property.id)).reduce((sum,cost)=>sum+costMonthly(cost),0);
  return {name:property.name,value,persons:persons.length};


 renderDashboardProperties();

 renderDashboardVehicles();
});
const combined=plannedCostMonthly();
$('#dashboardObjectCosts').innerHTML=[
 ...propCosts.map(item=>({name:item.name,value:item.value,note:`${item.persons} zugeordnete Benutzer`})),
 {name:'Beide Objekte zusammen',value:combined,note:'Gesamte Kostenpositionen'}
].map((item,index)=>`<div class="${index===propCosts.length?'total-row':''}"><span>${esc(item.name)}<small>${esc(item.note)}</small></span><strong>${eur(item.value)} / Monat · ${eur(item.value*12)} / Jahr</strong></div>`).join('');
 $('#ownerIncomeSummary').innerHTML=accountUsersV048L().map(x=>`<div><span>${esc(x.name)}</span><strong>${eur(ownerMonthlyContribution(x))} / Monat</strong></div>`).join('')||'<div class="empty">Keine aktiven Benutzer</div>';
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

function ownerCostBreakdownV045L(owner){
 const rows=[];
 (state.costPlans||[]).forEach(cost=>{
  if(costIsPaid(cost))return;
  const people=eligibleOwnersForCost(cost);
  const user=people.find(p=>String(p.id)===String(owner.id));if(!user)return;
  const totalMonthly=costMonthly(cost),sharePercent=costUserSharePercentV048L(cost,user),personMonthly=totalMonthly*(sharePercent/100);
  rows.push({id:cost.id,category:cost.category||'Sonstiges',name:cost.name||'Kostenposition',object:propertyName(cost.propertyId),totalMonthly,sharePercent,personMonthly});
 });
 return rows;
}
function ownerInitialsV045L(name){
 const parts=String(name||'?').trim().split(/\s+/).filter(Boolean);
 return (parts.slice(0,2).map(x=>x[0]?.toUpperCase()||'').join('')||'?');
}
function userDetailTokenV049L(id){
 return encodeURIComponent(String(id||''));
}
function toggleOwnerCostDetailsV045L(ownerId){
 const token=userDetailTokenV049L(ownerId);
 const row=document.querySelector(`[data-user-details="${token}"]`);
 const btn=document.querySelector(`[data-user-toggle="${token}"]`);
 if(!row)return;

 const opening=row.classList.contains('hidden');
 if(opening)row.classList.remove('hidden');
 else row.classList.add('hidden');

 if(btn){
  btn.classList.toggle('open',opening);
  btn.setAttribute('aria-expanded',opening?'true':'false');
  const label=btn.querySelector('span');
  if(label)label.textContent=opening?'Weniger Informationen':'Weitere Informationen';
 }
}
function renderAccountPersonsV045L(){
 const box=$('#accountPersonContributions');if(!box)return;
 const owners=accountUsersV048L();
 const total=owners.reduce((s,o)=>s+ownerMonthlyContribution(o),0);

 if($('#accountContributionTotal'))$('#accountContributionTotal').textContent=eur(total);
 if($('#accountOwnerCount'))$('#accountOwnerCount').textContent=`${owners.length} Benutzer`;

 if(!owners.length){
  box.innerHTML='<div class="empty">Keine aktiven Benutzer vorhanden</div>';
  return;
 }

 box.innerHTML=owners.map((owner,index)=>{
  const token=userDetailTokenV049L(owner.id);
  const monthly=ownerMonthlyContribution(owner);
  const percent=total>0?(monthly/total*100):0;
  const breakdown=ownerCostBreakdownV045L(owner);
  const breakdownTotal=breakdown.reduce((s,r)=>s+r.personMonthly,0);

  return `<article class="account-person-v045l">
   <div class="account-person-summary-v045l">
    <div class="account-avatar-v045l">${esc(ownerInitialsV045L(owner.name))}</div>
    <div class="account-person-name-v045l">
     <strong>${esc(owner.name)}</strong>
     <span>${breakdown.length} Kostenposition${breakdown.length===1?'':'en'}</span>
    </div>
    <div class="account-person-value-v045l">
     <span>Monatliche Einzahlung</span>
     <strong>${eur(monthly)} / Monat</strong>
    </div>
    <div class="account-person-value-v045l">
     <span>Anteil an Einzahlungen</span>
     <strong>${percent.toLocaleString('de-DE',{maximumFractionDigits:1})} %</strong>
    </div>
    <button type="button"
      class="account-person-toggle-v045l"
      data-user-toggle="${token}"
      aria-expanded="false"
      >
      <span>Weitere Informationen</span><b>⌄</b>
    </button>
   </div>

   <div class="account-person-details-v045l hidden" data-user-details="${token}">
    <div class="account-person-details-title-v045l">
     <div>
      <strong>Kostenübersicht – ${esc(owner.name)}</strong>
      <span>Alle laufenden Kosten, die diesem Benutzer zugeordnet sind</span>
     </div>
     <strong>${eur(breakdownTotal)} / Monat</strong>
    </div>

    ${breakdown.length?`<div class="account-person-cost-table-v045l">
      <div class="account-person-cost-head-v045l">
       <span>Kostenposition</span>
       <span>Objekt</span>
       <span>Kosten gesamt</span>
       <span>Anteil</span>
       <span>Benutzer / Monat</span>
      </div>
      ${breakdown.map(r=>`<div class="account-person-cost-row-v045l">
       <span><b>${esc(r.category)}</b><small>${esc(r.name)}</small></span>
       <span>${esc(r.object)}</span>
       <strong>${eur(r.totalMonthly)}</strong>
       <strong>${r.sharePercent.toLocaleString('de-DE',{maximumFractionDigits:1})} %</strong>
       <strong>${eur(r.personMonthly)}</strong>
      </div>`).join('')}
      <div class="account-person-cost-total-v045l">
       <span>Gesamt für ${esc(owner.name)}</span>
       <strong>${eur(breakdownTotal)} / Monat</strong>
      </div>
     </div>`:'<div class="empty">Diesem Benutzer sind aktuell keine laufenden Kostenpositionen zugeordnet.</div>'}
   </div>
  </article>`;
 }).join('');
}function renderAccountObjectStatsV045L(){
 const properties=state.properties||[];
 const items=properties.map(p=>{
  const own=(state.costPlans||[]).filter(c=>String(c.propertyId)===String(p.id)).reduce((s,c)=>s+costMonthly(c),0);
  return {name:p.name,value:own};
 });
 const shared=(state.costPlans||[]).filter(c=>c.propertyId==='all'||c.propertyId===''||c.propertyId==null).reduce((s,c)=>s+costMonthly(c),0);
 if(shared>0)items.push({name:'Gemeinsame Kosten',value:shared});

 const monthly=plannedCostMonthly();
 const yearly=(state.costPlans||[]).reduce((s,c)=>s+costYearly(c),0);
 if($('#accountObjectStatTotal'))$('#accountObjectStatTotal').textContent=eur(yearly);
 if($('#accountObjectCount'))$('#accountObjectCount').textContent=`${properties.length} Objekt${properties.length===1?'':'e'}`;
 if($('#accountObjectDonutTotal'))$('#accountObjectDonutTotal').textContent=eur(yearly);

 const colors=['#2563eb','#22c55e','#f59e0b','#7c3aed','#06b6d4','#ef4444'];
 const total=Math.max(monthly,0);
 let cursor=0;
 const stops=[];
 items.forEach((item,i)=>{
  if(total<=0)return;
  const pct=item.value/total*100;
  const start=cursor,end=cursor+pct;
  stops.push(`${colors[i%colors.length]} ${start}% ${end}%`);
  cursor=end;
 });
 const donut=$('#accountObjectDonut');
 if(donut)donut.style.background=stops.length?`conic-gradient(${stops.join(',')})`:'#e2e8f0';

 const box=$('#costObjectSummary');
 if(!box)return;
 box.innerHTML=items.length?items.map((item,i)=>{
  const pct=total>0?item.value/total*100:0;
  return `<div class="account-object-row-v045l">
   <i style="background:${colors[i%colors.length]}"></i>
   <span><strong>${esc(item.name)}</strong><small>${pct.toLocaleString('de-DE',{maximumFractionDigits:1})} % der monatlichen Kosten</small></span>
   <strong>${eur(item.value)} / Monat</strong>
   <strong>${eur(item.value*12)} / Jahr</strong>
  </div>`;
 }).join(''):'<div class="empty">Noch keine Kostenpositionen vorhanden</div>';
}

function costIconV046L(category,name){
 const t=`${category||''} ${name||''}`.toLowerCase();
 if(t.includes('kredit')||t.includes('finanz'))return '🏦';
 if(t.includes('versicherung'))return '🛡️';
 if(t.includes('strom'))return '⚡';
 if(t.includes('wasser'))return '💧';
 if(t.includes('gas')||t.includes('heizung'))return '🔥';
 if(t.includes('internet')||t.includes('telefon'))return '🌐';
 if(t.includes('müll')||t.includes('abfall'))return '🗑️';
 if(t.includes('steuer'))return '🏛️';
 if(t.includes('wartung'))return '🔧';
 return '€';
}

function costDueTimingLabelV047L(value){
 return {start:'Anfang des Monats',middle:'Mitte des Monats',end:'Ende des Monats'}[value]||'';
}
function inferCostDueTimingV047L(cost){
 if(cost?.dueTiming)return cost.dueTiming;
 const old=String(cost?.note||'').toLowerCase();
 if(old.includes('anfang'))return 'start';
 if(old.includes('mitte'))return 'middle';
 if(old.includes('ende'))return 'end';
 return 'end';
}
function costIntervalShortV046L(interval){
 const label=intervalLabel(interval);
 return label||'Laufende Kosten';
}
function toggleCostPeopleV046L(id){
 const el=document.querySelector(`[data-cost-people="${id}"]`);
 const btn=document.querySelector(`[data-cost-people-toggle="${id}"]`);
 if(!el)return;
 const open=!el.classList.contains('hidden');
 el.classList.toggle('hidden',open);
 if(btn){
  btn.classList.toggle('open',!open);
  btn.setAttribute('aria-expanded',String(!open));
 }
}
function renderCosts(){
 const monthly=plannedCostMonthly();
 const yearly=(state.costPlans||[]).reduce((a,x)=>a+costYearly(x),0);

 $('#costMonthlyTotal').textContent=eur(monthly);
 $('#costYearlyTotal').textContent=eur(yearly);

 renderAccountObjectStatsV045L();
 renderAccountPersonsV045L();

 $('#costPlanList').innerHTML=state.costPlans.length?state.costPlans.map(x=>{
  const people=eligibleOwnersForCost(x);
  const paid=costIsPaid(x);
  const originalMonthly=costMonthlyOriginal(x);
  const originalYearly=costYearlyOriginal(x);
  const perPerson=people.length?originalMonthly/people.length:0;
  const icon=costIconV046L(x.category,x.name);

  return `<article class="cost-modern-v046l ${paid?'is-paid':''}">
   <div class="cost-modern-main-v046l">
    <div class="cost-modern-icon-v046l">${icon}</div>

    <div class="cost-modern-title-v046l">
     <span>${esc(x.category||'Kosten')}</span>
     <h3>${esc(x.name)}</h3>
     <p>${esc(costIntervalShortV046L(x.interval))} · ${esc(costDueTimingLabelV047L(inferCostDueTimingV047L(x)))}${x.note?` · ${esc(x.note)}`:''}</p>
    </div>

    <div class="cost-modern-object-v046l">
     <span>Objekt</span>
     <strong>${esc(propertyName(x.propertyId))}</strong>
    </div>

    <div class="cost-modern-status-v046l ${paid?'paid':'active'}">
     <i></i><span>${paid?'Bezahlt':'Aktiv'}</span>
    </div>
   </div>

   <div class="cost-modern-stats-v046l">
    <div>
     <span>Je Zahlung</span>
     <strong>${eur(x.amount)}</strong>
    </div>
    <div>
     <span>Monatlich</span>
     <strong>${paid?`<s>${eur(originalMonthly)}</s>`:eur(originalMonthly)}</strong>
    </div>
    <div>
     <span>Jährlich</span>
     <strong>${paid?`<s>${eur(originalYearly)}</s>`:eur(originalYearly)}</strong>
    </div>
    <div>
     <span>Benutzer</span>
     <strong>${people.length}</strong>
    </div>
   </div>

   ${paid?`<div class="cost-modern-paidinfo-v046l">
    <span>✓ Diese Kostenposition ist vollständig bezahlt und wird nicht mehr in den laufenden Summen berücksichtigt.</span>
    ${x.paidAt?`<small>Markiert am ${new Date(x.paidAt).toLocaleDateString('de-DE')}</small>`:''}
   </div>`:''}

   <div class="cost-modern-allocation-v046l">
    <div class="cost-modern-allocation-summary-v046l">
     <div>
      <span>Kostenaufteilung</span>
      <strong>${people.length?(people.some(p=>Number(p.paymentShare)>0)?'Nach Kostenanteilen verteilt':'Gleichmäßig verteilt'):'Kein Benutzer zugeordnet'}</strong>
     </div>
     ${people.length?`<button type="button" class="cost-modern-toggle-v046l" data-cost-people-toggle="${x.id}" aria-expanded="false" onclick="toggleCostPeopleV046L(${x.id})">
      <span>Aufteilung anzeigen</span><b>⌄</b>
     </button>`:''}
    </div>

    ${people.length?`<div class="cost-modern-people-v046l hidden" data-cost-people="${x.id}">
      ${people.map((person,index)=>{
       const share=costUserSharePercentV048L(x,person),amount=costMonthlyOriginal(x)*(share/100);
       return `<div class="cost-modern-person-v046l">
        <div class="cost-person-avatar-v046l">${esc(ownerInitialsV045L(person.name))}</div>
        <span><strong>${esc(person.name)}</strong><small>Benutzer ${index+1} · ${share.toLocaleString('de-DE',{maximumFractionDigits:1})} % dieser Position</small></span>
        <strong>${paid?`<s>${eur(amount)}</s>`:eur(amount)} / Monat</strong>
       </div>`;
      }).join('')}
     </div>`:''}
   </div>

   <div class="cost-modern-actions-v046l">
    <button class="secondary small" onclick="editCost(${x.id})">✏️ Bearbeiten</button>
    <button class="${paid?'secondary':'success'} small" onclick="toggleCostPaid(${x.id})">${paid?'↩ Wieder aktivieren':'✓ Komplett bezahlt'}</button>
    <button class="danger small" onclick="deleteCost(${x.id})">🗑 Löschen</button>
   </div>
  </article>`;
 }).join(''):'<div class="empty">Noch keine Kostenpositionen</div>';
}
function intervalLabel(i){return {monthly:'monatlich',fiveyearly:'5× jährlich',quarterly:'vierteljährlich',semiannual:'halbjährlich',yearly:'jährlich'}[i]||i}

function latestMeterReadingV077L(x){
 const rows=(x?.meterHistory||[]).slice().filter(r=>r?.date).sort((a,b)=>String(a.date).localeCompare(String(b.date)));
 return rows[rows.length-1]||null;
}
function propertyMeterHistoryHtmlV35(x){
 const rows=(x.meterHistory||[]).slice().filter(r=>r?.date).sort((a,b)=>String(b.date).localeCompare(String(a.date)));
 const latest=rows[0]||null;
 return `<div class="meter-history-v077l">
  <div class="meter-history-head-v077l">
   <div>
    <strong>Aktuelle Zählerstände</strong>
    <small>${latest?`Letzte Ablesung ${dateDE(latest.date)}`:'Noch keine Ablesung gespeichert'}</small>
   </div>
   <button type="button" class="primary small" onclick="openMeterReadingV077L(${x.id})">+ Zählerstand</button>
  </div>
  <div class="meter-current-grid-v077l">
   <div><span>⚡ Strom aktuell</span><strong>${latest&&latest.electricity!==''&&latest.electricity!=null?Number(latest.electricity).toLocaleString('de-DE')+' kWh':'–'}</strong></div>
   <div><span>💧 Wasser aktuell</span><strong>${latest&&latest.water!==''&&latest.water!=null?Number(latest.water).toLocaleString('de-DE')+' m³':'–'}</strong></div>
  </div>
  ${rows.length?`<div class="meter-history-list-v077l">${rows.map((r,index)=>{
    const older=rows[index+1];
    const eDiff=older&&r.electricity!==''&&r.electricity!=null&&older.electricity!==''&&older.electricity!=null
      ?Number(r.electricity)-Number(older.electricity):null;
    const wDiff=older&&r.water!==''&&r.water!=null&&older.water!==''&&older.water!=null
      ?Number(r.water)-Number(older.water):null;
    return `<article class="meter-history-row-v077l">
      <div class="meter-history-date-v077l"><strong>${dateDE(r.date)}</strong>${index===0?'<span>Aktuell</span>':''}</div>
      <div><span>⚡ Zählerstand</span><strong>${r.electricity!==''&&r.electricity!=null?Number(r.electricity).toLocaleString('de-DE')+' kWh':'–'}</strong>${eDiff!=null&&eDiff>=0?`<small>+ ${eDiff.toLocaleString('de-DE')} kWh</small>`:''}</div>
      <div><span>💧 Zählerstand</span><strong>${r.water!==''&&r.water!=null?Number(r.water).toLocaleString('de-DE')+' m³':'–'}</strong>${wDiff!=null&&wDiff>=0?`<small>+ ${wDiff.toLocaleString('de-DE')} m³</small>`:''}</div>
     </article>`;
   }).join('')}</div>`:'<div class="property-sub-empty">Noch keine Zählerstände historisiert</div>'}
 </div>`;
}
function openMeterReadingV077L(propertyId){
 const p=(state.properties||[]).find(x=>Number(x.id)===Number(propertyId));if(!p)return;
 const f=$('#meterReadingFormV077L');if(!f)return;
 f.reset();f.elements.propertyId.value=propertyId;
 f.elements.date.value=new Date().toISOString().slice(0,10);
 const latest=latestMeterReadingV077L(p);
 const info=$('#meterReadingPreviousV077L');
 if(info){
  info.innerHTML=latest?`<strong>Letzte Ablesung</strong><span>${dateDE(latest.date)} · ⚡ ${latest.electricity!==''&&latest.electricity!=null?Number(latest.electricity).toLocaleString('de-DE')+' kWh':'–'} · 💧 ${latest.water!==''&&latest.water!=null?Number(latest.water).toLocaleString('de-DE')+' m³':'–'}</span>`:'<span>Dies ist die erste Ablesung für dieses Objekt.</span>';
 }
 $('#meterReadingModalV077L').showModal();
}
function deleteMeterReadingV077L(propertyId,id){
 const p=(state.properties||[]).find(x=>Number(x.id)===Number(propertyId));if(!p)return;
 if(!confirm('Diesen Zählerstand wirklich löschen?'))return;
 p.meterHistory=(p.meterHistory||[]).filter(r=>String(r.id)!==String(id));
 const latest=latestMeterReadingV077L(p);
 p.electricityMeter=latest?.electricity??'';
 p.waterMeter=latest?.water??'';
 p.meterReadingDate=latest?.date||'';
 save();
}
window.openMeterReadingV077L=openMeterReadingV077L;
window.deleteMeterReadingV077L=deleteMeterReadingV077L;
function monthValueV37(value){const raw=String(value||'');const m=raw.match(/^(\d{4})-(\d{2})/);return m?`${m[1]}-${m[2]}`:''}
function renovationMonthLabelV37(value){const m=monthValueV37(value);if(!m)return 'ohne Monat/Jahr';const [y,mo]=m.split('-');return `${mo}/${y}`}
function renovationCategoryIconV37(c){return ({Elektrik:'⚡',Dach:'🏠',Fenster:'🪟',Heizung:'🔥',Sanitär:'🚿',Innenausbau:'🎨',Außenanlage:'🌳',Sonstiges:'📦'})[c]||'📦'}
function renovationPlannedAmountV075L(r){
 return Math.max(0,Number(r?.plannedAmount ?? r?.amount ?? 0)||0);
}
function renovationOpenAmountV075L(r){
 const planned=renovationPlannedAmountV075L(r);
 const raw=r?.openAmount!=null
  ?Math.max(0,Number(r.openAmount)||0)
  :(String(r?.status||'paid')==='open'?Math.max(0,Number(r?.amount)||0):0);
 return Math.min(planned,raw);
}
function renovationPaidAmountV075L(r){
 return Math.max(0,renovationPlannedAmountV075L(r)-renovationOpenAmountV075L(r));
}
function renovationEntryProgressV075L(r){
 const planned=renovationPlannedAmountV075L(r);
 return planned>0?Math.min(100,Math.max(0,renovationPaidAmountV075L(r)/planned*100)):0;
}
function renovationPaidV37(r){return renovationOpenAmountV075L(r)<=0}
function renovationPaidTotalV37(x){return (x.renovationCosts||[]).reduce((s,r)=>s+renovationPaidAmountV075L(r),0)}
function renovationOpenTotalV37(x){return (x.renovationCosts||[]).reduce((s,r)=>s+renovationOpenAmountV075L(r),0)}
function renovationPlannedTotalV39(x){return (x.renovationCosts||[]).reduce((s,r)=>s+renovationPlannedAmountV075L(r),0)}
function renovationTotalV35(x){return renovationPaidTotalV37(x)}
function renovationProgressV39(x){
 const planned=renovationPlannedTotalV39(x),paid=renovationPaidTotalV37(x);
 return planned>0?Math.min(100,Math.max(0,(paid/planned)*100)):0;
}
function renovationAttachmentHtmlV37(a){if(!a?.data)return '';const isImage=String(a.type||'').startsWith('image/');return isImage?`<a class="renovation-file renovation-file-image" href="${a.data}" target="_blank"><img src="${a.data}" alt="${esc(a.name||'Foto')}"><span>📷 ${esc(a.name||'Foto')}</span></a>`:`<a class="renovation-file" href="${a.data}" download="${esc(a.name||'Dokument.pdf')}">📄 ${esc(a.name||'Dokument')}</a>`}
function propertyRenovationHtmlV35(x){
 const rows=(x.renovationCosts||[]).slice().sort((a,b)=>String(b.month||b.date||'').localeCompare(String(a.month||a.date||'')));
 const planned=renovationPlannedTotalV39(x),paid=renovationPaidTotalV37(x),open=renovationOpenTotalV37(x),progress=renovationProgressV39(x);
 return `<div class="renovation-summary-grid renovation-summary-grid-v39">
   <div class="ren-sum ren-planned"><span>Geplant</span><strong>${eur(planned)}</strong></div>
   <div class="ren-sum ren-paid"><span>Bereits bezahlt</span><strong>${eur(paid)}</strong></div>
   <div class="ren-sum ren-open"><span>Noch offen</span><strong>${eur(open)}</strong></div>
  </div>
  <div class="renovation-progress-v39">
   <div><span>Sanierungsfortschritt</span><strong>${progress.toFixed(1).replace('.',',')} %</strong></div>
   <i><b style="width:${progress}%"></b></i>
   <small>${eur(paid)} von ${eur(planned)} bezahlt · ${eur(open)} offen</small>
  </div>

  <details class="renovation-cost-list-v075l">
   <summary>
    <span><strong>Kostenliste</strong><small>${rows.length} Eintrag${rows.length===1?'':'e'} · sortiert nach Monat/Jahr</small></span>
    <b class="renovation-list-arrow-v075l">⌄</b>
   </summary>
   <div class="renovation-list renovation-timeline-v39">
    ${rows.length?rows.map(r=>{
      const rp=renovationPlannedAmountV075L(r),ro=renovationOpenAmountV075L(r),rd=renovationPaidAmountV075L(r),pct=renovationEntryProgressV075L(r);
      return `<article class="renovation-row-v37 ${ro<=0?'is-paid':'is-open'}">
       <div class="renovation-timeline-dot"></div>
       <div class="renovation-row-main">
        <div class="renovation-row-title"><span class="ren-category">${renovationCategoryIconV37(r.category)} ${esc(r.category||'Sonstiges')}</span><strong>${esc(r.title||'Sanierung')}</strong></div>
        <div class="renovation-row-meta">
         <span>📅 ${renovationMonthLabelV37(r.month||r.date)}</span>
         <span>👷 ${esc(r.workType||'Fachfirma')}</span>
         ${r.company?`<span>🏢 ${esc(r.company)}</span>`:''}
         ${r.companyRating?`<span>⭐ ${'★'.repeat(Number(r.companyRating))}</span>`:''}
         ${r.note?`<span>📝 ${esc(r.note)}</span>`:''}
        </div>
        <div class="renovation-entry-progress-v075l">
         <i><b style="width:${pct}%"></b></i><span>${pct.toFixed(1).replace('.',',')} %</span>
        </div>
        ${(r.attachments||[]).length?`<div class="renovation-files">${r.attachments.map(renovationAttachmentHtmlV37).join('')}</div>`:''}
       </div>
       <div class="renovation-row-price renovation-row-price-v075l">
        <div><span>Geplant</span><strong>${eur(rp)}</strong></div>
        <div class="paid"><span>Bezahlt</span><strong>${eur(rd)}</strong></div>
        <div class="open"><span>Offen</span><strong>${eur(ro)}</strong></div>
       </div>
       <div class="renovation-row-actions">
        <button class="secondary tiny" onclick="editRenovationV37(${x.id},${r.id})">Bearbeiten</button>
        ${ro>0?`<button class="success tiny" onclick="markRenovationPaidV075L(${x.id},${r.id})">Komplett bezahlt</button>`:''}
        <button class="danger tiny" onclick="deleteRenovationV35(${x.id},${r.id})">Löschen</button>
       </div>
      </article>`;
    }).join(''):'<div class="property-sub-empty">Noch keine Sanierungskosten eingetragen</div>'}
   </div>
  </details>`;
}
function updateRenovationCalcPreviewV075L(){
 const f=$('#renovationForm');if(!f)return;
 const planned=Math.max(0,Number(f.elements.plannedAmount?.value)||0);
 let open=Math.max(0,Number(f.elements.openAmount?.value)||0);
 if(open>planned){
  open=planned;
  if(document.activeElement!==f.elements.openAmount)f.elements.openAmount.value=String(planned);
 }
 const paid=Math.max(0,planned-open);
 const pct=planned>0?paid/planned*100:0;
 if($('#renovationPaidPreviewV075L'))$('#renovationPaidPreviewV075L').textContent=eur(paid);
 if($('#renovationProgressPreviewV075L'))$('#renovationProgressPreviewV075L').textContent=pct.toFixed(1).replace('.',',')+' %';
}
function openRenovationModalV35(propertyId){
 const f=$('#renovationForm');f.reset();f.dataset.mode='new';
 f.elements.propertyId.value=propertyId;f.elements.id.value='';
 f.elements.category.value='Sonstiges';
 if(f.elements.workType)f.elements.workType.value='Fachfirma';
 if(f.elements.companyRating)f.elements.companyRating.value='';
 f.elements.plannedAmount.value='';
 f.elements.openAmount.value='';
 f.elements.month.value=new Date().toISOString().slice(0,7);
 $('#renovationModalTitle').textContent='Sanierungskosten hinzufügen';
 $('#renovationAttachmentInfo').textContent='Optional: Fotos oder PDF-Rechnungen/Angebote hinzufügen.';
 updateRenovationCalcPreviewV075L();
 $('#renovationModal').showModal();
}
function editRenovationV37(propertyId,id){
 const p=state.properties.find(x=>Number(x.id)===Number(propertyId));if(!p)return;
 const r=(p.renovationCosts||[]).find(x=>Number(x.id)===Number(id));if(!r)return;
 const f=$('#renovationForm');f.reset();f.dataset.mode='edit';
 f.elements.propertyId.value=propertyId;f.elements.id.value=id;
 f.elements.title.value=r.title||'';f.elements.category.value=r.category||'Sonstiges';
 f.elements.plannedAmount.value=renovationPlannedAmountV075L(r);
 f.elements.openAmount.value=renovationOpenAmountV075L(r);
 f.elements.month.value=monthValueV37(r.month||r.date);
 if(f.elements.workType)f.elements.workType.value=r.workType||'Fachfirma';
 if(f.elements.companyRating)f.elements.companyRating.value=r.companyRating||'';
 f.elements.company.value=r.company||'';f.elements.note.value=r.note||'';
 $('#renovationModalTitle').textContent='Sanierungskosten bearbeiten';
 $('#renovationAttachmentInfo').textContent=(r.attachments||[]).length?`${r.attachments.length} Datei(en) vorhanden. Neue Dateien werden zusätzlich angehängt.`:'Noch keine Dateien vorhanden.';
 updateRenovationCalcPreviewV075L();
 $('#renovationModal').showModal();
}
function markRenovationPaidV075L(propertyId,id){
 const p=state.properties.find(x=>Number(x.id)===Number(propertyId));if(!p)return;
 const r=(p.renovationCosts||[]).find(x=>Number(x.id)===Number(id));if(!r)return;
 r.openAmount=0;r.status='paid';r.amount=renovationPlannedAmountV075L(r);r.updatedAt=new Date().toISOString();save();
}
window.markRenovationPaidV075L=markRenovationPaidV075L;
function deleteRenovationV35(propertyId,id){const p=state.properties.find(x=>Number(x.id)===Number(propertyId));if(!p)return;if(!confirm('Diesen Sanierungskosten-Eintrag wirklich löschen?'))return;p.renovationCosts=(p.renovationCosts||[]).filter(r=>Number(r.id)!==Number(id));save()}
async function fileToDataUrlV37(file){return await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(String(reader.result||''));reader.onerror=()=>reject(reader.error||new Error('Datei konnte nicht gelesen werden'));reader.readAsDataURL(file)})}
async function renovationFilesV37(fileList){const files=[...(fileList||[])].slice(0,5),result=[];for(const file of files){if(file.size>3000000)throw new Error(`${file.name} ist größer als 3 MB.`);const data=String(file.type||'').startsWith('image/')?await imageFileToDataUrlV31(file,1400,1000,.80):await fileToDataUrlV37(file);result.push({name:file.name,type:file.type||'application/octet-stream',data,size:file.size})}return result}
function renderDashboardRenovationsV37(){
 const box=$('#dashboardRenovationOverview');if(!box)return;
 const properties=state.properties||[];
 const all=properties.flatMap(p=>(p.renovationCosts||[]).map(r=>({...r,propertyName:p.name})));
 if(!all.length){box.innerHTML='<div class="empty">Noch keine Sanierungskosten eingetragen</div>';return}
 const planned=all.reduce((s,r)=>s+renovationPlannedAmountV075L(r),0);
 const paid=all.reduce((s,r)=>s+renovationPaidAmountV075L(r),0);
 const open=all.reduce((s,r)=>s+renovationOpenAmountV075L(r),0);
 const progress=planned>0?Math.min(100,(paid/planned)*100):0;
 const perObject=properties.map(p=>({name:p.name,planned:renovationPlannedTotalV39(p),paid:renovationPaidTotalV37(p),open:renovationOpenTotalV37(p),progress:renovationProgressV39(p)})).filter(x=>x.planned||x.paid||x.open);
 box.innerHTML=`<div class="dashboard-ren-totals"><div><span>Geplant</span><strong>${eur(planned)}</strong></div><div><span>Bereits investiert</span><strong>${eur(paid)}</strong></div><div><span>Noch offen</span><strong>${eur(open)}</strong></div></div>
 <div class="renovation-progress-v39 dashboard-ren-progress"><div><span>Gesamtfortschritt</span><strong>${progress.toFixed(1).replace('.',',')} %</strong></div><i><b style="width:${progress}%"></b></i></div>
 <div class="dashboard-ren-objects">${perObject.map(o=>`<div class="dashboard-ren-object"><div><strong>${esc(o.name)}</strong><span>${eur(o.paid)} bezahlt · ${eur(o.open)} offen</span></div><div><strong>${o.progress.toFixed(0)} %</strong></div></div>`).join('')}</div>`;
}
function propertyDocumentsHtmlV38(p){
 const docs=p.documents||[];if(!docs.length)return '<div class="property-sub-empty">Noch keine Dokumente hinterlegt</div>';
 return `<div class="document-list">${docs.map(d=>`<div class="document-row"><div><strong>${esc(d.title)}</strong><span>${esc(d.category||'Dokument')} · ${d.month?renovationMonthLabelV37(d.month):'ohne Datum'}</span></div><a class="secondary tiny" href="${d.data}" ${String(d.type||'').startsWith('image/')?'target="_blank"':`download="${esc(d.name||'Dokument')}"`}>Öffnen</a><button class="danger tiny" onclick="deletePropertyDocumentV38(${p.id},${d.id})">×</button></div>`).join('')}</div>`;
}
function openPropertyDocumentV38(propertyId){const f=$('#propertyDocumentForm');f.reset();f.elements.propertyId.value=propertyId;f.elements.month.value=new Date().toISOString().slice(0,7);$('#propertyDocumentModal').showModal()}
function deletePropertyDocumentV38(propertyId,id){const p=state.properties.find(x=>Number(x.id)===Number(propertyId));if(!p)return;if(!confirm('Dokument löschen?'))return;p.documents=(p.documents||[]).filter(d=>Number(d.id)!==Number(id));save()}

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
  <details class="property-detail-block"><summary>Zählerstände & Historie</summary>${propertyMeterHistoryHtmlV35(x)}</details><section class="property-detail-block"><div class="property-sub-head"><strong>Dokumentenakte</strong><button class="secondary small" onclick="openPropertyDocumentV38(${x.id})">+ Dokument</button></div>${propertyDocumentsHtmlV38(x)}</section>
  <section class="property-detail-block renovation-block">
   <div class="property-sub-head"><strong>Sanierungskosten</strong><button class="secondary small" onclick="openRenovationModalV35(${x.id})">+ Kosten</button></div>
   ${propertyRenovationHtmlV35(x)}
  </section>
  ${x.notes?`<p class="property-notes"><strong>Notiz:</strong> ${esc(x.notes)}</p>`:''}
  <div class="card-actions"><button class="secondary small" onclick="editProperty(${x.id})">Bearbeiten</button><button class="danger small" onclick="deleteProperty(${x.id})">Löschen</button></div>
 </article>`).join(''):'<div class="empty">Noch keine Objekte</div>'
}
function planningPriorityClassV40(priority){
 const p=String(priority||'Mittel').toLowerCase();
 return p==='sofort'?'urgent':p==='hoch'?'high':p==='niedrig'?'low':'medium';
}
function planningPriorityIconV40(priority){
 const p=String(priority||'Mittel');
 return p==='Sofort'?'⚡':p==='Hoch'?'↑':p==='Niedrig'?'↓':'•';
}
function maintenanceIconV40(title){
 const t=String(title||'').toLowerCase();
 if(t.includes('heizung')||t.includes('wärmepumpe')||t.includes('warmwasser')||t.includes('heizkörper')||t.includes('fußbodenheizung'))return '♨️';
 if(t.includes('rauch')||t.includes('co-melder')||t.includes('feuerlöscher'))return '🛡️';
 if(t.includes('dachrinne')||t.includes('fallrohr')||t.includes('entwässer'))return '🌧️';
 if(t.includes('dach'))return '🏠';
 if(t.includes('fenster'))return '🪟';
 if(t.includes('tür')||t.includes('tor'))return '🚪';
 if(t.includes('lüft')||t.includes('klima')||t.includes('filter'))return '🌬️';
 if(t.includes('wasser')||t.includes('abfluss')||t.includes('hebeanlage')||t.includes('rückstau'))return '💧';
 if(t.includes('elektro')||t.includes('fi ')||t.includes('rcd')||t.includes('blitzschutz'))return '⚡';
 if(t.includes('fassade'))return '🧱';
 if(t.includes('baum')||t.includes('zaun')||t.includes('terrasse')||t.includes('balkon'))return '🌿';
 return '🔧';
}
function maintenanceMonthLabelV040L(value){
 const m=String(value||'').match(/^(\d{4})-(\d{2})/);
 if(!m)return 'Kein Termin';
 return `${m[2]}/${m[1]}`;
}
function maintenanceMonthDueDateV040L(value){
 const m=String(value||'').match(/^(\d{4})-(\d{2})/);
 if(!m)return null;
 return new Date(Number(m[1]),Number(m[2]),0,23,59,59);
}
function planningDueInfoV40(x,isTask){
 const label=isTask?taskMonthLabelV34(x.due):maintenanceMonthLabelV040L(x.due);
 if(!x.due)return {label:'Kein Termin',hint:'Noch nicht terminiert',status:'ok'};
 const due=isTask?taskDueMonthDateV34(x.due):maintenanceMonthDueDateV040L(x.due);
 if(!due||Number.isNaN(due.getTime()))return {label,hint:'',status:'ok'};
 const days=Math.ceil((due-new Date())/86400000);
 if(days<0)return {label,hint:'Überfällig',status:'overdue'};
 if(days<=30)return {label,hint:days===0?'Heute fällig':`Fällig in ${days} Tagen`,status:'soon'};
 if(days<=90)return {label,hint:`Fällig in ca. ${Math.max(1,Math.round(days/30))} Monaten`,status:'soon'};
 return {label,hint:'Geplant',status:'ok'};
}

function maintenanceIntervalLabelV041L(months){
 const n=Number(months)||0;
 if(n===0)return 'Einmalig';
 if(n===1)return 'Monatlich';
 if(n===3)return 'Alle 3 Monate';
 if(n===6)return 'Halbjährlich';
 if(n===12)return 'Jährlich';
 if(n===24)return 'Alle 2 Jahre';
 if(n===36)return 'Alle 3 Jahre';
 if(n===60)return 'Alle 5 Jahre';
 return `Alle ${n} Monate`;
}
function currentMonthValueV041L(){
 const d=new Date();
 return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
}
function addMonthsToMonthValueV041L(monthValue,months){
 const m=String(monthValue||'').match(/^(\d{4})-(\d{2})/);
 const base=m?new Date(Number(m[1]),Number(m[2])-1,1):new Date();
 base.setDate(1);
 base.setMonth(base.getMonth()+Number(months||0));
 return `${base.getFullYear()}-${String(base.getMonth()+1).padStart(2,'0')}`;
}

function addPlanningHistoryV044L(item,type,completedBy,completedAt){
 state.planningHistory=Array.isArray(state.planningHistory)?state.planningHistory:[];
 state.planningHistory.push({
  id:Date.now()+Math.floor(Math.random()*1000),
  sourceId:item.id,
  type,
  title:item.title||'',
  propertyId:item.propertyId??'all',
  priority:item.priority||'Mittel',
  intervalMonths:type==='maintenance'?Number(item.intervalMonths||0):null,
  completedAt:completedAt||new Date().toISOString(),
  completedMonth:currentMonthValueV041L(),
  completedByName:completedBy||'Lokaler Benutzer',
  note:item.note||'',
  cost:type==='maintenance'?Number(item.cost||0):0
 });
}
function cleanupCompletedTasksV044L(){
 const now=Date.now(),sevenDays=7*24*60*60*1000;
 const before=(state.tasks||[]).length;
 state.tasks=(state.tasks||[]).filter(x=>{
  if(x.status!=='Erledigt')return true;
  const completed=Date.parse(x.completedAt||'');
  if(!Number.isFinite(completed))return true;
  return (now-completed)<sevenDays;
 });
 return before!==state.tasks.length;
}
function cleanupCompletedOneTimeMaintenanceV041L(){
 const now=Date.now();
 const sevenDays=7*24*60*60*1000;
 const before=(state.maintenance||[]).length;
 state.maintenance=(state.maintenance||[]).filter(x=>{
  if(Number(x.intervalMonths)!==0 || x.status!=='Erledigt')return true;
  const completed=Date.parse(x.completedAt||'');
  if(!Number.isFinite(completed))return true;
  return (now-completed)<sevenDays;
 });
 return before!==state.maintenance.length;
}

function maintenanceIsDueNowV042L(x){
 if(!x?.due)return false;
 const m=String(x.due).match(/^(\d{4})-(\d{2})/);
 if(!m)return false;
 const now=new Date();
 const currentIndex=now.getFullYear()*12+now.getMonth();
 const dueIndex=Number(m[1])*12+(Number(m[2])-1);
 return currentIndex>=dueIndex;
}
function activateDueMaintenanceV042L(){
 let changed=false;
 (state.maintenance||[]).forEach(x=>{
  if(Number(x.intervalMonths)>0 && x.status==='Geplant' && maintenanceIsDueNowV042L(x)){
   x.status='Offen';
   x.activatedAt=new Date().toISOString();
   changed=true;
  }
 });
 return changed;
}

function planningPriorityWeightV043L(priority){
 const p=String(priority||'Mittel');
 if(p==='Sofort')return 4;
 if(p==='Hoch')return 3;
 if(p==='Mittel')return 2;
 if(p==='Niedrig')return 1;
 return 2;
}
function planningDueTimestampV043L(x,isTask){
 if(!x?.due)return Number.MAX_SAFE_INTEGER;
 const d=isTask?taskDueMonthDateV34(x.due):maintenanceMonthDueDateV040L(x.due);
 return d && !Number.isNaN(d.getTime()) ? d.getTime() : Number.MAX_SAFE_INTEGER;
}
function planningCompletedTimestampV043L(x){
 const t=Date.parse(x.completedAt||x.lastCompletedAt||'');
 return Number.isFinite(t)?t:0;
}
function planningSortV043L(items,type){
 const isTask=type==='task';
 return [...(items||[])].sort((a,b)=>{
  const aDone=a.status==='Erledigt',bDone=b.status==='Erledigt';
  const aPlanned=!isTask&&a.status==='Geplant',bPlanned=!isTask&&b.status==='Geplant';

  // 1. Erledigte immer ganz nach unten.
  if(aDone!==bDone)return aDone?1:-1;

  // 2. Geplante Wartungen stehen unter den aktuell offenen/fälligen,
  //    aber noch über erledigten Einträgen.
  if(!aDone&&!bDone&&aPlanned!==bPlanned)return aPlanned?1:-1;

  // 3. Erledigte: zuletzt erledigte zuerst innerhalb des unteren Blocks.
  if(aDone&&bDone)return planningCompletedTimestampV043L(b)-planningCompletedTimestampV043L(a);

  // 4. Geplante: streng nach nächstem Termin.
  if(aPlanned&&bPlanned){
   const dueDiff=planningDueTimestampV043L(a,false)-planningDueTimestampV043L(b,false);
   if(dueDiff!==0)return dueDiff;
   return planningPriorityWeightV043L(b.priority)-planningPriorityWeightV043L(a.priority);
  }

  // 5. Offene/fällige: Mix aus Datum und Priorität.
  //    Zuerst deutlich überfällig/fällig nach Datum; bei ähnlicher Fälligkeit
  //    entscheidet die höhere Priorität.
  const now=Date.now();
  const aDue=planningDueTimestampV043L(a,isTask);
  const bDue=planningDueTimestampV043L(b,isTask);
  const day=86400000;
  const aDays=aDue===Number.MAX_SAFE_INTEGER?99999:Math.floor((aDue-now)/day);
  const bDays=bDue===Number.MAX_SAFE_INTEGER?99999:Math.floor((bDue-now)/day);

  function urgencyBucket(days){
   if(days<0)return 0;       // überfällig
   if(days<=30)return 1;     // sehr bald
   if(days<=90)return 2;     // bald
   if(days<=180)return 3;    // mittelfristig
   return 4;                 // später / ohne Termin
  }

  const aBucket=urgencyBucket(aDays),bBucket=urgencyBucket(bDays);
  if(aBucket!==bBucket)return aBucket-bBucket;

  // Innerhalb desselben Zeitfensters zuerst die höhere Priorität.
  const priorityDiff=planningPriorityWeightV043L(b.priority)-planningPriorityWeightV043L(a.priority);
  if(priorityDiff!==0)return priorityDiff;

  // Danach das frühere Datum.
  return aDue-bDue;
 });
}
function updatePlanningHeaderV40(){
 const tasks=state.tasks||[],maintenance=state.maintenance||[];
 const openTasks=tasks.filter(x=>x.status!=='Erledigt').length;
 const openMaint=maintenance.filter(x=>x.status==='Offen').length;
 if($('#planningTaskCount'))$('#planningTaskCount').textContent=tasks.length;
 if($('#planningMaintenanceCount'))$('#planningMaintenanceCount').textContent=maintenance.length;
 if($('#taskOpenTabCount'))$('#taskOpenTabCount').textContent=`${openTasks} offen`;
 const plannedMaint=maintenance.filter(x=>x.status==='Geplant').length;
 if($('#maintenanceTabCount'))$('#maintenanceTabCount').textContent=`${openMaint} offen · ${plannedMaint} geplant`;
}

function planningGroupHtmlV043L(items,type){
 const isTask=type==='task';
 const open=items.filter(x=>x.status==='Offen');
 const planned=isTask?[]:items.filter(x=>x.status==='Geplant');
 const done=items.filter(x=>x.status==='Erledigt');

 const parts=[];
 if(open.length){
  parts.push(`<div class="planning-section-label-v043l current"><span>Jetzt wichtig</span><small>${open.length} ${open.length===1?'Eintrag':'Einträge'}</small></div>`);
  parts.push(open.map(x=>planningCard(x,type)).join(''));
 }
 if(planned.length){
  parts.push(`<div class="planning-section-label-v043l planned"><span>Als Nächstes geplant</span><small>${planned.length} ${planned.length===1?'Wartung':'Wartungen'}</small></div>`);
  parts.push(planned.map(x=>planningCard(x,type)).join(''));
 }
 if(done.length){
  parts.push(`<div class="planning-section-label-v043l done"><span>Erledigt</span><small>${done.length} ${done.length===1?'Eintrag':'Einträge'}</small></div>`);
  parts.push(done.map(x=>planningCard(x,type)).join(''));
 }
 return parts.join('');
}


function openTaskModalV074L(task=null){
 const f=$('#taskForm');if(!f)return;
 f.reset();
 f.elements.id.value=task?.id||'';
 f.elements.title.value=task?.title||'';
 f.elements.propertyId.value=task?.propertyId??'all';
 f.elements.due.value=task?.due||'';
 f.elements.priority.value=task?.priority||'Mittel';
 f.elements.note.value=task?.note||'';
 f.dataset.currentPhoto=task?.photo||'';
 if(f.elements.photoFile)f.elements.photoFile.value='';
 updateTaskPhotoPreviewV35(task?.photo||'');
 const title=$('#taskModalTitleV074L');
 if(title)title.textContent=task?'Aufgabe bearbeiten':'Aufgabe hinzufügen';
 $('#taskModal').showModal();
}
function editTaskV074L(id){
 const task=(state.tasks||[]).find(x=>Number(x.id)===Number(id));
 if(task)openTaskModalV074L(task);
}
function deletePlanningHistoryV074L(id){
 if(typeof currentRoleV27==='function' && currentRoleV27()!=='admin'){
  alert('Nur der Administrator darf Verlaufseinträge löschen.');
  return;
 }
 if(!confirm('Diesen Eintrag wirklich aus dem Verlauf löschen?'))return;
 state.planningHistory=(state.planningHistory||[]).filter(x=>Number(x.id)!==Number(id));
 save();
}
window.editTaskV074L=editTaskV074L;
window.deletePlanningHistoryV074L=deletePlanningHistoryV074L;

function renderPlanningHistoryV044L(){
 const box=$('#planningHistoryList');if(!box)return;
 const rows=[...(state.planningHistory||[])].sort((a,b)=>String(b.completedAt||'').localeCompare(String(a.completedAt||'')));
 if($('#historyTabCount'))$('#historyTabCount').textContent=`${rows.length} Einträge`;
 if(!rows.length){
  box.innerHTML='<div class="planning-empty-v40"><span>🕘</span><strong>Noch kein Verlauf vorhanden</strong><small>Erledigte Aufgaben und Wartungen erscheinen hier dauerhaft.</small></div>';
  return;
 }
 box.innerHTML=`<div class="history-intro-v044l"><strong>Erledigungsverlauf</strong><span>Nur Information · wird nicht automatisch gelöscht</span></div>`+
 rows.map(r=>{
  const isMaintenance=r.type==='maintenance';
  const date=r.completedAt?new Date(r.completedAt).toLocaleDateString('de-DE'):'–';
  const time=r.completedAt?new Date(r.completedAt).toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'}):'';
  return `<article class="history-card-v044l">
   <div class="history-icon-v044l ${isMaintenance?'maintenance':'task'}">${isMaintenance?'🔧':'☑'}</div>
   <div class="history-main-v044l">
    <div class="history-title-v044l"><strong>${esc(r.title)}</strong><span>${isMaintenance?'Wartung':'Aufgabe'}</span></div>
    <div class="history-meta-v044l">
     <span>🏠 ${esc(propertyName(r.propertyId))}</span>
     <span>✅ ${date}${time?' · '+time:''}</span>
     <span>👤 ${esc(r.completedByName||'Lokaler Benutzer')}</span>
     ${isMaintenance&&Number(r.intervalMonths)>0?`<span>🔁 ${esc(maintenanceIntervalLabelV041L(r.intervalMonths))}</span>`:''}
     ${r.cost?`<span>💶 ${eur(r.cost)}</span>`:''}
    </div>
    ${r.note?`<div class="history-note-v044l">${esc(r.note)}</div>`:''}
    ${typeof currentRoleV27==='function'&&currentRoleV27()==='admin'
      ?`<div class="history-admin-actions-v074l"><button type="button" class="danger small" onclick="deletePlanningHistoryV074L(${r.id})">Eintrag löschen</button></div>`
      :''}
   </div>
  </article>`;
 }).join('');
}
function renderTasks(){
 updatePlanningHeaderV40();

 const tasks=planningSortV043L(state.tasks||[],'task');
 const maintenance=planningSortV043L(state.maintenance||[],'maintenance');

 $('#taskList').innerHTML=tasks.length
  ?planningGroupHtmlV043L(tasks,'task')
  :'<div class="planning-empty-v40"><span>☑</span><strong>Noch keine Aufgaben</strong><small>Neue Aufgaben kannst du oben hinzufügen.</small></div>';

 $('#maintenanceList').innerHTML=maintenance.length
  ?planningGroupHtmlV043L(maintenance,'maintenance')
  :'<div class="planning-empty-v40"><span>🔧</span><strong>Noch keine Wartungen</strong><small>Lege regelmäßige Wartungen für deine Häuser an.</small></div>';
 renderPlanningHistoryV044L();
}
function planningCard(x,type){
 const isTask=type==='task',done=x.status==='Erledigt',planned=!isTask&&x.status==='Geplant';
 const due=planningDueInfoV40(x,isTask);
 const priority=x.priority||'Mittel';
 const visual=isTask&&x.photo
  ?`<img class="planning-card-photo-v40" src="${x.photo}" alt="${esc(x.title)}">`
  :`<div class="planning-card-icon-v40 ${isTask?'task':'maintenance'}">${isTask?'☑':maintenanceIconV40(x.title)}</div>`;
 const note=x.note?`<span class="planning-note-v40 planning-task-note-v074l">📝 ${esc(x.note)}</span>`:'';
 return `<article class="planning-card-v40 ${done?'is-done':planned?'is-planned':''}">
  <div class="planning-card-check-v40">${done?'✓':planned?'◷':'○'}</div>
  ${visual}
  <div class="planning-card-content-v40">
   <div class="planning-card-main-v40">
    <div class="planning-card-title-v40"><strong>${esc(x.title)}</strong>${note}</div>
    <div class="planning-card-meta-v40">
     <span class="planning-date-v40 ${due.status}">📅 <b>${esc(due.label)}</b><small>${esc(due.hint)}</small></span>
     <span>🏠 <b>${esc(propertyName(x.propertyId))}</b></span>
     ${!isTask?`<span>🔁 <b>${esc(maintenanceIntervalLabelV041L(x.intervalMonths))}</b></span>`:''}
     ${!isTask&&x.lastCompletedMonth?`<span class="planning-completed-v40">✓ Zuletzt erledigt <b>${esc(maintenanceMonthLabelV040L(x.lastCompletedMonth))}</b></span>`:''}
     ${!isTask&&done&&Number(x.intervalMonths)===0&&x.completedAt?`<span class="planning-delete-info-v041l">🗑 Wird 7 Tage nach Erledigung automatisch entfernt</span>`:''}
     ${!isTask&&Number(x.cost)>0?`<span>💶 <b>${eur(x.cost)}</b></span>`:''}
     ${done&&x.completedByName?`<span class="planning-completed-v40">✓ Erledigt von <b>${esc(x.completedByName)}</b></span>`:''}
    </div>
   </div>
   <div class="planning-card-side-v40">
    <span class="planning-priority-v40 ${planningPriorityClassV40(priority)}">${esc(priority)} ${planningPriorityIconV40(priority)}</span>
    <div class="planning-card-actions-v40">
     ${done
 ?`<span class="planning-done-badge-v40">Erledigt</span>`
 :planned
  ?`<span class="planning-planned-badge-v042l">Geplant bis ${esc(maintenanceMonthLabelV040L(x.due))}</span>`
  :`<button class="primary small" onclick="completeItem('${type}',${x.id})">Erledigen</button>`}
     ${isTask&&!done?`<button class="secondary small" onclick="editTaskV074L(${x.id})">Bearbeiten</button>`:''}
     <button class="danger small" onclick="deletePlanning('${type}',${x.id})">Löschen</button>
    </div>
   </div>
  </div>
 </article>`;
}

function loanLifetimeStatsV063L(l){
 const future=loanFutureScheduleV062L(l,1200);
 const current=loanCurrentStateV062L(l);
 const futureInterest=future.reduce((s,r)=>s+r.interest,0);
 const futurePayments=future.reduce((s,r)=>s+r.payment+r.extra,0);
 return {
  remaining:current.remaining,
  monthsRemaining:future.length,
  futureInterest,
  futurePayments,
  payoffDate:future.length?loanDateForOffsetV062L(future.length-1):'–'
 };
}
function loanYearsMonthsV063L(months){
 months=Math.max(0,Number(months)||0);
 const y=Math.floor(months/12),m=months%12;
 if(!months)return '0 Monate';
 if(!y)return `${m} Monat${m===1?'':'e'}`;
 if(!m)return `${y} Jahr${y===1?'':'e'}`;
 return `${y} J. ${m} M.`;
}

function loanContractEndV067L(l){
 const years=Math.max(0,Number(l?.contractYears)||0);
 if(!years||!l?.startDate)return '–';
 const d=new Date(l.startDate+'T12:00:00');
 if(Number.isNaN(d.getTime()))return '–';
 d.setFullYear(d.getFullYear()+years);
 return d.toLocaleDateString('de-DE',{month:'2-digit',year:'numeric'});
}
function currentLoansV061L(){return Array.isArray(state.loans)?state.loans:[]}
function loanTotalsV061L(){
 const loans=currentLoansV061L();
 return loans.reduce((a,l)=>{
  const c=loanCurrentStateV062L(l),n=loanNextSplitV062L(l);
  a.original+=Number(l.original)||0;
  a.remaining+=c.remaining;
  a.paid+=c.paidPrincipal;
  a.monthlyPayment+=Number(l.monthlyPayment)||0;
  a.nextInterest+=n.interest;
  a.nextPrincipal+=n.principal;
  a.nextExtra+=n.extra;
  return a;
 },{original:0,remaining:0,paid:0,monthlyPayment:0,nextInterest:0,nextPrincipal:0,nextExtra:0});
}
function loanFixedYearsV062L(l){
 if(!l?.startDate||!l?.fixedUntil)return '–';
 const a=new Date(l.startDate+'T12:00:00'),b=new Date(l.fixedUntil+'T12:00:00');
 if(Number.isNaN(a)||Number.isNaN(b))return '–';
 const months=Math.max(0,(b.getFullYear()-a.getFullYear())*12+(b.getMonth()-a.getMonth()));
 const years=Math.floor(months/12),rest=months%12;
 return rest?`${years} J. ${rest} M.`:`${years} Jahre`;
}
function loanInitialPrincipalRateV062L(l){
 const original=Number(l?.original)||0;
 if(!original)return 0;
 return Math.max(0,(Number(l.monthlyPayment)||0)*12/original*100-(Number(l.interest)||0));
}
function loanEndFixedDebtV062L(l){
 if(!l?.fixedUntil)return null;
 const now=new Date(),end=new Date(l.fixedUntil+'T12:00:00');
 let months=Math.max(0,(end.getFullYear()-now.getFullYear())*12+(end.getMonth()-now.getMonth()));
 const sched=loanFutureScheduleV062L(l,Math.min(months+1,600));
 if(months<=0)return loanCurrentStateV062L(l).remaining;
 if(!sched.length)return loanCurrentStateV062L(l).remaining;
 return sched[Math.min(months-1,sched.length-1)]?.remaining ?? sched[sched.length-1].remaining;
}
function loanTotalFutureInterestV062L(l){
 return loanFutureScheduleV062L(l,600).reduce((s,r)=>s+r.interest,0);
}
function renderLoanDetailCardsV062L(loans){
 const box=$('#loanManagerList'); if(!box)return;
 if(!loans.length){box.innerHTML='<div class="empty">Noch kein Kredit eingetragen.</div>';return}
 box.innerHTML=loans.map((l,index)=>{
  const c=loanCurrentStateV062L(l),next=loanNextSplitV062L(l),life=loanLifetimeStatsV063L(l);
  const pct=Number(l.original)>0?Math.min(100,Math.max(0,c.paidPrincipal/Number(l.original)*100)):0;
  const endDebt=loanEndFixedDebtV062L(l);
  return `<article class="loan-detail-card-v062l">
   <div class="loan-detail-top-v062l">
    <div class="loan-detail-index-v062l">${index+1}</div>
    <div class="loan-detail-name-v062l">
      <span>${esc(l.bank||'Kreditgeber nicht eingetragen')}</span>
      <h3>${esc(l.name||`Kredit ${index+1}`)}</h3>
    </div>
    <div class="loan-detail-rate-v062l"><span>Monatsrate</span><strong>${eur(l.monthlyPayment)}</strong></div>
    <div class="loan-detail-actions-v062l"><button class="secondary small" onclick="editLoanV061L('${l.id}')">Bearbeiten</button><button class="danger small" onclick="deleteLoanV061L('${l.id}')">Löschen</button></div>
   </div>
   <div class="loan-detail-primary-v062l">
     <div><span>Darlehen</span><strong>${eur(l.original)}</strong></div>
     <div><span>Restschuld</span><strong>${eur(c.remaining)}</strong></div>
     <div><span>Sollzins</span><strong>${Number(l.interest||0).toLocaleString('de-DE',{maximumFractionDigits:3})} %</strong></div>
     <div><span>Zinsbindung</span><strong>${loanFixedYearsV062L(l)}</strong></div>
     <div><span>Vertragslaufzeit</span><strong>${Number(l.contractYears)>0?`${Number(l.contractYears)} Jahre`:'–'}</strong></div>
     <div><span>Getilgt</span><strong>${pct.toLocaleString('de-DE',{maximumFractionDigits:1})} %</strong></div>
   </div>
   <div class="loan-detail-secondary-v062l">
     <div><span>Anfängliche Tilgung ca.</span><strong>${loanInitialPrincipalRateV062L(l).toLocaleString('de-DE',{maximumFractionDigits:2})} %</strong></div>
     <div><span>Zinsen nächster Monat</span><strong>${eur(next.interest)}</strong></div>
     <div><span>Tilgung nächster Monat</span><strong>${eur(next.principal)}</strong></div>
     <div><span>Sondertilgung nächster Monat</span><strong>${next.extra>0?eur(next.extra):'–'}</strong></div>
     <div><span>Restlaufzeit ca.</span><strong>${loanYearsMonthsV063L(life.monthsRemaining)}</strong></div>
     <div><span>Restschuld Ende Zinsbindung</span><strong>${endDebt==null?'–':eur(endDebt)}</strong></div>
   </div>
   <div class="loan-detail-tertiary-v063l">
     <span>Voraussichtliche weitere Zinsen: <strong>${eur(life.futureInterest)}</strong></span>
     <span>Voraussichtlich schuldenfrei: <strong>${life.payoffDate}</strong></span>
     ${Number(l.contractYears)>0?`<span>Vertragliches Laufzeitende: <strong>${loanContractEndV067L(l)}</strong></span>`:''}
     ${Number(l.effectiveInterest)>0?`<span>Effektivzins: <strong>${Number(l.effectiveInterest).toLocaleString('de-DE',{maximumFractionDigits:3})} %</strong></span>`:''}
     ${Number(l.extraPayment)>0?`<span>Max. Sondertilgung: <strong>${eur(l.extraPayment)} / Jahr</strong></span>`:''}
   </div>
   <div class="loan-detail-progress-v062l"><i style="width:${pct}%"></i></div>
  </article>`;
 }).join('');
}
function loanSelectOptionsV062L(){
 return `<option value="all">Alle Kredite</option>`+currentLoansV061L().map((l,i)=>`<option value="${esc(l.id)}">${esc(l.name||`Kredit ${i+1}`)}</option>`).join('');
}
function selectedLoansV062L(value){
 return value==='all'?currentLoansV061L():currentLoansV061L().filter(l=>String(l.id)===String(value));
}
function renderLoanChartV062L(){
 const select=$('#loanChartSelectV062L'),box=$('#loanBalanceChartV062L'); if(!select||!box)return;
 const loans=selectedLoansV062L(select.value||'all');
 const rows=loanCombinedScheduleV062L(loans,360);
 const start=loans.reduce((s,l)=>s+loanCurrentStateV062L(l).remaining,0);
 if(!rows.length||start<=0){box.innerHTML='<div class="empty">Keine Restschuld für eine Prognose vorhanden.</div>';return}
 const sample=[{monthIndex:-1,remaining:start},...rows.filter((r,i)=>i%6===5||i===rows.length-1)];
 const max=Math.max(start,...sample.map(r=>r.remaining),1);
 const w=640,h=210,pad=24;
 const pts=sample.map((r,i)=>{
  const x=pad+(w-pad*2)*(i/Math.max(sample.length-1,1));
  const y=pad+(h-pad*2)*(1-r.remaining/max);
  return `${x.toFixed(1)},${y.toFixed(1)}`;
 }).join(' ');
 const years=Math.ceil(rows.length/12);
 box.innerHTML=`<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Restschuld-Verlauf">
   <line x1="${pad}" y1="${h-pad}" x2="${w-pad}" y2="${h-pad}" class="loan-chart-axis-v062l"/>
   <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${h-pad}" class="loan-chart-axis-v062l"/>
   <polyline points="${pts}" class="loan-chart-line-v062l"/>
   <text x="${pad}" y="${h-5}" class="loan-chart-label-v062l">0</text>
   <text x="${w-pad}" y="${h-5}" text-anchor="end" class="loan-chart-label-v062l">${years} Jahre</text>
   <text x="${pad+4}" y="${pad+10}" class="loan-chart-label-v062l">${Math.round(max).toLocaleString('de-DE')} €</text>
  </svg>
  <div class="loan-chart-foot-v062l"><span>Aktuell <strong>${eur(start)}</strong></span><span>Prognose bis <strong>${loanDateForOffsetV062L(rows.length-1)}</strong></span></div>`;
}
function renderLoanRateDonutV062L(){
 const box=$('#loanRateDonutV062L'); if(!box)return;
 const loans=currentLoansV061L();
 const split=loans.reduce((a,l)=>{
  const n=loanNextSplitV062L(l);
  a.interest+=n.interest;
  a.principal+=n.principal;
  a.payment+=n.payment;
  a.extra+=n.extra;
  return a;
 },{interest:0,principal:0,payment:0,extra:0});
 const total=Math.max(split.interest+split.principal,0);
 const interestPct=total?split.interest/total*100:0;
 box.innerHTML=`<div class="loan-rate-donut-v062l" style="--interest:${interestPct}%">
   <div><strong>${eur(split.payment)}</strong><span>reguläre Monatsrate</span></div>
  </div>
  <div class="loan-rate-legend-v062l">
   <div><i class="interest"></i><span>Zinsen</span><strong>${eur(split.interest)}</strong></div>
   <div><i class="principal"></i><span>Tilgung</span><strong>${eur(split.principal)}</strong></div>
   ${split.extra>0?`<div><i class="extra-v064l"></i><span>Sondertilgung</span><strong>${eur(split.extra)}</strong></div>`:''}
  </div>`;
}
function renderLoanPlanV062L(){
 const select=$('#loanPlanSelectV062L'),box=$('#loanPlanRowsV062L'); if(!select||!box)return;

 let loans=selectedLoansV062L(select.value||'all');

 // Wenn der Tilgungsrechner aktiv ist und dieselbe Auswahl betrifft,
 // wird die Vorschau direkt im Tilgungsplan verwendet.
 if(Number(loanCalculatorV065L.annualExtra)>0){
  const calcSel=loanCalculatorV065L.selection||'all';
  const planSel=select.value||'all';
  if(calcSel===planSel){
   loans=loanSchedulesWithCalculatorV065L();
  }
 }

 const rows=loanCombinedScheduleV062L(loans,240);
 box.innerHTML=rows.length?rows.slice(0,120).map((r,i)=>`<div class="loan-plan-row-v062l">
  <span>${loanDateForOffsetV062L(i)}</span>
  <strong>${eur(r.payment)}</strong>
  <span>${eur(r.interest)}</span>
  <span>${eur(r.principal)}</span>
  <span class="${r.extra>0?'loan-extra-payment-v064l':''}">${r.extra>0?eur(r.extra):'–'}</span>
  <strong>${eur(r.remaining)}</strong>
 </div>`).join(''):'<div class="empty">Kein Tilgungsplan verfügbar.</div>';
}

function renderLoanCalculatorV065L(){
 const select=$('#loanCalculatorSelectV065L');
 const input=$('#loanAnnualExtraInputV065L');
 const monthSelect=$('#loanExtraMonthV066L');
 const hint=$('#loanExtraMaxHintV066L');
 const box=$('#loanCalcResultV065L');
 if(!select||!input||!box)return;

 const opts=loanSelectOptionsV062L();
 const old=loanCalculatorV065L.selection||select.value||'all';
 select.innerHTML=opts;
 if([...select.options].some(o=>o.value===old))select.value=old;
 else select.value='all';
 loanCalculatorV065L.selection=select.value;

 const maxExtra=loanCalculatorMaxExtraV066L();
 input.max=maxExtra>0?String(maxExtra):'0';
 if(hint)hint.textContent=maxExtra>0
  ?`Maximal laut Kredit: ${eur(maxExtra)} pro Jahr`
  :'Für diesen Kredit ist keine Sondertilgung hinterlegt.';

 if(document.activeElement!==input)input.value=loanCalculatorV065L.annualExtra||'';

 if(monthSelect){
  monthSelect.value=String(loanCalculatorV065L.month||8);
 }

 const baseLoans=selectedLoansForCalculatorV065L();
 const calcLoans=loanSchedulesWithCalculatorV065L();
 if(!baseLoans.length){
  box.innerHTML='<div class="empty">Kein Kredit ausgewählt.</div>';
  return;
 }

 const baseMonths=loanMaxMonthsV065L(baseLoans);
 const calcMonths=loanMaxMonthsV065L(calcLoans);
 const baseInterest=loanFutureInterestSumV065L(baseLoans);
 const calcInterest=loanFutureInterestSumV065L(calcLoans);
 const saved=Math.max(0,baseInterest-calcInterest);
 const earlier=Math.max(0,baseMonths-calcMonths);

 box.innerHTML=`
  <div><span>Restlaufzeit aktuell</span><strong>${loanYearsMonthsV063L(baseMonths)}</strong></div>
  <div><span>Mit ${eur(loanCalculatorV065L.annualExtra)} im ${monthNameV066L(loanCalculatorV065L.month)}</span><strong>${loanYearsMonthsV063L(calcMonths)}</strong></div>
  <div><span>Zinsersparnis</span><strong>${eur(saved)}</strong></div>
  <div><span>Früher schuldenfrei</span><strong>${earlier?monthsDifferenceTextV065L(earlier):'–'}</strong></div>`;
}
function applyLoanCalculatorV065L(){
 const select=$('#loanCalculatorSelectV065L');
 const input=$('#loanAnnualExtraInputV065L');
 const monthSelect=$('#loanExtraMonthV066L');

 loanCalculatorV065L.selection=select?.value||'all';
 loanCalculatorV065L.month=Math.min(12,Math.max(1,Number(monthSelect?.value)||8));

 const maxExtra=loanCalculatorMaxExtraV066L();
 let entered=Math.max(0,Number(input?.value)||0);

 if(maxExtra<=0 && entered>0){
  alert('Für den ausgewählten Kredit ist keine Sondertilgung hinterlegt.');
  entered=0;
 }
 if(maxExtra>0 && entered>maxExtra){
  entered=maxExtra;
  if(input)input.value=String(maxExtra);
  alert(`Maximal mögliche Sondertilgung laut Kredit: ${eur(maxExtra)}.`);
 }
 loanCalculatorV065L.annualExtra=entered;

 const plan=$('#loanPlanSelectV062L');
 if(plan && [...plan.options].some(o=>o.value===loanCalculatorV065L.selection)){
  plan.value=loanCalculatorV065L.selection;
 }

 renderLoanCalculatorV065L();
 renderLoanPlanV062L();
}
function resetLoanCalculatorV065L(){
 loanCalculatorV065L.annualExtra=0;
 const input=$('#loanAnnualExtraInputV065L'); if(input)input.value='';
 renderLoanCalculatorV065L();
 renderLoanPlanV062L();
}
function renderLoanManagerV061L(){
 const loans=currentLoansV061L(),total=loanTotalsV061L();
 if($('#loanManagerCount'))$('#loanManagerCount').textContent=String(loans.length);
 if($('#loanManagerOriginal'))$('#loanManagerOriginal').textContent=eur(total.original);
 if($('#loanManagerRemaining'))$('#loanManagerRemaining').textContent=eur(total.remaining);
 if($('#loanManagerPayment'))$('#loanManagerPayment').textContent=eur(total.monthlyPayment);
 if($('#loanManagerPaidV062L'))$('#loanManagerPaidV062L').textContent=eur(total.paid);
 if($('#loanNextInterestV062L'))$('#loanNextInterestV062L').textContent=eur(total.nextInterest);
 if($('#loanNextPrincipalV062L'))$('#loanNextPrincipalV062L').textContent=eur(total.nextPrincipal);
 if($('#loanNextExtraV064L'))$('#loanNextExtraV064L').textContent=eur(total.nextExtra);
 if($('#loanAverageInterestV062L'))$('#loanAverageInterestV062L').textContent=loanWeightedInterestV062L(loans).toLocaleString('de-DE',{maximumFractionDigits:2})+' %';

 const add=$('#addLoanBtn');
 if(add){add.disabled=loans.length>=10;add.textContent=loans.length>=10?'Maximum 10 Kredite':'+ Kredit hinzufügen'}

 renderLoanDetailCardsV062L(loans);

 const opts=loanSelectOptionsV062L();
 const chartSel=$('#loanChartSelectV062L'),planSel=$('#loanPlanSelectV062L');
 if(chartSel){
  const old=chartSel.value||'all';chartSel.innerHTML=opts;
  if([...chartSel.options].some(o=>o.value===old))chartSel.value=old;
 }
 if(planSel){
  const old=planSel.value||'all';planSel.innerHTML=opts;
  if([...planSel.options].some(o=>o.value===old))planSel.value=old;
 }
 renderLoanChartV062L();
 renderLoanRateDonutV062L();
 renderLoanCalculatorV065L();
 renderLoanPlanV062L();
}
function openLoanV061L(id=null){
 const loans=currentLoansV061L();
 if(!id&&loans.length>=10){alert('Es können maximal 10 Kredite angelegt werden.');return}
 const l=id?loans.find(x=>String(x.id)===String(id)):null,f=$('#loanForm');
 f.reset();
 f.elements.id.value=l?.id||'';f.elements.name.value=l?.name||'';f.elements.bank.value=l?.bank||'';
 f.elements.original.value=l?.original??'';f.elements.remaining.value=l?.remaining??'';f.elements.balanceDate.value=l?.balanceDate||'';
 f.elements.interest.value=l?.interest??'';f.elements.monthlyPayment.value=l?.monthlyPayment??'';f.elements.startDate.value=l?.startDate||'';
 f.elements.fixedUntil.value=l?.fixedUntil||'';f.elements.extraPayment.value=l?.extraPayment??0;f.elements.autoCalculate.checked=l?.autoCalculate!==false;
 f.elements.effectiveInterest.value=l?.effectiveInterest??'';
 f.elements.commitmentInterest.value=l?.commitmentInterest??'';
 f.elements.paymentFreeMonths.value=l?.paymentFreeMonths??0;
 f.elements.notes.value=l?.notes||'';
 f.elements.contractYears.value=l?.contractYears??'';
 f.dataset.originalLoan=id?JSON.stringify(l):'';
 $('#loanModalTitle').textContent=l?'Kredit bearbeiten':'Kredit hinzufügen';
 renderLoanPreviewV063L();
 $('#loanModal').showModal();
}
function editLoanV061L(id){openLoanV061L(id)}
function deleteLoanV061L(id){
 const l=currentLoansV061L().find(x=>String(x.id)===String(id));
 if(!l||!confirm(`Kredit „${l.name||l.bank||'Kredit'}“ wirklich löschen?`))return;
 state.loans=state.loans.filter(x=>String(x.id)!==String(id));save();
}
function renderSettings(){renderLoanManagerV061L();$('#settingName').value=state.settings.name;$('#settingStartBalance').value=state.settings.startBalance;$('#settingMinimumReserve').value=state.settings.minimumReserve;$('#settingMonthlyReserve').value=state.settings.monthlyReserve;applyThemeV38()}
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
function openPropertyModal(x=null){const f=$('#propertyForm');f.reset();propertyPhotoData=x?.photo||'';$('#propertyModalTitle').textContent=x?'Objekt bearbeiten':'Objekt hinzufügen';f.elements.id.value=x?.id||'';f.elements.name.value=x?.name||'';f.elements.address.value=x?.address||'';f.elements.area.value=x?.area??'';if(f.elements.estimatedValue)f.elements.estimatedValue.value=x?.estimatedValue??'';f.elements.plotArea.value=x?.plotArea??'';f.elements.constructionYear.value=x?.constructionYear??'';f.elements.rooms.value=x?.rooms??'';f.elements.bathrooms.value=x?.bathrooms??'';f.elements.toilets.value=x?.toilets??'';f.elements.usage.value=x?.usage||'Eigennutzung';f.elements.energyClass.value=x?.energyClass||'';f.elements.heatingType.value=x?.heatingType||'';f.elements.notes.value=x?.notes||'';showPhotoPreview();$('#propertyModal').showModal()}
function showPhotoPreview(){const p=$('#propertyPhotoPreview');p.classList.toggle('hidden',!propertyPhotoData);p.innerHTML=propertyPhotoData?`<img src="${propertyPhotoData}" alt="Vorschau">`:''}
function editProperty(id){const x=state.properties.find(x=>x.id===id);if(x)openPropertyModal(x)}
function deleteProperty(id){const x=state.properties.find(x=>x.id===id);if(!x||!confirm(`Objekt „${x.name}“ löschen? Zugeordnete Planungen bleiben erhalten und werden dann als unbekannt angezeigt.`))return;state.properties=state.properties.filter(y=>y.id!==id);save()}
function renderCostPersonChoices(selectedIds=[]){
 const selected=new Set((selectedIds||[]).map(String));
 const box=$('#costPersonChoices');if(!box)return;
 const users=accountUsersV048L();
 box.innerHTML=users.length?users.map((user,index)=>`<label class="person-choice">
  <input type="checkbox" name="userIds" value="${esc(user.id)}" ${selected.has(String(user.id))?'checked':''}>
  <span><strong>Benutzer ${index+1}</strong><small>${esc(user.name)} · Kostenanteil ${Number(user.paymentShare||0).toLocaleString('de-DE',{maximumFractionDigits:2})} %</small></span>
 </label>`).join(''):'<div class="empty">Noch keine Benutzer im Konto vorhanden.</div>';
}
function openCostModal(x=null){
 const f=$('#costForm');f.reset();
 $('#costModalTitle').textContent=x?'Kostenposition bearbeiten':'Kostenposition hinzufügen';
 f.elements.id.value=x?.id||'';
 f.elements.category.value=x?.category||'';
 f.elements.name.value=x?.name||'';
 renderCostPersonChoices(x?.userIds||[]);
 f.elements.propertyId.value=String(x?.propertyId??'all');
 f.elements.amount.value=x?.amount??'';
 f.elements.interval.value=x?.interval||'monthly';
 f.elements.dueTiming.value=inferCostDueTimingV047L(x);
 f.elements.note.value=x?.note||'';
 $('#costModal').showModal()
}
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
function completeItem(type,id){
 const arr=type==='task'?state.tasks:state.maintenance;
 const x=arr.find(v=>Number(v.id)===Number(id));if(!x)return;

 const user=typeof currentAuthUserV27==='function'?currentAuthUserV27():null;
 const tenant=typeof currentTenantV27==='function'?currentTenantV27():null;
 const completedBy=user?.displayName||user?.username||tenant?.adminName||'Lokaler Benutzer';
 const nowIso=new Date().toISOString();

 if(type==='maintenance'){
  const interval=Number(x.intervalMonths)||0;

  // Jeder Abschluss einer Wartung wird dauerhaft im Verlauf protokolliert.
  addPlanningHistoryV044L(x,'maintenance',completedBy,nowIso);

  if(interval>0){
   const completedMonth=currentMonthValueV041L();
   x.lastCompletedAt=nowIso;
   x.lastCompletedMonth=completedMonth;
   x.completedByName=completedBy;
   x.completedByUserId=user?.id||'';
   x.completedByUsername=user?.username||'';
   x.completedByAccountId=tenant?.id||'';

   const baseMonth=/^\d{4}-\d{2}/.test(String(x.due||''))?String(x.due).slice(0,7):completedMonth;
   x.due=addMonthsToMonthValueV041L(baseMonth,interval);
   x.status='Geplant';
   x.activatedAt='';
   save();
   return;
  }

  x.status='Erledigt';
  x.completedAt=nowIso;
  x.completedMonth=currentMonthValueV041L();
  x.completedByName=completedBy;
  x.completedByUserId=user?.id||'';
  x.completedByUsername=user?.username||'';
  x.completedByAccountId=tenant?.id||'';
  save();
  return;
 }

 // Aufgaben: Verlauf dauerhaft speichern, aktive Aufgabe 7 Tage sichtbar.
 addPlanningHistoryV044L(x,'task',completedBy,nowIso);
 x.status='Erledigt';
 x.completedAt=nowIso;
 x.completedMonth=currentMonthValueV041L();
 x.completedByName=completedBy;
 x.completedByUserId=user?.id||'';
 x.completedByUsername=user?.username||'';
 x.completedByAccountId=tenant?.id||'';
 save();
}
function deletePlanning(type,id){if(!confirm('Eintrag wirklich löschen?'))return;const key=type==='task'?'tasks':type==='maintenance'?'maintenance':'reserves';state[key]=state[key].filter(x=>x.id!==id);save()}
function openLoan(){openLoanV061L(null)}
function switchView(name){
 $$('.view').forEach(v=>{
  const active=v.dataset.view===name;
  v.classList.toggle('active',active);
  v.setAttribute('aria-hidden',active?'false':'true');
 });
 $$('.bottom-nav .nav-item').forEach(b=>b.classList.toggle('active',b.dataset.target===name));
 const titles={dashboard:'Übersicht',transactions:'Hauskonto',properties:'Objekte',tasks:'Planung',vehicles:'Fahrzeuge',settings:'Einstellungen'};
 $('#pageTitle').textContent=titles[name]||'Hausverwaltung';
 window.scrollTo({top:0,behavior:'smooth'});
}
$$('.bottom-nav .nav-item').forEach(b=>b.addEventListener('click',()=>switchView(b.dataset.target)));$$('[data-go]').forEach(b=>b.addEventListener('click',()=>switchView(b.dataset.go)));$$('[data-modal]').forEach(b=>b.addEventListener('click',()=>{const m=b.dataset.modal;if(m==='ownerModal')openOwnerModal();else if(m==='propertyModal'){if((state.properties||[]).length>=5){alert('Es können maximal 5 Objekte angelegt werden.');return}openPropertyModal();}else if(m==='costModal')openCostModal();else if(m==='loanModal')openLoan();else document.getElementById(m).showModal()}));
$$('[data-task-tab]').forEach(b=>b.addEventListener('click',()=>{
 activePlanningTab=b.dataset.taskTab;
 $$('[data-task-tab]').forEach(x=>x.classList.toggle('active',x===b));
 $('#taskList').classList.toggle('hidden',activePlanningTab!=='tasks');
 $('#maintenanceList').classList.toggle('hidden',activePlanningTab!=='maintenance');
 $('#planningHistoryList').classList.toggle('hidden',activePlanningTab!=='history');

 const addBtn=$('#planningAddBtn');
 if(activePlanningTab==='history'){
  addBtn.classList.add('hidden');
 }else{
  addBtn.classList.remove('hidden');
  addBtn.innerHTML=activePlanningTab==='tasks'?'<span>+ Aufgabe hinzufügen</span>':'<span>+ Wartung hinzufügen</span>';
 }
 renderTasks();
}));



document.addEventListener('click',e=>{
 const btn=e.target.closest?.('[data-user-toggle]');
 if(!btn)return;
 e.preventDefault();
 e.stopPropagation();
 const token=btn.getAttribute('data-user-toggle');
 if(!token)return;
 toggleOwnerCostDetailsV045L(decodeURIComponent(token));
});

$('#planningAddBtn').addEventListener('click',()=>{
 if(activePlanningTab==='history')return;
 if(activePlanningTab==='tasks'){openTaskModalV074L(null);return}
 const modal=document.getElementById('maintenanceModal');
 if(modal)modal.showModal();
});
$('#wastePrev').addEventListener('click',()=>changeWasteMonth(-1));
$('#wasteNext').addEventListener('click',()=>changeWasteMonth(1));
$('#wasteDateSave').addEventListener('click',saveWasteDateSelections);
$('#costForm').addEventListener('submit',e=>{
 e.preventDefault();
 const f=new FormData(e.target),id=Number(f.get('id')),userIds=f.getAll('userIds').map(String);
 if(!userIds.length){alert('Bitte mindestens einen Benutzer auswählen.');return}
 const data={
  category:String(f.get('category')||'').trim(),
  name:String(f.get('name')||'').trim(),
  userIds,
  splitCount:userIds.length,
  propertyId:f.get('propertyId'),
  amount:Number(f.get('amount')),
  interval:f.get('interval'),
  dueTiming:f.get('dueTiming')||'end',
  note:String(f.get('note')||'').trim()
 };
 if(id)Object.assign(state.costPlans.find(x=>x.id===id),data);
 else state.costPlans.push({id:Date.now(),paid:false,paidAt:'',...data});
 e.target.reset();$('#costModal').close();save()
});
$('#loanForm')?.addEventListener('input',renderLoanPreviewV063L);
$('#loanAcceptBankBalanceV063L')?.addEventListener('click',acceptBankBalanceV063L);

function loanFromFormV063L(){
 const f=$('#loanForm');if(!f)return null;
 const fd=new FormData(f);
 return {
  original:Number(fd.get('original'))||0,
  remaining:Number(fd.get('remaining'))||0,
  balanceDate:fd.get('balanceDate')||'',
  interest:Number(fd.get('interest'))||0,
  monthlyPayment:Number(fd.get('monthlyPayment'))||0,
  startDate:fd.get('startDate')||'',
  fixedUntil:fd.get('fixedUntil')||'',
  extraPayment:Number(fd.get('extraPayment'))||0,
  effectiveInterest:Number(fd.get('effectiveInterest'))||0,
  commitmentInterest:Number(fd.get('commitmentInterest'))||0,
  paymentFreeMonths:Math.max(0,Number(fd.get('paymentFreeMonths'))||0),
  autoCalculate:fd.get('autoCalculate')==='on'
 };
}
function renderLoanPreviewV063L(){
 const box=$('#loanCalculatedPreviewV063L');if(!box)return;
 const l=loanFromFormV063L();
 if(!l||!l.original||!l.remaining||!l.interest||!l.monthlyPayment){
  box.innerHTML='<span>Nach Eingabe der Grunddaten erscheint hier eine Vorschau der Berechnung.</span>';
  return;
 }
 const c=loanCurrentStateV062L(l),n=loanNextSplitV062L(l),life=loanLifetimeStatsV063L(l);
 box.innerHTML=`<div><span>Berechnete Restschuld heute</span><strong>${eur(c.remaining)}</strong></div>
 <div><span>Zinsen nächster Monat</span><strong>${eur(n.interest)}</strong></div>
 <div><span>Tilgung nächster Monat</span><strong>${eur(n.principal)}</strong></div>
 <div><span>Sondertilgung nächster Monat</span><strong>${n.extra>0?eur(n.extra):'–'}</strong></div>
 <div><span>Restlaufzeit ca.</span><strong>${loanYearsMonthsV063L(life.monthsRemaining)}</strong></div>`;
}
function acceptBankBalanceV063L(){
 const f=$('#loanForm');if(!f)return;
 const id=String(f.elements.id.value||'');
 const remaining=Number(f.elements.remaining.value)||0;
 const date=String(f.elements.balanceDate.value||'');
 if(!remaining||!date){alert('Bitte neue Restschuld und neuen Stichtag eintragen.');return}
 if(id){
  const loan=currentLoansV061L().find(x=>String(x.id)===id);
  if(loan){
   loan.bankBalanceHistory=Array.isArray(loan.bankBalanceHistory)?loan.bankBalanceHistory:[];
   const duplicate=loan.bankBalanceHistory.some(x=>x.date===date&&Number(x.remaining)===remaining);
   if(!duplicate)loan.bankBalanceHistory.push({date,remaining,recordedAt:new Date().toISOString()});
  }
 }
 renderLoanPreviewV063L();
 alert('Bank-Restschuld übernommen. Mit „Speichern“ wird der Kredit dauerhaft aktualisiert.');
}


$('#loanCalculatorSelectV065L')?.addEventListener('change',e=>{
 loanCalculatorV065L.selection=e.target.value||'all';
 loanCalculatorV065L.annualExtra=0;
 const input=$('#loanAnnualExtraInputV065L');if(input)input.value='';
 renderLoanCalculatorV065L();
 renderLoanPlanV062L();
});
$('#loanExtraMonthV066L')?.addEventListener('change',e=>{
 loanCalculatorV065L.month=Number(e.target.value)||8;
});
$('#loanCalcApplyV065L')?.addEventListener('click',applyLoanCalculatorV065L);
$('#loanCalcResetV065L')?.addEventListener('click',resetLoanCalculatorV065L);
$('#loanAnnualExtraInputV065L')?.addEventListener('keydown',e=>{
 if(e.key==='Enter'){e.preventDefault();applyLoanCalculatorV065L()}
});
$('#loanChartSelectV062L')?.addEventListener('change',renderLoanChartV062L);
$('#loanPlanSelectV062L')?.addEventListener('change',renderLoanPlanV062L);
$('#addLoanBtn')?.addEventListener('click',()=>openLoanV061L(null));
$('#loanForm').addEventListener('submit',e=>{
 e.preventDefault();
 const f=new FormData(e.target),id=String(f.get('id')||'');
 const data={name:String(f.get('name')||'').trim(),bank:String(f.get('bank')||'').trim(),original:Number(f.get('original'))||0,
  remaining:Number(f.get('remaining'))||0,balanceDate:f.get('balanceDate')||'',interest:Number(f.get('interest'))||0,
  monthlyPayment:Number(f.get('monthlyPayment'))||0,startDate:f.get('startDate')||'',fixedUntil:f.get('fixedUntil')||'',
  extraPayment:Number(f.get('extraPayment'))||0,
  effectiveInterest:Number(f.get('effectiveInterest'))||0,
  commitmentInterest:Number(f.get('commitmentInterest'))||0,
  paymentFreeMonths:Math.max(0,Number(f.get('paymentFreeMonths'))||0),
  notes:String(f.get('notes')||'').trim(),
  contractYears:Math.max(0,Number(f.get('contractYears'))||0),
  autoCalculate:f.get('autoCalculate')==='on'};
 if(!data.name||!data.bank){alert('Bitte Bezeichnung und Bank eintragen.');return}
 if(data.original<=0||data.remaining<=0||data.interest<=0||data.monthlyPayment<=0||!data.balanceDate||!data.startDate||!data.fixedUntil){
  alert('Bitte alle Grunddaten des Kredits vollständig eintragen.');return
 }
 if(data.monthlyPayment<=data.remaining*(data.interest/100/12)){
  alert('Die Monatsrate ist nicht höher als der monatliche Zins. Der Kredit würde so nicht getilgt. Bitte Rate oder Zinssatz prüfen.');return
 }
 state.loans=Array.isArray(state.loans)?state.loans:[];
 if(id){
  const loan=state.loans.find(x=>String(x.id)===id);
  if(loan){
   data.bankBalanceHistory=Array.isArray(loan.bankBalanceHistory)?loan.bankBalanceHistory:[];
   Object.assign(loan,data);
  }
 }else{
  if(state.loans.length>=10){alert('Es können maximal 10 Kredite angelegt werden.');return}
  state.loans.push({id:Date.now(),bankBalanceHistory:[],...data});
 }
 $('#loanModal').close();e.target.reset();save();
});

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
  make:String(f.get('make')||'').trim(),model:String(f.get('model')||'').trim(),estimatedValue:Number(f.get('estimatedValue'))||0,
  plate:String(f.get('plate')||'').trim(),year:f.get('year'),fuel:f.get('fuel'),
  currentKm:Number(f.get('currentKm'))||0,lastOilDate:f.get('lastOilDate'),
  lastOilKm:Number(f.get('lastOilKm'))||0,nextOilDate:f.get('nextOilDate'),
  nextOilKm:Number(f.get('nextOilKm'))||0,tuvDate:f.get('tuvDate'),
  oilSpec:String(f.get('oilSpec')||'').trim(),tires:String(f.get('tires')||'').trim(),
  brakesDate:f.get('brakesDate'),brakesNextDate:f.get('brakesNextDate'),
  batteryDate:f.get('batteryDate'),batteryNextDate:f.get('batteryNextDate'),
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
$('#vehicleServiceForm').addEventListener('submit',async e=>{
 e.preventDefault();const f=new FormData(e.target),vehicleId=Number(f.get('vehicleId'));let attachment=null;const file=f.get('attachment');
 if(file&&file.size){if(file.size>3000000){alert('Datei ist größer als 3 MB.');return}try{attachment={name:file.name,type:file.type,data:String(file.type||'').startsWith('image/')?await imageFileToDataUrlV31(file,1400,1000,.8):await fileToDataUrlV37(file)}}catch{alert('Datei konnte nicht gespeichert werden.');return}}
 const entry={id:Date.now(),vehicleId,date:f.get('date'),km:Number(f.get('km'))||0,type:f.get('type'),cost:Number(f.get('cost'))||0,workshop:String(f.get('workshop')||'').trim(),attachment,note:String(f.get('note')||'').trim()};
 state.vehicleServices.push(entry);const v=state.vehicles.find(x=>Number(x.id)===vehicleId);if(v){if(entry.km)v.currentKm=Math.max(Number(v.currentKm)||0,entry.km);if(entry.type==='Ölwechsel'){v.lastOilDate=entry.date;v.lastOilKm=entry.km;if(entry.km&&!v.nextOilKm)v.nextOilKm=entry.km+15000}}
 e.target.reset();$('#vehicleServiceModal').close();save();
});

window.editRenovationV37=editRenovationV37;
$('#renovationForm [name="plannedAmount"]')?.addEventListener('input',updateRenovationCalcPreviewV075L);
$('#renovationForm [name="openAmount"]')?.addEventListener('input',updateRenovationCalcPreviewV075L);
$('#renovationForm')?.addEventListener('submit',async e=>{
 e.preventDefault();
 const form=e.target,f=new FormData(form),propertyId=Number(f.get('propertyId')),id=Number(f.get('id'));
 const p=state.properties.find(x=>Number(x.id)===propertyId);if(!p)return;
 p.renovationCosts=Array.isArray(p.renovationCosts)?p.renovationCosts:[];
 const existing=id?p.renovationCosts.find(x=>Number(x.id)===id):null;

 const plannedAmount=Math.max(0,Number(f.get('plannedAmount'))||0);
 const openAmount=Math.max(0,Number(f.get('openAmount'))||0);
 if(plannedAmount<=0){alert('Bitte einen geplanten Betrag größer 0 € eintragen.');return}
 if(openAmount>plannedAmount){alert('Der offene Betrag kann nicht höher als der geplante Betrag sein.');return}

 let attachments=Array.isArray(existing?.attachments)?[...existing.attachments]:[];
 try{
  const added=await renovationFilesV37(f.getAll('attachments').filter(x=>x&&x.size));
  attachments=[...attachments,...added].slice(0,10)
 }catch(err){alert(err.message||'Eine Datei konnte nicht gespeichert werden.');return}

 const paidAmount=Math.max(0,plannedAmount-openAmount);
 const data={
  title:String(f.get('title')||'').trim(),
  category:String(f.get('category')||'Sonstiges'),
  plannedAmount,
  openAmount,
  // Legacy fields bleiben für ältere Sicherungen/Ansichten kompatibel:
  amount:paidAmount,
  status:openAmount<=0?'paid':'open',
  month:f.get('month')||'',
  workType:String(f.get('workType')||'Fachfirma'),
  company:String(f.get('company')||'').trim(),
  companyRating:String(f.get('companyRating')||''),
  note:String(f.get('note')||'').trim(),
  attachments,
  updatedAt:new Date().toISOString()
 };
 if(existing)Object.assign(existing,data);
 else p.renovationCosts.push({id:Date.now(),createdAt:new Date().toISOString(),...data});
 form.reset();$('#renovationModal').close();save();
});
$('#propertyForm').addEventListener('submit',e=>{
 e.preventDefault();
 const form=e.target,f=new FormData(form),id=Number(f.get('id'));
 if(!id&&(state.properties||[]).length>=5){alert('Es können maximal 5 Objekte angelegt werden.');return}
 const existing=id?state.properties.find(x=>x.id===id):null;
 const data={
  name:f.get('name'),address:f.get('address'),area:Number(f.get('area')),estimatedValue:Number(f.get('estimatedValue'))||0,
  plotArea:f.get('plotArea')===''?'':Number(f.get('plotArea')),constructionYear:f.get('constructionYear'),
  rooms:f.get('rooms')===''?'':Number(f.get('rooms')),bathrooms:f.get('bathrooms')===''?'':Number(f.get('bathrooms')),
  toilets:f.get('toilets')===''?'':Number(f.get('toilets')),usage:f.get('usage'),
  energyClass:f.get('energyClass'),heatingType:f.get('heatingType'),
  notes:f.get('notes'),photo:propertyPhotoData,
  meterHistory:Array.isArray(existing?.meterHistory)?existing.meterHistory:[],
  electricityMeter:existing?.electricityMeter??'',
  waterMeter:existing?.waterMeter??'',
  meterReadingDate:existing?.meterReadingDate||'',
  renovationCosts:Array.isArray(existing?.renovationCosts)?existing.renovationCosts:[]
 };
 if(id)Object.assign(existing,data);else state.properties.push({id:Date.now(),...data});
 form.reset();propertyPhotoData='';$('#propertyModal').close();save();
});

$('#meterReadingFormV077L')?.addEventListener('submit',e=>{
 e.preventDefault();
 const f=new FormData(e.target),propertyId=Number(f.get('propertyId'));
 const p=(state.properties||[]).find(x=>Number(x.id)===propertyId);if(!p)return;
 const date=String(f.get('date')||'');
 const electricity=f.get('electricity')===''?'':Number(f.get('electricity'));
 const water=f.get('water')===''?'':Number(f.get('water'));
 if(!date){alert('Bitte ein Ablesedatum auswählen.');return}
 if(electricity===''&&water===''){alert('Bitte mindestens einen Zählerstand eingeben.');return}

 const history=Array.isArray(p.meterHistory)?p.meterHistory:[];
 const same=history.find(r=>r.date===date);
 if(same){
  if(!confirm('Für dieses Datum gibt es bereits einen Eintrag. Werte ersetzen?'))return;
  same.electricity=electricity;same.water=water;same.updatedAt=new Date().toISOString();
 }else{
  history.push({id:Date.now()+Math.floor(Math.random()*1000),date,electricity,water,createdAt:new Date().toISOString()});
 }
 history.sort((a,b)=>String(a.date).localeCompare(String(b.date)));
 p.meterHistory=history;

 const latest=latestMeterReadingV077L(p);
 p.electricityMeter=latest?.electricity??'';
 p.waterMeter=latest?.water??'';
 p.meterReadingDate=latest?.date||'';

 e.target.reset();$('#meterReadingModalV077L').close();save();
});
$('#propertyForm').elements.photo.addEventListener('change',e=>{const file=e.target.files[0];if(!file)return;if(file.size>2_500_000){alert('Das Foto ist zu groß. Bitte ein Foto unter etwa 2,5 MB verwenden.');e.target.value='';return}const r=new FileReader();r.onload=()=>{propertyPhotoData=r.result;showPhotoPreview()};r.readAsDataURL(file)});
$('#taskForm')?.elements.photoFile?.addEventListener('change',async e=>{
 const file=e.target.files?.[0];if(!file)return;
 try{updateTaskPhotoPreviewV35(await imageFileToDataUrlV31(file,850,650,.76))}catch{}
});
$('#removeTaskPhotoBtn')?.addEventListener('click',()=>{
 const f=$('#taskForm');
 if(f?.elements.photoFile)f.elements.photoFile.value='';
 if(f)f.dataset.currentPhoto='';
 updateTaskPhotoPreviewV35('');
});

$('#taskForm').addEventListener('submit',async e=>{
 e.preventDefault();
 const form=e.target,f=new FormData(form),id=Number(f.get('id'))||0;
 let photo=form.dataset.currentPhoto||'';
 const file=f.get('photoFile');
 if(file&&file.size){
  try{photo=await imageFileToDataUrlV31(file,1100,800,.80)}
  catch{alert('Das Aufgabenfoto konnte nicht verarbeitet werden.');return}
 }
 const data={
  title:String(f.get('title')||'').trim(),
  propertyId:f.get('propertyId'),
  due:f.get('due'),
  priority:f.get('priority'),
  note:String(f.get('note')||'').trim(),
  photo
 };
 if(id){
  const task=(state.tasks||[]).find(x=>Number(x.id)===id);
  if(task)Object.assign(task,data);
 }else{
  state.tasks.push({
   id:Date.now(),...data,status:'Offen',completedAt:'',
   completedByUserId:'',completedByName:''
  });
 }
 form.reset();
 form.dataset.currentPhoto='';
 updateTaskPhotoPreviewV35('');
 $('#taskModal').close();
 save();
});
$('#maintenanceTypeSelect')?.addEventListener('change',e=>{
 const custom=e.target.value==='__custom__';
 $('#customMaintenanceWrap')?.classList.toggle('hidden',!custom);
 if(custom)setTimeout(()=>$('#customMaintenanceTitle')?.focus(),50);
});
$('#maintenanceForm').addEventListener('submit',e=>{
 e.preventDefault();
 const form=e.target,f=new FormData(form);
 const type=String(f.get('maintenanceType')||'').trim();
 const custom=String(f.get('customTitle')||'').trim();
 const title=type==='__custom__'?custom:type;
 if(!title){alert('Bitte eine Wartungsart auswählen oder eine eigene Wartung eingeben.');return}
 state.maintenance.push({
  id:Date.now(),title,maintenanceType:type,propertyId:f.get('propertyId'),
  due:f.get('due'),intervalMonths:(f.get('intervalMonths')===''?12:Number(f.get('intervalMonths'))),
  priority:f.get('priority')||'Mittel',cost:Number(f.get('cost'))||0,
  note:String(f.get('note')||'').trim(),status:'Offen'
 });
 form.reset();
 $('#customMaintenanceWrap')?.classList.add('hidden');
 $('#maintenanceModal').close();
 save();
});
$('#saveSettings').addEventListener('click',()=>{state.settings={name:$('#settingName').value,startBalance:Number($('#settingStartBalance').value),minimumReserve:Number($('#settingMinimumReserve').value),monthlyReserve:Number($('#settingMonthlyReserve').value)};save();alert('Gespeichert')});

async function saveEverythingLocalV060L(){
 const stateOk=await persistState(false);
 const registryOk=await saveRegistryV27();
 const tid=currentTenantIdV27();
 const userOk=tid?saveTenantUsersLocalV060L(tid):true;
 return !!(stateOk && registryOk && userOk);
}
function fullBackupPayloadV060L(){
 const tid=currentTenantIdV27();
 const tenant=(authRegistryV27.tenants||[]).find(t=>t.id===tid)||null;
 const users=(authRegistryV27.users||[]).filter(u=>u.tenantId===tid);
 return {
  backupFormat:'hausverwaltung-full-backup-v1',
  appVersion:'0.60l',
  exportedAt:new Date().toISOString(),
  tenantId:tid,
  tenant,
  users,
  state,
  sync:{mode:'local',nasReady:true,nasConnected:false}
 };
}
function downloadJsonV060L(payload,filename){
 const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
 const a=document.createElement('a');
 const url=URL.createObjectURL(blob);
 a.href=url;a.download=filename;
 document.body.appendChild(a);a.click();a.remove();
 setTimeout(()=>URL.revokeObjectURL(url),1500);
}
async function saveAndExportV060L(){
 const btn=$('#saveAndExportBtn');
 const original=btn?.innerHTML||'💾 Speichern & JSON exportieren';
 if(btn){btn.disabled=true;btn.textContent='Speichere …'}
 try{
  const ok=await saveEverythingLocalV060L();
  if(!ok)throw Error('Lokale Speicherung konnte nicht vollständig bestätigt werden.');
  const payload=fullBackupPayloadV060L();
  const code=payload.tenant?.code||'konto';
  const date=new Date().toISOString().slice(0,10);
  downloadJsonV060L(payload,`hausverwaltung-${code}-${date}.json`);
  if(btn)btn.textContent='✓ Gespeichert & exportiert';
  setTimeout(()=>{if(btn){btn.disabled=false;btn.innerHTML=original}},1800);
 }catch(error){
  console.error(error);
  if(btn){btn.disabled=false;btn.innerHTML=original}
  alert(error.message||'Speichern/Exportieren fehlgeschlagen.');
 }
}

$('#saveAndExportBtn')?.addEventListener('click',saveAndExportV060L);
$('#exportBtn').addEventListener('click',async()=>{
 await saveEverythingLocalV060L();
 downloadJsonV060L(fullBackupPayloadV060L(),'hausverwaltung-v060-vollsicherung.json');
});
$('#importInput').addEventListener('change',async e=>{
 const input=e.target,file=input.files?.[0];
 if(!file)return;
 try{
  const text=(await file.text()).replace(/^\uFEFF/,'').trim();
  const parsed=JSON.parse(text);
  if(!parsed||typeof parsed!=='object'||Array.isArray(parsed))throw new Error('Ungültige Sicherungsdatei');

  if(parsed.backupFormat==='hausverwaltung-full-backup-v1' && parsed.state){
   const bt=parsed.tenant;
   const bu=Array.isArray(parsed.users)?parsed.users:[];
   if(bt){
    const ti=authRegistryV27.tenants.findIndex(t=>t.id===bt.id);
    if(ti>=0)authRegistryV27.tenants[ti]=bt; else authRegistryV27.tenants.push(bt);
    authRegistryV27.users=authRegistryV27.users.filter(u=>u.tenantId!==bt.id);
    authRegistryV27.users.push(...bu);
    await saveRegistryV27();
    saveTenantUsersLocalV060L(bt.id);
   }
   state=migrate(parsed.state);
   const fullOk=await persistState(false);
   if(!fullOk)throw new Error('App-Daten konnten nicht gespeichert werden.');
   render();applyUiLanguage();renderTenantAdminV27();
   alert('Vollsicherung inklusive Benutzer erfolgreich importiert.');
   input.value='';
   return;
  }

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

window.toggleOwnerCostDetailsV045L=toggleOwnerCostDetailsV045L;
window.toggleCostPeopleV046L=toggleCostPeopleV046L;
window.openPropertyDocumentV38=openPropertyDocumentV38;window.deletePropertyDocumentV38=deletePropertyDocumentV38;
$('#propertyDocumentForm')?.addEventListener('submit',async e=>{
 e.preventDefault();const f=new FormData(e.target),p=state.properties.find(x=>Number(x.id)===Number(f.get('propertyId')));if(!p)return;const file=f.get('file');if(!file||!file.size)return;if(file.size>3000000){alert('Datei ist größer als 3 MB.');return}
 let data;try{data=String(file.type||'').startsWith('image/')?await imageFileToDataUrlV31(file,1500,1100,.82):await fileToDataUrlV37(file)}catch{alert('Datei konnte nicht gespeichert werden.');return}
 p.documents=Array.isArray(p.documents)?p.documents:[];p.documents.push({id:Date.now(),title:String(f.get('title')||'').trim(),category:f.get('category'),month:f.get('month'),name:file.name,type:file.type,data});e.target.reset();$('#propertyDocumentModal').close();save();
});
$('#dashboardWidgetChoices')?.addEventListener('change',e=>{const k=e.target?.dataset?.widgetChoice;if(!k)return;state.settings.dashboardWidgets={...(state.settings.dashboardWidgets||{}),[k]:e.target.checked};save()});
$('#darkModeToggle')?.addEventListener('change',e=>{state.settings.darkMode=e.target.checked;save()});

Object.assign(window,{editLoanV061L,deleteLoanV061L,editProperty,deleteProperty,editCost,deleteCost,completeItem,deletePlanning,editReserve,deleteWaste,editVehicle,deleteVehicle,openServiceModal,setUiLanguage,applyUiLanguage,setLocalProfileV24,editTenantUserV27,deleteTenantUserV27,toggleCostPaid,openRenovationModalV35,deleteRenovationV35});render();applyUiLanguage();bootstrapAuthV27();
