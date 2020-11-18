import FormSignIn from 'components/FormSignIn'
import React from 'react'
import Auth from 'templates/Auth'

export default function SignIn() {
  return (
    <Auth title="Sign in">
      <FormSignIn />
    </Auth>
  )
}
