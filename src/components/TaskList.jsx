import Task from "./Task"

const TaskList = ( {tareas, onDeleteTask, onEditTask} ) => {
    return(
        <div className="max-w-sm mx-auto mt-6">
            <h1 className="text-xl font-bold mb-4">Lista completa:</h1>

            {tareas.lenght === 0 ?
            (<p className="text-gray-600">Todavia no hay tareas</p>
            ) : (
            <ul className="space-y-2">
                {tareas.map((tarea, index) => (
                    // <li key={index} className="bg-white p-4 rounded shadow">
                    //     {tarea}
                    // </li>
                    <Task key={index} texto={tarea} onDeleteTask={() => onDeleteTask(index)} onEditTask={(newText) => {onEditTask(index, newText)}}/>
                ))}
            </ul>
            )}

        </div>
    )
}

export default TaskList