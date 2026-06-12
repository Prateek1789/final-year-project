import { Tabs } from "@base-ui/react";

const tabs = [
  { id: "tab-1", title: "Accounts", content: "Check your account details"},
  { id: "tab-2", title: "Password", content: "Update your password and security"},
  { id: "tab-3", title: "Billing", content: "Manage your payment methods"},
];

const BaseUiTabInterface = () => {
  return (
    <Tabs.Root
      className={`flex flex-col gap-2`}
      defaultValue={"Accounts"}
    >
      <Tabs.List 
        className={`w-80 p-0.5 flex items-center justify-between gap-0.75 bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md`}>
        {tabs.map(tab => {
          return (
            <Tabs.Tab
              key={tab.id} 
              value={tab.title}
              className={`h-full w-1/3 px-2 py-1 bg-white dark:bg-neutral-700 border border-gray-200 dark:border-neutral-600 text-black dark:text-white text-sm rounded-sm cursor-pointer aria-selected:bg-blue-600 aria-selected:text-white aria-selected:border-blue-400`}
            >
              {tab.title}
            </Tabs.Tab>
          )
        })}
      </Tabs.List>
      <div className={`w-full h-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md`}>
        {tabs.map(tab => {
          return (
            <Tabs.Panel 
              key={tab.id}
              value={tab.title}
              className={`w-full h-full flex items-center justify-center`}
            >
              <p className={`text-black dark:text-white`}>{tab.content}</p>
            </Tabs.Panel>
          )
        })}
      </div>
    </Tabs.Root>
  )
};

export default BaseUiTabInterface