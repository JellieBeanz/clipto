
import React, { Dispatch, SetStateAction, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { OutlinedContainer, Row } from "./layout/Common";

const Container = styled(OutlinedContainer)` 
    border-radius: 10px;
    margin-top: 64px; 
    padding-left: 20px;
    padding-right: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

const HR = styled.div`
  height: 1px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: -20px;
  width: 198%;
  background-color: ${(props) => props.theme.border};
`;


interface ModalProps {
showModal: boolean; 
setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC <ModalProps> = (props) => {
    
    return (
        <>
            {props.showModal ?
                <>
                    <Container>
                        <Row><Link to={'/settings'}>Settings</Link></Row>
                        <HR/>
                        <Row><Link to={'/logout'}>Log out</Link></Row>
                    </Container>
                </>
                : null}
        </>
    );
};


export default Modal

function setShowModal(arg0: boolean) {
    throw new Error("Function not implemented.");
}
