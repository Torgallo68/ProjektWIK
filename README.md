# PotegaApp

## Uruchamianie aplikacji

Aby uruchomić aplikację, należy:

1. Przejść do folderu `PotegaApp`, w którym znajduje się plik `docker-compose.yml`.
2. Użyć komendy:

   ```bash
   docker compose up --build
   ```

3. Powinny zostać utworzone 3 kontenery, a na końcu frontend pokaże, że aplikację można zobaczyć w przeglądarce. Należy wybrać opcję `Local`.

## Działanie aplikacji

Aplikacja została stworzona z myślą o moim realnym problemie - często nie mogę zapamiętać, ile serii i jakim obciążeniem ostatnio ćwiczyłem. 

### Funkcje:

1. **Dodawanie ćwiczeń**:
   - Po wejściu do aplikacji możesz dodawać własne ćwiczenia, wraz z informacjami o masie, liczbie setów i powtórzeń.
   - Aby to zrobić, należy nacisnąć czerwony przycisk z plusem w prawym dolnym rogu.
   - Po uzupełnieniu danych klikamy strzałkę powrotną w lewym górnym rogu, która zapisuje nowe ćwiczenie.

2. **Edycja**:
   - Dzięki segregacji po dacie wiadomo, kiedy ostatni raz wykonywało się dane ćwiczenie.
   - Po kliknięciu w dane ćwiczenie, można dokonać edycji, a wtedy data się odświeży.
   - Ponowne kliknięcie strzałki powrotnej zapisze zmiany.
3. **Usuwanie**:
   - Jest też opcja usuwania, należy kliknąć na dane ćwiczenie by przejść w tryb edycji.
   - Nastepnie należy kliknąć przycisk delete.

   
### Zastosowanie aplikacji

Ta konstrukcja aplikacji jest wygodna, jeśli wykonuje się niektóre ćwiczenia znacznie częściej niż inne lub nie ma stałego planu treningowego. Dzięki aplikacji łatwo zauważyć, kiedy ostatni raz wykonywało się dane ćwiczenie.
