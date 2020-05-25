import { h } from 'preact'

interface Props {
  handleClick: () => void;
  text: string;
}

const BaseButton = (props: Props) => {
return <button onClick={() => props.handleClick()}>{'ボタン'}</button>
}

export default BaseButton
