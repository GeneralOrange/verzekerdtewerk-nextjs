import { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import styles from '../../styles/flexcontent/ContactForm.module.scss'

export default function PlaceOrderForm({ data }) {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    })
    
    const [inputs, setInputs] = useState({
        to_adres: data.to_adres ? data.to_adres : 'opdrachten@verzekerdtewerk.nl',
        name: '',
        email: '',
        task: '',
        adres: '',
        city: '',
        message: ''
    })
    
    const handleResponse = (status, msg) => {
        if (status === 200) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg }
            })
            setInputs({
                to_adres: data.to_adres ? data.to_adres : 'opdrachten@verzekerdtewerk.nl',
                name: '',
                email: '',
                task: '',
                adres: '',
                city: '',
                message: ''
            })
        } else {
            setStatus({
                info: { error: true, msg: msg }
            })
        }
    }
    
    const handleOnChange = e => {
        e.persist()
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
        })
    }
    
    const handleOnSubmit = async e => {
        e.preventDefault()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        const res = await fetch('/api/PlaceOrderFormSend', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        })
        const text = await res.text()
        handleResponse(res.status, text)
    }

    const tasks = [
        'Aanbouw of opbouw plaatsen',
        'Afzuigkap installeren of vervangen',
        'Airconditioning reparatie of onderhoud',
        'Betonvloer of cementdekvloer aanbrengen',
        'Binnendeur plaatsen of vervangen',
        'Binnenmuur metselen',
        'Binnenschilderwerk',
        'Binnenzonwering plaatsen of vervangen',
        'Boeidelen, windveren of rabatdelen vervangen of repareren',
        'Bouw- en constructietekening',
        'Buitendeur of verstevigde deur plaatsen of vervangen',
        'Buitenschilderwerk',
        'Constructieberekeningen',
        'CV ketel repareren of onderhouden',
        'Dakramen of lichtkoepels plaatsen of vervangen',
        'Deurbel of intercom installeren of repareren',
        'Deuren repareren',
        'Douche of bad reparatie',
        'Elektrisch hek of poort installeren of vervangen',
        'Garagedeur plaatsen of vervangen',
        'Gasleiding aanleggen of vervangen',
        'Gaten boren',
        'Gevelrenovatie',
        'Glas zetten of vervangen',
        'Grond afgraven of egaliseren',
        'Hor plaatsen of vervangen',
        'IKEA badkamer',
        'IKEA vloer',
        'Kitten',
        'Kraan plaatsen, vervangen of repareren',
        'Laminaat leggen',
        'Lamp ophangen',
        'Lekkage verhelpen',
        'Lijsten en ornamenten',
        'Metaalbewerking',
        'Meubel(s) maken',
        'Meubel(s) monteren',
        'Ombouw/koof plaatsen/vervangen',
        'Openhaard plaatsen of renoveren',
        'Openhaard repareren of onderhouden',
        'Opstijgend of doorslaand vocht bestrijden',
        'Pergola of tuinhuis plaatsen',
        'Plafond plaatsen of verlagen',
        'Puin of meubilair afvoeren',
        'Raamkozijnen plaatsen of vervangen',
        'Raamkozijnen repareren',
        'Radiator (ver)plaatsen of vervangen',
        'Reparatie witgoed',
        'Riolering en afvoer ontstoppen of reinigen',
        'Rolluik plaatsen of vervangen',
        'Rookkanaal installeren of vervangen',
        'Sanitair plaatsen of vervangen',
        'Schoorsteen metselen of repareren',
        'Schoorsteen vegen',
        'Schuifpui of openslaande deuren plaatsen of vervangen',
        'Serre (ver)bouwen',
        'Sloopwerk algemeen',
        'Stopcontacten en schakelaars installeren',
        'Stucwerk binnen',
        'Stucwerk buiten',
        'Stucwerk repareren',
        'Thermostaat plaatsen of vervangen',
        'Toilet renovatie',
        'Trap plaatsen of renoveren',
        'Tuin- of buitenverlichting installeren',
        'Tuinonderhoud',
        'Ventilatiesysteem installeren of vervangen',
        'Verhuizen binnen hetzelfde gebouw',
        'Verlichting installeren of verplaatsen',
        'Vloer reparatie',
        'Vloer verwijderen',
        'Vloerverwarming installeren of vervangen',
        'Vloerverwarming repareren of onderhoud',
        'Vlonders plaatsen of vervangen',
        'Wand- of vloertegels zetten',
        'Waterleiding en riolering (ver)plaatsen of vervangen',
        'Airco afvoer',
        'Airco bijvullen',
        'Airco buiten unit',
        'Airco elektra',
        'Airco installeren of vervangen',
        'Airco onderhoud',
        'Airco plaatsen',
        'Airco vervangen',
        'Alarmsysteem installeren of vervangen',
        'Asbest verwijderen',
        'Autostoel bekleding repareren',
        'Autostoel bekleding vernieuwen',
        'Badkamer plaatsen of renoveren',
        'Badkamer werkzaamheden',
        'Balkon (ver)bouwen',
        'Behang verwijderen',
        'Behang werkzaamheden',
        'Behangen kamer',
        'Bestrating aanleggen',
        'Binnen- of buitenluiken plaatsen of vervangen',
        'Binnenhuis ontwerp',
        'Binnenwand plaatsen',
        'Bint plaatsen of vervangen',
        'Boiler plaatsen of vervangen',
        'Boiler repareren of onderhouden',
        'Bomen of struiken planten',
        'Bomen snoeien of verwijderen',
        'Brandwerende isolatie',
        'Buitendeuren repareren',
        'Buitenmuur plaatsen',
        'Carport plaatsen',
        'Constructieberekeningen',
        'Dak werkzaamheden',
        'Dak, dakgoot of dakterras reparatie/onderhoud',
        'Dakdoorvoer maken, verplaatsen of vervangen',
        'Dakgoten en/of regenpijp plaatsen of vervangen',
        'Dakkapel of dakraam repareren',
        'Dakrenovatie of -vervanging',
        'Databekabeling (Internet, UTP, Coax) aanleggen of repareren',
        'Decoratief schilderwerk',
        'Diverse kleine klussen',
        'Droger reparatie',
        'Droger verplaatsen',
        'Elektra leidingen aanleggen',
        'Elektriciteit werkzaamheden',
        'Elektrisch hek of poort repareren',
        'Funderingen en heiwerken',
        'Garage (ver)bouwen',
        'Gasleiding repareren',
        'Geluidsisolatie',
        'Gevel reparatie of behandeling',
        'Gevel voegen',
        'Gevel werkzaamheden',
        'Gietvloer aanbrengen',
        'Glaszet werkzaamheden',
        'Glazenwassen',
        'Gordijnen (ver)maken',
        'Gordijnrails ophangen',
        'Granito of marmeren vloer aanleggen',
        'Gras leggen of zaaien',
        'Gras, struiken en heggen snoeien of verwijderen',
        'Groepenkast installeren of uitbreiden',
        'Hek of schutting repareren of onderhouden',
        'Houten vloer of parketvloer leggen',
        'Installatie werkzaamheden',
        'Isolatie werkzaamheden',
        'Kattenluikje plaatsen of verwijderen',
        'Kelder bouwen of renoveren',
        'Keuken (de)monteren en plaatsen',
        'Keuken gereedmaken voor plaatsing',
        'Keuken plaatsen of renoveren',
        'Keuken werkzaamheden',
        'Keukenapparatuur plaatsen of vervangen',
        'Keukenblad plaatsen of vervangen',
        'Keukenkastjes repareren',
        'Kit vernieuwen',
        'Kit verwijderen',
        'Kitten badkamer',
        'Kitten keuken',
        'Kitten toilet',
        'Kitten washok',
        'Kitten werkzaamheden',
        'Klus in of rond het huis',
        'Koelkast reparatie',
        'Koelkast verplaatsen',
        'Kookplaat reparatie',
        'Kozijnen werkzaamheden',
        'Kunst of voorwerpen aan muur ophangen',
        'Laadpaal plaatsen of vervangen',
        'Lamp plaatsen',
        'Lekkage detectie',
        'Lekkage leiding',
        'Licht schakelaar plaatsen',
        'Luiken repareren',
        'Metsel werkzaamheden',
        'Meubels stofferen',
        'Mobiele airco',
        'Muren of gevels reinigen of zandstralen',
        'Nieuwbouw volledig huis',
        'Nieuwe airco',
        'Onderhoud en reparatie zonnepanelen',
        'Ondervloer leggen',
        'Openhaard ontwerp',
        'Opslag goederen',
        'Oven verplaatsen',
        'Pelletkachel plaatsen of vervangen',
        'Pelletkachel repareren of onderhouden',
        'Piano transport',
        'Plinten hal',
        'Plinten keuken',
        'Plinten plaatsen of vervangen',
        'Plinten slaapkamer',
        'Plinten verstekzagen',
        'Plinten werkzaamheden',
        'Plinten woonkamer',
        'Radiatorkranen plaatsen of vervangen',
        'Reinigen zonwering of markies',
        'Renovatie huis',
        'Renovlies- of glasvezelbehang aanbrengen',
        'Riolering werkzaamheden',
        'Riool',
        'Riool afvoer in koof',
        'Riool in kruipruimte',
        'Rolluik repareren',
        'Schilder werkzaamheden',
        'Schoonmaak daken of dakgoten',
        'Schoonmaak huis of bedrijfspand',
        'Schoonmaak rolluiken',
        'Schoonmaak werkzaamheden',
        'Schoorsteen maken',
        'Schutting of hek plaatsen',
        'Slim in huis',
        'Slim in huis werkzaamheden',
        'Slimmen lampen',
        'Sloop werkzaamheden',
        'Sloten plaatsen of repareren',
        'Soorten plinten ',
        'Speakers installeren',
        'Stopcontact plaatsen',
        'Stopcontacten en schakelaars installeren',
        'Stratenmaak werkzaamheden',
        'Stukwerkzaamheden',
        'Tegelen badkamer',
        'Tegelen keuken',
        'Tegelen toilet',
        'Tegelen vloer',
        'Tegelen washok',
        'Tegelzet werkzaamheden',
        'Timmer werkzaamheden',
        'Toilet repareren',
        'Trap repareren of onderhoud',
        'Trappen stofferen',
        'Tuin irrigatie',
        'Tuinaanleg',
        'Tuinontwerp',
        'TV-Satelliet aansluitingen installeren of repareren',
        'Tv ophangen',
        'Vaatwasser reparatie',
        'Vaatwasser verplaatsen',
        'Vensterbanken plaatsen of vervangen',
        'Ventilatiesysteem reparatie of onderhoud',
        'Veranda aanleggen of vervangen',
        'Verhuizing',
        'Verhuizing particulier',
        'Verhuizing zakelijk',
        'Vernissen van meubels',
        'Vijver aanleggen',
        'Vinyl / Linoleum / PVC vloer leggen',
        'Vliering plaatsen of renoveren',
        'Vloer egaliseren',
        'Vloer isoleren',
        'Vloer schuren, oliën of lakken',
        'Vloerbedekking leggen of vervangen',
        'Wand- of vloertegels repareren',
        'Warmte isolatie',
        'Warmtepomp installeren of vervangen',
        'Warmtepomp repareren of onderhouden',
        'Wasmachine reparatie',
        'Wasmachine verplaatsen',
        'Waterdichte isolatie',
        'Waterleiding  (ver)plaatsen of vervangen',
        'Witgoed ophalen',
        'Witgoed reparatie',
        'Witgoed verplaatsing',
        'Zolder (ver)bouwen',
        'Zonneboiler installeren of vervangen',
        'Zonneboiler repareren of onderhouden',
        'Zonnepaneel systeem installeren of onderhouden',
        'Zonnepanelen installeren of vervangen',
        'Zonwering of zonnescherm plaatsen of vervangen',
        'Zwembad plaatsen of renoveren',
];

    const task_options = tasks.map((task, index) => (
        <option key={index} value={task}>{task}</option>
    ))

    const title = data ? (
        <div className={styles.ContactForm__title}>
            { data.title }
        </div>
    ): '';

    return (
        <div className={styles.ContactForm}>
            {title}
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Naam</Form.Label>
                        <Form.Control
                            id="name"
                            type="text"
                            onChange={handleOnChange}
                            required
                            value={inputs.name}
                            placeholder="Uw Naam"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            id="email"
                            type="email"
                            onChange={handleOnChange}
                            required
                            value={inputs.email}
                            placeholder="Bijv. info@verzekerdtewerk.nl"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Adres</Form.Label>
                        <Form.Control
                            id="adres"
                            type="text"
                            onChange={handleOnChange}
                            required
                            value={inputs.adres}
                            placeholder="Uw Adres"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Plaats</Form.Label>
                        <Form.Control
                            id="city"
                            type="text"
                            onChange={handleOnChange}
                            required
                            value={inputs.city}
                            placeholder="Uw Plaats"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Type opdracht</Form.Label>
                        <Form.Control
                            id="task"
                            as="select"
                            onChange={handleOnChange}
                            required
                            type="select">
                            {task_options}
                        </Form.Control>
                        <Form.Text muted>
                            Wat omschrijft uw opdracht het beste?
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Extra Omschrijving</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            id="message"
                            placeholder="Typ hier een omschrijving van uw opdracht..."
                            onChange={handleOnChange}
                            required
                            value={inputs.message}/>
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        disabled={status.submitting}>
                        {!status.submitting
                            ? !status.submitted
                            ? 'Verstuur'
                            : 'Verstuurd'
                            : 'Versturen...'}
                    </Button>
                </Form>
            
            {status.info.error && (
                <Alert className="mt-3" variant={'danger'}>{status.info.msg}</Alert>
            )}
            {!status.info.error && status.info.msg && (
                <Alert className="mt-3" variant={'success'}>{status.info.msg}</Alert>
            )}
        </div>
    )
}
