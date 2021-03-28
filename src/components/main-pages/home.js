import '../../css/App.css';
import React from 'react';


function Home() {
    return (
        <div className="Main-Content">
            <h1 className='Main-Title'>Hello! Welcome to my React sandbox</h1>
            <p className="Main-Paragraph">This environment’s purpose is to act as a place to try out new and interesting React, as well as general JavaScript, libraries, and packages. I have created this area primarily for myself, however, I have made the repository public so that any who can create their own copy and have a go with some of these tools for themselves. </p>
            <p className="Main-Paragraph">To help manager this sandbox I will be introducing JSDocs to provide documentation. Listed here is the packages that have been bought into the repository:</p>
            <li className="Main-List">
                <ul className="Main-List-Point">React</ul>
                <ul className="Main-List-Point">React-table</ul>
                <ul className="Main-List-Point">React-router</ul>
            </li>
        </div>
    );
}
  
  export default Home;