import { Content, RootLayout, Sidebar, DraggableTopBar, ActionButtonsRow } from './components/index'

function App(): JSX.Element {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2 border-r border-black/10 dark:border-white/5 ">
          <ActionButtonsRow className="flex justify-between mt-1" />
        </Sidebar>
        <Content className="p-2">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
