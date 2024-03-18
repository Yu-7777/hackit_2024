import { Box, Button, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction } from "react";

function GoalAnnualIncomeStep(props: {goalAnnualIncome: number, setGoalAnnualIncome: Dispatch<SetStateAction<number>>}) {
  const toast = useToast();

  const formik = useFormik({
    initialValues: {goalAnnualIncome: props.goalAnnualIncome},
    onSubmit: (values, actions) => {
      props.setGoalAnnualIncome(values.goalAnnualIncome);

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
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={false} isRequired>
          <FormLabel>目標年収</FormLabel>
          <Input type="number" onChange={formik.handleChange} name="goalAnnualIncome" value={formik.values.goalAnnualIncome} />万円
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

export default GoalAnnualIncomeStep;
