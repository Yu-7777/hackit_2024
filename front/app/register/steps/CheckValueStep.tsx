import { Box, Button, FormControl, FormLabel, Icon, Input, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import { Formik, useFormik } from "formik";
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

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values, actions) => {
      console.log(props.userData);
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
