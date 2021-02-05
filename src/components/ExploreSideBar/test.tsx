import { screen } from '@testing-library/react'
import { rendertWithTheme } from 'utils/tests/helpers'
import mock from './mock'
import ExploreSideBar from '.'
import userEvent from '@testing-library/user-event'
// import { Overlay } from './styles'
// import { css } from 'styled-components'

describe('<ExploreSideBar />', () => {
  it('should render the heading', () => {
    rendertWithTheme(<ExploreSideBar items={mock} onFilter={jest.fn} />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the inputs', () => {
    rendertWithTheme(<ExploreSideBar items={mock} onFilter={jest.fn} />)

    expect(
      screen.getByRole('checkbox', { name: /Under \$50/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('radio', { name: /Low to high/i })
    ).toBeInTheDocument()
  })

  it('should render a filter button', () => {
    rendertWithTheme(<ExploreSideBar items={mock} onFilter={jest.fn} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should check initials value that are passed', () => {
    rendertWithTheme(
      <ExploreSideBar
        onFilter={jest.fn}
        items={mock}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()

    expect(screen.getByRole('radio', { name: /Low to high/i })).toBeChecked()
  })

  it('should return selected items in onFilter', () => {
    const onFilter = jest.fn()

    rendertWithTheme(
      <ExploreSideBar
        items={mock}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />
    )

    //clica no btn
    userEvent.click(screen.getByRole('button', { name: /Filter/i }))

    expect(onFilter).toBeCalledWith({ windows: true, sort_by: 'low-to-high' })
  })

  it('should filter with checked values', () => {
    const onFilter = jest.fn()

    rendertWithTheme(<ExploreSideBar items={mock} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/windows/i))
    userEvent.click(screen.getByLabelText(/low to high/i))

    userEvent.click(screen.getByRole('button', { name: /Filter/i }))

    expect(onFilter).toBeCalledWith({ windows: true, sort_by: 'low-to-high' })
  })

  it('should altern between radio options', () => {
    const onFilter = jest.fn()

    rendertWithTheme(<ExploreSideBar items={mock} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/low to high/i))
    userEvent.click(screen.getByLabelText(/high to low/i))

    userEvent.click(screen.getByRole('button', { name: /Filter/i }))

    expect(onFilter).toBeCalledWith({ sort_by: 'high-to-low' })
  })

  // it('should open/close sidebar when filtering on mobile ', () => {
  //   const { container } = rendertWithTheme(
  //     <ExploreSideBar items={mock} onFilter={jest.fn} />
  //   )

  //   const variant = {
  //     media: '(max-width:768px)',
  //     modifier: String(css`
  //       ${Overlay}
  //     `)
  //   }

  //   const Element = container.firstChild

  //   expect(Element).not.toHaveStyleRule('opacity', '1', variant)

  //   userEvent.click(screen.getByLabelText(/open filters/))

  //   expect(Element).toHaveStyleRule('opacity', '1', variant)

  //   userEvent.click(screen.getByLabelText(/close filters/))

  //   expect(Element).not.toHaveStyleRule('opacity', '1', variant)
  // })
})
