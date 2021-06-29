import React from "react";

import { TabButtonComponent } from "./TabButton.styles";

const TabButton = ({ activeTab, index, changeTab, ...rest }) => {
  return <TabButtonComponent>{rest.label}</TabButtonComponent>;
};

export default TabButton;
