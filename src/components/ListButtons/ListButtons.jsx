import React from 'react'

export default function ListButtons(props) {
    console.log(props)
    function handlerFilterAll() {
        props.changeFilter('all')
    }

    function handlerFilterActive() {
        props.changeFilter('active')
    }

    function handlerFilterDone() {
        props.changeFilter('done')
    }

    return (
        <div className="list-of__buttons">
                <button 
                    onClick={handlerFilterAll}
                >all</button>

                <button
                    onClick={handlerFilterActive}
                >active</button>

                <button
                    onClick={handlerFilterDone}
                >done</button>
            </div>
    )
}
