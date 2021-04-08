import { ReactNode, DetailedHTMLProps } from 'react';
import { FileInfo } from './context';

export interface LayoutProps {
  children: ReactNode;
}

export interface TextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  type: 'desc' | 'main';
  size?: string;
  margin?: string;
}

export interface SmallButtonProps {
  children: ReactNode;
  color: string;
  margin: string;
}

export interface HProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  size?: string;
  uppercase?: boolean;
}

export interface FormGroupProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  label?: string;
  htmlFor?: string;
}

export interface NavOptionsProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  name: string;
  label: string;
}

export interface SelectProps
  extends DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  children: ReactNode;
  minWidth: string;
  width?: string;
}

export interface PopupFormProps {
  data: string;
  show: boolean;
  setShow: (state: boolean) => void;
  setData: (data: string) => void;
}

export interface FileLiProps {
  data: FileInfo;
}

export interface ButtonSubmitProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

export interface InputProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export interface SvgProps
  extends DetailedHTMLProps<
    React.ObjectHTMLAttributes<HTMLObjectElement>,
    HTMLObjectElement
  > {
  path: string;
}
