import React from "react"

const Social = () =>{

    return(
        <div className="home__social">
            <a href="https://www.linkedin.com/in/faizan-saifi30/" className="home__social-icon" rel="_blank">
                <lord-icon
                src="https://cdn.lordicon.com/kpoplnek.json"
                trigger="hover">
                </lord-icon>
            </a>

            <a href="https://www.dribbble.com/" className="home__social-icon" rel="_blank">
               <lord-icon
                src="https://cdn.lordicon.com/dbvisxjw.json"
                trigger="hover">
               </lord-icon>
            </a>

            <a href="https://github.com/faizan4040" className="home__social-icon" rel="_blank">
                <lord-icon
                    src="https://cdn.lordicon.com/ioihllwu.json"
                    trigger="hover">
                </lord-icon>
            </a>

        </div>
    )

}


export default Social