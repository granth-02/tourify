import React, { useState } from 'react';
import styled from 'styled-components';
import { CCollapse } from '@coreui/react';

const India = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setShowContent(!showContent);
  };

  return (
    <>
      <Grid>
        <Bg>
          <Card>
            <Wrap onClick={toggleExpand}>
              <img src="https://cdn.dribbble.com/users/3421954/screenshots/6276701/gujarat_final_4x.jpg?resize=1000x750&vertical=center" alt="Gujarat"></img>
              <h2>Gujarat</h2>
              {showContent && (
                <p style={{ textAlign: 'justify', margin: '20px', color: '#fff' }}>
                Gujarat offers rich heritage and attractions like Kutch desert and Gir National Park, complemented by architectural marvels and the vibrant Rann Utsav, promising travelers an unforgettable cultural experience.</p>
              )}
            </Wrap>
            <ExpandedContent className={isExpanded ? 'expanded' : ''}>
              <h2>Food</h2>
              <img src="https://i0.wp.com/aartimadan.com/wp-content/uploads/2023/02/Corn-Dhokla.jpg?fit=800%2C449&ssl=1" alt="Food"></img>
              <h3>Dhokla</h3>
              <img src="https://i0.wp.com/myvegetarianroots.com/wp-content/uploads/2019/12/DSC_0024-2.jpeg?fit=1920%2C1335&ssl=1" alt="Food"></img>
              <h3>Thepla</h3>
            </ExpandedContent>
    
            <ExpandedContent className={isExpanded ? 'expanded' : ''}>
              <h2>Tourist Places</h2>
              <img src="https://miro.medium.com/v2/resize:fit:840/1*f9tAxE83-Fnc_U2QsWFYgQ.jpeg" alt="Food"></img>
              <h3>Gir National Park</h3>
              <img src="https://www.tripsavvy.com/thmb/Yh7C0nh6CKbB5BmhRz3il-V8sm8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-537000923-541774dbe2d44759815fdf0719b04685.jpg" alt="Food"></img>
              <h3>Rann of Kutch</h3>
            </ExpandedContent>
          </Card>
        </Bg>
      </Grid>
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
  margin-bottom: 120vw;
`;

const Bg = styled.div`
  height: 124vh;
  width: 100%;
  padding-top: 20px;
  margin-left: 0px;
  /* margin-right: 50px; */
  background-color: rgb(61, 131, 97);
  border-radius: 10px;
`;

const Card = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin-left: 20px;
  margin-right: 20px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  border-radius: 10px;
  background-color: #1C6758;
  cursor: pointer;
  width: 20vw;

  &:hover {
    transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 5px solid rgb(214, 205, 164, 1);
  }

  img {
    margin-top: 10px;
    border-radius: 5px;
    width: 95%;
  }

  h2 {
    color: rgb(214, 205, 164, 1);
    text-align: center;
  }
`;

const ExpandedContent = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  margin-right: auto;
  border-radius: 10px;
  margin-left: 70px;
  background-color: #1C6758;
  cursor: pointer;
  width: 20vw;
  
  &.expanded {
    display: flex;
  }
  h2 {
    color: rgb(214, 205, 164, 1);
    text-align: center;
  }
  h3 {
    color: rgb(214, 205, 164, 1);
    text-align: center;
  }
  p{
    color: rgb(214, 205, 164, 1);
    text-align: center;
  }

  img{
    width: 250px;
    border-radius: 10px;

  }
`;

export default India;
