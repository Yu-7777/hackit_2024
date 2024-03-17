"use client";

import Header from "@/app/components/Header";
import SideMenu from "@/app/components/Sidemenu";
import isUserSignIn from "@/app/utils/isUserSignIn";
import { SettingsIcon } from "@chakra-ui/icons";
import { VStack, Stack, Heading, FormControl, FormLabel, FormErrorMessage, Button, Box, useToast, Input, Divider, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, useDisclosure, Icon } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { BsTrash } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";

const Page = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const router = useRouter();
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<HTMLButtonElement>(null);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const getUserInfo = async () => {
    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/users/show`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("access-token")}`,
      },
    }).then((response) => response.json()).then((data) => {
      setEmail(data.email);
    });
  }

  useEffect(() => {
    setIsSideMenuOpen(false);
    isUserSignIn(router, localStorage.getItem("access-token"));
    getUserInfo();
  }, [router]);

  const deleteUser = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/v1/auth`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("access-token")}`,
      },
    });
    
    if (response.ok) {
      localStorage.removeItem("access-token");

      toast({
        title: "ユーザーを削除しました",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      router.push("/register");
    } else {
      const data = await response.json();
      const errorMessages = data.errors;

      errorMessages.forEach((message: string) => {
        toast({
          title: "ユーザー削除エラー",
          description: message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
    }
  }

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
    <>
      <Header isSideMenuOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu} />
      {isSideMenuOpen && <SideMenu />}
      <VStack h="100vh" w="100vw" justify="center">
      <Stack spacing={5} mt={10} align="center">
        <Box textAlign="center">
          <Heading as="h1" size="lg">
            <Box display="flex" alignItems="center">
              設定 <SettingsIcon ml="4" />
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

              const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/v1/auth`, {
                method: "PUT",
                mode: "cors",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${localStorage.getItem("access-token")}`,
                },
                body: JSON.stringify(jsonData),
              });
              const data = await response.json();

              if (response.ok) {
                toast({
                  title: "変更が完了しました。再度ログインしてください。",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });

                router.push("/login");
              } else {
                const errorMessages = data.errors;

                errorMessages.forEach((message: string) => {
                  toast({
                    title: "変更時にエラーが発生しました",
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
                    <Input {...field} placeholder={email} type="email" />
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
                変更
              </Button>
            </Form>
           )} 
          </Formik>
        </Box>
        <Divider orientation='horizontal' />
        <Button colorScheme='red' onClick={onOpen}>
          ユーザーを削除する <Icon as={BsTrash} ml="2" />
        </Button>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                ユーザーを削除する
              </AlertDialogHeader>

              <AlertDialogBody>
                本当に削除しますか？今まで登録したデータは全て削除されます。
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  キャンセル
                </Button>
                <Button colorScheme='red' onClick={() => deleteUser()} ml={3}>
                 削除する
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Stack>
    </VStack>
    </>
  );
};

export default Page;
