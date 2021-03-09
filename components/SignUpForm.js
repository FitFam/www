import { gql, useMutation } from "@apollo/client";
import {
  Container,
  Box,
  Button,
  Heading,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Stack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const SIGNUP_MUTATION = gql`
  mutation SignUpUser(
    $email: String!
    $password: String!
    $name: String!
    $username: String!
  ) {
    createUser(
      email: $email
      password: $password
      name: $name
      username: $username
    ) {
      authToken
      user {
        id
        name
        username
        email
      }
    }
  }
`;

const SingUpForm = () => {
  const [signUp, { data }] = useMutation(SIGNUP_MUTATION);
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signUp({
      variables: {
        email: data.email,
        password: data.password,
        name: data.name,
        username: data.username,
      },
    });
  };

  if (data) {
    console.log({ data });
    localStorage.setItem("authToken", data.createUser.authToken);
  }

  return (
    <Container>
      <Heading mb={4}>Sign Up</Heading>
      <Box>
        <Stack spacing={3}>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input name="email" ref={register({ required: true })} />
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              ref={register({ required: true })}
            />
          </FormControl>

          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input name="name" ref={register({ required: true })} />
          </FormControl>

          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input name="username" ref={register({ required: true })} />
          </FormControl>
        </Stack>

        <Button mt={4} onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default SingUpForm;
