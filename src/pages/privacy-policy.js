import React, { useEffect } from "react"

import Layout from "../components/layout"
import Footer from '../components/Footer'

import SEO from "../components/seo"
import Socials from '../components/Socials'

const PrivacyPolicy = () => {
    useEffect(() => {
        const body = document.querySelector('body')
        body.scrollTo(0, 0)
    }, [])
    return (
        <Layout page='privacy-policy'>
            <SEO title="your privacy is important" description="" url='/about' />
            <div className='service privacy animate--fade-in'>
                <div className='service__content'>
                    <h1 className='privacy__title'>Your privacy is important</h1>
                    <p>
                        We generally try to keep privacy in mind when changing features on <strong>nrdstr.com</strong>. On this page you’ll find detailed information about what’s being tracked and how.
            </p>
                    <h3>
                        What data is collected?
            </h3>
                    <p>
                        We use third party services that collect some information, such as:
            </p>
                    <ul>
                        <li>
                            <h4>Browser and system information</h4>
                            <p>The name and version of your browser, the type of operating system, etc.</p>
                        </li>
                        <li>
                            <h4>Page information</h4>
                            <p>Information about the page that you’re visiting and what page you came from.</p>
                        </li>
                        <li>
                            <h4>IP Address</h4>
                            <p>An anonymized IP address. By default, Google Analytics anonymizes all user IP addresses. We have also opted <strong>out</strong> of user IP tracking via <a href='https://tawk.to' title='tawk.co'>Tawk.to</a>, our chat service.</p>
                        </li>
                        <li>
                            <h4>Google Fonts</h4>
                            <p>Google Font collects some information, such as the amount of times a font is used.</p>
                        </li>
                    </ul>

                    <h3>
                        What cookies are stored?
            </h3>
                    <p>
                        We don't store any first-party cookies, meaning that none of the assets provided by our website use cookies. The only third-party cookies we use are the ones that are necessary by Google Analytics, Tawk, Disqus, and Cloudflare:
            </p>
                    <ul>
                        <li>
                            <h4>_ga</h4>
                            <p>Used by <a href='http://www.google.com/analytics/learn/privacy.html' title='Google Analytics'>Google Analytics</a> to distinguish users. Expires after 2 years.</p>
                        </li>
                        <li>
                            <h4>_gat</h4>
                            <p>Used to throttle the request rate of calling Google Analytics. Expires after 1 minute.</p>
                        </li>
                        <li>
                            <h4>_gid</h4>
                            <p>Used to distinguish users (Google Analytics). Expires after 24 hours.</p>
                        </li>
                        <li>
                            <h4>__tawkuuid</h4>
                            <p>Remembers you so that we can link chat conversations together via <a href='https://tawk.to' title='tawk.co'>Tawk.to</a> to provide a better service. Expires after 10 years.</p>
                        </li>
                        <li>
                            <h4>__cfduid</h4>
                            <p>Used by <a href='https://cloudflare.com' title='Cloudflare'>Cloudfare</a> to identify trusted web traffic. Expires after 30 days.</p>
                        </li>
                        <li>
                            <h4>__jid, disqus.order, disqusauth, sessionid</h4>
                            <p>Allows users to comment on the<strong>nrdstr.com</strong> blog posts section via third-party software <a href='http://help.disqus.com/customer/portal/articles/466259-privacy-policy' title='Disqus privacy policy'>Disqus</a>.</p>
                        </li>
                    </ul>

                    <h3>I don't want to be tracked</h3>
                    <p>
                        <strong>Nrdstr</strong> does <strong>not</strong> offer any measures to opt-in or opt-out, as that would require an additional cookie to remember your choice to opt-out, or we would have to ask you each time whether or not you want to opt-out or not.
                </p>

                    <h3>Third Party Links</h3>
                    <p>
                        <strong>Nrdstr.com</strong> may be, in whole or in part, an advertising supported website, and when responding to a third party advertisement or offer, you may submit your information to such third party outside of our control.
                </p>
                    <p>
                        We may also include social-media plugins like <strong>Facebook</strong> and <strong>Twitter</strong> buttons. We are in no way responsible for any of your activities in respect of your use of third party social media.
                </p>
                    <p>
                        <strong>Nrdstr.com</strong> may contain links to other websites that are not controlled by <strong>Nrdstr</strong>. We are not responsible for the privacy practices of such other websites.
                </p>
                    <p>
                        We encourage our users to be aware when they leave our website and to read the privacy statements of each and every website that collects personally identifiable information.
                </p>
                    <p>
                        This privacy policy applies solely to information collected by <strong>Nrdstr</strong>.
                </p>

                    <h3>Other Events</h3>
                    <p>
                        All information collected or provided may be transferred or assigned by <strong>Nrdstr</strong> in conjunction with a merger or the sale of all or a portion of <strong>Nrdstr</strong> (or similar event).
                </p>

                    <h3>Changes to Privacy Policy</h3>
                    <p>
                        We may update this policy from time to time by publishing a new version on our website. You should check this page from time to time to ensure you agree with any changes to this policy.
                </p>

                    <h3>
                        Contact
                </h3>
                    <p>
                        If you have any questions or concerns please <a href='mailto:hello@nrdstr.com' title='email us'>contact us</a>.
                </p>

                </div>
            </div>
            <Socials />
            <Footer />
        </Layout>
    )
}

export default PrivacyPolicy
