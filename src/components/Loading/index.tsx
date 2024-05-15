import { ActivityIndicator, View } from "react-native";
import { colors } from "src/themes";

export function Loading() {
  return (
    <View className="flex-1 justify-center items-center bg-GRAY_600">
      <ActivityIndicator color={colors.GRAY_700} />
    </View>
  );
}
