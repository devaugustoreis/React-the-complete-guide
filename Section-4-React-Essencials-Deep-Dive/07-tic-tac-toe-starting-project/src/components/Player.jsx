import { useState } from 'react';

export default function Player({ initialName, symbol}) {
    const [ playerName, setPlayerName] = useState(initialName)
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        /*
        Obs.: Explanations below about updating a state basead on and old state value
        
        setIsEditing(!isEditing); // schedules a state update to true. (almost instantly, probably something around 2 ms.)
        setIsEditing(!isEditing); // also schedules a state update to true, because in this line 'isEditing' is still the same value as above.
        */

        // This is the best practice becausa of the explanation above.
        setIsEditing(editing => !editing)
        // setIsEditing(editing => !editing) // here 'isEditing' constains the latest value and is already updated.
    }

    function handleChange(event) {
        console.log(event.target.tagName === 'INPUT')
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{ playerName }</span>
    // let btnLabel = "Edit"

    if (isEditing) {
        editablePlayerName = <input type="text" required value={ playerName } onChange={handleChange}/>
        // btnLabel= "Save"
    }

    return (
        <li>
            <span className="player">
                { editablePlayerName }
                <span className="player-symbol">{ symbol }</span>
            </span>
                <button onClick={handleEditClick}>{ isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}