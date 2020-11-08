import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rendertWithTheme } from 'utils/tests/helpers'

import TextField from '.'

import { Email } from '@styled-icons/material-outlined'

describe('<TextField />', () => {
  it('Renders with Label', () => {
    rendertWithTheme(<TextField label="Label" labelFor="Field" id="Field" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('Renders without Label', () => {
    rendertWithTheme(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Does not changes its value when disabled', async () => {
    const onInput = jest.fn()

    rendertWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })

    expect(onInput).not.toHaveBeenCalled()
  })

  it('Renders with icon', () => {
    rendertWithTheme(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    rendertWithTheme(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Renders icon in the right side', () => {
    rendertWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()
    rendertWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Is accessible by tab', () => {
    rendertWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('is not accessible by tab when disabled', () => {
    rendertWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('Should render with error when passed', () => {
    rendertWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        icon={<Email data-testid="icon" />}
        error="Error ocurred"
      />
    )

    expect(screen.queryByText('Error ocurred')).toBeInTheDocument()
    expect(screen.queryByText('TextField')).toHaveStyle({
      color: '#ff6347'
    })
  })
})
