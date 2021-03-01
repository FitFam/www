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

const EDIT_PROFILE_MUTATION = gql`
  mutation UpdateUser($username: String!) {
    updateUser(username: $username) {
      id
      username
      email
      avatar
    }
  }
`;

const EditProfilePage = () => {
  const [updateUsername, { data }] = useMutation(EDIT_PROFILE_MUTATION);
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    updateUsername({
      variables: {
        username: data.username,
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
            <Input placeholder="username" ref={register} />
          </FormControl>

          <FormControl>
            <FormLabel>Bio</FormLabel>
            <Textarea />
          </FormControl>
        </Stack>

        <Button mt={4} onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default EditProfilePage;
