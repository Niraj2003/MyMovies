import React from 'react'
import './Table.css'
function About() {
  return (
    <div id='about'>
        <dl className='mx-10'>
            <dt  style={{ fontSize: 20}}>About Project :</dt>
            <dd style={{ fontSize: 18 }}> &ensp; <ul>This is the app of some collected movies and web series, in that user can add movies in given 
                movie-list and user also see brief about movie by clicking on moviename and can view rating of 
                that movie on famous site IMDB</ul> </dd>
            <dt  style={{ fontSize: 20 }}>Technologies Used :</dt>
            <dd  style={{ fontSize: 18 }} > &ensp;<ul>ReactJS, Html, CSS, JS, Bootstrap</ul> </dd>
        </dl>
    </div>
  )
}

export default About
