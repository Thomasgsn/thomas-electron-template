import { useEffect, useState } from 'react'
import { HiOutlineSun } from 'react-icons/hi2'
import { AiOutlineMoon } from 'react-icons/ai'

export const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') setDarkMode(true)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }

    setTimeout(() => {}, 500)
  }, [darkMode])

  return (
    <button className="w-fit px-2 border rounded-lg " onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? (
        <div className=" flex items-center justify-center gap-2 p-2">
          <p>Dark</p>
          <AiOutlineMoon size={18} />
        </div>
      ) : (
        <div className=" flex items-center justify-center gap-2 p-2">
          <p>Light</p>
          <HiOutlineSun size={18} />
        </div>
      )}
    </button>
  )
}
