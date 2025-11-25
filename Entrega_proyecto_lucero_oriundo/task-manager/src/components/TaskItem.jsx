import React from 'react';
import './../styles/TaskItem.css';

const TaskItem = ({ task, onEdit, onDelete }) => {
    return (
        <div className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div className="task-actions">
                <button onClick={onEdit}>Edit</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
};

export default TaskItem;
