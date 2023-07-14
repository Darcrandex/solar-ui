/**
 * @name Button
 * @description
 * @author darcrand
 */
import { PropsWithChildren } from "react";
export type ButtonProps = PropsWithChildren<{
    className?: string;
}>;
export default function Button(props: ButtonProps): JSX.Element;
