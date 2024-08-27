/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { twMerge } from 'tailwind-merge'
import { SettingsButton } from './Button/index'
import { ComponentProps, forwardRef } from 'react'
import { WavyLines } from '../utils/WavyLines'

export const RootLayout = ({ className, children, ...props }: React.ComponentProps<'main'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}

export const DraggableTopBar = () => {
  const closeWindow = (): void => window.electron.ipcRenderer.send('close')
  const minimizeWindow = (): void => window.electron.ipcRenderer.send('minimize')

  return (
    <header className=" inset-0 h-7 bg-bgSidebarLight dark:bg-bgSidebarDark border-b p-2 border-black/10 dark:border-white/5 flex justify-between items-center">
      Thomas&apos;s Electron Template
      <div className="flex items-center">
        <button
          onClick={minimizeWindow}
          className="flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-gray-500/20 duration-150 px-1"
        >
          <p className="mt-[2px]">&#128469;</p>
        </button>
        <button
          onClick={closeWindow}
          className="flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-red-500/50 duration-150 px-2"
        >
          <p className="mt-[2px]">&#x2715;</p>
        </button>
      </div>
    </header>
  )
}

export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside
      className={twMerge(
        'min-w-48 w-fit h-[100vh] overflow-auto bg-bgSidebarLight dark:bg-bgSidebarDark',
        className
      )}
      {...props}
    >
      <h1 className="text-center">Welcome Back!</h1>
      <hr className="my-2 opacity-90 dark:opacity-5" />
      {children}
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge('flex-1 overflow-auto bg-bgLight dark:bg-bgDark', className)}
        {...props}
      >
        <SettingsButton />
        {children}
        <WavyLines />
      </div>
    )
  }
)

Content.displayName = 'Content'
