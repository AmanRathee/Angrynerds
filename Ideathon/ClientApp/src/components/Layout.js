import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import logo from "../wwwroot/Naglogo.png";

import '../custom.css'

export class Layout extends Component {
    static displayName = Layout.name;
    


    render() {
        const divStyle = {
            backgroundColor: '#13294b',
        };
    return (
        <div>

            {/*<NavMenu />*/}
            <div>
                <div className="mainHeader">
                    <div className="page-center page-pad">
                        <div className="row-fluid mainHeader--content">
                            <div className="span3">
                                <div className="mainHeader--logoSections">
                                    <div className="mainHeader--logo">
                                        <a href="/abc">

                                            <img src="https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Nagarro%20green%20logo%20with%20white%20title.svg" alt="English (United States)" title="English (United States)"/>
                            </a>
                        </div>
                                    <div className="mainHeader--separator mainHeader--desktop"></div>
                                    </div>
                    {/*            <div className="mainHeader--logoSections">*/}
                    {/*                <div className="mainHeader--logo">*/}
                    {/*                    <a href="/en">*/}
                    {/*                        <img className="mainHeader--logoDark nav-logo" src="https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Nagarro%20green%20logo%20with%20title_opt.svg" alt="English (United States)" title="English (United States)"/>*/}
                    {/*                        <img className="mainHeader--logoLight nav-logo" src="https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Nagarro%20green%20logo%20with%20white%20title.svg" alt="English (United States)" title="English (United States)" />*/}
                    {/*                        <img className="mainHeader--logoLight nav-logo" src={logo} alt="English (United States)" title="English (United States)" />*/}

                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*                        <div className="mainHeader--separator mainHeader--desktop"></div>*/}
                    {/*</div>*/}
                                    </div>
                                    <div className="span9">
                                        <div className="mainHeader--navSections">
                                            <div className="mainHeader--section mainHeader--desktop">
                                                <div className="mainHeader--nav">
                                                    <ul>
                                                        <li>
                                                    <a data-mega-menu-id="megaMenuIndustries" href="/en/industries" style={{ color: '#fff' }}>industries</a>
                                                        </li>
                                                        <li>
                                                    <a data-mega-menu-id="megaMenuServices" href="/en/services" style={{ color: '#fff' }}>services</a>
                                                        </li>
                                                        <li>
                                                    <a data-mega-menu-id="megaMenuInsights" href="/en/insights-events" style={{ color: '#fff' }}>insights</a>
                                                        </li>
                                                        <li>
                                                    <a data-mega-menu-id="megaMenuEvents" href="https://www.nagarro.com/en/events" style={{ color: '#fff' }}>events</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mainHeader--section mainHeader--desktop">
                                                <div className="mainHeader--nav">
                                                    <ul>
                                                        <li>
                                                    <a data-mega-menu-id="megaMenuAbout" href="/en/company" style={{ color: '#fff' }}>about</a>
                                                        </li>
                                                        <li>
                                                    <a data-mega-menu-id="megaMenuCareer" href="/en/careers" style={{ color: '#fff' }}>careers</a>
                                                        </li>
                                                        <li>
                                                    <a data-mega-menu-id="megaMenuContacts" href="/en/contact-us" style={{ color: '#fff' }}>contact us</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="langSwitcher">
                                                    <div className="langSwitcher--selectedLang">

                                                        en

                                                    </div>
                                                    <ul className="langSwitcher--options">

                                                        <li><a className="brand-link-03" href="#">en</a></li>
                                                        <li className="langSwitcher--switchTo"><a className="brand-link-03" href="#">de</a></li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mainHeader--hamburger mainHeader--tablet">
                                                <img className="mainHeader--hamburgerDark" src="https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Icons/hamburger-dark.svg" alt="English (United States)" title="English (United States)"/>
                                                    <img className="mainHeader--hamburgerLight" src="https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Icons/hamburger-white.svg" alt="English (United States)" title="English (United States)"/>
                        </div>
                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="megaMenu">
                                        <div className="page-center page-pad megaMenu--content megaMenu--content-show" id="megaMenuIndustries">
                                            <div className="row-fluid">
                                                <div className="span2">
                                                    <div className="megaMenu--info">
                                                        <div>
                                                            <div className="megaMenu--title">
                                                                industries
                                                            </div>
                                                            <div className="megaMenu--description body-text brand-04-neg-20">
                                                                Explore how digital product engineering can transform your industry.
                                                            </div>
                                                        </div>
                                                        <div className="megaMenu--action">
                                                            <a className="actionWithArrow brand-link-03" href="/en/industries">view all
                                                                industries</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="span1">
                                                    &nbsp;
                                                </div>
                                                <div className="span9">
                                                    <div className="row-fluid">


                                                        <div className="span4">
                                                            <ul className="megaMenu--links">

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/industries/automotive">automotive</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/industries/banking-and-financial-services-consulting">banking and financial services</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/industries/energy-and-utilities">energy &amp; utilities</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/industries/gaming-and-entertainment">gaming &amp; entertainment</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/industries/industry-and-automation">industry and automation</a>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                        <div className="span4">
                                                            <ul className="megaMenu--links">

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/industries/insurance">insurance</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/industries/isv">isv</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/industries/life-sciences-and-healthcare">life sciences &amp; healthcare</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/industries/media-and-publishing">media &amp; publishing</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/industries/nonprofit-and-education">non-profits and education</a>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                        <div className="span4">
                                                            <ul className="megaMenu--links">

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/industries/public-sector">public sector</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/industries/retail-and-consumer-packaged-goods">retail &amp; cpg</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/industries/telecommunications">telecommunications</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/industries/travel-and-logistics">travel &amp; logistics</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href=""></a>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="page-center page-pad megaMenu--content" id="megaMenuServices">
                                            <div className="row-fluid">
                                                <div className="span2">
                                                    <div className="megaMenu--info">
                                                        <div>
                                                            <div className="megaMenu--title">
                                                                services
                                                            </div>
                                                            <div className="megaMenu--description body-text brand-04-neg-20">
                                                                Accelerate your vision with technologies that are both agile and cutting-edge.
                                                            </div>
                                                        </div>
                                                        <div className="megaMenu--action">
                                                            <a className="actionWithArrow brand-link-03" href="/en/services">view all
                                                                services</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="span1">
                                                    &nbsp;
                                                </div>
                                                <div className="span9">
                                                    <div className="row-fluid">


                                                        <div className="span4">
                                                            <ul className="megaMenu--links">

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/accelerated-quality-and-test-engineering">accelerated quality &amp; test-engineering</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/enterprise-agile-consulting-transformation">agile</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/api-management">api management</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/application-managed-services">application development</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/ams">application managed services</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/data-analytics-intelligence">artificial intelligence, data &amp; analytics</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/blockchain">blockchain</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/cloud-services">cloud</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/crm">crm</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/customer-communications">customer communications</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="https://www.nagarro.com/en/services/design">design</a>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                        <div className="span4">
                                                            <ul className="megaMenu--links">

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/devops">devops</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/digital-commerce-solutions">digital commerce</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/digital-marketing-and-personalization">digital marketing and personalization</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="https://www.nagarro.com/en/services/digital-ventures">digital ventures</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/ecm-and-portals">ecm &amp; portals</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="https://www.nagarro.com/en/services/embedded-services">embedded systems</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/enterprise-architecture-consulting">enterprise architecture consulting</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/erp">ERP</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/iam">identity and access management</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/innovation">innovation</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/internet-of-things">internet of things</a>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                        <div className="span4">
                                                            <ul className="megaMenu--links">

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="https://www.nagarro.com/en/services/low-code">low code</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/mainframe-legacy">mainframe &amp; legacy</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/mobility-solutions">mobility solutions</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/process-consulting">process consulting</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/product-engineering">product engineering</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/resilience-engineering">resilience engineering</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/security">security</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/technical-communication">technical communication</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/trainings">trainings</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href="/en/services/transformation-and-modernization">transformation and modernization</a>
                                                                </li>

                                                                <li>
                                                                    <a className="brand-link-03 small-text" href=""></a>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="page-center page-pad megaMenu--content" id="megaMenuInsights">
                                            <div className="megaMenuInsights--row1">
                                                <div>
                                                    <h2 className="brand-02">Thinking Breakthroughs</h2>
                                                </div>
                                                <div className="span4">
                                                    <a className="page-btn page-btn01 explore-btn" href="/en/insights-events">Explore
                                                        our best ideas</a>
                                                </div>
                                            </div>
                                            <div className="megaMenuInsights--row2 row-fluid">
                                                <div className="megaMenuInsights--row2-article">
                                                    <h6 className="brand-07 megaMenuInsights--row2-category">Filter by Goal</h6>

                                                    <h3 className="megaMenuInsights--row2-item">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=modernize" className="brand-02">Modernize</a>
                                                    </h3>

                                                    <h3 className="megaMenuInsights--row2-item">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=optimize" className="brand-02">Optimize</a>
                                                    </h3>

                                                    <h3 className="megaMenuInsights--row2-item">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=innovate" className="brand-02">Innovate</a>
                                                    </h3>

                                                    <h3 className="megaMenuInsights--row2-item">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=disrupt" className="brand-02">Disrupt</a>
                                                    </h3>

                                                    <h3 className="megaMenuInsights--row2-item">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=transform" className="brand-02">Transform</a>
                                                    </h3>

                                                </div>
                                                <div className="megaMenuInsights--row2-article">
                                                    <h6 className="brand-07 megaMenuInsights--row2-category">Trending technologies</h6>

                                                    <h5 className="megaMenuInsights--row2-item">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=ai-and-ml" className="brand-02">AI and ML</a>
                                                    </h5>

                                                    <h5 className="megaMenuInsights--row2-item">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=data-science" className="brand-02">Data Science</a>
                                                    </h5>

                                                    <h5 className="megaMenuInsights--row2-item">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=iot" className="brand-02">IoT</a>
                                                    </h5>

                                                    <h5 className="megaMenuInsights--row2-item">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=cloud" className="brand-02">Cloud</a>
                                                    </h5>

                                                    <h5 className="megaMenuInsights--row2-item">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=aqt" className="brand-02">AQT</a>
                                                    </h5>

                                                    <h5 className="megaMenuInsights--row2-item">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=low-code" className="brand-02">Low Code</a>
                                                    </h5>

                                                    <h5 className="megaMenuInsights--row2-item">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=agile" className="brand-02">Agile</a>
                                                    </h5>

                                                    <h5 className="megaMenuInsights--row2-item">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=devops" className="brand-02">DevOps</a>
                                                    </h5>

                                                    <h5 className="megaMenuInsights--row2-item">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=chaos-engineering" className="brand-02">Chaos Engineering</a>
                                                    </h5>

                                                </div>
                                                <div className="megaMenuInsights--row2-article">
                                                    <h6 className="brand-07 megaMenuInsights--row2-category">Industry</h6>

                                                    <div className="megaMenuInsights--row2-item small-text">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=automotive" className="brand-02">Automotive</a>
                                                    </div>

                                                    <div className="megaMenuInsights--row2-item small-text">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=banking-and-financial-services" className="brand-02">Banking and Financial Services</a>
                                                    </div>

                                                    <div className="megaMenuInsights--row2-item small-text">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=insurance" className="brand-02">Insurance</a>
                                                    </div>

                                                    <div className="megaMenuInsights--row2-item small-text">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=energy-and-utilities" className="brand-02">Energy and Utilities</a>
                                                    </div>

                                                    <div className="megaMenuInsights--row2-item small-text">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=gaming-and-entertainment" className="brand-02">Gaming and Entertainment</a>
                                                    </div>

                                                    <div className="megaMenuInsights--row2-item small-text">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=isv" className="brand-02">ISV</a>
                                                    </div>

                                                    <div className="megaMenuInsights--row2-item small-text">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=life-sciences-and-healthcare" className="brand-02">Life-sciences and Healthcare</a>
                                                    </div>

                                                    <div className="megaMenuInsights--row2-item small-text">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=media-and-publishing" className="brand-02">Media and Publishing</a>
                                                    </div>

                                                    <div className="megaMenuInsights--row2-item small-text">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=retail-and-cpg" className="brand-02">Retail and CPG</a>
                                                    </div>

                                                    <div className="megaMenuInsights--row2-item small-text">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=telecommunications" className="brand-02">Telecommunications</a>
                                                    </div>

                                                    <div className="megaMenuInsights--row2-item small-text">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=travel-logistics" className="brand-02">Travel &amp; Logistics</a>
                                                    </div>

                                                    <div className="megaMenuInsights--row2-item small-text">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=industry-and-automation" className="brand-02">Industry and Automation</a>
                                                    </div>

                                                    <div className="megaMenuInsights--row2-item small-text">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=non-profits-and-education" className="brand-02">Non-profits and Education</a>
                                                    </div>

                                                    <div className="megaMenuInsights--row2-item small-text">
                                                        <a href="https://www.nagarro.com/en/insights-events/filter?tag=public-sector" className="brand-02">Public Sector</a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="page-center page-pad megaMenu--content" id="megaMenuEvents">
                                            <div className="megaMenuInsights--row1">
                                                <div>
                                                    <h2 className="brand-02">Events and Webinars</h2>
                                                </div>
                                                <div className="span4">
                                                    <a className="page-btn page-btn01 explore-btn" href="https://www.nagarro.com/en/events">Find more exciting events</a>
                                                </div>
                                            </div>
                                            <div className="megaMenuInsights--row2 row-fluid">
                                                <div className="megaMenuInsights--row2-article">
                                                    <h6 className="brand-07 megaMenuInsights--row2-category">
                                                        Our Event Series
                                                    </h6>

                                                    <h3 className="megaMenuInsights--row2-item">
                                                        <a href="https://www.nagarro.com/en/event-series/sommelier" className="brand-02">Sommelier</a>
                                                    </h3>

                                                    <h3 className="megaMenuInsights--row2-item">
                                                        <a href="https://www.nagarro.com/en/event-series/turntable" className="brand-02">Turntable</a>
                                                    </h3>

                                                </div>
                                                <div className="megaMenuInsights--row2-article">
                                                    <h6 className="brand-07 megaMenuInsights--row2-category">Featured Webinar</h6>
                                                    <h4 className="menu-title">
                                                        Embracing Open Banking with the power of Agility and API-first
                                                    </h4>
                                                    <h6 className="margin0 brand-08">















                                                    </h6>
                                                    <h6 className="event-time brand-08">

                                                    </h6>
                                                    <h6 className="link-outer">
                                                        <a className="actionWithArrow brand-link-03" href="https://www.nagarro.com/en/webinar/apis-agility-embracing-open-banking">Register</a>
                                                    </h6>
                                                </div>
                                                <div className="megaMenuInsights--row2-article">
                                                    <h6 className="brand-07 megaMenuInsights--row2-category">Our Latest Talk</h6>


                                                    <h4 className="menu-title">
                                                        Transforming data into insights with Google Cloud, Timo Bernard, Nagarro
                                                    </h4>
                                                    <h6 className="margin0 brand-08">



                                                        <span>By&nbsp;</span>Nagarro
                                                    </h6>
                                                    <h6 className="video-duration brand-08">
                                                        <img src="https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Icons/icon-video-duration.svg"/>
                                                            3 min
                        </h6>
                                                        <h6 className="link-outer">
                                                            <a className="actionWithArrow brand-link-03" href="https://www.nagarro.com/en/talks/transforming-data-into-insights-with-google-cloud">Watch talk</a>
                                                        </h6>
                        
                    </div>
                                                </div>
                                            </div>
                                            <div className="page-center page-pad megaMenu--content" id="megaMenuAbout">
                                                <div className="row-fluid">
                                                    <div className="span3">
                                                        <div className="megaMenu--info">
                                                            <div>
                                                                <div className="megaMenu--title">
                                                                    About<br/>nagarro
                                </div>
                                                                    <div className="megaMenu--description body-text brand-04-neg-20">
                                                                        Discover more about us,<br/> an outstanding digital<br/> solutions developer and
                                                                            a<br/> great place to work in.
                                </div>
                            </div>
                                                                            <div className="megaMenu--action">
                                                                                <a className="actionWithArrow brand-link-03" href="/en/company">About us</a>
                                                                            </div>
                        </div>
                                                                    </div>
                                                                    <div className="span3">
                                                                        <div className="megaMenu--info">
                                                                            <div>
                                                                                <div className="megaMenu--title">
                                                                                    Investor<br/>relations
                                </div>
                                                                                    <div className="megaMenu--description body-text brand-04-neg-20">
                                                                                        Financial information,<br/> governance, reports,<br/> announcements, and<br/>
                                                                                            investor events.
                                </div>
                            </div>
                                                                                            <div className="megaMenu--action">
                                                                                                <a className="actionWithArrow brand-link-03" href="/en/investor-relations">Nagarro
                                                                                                    IR</a>
                                                                                            </div>
                        </div>
                                                                                    </div>
                                                                                    <div className="span3">
                                                                                        <div className="megaMenu--info">
                                                                                            <div>
                                                                                                <div className="megaMenu--title">
                                                                                                    News &amp;<br/> press releases
                                </div>
                                                                                                    <div className="megaMenu--description body-text brand-04-neg-20">
                                                                                                        Catch up to what we are<br/> doing, and what people<br/> are talking about.
                                </div>
                            </div>
                                                                                                        <div className="megaMenu--action">
                                                                                                            <a className="actionWithArrow brand-link-03" href="/en/news-press-release">News center</a>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="span3">
                                                                                                    <div className="megaMenu--info">
                                                                                                        <div>
                                                                                                            <div className="megaMenu--title">
                                                                                                                Caring &amp;<br/> sustainability
                                </div>
                                                                                                                <div className="megaMenu--description body-text brand-04-neg-20">
                                                                                                                    We care for our world.<br/> Learn about our ESG<br/> initiatives.
                                </div>
                            </div>
                                                                                                                    <div className="megaMenu--action">
                                                                                                                        <a className="actionWithArrow brand-link-03" href="/en/company/caring">Learn more</a>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="page-center page-pad megaMenu--content" id="megaMenuCareer">
                                                                                                        <div className="row-fluid">
                                                                                                            <div className="span5">
                                                                                                                <div className="megaMenu--info">
                                                                                                                    <div>
                                                                                                                        <div className="megaMenu--title">
                                                                                                                            Thinking about<br/>becoming a Nagarrian?
                                </div>
                                                                                                                        </div>
                                                                                                                        <div className="megaMenu--action mt8">
                                                                                                                            <a className="actionWithArrow brand-link-03" href="/en/careers">get to know us</a>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div className="span1 left-border">&nbsp;</div>
                                                                                                                <div className="span6 flex_verticallycenter">
                                                                                                                    <div className="row-fluid flex_verticallycenter">
                                                                                                                        <div className="span5">
                                                                                                                            <div className="megaMenu--info">
                                                                                                                                <div>
                                                                                                                                    <h5 className="mb0">
                                                                                                                                        Check our <br/>open positions
                                        </h5>
                                    </div>

                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div className="span7">
                                                                                                                                <ul className="country_list">

                                                                                                                                    <li>

                                                                                                                                        <a href="https://www.nagarro-austria.com/jobs/">


                                                                                                                                            <img src="https://www.nagarro.com/hubfs/austria.svg" alt="austria"/>

                                                                                                                                                Austria</a>
                                    </li>

                                                                                                                                        <li>

                                                                                                                                            <a href="https://www.nagarro.com/de/careers">


                                                                                                                                                <img src="https://www.nagarro.com/hubfs/germany.svg" alt="germany"/>

                                                                                                                                                    Germany</a>
                                    </li>

                                                                                                                                            <li>

                                                                                                                                                <a href="https://www.nagarro.com/wfh">


                                                                                                                                                    <img src="https://www.nagarro.com/hubfs/India.svg" alt="India"/>

                                                                                                                                                        India</a>
                                    </li>

                                                                                                                                                <li>



                                                                                                                                                    <a href="https://www.nagarro.com/hiring/mexico-hiring-software-engineers" target="_blank">


                                                                                                                                                        <img src="https://www.nagarro.com/hubfs/Mexico.svg" alt="Mexico"/>

                                                                                                                                                            Mexico</a>
                                    </li>

                                                                                                                                                    <li>



                                                                                                                                                        <a href="https://www.nagarro.com/careers/poland" target="_blank">


                                                                                                                                                            <img src="https://www.nagarro.com/hubfs/Poland.svg" alt="Poland"/>

                                                                                                                                                                Poland</a>
                                    </li>

                                                                                                                                                        <li>

                                                                                                                                                            <a href="https://www.nagarro.com/careers/romania" target="_blank">


                                                                                                                                                                <img src="https://www.nagarro.com/hubfs/Romania.svg" alt="Romania"/>

                                                                                                                                                                    Romania</a>
                                    </li>

                                                                                                                                                            <li>

                                                                                                                                                                <a href="https://www.nagarro.com/hiring/sri-lanka" target="_blank">


                                                                                                                                                                    <img src="https://www.nagarro.com/hubfs/Sri%20lanka.svg" alt="Sri lanka"/>

                                                                                                                                                                        Sri Lanka</a>
                                    </li>

                                                                                                                                                                <li>

                                                                                                                                                                    <a href="https://www.nagarro.com/en/openings" target="_blank">


                                                                                                                                                                        <img src="https://www.nagarro.com/hubfs/usa.svg" alt="usa"/>

                                                                                                                                                                            United States</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                                                                                                                                            <div className="page-center page-pad megaMenu--content" id="megaMenuContacts">
                                                                                                                                                <div className="row-fluid">
                                                                                                                                                    <div className="span3">
                                                                                                                                                        <div className="megaMenu--info">
                                                                                                                                                            <div>
                                                                                                                                                                <div className="megaMenu--title">
                                                                                                                                                                    talk to us
                                                                                                                                                                </div>
                                                                                                                                                                <div className="megaMenu--subTitle">
                                                                                                                                                                    Welcome to digital product engineering
                                                                                                                                                                </div>
                                                                                                                                                                <div className="megaMenu--description body-text brand-04-neg-20">
                                                                                                                                                                    Thanks for your interest. How can we help?
                                                                                                                                                                </div>
                                                                                                                                                            </div>
                                                                                                                                                            <div className="megaMenu--action">
                                                                                                                                                                <a className="actionWithArrow brand-link-03" href="/en/contact-us">view contact
                                                                                                                                                                    details</a>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                    <div className="span2">&nbsp;</div>
                                                                                                                                                    <div className="span4">
                                                                                                                                                        <div className="megaMenu--info">
                                                                                                                                                            <div>
                                                                                                                                                                <div className="megaMenu--title">
                                                                                                                                                                    offices
                                                                                                                                                                </div>
                                                                                                                                                                <div>
                                                                                                                                                                    <ul className="megaMenu--links">
                                                                                                                                                                        <li>
                                                                                                                                                                            <a className="brand-link-03" href="/en/contact-us?area=america#america">americas</a>
                                                                                                                                                                        </li>
                                                                                                                                                                        <li>
                                                                                                                                                                            <a className="brand-link-03" href="/en/contact-us?area=emea#emea">EMEA</a>
                                                                                                                                                                        </li>
                                                                                                                                                                        <li>
                                                                                                                                                                            <a className="brand-link-03" href="/en/contact-us?area=asiapacific#asiapacific">asia-pacific</a>
                                                                                                                                                                        </li>
                                                                                                                                                                    </ul>
                                                                                                                                                                </div>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                    <div className="span4">
                                                                                                                                                        <div className="megaMenu--info">
                                                                                                                                                            <div>
                                                                                                                                                                <div className="megaMenu--title">
                                                                                                                                                                    follow us
                                                                                                                                                                </div>
                                                                                                                                                                <div>
                                                                                                                                                                    <ul className="megaMenu--links">
                                                                                                                                                                        <li>
                                                                                                                                                                            <a className="brand-link-03 small-text" target="_blank" href="https://www.linkedin.com/company/nagarro"><img src="https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Icons/social-linkedin.svg" alt="linkedin"/><span>linkedin</span></a>
                                        </li>
                                                                                                                                                                            <li>
                                                                                                                                                                                <a className="brand-link-03 small-text" target="_blank" href="https://twitter.com/nagarro"><img src="https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Icons/social-twitter.svg" alt="linkedin"/><span>twitter</span></a>
                                        </li>
                                                                                                                                                                                <li>
                                                                                                                                                                                    <a className="brand-link-03 small-text" target="_blank" href="https://www.facebook.com/nagarroinc/"><img src="https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Icons/social-facebook.svg" alt="facebook"/><span>facebook</span></a>
                                        </li>
                                                                                                                                                                                    <li>
                                                                                                                                                                                        <a className="brand-link-03 small-text" target="_blank" href="https://www.instagram.com/lifeatnagarro/"><img src="https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Icons/social-instagram.svg" alt="instagram"/><span>instagram</span></a>
                                        </li>
                                                                                                                                                                                        <li>
                                                                                                                                                                                            <a className="brand-link-03 small-text" target="_blank" href="https://www.youtube.com/user/nagarrovideos"><img src="https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Icons/social-youtube.svg" alt="youtube"/><span>youtube</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                                                                                                                                                </div>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                        <div className="hamburgerMenu">
                                                                                                                                                            <div className="row-fluid">
                                                                                                                                                                <div className="span6 hamburgerMenu--tablet">
                                                                                                                                                                    &nbsp;
                                                                                                                                                                </div>
                                                                                                                                                                <div className="span6 hamburgerMenu--l-content">
                                                                                                                                                                    <div className="hamburgerMenu--container">
                                                                                                                                                                        <div className="hamburgerMenu--header page-pad">
                                                                                                                                                                            <a href="/en">
                                                                                                                                                                                <img className="hamburgerMenu--logo nav-logo" loading="lazy" src="https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Nagarro%20green%20logo%20with%20white%20title.svg" alt="English (United States)" title="English (United States)"/>
                        </a>
                                                                                                                                                                                <img className="hamburgerMenu--close" loading="lazy" height="22" width="22" src="https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Icons/close-dark.svg" alt="English (United States)" title="English (United States)"/>
                    </div>
                                                                                                                                                                                <div className="hamburgerMenu--content page-pad">
                                                                                                                                                                                    <ul className="hamburgerMenu--nav">
                                                                                                                                                                                        <li className="hamburgerMenu--navItem">
                                                                                                                                                                                            <div className="hamburgerMenu--navItemLevel1 hamburgerMenu--navItemArrow">industries</div>
                                                                                                                                                                                            <div className="hamburgerMenu--navLevel2">
                                                                                                                                                                                                <div className="hamburgerMenu--navItemBack page-pad">
                                                                                                                                                                                                    Industries
                                                                                                                                                                                                </div>
                                                                                                                                                                                                <div className="hamburgerMenu--navLevel2Content page-pad">
                                                                                                                                                                                                    <ul>


                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/industries/automotive">automotive</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/industries/banking-and-financial-services-consulting">banking and financial services</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/industries/energy-and-utilities">energy &amp; utilities</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/industries/gaming-and-entertainment">gaming &amp; entertainment</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/industries/industry-and-automation">industry and automation</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/industries/insurance">insurance</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/industries/isv">isv</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/industries/life-sciences-and-healthcare">life sciences &amp; healthcare</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/industries/media-and-publishing">media &amp; publishing</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/industries/nonprofit-and-education">non-profits and education</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/industries/public-sector">public sector</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/industries/retail-and-consumer-packaged-goods">retail &amp; cpg</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/industries/telecommunications">telecommunications</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/industries/travel-and-logistics">travel &amp; logistics</a>
                                                                                                                                                                                                        </li>


                                                                                                                                                                                                    </ul>
                                                                                                                                                                                                </div>
                                                                                                                                                                                            </div>
                                                                                                                                                                                        </li>
                                                                                                                                                                                        <li className="hamburgerMenu--navItem">
                                                                                                                                                                                            <div className="hamburgerMenu--navItemLevel1 hamburgerMenu--navItemArrow">services</div>
                                                                                                                                                                                            <div className="hamburgerMenu--navLevel2">
                                                                                                                                                                                                <div className="hamburgerMenu--navItemBack page-pad">
                                                                                                                                                                                                    Services
                                                                                                                                                                                                </div>
                                                                                                                                                                                                <div className="hamburgerMenu--navLevel2Content page-pad">
                                                                                                                                                                                                    <ul>


                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/accelerated-quality-and-test-engineering">accelerated quality &amp; test-engineering</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/enterprise-agile-consulting-transformation">agile</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/api-management">api management</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/application-managed-services">application development</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/ams">application managed services</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/data-analytics-intelligence">artificial intelligence, data &amp; analytics</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/blockchain">blockchain</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/cloud-services">cloud</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/crm">crm</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/customer-communications">customer communications</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="https://www.nagarro.com/en/services/design">design</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/devops">devops</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/digital-commerce-solutions">digital commerce</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/digital-marketing-and-personalization">digital marketing and personalization</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="https://www.nagarro.com/en/services/digital-ventures">digital ventures</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/ecm-and-portals">ecm &amp; portals</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="https://www.nagarro.com/en/services/embedded-services">embedded systems</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/enterprise-architecture-consulting">enterprise architecture consulting</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/erp">ERP</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/iam">identity and access management</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/innovation">innovation</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/internet-of-things">internet of things</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="https://www.nagarro.com/en/services/low-code">low code</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/mainframe-legacy">mainframe &amp; legacy</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/mobility-solutions">mobility solutions</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/process-consulting">process consulting</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/product-engineering">product engineering</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/resilience-engineering">resilience engineering</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/security">security</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/technical-communication">technical communication</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/trainings">trainings</a>
                                                                                                                                                                                                        </li>



                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/services/transformation-and-modernization">transformation and modernization</a>
                                                                                                                                                                                                        </li>


                                                                                                                                                                                                    </ul>
                                                                                                                                                                                                </div>
                                                                                                                                                                                            </div>
                                                                                                                                                                                        </li>

                                                                                                                                                                                        <li className="hamburgerMenu--navItem">
                                                                                                                                                                                            <a className="hamburgerMenu--navItemLevel1" href="/en/insights-events">insights</a>
                                                                                                                                                                                        </li>
                                                                                                                                                                                        <li className="hamburgerMenu--navItem">
                                                                                                                                                                                            <a className="hamburgerMenu--navItemLevel1" href="https://www.nagarro.com/en/events">events</a>
                                                                                                                                                                                        </li>
                                                                                                                                                                                        <li className="hamburgerMenu--navItem" id="irNavitemParent">
                                                                                                                                                                                            <div className="hamburgerMenu--navItemLevel1 hamburgerMenu--navItemArrow">about us</div>
                                                                                                                                                                                            <div className="hamburgerMenu--navLevel2">
                                                                                                                                                                                                <div className="hamburgerMenu--navItemBack page-pad">
                                                                                                                                                                                                    About us
                                                                                                                                                                                                </div>
                                                                                                                                                                                                <div className="hamburgerMenu--navLevel2Content page-pad">
                                                                                                                                                                                                    <ul>
                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/company">about us</a>
                                                                                                                                                                                                        </li>
                                                                                                                                                                                                        <li className="hamburgerMenu--navItem">
                                                                                                                                                                                                            <div className="hamburgerMenu--navItemLevel2 hamburgerMenu--navItemArrow" id="irNavitem">investor relations</div>
                                                                                                                                                                                                            <div className="hamburgerMenu--navLevel3">
                                                                                                                                                                                                                <div className="hamburgerMenu--navItemBackdiable page-pad">
                                                                                                                                                                                                                    about us
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                <div className="hamburgerMenu--navItemBack2 page-pad">
                                                                                                                                                                                                                    Investor Relations
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                <div className="hamburgerMenu--navLevel2Content page-pad">
                                                                                                                                                                                                                    <ul>
                                                                                                                                                                                                                        <li className="main-page">
                                                                                                                                                                                                                            <a href="/en/investor-relations" className="irLevel2Menu">IR Home</a>
                                                                                                                                                                                                                        </li>


                                                                                                                                                                                                                        <li>
                                                                                                                                                                                                                            <a href="/en/investor-relations/financial-and-stock-information" className="irLevel2Menu">stock and financial information</a>
                                                                                                                                                                                                                        </li>



                                                                                                                                                                                                                        <li>
                                                                                                                                                                                                                            <a href="/en/investor-relations/financial-reports-and-publications" className="irLevel2Menu">financial reports and publications</a>
                                                                                                                                                                                                                        </li>



                                                                                                                                                                                                                        <li>
                                                                                                                                                                                                                            <a href="/en/investor-relations/corporate-governance" className="irLevel2Menu">corporate governance</a>
                                                                                                                                                                                                                        </li>



                                                                                                                                                                                                                        <li>
                                                                                                                                                                                                                            <a href="/en/investor-relations/announcements" className="irLevel2Menu">announcements </a>
                                                                                                                                                                                                                        </li>



                                                                                                                                                                                                                        <li>
                                                                                                                                                                                                                            <a href="/en/investor-relations/corporate-citizenship" className="irLevel2Menu">corporate citizenship</a>
                                                                                                                                                                                                                        </li>



                                                                                                                                                                                                                        <li>
                                                                                                                                                                                                                            <a href="/en/investor-relations/financial-calendar" className="irLevel2Menu">financial calendar</a>
                                                                                                                                                                                                                        </li>



                                                                                                                                                                                                                        <li>
                                                                                                                                                                                                                            <a href="/en/investor-relations/events" className="irLevel2Menu">events</a>
                                                                                                                                                                                                                        </li>



                                                                                                                                                                                                                        <li>
                                                                                                                                                                                                                            <a href="https://www.nagarro.com/en/investor-relations/merger-nagarro-holding" className="irLevel2Menu">Merger Nagarro Holding GmbH</a>
                                                                                                                                                                                                                        </li>


                                                                                                                                                                                                                    </ul>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                        </li>
                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/news-press-release">news &amp; press releases</a>
                                                                                                                                                                                                        </li>
                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="/en/company/caring">caring &amp; sustainability</a>
                                                                                                                                                                                                        </li>
                                                                                                                                                                                                    </ul>
                                                                                                                                                                                                </div>
                                                                                                                                                                                            </div>
                                                                                                                                                                                        </li>
                                                                                                                                                                                        <li className="hamburgerMenu--navItem">
                                                                                                                                                                                            <div className="hamburgerMenu--navItemLevel1 hamburgerMenu--navItemArrow">careers</div>
                                                                                                                                                                                            <div className="hamburgerMenu--navLevel2">
                                                                                                                                                                                                <div className="hamburgerMenu--navItemBack page-pad">
                                                                                                                                                                                                    Careers
                                                                                                                                                                                                </div>
                                                                                                                                                                                                <div className="hamburgerMenu--navLevel2Content page-pad">
                                                                                                                                                                                                    <ul className="mobile_country_list">
                                                                                                                                                                                                        <li className="main-page">
                                                                                                                                                                                                            <a href="/en/careers">get to know us</a>
                                                                                                                                                                                                        </li>

                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="https://www.nagarro-austria.com/jobs/">
                                                                                                                                                                                                                Austria</a>
                                                                                                                                                                                                        </li>

                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="https://www.nagarro.com/de/careers">
                                                                                                                                                                                                                Germany</a>
                                                                                                                                                                                                        </li>

                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="https://www.nagarro.com/wfh">
                                                                                                                                                                                                                India</a>
                                                                                                                                                                                                        </li>

                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="https://www.nagarro.com/hiring/mexico-hiring-software-engineers">
                                                                                                                                                                                                                Mexico</a>
                                                                                                                                                                                                        </li>

                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="https://www.nagarro.com/careers/poland">
                                                                                                                                                                                                                Poland</a>
                                                                                                                                                                                                        </li>

                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="https://www.nagarro.com/careers/romania">
                                                                                                                                                                                                                Romania</a>
                                                                                                                                                                                                        </li>

                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="https://www.nagarro.com/hiring/sri-lanka">
                                                                                                                                                                                                                Sri Lanka</a>
                                                                                                                                                                                                        </li>

                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <a href="https://www.nagarro.com/en/openings">
                                                                                                                                                                                                                United States</a>
                                                                                                                                                                                                        </li>

                                                                                                                                                                                                    </ul>
                                                                                                                                                                                                </div>
                                                                                                                                                                                            </div>
                                                                                                                                                                                        </li>
                                                                                                                                                                                        <li className="hamburgerMenu--navItem">
                                                                                                                                                                                            <a className="hamburgerMenu--navItemLevel1" href="/en/contact-us">contact us</a>
                                                                                                                                                                                        </li>
                                                                                                                                                                                        <li className="hamburgerMenu--navItem hamburgerMenu--navItemLang hamburgerMenu--navItemSecondary">
                                                                                                                                                                                            <div className="hamburgerMenu--navItemLevel1 hamburgerMenu--navItemArrow">

                                                                                                                                                                                                global (EN) - change region

                                                                                                                                                                                            </div>
                                                                                                                                                                                            <div className="hamburgerMenu--navLevel2">
                                                                                                                                                                                                <div className="hamburgerMenu--navItemBack page-pad">
                                                                                                                                                                                                    go back
                                                                                                                                                                                                </div>
                                                                                                                                                                                                <div className="hamburgerMenu--navLevel2Content page-pad">
                                                                                                                                                                                                    <div className="hamburgerMenu--navLevel2Title">
                                                                                                                                                                                                        regions
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                    <ul className="hamburgerLanguageSwitcher">

                                                                                                                                                                                                        <li><a href="#">global (EN)</a></li>
                                                                                                                                                                                                        <li className="langSwitcher--switchTo"><a href="#">DE</a></li>

                                                                                                                                                                                                    </ul>
                                                                                                                                                                                                </div>
                                                                                                                                                                                            </div>
                                                                                                                                                                                        </li>
                                                                                                                                                                                        <li className="hamburgerMenu--navItem hamburgerMenu--navItemSecondary hamburgerMenu--navItemBorderTop">
                                                                                                                                                                                            <a className="hamburgerMenu--navItemLevel1" href="/en/privacy-policy">privacy policy</a>
                                                                                                                                                                                        </li>
                                                                                                                                                                                        <li className="hamburgerMenu--navItem hamburgerMenu--navItemSecondary">
                                                                                                                                                                                            <a className="hamburgerMenu--navItemLevel1" href="/en/imprint">imprint</a>
                                                                                                                                                                                        </li>
                                                                                                                                                                                    </ul>
                                                                                                                                                                                </div>
                </div>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                <Container>
                    {this.props.children}
                </Container>                                                                                                                                                      <div className="headerOverlay"></div>
                                                                                                                                                            </div>
                   
        
      </div>
    );
  }
}
