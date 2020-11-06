import React, { useEffect, useRef, useState } from 'react'
// import YouTube from 'react-youtube-embed'
import { ExternalLink } from '../icons/icons'
import { webData } from '../utils/web'
import Img from "gatsby-image"

const Modal = props => {
    const [content, setContent] = useState()
    const modal = useRef(null)

    const handleCloseModal = () => {
        props.handleToggleModal()
    }

    const handlePagination = direction => props.handleModalPagination(direction)


    const Graphic = () => {
        const data = props.data
        return <img
            className='modal__image animate--fade-in-fast'
            alt='portfolio item'
            src={data.image.src} />
    }

    // const Motion = () => {
    //     const { motion } = data
    //     return <YouTube id={motion[toggle.modal.index].snippet.resourceId.videoId} />
    // }

    const Web = () => {
        const data = props.data
        const dataName = data.name.replace('web-', '').replace('.jpg', '')
        const site = webData.filter(web => web.name.replaceAll(' ', '') === dataName)
        return (
            <>
                <div className='modal__web animate--fade-in'>
                    <div className='modal__wrapper'>
                        <div className='modal__web-image-container'>
                            <Img
                                className='modal__web-image'
                                alt={site[0].name}
                                fluid={data.image} />
                        </div>
                    </div>
                    <div className='column modal__web-container'>
                        <a className='modal__web-link' href={`https://${site[0].url}`} title={`https://${site[0].url}`}>
                            {site[0].url} <ExternalLink />
                        </a>
                        <div className='modal__web-tags'>
                            {site[0].tags.map(tag => {
                                return <p key={tag} className='modal__web-tag'>{tag}</p>
                            })}
                        </div>
                        <p className='modal__web-description' dangerouslySetInnerHTML={{ __html: site[0].description }}></p>
                    </div>
                </div>
            </>
        )
    }

    const handleContent = () => {
        const tab = props.tab

        if (tab === 'graphic') {
            setContent(<Graphic />)
        } else if (tab === 'web') {
            setContent(<Web />)
        } else {
            return 'Loading...'
        }
    }

    useEffect(() => {
        if (props.toggled) {
            modal.current.style.display = 'flex'
            setTimeout(() => {
                modal.current.style.opacity = 1
            }, 10)
            handleContent()
        } else {
            modal.current.style.opacity = 0
            setTimeout(() => {
                modal.current.style.display = 'none'
            }, 200)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.toggled, props.data])


    return (
        <div ref={modal} className={`modal`}>
            <div className='modal__top-bar'>
                <button onClick={handleCloseModal} className='modal__close' />
            </div>
            <div className='modal__inner'>
                <div className={`modal__btn-container modal__btn-container--full ${props.tab === 'web' ? 'hide' : ''}`}>
                    <button onClick={() => handlePagination('previous')} className='modal__btn modal__btn--prev' />
                </div>
                <div className='modal__content-container'>
                    {content}
                </div>
                <div className={`modal__btn-container modal__btn-container--full flex-end ${props.tab === 'web' ? 'hide' : ''}`}>
                    <button onClick={() => handlePagination('next')} className='modal__btn' />
                </div>
                <div className={`modal__mobile-btns ${props.tab === 'web' ? 'remove' : ''}`}>
                    <div className='modal__btn-container'>
                        <button onClick={() => handlePagination('previous')} className='modal__btn modal__btn--prev' />
                    </div>
                    <div className='modal__btn-container'>
                        <button onClick={() => handlePagination('next')} className='modal__btn' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal