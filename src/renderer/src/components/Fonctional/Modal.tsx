import { LiaTimesSolid } from 'react-icons/lia'
import { twMerge } from 'tailwind-merge'
import { ComponentProps } from 'react'

export const Modal = ({
  open,
  onClose,
  children,
  className,
  ...props
}: ComponentProps<'div'> & {
  open: boolean
  onClose: () => void
}) => {
  return (
    <div
      onClick={onClose}
      className={`z-50 fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visible bg-black/30' : 'invisible'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={twMerge(
          `bg-bgSidebarLight dark:bg-bgSidebarDark rounded-xl shadow p-6 transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`,
          className
        )}
        {...props}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-950 transition-all group"
        >
          <LiaTimesSolid className="text-xl rounded-[8px] group-hover:scale-90" />
        </button>
        {children}
      </div>
    </div>
  )
}
