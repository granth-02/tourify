import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Planner = (props) => {
  const [mapUrl, setMapUrl] = useState('');

  return (
    <>
      <Grid>
        <Container>
          <h1>Plan Your Amazing Trip !</h1>
          <InputFields setMapUrl={setMapUrl} />
        </Container>
        <Map>
          <iframe
            style={{width: "70vw", height: "65vw", borderRadius: '10px'}}
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src={mapUrl}
          />
        </Map>
      </Grid>
      <Footer />
    </>
  );
};

const InputFields = ({ setMapUrl }) => {
  const [inputs, setInputs] = useState([{ key: 1, value: "" }]);
  const [formData, setFormData] = useState([]);

  const handleInputChange = (index, event) => {
    const values = [...inputs];
    values[index].value = event.target.value;
    setInputs(values);
  };

  const handleAddInput = () => {
    if (inputs.length < 10) {
      const values = [...inputs];
      values.push({ key: values.length + 1, value: "" });
      setInputs(values);
    }
  };

  const handleDeleteInput = (index) => {
    const values = [...inputs];
    values.splice(index, 1);
    setInputs(values);
  };

  const handleSubmit = async () => {
    const formData = inputs.map((input) => input.value).filter((value) => value.trim() !== "");
    setFormData(formData);
  
    const data = {
      places: formData,
      time: Date.now(),
    };
  
    try {
      // Send data to Flask API
      const response = await axios.post("http://127.0.0.1:5000/submit", data);
      const mapURL = response.data.map;
      console.log("Map URL received:", mapURL);
      setMapUrl(mapURL);
      console.log("Data sent successfully:", data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <>
      {inputs.map((input, index) => (
        <InputWrapper key={input.key}>
          <StyledInput
            type="text"
            placeholder={`Input ${input.key}`}
            value={input.value}
            onChange={(event) => handleInputChange(index, event)}
          />
          {inputs.length > 1 && <DeleteButton onClick={() => handleDeleteInput(index)}>❌</DeleteButton>}
        </InputWrapper>
      ))}
      {inputs.length < 10 && <AddButton onClick={handleAddInput}>+</AddButton>}
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </>
  );
};

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  margin-right: 5px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const AddButton = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  border-radius: 5px;
  background-color: #1c6758;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
`;

const DeleteButton = styled.button`
  padding: 4px 8px;
  border-radius: 50%;
  background-color: rgb(214, 205, 164);
  color: white;
  border: none;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  border-radius: 5px;
  background-color: #1c6758;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 2vw;
`;

const Grid = styled.div`
  display: grid;
  gap: 90px;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  height: 100vh;
  justify-content: center;
  padding-top: 100px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 100vw;
`;

const Map = styled.div`
  height: 160vh;
  width: 100%;
  padding-top: 55px;
  margin-left: 0px;
  margin-right: 50px;
  background-color: rgb(61, 131, 97);
  border-radius: 10px;
  img {
    position: relative;
    width: 90vw;
    border-radius: 10px;
    margin-top: -15px;
  }
`;

const Container = styled.div`
  padding-top: 50px;
  width: 100%;
  border-radius: 10px;
  height: auto;
  background-color: rgb(214, 205, 164);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: "Quicksand", sans-serif;
  }
`;

const Footer = styled.footer`
  background-color: #eef2e6;
  color: white;
  padding: 20px;
  border-radius: 20px 20px 0 0;
  text-align: center;
`;

export default Planner;
