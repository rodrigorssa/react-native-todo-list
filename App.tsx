import React from "react";
import { Container } from "./src/components/Container";
import DefaultStatusBar from "./src/components/StatusBar";
import AppTab from "./src/navigation/bottombar/navigation";

const App = () => (
  <>
    <AppTab />
    <DefaultStatusBar></DefaultStatusBar>
  </>
)

export default App