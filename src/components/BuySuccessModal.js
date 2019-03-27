import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import checkbox from "../img/checkbox.png";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import config from "../config/config";
class BuySuccessModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            transactionId : "#"
        };

        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    open(transactionId) {
        this.setState ({
            modal: true,
            transactionId: transactionId
        });
    }
    close() {
        this.setState ({
            modal: false
        });
    }

    render() {
        let translation = config.translation.success_modal;
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{translation.title}</ModalHeader>
                    <ModalBody>
                        <Container>
                            <Row>
                                <Col md="12" className="text-center">
                                    <img src={checkbox} alt="" width="50%" className="pic"/>
                                </Col>
                            </Row>
                            <Row>
                                <p className="small">{translation.info_1}{this.state.transactionId}
                                    {translation.info_2}</p>
                            </Row>
                        </Container>

                    </ModalBody>
                    <ModalFooter>
                        <Button  className="btn btn-green" onClick={this.close}>Close</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default BuySuccessModal;