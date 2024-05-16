import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { UsersThree } from "phosphor-react-native";

type Props = TouchableOpacityProps & {
  title: string;
};

const GREEN_700 = "#00875F";

export function GroupCard({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      className="w-full h-20 bg-GRAY_500 rounded-md flex-row items-center p-6 mb-3"
    >
      <UsersThree size={32} className="mr-5" color={GREEN_700} weight="fill" />
      <Text className="text-base text-GRAY_200 font-REGULAR">{title}</Text>
    </TouchableOpacity>
  );
}
