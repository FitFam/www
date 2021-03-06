import React, { useEffect, useContext } from "react";
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
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Router from "next/router";
import UserContext from "../lib/userContext";

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
  const { user, refetch } = useContext(UserContext);

  useEffect(async () => {
    if (data?.createUser) {
      localStorage.setItem("authToken", data.createUser.authToken);
      const { data: refetchData } = await refetch();

      Router.push("/profile/edit");
    }
  }, [data]);

  const onSubmit = (data) => {
    signUp({
      variables: {
        email: data.email,
        password: data.password,
        name: data.name,
        username: data.username,
      },
    });
  };

  return (
    <Container>
      <Heading mb={4}>Sign Up</Heading>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                autoComplete="email"
                ref={register({ required: true })}
              />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                autoComplete="new-password"
                ref={register({ required: true })}
              />
            </FormControl>

            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                autoComplete="name"
                ref={register({ required: true })}
              />
            </FormControl>

            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children="@"
                />
                <Input
                  name="username"
                  autoComplete="username"
                  ref={register({ required: true })}
                />
              </InputGroup>
            </FormControl>
          </Stack>

          <Button
            type="submit"
            mt={4}
            size="lg"
            width="100%"
            backgroundColor="#0D6CFF"
            color="#fff"
            _hover={{
              background: "#0D6CFF",
              opacity: "0.9",
            }}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SingUpForm;
