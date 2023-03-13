import React from "react";
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

function Contacts() {
    return (
        <aside>
            <a className="d-block" href="#"><AiFillLinkedin class="icon" size="5rem" /></a>
            <a className="d-block" href="#"><AiOutlineGithub class="icon" size="5rem" /></a>
            <a className="d-block" href="#"><AiOutlineGithub class="icon" size="5rem" /></a>
        </aside>
    )
}

export default Contacts;