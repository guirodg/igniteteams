import { Image, View } from "react-native";
import logoImg from "@assets/logo.png";

export function Header() {
  return (
    <View className="w-full flex-row items-center justify-center">
      <Image className="w-12 h-14" source={logoImg} />
    </View>
  );
}
