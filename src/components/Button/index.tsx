/**
 * @name Button
 * @description
 * @author darcrand
 */

import { PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<{ className?: string }>;

export default function Button(props: ButtonProps) {
  return (
    <>
      <button className={props.className}>{props.children}</button>
    </>
  );
}
