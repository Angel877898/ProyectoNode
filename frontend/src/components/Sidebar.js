import React from 'react'
import '../assets/styles/components/Sidebar.css'
import getAdminInfo from '../utils/services/getAdminInfo'
import Gravatar from 'react-gravatar'


const phoneIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> 
const addressIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
const mailIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>

const Sidebar = () => {
    const data = getAdminInfo()
    const fullname = `${data.name} ${data.last_name}`
    return (
        <div className='sidebar'>
            <div className='main-data'>
                <Gravatar email="a-email@example.com" className="photo"  />
                <h3>{fullname}</h3>
            </div>
            <div className='aditional-data'>
                <span>
                    { mailIcon }
                    <h6>Correo</h6>
                    <p>{data.mail}</p>
                </span>
                <span>
                    { phoneIcon }
                    <h6>Teléfono</h6>
                    <p>{data.tel}</p>
                </span>
                <span>
                    { addressIcon }
                    <h6>Dirección</h6>
                    <p>{data.address}</p>
                </span> 
            </div>
        </div>
    )
}

export default Sidebar
