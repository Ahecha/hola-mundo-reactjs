import React, { useState } from 'react';
import { Task } from "../../models/task.class"
import { LEVELS } from "../../models/levels-enum"
import TaskComponent from '../pure/forms/task';


const TaskListComponent = (props) => {

    
    const defaultTask1 = new Task("Example1", "Description 1", true, LEVELS.NORMAL);
    const defaultTask2 = new Task("Example2", "Description 2", false, LEVELS.NORMAL);
    const defaultTask3 = new Task("Example3", "Description 3", false, LEVELS.NORMAL);

    const {tasks, setTasks} = useState([defaultTask1, defaultTask2, defaultTask3]);

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
        <div className='col-12'>
            <div className="card">
                <div className='card-header p-3'>
                    <h5>
                    Your task:
                    </h5>
                </div>
            </div>
           <div className= 'card-body' data-mdb-perfect-crollbar= 'true' style={ {position: "relative", height: '400px'} }>

               <table>
                   <thead>
                   <tr>
                <th scope= "col">Title</th>
                <th scope= "col">Description</th>
                <th scope= "col">Priority</th>
                <th scope= "col">Actions</th>
                </tr>
                   </thead>
                   <tbody>

        {task.map((tas, index)=> {
            return( <TaskComponent key= {index} task={task}></TaskComponent>
                )
        })}

                    </tbody>
                   </table>

            </div> 
            <TaskForm></TaskForm>
        </div>
        
    </div>
    );
};





export default TaskListComponent;



