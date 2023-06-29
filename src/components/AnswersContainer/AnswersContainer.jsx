import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import {
  SAnswersContainer,
  SAnswerDiv,
  SCheckbox,
  SCross,
  SRadioButton,
} from "./AnswersContainer.styled";
import { AnswerInput } from "../Inputs/AnswerInput/AnswerInput";
import dragIconSvg from "/assets/svg/dragIcon.svg";
import XSvg from "/assets/svg/whiteX.svg";

export const AnswersContainer = ({
  answers, 
  setAnswers,
  type,
}) => {
  let optionSelector; // define a variable to display option selector;
  if (type.toLowerCase() === 'checkbox') {
    optionSelector = <SCheckbox type="checkbox" name="answer" />;
  } else if (type.toLowerCase() === 'multiple choice') {
    optionSelector = <SRadioButton type="radio" name="answer" />;
  }

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return; // no destination, do nothing
    }

    const newAnswers = [...answers];
    const [reorderedItem] = newAnswers.splice(result.source.index, 1);
    newAnswers.splice(result.destination.index, 0, reorderedItem);

    setAnswers(newAnswers);
  };

  const handleInputChange = (e, id) => {
    const value = e.target.value;
    const index = answers.findIndex((answer) => answer.id === id);
    const updatedAnswers = [...answers];
    updatedAnswers[index] = { id, content: value };
    setAnswers(updatedAnswers);
  };

  const deleteAnswer = (id) => {
    const newAnswers = [...answers].filter((answer) => answer.id !== id);
    setAnswers(newAnswers);
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
                        width={"47rem"}
                        LeftComponent={<img src={dragIconSvg} alt="" />}
                        OptionSelector={optionSelector}
                        RightComponent={
                          <SCross
                            src={XSvg}
                            alt=""
                            onClick={() => deleteAnswer(item.id)}
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
