import React, { Component } from "react";
import { nanoid } from "nanoid";
import { GlobalStyle } from "./Component/Globalstyle";
import { Layout } from "./Component/Layout";
import SearchBar from "./Component/SearchBar";
import QuizForm from "./Component/QuizForm";
import QuizList from "./Component/QuizList";
import initialQuizItems from "./Component/quiz-items.json";

const initialFilters = {
  topic: "",
  level: "all",
};
const storageKey = "quiz-filters";
class App extends Component {
  state = {
    quizItems: initialQuizItems,
    filters: initialFilters,
  };
  componentDidMount() {
    const savedFilters = localStorage.getItem(storageKey);

    if (savedFilters !== null) {
      this.setState({ filters: JSON.parse(savedFilters) });
    }
  }
  componentDidUpdate(prevPops, prevState) {
    if (prevState.filters !== this.state.filters) {
      localStorage.setItem(storageKey, JSON.stringify(this.state.filters));
    }
  }

  updateTopicFilter = (newTopic) => {
    this.setState((prevState) => {
      return {
        filters: {
          ...prevState.filters,
          topic: newTopic,
        },
      };
    });
  };
  updateLevelFilter = (newLevel) => {
    this.setState((prevState) => {
      return {
        filters: {
          ...prevState.filters,
          level: newLevel,
        },
      };
    });
  };
  resetFilters = () => {
    this.setState({
      filters: initialFilters,
    });
  };
  deleteQuiz = (quizId) => {
    console.log("deleteQuiz", quizId);
    this.setState((prevState) => {
      return {
        quizItems: prevState.quizItems.filter((item) => item.id !== quizId),
      };
    });
  };
  addQuiz = (newQuiz) => {
    const quiz = {
      ...newQuiz,
      id: nanoid(),
    };
    this.setState((prevState) => {
      return {
        quizItems: [...prevState.quizItems, quiz],
      };
    });
  };
  render() {
    const { quizItems, filters } = this.state;

    const visibleQuizItems = quizItems.filter((item) => {
      const hasTopic = item.topic
        .toLowerCase()
        .includes(filters.topic.toLowerCase());
      if (filters.level === "all") {
        return hasTopic;
      }
      const machLevels = item.level === filters.level;
      return hasTopic && machLevels;
    });
    return (
      <Layout>
        <QuizForm onAdd={this.addQuiz} />
        <SearchBar
          filters={filters}
          onUpdateTopick={this.updateTopicFilter}
          onUpdateLevel={this.updateLevelFilter}
          onReset={this.resetFilters}
        />
        {/* {quizItems.length > 0 && <QuizList items={quizItems} />} */}
        {visibleQuizItems.length > 0 && (
          <QuizList items={visibleQuizItems} onDelete={this.deleteQuiz} />
        )}
        <GlobalStyle />
      </Layout>
    );
  }
}
export default App;
