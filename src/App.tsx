import { useState } from 'react'

import CustomSelect from './components/custom-select'
import BaseUISelect from './components/baseui-select'
import CustomTabInterface from './components/custom-tab-interface'
import BaseUiTabInterface from './components/baseui-tab-interface' 
import CustomMessageComposer from './components/custom-message-composer'
import BaseUiMessageComposer from './components/baseui-message-composer'

import './App.css'

const buttons = ["custom select", "tab interface", "message composer"];

function App() {
  const [activeComponent, setActiveComponent] = useState(buttons[0]);

  const handleActiveComponent = (comp: string) => {
    setActiveComponent(comp);
  };

  return (
    <>
      <header className='w-full h-15'>
        <nav className='w-full h-full flex items-center justify-center border-b border-neutral-200'>
          <ul className='flex items-center justify-center gap-5'>
            { buttons.map(btn => {
              return (
                <li className=''>
                  <button 
                    type="button"
                    aria-selected={btn === activeComponent}
                    onClick={() => handleActiveComponent(btn)}
                    className='px-2 py-1 bg-white border border-blue-500 text-blue-500 aria-selected:bg-blue-600 aria-selected:text-white capitalize rounded-lg cursor-pointer transition-colors duration-200'
                  >
                    {btn}
                  </button>
                </li>
              )
            }) }
          </ul>
        </nav>
      </header>
      <main className='w-full h-full flex-2 flex flex-col items-center justify-start'>
        <h1 className='text-xl capitalize'>{activeComponent}</h1>
        <div className='w-full h-full flex items-center justify-evenly flex-2'>
          {activeComponent === buttons[0] && 
          <>
            <CustomSelect />
            <BaseUISelect />
          </>
          }
          {activeComponent === buttons[1] &&
           <>
            <CustomTabInterface />
            <BaseUiTabInterface />
           </>
          }
          {activeComponent === buttons[2] && 
            <>
              <CustomMessageComposer />
              <BaseUiMessageComposer />
            </>
          }
        </div>
      </main>
      <footer className='w-full h-20 border-t border-neutral-200'>
      </footer>
    </>
  ) 
};

export default App
