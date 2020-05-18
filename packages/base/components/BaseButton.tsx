import { h } from 'preact'

interface Props {
  handleClick: () => void;
  text: string;
}

const BaseButton = (props: Props) => {
return <button onClick={() => props.handleClick()}>{props.text}</button>
}

export default BaseButton
