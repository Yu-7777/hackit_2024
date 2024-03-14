import { Box, Button, FormControl, FormLabel, Icon, Input, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import { Formik, useFormik } from "formik";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { BiPaperPlane } from "react-icons/bi";

type InputData = {
  email: string;
  password: string;
  passwordConfirmation: string;
  goalAnnualIncome: number;
}

function CheckValueStep(props: {userData:InputData}) {
  const toast = useToast();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {},
    onSubmit: async (values, actions) => {
      const sendData = {
        email: props.userData.email,
        password: props.userData.password,
        goalAnnualIncome: props.userData.goalAnnualIncome
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/v1/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendData)
      });

      const data = await response.json();

      const redirectUrl = "/login";

      if (data.errors === undefined) {
        toast({
          title: "登録完了",
          description: "登録が完了しました",
          status: "success",
          duration: 9000,
          isClosable: true,
        })

        router.push(redirectUrl);
      } else {
        data.errors.full_messages.forEach((message: string) => {
          toast({
            title: "ログインエラー",
            description: message,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        });
      }

      actions.setSubmitting(false);
    }
  });

  return (
    <>
      <Text fontSize="2xl" textAlign="center">以下の内容で登録します</Text>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>情報が反映されてない場合、各ステップの「確定」ボタンを押してください。</TableCaption>
          <Thead>
            <Tr>
              <Th>メールアドレス</Th>
              <Th>パスワード</Th>
              <Th isNumeric>目標年収</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{props.userData.email}</Td>
              <Td>{props.userData.password}</Td>
              <Td isNumeric>{props.userData.goalAnnualIncome}万円</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <form onSubmit={formik.handleSubmit}>
        <Box textAlign="center">
          <Button
            mt={4}
            colorScheme='teal'
            isLoading={formik.isSubmitting}
            type='submit'
          >
            この内容で送信する<Icon as={BiPaperPlane} ml={2} />
          </Button>
        </Box>
      </form>
    </>
  );
}

export default CheckValueStep;
