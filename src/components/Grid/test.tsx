// import { render, screen } from '@testing-library/react'

import { rendertWithTheme } from 'utils/tests/helpers'
import { Grid } from '.'

describe('<Grid />', () => {
  it('should render correctly', () => {
    const { container } = rendertWithTheme(<Grid />)
    expect(container.firstChild).toMatchInlineSnapshot(` `)
  })
})
