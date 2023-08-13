import Container from "../components/Container/Container";
import Col from "../components/Col/Col";
import Row from "../components/Row/Row";
import Button from "../components/Button/Button";

const Home = () => {
  return (
    <>
      <Container display={"flex"} flexDirection={"column"} gap={"50px"}>
        <Row
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          gap={"50px"}
          padding={"3px"}
          margin={"3px"}
          width={"100vw"}
        >
          <Col
            width={"300px"}
            borderBottom={"5px solid red"}
            boxShadow={"0px 0px 40px gray"}
            borderRadius={"10px"}
            gap={"50px"}
            backgroundSize={"cover"}
            padding={"30px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundImage={"linear-gradient(45deg, white, skyblue)"}
            height={"300px"}
          >
            <p>Hello</p>
            <Button
              border={"none"}
              outline={"none"}
              boxShadow={"0px 0px 10px pink"}
              borderRadius={"10px"}
              width={"75px"}
              height={"35px"}
              padding={"10px 20px"}
              color={"red"}
              fontWeight={900}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              position={"relative"}
              overflow={"hidden"}
              transition={".5s all ease-in-out"}
              zIndex={1}
              before={{
                width: "100%",
                height: "100%",
                position: "absolute",
                borderTop: "3px solid skyblue",
                top: 0,
                left: 0,
                zIndex: -1,
                transform: "translateX(100%)",
                transition: ".5s all ease-in-out",
              }}
              extraBefore={{
                width: "100%",
                height: "100%",
                position: "absolute",
                borderRight: "3px solid lightblue",
                top: 0,
                right: 0,
                zIndex: -1,
                transform: "translateY(100%)",
                transition: ".5s all ease-in-out",
              }}
              after={{
                width: "100%",
                height: "100%",
                position: "absolute",
                borderBottom: "3px solid skyblue",
                bottom: 0,
                left: 0,
                zIndex: -1,
                transform: "translateX(-100%)",
                transition: ".5s all ease-in-out",
              }}
              extraAfter={{
                width: "100%",
                height: "100%",
                position: "absolute",
                borderLeft: "3px solid lightblue",
                top: 0,
                left: 0,
                zIndex: -1,
                transform: "translateY(-100%)",
                transition: ".5s all ease-in-out",
              }}
              hover={{
                color: "black",
                transform: "scale(1)",
                fontWeight: 900,
                boxShadow: "0px 0px 20px pink, 0px 0px 30px green",
                before: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  borderTop: "3px solid skyblue",

                  top: 0,
                  left: 0,
                  zIndex: -1,
                  transition: ".5s all ease-in-out",
                  transform: "translateX(0%)",
                },
                extraBefore: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  borderRight: "3px solid lightblue",

                  top: 0,
                  right: 0,
                  zIndex: -1,
                  transition: ".5s all ease-in-out",
                  transform: "translateY(0%)",
                },
                after: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  borderBottom: "3px solid skyblue",
                  bottom: 0,
                  left: 0,
                  zIndex: -1,
                  transition: ".5s all ease-in-out",
                  transform: "translateX(0%)",
                },
                extraAfter: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  borderLeft: "3px solid lightblue",
                  bottom: 0,
                  left: 0,
                  zIndex: -1,
                  transition: ".5s all ease-in-out",
                  transform: "translateY(0%)",
                },
              }}
            >
              Hello
            </Button>
            <Button
              border={"none"}
              outline={"none"}
              boxShadow={"0px 0px 10px pink"}
              borderRadius={"10px"}
              width={"75px"}
              height={"35px"}
              padding={"10px 20px"}
              color={"red"}
              fontWeight={900}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              position={"relative"}
              overflow={"hidden"}
              transition={".5s all ease-in-out"}
              zIndex={1}
              before={{
                width: "100%",
                height: "100%",
                position: "absolute",
                borderTop: "3px solid skyblue",
                top: 0,
                left: 0,
                zIndex: -1,
                transform: "translateX(100%)",
                transition: ".5s all ease-in-out",
              }}
              extraBefore={{
                width: "100%",
                height: "100%",
                position: "absolute",
                borderRight: "3px solid lightblue",
                top: 0,
                right: 0,
                zIndex: -1,
                transform: "translateY(100%)",
                transition: ".5s all ease-in-out",
              }}
              after={{
                width: "100%",
                height: "100%",
                position: "absolute",
                borderBottom: "3px solid skyblue",
                bottom: 0,
                left: 0,
                zIndex: -1,
                transform: "translateX(-100%)",
                transition: ".5s all ease-in-out",
              }}
              extraAfter={{
                width: "100%",
                height: "100%",
                position: "absolute",
                borderLeft: "3px solid lightblue",
                top: 0,
                left: 0,
                zIndex: -1,
                transform: "translateY(-100%)",
                transition: ".5s all ease-in-out",
              }}
              hover={{
                color: "black",
                transform: "scale(1)",
                fontWeight: 900,
                boxShadow: "0px 0px 20px pink, 0px 0px 30px green",
                before: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  borderTop: "3px solid skyblue",

                  top: 0,
                  left: 0,
                  zIndex: -1,
                  transition: ".5s all ease-in-out",
                  transform: "translateX(0%)",
                },
                extraBefore: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  borderRight: "3px solid lightblue",

                  top: 0,
                  right: 0,
                  zIndex: -1,
                  transition: ".5s all ease-in-out",
                  transform: "translateY(0%)",
                },
                after: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  borderBottom: "3px solid skyblue",
                  bottom: 0,
                  left: 0,
                  zIndex: -1,
                  transition: ".5s all ease-in-out",
                  transform: "translateX(0%)",
                },
                extraAfter: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  borderLeft: "3px solid lightblue",
                  bottom: 0,
                  left: 0,
                  zIndex: -1,
                  transition: ".5s all ease-in-out",
                  transform: "translateY(0%)",
                },
              }}
            >
              Hello
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
