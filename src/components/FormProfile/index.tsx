import * as S from './styles'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import Button from 'components/Button'

export type FormProfileProps = {
  username?: string
  email: string
}

const FormProfile = ({ username, email }: FormProfileProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      My Profile
    </Heading>

    <S.Form>
      <TextField
        name="username"
        label="Username"
        placeholder="Username"
        initialValue={username}
      />

      <TextField
        name="email"
        type="email"
        label="E-mail"
        initialValue={email}
        disabled
        placeholder="E-mail"
      />

      <TextField
        name="password"
        type="password"
        label="Password"
        placeholder="Type your password"
      />

      <TextField
        name="new_password"
        type="password"
        label="New password"
        placeholder="New password"
      />

      <Button size="large"> Save </Button>
    </S.Form>
  </>
)

export default FormProfile
