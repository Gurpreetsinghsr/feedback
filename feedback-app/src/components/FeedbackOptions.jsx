import React, { Component } from "react";

class FeedbackOptions extends Component {
  state = {
    isFeedbackOn: true,
    Theme: "Theme1",
    QNA: [],
    AddQuestion: {
      Question: "",
      Answer: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    },
  };
  handleChangeidFeedback = () => {
    var isFeedbackOn = this.state.isFeedbackOn;
    console.log(this.state.isFeedbackOn);
    if (isFeedbackOn) {
      isFeedbackOn = false;
      this.setState({ isFeedbackOn });
    } else {
      isFeedbackOn = true;
      this.setState({ isFeedbackOn });
    }
  };

  handleCheckboxChange = (event) => {
    this.setState({ isFeedbackOn: event.target.checked });
  };
  handleChangeTheme = (event) => {
    const Theme = event.target.value;
    this.setState({ Theme });
  };
  handleAdd = () => {
    const QNA = [...this.state.QNA];
    QNA.push(this.state.AddQuestion);
    this.setState({ QNA });
    var AddQuestion = {
      Question: "",
      Answer: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    };
    this.setState({ AddQuestion });
  };
  handleInputChange = (e) => {
    const AddQuestion = { ...this.state.AddQuestion };
    AddQuestion[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ AddQuestion });
  };
  handleSubmit = () => {
    const post = {
      isFeedbackOn: this.state.isFeedbackOn,
      Theme: this.state.Theme,
      QNA: this.state.QNA,
    };
    console.log(post, "post");
  };
  handleRendering = () => {
    if (this.state.isFeedbackOn) {
      return (
        <div>
          <p>
            <h1>Choose one Theme for your feedback form</h1>
          </p>
          <label>
            <input
              type="radio"
              value="Theme1"
              checked={this.state.Theme === "Theme1"}
              onChange={this.handleChangeTheme}
            />
            <img src="https://via.placeholder.com/150" className="mx-4 p-4" />
          </label>

          <label>
            <input
              type="radio"
              value="Theme2"
              checked={this.state.Theme === "Theme2"}
              onChange={this.handleChangeTheme}
            />
            <img src="https://via.placeholder.com/150" className="mx-4 p-4" />
          </label>
          <div>
            {this.state.QNA.length === 0 ? (
              <div>
                <h5>There are 0 questions</h5>
              </div>
            ) : (
              <ol>
                {this.state.QNA.map((x) => (
                  <li>
                    <p>Ques:- {x.Question}</p>
                    <p>
                      1:- {x.option1} 2:- {x.option2} 3:- {x.option3} 4:-{" "}
                      {x.option4}
                    </p>
                    <p>Ans:- {x.Answer}</p>
                  </li>
                ))}
              </ol>
            )}
            <div>
              <textarea
                type="text"
                className="col-6"
                value={this.state.AddQuestion.Question}
                placeholder="Question"
                name="Question"
                onChange={this.handleInputChange}
              />
              <br></br>
              <input
                type="text"
                value={this.state.AddQuestion.Answer}
                placeholder="Answer"
                name="Answer"
                onChange={this.handleInputChange}
              />
              <br />
              <input
                type="text"
                value={this.state.AddQuestion.option1}
                placeholder="option1"
                name="option1"
                onChange={this.handleInputChange}
              />
              <input
                type="text"
                value={this.state.AddQuestion.option2}
                placeholder="option2"
                name="option2"
                onChange={this.handleInputChange}
              />
              <input
                type="text"
                value={this.state.AddQuestion.option3}
                placeholder="option3"
                name="option3"
                onChange={this.handleInputChange}
              />
              <input
                type="text"
                value={this.state.AddQuestion.option4}
                placeholder="option4"
                name="option4"
                onChange={this.handleInputChange}
              />
              <button className="btn btn-primary" onClick={this.handleAdd}>
                Add
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <p>
          <h1>You have unabled the Feedback form</h1>
        </p>
      );
    }
  };
  render() {
    return (
      <div className="col-12 container">
        <h1> Feedback</h1>
        <button
          onClick={this.handleSubmit}
          className="btn btn-primary table-end"
        >
          Submit
        </button>
        <div class="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={this.state.isFeedbackOn}
            onChange={this.handleChangeidFeedback}
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Want Feedback?
          </label>
        </div>
        {this.handleRendering()};
      </div>
    );
  }
}

export default FeedbackOptions;
