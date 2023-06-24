// Note.js - Server Component (NExt.js)

import db from 'db';
// (A1) We import from NoteEditor.js - a Client Component.
import NoteEditor from 'NoteEditor';

async function Note(props) {
    const { id, isEditing } = props;
    // (B) Can directly access server data sources during render, e.g. databases
    const note = await db.posts.get(id);

    return (
        <div>
            <h1>{note.title}</h1>
            <section>{note.body}</section>
            {/* (A2) Dynamically render the editor only if necessary */}
            {isEditing
                ? <NoteEditor note={note} />
                : null
            }
        </div>
    );
}

// Server Components are rendered on the server. So they're well-suited for situations where real-time updates or user interactions are not essential.

// Things You Can Do
// Use async / await with server only data sources such as databases, internal services, filesystems etc.
// Render other server components, native elements like div, span, and so on or Client Components(Normal React components).

// Things You Cannot Do
// Cannot use hooks provided by React like useState, useReducer, useEffect and so on, as server components are rendered on the server.
// Cannot use browser API's like Local Storage and so on (You can polyfill them on server, though).
// Cannot use any utility functions that depend on browser only API's (for example: Local Storage) or custom hooks that depend on state or effects.