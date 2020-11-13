import React from 'react'
import { Link } from 'gatsby'
import { serviceList } from '../utils/services-list'

const Service = ({ type }) => {
    const service = serviceList.filter(service => service.slug === type)
    const { name, slug, description } = service[0]

    return (
        <div className='service animate--fade-in'>
            <div className='service__top'>
                <Link className='link__back-btn' to='/services'>&#8592; services</Link>
            </div>
            <h1 className='service__title'>
                <div className={`icon service__icon icon--${slug}`} />
                {name}
            </h1>
            <div className='service__content' dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    )
}

export default Service