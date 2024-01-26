const Button = (props) => {
  //  Write your code here
  const { name, greeting } = props;

  return <button className={greeting}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="conatiner">
    <h1 className="heading">social Buttons</h1>
    <div className="conatiner2">
      <Button name="Like" greeting="likebutton" />
      <Button name="Comment" greeting="commentbutton" />
      <Button name="Share" greeting="sharebutton" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
