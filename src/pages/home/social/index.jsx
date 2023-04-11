import React from "react";
import { MDBCol, MDBContainer } from "mdb-react-ui-kit";

import fb from "../../../assets/images/socials/fb.png"

const Social = () => {
    return (
        <MDBContainer fluid>
        <MDBCol>
            <img src={fb} alt="fb"/>
        </MDBCol>
        </MDBContainer>
    )
}

export default Social;