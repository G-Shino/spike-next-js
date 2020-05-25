import React from "react";
//import firebase from "firebase";
//import "firebase/firestore";
//import { database } from "../components/firebase";
import styled from "@emotion/styled";
import Draggable from "react-draggable";

const Note = () => {
  const [content, setContent] = React.useState("test");
  const changeValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };
  return (
    <Draggable handle=".handle" bounds="parent">
      <NoteS>
        <NoteBarS className="handle">
          <DeleteS>x</DeleteS>
        </NoteBarS>
        <NoteContentContainer>
          <NoteContentS value={content} onChange={changeValue} />
        </NoteContentContainer>
      </NoteS>
    </Draggable>
  );
};

const Comments = () => {
  const [Notes, setNotes] = React.useState(Array);
  const addNote = () => {
    setNotes([...Notes, <Note />]);
  };

  return (
    <WindowS>
      <AddButtonS onClick={addNote}>+</AddButtonS>
      {Notes}
    </WindowS>
  );
};

//styles-------------------------------------------------------
const WindowS = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  display: grid;
  grid-template-columns: 1fr 50px;
  grid-template-rows: 50px 1fr;
`;
const AddButtonS = styled.button`
  grid-row: 1/2;
  grid-column: 2/3;
  text-align: center;
  background-color: #f2f2f2;
  border: 0px;
`;
const NoteS = styled.div`
  background-color: #f2f2f2;
  color: #111111;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20px 1fr;
  width: 20px;
  height: 20px;
  position: absolute;
  margin-left: 0px;
  margin-top: 0px;
`;
const NoteBarS = styled.div`
  background-color: #e2e2e2;
  color: #ffffff;
  grid-row: 1/2;
  display: grid;
  grid-template-columns: 1fr 20px;
`;
const DeleteS = styled.button`
  background-color: #d2d2d2;
  color: #111111;
  grid-column: 2/3;
  width: 20px;
  font-size: 13px;
  text-align: center;
  border: 0px;
`;
const NoteContentS = styled.textarea`
  background-color: #f2f2f2;
  color: #111111;
  border: 0px;
  grid-row: 2/3;
  width: 200px;
  height: 200px;
  margin: 10px;
  font-size: 20px;
`;
const NoteContentContainer = styled.div`
  background-color: #f2f2f2;
  color: #111111;
  border: 1px;
  border-style: solid;
  border-color: #e2e2e2;
`;
export default Comments;
