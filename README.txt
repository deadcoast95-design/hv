APP-VERSION 0.75l – SANIERUNGSKOSTEN NEU BERECHNET

OBJEKTE → SANIERUNGSKOSTEN

KOSTENLISTE
Die einzelnen Sanierungskosten bleiben nach Monat/Jahr sortiert.
Die Liste ist jetzt standardmäßig eingeklappt.

Unter der Zusammenfassung gibt es:
„Kostenliste“
mit Anzahl der Einträge und einem Pfeil nach unten.

Erst beim Aufklappen werden die einzelnen Kostenpositionen angezeigt.

NEUE BETRAGSLOGIK
Das alte Feld
„Tatsächlicher / aktueller Betrag“
wurde entfernt.

Stattdessen gibt es:
- Geplanter Betrag
- Fehlender / offener Betrag

Die App berechnet automatisch:
Bezahlt = Geplant − Offen

Beispiel:
Geplant: 20.000 €
Offen:    2.000 €
Bezahlt: 18.000 €
Fortschritt: 90 %

MEHRERE SANIERUNGEN
Die Gesamtübersicht berechnet jetzt mathematisch:

Gesamt geplant = Summe aller geplanten Beträge
Gesamt offen   = Summe aller offenen Restbeträge
Gesamt bezahlt = Gesamt geplant − Gesamt offen

Fortschritt =
Gesamt bezahlt / Gesamt geplant × 100

Dadurch wird die Prozentanzeige auch bei mehreren Sanierungskosten korrekt.

EINZELPOSITIONEN
Jede Position zeigt:
- Geplant
- Bezahlt
- Offen
- eigenen Fortschrittsbalken

Bei offenen Positionen gibt es weiterhin:
„Komplett bezahlt“

Dieser setzt den offenen Betrag auf 0 €.

DATENKOMPATIBILITÄT
Alte Einträge werden automatisch übernommen:
- alter Status „bezahlt“ → offener Betrag 0 €
- alter Status „offen“ → bisheriger Betrag wird als offener Restbetrag übernommen

Alle Daten bleiben lokal gespeichert und JSON-kompatibel.
