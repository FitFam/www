import { gql, useMutation } from "@apollo/client";
import {
  Container,
  Box,
  Button,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Stack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      authToken
      user {
        id
        username
        email
      }
    }
  }
`;

const LoginPage = () => {
  const [login, { data }] = useMutation(LOGIN_MUTATION);
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    login({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
  };

  return (
    <Container>
      <Heading mb={4}>Log In</Heading>
      <Box>
        <Stack spacing={3}>
          <FormControl id="username">
            <FormLabel>Email</FormLabel>
            <Input name="email" ref={register} />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input name="password" type="password" ref={register} />
          </FormControl>
        </Stack>

        <Button mt={4} onClick={handleSubmit(onSubmit)}>
          Log In
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
