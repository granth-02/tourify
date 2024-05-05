import React, { useState } from 'react';
import styled from 'styled-components';

const India = (props) => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedCardIndex(index === expandedCardIndex ? null : index);
  };

  const cardData = [
    {
      title: 'Andhra Pradesh',
      description:
        'The state is also recognized for its contribution to classical dance forms like Kuchipudi.',
      imageUrl: 'https://cdn.dribbble.com/users/1207323/screenshots/4646181/media/8a0b4e399f0bebc6bec0dc275b8b081f.jpg?resize=800x600&vertical=center',
      foodImage1: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_720,h_480,al_c,q_80,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg',
      foodTitle1: 'Rice',
      foodImage2: 'https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_600874184-1-750x750.jpg',
      foodTitle2: 'Gongura Chicken',
      touristPlacesImage1: 'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_11162494701_20200130180527_20200130180558.png',
      touristTitle1: 'Araku Valley',
      touristPlacesImage2: 'https://static.toiimg.com/img/97972409/Master.jpg',
      touristTitle2: 'Tirumala Venkateswara Temple',
    },
    {
      title: 'Gujarat',
      description:
        'Gujarat offers rich heritage and attractions like Kutch desert and Gir National Park, complemented by architectural marvels and the vibrant Rann Utsav, promising travelers an unforgettable cultural experience.',
      imageUrl: 'https://cdn.dribbble.com/users/3421954/screenshots/6276701/gujarat_final_4x.jpg?resize=1000x750&vertical=center',
      foodImage1: 'https://i0.wp.com/aartimadan.com/wp-content/uploads/2023/02/Corn-Dhokla.jpg?fit=800%2C449&ssl=1',
      foodTitle1: 'Dhokla',
      foodImage2: 'https://i0.wp.com/myvegetarianroots.com/wp-content/uploads/2019/12/DSC_0024-2.jpeg?fit=1920%2C1335&ssl=1',
      foodTitle2: 'Thepla',
      touristPlacesImage1: 'https://miro.medium.com/v2/resize:fit:840/1*f9tAxE83-Fnc_U2QsWFYgQ.jpeg',
      touristTitle1: 'Gir National Park',
      touristPlacesImage2: 'https://www.tripsavvy.com/thmb/Yh7C0nh6CKbB5BmhRz3il-V8sm8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-537000923-541774dbe2d44759815fdf0719b04685.jpg',
      touristTitle2: 'Rann of Kutch',
    },
    // Add more card data as needed
  ];

  const isCardExpanded = (index) => index === expandedCardIndex;

  return (
    <>
      <Grid>
        <Bg>
          <Card>
            {cardData.map((card, index) => (
              <React.Fragment key={index}>
                <Wrap onClick={() => toggleExpand(index)}>
                  <img src={card.imageUrl} alt={card.title} />
                  <h2>{card.title}</h2>
                  {isCardExpanded(index) && <p>{card.description}</p>}
                </Wrap>
                <ExpandedContent expanded={isCardExpanded(index)}>
                  
                  <FoodContainer>
                    <h2>Food</h2>
                    <FoodImage src={card.foodImage1} alt="Food 1" />
                    <FoodTitle>{card.foodTitle1}</FoodTitle>
                    <FoodImage src={card.foodImage2} alt="Food 2" />
                    <FoodTitle>{card.foodTitle2}</FoodTitle>
                  </FoodContainer>
                  
                  <TouristContainer>
                    <h2>Tourist Places</h2>
                    <TouristImage src={card.touristPlacesImage1} alt="Tourist Place 1" />
                    <TouristTitle>{card.touristTitle1}</TouristTitle>
                    <TouristImage src={card.touristPlacesImage2} alt="Tourist Place 2" />
                    <TouristTitle>{card.touristTitle2}</TouristTitle>
                  </TouristContainer>
                </ExpandedContent>
              </React.Fragment>
            ))}
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
  background-color: rgb(61, 131, 97);
  border-radius: 10px;
`;

const Card = styled.div`
  display: grid;
  gap: 80px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin-left: 20px;
  margin-right: 200px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  border-radius: 10px;
  background-color:  rgb(214, 205, 164);
  cursor: pointer;
  width: 20vw;
  

  &:hover {
    transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 5px solid #1c6758;
  }

  p{
    text-align: justify;
    margin: 10px;
    color: #1c6758;
    font-weight: bold;
  }

  img {
    margin-top: 10px;
    border-radius: 5px;
    width: 95%;
  }

  h2 {
    color: #1c6758;
    text-align: center;
  }
`;

const ExpandedContent = styled.div`
  display: ${({ expanded }) => (expanded ? 'flex' : 'none')};
  
  align-items: center;
  padding-top: 0;
  margin-right: 300px;
  border-radius: 10px;
  background-color: rgb(28, 103, 88, 0.7);
  cursor: pointer;
  width: 30vw;
  
  border: 5px solid rgb(214, 205, 164, 1);
  z-index: 1;

  h2 {
    color: rgb(214, 205, 164, 1);
    text-align: center;
  }

  p {
    color: rgb(214, 205, 164, 1);
    text-align: center;
  }
`;

const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

const FoodImage = styled.img`
  width: 200px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
`;

const FoodTitle = styled.h3`
  color: rgb(214, 205, 164, 1);
  text-align: center;
`;

const TouristContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TouristImage = styled.img`
  
  width: 200px;
  margin-left: 10px;
  
  border-radius: 10px;
`;

const TouristTitle = styled.h3`

  color: rgb(214, 205, 164, 1);
  text-align: center;
`;

export default India;
