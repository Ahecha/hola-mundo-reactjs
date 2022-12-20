import React, { useState } from 'react';
import { Task } from "../../models/task.class"
import { LEVELS } from "../../models/levels-enum"
import TaskComponent from '../pure/forms/task';


const TaskListComponent = (props) => {

    
    const defaultTask = new Task("Example", "Default description", false, LEVELS.NORMAL);

    const {tasks, setTasks} = useState([defaultTask]);

    const {loading, setLoading} = useState(true);

    useEffect(() => {
        console.log("Modificacion de tareas")
        setLoading(false);
        return () => {
          console.log("el componente de las tareas va a desaparecer")
        };
        
      }, [tasks])

    const changeCompleted = (id) => {
        console.log("TODO: cambiar estado de una tarea")
    }


    return (
        <div>
            <div>
                Your task:
            </div>
            <TaskComponent task= {defaultTask}></TaskComponent>
        </div>
    );
};





export default TaskListComponent;