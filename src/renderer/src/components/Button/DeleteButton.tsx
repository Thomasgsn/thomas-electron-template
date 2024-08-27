import { ActionButton, ActionButtonProps } from './index'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeleteButton = ({ ...props }: ActionButtonProps) => {
  const handleButton = () => {}

  const handleClick = async () => {
    await handleButton()
  }

  return (
    <ActionButton onClick={handleClick} {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
