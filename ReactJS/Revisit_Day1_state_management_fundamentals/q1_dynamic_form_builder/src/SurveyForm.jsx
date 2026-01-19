import { useState } from "react";

const SurveyForm = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: Date.now(),
        questionText: "",
        questionType: "text",
      },
    ]);
  };

  const updateQuestion = (id, field, value) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, [field]: value } : q))
    );
  };

  const removeQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>
      <h2>Survey Form Builder</h2>

      <button onClick={addQuestion}>Add Question</button>

      {questions.map((q, index) => (
        <div
          key={q.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <p>Question {index + 1}</p>

          <input
            type="text"
            value={q.questionText}
            placeholder="Enter your question"
            onChange={(e) =>
              updateQuestion(q.id, "questionText", e.target.value)
            }
            style={{ width: "100%" }}
          />

          <select
            value={q.questionType}
            onChange={(e) =>
              updateQuestion(q.id, "questionType", e.target.value)
            }
            style={{ marginTop: "5px" }}
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
          </select>

          <button
            onClick={() => removeQuestion(q.id)}
            style={{ marginLeft: "10px" }}
          >
            Remove
          </button>
        </div>
      ))}

      <hr style={{ margin: "20px 0" }} />

      <h3>Live Preview</h3>

      {questions.map((q) => (
        <div key={q.id} style={{ marginBottom: "10px" }}>
          <label>{q.questionText || "Untitled Question"}</label>
          <input
            type={q.questionType}
            disabled
            style={{
              display: "block",
              width: "100%",
              marginTop: "5px",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default SurveyForm;