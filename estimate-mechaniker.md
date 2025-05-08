# Mechaniker.ch x ReactSquad

Note: 1 Woche = 40 Stunden = 5 Werktage

- Tech Stack
  - TypeScript
  - React mit React Router V7
  - TailwindCSS mit Shadcn
  - Database: Supabase
  - Hosting auf Vercel
  - Billing: Stripe

- Authentication
  - Kandidat
    - Login
     - OTP via SMS (1 Woche)
     - WhatsApp Integration (1 Woche)
  - Unternehmen (2 Tage)
    - Email Magic Link (Out of the box)
    - Google OAuth (Out of the box)
- Onboarding
  - Kandidat
    - Manuell
      - Kandidat füllt Formular aus (1 Woche)
    - Mit K.I.
      - CV Upload und Analyse mittels ChatGPT (1 Woche)
  - Unternehmen
    - Manuell
      - Unternehmen füllt Formular aus (1 Woche)
- Billing (3 Wochen)
  - Pläne
    - Inserat monatl. Plan
    - Direktansprache (5 Credits pro Woche)
  - Billing per Stripe Checkout Session
- App
  - Unternehmen
    - Kandidatensuche
      - Candidate Card (1 Tag)
      - Suchleiste (2 Tage)
      - Logic (3 Tage)
      - Righthand Modal Overlay (1 Woche)
    - Bewerbungen
      - Kanbanboard (1 Woche)
      - Righthand Modal Overlay (1 Woche)
    - Kandidatenchat
      - Chat UI (1 Woche)
      - Chat Logic (1 Woche)
   - Jobinserate
     - List View (1 Woche)
  - Einstellungen (1 Woche)
    - Firmen Profil
    - Team member
    - Billing
  - Kandidat
    - Jobsuche
      - List view + search (2 Wochen)
    - Anfragen
      - List view (1 Woche)
    - Bewerbungen V1.5
      - List View (1 Woche)
    - Chat
      - Chat Kandidaten Seite (1 Woche)
    - Lebenslauf (1 Woche)
      - CV Upload
      - Manuell
    - Video Interview (2 Wochen)


---

Hier ist die überarbeitete Abschätzung für Mechaniker.ch mit einer etwas genaueren, aber stichpunktartigen Aufschlüsselung der Features in den jeweiligen Zellen, wie von dir gewünscht. Die Beschreibungen bleiben kurz und prägnant, ohne Zeitangaben, und bieten dennoch mehr Details als zuvor.

---

# Mechaniker.ch x ReactSquad Abschätzung

## 1. Einführung

Vielen Dank für die Möglichkeit, euch unser Konzept für die Entwicklung der Mechaniker.ch-Plattform vorzustellen. Basierend auf euren Anforderungen haben wir eine konservative Abschätzung erstellt, die einen zuverlässigen Planungsrahmen bietet. Unser iterativer Ansatz ermöglicht ein frühes MVP (Minimal Viable Product), sodass ihr schnell Feedback geben könnt und wir flexibel auf Anpassungen reagieren können.

## 2. Technologiebasis & Empfehlungen

Wir setzen auf moderne, zukunftssichere Technologien:

- **Frontend:** React mit React Router v7 und TypeScript
- **Styling:** TailwindCSS mit Shadcn
- **Datenbank:** Supabase
- **Hosting:** Vercel für serverloses Hosting und CI/CD
- **Billing:** Stripe für Zahlungsabwicklung

## 3. Funktionsübersicht & Geschätzter Entwicklungsaufwand

Die folgende Tabelle fasst die Komponenten und den geschätzten Aufwand zusammen:

