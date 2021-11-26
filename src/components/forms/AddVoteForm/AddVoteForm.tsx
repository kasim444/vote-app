import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useVoteContext } from "hooks";
import { AddVoteFormValueTypes } from "interfaces";
import { useForm } from "react-hook-form";

const AddVoteForm = () => {
  const { saveVote } = useVoteContext();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data: AddVoteFormValueTypes) => {
    const preparedVoteItem: AddVoteFormValueTypes = {
      title: data.title,
      link: data.link,
    };
    saveVote(preparedVoteItem);

    // return promise that resolves after 2 seconds for fake loading
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        reset();
        toast({
          title: `${preparedVoteItem.title.toUpperCase()} added.`,
          status: "success",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
        resolve();
      }, 2000);
    });
  };

  return (
    <Box width="full" mt="5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading mb="10">Add New Link</Heading>
        <VStack alignItems="flex-start" spacing="5">
          <FormControl isInvalid={errors.title}>
            <FormLabel htmlFor="title">Link name</FormLabel>
            <Input
              id="title"
              type="text"
              placeholder="Name"
              {...register("title", {
                required: "Please enter link name",
              })}
            />
            <FormErrorMessage>
              {errors.title && errors.title.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.link}>
            <FormLabel htmlFor="link">Link Url</FormLabel>
            <Input
              type="url"
              placeholder="Url"
              {...register("link", {
                required: "Please enter link url",
              })}
            />
            <FormErrorMessage>
              {errors.link && errors.link.message}
            </FormErrorMessage>
          </FormControl>

          <Button
            borderRadius="md"
            type="submit"
            alignSelf="flex-end"
            variant="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            ADD
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default AddVoteForm;
