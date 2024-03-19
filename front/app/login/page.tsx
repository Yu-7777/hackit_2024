"use client";

import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Stack, VStack, useToast } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { FaDoorClosed } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();
  const toast = useToast();

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
            onSubmit={async (values, actions) => {
              const jsonData = {
                email: values.email,
                password: values.password,
              }

              const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/v1/auth/sign_in`, {
                method: "POST",
                mode: "cors",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(jsonData),
              });
              const data = await response.json();

              if (response.ok) {
                const token = data.access_token;

                if (!token) {
                  toast({
                    title: "ログインエラー",
                    description: "ログイン情報が取得できませんでした",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  });
                  return;
                }

                /* ローカルストレージにアクセストークンを設置 */
                localStorage.setItem("access-token", token);

                toast({
                  title: "ログインしました",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });

                router.push("/user");
              } else {
                const errorMessages = data.errors;

                errorMessages.forEach((message: string) => {
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
            }}
          >
           {(props) => (
            <Form>
              <Field name='email' validate={validateEmail}>
                {({field, form}: {field: any, form: any}) => (
                  <FormControl isInvalid={form.errors.email && form.touched.email}>
                    <FormLabel>メールアドレス</FormLabel>
                    <Input {...field} placeholder="メールアドレス" type="email" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name='password' validate={validatePw}>
                {({field, form}: {field: any, form: any}) => (
                  <FormControl isInvalid={form.errors.password && form.touched.password}>
                    <FormLabel>パスワード</FormLabel>
                    <Input {...field} placeholder="パスワード" type="password" />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
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

        <Box textAlign="center">
          <Button
            colorScheme="orange"
            leftIcon={<FaDoorClosed />}
            onClick={() => router.push("/register")}
          >
            新規登録
          </Button>
        </Box>
      </Stack>
    </VStack>
  );
}
