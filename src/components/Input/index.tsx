/**
 * @name Input
 * @description
 * @author darcrand
 */

export type InputProps = {
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export default function Input(props: InputProps) {
  return (
    <>
      <input value={props.value} onChange={props.onChange} />
    </>
  )
}
