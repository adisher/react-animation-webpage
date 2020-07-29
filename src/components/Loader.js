import React from 'react'
import logo from '../images/logo.svg'
import './loader.css'

export default function Loader() {
    return (
        <>
        <div style={{backgroundColor: '#383b84', height: '100vh'}}>
        </div>
            <div className='centered'>
                <img 
                    className='App-logo'
                    src={logo} alt="logo" 
                    style={{height:250}} 
                />
            </div>
        </>
    )
}