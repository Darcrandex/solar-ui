/**
 * @name Button
 * @description
 * @author darcrand
 */

import clsx from 'clsx'
import { PropsWithChildren } from 'react'

export type ButtonProps = PropsWithChildren<{ className?: string }>

export default function Button(props: ButtonProps) {
  return (
    <>
      <button className={clsx('p-2 rounded-md cursor-pointer', props.className)}>{props.children}</button>
    </>
  )
}
