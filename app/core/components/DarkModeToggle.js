import {useTheme} from "next-themes"
import {useEffect, useState} from "react"
import {BiToggleLeft, BiToggleRight} from "react-icons/bi"

const DarkModeToggle = ({className}) => {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={switchTheme}
      className={`pr-2 rounded focus:outline-none focus:ring-inset focus:ring-white ${className}`}
    >
      {theme === "dark" ? (
        <BiToggleRight size="2rem" className="inline" />
      ) : (
        <BiToggleLeft size="2rem" className="inline" />
      )}
      <span className="mx-1">
<<<<<<< HEAD
        Donker<span className="lg:hidden">e Modus</span>
=======
        {theme === "dark" ? "Dark" : "Light"}
        <span className="lg:hidden"> Mode</span>
>>>>>>> c1b92d0818d4176f1f2357d015b0d0dec5b3e954
      </span>
    </button>
  )
}

export {DarkModeToggle}
