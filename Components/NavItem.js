import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function NavItem({ children, id, offset }) {
	return (
		<Link
			activeClass="active"
			to={id}
			spy={true}
			smooth="true"
			offset={offset}
			duration={1000}
			className={`cursor-pointer hover:opacity-80`}
			required
		>
			{children}
		</Link>
	);
}
