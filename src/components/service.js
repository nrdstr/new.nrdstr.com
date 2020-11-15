import React, { useRef, useEffect } from 'react'
import { Link, navigate } from 'gatsby'
import { serviceList } from '../utils/services-list'

const Service = ({ type, description }) => {
    const service = serviceList.filter(service => service.slug === type)
    const { name, slug } = service[0]
    const content = useRef()

    const handleNavigate = (e, path) => {
        e.preventDefault()
        navigate(path)
    }


    useEffect(() => {
        const body = document.querySelector('body')
        body.scrollTo(0, 0)

        if (content) {
            const links = content.current.querySelectorAll('#link')
            if (links) {
                links.forEach(link => {
                    const path = link.pathname
                    link.addEventListener('click', e => handleNavigate(e, path))
                })
            }
        }
    }, [content])

    return (
        <div className='service animate--fade-in'>
            <div className='service__top'>
                <Link className='link__back-btn' to='/services'>&#8592; services</Link>
            </div>
            <h1 className='service__title'>
                <div className={`icon service__icon icon--${slug}`} />
                {name}
            </h1>
            <div ref={content} className='service__content' dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    )
}

export default Service