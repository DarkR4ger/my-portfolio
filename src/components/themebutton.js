import { Icon } from "@iconify/react";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

export default function ThemeButton({ mode, setMode }) {


  return (
    <button className="text-2xl" onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
      {mode === 'dark' ?
        <Icon color="red" icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition" /> :
        <Icon color="orange" icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition" />
      }
    </button>
  )
}
