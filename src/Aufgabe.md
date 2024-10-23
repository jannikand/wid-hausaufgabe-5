# Hausaufgabe WID 4 - State, Props, MUI

Wir haben in der Lektion 3 das Konzept von "State" behandelt und in Lektion 4  "Props" und "MUI" kennen gelernt. Mit diesen Bausteinen können wir nun erste Frontend-Applikationen / GUIs erstellen. Als Vorlage dient uns ein reales Projekt, welches wir am Institut für Geomatik für Swisstopo entwickelt haben (https://geoharvester.ch/) - hier in einer vereinfachten Version.

### Vorbereitung / Vorgehen
Lies dir zunächst das Tutorial ["Die React-Denkweise"](https://de.react.dev/learn/thinking-in-react) durch. Dieses beschreibt, wie ein strukturiertes Vorgehen zum Entwickeln von React-Applikationen konkret aussehen kann.

Zudem findest du in der Sandbox:
- mockup.png: Ein Screenshot wie die App am Ende ungewfähr aussehen soll
- geoharvester-png: Ein Banner für die Titelleiste
- ./data/tableData.json: Daten für die Tabelle


### Aufgabe
Setze das Mockup mithilfe von React und MUI um. Teile dabei den Code in mehrere React-Komponenten auf. Eine Komponente könnte zum Beispiel die Titelleiste sein, eine weitere die Tabelle. Für die Dropdowns könntest du (optional) eine wiederverwendbare Komponente schreiben, welche unabhängig von den jeweiligen Daten (anbieter oder service) ist. 
Nutze vorgefertigte MUI-Komponenten (von Material-UI) wo möglich und passe diese ggf. mit CSS weiter an.  Verwende React State und Props um Interaktionen zu ermöglichen.

Folgende Kriterien soll deine App am Ende erfüllen:
- Die Applikation entspricht im Aufbau in etwa dem Mockup - du kannst Aussehen / Stile / Farben etc. beliebig anpassen. MUI-Komponenten werden verwendet.
- Der Code ist Komponenten aufgeteilt, welche State mit Props teilen (wo nötig). 
- Event Handler und State ermöglichen es, die Tabelle mithilfe der Dropdowns zu filtern (siehe Tipps unten!)
- Du hast __eine weitere Interaktionsmöglichkeit__ deiner Wahl hinzugefügt. Dieses könnte z.B. ein Suchfeld für die Zusammenfassung oder ein Slider zum Filtern des Scores sein. 

## Tipps:

#### Dynamische Erzeugung von Elementen

Statt Elemente wie z.B. die Optionen eines Dropdowns oder Tabellenzeilen einzeln auszuschreiben, ist es besser, diese dynamisch zu erzeugen. Hierbei helfen uns Array-Methoden wie `.map()`:

```
// Beispiel:

// Expliziter Stil:
        <select>
            <option key={0} name="Aargau" value="Aargau">Aargau</option>
            <option key={1} name="Bern" value="Bern">Bern</option>
            <option key={2} name="Zug" value="Zug">Zug</option>
        </select>

// Besser:
// Variable im Funktionskörper der Komponente:
const options = ["Aargau", "Bern", "Zug"]

// Mapping im return-Statement:
      <select>
        {kantone.map((kanton, index) => (
            <option
                key={index}
                name={kanton}
                value={kanton}>
                {kanton}
            </option>))}
     </select>
```


#### Tabelle:

Orientiere dich an der [Basic Table](https://mui.com/material-ui/react-table/#basic-table) von MUI. Der Beispiel-Code ist etwas umständlich geschrieben - du benötigst keine `createData()`-Funktion sondern kannst direkt die json Datei verwenden.


#### Filtern der Tabelle mithilfe der Dropdowns

Wenn du die Tabelle in eine eigene Komponente extrahiert hast, muss diese den State der beiden Dropdowns als Props erhalten. Du benötigst `.filter()`-Funktionen, um die Tabelle auf die jeweiligen Props-Werte zu filtern. Das Beispiel zeigt dir, wo du die Funktionen am besten platzierst:


```
// tableData ist der importierte Datensatz
const Tabelle = () => {
    //....
return  tableData
        .filter(...dein Filter für anbieter)
        .filter(...dein Filter für service)
        .filter(...dein Filter für die Metaqualität)
        .map(....dein Code um die Tabellenreihen dynamisch zu generieren)
}
```

### Regeln

Bitte halte dich an diese Regeln:

- Du bearbeitest die Aufgaben eigenständig - keine Benutzung von externen Hilfsmitteln / Tools um den Code oder eine Lösung zu generieren, kein Copy & Paste von ausserhalb des Projektes.


## Links:

- React: https://react.dev/
- React Denkweise: https://de.react.dev/learn/thinking-in-react
- Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- map(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- filter(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?retiredLocale=de
