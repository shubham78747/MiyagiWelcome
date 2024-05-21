import React, { useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import './Welcome.css';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ClearIcon from '@mui/icons-material/Clear';

const Welcome = () => {
    const [show, setShow] = useState(false);
    const [childmodalshow, setChildModalShow] = useState(false);

    const openmodal = () => {
        setShow(true);
    };

    const closemodal = () => {
        setShow(false);
    };

    const openchildmodal = () => {
        setChildModalShow(true);
    };

    const Childclosemodal = () => {
        setChildModalShow(false);
    };

    return (
        <>
            <div className={`text-center ${show === true ? 'blur-background' : ''}`}>
                <div className="header">
                    <div className='miyagi-logo'>
                        <Image src="Images/blacklogo.svg" alt="Miyagi Logo" />
                    </div>
                </div>
                <div className="wel">
                    <div className="miyagi">
                        <h2><span>WELCOME TO</span> MIYAGI</h2>
                    </div>
                </div>
                <div className="drag-bg">
                    <div className="drag">
                        <button onClick={openmodal}><Image src="Images/drag.svg" alt="Drag and Drop" />Drag and Drop</button>
                    </div>
                    <div className="demo">
                        <Link to="/">Download The Demo</Link>
                    </div>
                </div>
            </div>

            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header style={{ position: 'relative' }}>
                    <ClearIcon
                        onClick={closemodal}
                        style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', backgroundColor: 'transparent', color: '' }}
                    />
                    <Modal.Title id="contained-modal-title-vcenter">
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="popup-bg">
                        <div className="popup-content">
                            <Image src="Images/popupicon.svg" alt=" " />
                            <h4>This document was issued by Miyagi Labs LLP, Timestamped on,
                                5th August 2023 at 2:35 PM(Indian Standard Time)</h4>
                        </div>
                        <div className="popup-button">
                            <Button onClick={openchildmodal}>View on the chain</Button>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

            <Modal
                show={childmodalshow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header style={{ position: 'relative' }}>
                    <ClearIcon
                        onClick={Childclosemodal}
                        style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', backgroundColor: 'transparent', color: '' }}
                    />
                    <Modal.Title id="contained-modal-title-vcenter">
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="popup-bg">
                        <div className="popup-content">
                            <h4>This document was issued by Miyagi Labs LLP, Timestamped on,
                                5th August 2023 at 2:35 PM(Indian Standard Time)</h4>
                        </div>
                        <div className="popup2-button">
                            <Button onClick={openchildmodal}><Image src="Images/popup2icon.svg" alt=" " /></Button>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Welcome;
