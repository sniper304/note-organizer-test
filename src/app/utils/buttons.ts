import { JSXElementConstructor } from "react";
import { ButtonProps } from "../types";

const importAllButtonComponents = (
  context: __WebpackModuleApi.RequireContext
) => {
  return context
    .keys()
    .reduce((prevValues: JSXElementConstructor<ButtonProps>[], key) => {
      const component = context(key).Button;

      return [...prevValues, component];
    }, []);
};

export const loadButtons = () =>
  importAllButtonComponents(
    require.context("../components/buttons", true, /\.ts$/)
  );
