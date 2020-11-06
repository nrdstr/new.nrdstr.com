import React from 'react'
import GridItem from './GridItem'

const Grid = props => {

    if (props.data) {
        return (
            <div className={`grid grid--${props.tab} animate--fade-in`}>
                { props.data.map((item, i) => {
                    return <GridItem key={i}
                        src={item.node.childImageSharp.fluid}
                        original={item.node.childImageSharp.fluid.originalName}
                        handleToggleModal={() => props.handleToggleModal(props.tab, item.node.childImageSharp.fluid.originalName, i)}
                        index={i}
                        id={i}
                        tab={props.tab} />
                })}
            </div>
        )
    } else {
        return <p className='grid__placeholder'>coming soon</p>
    }
}

export default Grid



