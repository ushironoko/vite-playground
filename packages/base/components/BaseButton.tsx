import { h } from 'preact'

interface Props {
  handleClick: () => void
  text: string
}

export default (props: Props) => {
return <button onClick={() => props.handleClick()}>{props.text}</button>
}
