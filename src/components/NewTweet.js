import { useState } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";

const NewTweet = ({ dispatch, id }) => {
  const [text, setText] = useState("");
  const maxTextLength = 280;

  const handleChange = (e) => {
    const text = e.target.value;
    setText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddTweet(text, id));

    console.log("New Tweet: ", text);

    setText("");
  };

  const tweetLeft = maxTextLength - text.length;

  return (
    <div>
      <h3 className="center">Compose new Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        {/* Redirect to / if submitted */}
        <textarea
          placeholder="What's happening?"
          value={text}
          onChange={handleChange}
          className="textarea"
          maxLength={maxTextLength}
        />
        {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
        <button className="btn" type="submit" disabled={text === ""}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(NewTweet);
