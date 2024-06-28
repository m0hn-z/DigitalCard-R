import React from "react";
import './Info.css'
export default function Info(){
    return(
       <>
        <div className="img">
            <img src="/logo.png" alt="" width='240px' />
        </div>
        <div className="info">
            <h1>Mohan Raj</h1>
            <h6> To Be Cybersecurity Expert</h6>
            <p>mohan.dev</p>
        </div>
        <div className="btns">
        <button className="email"><i class="fa-solid fa-envelope"></i>Email</button>
        <button className="linkedin"><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
        </div>
       </>
    )
}