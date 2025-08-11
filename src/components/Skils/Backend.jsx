import React from 'react'
import Node from "../../assets/node-js.png";
import java from "../../assets/java.png";
import Python from "../../assets/python.png";
import MongoDB from "../../assets/mongpdb.png";
import AI from "../../assets/ai.png";
import Firebase from "../../assets/Firebase.png";



function Backend() {
  return (
    <div className='skills__content'>
    <h3 className='skills__title'>Backend Developer</h3>

    <div className='skills__box'>
        <div className='skills__group'>
            <div className='skills__data'>
                   <img 
                    src={Node} 
                    alt="HTML Logo" 
                    style={{ width: "20px", height: "20px" }} 
                    />

            

         <div>
            <h3 className='skills__name'>NodeJS</h3>
            <span className='skills__level'>Frontend</span>
        </div>   
        </div>


        <div className='skills__data'>
                <img 
                    src={java} 
                    alt="HTML Logo" 
                    style={{ width: "20px", height: "20px" }} 
                    />
            

         <div>
            <h3 className='skills__name'>Java + DSA</h3>
            <span className='skills__level'>Frontend</span>
        </div>   
        </div>


        <div className='skills__data'>
                <img 
                    src={Python} 
                    alt="HTML Logo" 
                    style={{ width: "20px", height: "20px" }} 
                    />
         <div>
            <h3 className='skills__name'>Python</h3>
            <span className='skills__level'>Frontend</span>
        </div>   
        </div>
        </div>

        <div className='skills__group'>
            <div className='skills__data'>
                <img 
                    src={MongoDB} 
                    alt="HTML Logo" 
                    style={{ width: "20px", height: "20px" }} 
                    />
            

         <div>
            <h3 className='skills__name'>MongoDB</h3>
            <span className='skills__level'>Frontend</span>
        </div>   
        </div>


        <div className='skills__data'>
                <img 
                    src={AI} 
                    alt="HTML Logo" 
                    style={{ width: "20px", height: "20px" }} 
                    />
         <div>
            <h3 className='skills__name'>AI</h3>
            <span className='skills__level'>Frontend</span>
        </div>   
        </div>


        <div className='skills__data'>
                <img 
                    src={Firebase} 
                    alt="HTML Logo" 
                    style={{ width: "20px", height: "20px" }} 
                    />

         <div>
            <h3 className='skills__name'>Firebase</h3>
            <span className='skills__level'>Frontend</span>
        </div>   
        </div>
        </div>
    </div>
</div>
  )
}

export default Backend
