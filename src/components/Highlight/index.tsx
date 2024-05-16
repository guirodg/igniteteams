import { Text, View } from "react-native";

type Props = {
  title: string;
  subtitle: string;
};

export function Highlight({ title, subtitle }: Props) {
  return (
    <View className="w-full mt-8 mr-0">
      <Text className="text-center text-2xl font-BOLD text-WHITE">{title}</Text>
      <Text className="text-center text-base font-REGULAR text-GRAY_300">
        {subtitle}
      </Text>
    </View>
  );
}
