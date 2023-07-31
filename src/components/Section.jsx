import Typography from "./Typography";
import Character from "../assets/images/character.png";
import PropTypes from "prop-types";

function Section(props) {
  return (
    <div
      key={props.title}
      className="rounded-3xl w-[352px] border-[1px]"
    >
      <div className="h-[129px] flex bg-[#152A46] rounded-t-3xl pt-[16px]">
        <img className="ml-[28px]" src={Character} alt="Character" />
        <div className="ml-[17px]">
          <Typography size="body" variant="tabuti">
            {props.desc}
          </Typography>
          <Typography variant="primary" size="title">
            {props.title}
          </Typography>
          <Typography size="body" variant="primary">
            {props.content}
          </Typography>
        </div>
      </div>
      <div className="px-[27px] py-[10px]">
        <Typography variant="blank" size="title">
          {props.program}
        </Typography>
        <Typography variant="blank" size="title">
          {props.info}
        </Typography>
        <Typography variant="blank" size="conf">
          {props.batch}
        </Typography>
        <Typography variant="blank" size="conf">
          {props.mentor}
        </Typography>
        <div className="flex justify-end gap-4 mt-4">
          <Typography customClass="line-through" variant="blank" size="price">
            {props.promo}    
          </Typography>
          <Typography variant="error" size="price">
            {props.price}
          </Typography>
        </div>
      </div>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  content: PropTypes.string,
  price: PropTypes.string,
  program: PropTypes.string,
  info: PropTypes.string,
  batch: PropTypes.string,
  mentor: PropTypes.string,
  promo: PropTypes.string,
};

export default Section;
