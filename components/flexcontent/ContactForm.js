import { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import styles from '../../styles/flexcontent/ContactForm.module.scss'

export default function ContactForm({ data }) {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    })
    
    const [inputs, setInputs] = useState({
        to_adres: data.to_adres ? data.to_adres : 'support@verzekerdtewerk.nl',
        name: '',
        email: '',
        subject: '',
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
                to_adres: data.to_adres ? data.to_adres : 'support@verzekerdtewerk.nl',
                name: '',
                email: '',
                subject: '',
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
        const res = await fetch('/api/ContactFormSend', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputs)
        })
        const text = await res.text()
        handleResponse(res.status, text)
      }


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
                        <Form.Label>Reden voor contact</Form.Label>
                        <Form.Control
                            id="subject"
                            type="text"
                            onChange={handleOnChange}
                            required
                            value={inputs.subject}
                            placeholder="De reden dat u contact wilt opnemen"/>
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
                <Alert variant={'danger'}>{status.info.msg}</Alert>
            )}
            {!status.info.error && status.info.msg && (
                <Alert variant={'success'}>{status.info.msg}</Alert>
            )}
        </div>
    )
}
