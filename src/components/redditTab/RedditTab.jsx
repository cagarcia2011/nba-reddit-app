import { Tabs } from "flowbite-react"

export function RedditTab({ onToggle, currentActive }) {
    const tabsMap = {
        0: "hot",
        1: "new"
    }

    return (
        <>
            <Tabs.Group style='default' onActiveTabChange={(activeTab) => onToggle(tabsMap[activeTab])}>
                <Tabs.Item title="Hot" active={currentActive === "hot"}>Hot</Tabs.Item>
                <Tabs.Item title="New" active={currentActive === "new"}>New</Tabs.Item>
            </Tabs.Group>
        </>

    )
}