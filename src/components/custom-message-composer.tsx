import { useState, useRef, useEffect, type KeyboardEvent } from 'react';

const CustomMessageComposer = () => {
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const toggleEmoji = () => {
    setIsEmojiOpen(!isEmojiOpen);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsEmojiOpen(false);
    }
  };

  useEffect(() => {
    if (isEmojiOpen && popupRef.current) {
      const firstEmoji = popupRef.current.querySelector('button');
      firstEmoji?.focus();
    }
  }, [isEmojiOpen]);

  return (
    <div className="w-full max-w-sm p-2 flex flex-col items-center justify-center gap-2 bg-neutral-50 dark:bg-neutral-900 font-sans shadow-lg border border-gray-200 dark:border-neutral-700 rounded-lg">
      <textarea 
        className="w-full h-24 p-2 bg-white dark:bg-neutral-800 dark:text-white border border-gray-200 dark:border-neutral-700 rounded-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-neutral-500 dark:placeholder:text-neutral-300"
        placeholder="Type your message here..."
        aria-label="Message text area"
      />
      
      <div 
        role="toolbar" 
        aria-label="Formatting options"
        className="w-full h-full flex items-center gap-2"
      >
        <button className="px-3 py-1.5 text-sm bg-white dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 border border-neutral-300 dark:border-neutral-600 rounded text-gray-700 dark:text-neutral-100 cursor-pointer">
          📎 Attach
        </button>
        <button className="px-3 py-1.5 text-sm bg-white dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 border border-neutral-300 dark:border-neutral-600 rounded text-gray-700 dark:text-neutral-100 cursor-pointer">
          🖼️ Image
        </button>
        
        {/* The Native Disclosure Pattern */}
        <div className="relative">
          <button 
            ref={triggerRef}
            onClick={toggleEmoji}
            aria-haspopup="dialog"
            aria-expanded={isEmojiOpen}
            className="px-2 py-0.5 text-lg bg-white dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 border border-neutral-300 dark:border-neutral-600 rounded text-gray-700 dark:text-neutral-100 cursor-pointer"
          >
            😀 <p className="sr-only">Emoji</p>
          </button>
          {isEmojiOpen && (
            <div
              ref={popupRef} 
              role="dialog"
              aria-label="Emoji Picker"
              onKeyDown={handleKeyDown}
              className="p-1 left-0 translate-x-[-2px] top-[120%] absolute z-10 flex flex-col items-center justify-center gap-1 bg-white border border-gray-200 shadow-xl rounded-lg"
            >
              {['😀','😂','🥰','😎','🤔','🙌'].map(emoji => (
                <button 
                  key={emoji} 
                  className="w-8 h-8 hover:bg-blue-100 rounded text-lg cursor-pointer outline-none focus:bg-blue-100 flex items-center justify-center"
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="ml-auto px-4 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded font-medium">
          Send
        </button>
      </div>
    </div>
  )
};

export default CustomMessageComposer