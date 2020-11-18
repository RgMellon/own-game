import Link from 'next/link'
import React from 'react'

import TextField from 'components/TextField'
import Button from 'components/Button'

import { Email, Lock } from '@styled-icons/material-outlined'

import { FormWrapper, FormLink } from 'components/Form'

import * as S from './styles'

const FormSignIn = () => (
  <FormWrapper>
    <form>
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

      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <FormLink>
        Dont have an account?
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn
