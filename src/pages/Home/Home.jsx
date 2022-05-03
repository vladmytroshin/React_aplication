import React from 'react';
import Calendar from '../../component/Calendar/Calendar';
import { Box } from '@mui/material';
import AddNewUsers from '../../component/User/AddUsers';
import Users from '../../component/User/User';
import { styled } from '@mui/material/styles';


const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
  @media(max-width: 1080px){
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
  }
`;

const Home = () => {
return (
  <StyledBox>
    <Box>
      <AddNewUsers/>
      <Users/>
    </Box>
    <Calendar/>
  </StyledBox>

);
}
export default Home
