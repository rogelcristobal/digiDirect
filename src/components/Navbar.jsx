import { Box, Typography, IconButton } from "@mui/material";
   
import { TbMoon, TbBrandGithub } from "react-icons/tb";

const Navbar = ({ scrollPosition }) => {
  // const {scrollRefState}= useContext(PageScrollableContext)
  // const handleClick=()=>{
  //   dataset
  // }
  return (
    <Box
      component="nav"
      
      className={` border-thin-bottom  h-fit  py-2 absolute top-0 z-30 left-0  w-full  box-border   bg-inherit 
    `}
    >
      <div
        className={`box-border container mx-auto h-full pt-4 px-2 flex items-center justify-end relative   transition-all ease-in-out z-10 duration-500 tracking-wide`}

        >
        <Typography variant="body1" className="font-ukraine-regular">DIGIDIRECT</Typography>
        
        {/* <Box className=" flex items-center box-border  gap-3.5 ">
          <IconButton disableRipple className="p-1.5 flex items-center justify-center box-border text-inherit rounded-lg text-lg hover:text-sky-600 border-medium-box">
            <TbMoon />
          </IconButton>

          <IconButton disableRipple className="p-1.5 flex items-center justify-center box-border text-inherit  rounded-lg text-lg hover:text-sky-600 border-medium-box">
            <TbBrandGithub/>
          </IconButton>
        </Box> */}
       
      </div>

      
    </Box>
  );
};

export default Navbar;
