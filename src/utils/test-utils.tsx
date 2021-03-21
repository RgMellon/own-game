import { render, RenderOptions } from '@testing-library/react'
import {
  CartContextDefaultValues,
  CartContextData,
  CartContext
} from 'hooks/use-cart'
import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

type customRenderProps = {
  cartProviderProps?: CartContextData
} & Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  {
    cartProviderProps = CartContextDefaultValues,
    ...renderOptions
  }: customRenderProps = {}
) =>
  render(
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={cartProviderProps}>
        {ui}
      </CartContext.Provider>
    </ThemeProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
