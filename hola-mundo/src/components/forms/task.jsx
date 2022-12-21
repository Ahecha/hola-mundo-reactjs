import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Task} from "../../models/task.class"


const TaskComponent = ({task}) => {

    useEffect(() => {
      console.log("tarea creada")
    
      return () => {
        console.log(`la tarea: ${task.name} va a desaparecer`)
      }
    }, [task])


    function taskLevelBadge() {
        switch(task.level) {
                case LEVEL.NORMAL:
                    return(
                        <h6 className="mb-0"> 
                        <span className= "badge bg-primary"> 
                            {task.level}
                        </span>
                        </h6> 
                    )
                
                    case LEVEL.URGENT:
                        return(
                            <h6 className="mb-0"> 
                            <span className= "badge bg-warning"> 
                                {task.level}
                            </span>
                            </h6> 
                        )

                    case LEVEL.BLOCKING:
                    return(
                        <h6 className="mb-0"> 
                        <span className= "badge bg-danger"> 
                            {task.level}
                        </span>
                        </h6> 
                    )
                    default:
                        break;
        }
    }

    function taskIconCompleted() {
        if(task.completed) {
            return(<i className="bi-toggle-on" style={ {color: 'green', fontWeight:'bold'} }></i>)
        } else {
            return(<i className="bi-toggle-off" style={ {color: 'green', fontWeight:'bold'} }></i>)
        }
    }
    

    return (
    
        <tr className= "fw-normal">
            <th>  
                <span className= "ms-2"> {task.name}  </span>
            </th>
            <td className="align-middle"> 
                <span>{task.description} </span> 
            </td>
            <td className="align-middle"> 
                {taskLevelBadge()}
            </td>
            <td className="align-middle"> 
               {taskIconCompleted()}
                <i className="bi-trash" style={ {color: 'tomato', fontSize:'20px'} }></i>
            </td>


        </tr>
    
    
        /*  <div>
           
            <h2>
                Name:  {task.name}
            </h2>
            <h3>
                Description:  {task.description}
            </h3>
            <h4>
                Level: {task.level}
            </h4>
            <h5>
                This task is: {task.completed ? "Complete": "Pending"}
            </h5>

        </div> */
    );
};


TaskComponent.propTypes = {
    task: Proptypes.instanceOf(Task)
};


export default TaskComponent;