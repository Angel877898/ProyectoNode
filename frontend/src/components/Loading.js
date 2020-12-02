import React from 'react'
import '../assets/styles/components/Loading.css'

const Loading = () => {
    return (
        <div className='loading-effect'>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loading
