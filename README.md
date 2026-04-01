# Pixel PlatoYA

Przegladarkowa gra pixel-art stworzona w czystym HTML, CSS i JavaScript.

## Zawartosc repozytorium

Repo zawiera komplet plikow gry:

- `index.html`
- `styles.css`
- `script.js`
- grafiki PNG/JPEG
- dzwieki MP3

## Jak uruchomic

1. Otworz `index.html` w przegladarce.
2. Najwygodniej uruchomic projekt z lokalnego serwera statycznego, ale nie jest to wymagane.

## Sterowanie

- komputer: strzalki do ruchu, spacja do strzalu
- telefon: joystick ekranowy i przycisk strzalu

## Funkcje gry

- lobby, sklep, szafa i aleja pucharow
- odblokowywanie postaci, PlatoYasow i nagrod
- lokalny zapis postepu w `localStorage`
- tryb `1v1` po nicku z Firebase Realtime Database

## Publikacja

Projekt nadaje sie do publikacji jako repozytorium GitHub oraz do wystawienia przez GitHub Pages.

## Multiplayer Firebase

Aby wlaczyc `Zagraj ze znajomym`, uzupelnij plik `firebase-config.js`.

1. Skopiuj dane z `firebase-config.example.js`.
2. Wklej swoj web config projektu Firebase do `firebase-config.js`.
3. W Firebase wlacz Realtime Database.
4. Dodaj reguly, ktore pozwola klientowi czytac i zapisywac `multiplayerRooms`.
   Przyklad startowy znajdziesz w `firebase-database.rules.example.json`.

Bez uzupelnionego configu lobby multiplayer pokaze komunikat, ze Firebase nie jest jeszcze podlaczony.
