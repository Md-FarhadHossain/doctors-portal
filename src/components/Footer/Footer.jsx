import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import footer from '../../assets/images/footer.png'

const Footer = () => {
    const currentYear= new Date().getFullYear()
  return (
    <section style={{
        backgroundImage: `url(${footer})`,
        backgroundPosition: 'center'
    }} className="bg-gray-900 pt-24">
    <footer className="container mx-auto footer p-10 flex flex-wrap justify-center lg:justify-between text-base-content">
      <div className="flex items-center">
        <img className="w-12" src={logo} alt="" />
        <div className='text-white'>
        <h2 className="text-2xl">
        Doctors Portal
          <br />
        </h2>
          <p>The maintenance of healthy teeth</p>
        </div>
      </div>
      <div className='text-white'>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div className='text-white'>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div className='text-white'>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>

    </footer>
    <p className='text-white pb-8 pt-16 text-center'><small>&copy; Farhad Hossain - {currentYear} All Rights Reserved</small></p>
  </section>
  )
}

export default Footer