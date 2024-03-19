"use client";

import { Box, Button, Heading, Stack, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, VStack, useSteps } from "@chakra-ui/react";
import UserInfoStep from "./steps/userInfoStep";
import { useState } from "react";
import GoalAnnualIncomeStep from "./steps/GoalAnnualIncomeStep";
import CheckValueStep from "./steps/CheckValueStep";
import { FaDoorClosed } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { BiUser } from "react-icons/bi";

export default function RegisterPage() {
  const [userInfo, setUserInfo] = useState({email: "", password: "", passwordConfirmation: ""});
  const [goalAnnualIncome, setGoalAnnualIncome] = useState(100);
  const router = useRouter();

  const steps = [
    {title: "ユーザ情報の登録", component: UserInfoStep({userInfo, setUserInfo})},
    {title: "目標年収の設定", component: GoalAnnualIncomeStep({goalAnnualIncome, setGoalAnnualIncome})},
    {title: "確認", component: CheckValueStep({userData: {email: userInfo.email, password: userInfo.password, passwordConfirmation: userInfo.passwordConfirmation, goalAnnualIncome: goalAnnualIncome}})}
  ]

  const {activeStep, setActiveStep} = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <VStack h="100vh" w="100vw" justify="center">
      <Stack spacing={5} mt={10} align="center">
        <Box>
          <Box textAlign="center">
            <Heading as="h1" size="lg">{steps[activeStep].title}</Heading>
          </Box>
        </Box>

        <Box>
          {steps[activeStep].component}
        </Box>

        <Stepper index={activeStep}>
          {steps.map((step, index) => (
            <Step key={index} onClick={() => setActiveStep(index)} style={{cursor: "pointer"}}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink='0'>
                <StepTitle>{step.title}</StepTitle>
              </Box>
              
              <StepSeparator />
            </Step>
          ))}
        </Stepper>

        <Box textAlign="center">
          <Button
            colorScheme="orange"
            leftIcon={<BiUser/>}
            onClick={() => router.push("/login")}
          >
            ログイン
          </Button>
        </Box>
      </Stack>
    </VStack>
  );
}
