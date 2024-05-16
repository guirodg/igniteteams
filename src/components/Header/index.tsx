import { Image, TouchableOpacity, View } from "react-native";
import { CaretLeft } from "phosphor-react-native";

import logoImg from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <View className="w-full flex-row items-center justify-center">
      {showBackButton && (
        <TouchableOpacity className="flex-1">
          <CaretLeft className="text-WHITE" size={32} />
        </TouchableOpacity>
      )}
      <Image className="w-12 h-14" source={logoImg} />
    </View>
  );
}
