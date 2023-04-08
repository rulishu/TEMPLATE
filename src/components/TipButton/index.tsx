import { ButtonType, IconsName, Tooltip } from 'uiw';
import { Btn } from './style'

interface TipButtonProps {
  tip: string,
  type?: ButtonType,
  icon?: IconsName,
  onClick?: () => void
}

export const TipButton = (props: TipButtonProps) => {
  const { tip, type, icon, onClick } = props;
  return (
    <Tooltip placement="top" content={tip}>
      <Btn
        type={type}
        icon={icon}
        size="large"
        onClick={onClick}
      />
    </Tooltip>
  )
}