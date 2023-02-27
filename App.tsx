import React from "react";
import DefaultStatusBar from "./src/components/StatusBar";
import AppTab from "./src/navigation/bottombar/navigation";

const App = () => (
  <>
    <AppTab />
    <DefaultStatusBar></DefaultStatusBar>
  </>
)

export default App