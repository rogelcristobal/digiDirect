import { Box, Typography } from "@mui/material";
import TextContent from "./TextContent";
// import NavScrollContext from "../context/ScrollContext";
import DigiLogoInJs from "./DigiLogoInJs";

const Navbar = () => {
  // const { scrollPosition } = useContext(NavScrollContext);
  // console.log('scroll state change')
  return (
    <Box
      component="nav"
      className={`  h-fit py-2   bg-transparent fixed top-0 right-0 transition-all duration-300 ease-in-out pt-4  z-30 w-full  box-border 
    `}
    >
      <div
        className={`box-border container    h-full  flex items-center justify-end    transition-all ease-in-out duration-500 `}
      >
        <TextContent title={
          <Typography variant="body1" className="font-ukraine-regular text-[0.8rem] ">rogel.c</Typography>
        }></TextContent>

        
        {/* <Box className="flex items-center justify-end pr-20 space-x-3 box-border  w-full">
          {[
            { title: "templates", path: "/templates" },
            { title: "converters", path: "/converter" },
             { title: "tools", path: "/" },
          ].map((item, id) => (
            <Box key={id} className=" h-full w-fit  grid place-content-center">
              <ListItemBtnComponent
                path={`${item.path}`}
                title={`${item.title}`}
                parentBtn
              />
            </Box>
          ))}
        </Box> */}

        {/* rightside box icons */}
        {/*<Box className="flex items-center  justify-around space-x-4 box-border">
           <IconButton
            size="small"
            className="p-2  cursor-pointer  text-gray-600 hover:text-[#3180e2]   transition-all dration-300 ease-in-out text-[0.985rem] "
          >
            <HiOutlineMoon></HiOutlineMoon>
          </IconButton>

          <IconButton
            size="small"
            target="_blank"
            href="https://github.com/rogelcristobal/digiDirect"
            className="p-2  cursor-pointer  text-gray-600 hover:text-[#3180e2]   transition-all dration-300 ease-in-out text-[0.985rem]  no-underline"
          >
            <FiGithub></FiGithub>
          </IconButton>

          <IconButton
            size="small"
            className="p-2  cursor-pointer  text-gray-600 hover:text-[#3180e2]   transition-all dration-300 ease-in-out text-[0.985rem] "
          >
            <AiOutlineUser></AiOutlineUser>
          </IconButton> */}
          {/* <Button
            variant="text"
            size="small"
           className=" py-2 px-4 rounded-lg bg-[#3b72ff] text-white grid place-content-center "
          >
            <Typography variant="overline" className="text-xs capitalize p-0 m-0">sign in</Typography>
            
          </Button> 
        </Box>*/}
      </div>
    </Box>
  );
};

export default Navbar;
