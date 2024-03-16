import { Link } from "expo-router";
import { Text, View } from "tamagui";

export default function Atividade() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Link href={'/settings'} asChild>
        <Text>Atividade</Text>
      </Link>
    </View>
  )
}