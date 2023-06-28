import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { SAnswersContainer, SAnswerDiv } from "./AnswersContainer.styled";
import { AnswerInput } from "../Inputs/AnswerInput/AnswerInput";
import dragIconSvg from "/assets/svg/dragIcon.svg";
import XSvg from "/assets/svg/whiteX.svg";

export const AnswersContainer = () => {
  const [answers, setAnswers] = useState([
    { id: "1", content: "Answer 1"},
    { id: "2", content: "Answer 2" },
    { id: "3", content: "Answer 3" },
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return; // no destination, do nothing
    }

    const newAnswers = [...answers];
    const [reorderedItem] = newAnswers.splice(result.source.index, 1);
    newAnswers.splice(result.destination.index, 0, reorderedItem);

    setAnswers(newAnswers);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <SAnswersContainer>
        <Droppable droppableId="answers">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {answers.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={index}
                >
                  {(provided) => (
                    <SAnswerDiv
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <AnswerInput
                        type="text"
                        placeholder={item.content}
                        width={"47rem"}
                        LeftComponent={
                          <img src={dragIconSvg} alt=""/>
                        } // test
                        OptionSelector={<input type="checkbox" />} // test
                        RightComponent={<img src={XSvg} alt="" />} //test
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
