import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { getTasks, createTask, updateTask, deleteTask } from '../services/api';
import './../styles/TaskList.css';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingTask, setEditingTask] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const tasksData = await getTasks();
                setTasks(tasksData);
            } catch (err) {
                console.error("Error fetching tasks:", err);
                setError(`Failed to fetch tasks: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    const handleCreateTask = async (task) => {
        try {
            const newTask = await createTask(task);
            setTasks([...tasks, newTask]);
        } catch (err) {
            console.error("Error creating task:", err);
            setError(`Failed to create task: ${err.message}`);
        }
    };

    const handleUpdateTask = async (id, task) => {
        try {
            const updatedTask = await updateTask(id, task);
            setTasks(tasks.map(t => (t.id === id ? updatedTask : t)));
            setEditingTask(null);
        } catch (err) {
            console.error("Error updating task:", err);
            setError(`Failed to update task: ${err.message}`);
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter(t => t.id !== id));
        } catch (err) {
            console.error("Error deleting task:", err);
            setError(`Failed to delete task: ${err.message}`);
        }
    };

    if (loading) return <p>Loading tasks...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="task-list-container">
            <TaskForm
                onSubmit={editingTask ? (task) => handleUpdateTask(editingTask.id, task) : handleCreateTask}
                initialData={editingTask}
            />
            <div className="task-list">
                {tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onEdit={() => setEditingTask(task)}
                        onDelete={() => handleDeleteTask(task.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default TaskList;
