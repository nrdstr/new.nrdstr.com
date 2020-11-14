import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Footer from '../../components/Footer'
import SEO from "../../components/seo"
import Service from '../../components/service'

const description = `
<p>
    We’re not afraid to be different here at <strong>nrdstr</strong>, and we carry that mindset over to our work. We believe that pushing design norms to their limit is the new way forward. Pushing boundaries is what creates new normals, and we view website design and development in the same light.
</p>
<p>
    Each and every web design project is unique. In order to create a website that acts as the perfect digital face for your brand, we need to get to know your brand. We want to understand your needs, and build a mutually agreed upon project design, plan, and timeline that suits your business.
</p>
<h2>How can we help you?</h2>
<p style='margin-bottom: 20px;'>Our websites are fully responsive, blazing fast, and SEO friendly. We aim to deliver your project in the most efficient and communicative manner as possible. here's how our process typically works:</p>

<h3>Let's audit.</h3>
<p>In this initial phase we'd like to get to know your brand and the goals and expectations of your new website. here's a couple of things we'll cover:</p>

<ul>
    <li>
        <h4>The basics</h4>
        <p>What features would you like to see on your site? What kind of content do you want to see? What are some examples of existing websites that you like? It's good to identify what is absolutely required in the beginning rather than later. </p>
    </li>
    <li>
        <h4>Your Current site</h4>
        <p>If you have an existing site, we'll check out its current design, features, performance, and SEO. any information that can be carried over to the new website, such as color schemes, graphics and images, or fonts will be noted here. </p>
    </li>
</ul>


<h3>To the drawing board.</h3>
<p>Now it's time to plan and design. We will determine the structure of the site and create a plan:</p>

<ul>
    <li>
        <h4>Site Routes</h4>
        <p>We will map out all of the pages for your new website. This is so we can build a basic navigation structure and have a basis for our design. <em>Ex: Home page, about page, sub-pages, etc.</em></p>
    </li>
    <li>
        <h4>Styles</h4>
        <p>Before we can begin, we'll also have to make style decisions such as color palettes, fonts, font sizes, headings, etc. It is always helpful to include examples in this (<em>or any</em>) phase! </p>
    </li>
    <li>
        <h4>Wireframes</h4>
        <p>This is where we begin to design your site. We'll use all of the design points decided upon to create a website blueprint. This is so you (and us) can see the design, the bigger picture, and make any changes before development begins. </p>
    </li>
</ul>

<h3>Development & Launch</h3>
<p>Now the real fun begins. This is the longest part of the process, where we work on the site's layout, typography, icons, graphics, etc. We use the website wireframes as a guide to build you a functioning, fully responsive website.</p>
<p>Once everything is coded and in place, we will spend some time testing the site across different browsers, devices, and network connections to make sure everything is as it should be. <strong>Note</strong>: we do <strongNote:>not</strongNote:> test on <strong>Internet Explorer</strong> or most browsers older than a couple versions.</p>
<p>After setting any dns records, redirects, 404's, and google web tags we'll deploy your new site to a live environment of your choosing! </p>

<h3>What now?</h3>
<p>Your site is live, but maybe you want to keeps things fresh by adding content or changing up styles throughout the year.</p>
<p>We offer <a id='link' href='/services/website-maintenance'>website maintenance</a> efforts as a monthly retainer program or as flat-rate prepraid time blocks. We want your business to succeed, and a great website is the strongest first digital step you can take to making that succeed.</p>


`

const WebSiteDesign = () => (
    <Layout page='service-website-design'>
        <SEO title='website design' description="" url='/services/website-design' />
        <Service type='website-design' description={description} />
        <Link to='/contact' className='home__cta-btn home__cta-btn--contact' title='get a quote'>get a quote</Link>
        <Footer />
    </Layout>
)

export default WebSiteDesign
