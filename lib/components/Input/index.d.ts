/**
 * @name Input
 * @description
 * @author darcrand
 */
/// <reference types="react" />
export type InputProps = {
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
export default function Input(props: InputProps): JSX.Element;
