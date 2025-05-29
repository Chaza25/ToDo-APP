import { useState } from "react"

const TaskForm = ( {onAddTask} ) => {

    const [error, setError] = useState("")

    const [tarea, setTarea] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!tarea.trim()) {
            setError("Por favor, escribí una tarea")
            return
        }

        onAddTask(tarea)
        setTarea("")
        setError("")
    }

    return(
        <div>
            <h1 className="text-xl text-center pb-7 pt-5 text-black dark:text-white">¡Agregar tu proxima tarea a la lista!</h1>
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label value={tarea} htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Escribir tarea</label>
                    <input value={tarea} onChange={(e) => setTarea(e.target.value)} type="text" id="text" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Sacar basura" required />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar tarea</button>
            </form>
        </div>
    )
}

export default TaskForm