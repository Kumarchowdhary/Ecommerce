import React from  'react';
import Link from 'next/link';
import axios from 'axios';
import Head from '../components/shared/Head';
import Styles from '../styles/Style';
import Navigation from '../components/navigationIndex';

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {user : []}
    }
    componentDidMount(){
        // axios.get('/getuser').then((response)=>{
        //     this.setState({user : response.data})
        // })
    }
    render(){
        return(
            <main >
                
                {/*<Navigation />*/}
                <Head cssLink='../static/index.css'/>
                <header className="col-md-12">
                    <div id="logo" className="col-md-1 col-md-offset-1"></div>
                    <nav id="navbar" className="col-md-7">
                        <ul type="none" id="navList" className="col-md-12">
                            <li>Home<i className="material-icons">keyboard_arrow_down</i></li>
                            <li>About us<i className="material-icons">keyboard_arrow_down</i></li>
                            <li>Contact<i className="material-icons">keyboard_arrow_down</i></li>
                            <li>Support<i className="material-icons">keyboard_arrow_down</i></li>
                            {/*<li>Blogs<i className="material-icons">keyboard_arrow_down</i></li>*/}
                        </ul>
                    </nav>
                    <Link href='/login' ><a><button id="loginBtn" className="col-md-1">Sign In</button></a></Link>
                    <Link href='/adminLogin' ><a><button id="loginBtn" className="col-md-1">Admin</button></a></Link>
                        
                </header>
                
                <section id="section1" className="col-md-12">
                    <div id="subsec1" className="row">
                        <h1 id="sec1head1" className="col-md-6 col-md-offset-3">The Most Popular eCommerce Platform</h1>
                        <h1 id="sec1head2" className="col-md-6 col-md-offset-3">For Shopping the Best Products.</h1>
                        <p id="sec1para" className="col-md-8 col-md-offset-2">With Over 18,422,142 Items, Powers Over 39% Of All Online Stores.</p>
                        <Link href='/login' ><a><button id="sec1Btn" className="col-md-2 col-md-offset-5">Get Started</button></a></Link>
                    </div>    
                </section>



                    <section id="section2" className="col-md-12">
                        <h1 id="sec2head1" className="col-md-6 col-md-offset-3">The Most Popular eCommerce Platform</h1>
                        <h1 id="sec2head2" className="col-md-6 col-md-offset-3">For Shopping the Best Products.</h1>

                        <br/>
                        <div id="sec2div" className="row">

                            <div id="sec2div1" className="col-md-3">
                                <i id="div1icon" className="material-icons col-md-3 col-md-offset-4">phonelink</i>
                                <h1 id="div1heading" className="col-md-10 col-md-offset-1">Easy To Use & Customize</h1>
                                <p id="div1para" className="col-md-11">Build an online store in minutes,
                                    with our intuitive admin interface you can customize the look of your site easily.</p>
                            </div>

                            <div id="sec2div2" className="col-md-3">
                                <i id="div2icon" className="material-icons col-md-3 col-md-offset-4">credit_card</i>
                                <h1 id="div2heading" className="col-md-10 col-md-offset-1">No Transaction Fees</h1>
                                <p id="div2para" className="col-md-11">Unlike our competitors we do not sneak-in 
                                    transaction fees that could end up costing you a small fortune.</p>
                            </div>

                            <div id="sec2div3" className="col-md-3">
                                <i id="div3icon" className="material-icons col-md-3 col-md-offset-4">timeline</i>
                                <h1 id="div3heading" className="col-md-10 col-md-offset-1">Feature Rich</h1>
                                <p id="div3para" className="col-md-11">We are undoubtedly the leader in advanced features,
                                     making us the right choice to build an online store (and at no extra cost)!</p>
                            </div>

                            <div id="sec2div4" className="col-md-3">
                                <i id="div4icon" className="material-icons col-md-3 col-md-offset-4">hearing</i>
                                <h1 id="div4heading" className="col-md-10 col-md-offset-1">24/7 Free Tech Support</h1>
                                <p id="div4para" className="col-md-11">We’re here to help our users from setup 
                                    to the most complicated matter. Even if you're using the trial.</p>
                            </div>
                        </div>
                    </section>
                    <section id="section3" className="col-md-12">
                        <div id="sec3headDiv" className="col-md-6 col-md-offset-1">
                            <h1 className="col-md-12">The most <b>customizable eCommerce platform</b> for shopping the <b>Best Products</b>.</h1>
                        </div>
                        <Link href='/login' ><a><button id="sec3Btn" className="col-md-2 col-md-offset-2">Get Started</button></a></Link>
                    </section>
                    <section id="section4" className="col-md-12">
                        <h1 id="sec4heading" className="col-md-6 col-md-offset-3">Puchase Anything. Beautifully.</h1>
                        <p id="sec4para" className="col-md-8 col-md-offset-2">From real products and digital downloads
                             to subscriptions, content and even your time,
                             you’ll be able to purchase anything from store <b>that’s perfect for you.</b></p>
                        <Link href='/login' ><a><button id="sec4Btn" className="col-md-2 col-md-offset-5">Get Started</button></a></Link>
                    </section>
                    <footer>
                        <div id="subFooter">
                        <p id="footerPara" className="col-md-8 col-md-offset-1">Do you need help? <a>Contact us</a> | <a>Legal notice</a> | © 2017, eCommerce Private Platform, Ltd.</p>
                        <div id="footerIconsDiv" className="col-md-2 col-md-offset-1">
                            <i className="fa fa-facebook-f footerIcons"></i>
                            <i className="fa fa-instagram footerIcons"></i>
                            <i className="fa fa-slack footerIcons"></i>
                            <i className="fa fa-twitter footerIcons"></i>
                            <i className="fa fa-github footerIcons"></i>
                        </div>
                        </div>
                    </footer>
            </main>
        );
    }
}
