import Link from 'next/link'
import React from 'react'

import TextField from 'components/TextField'
import Button from 'components/Button'

import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

import { FormWrapper, FormLink } from 'components/Form'

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        placeholder="Name"
        name="name"
        type="text"
        icon={<AccountCircle />}
      ></TextField>

      <TextField
        placeholder="E-mail"
        name="email"
        type="email"
        icon={<Email />}
      ></TextField>

      <TextField
        placeholder="Password"
        name="password"
        type="password"
        icon={<Lock />}
      ></TextField>

      <TextField
        placeholder="Confirm Password"
        name="confirm-password"
        type="password"
        icon={<Lock />}
      ></TextField>

      <Button size="large" fullWidth>
        Sign up now
      </Button>

      <FormLink>
        ALready have an account?
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignUp
