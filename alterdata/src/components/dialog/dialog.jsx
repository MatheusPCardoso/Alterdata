import * as React from 'react'
import Modal from 'react-bootstrap/Modal'
import FormExample from '../form/form';

export default function DialogComponent(props) {

    

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Cadastro
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormExample />
          </Modal.Body>
        </Modal>
      );
}
