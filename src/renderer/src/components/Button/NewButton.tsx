import { ActionButton, ActionButtonProps } from './index'
import { LuFileSignature } from 'react-icons/lu'

export const NewButton = ({ ...props }: ActionButtonProps) => {
  const handleButton = () => {}

  const handleClick = async () => {
    await handleClick()
  }

  return (
    <ActionButton onClick={handleClick} {...props}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
