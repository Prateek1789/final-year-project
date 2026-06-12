import { useState, useRef, type KeyboardEvent } from "react";

const tabs = [
  { id: "tab-1", title: "Accounts", content: "Check your account details"},
  { id: "tab-2", title: "Password", content: "Update your password and security"},
  { id: "tab-3", title: "Billing", content: "Manage your payment methods"},
];

const CustomTabInterface = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<HTMLButtonElement[]>([]);
  const [focusIndex, setFocusIndex] = useState(0);

  const handleKeydown = (e: KeyboardEvent<HTMLDivElement>) => {
    let newIndex = focusIndex;
    switch(e.key) {
      case "ArrowRight":
        e.preventDefault();
        newIndex = focusIndex < tabs.length - 1 ? focusIndex + 1 : 0;
        break;
      case "ArrowLeft":
        e.preventDefault();
        newIndex = focusIndex > 0 ? focusIndex - 1 : tabs.length - 1;
        break;
      case "Home":
        e.preventDefault();
        newIndex = 0;
        break;
      case "End":
        e.preventDefault();
        newIndex = tabs.length - 1;
        break;
      default:
        return;
    };

    setFocusIndex(newIndex);
    tabRefs.current[newIndex].focus();
  };  

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div
        role="tablist"
        aria-label="Manage Settings"
        tabIndex={-1}
        onKeyDown={handleKeydown} 
        className="w-80 p-0.5 flex items-center justify-center gap-0.75 rounded-md bg-gray-200 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700"
      >
        {tabs.map((tab, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={tab.id}
              ref={(btn) => { tabRefs.current[idx] = btn }}
              role="tab"
              tabIndex={focusIndex === idx ? 0 : -1}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => {
                setActiveIndex(idx);
                setFocusIndex(idx)
              }}
              id={tab.id}
              className="h-full w-1/3 px-2 py-1 bg-white dark:bg-neutral-700 border border-gray-200 dark:border-neutral-600 dark:text-white text-sm rounded-sm cursor-pointer aria-selected:bg-blue-600 aria-selected:text-white aria-selected:border-blue-400"
            >
              {tab.title}
            </button>
          )
        })}
      </div>
      <div
        id={`tab-panel`}
        role="tabpanel"
        aria-labelledby={tabs[activeIndex].id}
        tabIndex={0}
        className="w-full min-h-50 rounded-md dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 flex items-center justify-center focus:outline-2 focus:ring-2 focus:ring-blue-500"
      >
        <p className="text-black dark:text-white">{tabs[activeIndex].content}</p>
      </div>
    </div>
  )
}; 

export default CustomTabInterface
