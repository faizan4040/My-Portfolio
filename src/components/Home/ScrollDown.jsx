import React from 'react'

function ScrollDown() {
  return (
    <div className='home__scroll'>
        <a href='#about' className='home__scroll-botton button--flex'>
   
       <lord-icon
    src="https://cdn.lordicon.com/jznyltqt.json"
    trigger="hover"
    colors="primary:#ebe6ef,secondary:#c74b16"
    style={{ width: "180px", height: "180px" }}>
    </lord-icon>
        <span className='home__scroll-name'>Scroll Down</span>
        <i className='uil uil-arrow-down home__scroll-arrow'></i>

        </a>

    </div>
  )
}

export default ScrollDown
