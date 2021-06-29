import React, { useState } from "react";

import TabButton from "../TabButton/TabButton.ui";
import { TabsContainer, TabsHeader, TabsContent } from "./Tabs.styles";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  const Buttons = React.Children.map(children, (child, index) => {
    return (
      <TabButton
        activeTab={activeTab}
        index={index}
        changeTab={changeTab}
        {...child.props}
      />
    );
  });

  return (
    <TabsContainer>
      <TabsHeader>{Buttons}</TabsHeader>
      <TabsContent>{children[activeTab].children}</TabsContent>
    </TabsContainer>
  );
};

export default Tabs;
