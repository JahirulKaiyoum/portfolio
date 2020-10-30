import React from 'react';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;