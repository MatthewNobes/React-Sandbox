import '../../css/App.css';
import React from 'react';


function Home() {
    let currentPackages= ["React", "React-table", "React-router", "JSDocs"]
    let futurePackages= [ "SASS/SCSS", "Bootstrap"]

    return (
        <div className="Main-Content">
            <h1 className='Main-Title'>Hello! Welcome to my React sandbox</h1>
            <p className="Main-Paragraph">This environment’s purpose is to act as a place to try out new and interesting React, as well as general JavaScript, libraries, and packages. I have created this area primarily for myself, however, I have made the repository public so that any who can create their own copy and have a go with some of these tools for themselves. </p>
            <p className="Main-Paragraph">To help manager this sandbox I will be introducing JSDocs to provide documentation. Listed here is the packages that have been bought into the repository:</p>

            <ul className="list-group">
                {currentPackages.map(listitem => (
                    <li key={listitem}>{listitem}</li>
                ))}
            </ul>

            <p className="Main-Paragraph">The idea of this repository is that it will be constantly expanding whenever I want to try out a new tool. Here are some of the libraries I am considering introducting soon:</p>
            
            <ul className="list-group">
                {futurePackages.map(listitem => (
                    <li key={listitem}>{listitem}</li>
                ))}
            </ul>

        </div>
    );
}
  
  export default Home;