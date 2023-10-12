

import { Link } from 'react-router-dom';

import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'L', 'u', 'k', 'a', 's', ',']
    const jobArrray = ['C','o','m','p', 'u', 't', 'e', 'r', ' ', 'E','n','g','i','n','e','e','r','i','n','g', ' ', '\'', '2', '7']

    useEffect(() => {
         setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i!</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArrray}
                idx={12} />
                <br />
                </h1>
                <h2>Fullstack Developer / Queen's University ECEi / Sci '27</h2>
                <Link to ="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home