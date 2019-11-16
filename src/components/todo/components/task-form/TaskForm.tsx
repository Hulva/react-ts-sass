import React, { FormEvent, ChangeEvent, KeyboardEvent, useState } from 'react';

export interface TaskFormProps {
    handleSubmit: (title: string) => void;
}

const TaskForm = (props: TaskFormProps) => {
    const [title, setTitle] = useState('');
    let titleInputRef;

    function clearInput() {
        setTitle('');
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    function handleKeyUp(event: KeyboardEvent<HTMLInputElement>) {
        if (event.keyCode === 27) {
            clearInput();
        }
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (title.length) {
            props.handleSubmit(title);
        }
        clearInput();
    }

    return <form className="task-form" onSubmit={handleSubmit} noValidate>
        <input
            type="text" 
            className="task-form__input"
            autoComplete="off"
            autoFocus
            maxLength={64}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            placeholder="what needs to be done?"
            ref={c => titleInputRef = c}
            value={title}
        />
    </form>
};

export default TaskForm;
