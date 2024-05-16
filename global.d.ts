/// <reference types="nativewind/types" />
declare global {
  interface IconProps {
    className?: string;
    size?: number;
  }
}

declare module "phosphor-react-native" {
  export const CaretLeft: React.FC<IconProps>;
}
