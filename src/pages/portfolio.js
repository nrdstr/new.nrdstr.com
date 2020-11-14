import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Modal from '../components/Modal'
import Grid from '../components/Grid'
import GridNav from '../components/GridNav'

const Portfolio = () => {
    const [tab, setTab] = useState('graphic')
    const [modalData, setModalData] = useState({})
    const [modalToggle, setModalToggle] = useState(false)

    const portfolioQuery = useStaticQuery(graphql`
        query {
        allFile(filter: {
            extension: {regex: "/(jpg)|(jpeg)|(png)/"},
            sourceInstanceName: {eq: "portfolio"}})
        {
            edges {
            node {
                childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                originalName
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                }
                }
            }
            }
        }
        }`)

    const handleGridNav = t => setTab(t)

    const images = {
        graphic: portfolioQuery.allFile.edges.filter(item => item.node.childImageSharp.fluid.originalName.includes('graphic-')),
        web: portfolioQuery.allFile.edges.filter(item => item.node.childImageSharp.fluid.originalName.includes('web-')),
        webFull: portfolioQuery.allFile.edges.filter(item => item.node.childImageSharp.fluid.originalName.includes('full-')),
        motion: []
    }

    const handleToggleModal = (t, original, i) => {
        if (!modalToggle) {
            const fullImage = images.webFull.filter(im => im.node.childImageSharp.fluid.originalName.replace('full-', '').replace('.png', '') === original.replace('web-', '').replace('.jpg', ''))
            setModalData({
                tab: t,
                name: original,
                index: i,
                image: tab === 'graphic' ? images.graphic[i].node.childImageSharp.fluid : fullImage[0].node.childImageSharp.fluid
            })
            setModalToggle(true)
        } else {
            setModalData({})
            setModalToggle(false)
        }
    }

    const handleModalPagination = direction => {
        let currIndex = modalData.index
        if (direction === 'next') {
            if (currIndex < images.graphic.length - 1) {
                currIndex++
            } else {
                currIndex = 0
            }
            setModalData({
                ...modalData,
                index: currIndex,
                name: images.graphic[currIndex].node.childImageSharp.fluid.originalName,
                image: images.graphic[currIndex].node.childImageSharp.fluid
            })
        }

        if (direction === 'previous') {
            if (currIndex <= 0) {
                currIndex = images.graphic.length - 1
            } else {
                currIndex--
            }
            setModalData({
                ...modalData,
                index: currIndex,
                name: images.graphic[currIndex].node.childImageSharp.fluid.originalName,
                image: images.graphic[currIndex].node.childImageSharp.fluid
            })
        }
    }

    useEffect(() => {
        const body = document.querySelector('body')
        body.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Layout page='portfolio' modalToggled={modalToggle}>
                <SEO title='graphic and web design portfolio' description="Check out our portfolio of work with graphic design, web design and development, and motion design. Contact us today to discuss your next web, creative, or marketing project!" url='/portfolio' />
                <GridNav handleGridNav={handleGridNav} activeTab={tab} tabs={['graphic', 'web']} />
                <Grid tab={tab} data={images[tab]} handleToggleModal={handleToggleModal} />
                <Modal handleModalPagination={handleModalPagination} toggled={modalToggle} data={modalData} handleToggleModal={handleToggleModal} tab={tab} />
            </Layout>
        </>
    )
}

export default Portfolio

