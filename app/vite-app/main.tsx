import { h, render } from 'preact'
import { useState } from 'preact/hooks'
// @ts-ignore
import { BaseButton } from '@vite-playground/base'

const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount((currentCount) => currentCount - 1)

  return (
    <div>
      <p>Count: {count}</p>
      <BaseButton text="Increment" handleClick={increment}/>
      <BaseButton text="Decrement" handleClick={decrement}/>
    </div>
  )
}

// @ts-ignore
render(Counter, document.getElementById('app'))
