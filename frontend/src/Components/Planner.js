import styled from "styled-components";

const Planner = (props) => {
    return(
        <>
        <Grid>
            <Container>
                <h1>Plan Your Amazing Trip !</h1>
            </Container>
            <Map>
                <img src="https://cdn.dribbble.com/users/1068771/screenshots/17747981/media/8bdba4ea3989451e380c4db0354bb474.jpg?resize=1000x750&vertical=center">

                </img>
            </Map>
           
        </Grid>
        <Footer />
        </>
    )
}

const Grid = styled.div`
  display: grid;
  gap: 90px;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  height: 100vh;
  justify-content: center;
  padding-top: 100px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 70vw;
`;

const Map = styled.div`
  height: 160vh;
  width: 100%;
  padding-top: 55px;
  margin-left: 0px;
  margin-right: 50px;
  /* background-color: rgb(194, 51, 115); */
  background-color: rgb(61, 131, 97);
  /* background-color: rgb(127, 233, 222); */
  /* background-color: rgb(163, 210, 202); */
  /* background-color: rgb(255, 169, 82); */
  /* border: 1px solid;
  border-color: #f6635c; */
  border-radius: 10px;
  img {
    position: relative;
    width: 90vw;
    border-radius: 10px;
    margin-top: -15px;
  }
  span {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: -50vw;
    /* color: #ffccc4; */
    color: #1C6758;
    /* color: #FFEBAD; */
    /* color: #E8DED2; */
    /* color: #EF5A5A; */
    font-size: 5vw;
    letter-spacing: 20px;
    font-family: "Lora", serif;
    z-index: 1;
  }
`;

const Container = styled.div`
  padding-top: 50px;
  width: 100%;
  border-radius: 10px;
  height: 55vh;
  /* background-color: rgb(246, 99, 92); */
  background-color: rgb(214, 205, 164);
  /* background-color: rgb(255, 246, 191); */
  /* background-color: rgb(94, 170, 168); */
  /* background-color: rgb(255, 231, 154); */

  h1{
    font-family: "Quicksand", sans-serif;
  }
`;

const Footer = styled.footer`
  /* background-color: #FFBA86;  */
  background-color: #EEF2E6;
  /* background-color: #FFEBAD; */
  /* background-color: #056676; */
  /* background-color: #EF5A5A; */
  color: white;
  padding: 20px;
  border-radius: 20px 20px 0 0; /* Top-left and top-right curved edges */
  text-align: center;
`;
export default Planner;