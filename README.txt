APP-VERSION 0.76l – LOGIN / LAUFZEITFEHLER REPARIERT

FEHLER GEFUNDEN
In Version 0.75l blieb nach dem Umbau der Sanierungskosten noch folgende
alte JavaScript-Zeile bestehen:

window.toggleRenovationStatusV37 = toggleRenovationStatusV37

Die Funktion toggleRenovationStatusV37 existierte aber nicht mehr.

Folge:
Der Browser brach die Ausführung der kompletten app.js an dieser Stelle ab.
Die Login-Eventlistener stehen weiter unten in der Datei und wurden deshalb
nie registriert. Beim Klick auf „Anmelden“ passierte folglich gar nichts.

BEHOBEN
- alten ungültigen Funktionsverweis entfernt
- Login-Fehlerausgabe zusätzlich abgesichert
- JavaScript-Syntax vollständig geprüft
- globale window-Funktionsverweise auf fehlende Funktionen geprüft
- App anschließend in Chromium gestartet
- Login-Formular technisch getestet
- Seitenstart und Dashboard nach Login kontrolliert

Alle Funktionen aus 0.75l bleiben erhalten:
- Sanierungskosten Geplant / Offen / Bezahlt
- einklappbare Sanierungskostenliste
- Aufgaben-Notiz und Bearbeiten
- Admin-Einzellöschung im Verlauf
- Dashboard-Fahrzeugkarten
- getrennte Seitenansichten
- Kredit-/Sondertilgungslogik
