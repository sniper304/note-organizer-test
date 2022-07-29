import { ReactNode, FC } from "react";

export type BaseComponentProps = FC<{ children: ReactNode | ReactNode[] }>;

export type ButtonProps = {
  label: string;
};

export type Note = {
  title: string;
  date: Date | null;
  content: string;
};
