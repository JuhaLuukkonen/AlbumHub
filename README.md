# Buildie-koodaustehtävä

### Juha Luukkonen

Lauantaina 10.4.2021 koodailin UI:n parissa tunnissa yhdistämällä aikaisemmin koodaamani React router UI sivurakenteen, jossa voi lisätä käyttäjän ja muokkaamaan tietoja. REST:n ja Redux souce tilanhallinnan kautta en vielä saa json dataa. Luodut käyttäjät eivät vielä tallennu vaan häviävät sivua päivittäessä.

Sunnuntaina 11.4.2021 reduxsaucen - jsonplaceholder datan saaminen siihen ja edelleen reduxsaucen kautta tulleen datan saaminen ja näyttäminen UI components kansiossa - suunnittelua, tiedonhankintaa ja koodailua pari tuntia. Käyttäjän luomisessa form kentän lisäykset. Reduxsaucessa ei ole varsinaista store tiedostoa.

Tehtävänäsi on toteuttaa React-sovellus JavaScript:llä, joka käyttää REST-rajapintaa, ylläpitää sovelluksen tilaa Reduxissa sekä käyttää React Routeria sivurakenteen toteuttamisessa.

REST-rajapinnan toteuttavan palvelimen löydät osoitteesta: https://github.com/typicode/jsonplaceholder/archive/master.zip.

Sovelluksessa tarvittavat rajapinnan polut ovat /users ja /albums. Kun palvelin on käynnissä, dokumentaation rajapinnan käyttöön löydät osoitteesta: http://localhost:3000.

Frontend-sovelluksen pohjat voit ladata sähköpostin linkistä.

Tilanhallinta on konfiguroitu valmiiksi ja sovellus käyttää `reduxsauce` -kirjastoa tilanhallinnan aputyökaluna. Voit vapaasti poistaa ja muokata osa-alueita valmiista pohjasta ja toteuttaa tehtävän täysin vapaasti oman mieltymyksesi mukaisesti. Pohja toimii esimerkkinä ja säästää turhaa konfigurointiin käytettävää aikaa. Pääset näin keskittymään suoraan varsinaiseen tehtävään.

### Sovelluksesta tulee löytyä seuraavat ominaisuudet:

- Käyttäjälistauksen näyttäminen, josta linkit käyttäjän tietoihin
- Uuden käyttäjän luonti
- Käyttäjän tietojen näyttäminen, muokkaus ja poistaminen sekä linkki käyttäjän albumeihin
- Käyttäjän albumien listaaminen

### Joitain vaatimuksia:

- Sijoita käyttäjälistaus polkuun: /users
- Sijoita käyttäjän näkymä polkuun: /users/:userId
- Sijoita käyttäjän albumilistaus polkuun: /users/:userId/albums
- Kaikki palvelimelta ladattava data tulee säilöä Reduxissa
- Käyttäjän albumien tallentamisessa Reduxiin varaudu tilanteeseen, jossa pitää pystyä näyttämään kahden käyttäjän albumit samanaikaisesti (käyttöliittymässä tätä ei tarvitse toteuttaa)
- Sovelluksen kaikkien näkymien tulee aueta ongelmitta, kun näkymän polku kirjoitetaan suoraan osoiteriville
- Luo projektille oma Git-repo. Dokumentoi tekemäsi muutokset ja päätökset projektin edetessä, jotta ne ovat luettavissa Gitin logista mahdollisimman selkeästi.

### Huomioitavaa:

- Mock rajapintaan POST/PUT palauttaa success 200 OK ja muokatun resurssin, mutta ei tallenna muutosta tietokantaan. Tehtävässä tulee kuitenkin käsitellä POST-datan paluuarvoa kuin se olisi tallentunut tietokantaan. Muutettu tieto saa hävitä refreshillä tai kun resurssin tiedot haetaan uudestaan rajapinnasta.
- Käyttäjän muokkaus ja luominen ei tarvitse olla täydellisiä sisältäen rajapinnan jokaisen kentän. Tee toimiva versio: käyttäjän luonnissa lomakkeelta voi puuttua rajapinnan osa datasta esim. koordinaatit ja yrityksen tiedot. Vastaavasti käyttäjän muokkauksen ei tarvitse sisältää jokaista kenttää muokattavaksi. Säästät aikaa jos et toteuta luonnissa ja muokkauksessa kaikkea mahdollista. Toimiva versio, jossa voit luoda käyttäjän ja muokata jotain käyttäjän tietoja riittää.
- Lomakkeen arvojen validointiin ei tarvitse käyttää aikaa.
- Muulta osin: se mitä teet, tee huolella. Jos jokin osio vie kohtuuttomasti aikaa, jätä se välistä ja keskity tekemään huolella ne osiot, johon sinulla on aikaa.

### Plussaa jos aikaa ja jaksamista:

- Jest tai muu framework testejä
- Tyylittely/visuaalisuus

Voit käyttää apuna mitä tahansa JavaScript-kirjastoja ja käytäntöjä projektin toteuttamisessa, mutta muista perustella valintasi esim. commit-viesteissä.

Palauta valmis projekti zip-paketissa, jossa .git-hakemisto on tallella. Poista projektin node_modules-hakemisto ennen zippausta. Siirrä zip-paketti Google Driveen, Dropboxiin, One driveen tai muuhun palveluun, jonka kautta voit lähettää linkin tehtävääsi. Muista tarkistaa, että linkkiin on pääsyoikeudet kunnossa.
# buildie
