import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery, Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Carousel = (props) => {
  const [width, setWidth] = useState();
  const carousel = useRef(null);
  const router = useRouter();

  useEffect(() => {
    document.onreadystatechange = () => {
    console.log(carousel.current.offsetWidth)
    }
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [carousel.current ]);

  const [isLargerThan992] = useMediaQuery(["(min-width: 992px)"]);

  const determineItemWidth = () => {
    if (isLargerThan992) {
      return "25%";
    } else {
      return "70%";
    }
  };

  const determineItemMArgin = () => {
    if (isLargerThan992) {
      return ".6% 1.95% .6% .05%";
    } else {
      return "0 1.25% .6% 1.25%";
    }
  };

  return (
    <motion.div
      className="carousel"
      ref={carousel}
      style={{
        cursor: "grab",
        margin: "0 1%",
        overflow: "hidden",
      }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
        style={{
          display: "flex",
          padding: "1.5rem 0",
        }}
      >
        {props.categories.map((item, index) => {
          return (
            <motion.div
              className="item"
              style={{
                height: "15rem",
                padding: "20px 40px 20px 30px",
                minWidth: determineItemWidth(),
                borderRadius: "1rem",
                margin: determineItemMArgin(),
                border: "1px solid black",
                position: "relative",
              }}
              key={item.name}
            >
              <span
                style={{
                  display: "block",
                  margin: "0 0 20px 0",
                  fontSize: "26px",
                  lineHeight: "1",
                  fontWeight: "500",
                }}
              >
                {item.name}
              </span>

              <Box position="absolute" bottom="20px">
                <Button onClick={() => router.push(`categories/${item.slug}`)}>
                  Learn More
                </Button>
              </Box>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
