import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import {
  SAnswersContainer,
  SAnswerDiv,
  SCheckbox,
  SCross,
  SRadioButton,
} from "./DraggableAnswersContainer.styled";
import { AnswerInput } from "../Inputs/AnswerInput/AnswerInput";
import dragIconSvg from "/assets/svg/dragIcon.svg";
import XSvg from "/assets/svg/whiteX.svg";

export const DraggableAnswersContainer = ({
  answers, 
  deleteAnswer,
  type,
  changeAnswersArray,
  formIndex,
  handleMarkAnswer
}) => {
  //  define a variable to display option selector;
  const optionSelector = (answerIndex) => {
    if (type.toLowerCase() === "checkbox") {
      return (
        <SCheckbox
          type="checkbox"
          name="answer"
          onClick={() => {
            handleMarkAnswer(formIndex, answerIndex);
          }}
        />
      );
    } else if (type.toLowerCase() === "multiple choice") {
      return (
        <SRadioButton
          type="radio"
          name="answer"
          onClick={() => {
            handleMarkAnswer(formIndex, answerIndex);
          }}
        />
      );
    }
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return; // no destination, do nothing
    }

    const newAnswers = [...answers];
    const [reorderedItem] = newAnswers.splice(result.source.index, 1);
    newAnswers.splice(result.destination.index, 0, reorderedItem);

    changeAnswersArray(formIndex, newAnswers);
  };

  const handleInputChange = (e, id) => {
    const value = e.target.value;
    const index = answers.findIndex((answer) => answer.id === id);
    const updatedAnswers = [...answers];
    updatedAnswers[index] = {
      id,
      content: value,
      isCorrect: false,
      type,
    };

    changeAnswersArray(formIndex, updatedAnswers);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <SAnswersContainer>
        <Droppable droppableId="answers">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {answers.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <SAnswerDiv
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <AnswerInput
                        type="text"
                        width={"44.5rem"}
                        LeftComponent={<img src={dragIconSvg} alt="" />}
                        OptionSelector={optionSelector(index)}
                        RightComponent={
                          <SCross
                            src={XSvg}
                            alt=""
                            onClick={() => deleteAnswer(formIndex, item.id)}
                          />
                        }
                        onChange={(e) => handleInputChange(e, item.id)}
                      />
                    </SAnswerDiv>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </SAnswersContainer>
    </DragDropContext>
  );
};
