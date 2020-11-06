import React from 'react'
import { NrdstrIcon, ExpandIcon } from '../icons/icons'
import Img from "gatsby-image"

const GridItem = props => {
    return (
        <div className={`grid-item grid-item--${props.tab}`} onClick={props.handleToggleModal}>
            <div className='grid-item__placeholder'>
                <NrdstrIcon />
            </div>
            <div className='grid-item__hover'>
                <ExpandIcon />
            </div>
            <Img
                className='grid__img'
                alt={'portfolio item'}
                fluid={props.src} />
        </div>
    )
}

export default GridItem