import "./progress.css";
import { useGetLanguagesIconsQuery } from "../../Api/api";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import $ from "jquery";

var nav = $("body");

if (nav.length) {
  var offsetTop = nav.offset().top;
  $(window).on("scroll", function () {
    var height = $(window).height();
    if ($(window).scrollTop() + height > offsetTop) {
      $(".fullwidth").each(function () {
        $(this)
          .find(".skill-bar")
          .animate(
            {
              width: $(this).attr("data-percent"),
            },
            2000
          );
      });
    }
  });
}

const Progress = () => {
  const { data: langIcons, } = useGetLanguagesIconsQuery();

  const [icons, setIcons] = useState(langIcons);

  useEffect(() => {
    setIcons(langIcons);
  }, [langIcons]);


  const responsive = {
    0: {
      items: 1,
    },
    380: {
      items: 1,
    },
    512: {
      items: 2,
    },
    665: {
      items: 3,
    },
    767: {
      items: 3,
    },
    870: {
      items: 4,
    },
    1024: {
      items: 6,
    },
    1265: {
      items: 6,
    },
  };

  const items = icons?.map(() => {
    return (
      <div className="mylang" title= "title" >
        <div className="lang-info">
          <div className="lang-img">
            <img src="" alt="" />
          </div>
          <h3>Name</h3>
          <p className="">level</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <section id="skills">
        <div className="progress-container">
          <div className="progress-title">
            <h2>My Skills Progress so far</h2>

            <h3>My Skills</h3>
          </div>
          <div className="progress-row2">
            <div className="lang">
              <AliceCarousel
                infinite
                autoPlay
                disableButtonsControls
                disableDotsControls
                mouseTracking
                autoPlayInterval={1000}
                items={items}
                responsive={responsive}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Progress;
