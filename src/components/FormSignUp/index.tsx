import Link from 'next/link'
import React, { useState } from 'react'

import TextField from 'components/TextField'
import Button from 'components/Button'

import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

import { FormWrapper, FormLink } from 'components/Form'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { useMutation } from '@apollo/client'
import { MUTATION_REGISTER } from 'graphql/mutations/register'

const FormSignUp = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    email: '',
    password: '',
    username: ''
  })

  const [createUser] = useMutation(MUTATION_REGISTER)

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          placeholder="Name"
          name="userName"
          type="text"
          onInputChange={(v) => handleInput('userName', v)}
          icon={<AccountCircle />}
        ></TextField>

        <TextField
          placeholder="E-mail"
          name="email"
          type="email"
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        ></TextField>

        <TextField
          placeholder="Password"
          name="password"
          type="password"
          icon={<Lock />}
          onInputChange={(v) => handleInput('password', v)}
        ></TextField>

        <TextField
          placeholder="Confirm Password"
          name="confirm-password"
          type="password"
          onInputChange={(v) => handleInput('confirm-password', v)}
          icon={<Lock />}
        ></TextField>

        <Button size="large" type="submit" fullWidth>
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
}

export default FormSignUp