| **Feature**                         | **Beschreibung**                                                                                           | **Geschätzter Aufwand**          |
|-------------------------------------|-----------------------------------------------------------------------------------------------------------|----------------------------------|
| **Projekt Setup**                   | • Einrichtung der Projektstruktur <br> • Supabase-Integration <br> • Linting-Konfiguration <br> • Styling-Grundlagen mit TailwindCSS | **5 Arbeitstage**                |
| **Authentication**                  | • Kandidat: OTP via SMS, WhatsApp-Integration <br> • Unternehmen: Email Magic Link, Google OAuth         | **12 Arbeitstage**               |
| **Onboarding**                      | • Kandidat: Manuelles Formular, K.I.-gestützter CV-Upload (ChatGPT-Analyse) <br> • Unternehmen: Manuelles Firmenprofil-Formular | **15 Arbeitstage**               |
| **Billing**                         | • Pläne: Monatlicher Inserat-Plan, Direktansprache (5 Credits/Woche) <br> • Stripe Checkout-Integration   | **15 Arbeitstage**               |
| **App - Unternehmen**               | • Kandidatensuche: Candidate Card, Suchleiste, Filterlogik, Righthand Modal <br> • Bewerbungen: Kanbanboard, Detailansicht im Modal <br> • Kandidatenchat: Chat UI, Nachrichtenlogik <br> • Jobinserate: Listenansicht, Erstellen/Bearbeiten <br> • Einstellungen: Firmenprofil, Teamverwaltung, Billing-Übersicht | **41 Arbeitstage**               |
| **App - Kandidat**                  | • Jobsuche: Listenansicht, Suchfunktion <br> • Anfragen: Übersicht der Anfragen <br> • Bewerbungen V1.5: Bewerbungsstatus-Liste <br> • Chat: Kandidatenseitige Chatoberfläche <br> • Lebenslauf: CV-Upload, manuelle Eingabe <br> • Video Interview: Aufnahme• und Wiedergabefunktion | **40 Arbeitstage**               |
| **Gesamt Entwicklungsaufwand**      |                                                                                                           | ca. **128 Arbeitstage**          |

> **Hinweis:** Ein Arbeitstag entspricht 8 Stunden (5 Tage pro Woche).

## 4. Kosten

- **Gesamtaufwand:** 128 Arbeitstage × 8 Stunden/Tag = ca. **1.024 Stunden**
- **Stundensatz:** 75 CHF
- **Entwicklungskosten:** 1.024 Stunden × 75 CHF = ca. **76.800 CHF**

Nutzungsabhängige Drittanbieter-Gebühren (z. B. Supabase, Vercel, Stripe) sind nicht enthalten.

## 5. Parallelisierung & Timeline

Durch paralleles Arbeiten mehrerer Entwickler kann die Kalenderzeit verkürzt werden:
- **Beispiel:** Bei 2 Entwicklern ca. 64 Tage (Abhängigkeiten können die Zeit leicht verlängern).

## 6. Wartung & Support

Nach Live-Schaltung bieten wir:
- **Updates & Bugfixing:** Sicherheit und Performance gewährleisten
- **Support:** Von Business-Hours bis 24/7-Support
- **Schulung:** Workshops für eure Mitarbeiter
- **Hosting & Monitoring:** Vercel mit Backups und Überwachung

## 7. Fazit & Nächste Schritte

1. **Freigabe:** Bitte prüft die Abschätzung und gebt Feedback.
2. **Umsetzung:** Nach Freigabe starten wir die Entwicklung.

Wir freuen uns auf eure Rückmeldung!

---

Falls weitere Anpassungen gewünscht sind, lasst es uns wissen!


Ich habe die Abschätzung für das Mechaniker.ch-Projekt von ReactSquad analysiert und werde nun die gewünschten Meilensteine mit Checkboxen unter **4. Meilensteine** einfügen. Dabei berücksichtige ich die Vorgaben: 

1. **MVP** soll die Bereiche *Billing*, *App - Unternehmen* und *Authentication* umfassen, zuzüglich 2 Wochen (10 Arbeitstage, basierend auf 5 Tagen pro Woche) für die *Integration mit Heyflow*.
2. **V1** soll die verbleibenden Features (*Onboarding* und *App - Kandidat*) abdecken.

