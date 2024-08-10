import { List, ListItem, Typography } from '@mui/material';
import stauImage from '../media/stau.jpg';
import routeImage from '../media/Route.png';
import pomegranate from '../media/pomegranate.gif';
import Deck from './Reveal/Deck';

export default function Presentation() {

    return (
        <Deck>
            <section data-auto-animate data-background-image={stauImage}>
                <Typography className="r-fit-text" sx={{ backdropFilter: "blur(5px)", fontWeight: "bold" }}>Droga wojewódzka 807</Typography>
                {/* Definitiv eine der Straßen aller Zeiten */}
            </section>
            <section data-auto-animate>
                <Typography className="r-fit-text" sx={{ fontWeight: "bold" }}>Droga wojewódzka 807</Typography>
                <img className="r-stretch" src={routeImage} alt={"routeImage"} />
                <List>
                    <ListItem className="fragment">- Woiwodschaftsstraße in Polen</ListItem>
                    <ListItem className="fragment">- verläuft in Ost-West-Richtung</ListItem>
                    <ListItem className="fragment">- verbindet Woiwodschaften Lublin und Masowien</ListItem>
                </List>
                {/* Definitiv eine der Straßen aller Zeiten */}
            </section>
            <section>
                <section data-auto-animate>
                    <h2 className="r-fit-text">Woiwodschaften</h2>
                    <Typography className="r-fit-text fragment" sx={{ color: "green" }}>Lublin ~ Mecklenburg-Vorpommern</Typography>
                    <List sx={{ color: "green" }}>
                        <ListItem className="fragment">- niedrige Bevölkerungsdichte</ListItem>
                        <ListItem className="fragment">- eher ländliche Bevölkerung</ListItem>
                        <ListItem className="fragment">- Tendenz zur Abwanderung in städtische Gebiete</ListItem>
                        <ListItem className="fragment">- beliebtes Touristenziel</ListItem>
                    </List>
                </section>
                <section data-auto-animate>
                    <h2 className="r-fit-text">Woiwodschaften</h2>
                    <Typography className="r-fit-text" sx={{ color: "yellow" }}>Masowien ~ Nordrhein-Westfalen</Typography>
                    <List sx={{ color: "yellow" }}>
                        <ListItem className="fragment">- hohe Bevölkerungsdichte</ListItem>
                        <ListItem className="fragment">- wirtschaftliches Zentrum</ListItem>
                        <ListItem className="fragment">- gut ausgebaute Infrastruktur mit dichtem Netz aus Schienen, Straßen und Flughäfen</ListItem>
                    </List>
                </section>
            </section>
            <section>
                <section data-auto-animate>
                    <h2>Verlauf</h2>
                    <List>
                        <ListItem className="fragment">- Startpunkt: Maciejowice</ListItem>
                        <ListItem className="fragment">- Endpunkt: Łuków</ListItem>
                        <ListItem className="fragment">- Wichtige Zwischenstationen: Jaroslaw, Nezcszki, Robow</ListItem>
                    </List>
                </section>
                <section data-auto-animate>
                    <h2>Verlauf</h2>
                    <List>
                        <ListItem>- Startpunkt: Maciejowice</ListItem>
                        <ListItem>- Endpunkt: Łuków</ListItem>
                        <ListItem sx={{ textDecoration: "line-through" }}>- Wichtige Zwischenstationen: Jaroslaw, Nezcszki, Robow</ListItem>
                        <ListItem>- Wichtige Zwischenstationen: Dęblin, Stężyca, Nowodwór</ListItem>
                    </List>
                </section>
            </section>
            <section>
                <h2>Technische Daten</h2>
                <List>
                    <ListItem className="fragment">- Länge: ca. 70 km</ListItem>
                    <ListItem className="fragment">- Fahrbahnbreite: 7 m</ListItem>
                    <ListItem className="fragment">- Fläche: 70 Fußballfelder</ListItem>
                </List>
            </section>
            <section>
                <h2>Aktuelle Projekte</h2>
                <List>
                    <ListItem className="fragment">- Ausbau und Modernisierung bestimmter Streckenabschnitte</ListItem>
                    <ListItem className="fragment">- Verbesserung der Verkehrssicherheit</ListItem>
                    <ListItem className="fragment">- Neubau von Brücken und Überführungen</ListItem>
                </List>
            </section>
            <section>
                <h2>Herausforderungen</h2>
                <List>
                    <ListItem className="fragment">- Erhaltungsaufwand aufgrund hoher Verkehrsbelastung</ListItem>
                    <ListItem className="fragment">- Finanzierung von Modernisierungsprojekten</ListItem>
                    <ListItem className="fragment">- Minimierung von Umweltauswirkungen</ListItem>
                </List>
            </section>
            <section data-auto-animate>
                <h2>Herausforderungen</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!4v1723289952269!6m8!1m7!1sRmIiAbtP36WwNCGw-HBQGg!2m2!1d51.72503264452985!2d21.65488923808315!3f49.419286369628615!4f2.3811204016210894!5f0.7820865974627469" width="600" height="450" loading="lazy"></iframe>            </section>
            <section>
                <h2>Fazit</h2>
                <Typography className="r-fit-text">"Die Droga wojewódzka 807 ist definitiv eine der Straßen aller Zeiten."</Typography>
                <Typography>(unbekannt, 1731)</Typography>
            </section>
            <section>
                <h2>Quellen</h2>
                <List>
                    <ListItem>- Wikipedia</ListItem>
                    <ListItem>- Google</ListItem>
                    <ListItem>- ChatGPT</ListItem>
                </List>
            </section>
            <section>
                <h2>Danke für eure Aufmerksamkeit!</h2>
                <img className='fragment' src={pomegranate} alt='pomegranate' width="480" height="480"/>
            </section>
        </Deck>
    )
}