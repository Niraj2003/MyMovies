import 'bootstrap/dist/css/bootstrap.min.css';
import './Myfooter.css';
import React from 'react';

function Myfooter() {
    return (
        <>
        <div id='footer'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="logos my-2">
                <a href="https://twitter.com/AmrutkarNiraj" target="_blank" rel="noopener noreferrer" className="fa fa-twitter"> </a>
                <a href="mailto:amrutkarniraj21@gmail.com?subject=Mail from our Website"  className="fa fa-google"> </a>
                <a href="https://www.linkedin.com/in/niraj-amrutkar/" target="_blank" rel="noopener noreferrer" className="fa fa-linkedin"> </a>
                <a href="https://github.com/Niraj2003" target="_blank" rel="noopener noreferrer" className="fa fa-github"> </a>
            </div>
            <div className="bottom " > <center>Made By <a href='https://www.linkedin.com/in/niraj-amrutkar/' target="_blank" rel="noopener noreferrer">Niraj Amrutkar</a></center> </div>
        </div>


        </>
    )
}

export default Myfooter;