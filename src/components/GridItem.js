import React from 'react'
import { NrdstrIcon, ExpandIcon } from '../icons/icons'
import Img from "gatsby-image"

const GridItem = props => {


    // const handleClick = () => {
    //     dispatch({
    //         type: 'toggle',
    //         payload: {
    //             ...toggle,
    //             modal: {
    //                 toggled: true,
    //                 id: props.id,
    //                 index: props.index,
    //                 tab: props.tab,
    //                 type: props.type
    //             }
    //         }
    //     })
    //     if (props.type) {
    //         props.history.push(`/${page}/${props.tab}/${props.index}`)
    //     } else {
    //         props.history.push(`/${page}/${props.index}`)
    //     }
    // }
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