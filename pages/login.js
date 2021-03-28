import React, { useEffect, useContext } from "react";
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
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Router from "next/router";
import UserContext, { GET_LOGGED_IN_USER_QUERY } from "../lib/userContext";

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
  const [login, { data, error: mutationError }] = useMutation(LOGIN_MUTATION, {
    onError: () => null,
  });
  const { register, handleSubmit, watch, errors } = useForm();
  const { refetch } = useContext(UserContext);

  useEffect(async () => {
    if (data?.login) {
      localStorage.setItem("authToken", data.login.authToken);
      const { data: refetchData } = await refetch();

      Router.push("/profile/edit");
    }
  }, [data]);

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
          {mutationError && (
            <Text color="red.300" fontWeight="bold">
              {mutationError.message}
            </Text>
          )}

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
