import React from "react";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  VStack,
  Box,
  Text,
} from "@chakra-ui/react";

const InputForm = () => {
  const [customerName, setCustomerName] = useState("");

  const isError = customerName === "";

  return (
    <Box display={"flex"} justifyContent="center" marginTop={"36px"}>
      <VStack width={"500px"}>
        <FormControl isInvalid={isError}>
          <FormLabel>
            <Text>
              Tên
              {!isError ? (
                <FormHelperText>
                  Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Tên khách hàng là bắt buộc.</FormErrorMessage>
              )}
            </Text>
          </FormLabel>
          <Input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </FormControl>
      </VStack>
    </Box>
  );
};

export default InputForm;