Die geschätzten Arbeitstage stammen aus der Tabelle in **3. Funktionsübersicht & Geschätzter Entwicklungsaufwand**. Außerdem gehe ich davon aus, dass *Project Setup* als Grundlage für das MVP notwendig ist, auch wenn es nicht explizit in der Anfrage erwähnt wurde. Ich werde die Meilensteine klar strukturieren und die Gesamtdauer berechnen.

Hier ist die aktualisierte Sektion:

---

## 4. Meilensteine

- [ ] **MVP** (ca. 93 Arbeitstage)  
  - **Project Setup**: 5 Tage  
    Einrichtung der Projektstruktur, Supabase-Integration, Linting-Konfiguration, Styling-Grundlagen mit TailwindCSS.  
  - **Authentication**: 17 Tage  
    Kandidat: OTP via SMS, WhatsApp-Integration; Unternehmen: Email Magic Link, Google OAuth.  
  - **Billing**: 15 Tage  
    Pläne: Monatlicher Inserat-Plan, Direktansprache (5 Credits/Woche); Stripe Checkout-Integration.  
  - **App - Unternehmen**: 46 Tage  
    Kandidatensuche (Candidate Card, Suchleiste, Filterlogik, Righthand Modal), Bewerbungen (Kanbanboard, Detailansicht im Modal), Kandidatenchat (Chat UI, Nachrichtenlogik), Jobinserate (Listenansicht, Erstellen/Bearbeiten), Einstellungen (Firmenprofil, Teamverwaltung, Billing-Übersicht).  
  - **Integration mit Heyflow**: 10 Tage  
    Zusätzliche 2 Wochen für die Integration mit Heyflow, einem Tool für interaktive Flows (z. B. Formulare oder Onboarding-Prozesse).  

- [ ] **V1** (ca. 55 Arbeitstage)  
  - **Onboarding**: 15 Tage  
    Kandidat: Manuelles Formular, K.I.-gestützter CV-Upload (ChatGPT-Analyse); Unternehmen: Manuelles Firmenprofil-Formular.  
  - **App - Kandidat**: 40 Tage  
    Jobsuche (Listenansicht, Suchfunktion), Anfragen (Übersicht der Anfragen), Bewerbungen V1.5 (Bewerbungsstatus-Liste), Chat (Kandidatenseitige Chatoberfläche), Lebenslauf (CV-Upload, manuelle Eingabe), Video Interview (Aufnahme- und Wiedergabefunktion).  

---

### Berechnung und Hinweise
- **MVP**:  
  5 (Project Setup) + 17 (Authentication) + 15 (Billing) + 46 (App - Unternehmen) + 10 (Heyflow) = **93 Arbeitstage**.  
  Die Integration mit Heyflow wurde als zusätzliche Anforderung mit 2 Wochen (10 Arbeitstagen) hinzugefügt.

- **V1**:  
  15 (Onboarding) + 40 (App - Kandidat) = **55 Arbeitstage**.  
  Dies umfasst die restlichen Features aus der Tabelle.

- **Gesamt**:  
  93 (MVP) + 55 (V1) = **148 Arbeitstage**.  
  Das überschreitet die ursprünglich geschätzten 138 Arbeitstage (siehe Tabelle), da die Heyflow-Integration als zusätzlicher Aufwand hinzukommt. Dies könnte den Gesamtaufwand und die Kosten beeinflussen, was in einer späteren Abstimmung mit ReactSquad geklärt werden sollte.

- **Parallelisierung**:  
  Wie in **6. Parallelisierung & Timeline** erwähnt, kann die Kalenderzeit durch paralleles Arbeiten mehrerer Entwickler verkürzt werden (z. B. auf ca. 74 Tage bei 2 Entwicklern, abhängig von Abhängigkeiten).

Die Meilensteine sind nun klar definiert und enthalten die geforderten Checkboxen (`- [ ]`) sowie die zusätzlichen 2 Wochen für die Heyflow-Integration im MVP. Sollten weitere Anpassungen nötig sein, kann dies im iterativen Prozess berücksichtigt werden, wie in **8. Fazit & Nächste Schritte** beschrieben.