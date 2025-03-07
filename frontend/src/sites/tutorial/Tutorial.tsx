import FhSite from "../../components/FhSite"

export default function Tutorial() {

    return (
        <FhSite>
            <div className="w-full flex flex-row justify-center">
                <div className="w-11/12 my-10">
                    <div className="my-3">
                        <h1 className="text-4xl">Setup</h1>
                        <p className="my-2">Bevor die Seite verwenet werden kann, muss im Browser der API-key gesetzt werden.
                            Ohne diesen können weder das Scoreboard noch andere Seiten verwendet werden. 
                            Hierzu kann auf der Hauptpage die Login Seite aufgerufen werden. Auf dieser befindet sich
                            ein Textfeld in das der API-Key kopiert werden kann. Das Klicken auf den "Login"-Button speichert
                            dann diesen als Cookie im Browser. Selbst wenn der Browser geschlossen wird, bleibt dieser gespeichert und 
                            der Vorgang muss nicht mehr wiederholt werden. Sollte sich der API-key ändern oder wurden die Cookies gelöscht,
                            muss erst der Key neu gespeichert werden.
                        </p>
                    </div>
                    <div className="my-3">
                        <h1 className="text-4xl">Benutzung</h1>
                        <h2 className="text-2xl">Scoreboard-Display</h2>
                        <p className="my-2">Auf dem Gerät das als Scoreboard verwendet werden soll, klicke auf der Hauptseite den Scoreboard-Knopf um zum Scoreboard zu gelangen.
                            Danach kann mit der F11 Taste (auf Windows und Linux) der Vollbild-Modus eingeschalten werden, um die Tab-leiste zu verstecken.
                            Sollte der Fehler "403 forbidden" auftreten, so wurde der API-Key nicht gesetzt, oder er stimmt nicht mit dem des Servers überein. Vergewissere dich,
                            dass der Key stimmt und wiederhole die Schritte aus "Setup".
                        </p>
                        <h2 className="text-2xl">Benutzerinteraktion</h2>
                        <p className="my-2">Auf dem Gerät bei dem die Spielerdaten eingegeben werden sollen, muss die Seite Interaction aufgerufen werden. Sollte während der Benutzung ein Fehler wie "403 Forbidden" auftreten,
                            müssen die Schritte aus "Setup" mit dem richtigen API-key wiederholt werden.
                        </p>
                    </div>
                    <div className="my-3">
                        <h1 className="text-4xl">Normaler Spielverlauf</h1>
                        <p className="my-2">Bei einem neuen Spieler muss zuerst ein Nickname (optional mit Mail-Adresse) registriert werden. Nicknames sind einmalig und können nicht
                            doppelt vorkommen. Danach kann mit dem Nickname und dem Umdrehungswert und der Schätzung, eine Schätzrunde eingetragen werden.
                            Bei wiederkehrenden Spielern soll der vorherige Nickname verwendet werden, um sicherzugehen, dass ein Benutzer nur einen Eintrag am Scoreboard hat.
                        </p>
                    </div>
                    <div className="my-3">
                        <h1 className="text-4xl">Admin panel</h1>
                        <h2 className="text-2xl">Download Excel file</h2>
                        <p className="my-2">Nach der Verwendung dieser Applikation, kann die Datenbank als Excel-Datei heruntergeladen werden. Hierzu im Admin-Panel auf Download Excel-File klicken.</p>
                        <h2 className="text-2xl">Admin console</h2>
                        <p className="my-2">Sollte es zu Fehleintragungen kommen, kann mithilfe der "Admin console" die Datenbank über ein intuitives Interface manuell geändert werden. Hierbei ist vorsicht
                            geboten, da es sich um eine mächtige Oberfläche handelt.
                        </p>
                    </div>
                    
                </div>
            </div>
        </FhSite>
    );
}