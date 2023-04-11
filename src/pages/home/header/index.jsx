import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import "./index.css"
import Title from "../../../assets/images/header/Title.gif"
import Treeleft from "../../../assets/images/tree left.png"
import Treeright from "../../../assets/images/tree right.png"
import Cloud1 from "../../../assets/images/cloud 1.png"
import Cloud2 from "../../../assets/images/cloud 2.png"
import Cloud3 from "../../../assets/images/cloud 3.png"
import fb from "../../../assets/images/socials/fb.png"
import insta from "../../../assets/images/socials/insta.png"
import yt from "../../../assets/images/socials/yt.png"
import tweeter from "../../../assets/images/socials/tweeter.png"
import tiktok from "../../../assets/images/socials/tiktok.png"
import discord from "../../../assets/images/socials/discord.png"
import telegram from "../../../assets/images/socials/telegram.png"
import forground from "../../../assets/images/bottom forground.png"
import holder from "../../../assets/images/Holder.png"


const Header = () => {
    return (
        <MDBContainer
        fluid 
        className="custom-header-background"
        >
        {/* Header */}
        <div className="tree">
            <img src={Treeleft} alt="treeleft" className="img-fluid"/>
            <div className="titlecloud">
                <img src={Title} alt="title" className="img-fluid title" />
                <img src={Cloud3} alt="cloud3" className="img-fluid cloud3 x3"/>            
            </div>
            <img src={Treeright} alt="treeright" className="img-fluid"/>
        </div>
        <div>
            <img src={Cloud2} alt="cloud2" className="img-fluid cloud2 x2"/>
            <img src={Cloud1} alt="cloud1" className="img-fluid cloud1 x1"/>
        
        <div className="holder">
             <img src={holder} alt="holder" className="maintenance"/>
        </div> 
        </div>    
        
            
            
        
        {/* Socials */}
        <div className="titlecloud">
        <img src={fb} alt="fb" className="socials"/>
        <img src={insta} alt="fb" className="socials"/>
        <img src={yt} alt="fb" className="socials"/>
        <img src={tweeter} alt="fb" className="socials"/>
        <img src={tiktok} alt="fb" className="socials"/>
        <img src={discord} alt="fb" className="socials"/>
        <img src={telegram} alt="fb" className="socials"/>
        <img src={forground} alt="fb" className="forground"/>
        </div>
        
        
        </MDBContainer>
    )
}

export default Header;