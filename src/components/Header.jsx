import ThemeSwitcher from "./ThemeSwitcher"

const Header = () => {
    return(
        <div className="bg-green-500 dark:bg-green-950 text-white hover:bg-green-700 dark:hover:bg-green-700 transition-colors duration-400 rounded px-4 py-2">
            <h1 className="text-xl font-extrabold text-center p-7">ToDo App: Tu App para no olvidar tus tareas</h1>
        </div>
    )
}

export default Header