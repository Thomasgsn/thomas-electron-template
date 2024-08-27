import { DeleteButton, NewButton } from './Button/index'
import { ComponentProps } from 'react'

export const ActionButtonsRow = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewButton />
      <DeleteButton />
    </div>
  )
}
