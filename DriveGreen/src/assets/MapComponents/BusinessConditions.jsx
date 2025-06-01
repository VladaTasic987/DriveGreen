import { MapFooter } from "../Layout/MapFooter"
import { MapHeader } from "../Layout/MapHeader"
import arrowBack from "../Images/ArrowBack.png"
import { Link } from "react-router-dom"
import { useRef, useState } from "react";


export function BusinessConditions() {

    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const [dragStyle, setDragStyle] = useState({});

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartY(e.clientY);
        setScrollTop(scrollRef.current.scrollTop);
        setDragStyle({ userSelect: "none" });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const y = e.clientY;
        const walk = y - startY;
        scrollRef.current.scrollTop = scrollTop - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setDragStyle({ userSelect: "none" });
    };

    return (
        <div id="container">
            <MapHeader />

            <div className="condition-header">
                <img src={arrowBack} alt='arrow-back' />
                <Link
                    to="/login"
                    className='link-to-welcome'
                >
                    Nazad
                </Link>
            </div>

            <h1 className="main-title">Opšti uslovi poslovanja za prodaju preko Interneta</h1>

            <div
                className="main-content"
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUp}
                onMouseUp={handleMouseUp}
                style={dragStyle}
            >
                <h3>1. Opšte odredbe</h3>
                <p>Ovi Opšti uslovi poslovanja (u daljem tekstu: Uslovi) regulišu korišćenje internet prodavnice [naziv sajta] kojom upravlja [pun naziv pravnog lica, adresa sedišta, PIB i matični broj], u daljem tekstu: Prodavac. <br /><br />

                    Kupac je svako fizičko ili pravno lice koje pristupi internet stranici i izvrši narudžbinu proizvoda ili usluga. <br />
                    Korišćenjem sajta i/ili kupovinom putem sajta, Kupac prihvata ove Uslove u celosti. Ukoliko se ne slažete sa uslovima, molimo vas da ne koristite sajt.</p>

                <h3>2. Narudžbina i zaključenje ugovora</h3>
                <p>Kupovina se obavlja putem sajta [www.nazivdomena.rs]. Nakon odabira željenog proizvoda i unošenja traženih podataka, narudžbina se potvrđuje klikom na dugme „Poruči“ ili slično. <br />
                    Ugovor između Prodavca i Kupca se smatra zaključenim u trenutku kada Prodavac potvrdi narudžbinu slanjem elektronske poruke (e-mail potvrda narudžbine).</p>

                <h3>3. Cene i plaćanje</h3>
                <p>Sve cene su izražene u dinarima (RSD) i uključuju PDV, osim ako nije drugačije naznačeno. <br />
                    Plaćanje se može izvršiti na sledeće načine: <br />
                    pouzećem (gotovinski prilikom isporuke), <br />
                    platnim karticama (Visa, MasterCard itd.), <br />
                    elektronskim bankarstvom (e-banking), <br />
                    uplatom na račun.</p>

                <h3>4. Isporuka</h3>
                <p>Isporuka se vrši na teritoriji Republike Srbije putem kurirskih službi sa kojima Prodavac ima ugovor o saradnji. <br />
                    Rok isporuke je od 1 do 5 radnih dana od potvrde narudžbine, osim u slučajevima vanrednih okolnosti (neradni dani, praznici, viša sila). <br />
                    Troškove isporuke snosi Kupac, osim ako nije drugačije navedeno.</p>

                <h3>5. Pravo na odustanak i povraćaj robe</h3>
                <p>Kupac koji je zaključio ugovor na daljinu ima pravo da odustane od ugovora bez navođenja razloga u roku od 14 dana od prijema robe. <br />
                    Kupac je dužan da robu vrati u istom stanju u kojem ju je primio, neupotrebljavanu i u originalnom pakovanju. Trošak povraćaja robe snosi Kupac.</p>

                <div className="scrollable-terms">
                    <h3>6. Reklamacije i garancija</h3>
                    <p>Kupac ima pravo na reklamaciju u skladu sa Zakonom o zaštiti potrošača.
                        Reklamacije se podnose putem e-maila na adresu [email adresa] ili telefonom na broj [broj telefona].
                        Kupac ima pravo na opravku, zamenu, sniženje cene ili raskid ugovora u slučaju nesaobraznosti robe.</p>

                    <h3>7. Zaštita podataka o ličnosti</h3>
                    <p>Prodavac se obavezuje da sve podatke o Kupcu koristi isključivo u svrhu realizacije narudžbine i u skladu sa Zakonom o zaštiti podataka o ličnosti.
                        Podaci se neće ustupati trećim licima bez pristanka Kupca, osim ako to nije zakonska obaveza.</p>

                    <h3>8. Izmene Uslova</h3>
                    <p>Prodavac zadržava pravo da u bilo kom trenutku izmeni ove Uslove. Sve izmene stupaju na snagu od dana objavljivanja na sajtu.
                    </p>

                    <h3>9. Rešavanje sporova</h3>
                    <p>Svi sporovi između Prodavca i Kupca rešavaju se mirnim putem, a ukoliko to nije moguće, nadležan je stvarno nadležni sud u mestu sedišta Prodavca.
                    </p>
                </div>
            </div>
            <MapFooter />
        </div>
    )
}