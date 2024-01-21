import { Component, State } from "@/types";
import { FC } from "react";
import Item, { ItemProps } from "./Item";

interface SidebarChildrenProps extends Pick<ItemProps, "isActive"> {
  id: string;
  title: string;
}

interface SidebarProps<T> {
  active: State["active"];
  components: T[];
  children: (props: SidebarChildrenProps) => JSX.Element;
}

interface SidebarComponent<T> extends FC<SidebarProps<T>> {
  Item: typeof Item;
}

const Sidebar: SidebarComponent<Component<Object>> = ({
  active,
  components,
  children,
}) => {
  return (
    <aside>
      {components.map((component) => {
        const isActive = active === component.id;
        return children({ id: component.id, title: component.title, isActive });
      })}
    </aside>
  );
};

Sidebar.Item = Item;

export default Sidebar;
