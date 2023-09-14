import { isMobile } from '@/utils/isMobileSignal'
import { splitProps } from 'solid-js'
import { JSX } from 'solid-js/jsx-runtime'
import { ConfirmIcon } from './icons'
import { Button } from './Button'
import { isEmpty } from '@typebot.io/lib'

type SendButtonProps = {
  isDisabled?: boolean
  isLoading?: boolean
  disableIcon?: boolean
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>

export const SendButton = (props: SendButtonProps) => {
  const [local, others] = splitProps(props, ['disableIcon'])
  return (
    <Button type="submit" {...others}>
      {(isMobile() && !local.disableIcon) ||
      (typeof props.children === 'string' && isEmpty(props.children)) ? (
        <ConfirmIcon
          class={'send-icon flex ' + (local.disableIcon ? 'hidden' : '')}
          fill="none"
        />
      ) : (
        props.children
      )}
    </Button>
  )
}
