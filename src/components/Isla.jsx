import ThemeSwitcher from "./ThemeSwitcher"

const Isla = () => {
    return(
        <div className="fixed top-4 left-4 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-xl px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 transition duration-300">
            <ThemeSwitcher/>
        </div>
    )
}

export default Isla