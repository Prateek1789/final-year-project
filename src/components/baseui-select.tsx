import { Select } from "@base-ui/react";

const frameworks = [
  {label: "React", value: "react"},
  {label: "Vue", value: "vue"},
  {label: "Angular", value: "angular"},
  {label: "Svelte", value: "svelte"},
];

const BaseUISelect = () => {
  return (
    <div>
      <Select.Root items={frameworks}>
        <Select.Label className={"text-left text-black dark:text-white"}>Frontend Frameworks</Select.Label>
        <Select.Trigger className={"w-50 p-2 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 text-left text-sm rounded-md border border-neutral-200 dark:border-neutral-700 cursor-pointer transition-all duration-200"}>
          <Select.Value placeholder="Select Framework" />
        </Select.Trigger>
        <Select.Portal>
          <Select.Positioner
            alignItemWithTrigger={false}
          >
            <Select.Popup
              className={"w-50 p-1 mt-1.5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-lg rounded-md"}
            >
              {frameworks.map(opt => {
                return (
                  <Select.Item
                    key={opt.value} 
                    value={opt.value}
                    className={"p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-sm cursor-pointer select-none border border-transparent hover:border-neutral-200 dark:hover:border-neutral-600 data-highlighted:bg-neutral-100 data-highlighted:border-neutral-200 dark:data-highlighted:bg-neutral-700 dark:data-highlighted:border-neutral-600"}
                  >
                    <Select.ItemText className={"text-left text-black dark:text-white text-sm"}>{opt.label}</Select.ItemText>
                  </Select.Item>
                )
              })}
            </Select.Popup> 
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>
    </div>
  )
};

export default BaseUISelect;