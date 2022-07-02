import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import api from '../../utils/api'
import Alert from 'react-bootstrap/Alert'

export default function FormExample() {
    const [showAlert, setShowAlert] = useState(false)
    const [showSucess, setShowSucess] = useState(false)

    const [test, setTest] = useState({
        cod: '',
        date: '',
        status: '',
        motivo_falha: ''
    })

    const isValidForm = (form) => {
        if (form.cod.toString().length < 6 || form.cod.toString().length > 6)
            return false
        if (form.status === 'Selecione...' || form.motivo_falha === 'Selecione...')
            return false
        if (form.status === '' || form.motivo_falha === '')
            return false

        return true
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isValidForm(test)) {
            let temp = {
                cod_cliente: Number(test.cod),
                data: test.date,
                status: test.status === 'Sucesso' ? true : false,
                motivo_falha: test.status === 'Sucesso' ? '' : test.motivo_falha
            }
            api
                .post('/cliente', temp)
                .then(() => {
                    setTest({ cod: '', date: '', motivo_falha: '', status: '' });
                    setShowSucess(true)
                    setTimeout(() => {
                        setShowSucess(false)
                    }, 4000)
                    })
                .catch (err => console.log(err))

}
        else {
    setShowAlert(true)
    setTimeout(() => {
        setShowAlert(false)
    }, 4000);
}
    };

return (
    <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCod">
                <Form.Label>Código do cliente</Form.Label>
                <Form.Control type="number" placeholder="154765" value={test.cod} onChange={(e) => setTest(test => ({ ...test, cod: e.target.value }))} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Data</Form.Label>
                <Form.Control type="date" placeholder="Password" value={test.date} onChange={(e) => setTest(test => ({ ...test, date: e.target.value }))} />
            </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridStatus">
            <Form.Label>Status</Form.Label>
            <Form.Select type="select" value={test.status} onChange={(e) => setTest(test => ({ ...test, status: e.target.value }))}>
                <option>Selecione...</option>
                <option>Sucesso</option>
                <option>Falha</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridMotivo">
            <Form.Label>Motivo</Form.Label>
            <Form.Select type="select" value={test.motivo_falha} onChange={(e) => setTest(test => ({ ...test, motivo_falha: e.target.value }))}>
                <option >Selecione...</option>
                <option>sem aceso ao banco</option>
                <option>falta de espaço em disco</option>
                <option>base corrompida</option>
                <option>erro não esperado</option>
            </Form.Select>
        </Form.Group>
        <div style={{ width: "100%" }}>
            <Alert key="warning" variant="warning" show={showAlert}>
                Verifique os campos inseridos!
            </Alert>
            <Alert key="warning" variant="success" show={showSucess}>
                Enviado com sucesso!
            </Alert>
            <Button variant="primary" type="submit" style={{ float: "right", width: '15%' }}>
                Enviar
            </Button>
        </div>
    </Form>
);
}