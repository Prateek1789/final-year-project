import { Select } from "@base-ui/react";

const BaseUISelect = () => {
  const frameworks = [
    {label: "React", value: "react"},
    {label: "Vue", value: "vue"},
    {label: "Angular", value: "angular"},
    {label: "Svelte", value: "svelte"},
  ];

  return (
    <div>
      <Select.Root items={frameworks}>
        <Select.Label className={"text-left text-black"}>Frontend Frameworks</Select.Label>
        <Select.Trigger className={"w-50 bg-white text-neutral-600 text-left text-sm hover:text-neutral-900 hover:border-blue-300 p-2 rounded-md border border-neutral-200 cursor-pointer transition-all duration-200"}>
          <Select.Value placeholder="Select Framework" />
        </Select.Trigger>
        <Select.Portal>
          <Select.Positioner
            alignItemWithTrigger={false}
          >
            <Select.Popup
              className={"w-50 p-1 mt-1.5 bg-white border border-neutral-200 shadow-lg rounded-md"}
            >
              {frameworks.map(opt => {
                return (
                  <Select.Item
                    key={opt.value} 
                    value={opt.value}
                    className={"p-2 rounded-md cursor-pointer select-none border border-transparent hover:bg-neutral-100 hover:border-neutral-200 data-highlighted:bg-neutral-100"}
                  >
                    <Select.ItemText className={"text-left"}>{opt.label}</Select.ItemText>
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