APP-VERSION 0.72l – SEITENANZEIGE REPARIERT

FEHLER IN 0.71l
Die neue Übersicht hatte eine eigene CSS-Regel:
.dashboard-only-v071l { display:grid }

Diese Regel stand nach der normalen:
.view { display:none }

Dadurch blieb die Übersicht auf jedem Reiter sichtbar und Konto, Objekte,
Planung, Fahrzeuge oder Mehr erschienen erst darunter.

Zusätzlich wurde weiterhin der alte Dashboard-Renderer ausgeführt.
Da die neue Übersicht einige alte Elemente absichtlich nicht mehr besitzt,
entstand die Meldung:
„Übersicht konnte nicht vollständig geladen werden.“

BEHOBEN
- Übersicht ist nur sichtbar, wenn data-view="dashboard" aktiv ist.
- Nicht aktive Übersicht wird mit display:none!important ausgeblendet.
- Beim Wechsel des Reiters ist immer exakt eine View aktiv.
- Der alte Dashboard-Renderer wird auf der neuen Übersicht nicht mehr ausgeführt.
- Die orange Fehlermeldung wegen fehlender alter Dashboard-Elemente entfällt.
- Konto bleibt eine eigene Seite.
- Objekte bleibt eine eigene Seite.
- Planung bleibt eine eigene Seite.
- Fahrzeuge bleibt eine eigene Seite.
- Mehr / Einstellungen bleibt eine eigene Seite.

DIE DESIGNS DER ANDEREN SEITEN WURDEN NICHT VERÄNDERT.
