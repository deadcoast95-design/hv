VERSION 35.1 – AUSWAHLLISTEN FIX

Behoben:
- In V35 wurde „Buchungen“ komplett entfernt.
- Die Auswahllisten-Funktion griff trotzdem noch auf das entfernte Feld „transactionCategory“ zu.
- Dadurch erschien die Warnung „Auswahllisten konnte nicht vollständig geladen werden.“

V35.1:
- Das entfernte Buchungsfeld wird nur noch angesprochen, wenn es wirklich existiert.
- Das alte Buchungs-Render-Modul wird nicht mehr geladen.
- Objekt-, Aufgaben-, Wartungs- und Kostenplan-Auswahllisten bleiben funktionsfähig.

Alle V35-Funktionen bleiben bestehen:
- Aufgabenfoto
- Konto nur als Kostenplan
- max. 5 Objekte
- Zählerhistorie
- Sanierungskosten pro Objekt
