import React from 'react'
import Html from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JavaScript from "../../assets/java-script.png";
import Tailwind from "../../assets/tailwind.png";
import Reactss from "../../assets/react.png";
import Native from "../../assets/native.png";


function Frontend() {
  return (
    <div className='skills__content'>
        <h3 className='skills__title'>Frontend developer</h3>

        <div className='skills__box'>
            <div className='skills__group'>
                <div className='skills__data'>
                    <img 
                    src={Html} 
                    alt="HTML Logo" 
                    style={{ width: "20px", height: "20px" }} 
                    />

                

             <div>
                <h3 className='skills__name'>HTML</h3>
                <span className='skills__level'>Advanced</span>
            </div>   
            </div>


            <div className='skills__data'>
                    <img 
                    src={CSS} 
                    alt="HTML Logo" 
                    style={{ width: "20px", height: "20px" }} 
                    />
                
             <div>
                <h3 className='skills__name'>CSS</h3>
                <span className='skills__level'>Advanced</span>
            </div>   
            </div>


            <div className='skills__data'>
                    <img 
                    src={JavaScript} 
                    alt="HTML Logo" 
                    style={{ width: "20px", height: "20px" }} 
                    />
                
             <div>
                <h3 className='skills__name'>JavaScript</h3>
                <span className='skills__level'>Advanced</span>
            </div>   
            </div>
            </div>

            <div className='skills__group'>
                <div className='skills__data'>
                    <img 
                    src={Tailwind} 
                    alt="HTML Logo" 
                    style={{ width: "20px", height: "20px" }} 
                    />
             <div>
                <h3 className='skills__name'>TailwindCss</h3>
                <span className='skills__level'>Advanced</span>
            </div>   
            </div>


            <div className='skills__data'>
                    <img 
                    src={Reactss} 
                    alt="HTML Logo" 
                    style={{ width: "20px", height: "20px" }} 
                    />
             <div>
                <h3 className='skills__name'>ReactJs</h3>
                <span className='skills__level'>Advanced</span>
            </div>   
            </div>


            <div className='skills__data'>
                    <img 
                    src={Native} 
                    alt="HTML Logo" 
                    style={{ width: "20px", height: "20px" }} 
                    />
                

             <div>
                <h3 className='skills__name'>ReactNative</h3>
                <span className='skills__level'>Advanced</span>
            </div>   
            </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend
