import { ReactNode, DetailedHTMLProps } from 'react';

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

export interface HProps {
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

export interface NavOptionsProps {
  name: string;
  label: string;
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
