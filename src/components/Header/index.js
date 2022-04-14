import React from 'react';
import './index.css'

export const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <h1>Rettiwt</h1>
          </div>
      <div className='links'>
        <button>Home</button>
        <button>Rettiwt Docs</button>
        <a href='https://github.com/Khabspotter/' target='_blank'><button>GitHub</button></a>
      </div>
    </div>
  )
}
