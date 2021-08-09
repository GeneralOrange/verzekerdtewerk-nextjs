import { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import styles from '../../styles/flexcontent/ContactForm.module.scss'

export default function SignupSpecialistForm({ data }) {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    })
    
    const [inputs, setInputs] = useState({
        to_adres: data.to_adres ? data.to_adres : 'werken@verzekerdtewerk.nl',
        name: '',
        email: '',
        specialism_1: '',
        specialism_2: '',
        specialism_3: '',
        adres: '',
        city: '',
        distance: '',
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
                to_adres: data.to_adres ? data.to_adres : 'werken@verzekerdtewerk.nl',
                name: '',
                email: '',
                specialism_1: '',
                specialism_2: '',
                specialism_3: '',
                adres: '',
                city: '',
                distance: '',
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
        const res = await fetch('/api/SignupSpecialistFormSend', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        })
        const text = await res.text()
        handleResponse(res.status, text)
    }

    const specialisms = [
        '',
        'Aannemer',
        'Airco',
        'Architect',
        'Badkamer',
        'Behanger',
        'Dakdekker',
        'Domotica',
        'Elektricien',
        'Gevel',
        'Glaszetter',
        'Haard/schoorsteen',
        'Hovenier',
        'Installatie',
        'Isolatie',
        'Keukenmonteur',
        'Kitter',
        'Klusbedrijf',
        'Kozijnen',
        'Loodgieter',
        'Metselaar',
        'Plinten zetter',
        'Riolering',
        'Schilder',
        'Schoonmaak',
        'Sloop',
        'Stoffeerder',
        'Stratenmaker',
        'Stukadoor',
        'Tegelzetter',
        'Timmerman',
        'Verhuis',
        'Vloer',
        'Witgoed'
    ];

    const specialism_options = specialisms.map((specialism, index) => (
        <option key={index} value={specialism}>{specialism}</option>
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
                        <Form.Label>Specialisme 1</Form.Label>
                        <Form.Control
                            id="specialism_1"
                            as="select"
                            onChange={handleOnChange}
                            required
                            type="select">
                            {specialism_options}
                        </Form.Control>
                        <Form.Text muted>
                            Uw moet minimaal 1 specialisme selecteren
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Specialisme 2</Form.Label>
                        <Form.Control
                            id="specialism_2"
                            as="select"
                            onChange={handleOnChange}
                            type="select">
                            {specialism_options}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Specialisme 3</Form.Label>
                        <Form.Control
                            id="specialism_3"
                            as="select"
                            onChange={handleOnChange}
                            type="select">
                            {specialism_options}
                        </Form.Control>
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
                        <Form.Label>Max afstand u wenst te rijden voor uw klus in km</Form.Label>
                        <Form.Control
                            id="distance"
                            type="number"
                            onChange={handleOnChange}
                            required
                            value={inputs.distance}
                            placeholder="Hoeveelheid in km"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Bericht</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            id="message"
                            placeholder="Typ hier uw bericht..."
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
