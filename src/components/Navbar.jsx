import { Box, Typography, IconButton } from "@mui/material";
   
import { TbMoon, TbBrandGithub } from "react-icons/tb";

const Navbar = ({ scrollPosition }) => {
  // const {scrollRefState}= useContext(PageScrollableContext)

  return (
    <Box
      component="nav"
      className={`   h-fit  py-2 absolute top-0 z-10 left-0  w-full  box-border   bg-transparent 
    `}
    >
      <div
        className={`box-border container mx-auto h-full flex items-center justify-end relative   transition-all ease-in-out pt-2 z-10 duration-500 tracking-wide`}
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
