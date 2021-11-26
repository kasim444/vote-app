import {
  AlertDialog as ChakraAlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";

interface IAlertDialog {
  id: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onRemove: (id: string) => void;
}

const AlertDialog = ({
  id,
  title,
  isOpen,
  onClose,
  onRemove,
}: IAlertDialog) => {
  const cancelRef = useRef(null);

  const removeVoteAction = () => {
    onRemove(id);
    onClose();
  };

  return (
    <ChakraAlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Remove Link
          </AlertDialogHeader>
          <AlertDialogCloseButton />

          <AlertDialogBody>
            <Text>Do you want to remove:</Text>
            <Text fontSize="xl">{title}</Text>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={onClose}>CANCEL</Button>
            <Button colorScheme="red" onClick={removeVoteAction} ml={3}>
              OK
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </ChakraAlertDialog>
  );
};

export default AlertDialog;
