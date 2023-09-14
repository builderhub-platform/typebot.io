import { JSX } from 'solid-js/jsx-runtime'

export const ConfirmIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width={3}
      d="M19 6 9.333 18.5 4 12.184"
    />
  </svg>
)
