import { useState } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Navbar2 from '../components/Navbar2';
import Hero2 from '../components/Hero2';

const StartPage = () => {
  return (<>
                <Navbar2 />
                <Hero2 />     

            
                  
    </>
  )
};
export default StartPage;
