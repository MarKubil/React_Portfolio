import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css"
import image from "../../assets/img/placeholder.jpg"
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function Header() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className="container-fluid">
            <div id="outer">
                <div id="inner">
                    <img onClick={handleShow} className="img-fluid box" id="img" alt="profile" src={image} />
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Marius Kubilius</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{margin: "auto"}}><img alt="profile" src={image}/></Modal.Body>
            </Modal>
            <div id="description">
                <h1>I'm Marius Kubilius</h1>
                <h3>Website Developer</h3>
            </div>

        </header>
    )
};

export default Header;