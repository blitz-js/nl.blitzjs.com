# Vertaling

Huidige voortgang: https://github.com/blitz-js/nl.blitzjs.com/issues/1

# Stijlgids

## Heading ID's

Alle headings hebben expliciete ID's zoals deze:

```md
## Getting Started {#getting-started}
```

Vertaal deze IDs **niet**! Ze worden gebruikt als navigatie en zullen niet meer werken als er extern naar het document wordt verwezen, bv.:

```md
Bekijk de [beginsectie](/feature#getting-started) voor meer informatie.
```

✅ OK:

```md
## Aan de slag {#getting-started}
```

❌ NIET OK:

```md
## Aan de slag {#aan-de-slag}
```

Hierdoor zal bovenstaande link niet meer werken.

## Tekst in codeblokken

Laat tekst in codeblokken onvertaald, behalve voor commentaar. Je kan eventueel tekst in strings vertalen, maar let op dat je geen strings vertaalt die naar code verwijzen!

Voorbeeld:
```js
// Example
try {
  const product = await updateProjectMutation({ name: 'Cool Shoes' })
  setQueryData(product)
} catch (error) {
  alert("Error saving product")
}
```

✅ OK:

```js
// Voorbeeld
try {
  const product = await updateProductMutation({ name: 'Cool Shoes' })
  setQueryData(product)
} catch (error) {
  alert("Error saving product")
}
```

✅ OOK OK:

```js
// Voorbeeld
try {
  const product = await updateProductMutation({ name: 'Coole schoenen' })
  setQueryData(product)
} catch (error) {
  alert("Fout bij het opslaan van het artikel")
}
```

❌ NIET OK:

```js
// Voorbeeld
try {
  const artikel = await updateArtikelMutation({ name: 'Coole schoenen' })
  setQueryData(artikel)
} catch (error) {
  alert("Fout bij het opslaan van het artikel")
}
```

❌ ABSOLUUT NIET OK:

```js
// Voorbeeld
try {
  const artikel = await artikelBijwerkenMutatie({ naam: 'Coole schoenen' })
  stelQueryGegevensIn(artikel)
} catch (error) {
  waarschuwing("Fout bij het opslaan van het artikel")
}
```

## Externe links

Als een externe link verwijst naar een artikel in een referentie zoals [MDN] of [Wikipedia], en er bestaat een versie van dat artikel in het Nederlands van degelijke kwaliteit, overweeg dan om in de plaats naar die versie te linken.

[MDN]: https://developer.mozilla.org/en-US/
[Wikipedia]: https://en.wikipedia.org/wiki/Main_Page

Voorbeeld:

```md
The application get translated by the [compiler](https://en.wikipedia.org/wiki/Compiler).
```

✅ OK:

```md
De applicatie wordt door de [compiler](https://nl.wikipedia.org/wiki/Compiler) vertaald.
```

Voor links die geen equivalent hebben (Stack Overflow, YouTube video's, etc.) gebruik je gewoon de Engelse link.

## U of jij/je?

Om consistentie te behouden en de teksten zo toegankelijk mogelijk te maken, gebruiken we **jij** of **je** voor de tweede persoon enkelvoud. Als bezittelijk voornaamwoord gebruiken we dan ook **jouw** of **je** in die persoon.

# Woordenlijst

Om de consistentie in de documentatie te behouden vind je hieronder de vertalingen voor de _vaktermen_ in het Nederlands. Ook de woorden die expliciet in het Engels worden behouden vind je hier terug.

| Origineel | Vertaling |
|:---|:---|
| agnostic | agnostisch |
| app | app(licatie) |
| application | applicatie |
| architectural pattern | architectuurpatroon |
| array | _array_ |
| authentication | authenticatie |
| authorization | autorisatie |
| backend |  _backend_ |
| client | _client_ |
| Code of Conduct | gedragscode |
| codebase | _codebase_ |
| command | commando |
| community | _community_ |
| components | componenten |
| configuration | configuratie |
| convension | conventie |
| data layer | _data layer_ |
| database |  _database_ |
| defaults | standaardinstellingen / -waarden |
| deploy | uitrollen |
| end-to-end | _end-to-end_ |
| (code) execution | uitvoering (van de code) |
| fetch (data) | (data) opvragen |
| file structure | bestandsstructuur |
| form | _form_ |
| framework | _framework_ |
| frontend |  _frontend_ |
| fullstack | _fullstack_ |
| hooks |  _hooks_ |
| identity provider | identiteitsprovider |
| issue | _issue_ |
| library | _library_ |
| log in / login | inloggen (_verb_) / login (_noun_) |
| middleware | _middleware_ |
| migrate | migreren |
| monolithic | monolitisch |
| password | wachtwoord |
| pluggable | _pluggable_ |
| production | productie |
| promise | _promise_ |
| prototyping | _prototyping_ |
| recipe | _recipe_ |
| release | _release_ |
| release cycle | _release cycle_ |
| reset | opnieuw instellen (_verb_) / reset (_noun_) |
| routing / router | _routing_ / _router_ |
| scalable | schaalbaar |
| scale | schalen / opschalen |
| server |  _server_ |
| serverless | _serverless_ |
| set up / setup | opzetten (_verb_) / setup (_noun_) |
| sign up / signup | registreren (_verb_) / registratie (_noun_) |
| styling | _styling_ |
| templates |  _templates_ |
| token |  _token_ |
| tutorial | _tutorial_ |
| user | gebruiker |
| username | gebruikersnaam |

Om overal de juiste verwijzingen naar pagina's te hebben, vind je hieronder de Nederlandse vertalingen voor de docs pagina's.

| Origineel | Vertaling |
|:---|:---|
| Get Started | Aan de slag |
| How the Community Operates | Hoe de community werkt |
