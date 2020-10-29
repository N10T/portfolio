import React from 'react'

const photoURL = "./photo.jpeg"

export default function Photo() {
    return (
        <div style={{width:"100%", height:"270vh", backgroundImage:`url(${photoURL})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            {/* <img src= alt="sport"/> */}
        </div>
    )
}
