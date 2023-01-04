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
  HStack,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "../../axios/axios";

const CustomerForm = () => {
  const toast = useToast();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        "/open-apis/bitable/v1/apps/baslgxo3p0K3WWB43Qr5nwIgxzc/tables/tblba5tDqZNpnB3K/records",
        {
          fields: {
            name,
            phone,
            email,
          },
        },
        {
          headers: {
            Authorization: `Bearer u-34VZml.ytbGpFL6yNXAboT51gRGXkh.FWw0wk4402J4L`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      toast({
        title: "Thành công.",
        description: "Thêm khách hàng thành công",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Lỗi.",
        description: "Thêm khách hàng thất bại.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <Box display={"flex"} justifyContent="center" marginTop={"36px"}>
      <VStack width={"500px"}>
        <Input
          type={"text"}
          autoComplete="off"
          placeholder="Nhập tên khách hàng"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type={"text"}
          autoComplete="off"
          placeholder="Nhập số điện thoại khách hàng"
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          type={"text"}
          autoComplete="off"
          placeholder="Nhập email khách hàng"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={() => handleSubmit()}>Submit Nè</Button>
      </VStack>
    </Box>
  );
};

export default CustomerForm;
