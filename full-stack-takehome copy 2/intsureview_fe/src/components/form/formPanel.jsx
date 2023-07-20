import React from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button,
  Typography,
  Tooltip,
} from "@mui/material";
import "./form.css";

export default function FormPanel() {
  //create a state and setter for each ingredient field
  const [pattyType, setPattyType] = React.useState("");
  const [ingredientOne, setIngredientOne] = React.useState("");
  const [ingredientTwo, setIngredientTwo] = React.useState("");
  const [ingredientThree, setIngredientThree] = React.useState("");
  const [ingredientFour, setIngredientFour] = React.useState("");
  const [lettuce, setLettuce] = React.useState("");
  const [tomato, setTomato] = React.useState("");
  const [onion, setOnion] = React.useState("");

  //create a state and setter for upload preference
  const [uploadData, setUploadData] = React.useState("");

  //set the upload data preference
  const handleUploadData = (event) => {
    setUploadData(event.target.value);
    //if the red border around the upload selection is shown, remove it
    let uploadErrorBorder = document.querySelector("#uploadErrorBorder");
    uploadErrorBorder.style.borderColor = "rgba(255, 0, 0, 0)";
  };

  //set the state value for each ingredient when the respective field modified
  const handlePattyChange = (event) => {
    setPattyType(event.target.value);
  };
  const handleIngredientOne = (event) => {
    setIngredientOne(event.target.value);
  };
  const handleIngredientTwo = (event) => {
    setIngredientTwo(event.target.value);
  };
  const handleIngredientThree = (event) => {
    setIngredientThree(event.target.value);
  };
  const handleIngredientFour = (event) => {
    setIngredientFour(event.target.value);
  };
  const handleLettuce = (event) => {
    setLettuce(event.target.value);
  };
  const handleTomato = (event) => {
    setTomato(event.target.value);
  };
  const handleOnion = (event) => {
    setOnion(event.target.value);
  };

  //submits the selection to the database
  const packageAndSubmit = async () => {
    const url = "http://localhost:8000/burger";
    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      //include all ingredients and their database fields in the fetch
      body: JSON.stringify({
        patty: pattyType,
        firstIngredient: ingredientOne,
        secondIngredient: ingredientTwo,
        thirdIngredient: ingredientThree,
        fourthIngredient: ingredientFour,
        lettuce: lettuce,
        tomato: tomato,
        onion: onion,
      }),
    })
      //convert the fetch response to json
      .then((res) => res.json())
      //display the response as an alert
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          //include the error code
          alert("Failed to upload \n" + error);
        }
      );
  };

  //handle when the submit button is clicked
  const handleSubmitButton = () => {
    //if the user has not selected to upload data
    if (uploadData !== ("true" || "false")) {
      console.log("upload data null");
      //add a red border around the upload selection box
      //while materialUI has a built in error style for selection boxes, it did not want to update conditionally.
      //this border is a workaround for that issue
      var uploadErrorBorder = document.querySelector("#uploadErrorBorder");
      uploadErrorBorder.style.borderColor = "red";
      //create an alert to inform the user
      alert(
        "If you would like to upload your burger preference, please agree to upload your selection to our database."
      );
    } else {
      //if the user has agreed to submit their burger, upload it to the database
      packageAndSubmit();
    }
  };

  return (
    <div className="formFields">
      <Typography>
        The Burger Business would like to hear about your perfect burger!
      </Typography>
      <FormControl style={{ width: "200px", marginTop: "20px" }}>
        <InputLabel id="patty-type-label">Patty Type</InputLabel>
        <Select
          labelId="patty-type-label"
          value={pattyType}
          label="Patty Type"
          onChange={handlePattyChange}
        >
          <MenuItem value={"Beef"}>Beef</MenuItem>
          <MenuItem value={"Turkey"}>Turkey</MenuItem>
          <MenuItem value={"Impossible"}>Impossible</MenuItem>
        </Select>
      </FormControl>

      <div className="ingredientGrid" style={{ marginTop: "20px" }}>
        <TextField
          value={ingredientOne}
          label="Ingredient One"
          onChange={handleIngredientOne}
        />
        <TextField
          value={ingredientTwo}
          label="Ingredient Two"
          onChange={handleIngredientTwo}
        />
        <TextField
          value={ingredientThree}
          label="Ingredient Three"
          onChange={handleIngredientThree}
        />
        <TextField
          value={ingredientFour}
          label="Ingredient Four"
          onChange={handleIngredientFour}
        />
      </div>
      <div className="ltoOptions">
        <FormControlLabel
          control={<Checkbox />}
          label="Lettuce"
          value={"Lettuce"}
          onChange={handleLettuce}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Onion"
          value={"Onion"}
          onChange={handleOnion}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Tomato"
          value={"Tomato"}
          onChange={handleTomato}
        />
      </div>
      <Typography style={{ marginTop: "20px" }}>
        Upload your selection?{" "}
        {/* Create an information mouseover to the right of the upload selection label with more information */}
        <Tooltip
          title="Please select whether or not you would like to upload your burger selection to our database. No identifying information will be collected."
          placement="right"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTlEUwzxNURW8YMvkF2TFe9p8SGikY37FIkrHUE79w4A&s"
            style={{ width: "12px" }}
            alt="a small white exclamation point surrounded by a gray circle"
          />
        </Tooltip>
      </Typography>
      <div className="uploadError" id="uploadErrorBorder">
        <FormControl style={{ width: "150px", marginTop: "5px" }}>
          <InputLabel id="upload-consent-label">Please Select</InputLabel>
          <Select
            labelId="upload-consent-label"
            value={uploadData}
            onChange={handleUploadData}
            label="Please Select"
          >
            <MenuItem value={"true"}>Yes</MenuItem>
            <MenuItem value={"false"}>No</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button
        variant="contained"
        onClick={handleSubmitButton}
        style={{ marginTop: "20px", marginBottom: "75px" }}
      >
        Submit
      </Button>
    </div>
  );
}
