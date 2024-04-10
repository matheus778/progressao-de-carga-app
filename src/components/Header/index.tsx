import { useUser } from "@/hooks";
import { Avatar, H3, Text, View, XStack, YStack } from "tamagui";

function Header() {
  const { user } = useUser();

  return (
    <View
      width={'100%'}
      height={80}
      bg={'#0A3D3F'}
      paddingTop={'$4'}
      paddingBottom={'$4'}
      alignItems="center"
    >
      <XStack
        ai={'center'}
        gap={'$4'}
        width={'90%'}
        >
        <Avatar circular size="$4">
          <Avatar.Image src="http://picsum.photos/200/300" />
          <Avatar.Fallback bc="red" />
        </Avatar>

        <YStack gap={0}>
          <Text
            color={'#E5EDCC'}
            fontSize={'$8'}
            fontWeight={'900'}
          >Bem Vindo,</Text>

          <Text
            color={'#E5EDCC'}
            fontSize={'$5'}
          >
            {user?.userName}
          </Text>
        </YStack>
      </XStack>
    </View>
  )
}

export { Header };