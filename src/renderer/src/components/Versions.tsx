import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { IoInformationCircleOutline } from 'react-icons/io5'

const Versions = ({ className }: React.ComponentProps<'div'>) => {
  const [versions] = useState(window.electron.process.versions)

  return (
    <div className={twMerge(className)}>
      <IoInformationCircleOutline className="versions__handle" size={24} />
      <ul className="versions hidden p-2">
        <li className="electron-version">Electron v{versions.electron}</li>
        <li className="chrome-version">Chromium v{versions.chrome}</li>
        <li className="node-version">Node v{versions.node}</li>
      </ul>
    </div>
  )
}

export default Versions
