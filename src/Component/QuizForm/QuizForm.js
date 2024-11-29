import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Fild, StyledGroup, ErrorMessage } from "./QuizForm.styled";

const QuizShema = Yup.object().shape({
  topic: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  time: Yup.number().min(10, "Минимум 10 минут и более").required("Required"),
  questions: Yup.number()
    .positive()
    .min(3, "Минимум 3 вопроса")
    .required("Required"),
});
const QuizForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        topic: "",
        level: "beginner",
        time: 0,
        questions: 0,
      }}
      validationSchema={QuizShema}
      onSubmit={(values, actions) => {
        onAdd(values);
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form>
        <StyledGroup>
          Topic
          <Fild name="topic" />
          <ErrorMessage name="topic" component="span" />
        </StyledGroup>

        <StyledGroup>
          Time
          <Fild name="time" type="number" />
          <ErrorMessage name="time" component="span" />
        </StyledGroup>

        <StyledGroup>
          Questions
          <Fild name="questions" type="number" />
          <ErrorMessage name="questions" component="span" />
        </StyledGroup>
        <StyledGroup>
          Select{" "}
          <Fild as="select" name="level">
            <option value="all">All</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </Fild>
        </StyledGroup>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default QuizForm;
