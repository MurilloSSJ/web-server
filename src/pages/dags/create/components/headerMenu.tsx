import { FlexContainer } from "@/components/containers/flexContainer"
import { HeaderTab } from "../styles"
import { useState } from "react"

interface HeaderTabsProps {
    tabs: {
        name: string,
        active: boolean
    }[]
    onAlterTab: (name: string) => void
}

export const HeaderTabs = ({ tabs, onAlterTab }: HeaderTabsProps) => {
    return (
        <FlexContainer direction="col" alignItems="center" paddingTop={15}>
            <FlexContainer alignItems="center" justifyContent="center" gapX={100} width="100%">
                {tabs.map((tab, index) => {
                    return <HeaderTab key={index} active={tab.active} onClick={() => onAlterTab(tab.name)}>{tab.name}</HeaderTab>
                })}
            </FlexContainer>
            <span style={{ border: '.5px solid white', width: '80%' }}></span>
        </FlexContainer>
    )
}