import { Box, Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";
import { Formik, useFormik } from "formik";
import { Dispatch, SetStateAction, useState } from "react";

type UserInfo = {
  email: string;
  password: string;
  passwordConfirmation: string;
}

function UserInfoStep(props: {userInfo:UserInfo, setUserInfo: Dispatch<SetStateAction<UserInfo>>}) {
  const toast = useToast();

  const formik = useFormik({
    initialValues: {email: props.userInfo.email, password: props.userInfo.password, passwordConfirmation: props.userInfo.passwordConfirmation},
    onSubmit: (values, actions) => {
      props.setUserInfo({email: values.email, password: values.password, passwordConfirmation: values.passwordConfirmation});

      toast({
        title: "保存完了",
        description: "設定が保存されました",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      actions.setSubmitting(false);
    }
  });

  function isSamePassword() {
    const password = props.userInfo.password;
    const passwordConfirmation = props.userInfo.passwordConfirmation;

    if (password === "" || passwordConfirmation === "") return true;

    return password === passwordConfirmation;
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={false} isRequired my={5}>
          <FormLabel>メールアドレス</FormLabel>
          <Input type="email" onChange={formik.handleChange} name="email" value={formik.values.email} />
        </FormControl>

        <FormControl isInvalid={!isSamePassword()} isRequired my={5}>
          <FormLabel>パスワード</FormLabel>
          <Input type="password" onChange={formik.handleChange} name="password" value={formik.values.password} />
        </FormControl>

        <FormControl isInvalid={!isSamePassword()} isRequired my={5}>
          <FormLabel>パスワード(確認)</FormLabel>
          <Input type="password" onChange={formik.handleChange} name="passwordConfirmation" value={formik.values.passwordConfirmation} />
        </FormControl>

        <Box textAlign="center">
          <Button
            mt={4}
            colorScheme='teal'
            isLoading={formik.isSubmitting}
            type='submit'
          >
            設定
          </Button>
        </Box>
      </form>
    </>
  );
}

export default UserInfoStep;
