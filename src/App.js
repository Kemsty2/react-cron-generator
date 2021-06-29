import React, { useEffect, useState } from "react";

import { translate } from "./lib/utils";
import headers from "./lib/utils/headers";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Cron />
    </div>
  );
};

export default App;

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState("0");

  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  const Buttons = React.Children.map(children, (child) => {
    return (
      <TabButton activeTab={activeTab} changeTab={changeTab} {...child.props} />
    );
  });

  return (
    <div className="l-tabs">
      <div className="tabs-buttons">{Buttons}</div>
      <div className="tabs-content">{children[activeTab].props.children}</div>
    </div>
  );
};

const TabButton = ({ changeTab, activeTab, index, ...rest }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    changeTab(rest.id);
  };
  return (
    <button
      className={rest.id === activeTab ? "active" : ""}
      onClick={handleClick}
    >
      {rest.label}
    </button>
  );
};

const Tab = ({ children }) => {
  return <div className="tab">{children}</div>;
};

const Cron = ({
  translateFn = null,
  locale = "en",
  value = "",
  onRef = null,
  onChange = () => {},
}) => {
  const [cronExpression, setCronExpression] = useState([
    "0",
    "0",
    "00",
    "1/1",
    "*",
    "?",
    "*",
  ]);

  useEffect(() => {
    if (translateFn && !locale) {
      console.warn("Warning !!! locale not set while using translateFn");
    }
    if (onRef) {
      onRef(this);
    }
  }, [onRef, locale, translateFn]);

  useEffect(() => {
    setCronExpression(value);
  }, [value]);

  const getComponent = (header) => {
    const CronComponent = header.component;
    return <CronComponent onChange={onChange} translateFn={translate} />;
  };

  return (
    <Tabs>
      {headers.map((header, index) => {
        return (
          <Tab
            label={translate(header.label, translateFn)}
            key={`tab-${index}`}
            id={header.id}
          >
            {getComponent(header)}
          </Tab>
        );
      })}
    </Tabs>
  );
};
