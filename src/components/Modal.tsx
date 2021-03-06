
import React, { Dispatch, SetStateAction, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { OutlinedContainer, Row } from "./layout/Common";
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

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
  width: 192%;
  background-color: ${(props) => props.theme.border};
`;

const StyledSpan = styled.span`
  display: block;
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #cccccc;
  transition: color 0.15s ease;
  :hover {
    color: #ffffff;
  }
`;


interface ModalProps {
showModal: boolean; 
setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC <ModalProps> = (props) => {
    const { activate, account, deactivate } = useWeb3React<Web3Provider>();
    const logoutUser = useCallback(async () => {
        deactivate();
      }, [deactivate]);

    return (
        <>
            {props.showModal ?
                <>
                    <Container>
                        <StyledSpan><Link to={'/settings'}>Settings</Link></StyledSpan>
                        <HR/>
                        <StyledSpan><div onClick={logoutUser}>Log out</div></StyledSpan>
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
