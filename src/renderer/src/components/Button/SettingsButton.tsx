import { useState } from 'react'
import { Modal, ThemeToggler } from '../Fonctional/index'
import { ActionButton, ActionButtonProps } from './index'
import { IoSettingsOutline } from 'react-icons/io5'
import Versions from '../Versions'

export const SettingsButton = ({ ...props }: ActionButtonProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = async () => {
    setOpen(true)
  }

  return (
    <>
      <ActionButton className="absolute right-4 " onClick={handleClick} {...props}>
        <IoSettingsOutline className="w-4 h-4 text-zinc-300" />
      </ActionButton>
      <Modal className="w-5/6 h-5/6" open={open} onClose={() => setOpen(false)}>
        <div className="settings">
          <div className="w-fit h-16 setting flex items-center gap-16">
            <span>Theme</span>
            <ThemeToggler />
          </div>
        </div>
        <Versions className="absolute m-2 right-0 bottom-0" />
      </Modal>
    </>
  )
}
