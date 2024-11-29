import { Component } from "react";
import Modal from "react-modal";
import { Topic, Wrapper, MetaWrapper, Text, Button } from "./QuizCard.styled";
import { TopicModal } from "../ModalTopic/ModalTopic";

Modal.setAppElement("#root");
export class QuizCard extends Component {
  state = {
    isModalOpen: false,
  };

  modalOpen = () => {
    this.setState({
      isModalOpen: true,
    });
  };
  modalClose = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const {
      quiz: { id, topic, level, time, questions },
      onDelete,
    } = this.props;
    return (
      <Wrapper level={level}>
        <Topic onClick={this.modalOpen}>{topic}</Topic>
        <MetaWrapper>
          <Text>
            <b>Level:</b> {level}
          </Text>
          <Text>
            <b>Time:</b> {time}
          </Text>
          <Text>
            <b>Questions:</b> {questions}
          </Text>
        </MetaWrapper>
        <Button onClick={() => onDelete(id)}>Delete</Button>
        {/* {isModalOpen && <h1 onClick={this.modalClose}>MODAL!!!! {topic}</h1>} */}
        <TopicModal
          isOpen={isModalOpen}
          onClose={this.modalClose}
          topic={topic}
        />
        {/* <Modal
          isOpen={isModalOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={this.modalClose}
          style={customStyles}
          contentLabel="Quiz topic Modal"
        >
          <p>
            <b>{topic}</b>
          </p>
          <button onClick={this.modalClose}>close</button>
        </Modal> */}
      </Wrapper>
    );
  }
}

export default QuizCard;
