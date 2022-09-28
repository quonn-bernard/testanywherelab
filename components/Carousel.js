import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  useMediaQuery,
  useColorModeValue,
  Box,
  HStack,
  Button
} from "@chakra-ui/react";
import { useRouter } from "next/router";

// import useCustomTheme from "../Hooks/useCustomTheme";
// import DefaultButton from "../Buttons/DefaultButton";
// import useServicesData from "../Hooks/useServicesData";

const Carousel = (props) => {
  const [width, setWidth] = useState(0);
  const [categoryList, setCategoryList] = useState([]);

  // const {appData} = useServicesData('categories')
  const carousel = useRef();
  const router = useRouter();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const [isLargerThanHD] = useMediaQuery(["(min-width: 992px)"]);

  const determineItemWidth = () => {
    if (isLargerThanHD) {
      return "25%";
    } else {
      return "70%";
    }
  };

  const determineItemMArgin = () => {
    if (isLargerThanHD) {
      return ".6% 1.95% .6% .05%";
    } else {
      return "0 1.25% .6% 1.25%";
    }
  };

  //   const { dark, light, neutral } = useCustomTheme();
  // const carouselItemTitle = useColorModeValue(neutral, neutral)
  // const carouselItemBorderColor = useColorModeValue(neutral, dark)
  // const caruselItemBgColor = useColorModeValue(light, light)
  return (
    <motion.div
      className="carousel"
      ref={carousel}
      style={{
        cursor: "grab",
        margin: "0 1%",
        overflow: "hidden",
        width: "100vw",
      }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
        style={{
          display: "flex",
          padding: "1.5rem 0"
        }}
      >
        {props.categories.map((item) => {
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
              key={Math.random().toString()}
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
                <Button onClick={() => router.push(`categories/${item.slug}`)}>Learn More</Button>
              </Box>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
