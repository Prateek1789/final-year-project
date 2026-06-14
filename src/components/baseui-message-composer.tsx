import { Menu } from "@base-ui/react";

const BaseUiMessageComposer = () => {
  return (
    <div className="w-full max-w-sm p-2 flex flex-col items-center justify-center gap-2 bg-neutral-50 dark:bg-neutral-900 font-sans shadow-lg border border-gray-200 dark:border-neutral-700 rounded-lg">
      <textarea 
        className="w-full h-24 p-2 bg-white dark:bg-neutral-800 dark:text-white border border-gray-200 dark:border-neutral-700 rounded-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-neutral-500 dark:placeholder:text-neutral-300"
        placeholder="Type your message here..."
        aria-label="Message text area"
      />
      <div className="w-full h-full flex items-center gap-2">
        <button className="px-3 py-1.5 text-sm bg-white dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 border border-neutral-300 dark:border-neutral-600 rounded text-gray-700 dark:text-neutral-100 cursor-pointer">
          📎 Attach
        </button>
        <button className="px-3 py-1.5 text-sm bg-white dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 border border-neutral-300 dark:border-neutral-600 rounded text-gray-700 dark:text-neutral-100 cursor-pointer">
          🖼️ Image
        </button>
        
        <Menu.Root>
          <Menu.Trigger className="px-2 py-0.5 text-lg bg-white dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 border border-neutral-300 dark:border-neutral-600 rounded text-gray-700 dark:text-neutral-100 cursor-pointer">
            😀 <p className="sr-only">Emoji</p>
          </Menu.Trigger>
          
          <Menu.Portal>
            <Menu.Positioner sideOffset={8}>
              <Menu.Popup className="p-1 bg-white border border-gray-200 shadow-xl rounded-lg outline-none">
                {['😀','😂','🥰','😎','🤔','🙌'].map(emoji => (
                  <Menu.Item 
                    key={emoji}
                    className="w-8 h-8 hover:bg-gray-100 rounded text-lg cursor-pointer outline-none focus:bg-blue-100 flex items-center justify-center"
                  >
                    {emoji}
                  </Menu.Item>
                ))}
              </Menu.Popup>
            </Menu.Positioner>
          </Menu.Portal>
        </Menu.Root>

        <button className="ml-auto px-4 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded font-medium">
          Send
        </button>
      </div>
    </div>
  )
};

export default BaseUiMessageComposer