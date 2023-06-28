import React, {useState} from 'react'
import classes from './ListElement.module.css'

export default function ListElement(props) {
    return (
        <div className={classes.listTask}>
            <ul>
                {
                    props.task.length === 0 ? <h2>List is empty</h2> :
                    props.task.map(elem =>
                        <li key={elem.id}>
                            <input 
                                type="checkbox" 
                                checked={elem.isDone}
                                onChange={(evt) => {
                                    props.changeCheckStatus(elem.id, !elem.isDone)
                                    evt.target.checked = !elem.isDone;
                                }}
                            />
                            <span>{elem.title}</span>
                            <button
                                onClick={(evt) => {
                                    props.removeTask(elem.id)
                                }}
                            >
                                <span className="material-symbols-outlined btn-elem">
                                    delete
                                </span>
                            </button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
