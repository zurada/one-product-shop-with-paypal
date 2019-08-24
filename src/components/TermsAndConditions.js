import React from 'react';
import {Col, Container, Row} from "reactstrap";

class TermsAndConditions extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md="12">
                        <div>
                            <h1> AGB (BESTELLUNGEN UND DOWNLOAD)</h1>
                            <h3 className="subheading accent">GELTUNG AGB</h3>
                            <p className="small muted">
                                Durch das Abschicken einer Bestellung oder durch das Ausführen eines Downloads
                                erklärt sich der Besteller/die Bestellerin ausdrücklich mit diesen AGB
                                einverstanden.

                                Alle Bestellungen sind verbindlich. Lieferfristangaben sind unverbindlich. Bei
                                Lieferverzug werden Sie per E-Mail informiert. Sie haben die Möglichkeit, falls die
                                Lieferung noch nicht verschickt wurde, diese stornieren zu lassen.

                                Die Erbringung aller angebotenen Leistungen beschränkt sich ausschliesslich auf das
                                Gebiet der Schweiz, Deutschland, Österreich und des Fürstentums Liechtenstein.
                            </p>
                            <h3 className="subheading accent">BESTELLUNG</h3>
                            <p className="small muted"> Bei einer Online-Bestellung verlangt die Stella Matutina
                                Informationen über den Benutzer (Name, Adresse, E-Mail-Adresse etc.).
                                Diese Informationen werden für die Erstellung und Abwicklung der Geschäftsbeziehung
                                zwischen dem Kunden und der Stella Matutina genutzt.
                                Wenn ein Problem mit der Abwicklung eines Auftrages entsteht, werden diese Angaben
                                genutzt um sich mit dem Kunden in Verbindung zu setzen.</p>
                            <h3 className="subheading accent">REGISTRATION</h3>
                            <p className="small muted"> Um gewisse Services im Online Shop der Stella Matutina zu
                                beziehen, muss sich ein Besucher zuerst registrieren.
                            </p>

                            <h3 className="subheading accent">LIEFERUNG</h3>
                            <p className="small muted"> Wir sind Geschäftskunde der Schweizerischen Post und
                                versenden unsere Pakete mit diesem Dienstleistungsunternehmen.
                                Für Lieferungen innerhalb der Schweiz und des Fürstentums Lichtenstein verrechnen
                                wir pro Bestellung mit max. 1-2 Bücher Pauschal mit A-Post CHF 2.00.
                                Für Lieferungen nach Deutschland und Österreich verrechnen wir pro Bestellung mit
                                max. 1-2 Bücher Pauschal mit A-Post CHF 7.00. Für grössere Bestellungen gelten die
                                Preise von der Schweizer Post.

                                Bitte beachten Sie, dass Sie (der Empfänger) für Lieferungen nach Deutschland und
                                Österreich die Mehrwertsteuer sowie allfällige Zollgebühren übernehmen müssen.

                                Lieferungen erfolgen nur an Endkunden. Mengenbeschränkungen behalten wir uns vor.

                                Sollte einer der von Ihnen bestellten Artikel nicht an Lager sein, ist die
                                Auslieferung der übrigen Artikel davon nicht betroffen. Fehlende Artikel werden
                                Ihnen schnellst möglichst und portofrei nachgeliefert.

                                Angebote können teilweise nur in begrenzter Anzahl zur Verfügung stehen. Aufgrund
                                einer grossen Nachfrage können Produkte schnell ausverkauft sein.
                                Die Stella Matutina haftet nicht für nicht erhältliche Produkte oder irrtümlich
                                falsche Preisangaben. Modelländerungen bleiben vorbehalten. Alle Preise verstehen
                                sich netto inkl. MwSt. in Schweizer Franken (CHF). Terminierte Angebote gelten nur
                                für die angegebene Zeitspanne.

                                Wir behalten uns vor, Ihre Bestellung nur insoweit auszuführen, als am Warenlager
                                tatsächlich verfügbare Ware vorhanden ist. Gewisse ältere Produkte sind teilweise
                                sehr schwierig zu beschaffen. Wir werden uns bemühen, diese Produkte für Sie
                                aufzutreiben. Gelingt uns dies nicht, werden wir Ihnen dies mitteilen oder der
                                Artikel wird nach 60 Tagen automatisch nach Benachrichtigung von Ihrer Bestellung
                                storniert. Beachten Sie bitte die Versandfertigkeit, welche zum jeweiligen Produkt
                                angegeben sind. Diese Erfahrungswerte können jedoch durch Rückstände variieren.

                                Die Stella Matutina behält sich vor, Kunden bei Annahmeverweigerung zu sperren.

                                Bei erneuter Zustellung der Lieferung, bei falscher Adressangabe trägt der Empfänger
                                die/ alle anfallenden Versandkosten.</p>

                            <h3 className="subheading accent">PREISE</h3>
                            <p className="small muted">
                                Da wir Ihnen immer den bestmöglichen Preis unserer Produkte anbieten möchten, kann
                                es vorkommen, dass sich die Preise einzelner Produkte ändern. Generell gilt:
                                Berechnet wird der Preis, dem Sie im Zeitpunkt der Bestellung zugestimmt haben.
                                Lieferverzug führt nie zu einer Preisreduktion.

                                Trotz Anwendung grösster Sorgfalt können irrtümlich falsche Angaben nicht völlig
                                ausgeschlossen werden. Sämtliche Preisangaben sind unverbindlich.</p>

                            <h3 className="subheading accent">PREIS- UND SORTIMENTSÄNDERUNGEN</h3>
                            <p className="small muted"> Preis- und Sortimentsänderungen sowie technische Änderungen
                                bleiben vorbehalten. Sämtliche Angebote sind freibleibend. Irrtümliche Angaben und
                                Druckfehler vorbehalten.
                            </p>

                            <h3 className="subheading accent">UMTAUSCH/FALSCHLIEFERUNGEN</h3>
                            <p className="small muted"> Umtausch ist aus urheberrechtlichen Gründen nicht möglich.
                                Ausnahmen bei: Falsch-Lieferungen, Transport-Schäden und Herstellfehlern an den
                                gelieferten Produkten. Die Haftung ist jedoch auf Ersatzlieferung begrenzt.
                                Ansprüche auf Rückgängigmachung des Vertrages oder Herabsetzung der Vergütung sind
                                ausgeschlossen, sofern eine Ersatzlieferung in angemessener Frist möglich ist.
                                Bei Falsch-Lieferungen und Herstellfehlern muss Stella Matutina umgehend
                                benachrichtigt werden (zum Kontaktformular oder email).
                                Die reklamierte Ware muss bei Falschlieferungen mit einem entsprechenden Vermerk
                                innert 10 Tagen (Poststempel) der Stella Matutina zurückgesendet werden. Bei
                                Beschädigung der Artikel auf dem Transportweg ist innerhalb von 48 Stunden zu
                                reklamieren, da sonst der Anspruch auf kostenlosen Ersatz erlischt. Bei nicht
                                erfolgter Retournierung oder falls wir an der beanstandeten Ware keine oder nur
                                durch den Käufer verursachte Mängel feststellen können, trägt der Käufer die Kosten
                                der Ersatzlieferung.
                                Digitale Produkte sind von einem Umtausch ausgeschlossen und können nicht storniert
                                werden.

                                Rücksendungen bei nicht gefallen sind ausgeschlossen.

                                Das Rückgaberecht gilt nur für Produkte, die nicht ausdrücklich von einer Rücknahme
                                ausgeschlossen sind. Die Rückgabefrist beträgt 10 Tage.

                                Ton-, Bild- und Datenträger können aus Urheberrechtsgründen nur originalverpackt
                                retourniert werden.
                            </p>

                            <h3 className="subheading accent">MÄNGELRÜGEN</h3>
                            <p className="small muted"> Können innerhalb von 10 Tagen nach Erhalt der Ware
                                schriftlich angebracht werden.
                            </p>

                            <h3 className="subheading accent">RECHNUNGSSTELLUNG</h3>
                            <p className="small muted"> Pro Sendung erfolgt eine Rechnung. Die Mehrwertsteuer wird
                                auf der Rechnung ausgewiesen. Die Stella Matutina behält sich vor, Bestellungen nur
                                gegen Vorauszahlung auszuführen.
                            </p>

                            <h3 className="subheading accent">ZAHLUNGSFRIST</h3>
                            <p className="small muted"> Rechnungen sind innert 10 Tagen netto zahlbar. Bei Zahlung
                                mit Kredit- oder Debitkarte erfolgt die Belastung nach der letzten Lieferung. In
                                Ausnahmefällen (bei längeren Lieferfristen und bei Vorbestellungen) kann die
                                maximale Karten-Reservationsfrist überschritten werden. Bei Ablauf der Frist werden
                                die bereits gesandten Teillieferungen der Kredit-/Debitkarte belastet und die
                                restlichen Sendungen per Rechnung mit Einzahlungsschein verschickt.
                            </p>

                            <h3 className="subheading accent">ZAHLUNGSVERZUG</h3>
                            <p className="small muted"> Alle Kunden, die im Online-Konto eine gültige E-Mail-Adresse
                                angegeben haben, erhalten eine Zahlungserinnerung per E-Mail. Ab der ersten Mahnung
                                wird wegen dem damit verbundenen erhöhten manuellen Aufwand eine Mahngebühr von CHF
                                5.00 pro Mahnung verrechnet.
                                Zusätzlich behält sich die Stella Matutina das Recht vor, Inkassovorgänge und
                                Zahlungsinformationen jeglicher Art an die Firma, die von der Stella Matutina mit
                                dem Inkasso beauftragt ist, weiter zu geben.
                                Die Stella Matutina behält sich zudem das Recht vor, die Zahlungsmöglichkeit „gegen
                                Rechnung“ gegenüber einem Kunden nicht oder nicht mehr anzubieten, wenn Umstände
                                bekannt werden, welche die Zahlungsfähigkeit des Kunden beeinträchtigen können (z.B.
                                Zahlungsverzug, schlechte Bonität etc.).
                            </p>

                            <h3 className="subheading accent">NUTZUNGSRECHTE (INKL. DOWNLOADS)</h3>
                            <p className="small muted"> Alle angebotenen Titel (digital und nicht-digital) sind nur
                                für Ihren privaten, nicht-kommerziellen Gebrauch bestimmt. Jede andere Nutzung
                                stellt einen Verstoss gegen das Urheberrecht dar. Die Anfertigung von Kopien zum
                                Zwecke des Verkaufs, kommerziellen Verleihs, der öffentlichen Ausstrahlung oder
                                Weitergabe bzw. Überlassung an Dritte ist verboten.

                                Mit dem Erwerb von digitalen Produkten erhalten Kunden das einfache, nicht
                                exklusive, nicht übertragbare und nicht unterlizenzierbare Recht den Titel in der
                                jeweils angebotenen Art und Weise zu nutzen.
                                Sofern ein wichtiger Grund vorliegt, z.B. begründeter Verdacht auf
                                Rechtsverletzungen, können einzelne Downloads aus dem Kundenkonto gelöscht werden.
                            </p>

                            <h3 className="subheading accent">DATENSCHUTZ</h3>
                            <p className="small muted"> Die für die Geschäftsabwicklung notwendigen Daten werden
                                gespeichert und im Rahmen der Bestellabwicklung bei Bedarf an die mit dem Versand
                                und der Rechnungsstellung beauftragte Unternehmen weitergeleitet.
                                Alle persönlichen Daten werden vertraulich behandelt.</p>

                            <h3 className="subheading accent">INFORMATIONEN ÜBER UNSERE ANGEBOTE UND
                                DIENSTLEISTUNGEN</h3>
                            <p className="small muted"> Wir möchten Sie gelegentlich über unsere Angebote und
                                Dienstleistungen sowie die unserer Partner informieren und hierfür Ihre persönlichen
                                Daten nutzen.
                                Sollten Sie dies nicht wünschen, so können Sie bei der Stella Matutina oder per
                                Kontaktformular auf der Webseite widersprechen.
                            </p>

                            <h3 className="subheading accent">NEWSLETTER</h3>
                            <p className="small muted"> Unseren Newsletter erhalten Sie ausschliesslich nach aktiver
                                Zustimmung Ihrerseits. Newsletter-Abonnente können jederzeit gekündigt werden.
                                Hinweise dazu befinden sich auf den entsprechenden Newslettern.</p>

                            <h3 className="subheading accent">HAFTUNGSAUSSCHLUSS</h3>
                            <p className="small muted"> Die Stella Matutina schliesst jegliche Haftung
                                (einschliesslich Fahrlässigkeit) aus, die sich aus dem Zugriff bzw. den
                                verunmöglichten Zugriff auf den Online Shop oder einzelner seiner Elemente und aus
                                der Benutzung ergeben können.
                                Der Zugriff auf den Online Shop und dessen Nutzung werden nicht garantiert. Der
                                Online Shop enthält Links zu Websites Dritter. Diese Seiten werden nicht durch die
                                Stella Matutina betrieben oder überwacht.
                                Stella Matutina lehnt jegliche Verantwortung für den Inhalt und die Einhaltung der
                                gesetzlichen Datenschutzbestimmungen durch die Betreiber von verlinkten Seiten ab.
                            </p>

                            <h3 className="subheading accent">COPYRIGHT</h3>
                            <p className="small muted"> Es ist untersagt, die Webseite zu reproduzieren, kopieren
                                oder zu teilen, ausser es dient dem Zweck einer Bestellung an die Stella Matutina.
                                Der ganze Inhalt der Webseite (Texte, Grafiken, Layout etc.) und jede Software
                                Copyright © by Stella Matutina. Alle Rechte vorbehalten. Die Seite ist durch
                                Copyright, schweizerisches Urheberrecht, Rechte an geistigem Eigentum und allen
                                anderen entsprechenden Rechten geschützt. Marke, Kennzeichen, Logos, Grafiken,
                                Navigationsleisten, Schaltflächensymbole, Bezeichnungen etc., die auf der Webseite
                                angezeigt werden, sind Eigentum der Stella Matutina oder eines jeweiligen Partners.
                                Es besteht kein Recht, diese Daten ohne schriftliche Erlaubnis der Stella Matutina
                                zu verwenden.
                            </p>

                            <h3 className="subheading accent">ANWENDBARES RECHT, GERICHTSSTAND</h3>
                            <p className="small muted"> Die Rechtsverhältnisse unterstehen schweizerischem Recht.
                                Ausschliesslicher Gerichtsstand für sämtliche Streitigkeiten ist Zürich.
                            </p>

                        </div>


                    </Col>
                </Row>
            </Container>


        );
    }
}

export default TermsAndConditions;