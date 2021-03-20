import React, { useContext } from "react";
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
import withAuth from "../lib/withAuth";

const EDIT_PROFILE_MUTATION = gql`
  mutation UpdateUser($username: String, $bio: String, $instagram: String) {
    updateUser(username: $username, bio: $bio, instagram: $instagram) {
      id
      username
      email
      avatar
      bio
      instagram
    }
  }
`;

const EditProfile = ({ loggedInUser }) => {
  const [updateUsername, { data }] = useMutation(EDIT_PROFILE_MUTATION);
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      username: loggedInUser.username,
      instagram: loggedInUser.instagram,
      bio: loggedInUser.bio,
    },
  });

  const onSubmit = (data) => {
    updateUsername({
      variables: {
        username: data.username,
        instagram: data.instagram,
        bio: data.bio,
      },
    });
  };

  return (
    <Container>
      <Heading mb={4}>Edit Profile</Heading>
      <Box>
        <Stack spacing={3}>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input name="username" ref={register} />
          </FormControl>

          <FormControl>
            <FormLabel>Instagram</FormLabel>
            <Input name="instagram" ref={register} />
          </FormControl>

          <FormControl>
            <FormLabel>Bio</FormLabel>
            <Textarea name="bio" ref={register} />
          </FormControl>
        </Stack>

        <Button mt={4} onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default withAuth(EditProfile);
