import { Show } from 'solid-js'
import { isNotDefined, isSvgSrc } from '@typebot.io/lib'
import { BubbleTheme, ButtonTheme } from '../types'
import { isLight } from '@typebot.io/lib/hexToRgb'
import { clsx } from 'clsx'

type Props = Pick<BubbleTheme, 'placement'> &
  ButtonTheme & {
    isBotOpened: boolean
    toggleBot: () => void
  }

const defaultButtonColor = '#0042DA'
const defaultDarkIconColor = '#27272A'
const defaultLightIconColor = '#fff'

const isImageSrc = (src: string) =>
  src.startsWith('http') || src.startsWith('data:image/svg+xml')

export const BubbleButton = (props: Props) => (
  <button
    part="button"
    onClick={() => props.toggleBot()}
    class={clsx(
      'fixed bottom-5 shadow-md  rounded-full hover:scale-110 active:scale-95 transition-transform duration-200 flex justify-center items-center animate-fade-in',
      props.size === 'large' ? ' w-16 h-16' : ' w-12 h-12',
      props.placement === 'left' ? ' left-5' : ' right-5'
    )}
    style={{
      'background-color': props.backgroundColor ?? defaultButtonColor,
      'z-index': 42424242,
      'border-radius': '24px',
      'background-image': 'linear-gradient(to right, #664AE3, #513BB5)',
    }}
  >
    <Show when={isNotDefined(props.customIconSrc)} keyed>
      <svg
        // viewBox="0 0 24 24"
        viewBox="0 0 123 106"
        style={{
          stroke:
            props.iconColor ??
            (isLight(props.backgroundColor ?? defaultButtonColor)
              ? defaultDarkIconColor
              : defaultLightIconColor),
        }}
        class={clsx(
          'stroke-2 fill-transparent absolute duration-200 transition',
          props.isBotOpened ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
          props.size === 'large' ? 'w-9' : 'w-7'
        )}
      >
        <path d="M105.48 0.222656H17.9059C8.34142 0.222656 0.554688 8.00932 0.554688 17.5382V68.1338C0.554688 77.6982 8.34142 85.4493 17.9059 85.4493H23.4526C23.7015 90.1782 22.706 91.9204 21.5326 94.0893C21.1771 94.7293 20.8215 95.4049 20.466 96.116C19.8615 97.396 17.977 101.272 20.466 103.903C21.0348 104.507 22.1371 105.325 23.9149 105.325C24.7682 105.325 25.7993 105.147 27.0082 104.649C36.1816 100.88 43.3639 97.2182 50.6884 85.5204H105.551C115.116 85.5204 122.867 77.7338 122.867 68.2049V17.5382C122.867 7.97377 115.08 0.222656 105.551 0.222656H105.48ZM88.3776 62.0538H35.0083C32.0572 62.0538 29.6749 59.6715 29.6749 56.7204C29.6749 53.7693 32.0572 51.3871 35.0083 51.3871H88.3776C91.3287 51.3871 93.711 53.7693 93.711 56.7204C93.711 59.6715 91.3287 62.0538 88.3776 62.0538ZM88.3776 33.7515H35.0083C32.0572 33.7515 29.6749 31.3693 29.6749 28.4182C29.6749 25.4671 32.0572 23.0849 35.0083 23.0849H88.3776C91.3287 23.0849 93.711 25.4671 93.711 28.4182C93.711 31.3693 91.3287 33.7515 88.3776 33.7515Z" />
        {/* <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /> */}
      </svg>
    </Show>
    <Show when={props.customIconSrc && isImageSrc(props.customIconSrc)}>
      <img
        part="button-icon"
        src={props.customIconSrc}
        class={clsx(
          'duration-200 transition',
          props.isBotOpened ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
          isSvgSrc(props.customIconSrc)
            ? props.size === 'large'
              ? 'w-9 h-9'
              : 'w-7 h-7'
            : 'w-[90%] h-[90%]',
          isSvgSrc(props.customIconSrc) ? '' : 'object-cover rounded-full'
        )}
        alt="Bubble button icon"
      />
    </Show>
    <Show when={props.customIconSrc && !isImageSrc(props.customIconSrc)}>
      <span
        class={clsx(
          'text-4xl duration-200 transition',
          props.isBotOpened ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        )}
        style={{
          'font-family':
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        }}
      >
        {props.customIconSrc}
      </span>
    </Show>
    <Show when={isNotDefined(props.customCloseIconSrc)}>
      <svg
        viewBox="0 0 80 48"
        style={{
          fill:
            props.iconColor ??
            (isLight(props.backgroundColor ?? defaultButtonColor)
              ? defaultDarkIconColor
              : defaultLightIconColor),
        }}
        class={clsx(
          'absolute duration-200 transition',
          props.isBotOpened
            ? 'scale-100 rotate-0 opacity-100'
            : 'scale-0 -rotate-180 opacity-0',
          props.size === 'large' ? ' w-9' : ' w-7'
        )}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M45.0279 45.417C42.2508 48.1941 37.7483 48.1941 34.9713 45.417L2.36121 12.807C-2.11854 8.32722 1.0542 0.667542 7.38952 0.667541L72.6096 0.667535C78.9449 0.667535 82.1177 8.32721 77.6379 12.807L45.0279 45.417Z"
        />
        {/* <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z"
        /> */}
      </svg>
    </Show>
    <Show
      when={props.customCloseIconSrc && isImageSrc(props.customCloseIconSrc)}
    >
      <img
        part="button-icon"
        src={props.customCloseIconSrc}
        class={clsx(
          'absolute duration-200 transition',
          props.isBotOpened
            ? 'scale-100 rotate-0 opacity-100'
            : 'scale-0 -rotate-180 opacity-0',
          isSvgSrc(props.customCloseIconSrc)
            ? props.size === 'large'
              ? 'w-9 h-9'
              : 'w-7 h-7'
            : 'w-[90%] h-[90%]',
          isSvgSrc(props.customCloseIconSrc) ? '' : 'object-cover rounded-full'
        )}
        alt="Bubble button close icon"
      />
    </Show>
    <Show
      when={props.customCloseIconSrc && !isImageSrc(props.customCloseIconSrc)}
    >
      <span
        class={clsx(
          'absolute text-4xl duration-200 transition',
          props.isBotOpened
            ? 'scale-100 rotate-0 opacity-100'
            : 'scale-0 -rotate-180 opacity-0'
        )}
        style={{
          'font-family':
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        }}
      >
        {props.customCloseIconSrc}
      </span>
    </Show>
  </button>
)
