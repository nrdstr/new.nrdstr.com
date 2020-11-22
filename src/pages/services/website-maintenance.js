import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Footer from '../../components/Footer'
import Service from '../../components/service'

const description = `
<p>
    No matter the end goal, your site needs to be <strong>active</strong> and <strong>dynamic</strong>. It's surprising how often a great website looks and feels the same week after week, and month after month. Potential users and customers only spend a few seconds browsing your site before deciding whether or not to move on.
</p>
<p>
Established users want a <strong>reliable and engaging digital experience</strong> every time they navigate to your website. A stagnant site shows a lack of one's passion for the subject and will drive your audience toward the competition.
</p>
<p>
A website that is current and relevant has everything to do with how it ranks and how much traffic it receives. Our website maintenance services include options to maximize your online presence with fresh, <strong>SEO rich</strong> content, in turn creating maximum exposure.
</p>

<h3>
    Our website maintenance services.
</h3>
<ul>
    <li>
        <h4>Security and Upkeep</h4>
        <p>
            Our job is to keep your website secure, up and running, up to date, and free of bugs. Standard maintenance on your website ensures it always looks great while also always running well under the hood. We can also fix and update old content, such as broken links, and strategize with you on how to further enhance your website.
        </p>
    </li>
    <li>
        <h4>Content Updates and Graphics</h4>
        <p>Your website is often the first impression that you'll have with your audience, so a well-maintained site presence is essential to attracting users and keeping them engaged.</p>
        <p>
        Do you have a blog, news, events, etc. on your site? Keeping that information current is critical to making your audience feel that your content is cutting edge and that you're involved in your industry.
        </p>
        <p>
        Looking for graphics to give your site the uniformity it <em>really</em> needs to stand out? <a id='link' href='/services/graphic-design' title='graphic design service'>We have a service for that.</a>
        </p>
    </li>
    <li>
        <h4>Website Hosting</h4>
        <p>We offer website hosting and domain management at reasonable monthly rates. Let us handle keeping your website alive and well while you focus on your business or endeavour.</p>
    </li>
    <li>
        <h4>Website Required</h4>
        <p>
            So, reading this section on website maintenance really got you pumped up, but you don't have a website for us to maintain? We can help. We offer <a id='link' href='/services/website-design' title='website design service'>website design and development</a> services. We'll build you a beautiful, blazing fast website with great <strong>SEO</strong>. And then we'll maintain the <em>hell</em> out of it.
        </p>
    </li>
</ul>
`

const WebSiteMaintenance = () => (
    <Layout page='service-website-maintenance'>
        <SEO title='Website maintenance' description="Our website maintenance service include options to upgrade, secure, and maximize your online presence with fresh, SEO rich content, in turn creating maximum exposure. We also offer website hosting and domain management at reasonable monthly rates. Contact us today!" url='/services/website-maintenance' />
        <Service type='website-maintenance' description={description} />
        <Link to='/contact' className='home__cta-btn home__cta-btn--contact' title='get a website maintainance quote'>get in touch</Link>
        <Footer />
    </Layout>
)

export default WebSiteMaintenance
