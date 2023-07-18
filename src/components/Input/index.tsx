/**
 * @name Input
 * @description
 * @author darcrand
 */

import clsx from 'clsx'

export type InputProps = {
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export default function Input(props: InputProps) {
  return (
    <>
      <input
        className={clsx('p-2 rounded-lg border outline-none focus:border-blue-500 transition-all')}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  )
}
