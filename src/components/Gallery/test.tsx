import 'match-media-mock'

import { fireEvent, screen } from '@testing-library/react'

import Gallery from '.'

import { rendertWithTheme } from 'utils/tests/helpers'

import mockItems from './mock'

describe('<Gallery />', () => {
  it('should render the thumbnails as buttons', () => {
    const { container } = rendertWithTheme(
      <Gallery items={mockItems.slice(0, 2)} />
    )

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', mockItems[0].src)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', mockItems[1].src)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should handle open modal', () => {
    rendertWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should handle open modal with selected image', async () => {
    rendertWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    //clico na thumbnail
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    )

    //espero que a img da thumb seja aberta
    const img = await screen.findByRole('img', { name: /Gallery Image 2/i })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })

  it('should handle close modal when overlay or button clicked', () => {
    rendertWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    // clicar para fechar o modal
    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal when pressed esc', () => {
    const { container } = rendertWithTheme(
      <Gallery items={mockItems.slice(0, 2)} />
    )

    const modal = screen.getByLabelText('modal')

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    // apertar ESC para fechar o modal
    fireEvent.keyUp(container, { key: 'Escape' })

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })
})
