import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import store from "../store";
import { Provider } from "react-redux";

const AllTheProviders: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
