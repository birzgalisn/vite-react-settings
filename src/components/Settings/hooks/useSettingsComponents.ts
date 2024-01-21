import { Component } from "@/types";
import { useCallback, useEffect, useState } from "react";

const useSettingsComponents = <T>(component: Component<T>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [state, setState] = useState<{
    [componentId: Component<Object>["id"]]: T;
  }>({});

  const updateState = useCallback(
    (newState: T) => {
      setState((prev) => ({
        ...prev,
        [component.id]: { ...prev[component.id], ...newState },
      }));
    },
    [component.id]
  );

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      if (state[component.id]) {
        return;
      } else if (!component.loader) {
        return updateState(component.data);
      }
      updateState(await component.loader());
    })()
      .catch((err: unknown) => {
        updateState(component.data);
        console.error(`Failed to fetch ${component.title} data:`, err);
      })
      .finally(() => setIsLoading(false));
  }, [component.id]);

  return {
    isLoading,
    state: state[component.id],
    updateState,
    fullState: state,
  } as const;
};

export default useSettingsComponents;
