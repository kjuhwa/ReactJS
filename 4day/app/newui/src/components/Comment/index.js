import React from 'react'
import './Comment.css'

const Comment = ({name, body})=>(
    <li className='CommentStyle'>
        <p><strong>{name}</strong><br/>{body}</p>
    </li>
)

export default Comment