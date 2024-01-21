import { Suspense, useState } from "react";
import Loading from "./components/Loading";
import Settings from "./components/Settings";
import useSettingsComponents from "./components/Settings/hooks/useSettingsComponents";
import { SETTINGS_COMPONENTS, SETTINGS_COMPONENTS_VALUES } from "./constants";

import "./App.css";

function App() {
  const [active, setActive] = useState<string>("account");

  const Main = SETTINGS_COMPONENTS[active];

  const { isLoading, state, updateState, fullState } =
    useSettingsComponents(Main);

  return (
    <main>
      <Settings>
        <Settings.Sidebar
          active={active}
          components={SETTINGS_COMPONENTS_VALUES}
        >
          {({ isActive, id, title }) => (
            <Settings.Sidebar.Item
              key={`settings-sidebar-${id}`}
              isActive={isActive}
              onClick={() => setActive(id)}
            >
              {title}
            </Settings.Sidebar.Item>
          )}
        </Settings.Sidebar>

        <Settings.Main>
          <Suspense fallback={<Loading />}>
            {isLoading ? (
              <Loading>Getting the most recent data...</Loading>
            ) : (
              <Main.Component state={state} updateState={updateState} />
            )}
          </Suspense>
        </Settings.Main>

        <Settings.Footer>
          <button onClick={() => console.log(fullState)}>Submit</button>
        </Settings.Footer>
      </Settings>
    </main>
  );
}

export default App;
