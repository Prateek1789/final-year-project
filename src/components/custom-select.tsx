import { useState, useEffect, useRef, type KeyboardEvent } from "react";

const CustomSelect = () => {
  const frameworks = [
    {id: "opt-1", label: "React"},
    {id: "opt-2", label: "Vue"},
    {id: "opt-3", label: "Angular"},
    {id: "opt-4", label: "Svelte"},
  ];
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const [activeIndex, setActiveIndex] = useState(-1);
  const [isSelectOpen, setSelectOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  // handle focus when the select menu is open
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!isSelectOpen) {
      if (e.key === "Enter" || e.key === "ArrowDown") {
        e.preventDefault();
        setSelectOpen(true);
        if (!selectedOption && activeIndex < 0) {
          setActiveIndex(0);
        }
      }
      return;
    };

    switch(e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex(prev => prev < frameworks.length - 1 ? prev + 1 : prev);
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex(prev => prev > 0 ? prev - 1 : prev);
        break;
      case "Enter":
        e.preventDefault();
        if (activeIndex >= 0) {
          setSelectedOption(frameworks[activeIndex].label);
          setSelectOpen(false);
        };
        break;
      case "Escape":
        e.preventDefault();
        setSelectOpen(false);
        break; 
    }
  };

  const handleSelect = (label: string) => {
    setSelectedOption(label);
    const activeIdx = frameworks.findIndex(opt => opt.label === label);
    setActiveIndex(activeIdx);
    setSelectOpen(!setSelectOpen);
  };

  // close the select menu if user clicks outside the component
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (isSelectOpen && !containerRef.current.contains(e.target as Node)) {
        setSelectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isSelectOpen]);

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      className="relative flex flex-col items-start gap-0.25"
    >
      <label
        id="select-label" 
        className="text-black"
      >
        Fronted Frameworks
      </label>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isSelectOpen}
        aria-labelledby="select-label select-trigger"
        id="select-trigger" 
        onClick={() => setSelectOpen(!isSelectOpen)}
        className="w-50 bg-white text-neutral-600 text-left text-sm hover:text-neutral-900 hover:border-blue-300 p-2 rounded-md border border-neutral-200 cursor-pointer transition-all duration-200" 
      >
        {selectedOption || "Select Framework"}
      </button>
      {isSelectOpen && (
        <ul
          role="listbox"
          tabIndex={-1}
          aria-activedescendant=""
          className="absolute top-[110%] left-0 w-full z-10 p-1 bg-white shadow-lg rounded-md border border-neutral-200"
        >
          {frameworks.map((option, idx) => (
            <li 
              key={option.id}
              id={option.id}
              role="option"
              aria-selected={selectedOption === option.label} 
              onClick={() => handleSelect(option.label)}
              className={`p-2 hover:bg-neutral-100 border border-transparent hover:border-neutral-200 ${activeIndex === idx && "bg-neutral-100"} cursor-pointer rounded-md text-black text-left text-sm`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
};

export default CustomSelect;