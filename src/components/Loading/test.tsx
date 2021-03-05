import { screen } from '@testing-library/react'
import { rendertWithTheme } from 'utils/tests/helpers'

import Loading from '.'

describe('<Loading />', () => {
  it('should render the label loading', () => {
    rendertWithTheme(<Loading />)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })
})
