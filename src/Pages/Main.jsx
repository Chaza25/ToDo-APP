import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import TaskForm from "../components/TaskForm"
import TaskList from "../components/TaskList"
// import ThemeSwitcher from "../components/ThemeSwitcher"
import Isla from "../components/Isla"

const Main = () => {

    const [tareas, setTareas] = useState(() => {
        const tareasGuardadas = localStorage.getItem("tareas")
        return tareasGuardadas ? JSON.parse(tareasGuardadas) : []
    })

    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas))
    }, [tareas])

    const [mensaje, setMensaje] = useState("")

    const mostrarMensaje = (texto) => {
        setMensaje(texto)
        setTimeout(() => {
            setMensaje("")
        }, 3000);
    }

    const onAddTask = (newTask) => {
        setTareas([...tareas, newTask])
        mostrarMensaje("✅Tarea agregada con exito")
    }

    const onDeleteTask = (indexToDelete) => {
        const nuevasTareas = tareas.filter((_, index) => index !== indexToDelete)
        setTareas(nuevasTareas)
        mostrarMensaje("🗑️Tarea eliminada con exito")
    }

    const onEditTask = (indexToEdit, newText) => {
        const tareasEditadas = tareas.map((tarea, index) => index === indexToEdit ? newText : tarea)
        setTareas(tareasEditadas)
        mostrarMensaje("✏️Tarea editada con exito")
    }

    return(
        <div className="min-h-screen flex flex-col">
            <Header/>
            <Isla/>
            <main className="flex-1 p-4 bg-gray-200 dark:bg-gray-600">
                {mensaje && (
                    <div className="fixed top-2 right-8 mx-auto mb-4 text-center text-green-600 font-semibold bg-green-100 p-2 rounded">
                        {mensaje}
                    </div>
                )}
                <TaskForm onAddTask={onAddTask} />
                <TaskList tareas={tareas} onDeleteTask={onDeleteTask} onEditTask={onEditTask}/>
            </main>
            <Footer/>
        </div>
    )
}

export default Main