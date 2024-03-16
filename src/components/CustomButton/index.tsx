import { Button, ButtonProps } from "tamagui";

interface CustomButtonProps extends ButtonProps{
  children?: string;
}

function CustomButton({children,...props }:CustomButtonProps) {
  return (
    <Button
      bg={'#0E5447'}
      color={"#E5EDCC"}
      size={'$5'}
      {...props}
    >
    {children}
    </Button>
  )
}

export { CustomButton };