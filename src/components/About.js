import React from 'react'

function About() {
  return (
    <div id='about'>
        <dl className='mx-5' style={{ display: 'block', marginTop: '1em',marginBottom: '1em',marginLeft: 0,marginRight: 0}}>
            <dt  style={{ fontSize: 20}}>About Project :</dt>
            <dd style={{ fontSize: 18 }}> &ensp;&ensp; This is the app of some collected movies and web series, in that user can add movies in given 
                movie-list and user also see brief about movie by clicking on moviename and can view rating of 
                that movie on famous site IMDB</dd>
            <dt  style={{ fontSize: 20 }}>Technologies Used :</dt>
            <dd  style={{ fontSize: 18 }} > &ensp;&ensp; ReactJS, Html, CSS, JS, Bootstrap</dd>
        </dl>
    </div>
  )
}

export default About