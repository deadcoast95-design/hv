APP-VERSION 0.42l – WARTUNGSAUTOMATIK FIX

FEHLER BEHOBEN
- Der „Erledigen“-Button bei Wartungen funktioniert wieder.
- Ursache war ein falscher Aufruf der lokalen Benutzer-Sitzung.

WIEDERKEHRENDE WARTUNGEN
Beispiel:
Wärmepumpenwartung – jährlich – fällig 08/2026

Nach „Erledigen“:
- letzter Abschluss wird gespeichert,
- Benutzer wird gespeichert,
- nächster Termin wird automatisch auf 08/2027 gesetzt,
- Wartung bekommt den Status „Geplant“,
- der Erledigen-Button verschwindet zunächst.

Sobald der neue Fälligkeitsmonat erreicht wird:
- Status wechselt automatisch von „Geplant“ zu „Offen“,
- der Erledigen-Button ist wieder verfügbar,
- die Wartung erscheint als Hinweis unter „Demnächst wichtig“ auf der Übersicht.

Die Übersicht warnt außerdem bis zu ca. 45 Tage vor einer Wartung.

EINMALIGE WARTUNGEN
- nach Erledigung 7 Tage sichtbar,
- danach automatische Entfernung.

Alles bleibt vollständig lokal ohne NAS.
