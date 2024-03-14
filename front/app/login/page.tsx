"use client";

import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Stack, VStack } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { BiUser } from "react-icons/bi";
import { FaDoorClosed } from "react-icons/fa";

export default function LoginPage() {
  function validateEmail(value: string) {
    let error;

    if (!value) 
      error = "メールアドレスを入力してください";
    else if (!value.includes("@"))
      error = "メールアドレスが正しくありません";

    return error;
  }

  function validatePw(value: string) {
    let error;

    if (!value) error = "パスワードを入力してください";

    return error;
  }

  return (
    <VStack h="100vh" w="100vw" justify="center">
      <Stack spacing={5} mt={10} align="center">
        <Box textAlign="center">
          <Heading as="h1" size="lg">
            <Box display="flex" alignItems="center">
              ログイン <BiUser/>
            </Box>
          </Heading>
        </Box>
        <Box textAlign="center" w="100%">
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, actions) => {
              // ここでfetch APIを叩いてログイン処理を行う
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                actions.setSubmitting(false)
              }, 1000)
            }}
          >
           {(props) => (
            <Form>
              <Field name='email' validate={validateEmail}>
                {({field, form}: {field: any, form: any}) => (
                  <FormControl isInvalid={form.errors.email && form.touched.email}>
                    <FormLabel>メールアドレス</FormLabel>
                    <Input {...field} placeholder="メールアドレス" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name='pw' validate={validatePw}>
                {({field, form}: {field: any, form: any}) => (
                  <FormControl isInvalid={form.errors.pw && form.touched.pw}>
                    <FormLabel>パスワード</FormLabel>
                    <Input {...field} placeholder="パスワード" />
                    <FormErrorMessage>{form.errors.pw}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Button
                mt={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                ログイン
              </Button>
            </Form>
           )} 
          </Formik>
        </Box>
      </Stack>
    </VStack>
  );
}
