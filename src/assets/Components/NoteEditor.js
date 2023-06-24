// NoteEditor.js - Client Component (NextJS)

'use client';

import { useState } from 'react';

export default function NoteEditor(props) {
    const note = props.note;
    const [title, setTitle] = useState(note.title);
    const [body, setBody] = useState(note.body);
    const updateTitle = event => {
        setTitle(event.target.value);
    };
    const updateBody = event => {
        setBody(event.target.value);
    };
    const submit = () => {
        // ...save note...
    };
    return (
        <form action="..." method="..." onSubmit={submit}>
            <input name="title" onChange={updateTitle} value={title} />
            <textarea name="body" onChange={updateBody}>{body}</textarea>
        </form>
    );
}