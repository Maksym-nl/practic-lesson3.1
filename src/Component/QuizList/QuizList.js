import QuizCard from "../QuizCard";
import { List, ListItem } from "./QuizList.styled";

const QuizList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id}>
          <QuizCard quiz={item} onDelete={onDelete} />
        </ListItem>
      ))}
    </List>
  );
};

export default QuizList;
