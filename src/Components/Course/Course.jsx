import React from "react";
import htmlIMG from "./img/htmlMG.jpg";
import jsIMG from "./img/jsIMG.jpg";
import cssIMG from "./img/cssIMG.jpg";
import s from "./Course.module.css";

const Course = () => {
  return (
    <div>
      <div className={s.card1}>
        <img className={s.img} src={htmlIMG} alt="" />
        <p>
          I highly recommend taking this course <span>first!</span> In it you
          can understand how <span>websites work,</span> what is an{" "}
          <span>HTML document</span>, and a little bit of work with{" "}
          <span>CSS.</span> And in general...{" "}
          <span>create your first website!</span>
          <br />
        </p>
        <button>
          <a
            href="https://www.youtube.com/watch?v=W4MIiV4nZDY&t=9666s"
            target="_blank"
          >
            Course Link!
          </a>
        </button>
      </div>
      <div className={s.card1}>
        <img className={s.img} src={cssIMG} alt="" />
        <p>
          After taking the last course, learning new{" "}
          <span>CSS styles and syntax.</span> We{" "}
          <span>consolidate the new knowledge </span>
          by applying these styles on your website created after the first
          course.
          <br />
        </p>
        <button>
          <a
            href="https://www.youtube.com/watch?v=WpridlBQmdk&list=PLWkguCWKqN9N_Cbexj6pjw4wVSAZ_RijQ"
            target="_blank"
          >
            Course Link!
          </a>
        </button>
      </div>
      <div className={s.card1}>
        <img className={s.img} src={jsIMG} alt="" />
        <p>
          After{" "}
          <span>
            consolidating the practical knowledge from the previous two courses,
          </span>{" "}
          we study the <span>JavaScript programming language.</span> In the
          future, we will use it to create websites with{" "}
          <span>the help of frameworks.</span>
          <br />
        </p>
        <button>
          <a
            href="https://www.youtube.com/watch?v=CxgOKJh4zWE&t=33575s"
            target="_blank"
          >
            Course Link!
          </a>
        </button>
      </div>
    </div>
  );
};

export default Course;
