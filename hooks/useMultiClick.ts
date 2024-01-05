import { useState, useCallback } from 'react'

type State = {
  [key: string]: boolean
}

type IMultiClickButton = {
  title?: string
  value: string
}

const useMultiClick = (initialState: State) => {
  const [state, setState] = useState<State>(initialState)

  const handleClick = useCallback((key: string) => {
    setState((prevState) => {
      const newState = Object.keys(prevState).reduce(
        (acc, curr) => ({ ...acc, [curr]: curr === key }),
        {} as State
      )
      newState[key] = true
      return newState
    })
  }, [])

  return [state, handleClick] as const
}

function createInitialState(data: string[]): { [key: string]: boolean } {
  return data.reduce(
    (acc, value, index) => ({
      ...acc,
      [value]: index === 0, // First item will be true, others false.
    }),
    {}
  )
}

export { useMultiClick, createInitialState }
