APP-VERSION 0.60l – STABILE BENUTZER + VOLLSICHERUNG

BENUTZER
Jeder Kontobenutzer wird jetzt mehrfach lokal gespeichert:
- IndexedDB
- zentrale LocalStorage-Registry
- zusätzlicher lokaler Benutzer-Speicher pro Konto

Nach dem Erstellen/Bearbeiten wird automatisch geprüft,
ob der Benutzer wirklich in IndexedDB UND im Kontospeicher vorhanden ist.
Erst dann gilt das Speichern als erfolgreich.

Beim Start kann die App Benutzer aus dem konto-spezifischen Fallback
wiederherstellen, falls die zentrale Registry fehlen sollte.

NEUER BUTTON
Mehr → App-Einstellungen:
„Speichern & JSON exportieren“

Der Button:
1. speichert sämtliche App-Daten lokal
2. speichert die Benutzer-Registry
3. schreibt den konto-spezifischen Benutzer-Backup
4. erzeugt eine vollständige JSON-Datei

VOLLSICHERUNG
Enthält:
- Konto / Kontocode
- Benutzer inkl. Login-Hash/Salt
- Rollen und Rechte
- Eigentumsanteile
- Kostenanteile
- Objektzuordnungen
- sämtliche App-Daten des aktuellen Kontos
- NAS-ready Kennzeichnung

IMPORT
0.60l kann die neue Vollsicherung inklusive Benutzern wieder importieren.
Alte reine App-JSON-Dateien bleiben weiterhin kompatibel.

NAS
Noch nicht verbunden.
Die Benutzer-IDs und die Vollsicherung sind so vorbereitet,
dass später die NAS-Synchronisierung darauf aufbauen kann.
