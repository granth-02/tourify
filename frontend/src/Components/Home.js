import styled from "styled-components";
import lord from "../Images/popo.jpg"

// Main Theme - https://mir-s3-cdn-cf.behance.net/project_modules/hd/de2a4086105697.5d8f947f95953.jpg
// Deep forrest theme - https://wallpapercave.com/wp/wp2003022.jpg
// Beach theme - https://cdn.dribbble.com/users/63407/screenshots/17441772/media/f37e7f65ff37ee83e4e10a8183659fa2.png?resize=1000x750&vertical=center
// Village - https://cdn.dribbble.com/userupload/9442456/file/original-21a6118bea89f3f1a41ffca607e2d023.png?resize=1200x900
// Tourist - https://cdn.dribbble.com/users/63407/screenshots/10749842/media/c4dc04f82f6bb3297197d297270d5db9.png?resize=800x600&vertical=center

const Home = (props) => {
  return (
    <>
    <Grid>
      <Himg>
        <img
          src="https://wallpapercave.com/wp/wp2003022.jpg"
          
          alt="Welcome"
        ></img>
        <span>Travel</span>
      </Himg>
      <Container>
        <CircleImagesContainer>
          <CircleImageHolder>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAACgoKClpaXu7u5vb2/U1NScnJzm5ubp6ekLCwvDw8OkpKT19fUhISHi4uKsrKw2NjZycnIUFBROTk5GRkY8PDyzs7N5eXkRERFWVla+vr5KSkpgYGBbW1uPj49e7VtFAAAB8UlEQVR4nO3b626iQACA0WLtlepatd2Lu9v3f8sVRBAKLk1ImJmc86sDhfQLMzox9eYGAAAAAAAAAAAAAAAAAAAAAADgmvuHxXQe7ufO6bHIprSYO6fH7aSFt3Pn9DgWria61SrYwuVEt1oqnIfCL1A4E4VfkGbhZr9+O2elWLh8LXcy68fTKMHC92qzti5HCRZ+b++4Iyr88W3ctXd14b4YxlN4l/18GnXtW11YTtNoCssnM2rmNs/wVzGMpbD6sx9HXHuoCzfFMJLC83PZjUncV7/8Wo7iKGwm3vOItbj6fQo83SGKwibwaMzLTb79sz1UP8dQ2ArMnocm6sCbSQSF7cDBtZgPhIRf2A0ceNPIhz5TC76wJ7BvLR6abVpH6IW9gZ8nal6d6GkJvLA/MOtu4PL6xOeYsAuHAjtrMb84/tK9VdCFVwIvN3CH1vHuWgy58GpgsxbzzolOT7iFq+3VwHoD1w3sBgVbuPv7n8Ds9KZx6DnemqjBFo5x3MD1BbZfbqIuzNabgRMXTXEXDmuiUi1s1mKyhfVaTLfw3JVwYfUUUy4M/TPvKRRpaRcWbYkXHidq6oXZS7j/MTSVj13qhVnyz1DhTBQqVDg/hQoVzk9h/IXpf2cm/e89AQAAAAAAAAAAAAAAAAAAAAAAIfkHHT0UCPv9sXUAAAAASUVORK5CYII="
              alt="Mr No Emo"
            ></img>
            <Description>Image</Description>
          </CircleImageHolder>
          <CircleImageHolder>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAACgoKClpaXu7u5vb2/U1NScnJzm5ubp6ekLCwvDw8OkpKT19fUhISHi4uKsrKw2NjZycnIUFBROTk5GRkY8PDyzs7N5eXkRERFWVla+vr5KSkpgYGBbW1uPj49e7VtFAAAB8UlEQVR4nO3b626iQACA0WLtlepatd2Lu9v3f8sVRBAKLk1ImJmc86sDhfQLMzox9eYGAAAAAAAAAAAAAAAAAAAAAADgmvuHxXQe7ufO6bHIprSYO6fH7aSFt3Pn9DgWria61SrYwuVEt1oqnIfCL1A4E4VfkGbhZr9+O2elWLh8LXcy68fTKMHC92qzti5HCRZ+b++4Iyr88W3ctXd14b4YxlN4l/18GnXtW11YTtNoCssnM2rmNs/wVzGMpbD6sx9HXHuoCzfFMJLC83PZjUncV7/8Wo7iKGwm3vOItbj6fQo83SGKwibwaMzLTb79sz1UP8dQ2ArMnocm6sCbSQSF7cDBtZgPhIRf2A0ceNPIhz5TC76wJ7BvLR6abVpH6IW9gZ8nal6d6GkJvLA/MOtu4PL6xOeYsAuHAjtrMb84/tK9VdCFVwIvN3CH1vHuWgy58GpgsxbzzolOT7iFq+3VwHoD1w3sBgVbuPv7n8Ds9KZx6DnemqjBFo5x3MD1BbZfbqIuzNabgRMXTXEXDmuiUi1s1mKyhfVaTLfw3JVwYfUUUy4M/TPvKRRpaRcWbYkXHidq6oXZS7j/MTSVj13qhVnyz1DhTBQqVDg/hQoVzk9h/IXpf2cm/e89AQAAAAAAAAAAAAAAAAAAAAAAIfkHHT0UCPv9sXUAAAAASUVORK5CYII="
              alt="Circle Image 2"
            ></img>
            <Description>Image</Description>
          </CircleImageHolder>
          <CircleImageHolder>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAACgoKClpaXu7u5vb2/U1NScnJzm5ubp6ekLCwvDw8OkpKT19fUhISHi4uKsrKw2NjZycnIUFBROTk5GRkY8PDyzs7N5eXkRERFWVla+vr5KSkpgYGBbW1uPj49e7VtFAAAB8UlEQVR4nO3b626iQACA0WLtlepatd2Lu9v3f8sVRBAKLk1ImJmc86sDhfQLMzox9eYGAAAAAAAAAAAAAAAAAAAAAADgmvuHxXQe7ufO6bHIprSYO6fH7aSFt3Pn9DgWria61SrYwuVEt1oqnIfCL1A4E4VfkGbhZr9+O2elWLh8LXcy68fTKMHC92qzti5HCRZ+b++4Iyr88W3ctXd14b4YxlN4l/18GnXtW11YTtNoCssnM2rmNs/wVzGMpbD6sx9HXHuoCzfFMJLC83PZjUncV7/8Wo7iKGwm3vOItbj6fQo83SGKwibwaMzLTb79sz1UP8dQ2ArMnocm6sCbSQSF7cDBtZgPhIRf2A0ceNPIhz5TC76wJ7BvLR6abVpH6IW9gZ8nal6d6GkJvLA/MOtu4PL6xOeYsAuHAjtrMb84/tK9VdCFVwIvN3CH1vHuWgy58GpgsxbzzolOT7iFq+3VwHoD1w3sBgVbuPv7n8Ds9KZx6DnemqjBFo5x3MD1BbZfbqIuzNabgRMXTXEXDmuiUi1s1mKyhfVaTLfw3JVwYfUUUy4M/TPvKRRpaRcWbYkXHidq6oXZS7j/MTSVj13qhVnyz1DhTBQqVDg/hQoVzk9h/IXpf2cm/e89AQAAAAAAAAAAAAAAAAAAAAAAIfkHHT0UCPv9sXUAAAAASUVORK5CYII="
              alt="Circle Image 3"
            ></img>
            <Description>Image</Description>
          </CircleImageHolder>
        </CircleImagesContainer>
      </Container>
      
    </Grid>
    <Footer />
    </>
  );
};


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
  margin-bottom: 60vw;
`;

const Himg = styled.div`
  height: 124vh;
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
`;

const CircleImagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  
`;

const CircleImageHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  

  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;

    &:hover{
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        border: 5px solid #1C6758;
    }
  }
`;

const Description = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  color: black;
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

export default Home;
