import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { View } from "react-native";

export function Groups() {
  return (
    <View className="flex-1 bg-GRAY_600 p-6">
      <Header showBackButton />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <GroupCard title="Galera do Ignite" />
    </View>
  );
}
