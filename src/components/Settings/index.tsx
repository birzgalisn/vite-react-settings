import { FC, PropsWithChildren } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

interface SettingsProps extends PropsWithChildren {}

interface SettingsComponent extends FC<SettingsProps> {
  Main: typeof Main;
  Sidebar: typeof Sidebar;
  Footer: typeof Footer;
}

const Settings: SettingsComponent = ({ children }) => {
  return <section>{children}</section>;
};

Settings.Main = Main;
Settings.Sidebar = Sidebar;
Settings.Footer = Footer;

export default Settings;
