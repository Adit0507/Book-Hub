import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Find your book of choice.</h2><br />
                <p className='header-text fs-20 fw-3 text-bold'>Type in the name of a book or an author to get the results</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header