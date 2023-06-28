import React, {useState} from 'react'

export default function HeaderElement(props) {
    const [inputValue, setInputValue] = useState('')
    return (
        <div className="app__header">
                <h2 className="title__text">TODOS</h2>

                <div className="block__add-task">
                    <input
                        type="text"
                        placeholder="Todos..."
                        value={inputValue}
                        onChange={(evt) => {
                            setInputValue(evt.target.value)
                        }}
                        onKeyDown={(evt) => {
                            if (evt.code === 'Enter' && inputValue !== '') {
                                props.addTask(inputValue)
                                setInputValue('')
                            } else {
                                return
                            }
                        }}
                    />

                    <button
                        onClick={() => {
                            if (inputValue !== '') {
                                props.addTask(inputValue)
                                setInputValue('')
                            } else {
                                return
                            }
                        }}
                    >
                        <span className="material-symbols-outlined">
                            add_circle
                        </span>
                    </button>

                </div>
            </div>
    )
}
