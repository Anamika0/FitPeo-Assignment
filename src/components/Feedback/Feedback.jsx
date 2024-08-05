import React from "react";
import "./Feedback.scss";

const data = [
  {
    name: "Dog Brown",
    img: "dogdrool.png",
    stars: 5,
    content:
      "The food and service was excellent. I had raw meat with drools. Currently drooling on my owner's phone as I write this. Can't wait to visit again!",
  },
  {
    name: "Cat Tom",
    img: "catPfp.jpg",

    stars: 4,
    content:
      "The food and furniture was excellent. It was great to have a meal under a shiny table. Would've definitely given 5 stars if I had succeeded in catching Jerry. Will visit again soon :3",
  },
  {
    name: "Mouse Jerry",
    img: "mouse2.jpg",
    stars: 0,
    content:
      "Worst experience of my life. Came here with the hopes of filling my stomach but barely made it out alive. No safety!",
  },
  {
    name: "Bird Red",
    img: "bird.jpg",
    stars: 2,
    content: "Great view of delicious food. Only if I could taste it.",
  },
];

const Feedback = () => {
  return (
    <div className="feedbacks">
      <span className="feedback-heading">Customer's Feedback</span>
      {data.map((data) => {
        return (
          <div key={data.name} className="feedback">
            <div className="customer">
              <img src={data.img} className="customerPfp" />
              <div className="customerName">{data.name} </div>
            </div>
            <div className="stars">
                    {Array(data.stars)
                      .fill()
                      .map((item, i) => (
                        <img src="/star.png" alt="" key={i} />
                      ))}
                    <span>{data.stars}</span>
                  </div>
            <div className="content">{data.content}</div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Feedback;
