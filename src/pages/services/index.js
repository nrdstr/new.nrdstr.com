import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Footer from '../../components/Footer'
import SEO from "../../components/seo"

const Services = () => (
    <Layout page='services'>
        <SEO title='our digital services' description="We offer a plethora of digital services, such as web design and development, graphic design, website maintenance and hosting, youtube videos, social media, design, and much more. Contact us today to discuss your next web, creative, or marketing project!" url='/services' />
        <div className='services animate--fade-in'>
            <div className='services__grid'>
                <div className='services__grid-item'>
                    <div className='services__grid-item-header'>
                        <h3>graphic design</h3>
                        <div className='shape__container services__shape'>
                            <div className='shape zig-zag divider' />
                            <div className='shape zig-zag divider' style={{ marginLeft: 3 }} />
                        </div>
                    </div>
                    <div className='services__grid-item-content'>
                        <p>a unique design for <strong>any</strong>&nbsp;project.</p>
                        <ul className='services__content'>
                            <li>logos and branding</li>
                            <li>packaging and labels</li>
                            <li>album and mixtape design</li>
                            <li>social media design</li>
                        </ul>
                        <Link to='/services/graphic-design' className='services__cta-btn'>
                            learn more
                        </Link>
                    </div>
                </div>

                <div className='services__grid-item'>
                    <div className='services__grid-item-header'>
                        <h3>website design</h3>
                        <div className='shape__container services__shape'>
                            <div className='shape zig-zag divider' />
                            <div className='shape zig-zag divider' style={{ marginLeft: 3 }} />
                        </div>
                    </div>
                    <div className='services__grid-item-content'>
                        <p>need a <strong>strong</strong> web presence? <br />we've got you.</p>
                        <ul className='services__content'>
                            <li>responsive websites</li>
                            <li><strong>seo</strong> &nbsp;friendly</li>
                            <li>modern website design</li>
                            <li>website hosting and maintenance</li>
                        </ul>
                        <Link to='/services/website-design' className='services__cta-btn'>
                            learn more
                        </Link>
                    </div>
                </div>

                <div className='services__grid-item'>
                    <div className='services__grid-item-header'>
                        <h3>website maintenance</h3>
                        <div className='shape__container services__shape'>
                            <div className='shape zig-zag divider' />
                            <div className='shape zig-zag divider' style={{ marginLeft: 3 }} />
                        </div>
                    </div>
                    <div className='services__grid-item-content'>
                        <p>ensuring your website <strong>remains</strong> updated, optimized, and secure.</p>
                        <ul className='services__content'>
                            <li>content updates</li>
                            <li><strong>wordpress</strong>&nbsp;maintenance</li>
                            <li>website monitoring</li>
                            <li>website hosting</li>
                        </ul>
                        <Link to='/services/website-maintenance' className='services__cta-btn'>
                            learn more
                        </Link>
                    </div>
                </div>

                <div className='services__grid-item'>
                    <div className='services__grid-item-header'>
                        <h3>social media design</h3>
                        <div className='shape__container services__shape'>
                            <div className='shape zig-zag divider' />
                            <div className='shape zig-zag divider' style={{ marginLeft: 3 }} />
                        </div>
                    </div>
                    <div className='services__grid-item-content'>
                        <p><strong>level up</strong>&nbsp;with a design aesthetic that spans across your social web.</p>
                        <ul className='services__content'>
                            <li>covers and banners</li>
                            <li>profile pictures</li>
                            <li>custom posts</li>
                            <li>advertisements</li>
                        </ul>
                        <Link to='/services/social-media-design' className='services__cta-btn'>
                            learn more
                        </Link>
                    </div>
                </div>



                <div className='services__grid-item'>
                    <div className='services__grid-item-header'>
                        <h3>advertisement design</h3>
                        <div className='shape__container services__shape'>
                            <div className='shape zig-zag divider' />
                            <div className='shape zig-zag divider' style={{ marginLeft: 3 }} />
                        </div>
                    </div>
                    <div className='services__grid-item-content'>
                        <p>get eyes on your sponsored content with designs that <strong>pop</strong>.</p>
                        <ul className='services__content'>
                            <li>static & video ads</li>
                            <li>facebook ads</li>
                            <li>instagram ads</li>
                            <li>totally custom ads</li>
                        </ul>
                        <Link to='/services/ad-design' className='services__cta-btn'>
                            learn more
                        </Link>
                    </div>
                </div>

                <div className='services__grid-item'>
                    <div className='services__grid-item-header'>
                        <h3>motion graphics design</h3>
                        <div className='shape__container services__shape'>
                            <div className='shape zig-zag divider' />
                            <div className='shape zig-zag divider' style={{ marginLeft: 3 }} />
                        </div>
                    </div>
                    <div className='services__grid-item-content'>
                        <p>solidify your digital presence with our <strong>hand tailored</strong>&nbsp;motion graphics.</p>
                        <ul className='services__content'>
                            <li>visualizer and lyric videos</li>
                            <li>custom instagram stories</li>
                            <li>music videos and teasers</li>
                            <li>advertisements</li>
                        </ul>
                        <button className='services__cta-btn services__cta-btn--disabled'>
                            coming soon
                        </button>
                    </div>
                </div>

            </div>
            <div className='mobile'>
                <Footer />
            </div>
        </div>
    </Layout>
)

export default Services
