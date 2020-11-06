import React from 'react'

const GridNav = props => {

    return (
        <div className='grid-nav animate--fade-in'>
            {
                props.tabs.map(tab => {
                    return (
                        <button key={tab}
                            onClick={() => props.handleGridNav(tab)}
                            className={`grid-nav__btn ${tab === props.activeTab && 'grid-nav__btn--active'}`}>
                            {tab}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default GridNav