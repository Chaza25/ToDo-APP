import { useState } from "react"

const Task = ( {texto, onDeleteTask, onEditTask} ) => {

    const [editar, setEditar] = useState(false)
    const [nuevoTexto, setNuevoTexto] = useState(texto)

    const handleEdit = () => {
        setEditar(true)
    }

    const handleSave = () => {
        onEditTask(nuevoTexto)
        setEditar(false)
    }

    return(
        <div>
            <li className="bg-white w-full p-4 rounded shadow text-gray-800 flex justify-between items-center flex-wrap">
                <div className="flex-1">
                    {editar ? (<input type="text" value={nuevoTexto} onChange={(e) => setNuevoTexto(e.target.value)} className="border border-gray-300 rounded px-2 py-1 flex-1 mr-2"/>)
                    : (
                    <span className="text-gray-800">{texto}</span>)}
                </div>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    {editar ? (
                        <button onClick={handleSave} className="text-white text-sm hover:text-green-800 bg-green-600 hover:bg-green-400 focus:ring-2 focus:outline-none focus:ring-green-400 font-medium rounded-lg px-2 py-1 dark:bg-green-800 dark:hover:bg-green-600 dark:focus:bg-green-700">
                            Guardar
                        </button>
                    ) : (
                        <button onClick={handleEdit} className="text-blue-600 text-sm hover:text-blue-800 bg-yellow-300 hover:bg-yellow-200 focus:ring-2 focus:outline-none focus:ring-yellow-400 font-medium rounded-lg px-2 py-1 text-center dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700"> 
                            Editar
                        </button>
                    )}
                    <button onClick={onDeleteTask} className="text-sm text-white hover:text-red-200 bg-red-500 hover:bg-red-400 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg px-2 py-1 text-center dark:bg-red-600 dark:hover:bg-red-800 dark:focus:ring-red-700">Eliminar</button>
                </div>
            </li>
        </div>
    )
}

export default Task