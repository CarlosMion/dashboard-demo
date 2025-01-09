import React, { ReactNode, useMemo, useState } from "react";
import {
  StyledTab,
  StyledTabList,
  StyledTabsContainer,
  TabHeaderContainer,
} from "./styled";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { useTranslations } from "next-intl";

export interface TabInfo {
  label: string;
  content: ReactNode;
}

interface TabsContainerProps {
  tabs: TabInfo[];
}

export default function TabsContainer({ tabs }: TabsContainerProps) {
  const [value, setValue] = useState<string>(tabs[0].label);

  const t = useTranslations("settingsPage");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const { TabHeaders, TabContents } = useMemo<{
    TabHeaders: ReactNode[];
    TabContents: ReactNode[];
  }>(() => {
    return tabs.reduce(
      (acc, { label, content }) => {
        acc.TabHeaders.push(
          <StyledTab key={`tab-${label}`} label={label} value={label} />
        );
        acc.TabContents.push(
          <TabPanel key={`tab-panel-${label}`} value={label}>
            {content}
          </TabPanel>
        );
        return acc;
      },
      { TabHeaders: [] as ReactNode[], TabContents: [] as ReactNode[] }
    );
  }, [tabs]);

  return (
    <StyledTabsContainer>
      <TabContext value={value}>
        <TabHeaderContainer>
          <StyledTabList onChange={handleChange} aria-label={t("settingTabs")}>
            {TabHeaders}
          </StyledTabList>
        </TabHeaderContainer>
        {TabContents}
      </TabContext>
    </StyledTabsContainer>
  );
}
