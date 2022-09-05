<<<<<<< HEAD
import React from 'react';

const Card = () => {
  return (
    <div>
      
    </div>
  );
}
=======
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
	children,
	hexColor,
	colSpan,
	rowSpan,
	rowStart,
	colStart,
	path,
}) => {
	// const navigate = useNavigate()
	const handleNavigate = () => {
		// navigate(`${path}`)
	};
	return (
		<div
			onClick={handleNavigate}
			className={`col-span-${colSpan} row-span-${rowSpan} ${
				rowStart && `row-start-${rowStart}`
			} ${
				colStart && `col-start-${colStart}`
			} h-full w-full capitalize bg-[${hexColor}] rounded-3xl p-4 cursor-pointer flex items-center justify-center relative   shadow-xl shadow-[${hexColor}]`}
		>
			{children}
		</div>
	);
};

Card.defaultProps = {
	colSpan: 1,
	rowSpan: 1,
	hexColor: `#ffffff`,
};
>>>>>>> 8692d11bba9dd5732f08d26fbb080b1ed60c827a

export default Card;
