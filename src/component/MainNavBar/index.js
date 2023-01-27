import React, { useState } from "react";
import Account from "@mui/icons-material/AccountCircle";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { BsCart4 } from "react-icons/bs";
// BsCart4
import { Button, Popover, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import Container from "react-bootstrap/Container";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import { ShopByCategory } from "../ShopByCategory/ShopByCategory";
import { useLocation } from "react-router-dom";
import "./MainNavBar.css";
import { fontSize, height, margin, Stack } from "@mui/system";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import PersistentDrawerLeft from "../PersistentDrawer";

const useStyles = makeStyles({
	root: {
		backgroundColor: " #0772BA !important",
		maxWidth: "100vw",
		["@media (max-width:700px)"]: {
			left: "0px",
		},
	},
	shopCart: {
		height: "40px",
	},
	navheight: {
		height: "63px",
		["@media (max-width:700px)"]: {
			height: "130px",
		},
	},
	welcomeheight: {
		height: "63px",
		["@media (max-width:700px)"]: {
			height: "60px",
		},
	},
	btn: {
		backgroundcolor: "white !imoprtant",
	},
	search: {
		// border: "1px solid #e7e3e3",
		borderRadius: "50px",
		overflow: "hidden",
		// ["@media (max-width:700px)"]: {
		//     display: "none!important",
		// },
		["@media (max-width:960px)"]: {
			display: "none!important",
		},
		display: "flex",
	},
	whiteIcon: {
		margin: "0px !important",
		// height : "60px",
		// width  : "60px",
		"& svg": {
			fill: "#fff !important",
		},
	},
	searchA: {
		["@media (max-width:960px)"]: {
			display: "none!important",
		},
	},

	searchMobile: {
		display: "none !important",
		width: "auto !important",
		maxWidth: "100% !important",
		borderRadius: "50px",
		margin: "10px",
		padding: "10px 10px",

		justifyContent: "space-between",
		alignItems: "center",
		height: "40px !important",
		// ["@media (max-width:700px)"]: {
		//     display: "flex !important",
		//     marginLeft: "80px !important",
		// },
		["@media (max-width:960px)"]: {
			display: "flex !important",
			marginLeft: "80px !important",
		},
	},
	SearchiconMobile: {},
	Searchicon: {
		borderRadius: "0 !important",
		color: "#000 !important",
	},
	nonLinks: {
		color: "black",
		textDecoration: "none",
		cursor: "pointer",
	},
	imglogo: {
		height: "51px",
		// marginLeft: "70px",
		// ["@media (max-width:700px)"]: {
		//     margin: "10px auto",
		//     maxWidth: "50%",
		// },
		// ["@media (max-width:1200px)"]: {
		//     // marginLeft: "80px",
		//     margin : "auto"
		// },
	},
	flexNavbar: {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center !important",
		margin: "15px !important",
		// border: "1px solid ",
		// ["@media (max-width:700px)"]: {
		//     flexWrap: 'wrap',
		//     justifyContent: "space-between",
		//     marginLeft: "0px",
		// },
		["@media (max-width:960px)"]: {
			flexWrap: "wrap",
			justifyContent: "space-between",
			paddingRight: "unset !important"
			// marginLeft: "0px",
		},
	},
	title: {
		display: "block",
		// marginLeft: '20px !important',

		// [theme.breakpoints.up('sm')]: {
		//     display: 'flex',
		//     color: 'white',
		// },
	},
	setNavbar: {
		marginLeft: "600px",
		display: "flex",
		["@media (max-width:1500px)"]: {
			marginLeft: "550px",
		},
		["@media (max-width:1122px)"]: {
			marginLeft: "350px",
		},
	},

	listItems: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		["@media (max-width:1000px)"]: {
			width: "700px",
		},
		// flex: 1,
	},
	listItem: {
		margin: "50px 15px",
		// marginLeft : "300px"
		["@media (max-width:1600px)"]: {
			// margin : "250px"
		},
	},
	listItemsActive: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		flex: 1,
	},
	listItemLink: {
		textDecoration: "none",
		color: "white",
	},
	linkText: {
		color: "white",
		fontWeight: "bold !important",
		whiteSpace: "nowrap",
		margin: "0px !important",
		width: "auto !important",
	},
	cat_menu: {
		marginLeft: "-30px",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		// alignItems: 'center',
		// marginLeft: "150px",
		// width: "1500px",
		width: "auto",
		background: "#FFFFFF",
		borderRadius: "40px 40px 0px 0px ",
		// padding: "12px",
		// ["@media (max-width:700px)"]: {
		//     display: 'none',
		// },
		["@media (max-width:960px)"]: {
			display: "none",
		},

		// ["@media (max-width:1023px)"]: {
		//     width : "800px",
		//     marginRight :"200px",

		// },
		// ["@media (max-width:801px)"]: {
		//     width : "390px",

		// },
		// ["@media (max-width:1100px)"]: {
		//     // marginRight :"30px",
		//     width : "auto",
		//     margin : "auto"
		// },
		// ["@media (max-width:1020px)"]: {
		//     width: "700px",
		//     marginRight : "150px"
		// },
	},
});

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	width: "100%",
	height: "45px",
	margin: "5px",
	[theme.breakpoints.up("md")]: {
		marginLeft: theme.spacing(3),
		width: "auto",
	},
}));
// const Searchicon = styled("div")(({ theme }) => ({
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     "&:hover": {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },

//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     [theme.breakpoints.up("sm")]: {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         fontSize: "35px", color: "#000",
//     },
// }));

const NavLanks = styled(Container)(({ theme }) => ({
	//    width : "1600px",
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(3),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	// position: 'absolute',
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	// border: "1px solid black",
	// color: "red",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	// color: "inherit",
	// width: "85%",
	// border: "10px solid black",
	// padding : "0px 20px",

	["@media (max-width:910px)"]: {
		// width: "75%",
	},
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// border: "1px solid black",
		// color: "yellow",
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing()})`,
		transition: theme.transitions.create("width"),
		// width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "50ch",
		},
		// ["@media (max-width:700px)"]: {
		//   paddingLeft: 0,
		//   width: "150px",
		// },
	},
}));

export default function MainNavBar({ setItemSearch, cartCount }) {
	const cartD = useSelector(state => state.cart.initialState);

	const [dataFromLocal, setDataFromLocal] = useState(0);

	useEffect(() => {
		if (localStorage.getItem("cart")) {
			let data = JSON.parse(localStorage.getItem("cart"));
			setDataFromLocal(data.cart.length);
		}
	}, [cartD]);

	const [openList, setOpenList] = React.useState(true);
	const [navOpen, setNavOpen] = useState(false);
	const location = useLocation();

	const handleClick = () => {
		setOpenList(!openList);
	};

	const history = useHistory();

	const classes = useStyles();

	const [drawerOpen, setDrawerOpen] = useState(false);
	const [modelOpen, setModelOpen] = useState(false);

	const toggleDrawer = open => event => {
		if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}

		setDrawerOpen(open);
	};

	const list = () => {
		const links = ["/",
			//  "/newArrival",
			//   "/bestSale"
		];

		return (
			<Box
				sx={{ width: 250 }}
				role="presentation"
				onClick={toggleDrawer(false)}
				onKeyDown={toggleDrawer(false)}>
				<List>
					{/* <ListItem
						style={{ backgroundColor: "red" }}
						onClick={() => history.push("/Login")}
					>
						<IconButton className={classes.searchIcon}>
							<Account />
						</IconButton>
						<ListItemText style={{ color: "white" }} primary="Profile" />
					</ListItem> */}
					<List
						sx={{
							width: "100%",
							maxWidth: 360,
							bgcolor: "background.paper",
						}}
						component="nav"
						aria-labelledby="nested-list-subheader">
						<ListItemButton onClick={handleClick}>
							<ListItemText primary="Shop By Category" />
							{openList ? <ExpandLess /> : <ExpandMore />}
						</ListItemButton>
						<Collapse
							in={openList}
							timeout="auto"
							unmountOnExit>
							<List
								component="div"
								disablePadding>
								<ListItemText>
									<ShopByCategory />
								</ListItemText>
								{/* </ListItemButton> */}
							</List>
						</Collapse>
					</List>
					{[
						"Home",
					].map((text, index) => (
						<ListItem
							button
							key={text}>
							<ListItemText>
								<Link
									style={{ color: "black", textDecoration: "none" }}
									to={links[index]}>
									{text}
								</Link>
							</ListItemText>
						</ListItem>
					))}
				</List>
			</Box>
		);
	};

	const [anchorE, setAnchorE] = React.useState(null);

	const getColor = curr => {
		if (location.pathname === curr) {
			return "underline";
		}
	};

	const closeOnMobileMenu = () => {
		setNavOpen(false);
	};

	return (
		<Box className={classes.navheight}>
			<AppBar
				color="default"
				className={classes.root}
				position="fixed">
				{/* <Box className={classes.welcomeheight} style={{ backgroundColor: "#fff ", color: "black", textAlign: "center", margin: '0px', fontSize: '20px' }}>
                    <p>WELCOME TO POPULAR</p>
                </Box> */}
				<marquee width="100%" direction="right" height="20px" style={{ color: "white" }}>
					This is a sample scrolling text that has scrolls texts to right.
				</marquee>
				<Container className="container">
					{/*  */}
					<Toolbar className={classes.flexNavbar}>
						<MenuIcon
							id="none"
							style={{ fill: "#fff" }}
							onClick={toggleDrawer(true)}
						/>
						<Drawer
							anchor="left"
							open={drawerOpen}
							onClose={toggleDrawer(false)}>
							{list()}
						</Drawer>

						<div style={{ marginLeft: 'inherit' }}>
							<img
								src={logo}
								onClick={() => history.push("/")}
								style={{ cursor: "pointer" }}
								className={classes.imglogo}
								alt="logo"
							/>
						</div>

						<Search
							style={{ backgroundColor: "white" }}
							className={classes.search}>
							<StyledInputBase
								placeholder="Search in "
								inputProps={{ "aria-label": "search" }}
								style={{ width: "550px", color: "#000" }}
								onChange={e => setItemSearch(e.target.value)}
							/>
							<IconButton
								onClick={() => history.push("/search")}
								className={classes.Searchicon}>
								<SearchIcon />
							</IconButton>
						</Search>

						<Box style={{ display: "flex", alignItems: "center" }}>
							<IconButton
								className={classes.whiteIcon}
								aria-label="add to shopping cart"
								onClick={() => history.push("/AddToCart")}>
								<BsCart4 size={"30px"} />
								<span
									style={{
										fontSize: "16px",
										fontWeight: "bold",
										color: "#FFFFFF",
										marginLeft: "5px",
									}}>
									{dataFromLocal == 0 ? "" : dataFromLocal}
								</span>
							</IconButton>
							{/* <IconButton
								aria-label="add to shopping cart"
								className={`${classes.searchA} ${classes.whiteIcon}`}
								onClick={() => history.push("/Login")}
							>
								<PermIdentityIcon
									color="#fff"
									sx={{ fontSize: "30px", color: "#fff" }}
								/>
							</IconButton> */}
						</Box>
					</Toolbar>
					{/*  */}

					<Search
						style={{ backgroundColor: "white", marginRight: "80px" }}
						className={classes.searchMobile}
					// onClick={() => setSearchModel(true)}
					>
						<StyledInputBase
							placeholder="Search in "
							inputProps={{ "aria-label": "search" }}
							style={{
								width: "100% !important",
								padding: "10x 10px !important",
								fontSize: "18px",
								color: "#000",
							}}
							onChange={e => setItemSearch(e.target.value)}
						/>
						<IconButton
							onClick={() => history.push("/search")}
							className={classes.SearchiconMobile}>
							<SearchIcon sx={{ fontSize: "20px" }} />
						</IconButton>
					</Search>
				</Container>
				{/* start part */}

				<div>
					<NavLanks>
						<Box className={classes.cat_menu}>
							<PersistentDrawerLeft />
							<List
								className={`${navOpen
									? `${classes.listItemsActive}`
									: `${classes.listItems}`
									}`}
								style={{
									width: "fit-content !important",
									margin: "0px !important",
								}}>
								<div className={classes.setNavbar}>
									<ListItemText
										className={classes.listItem}
										onClick={closeOnMobileMenu}>
										<Link
											to="/"
											style={{
												textDecoration: getColor("/"),
												color: "white",
												textDecoration: "none",
											}}>
											<Typography
												sx={{ color: "#000000", fontSize: "20px" }}>
												Home
											</Typography>
										</Link>
									</ListItemText>

									<ListItemText
										className={classes.listItem}
										onClick={closeOnMobileMenu}>
										<Link
											to="/Aboutus"
											style={{
												textDecoration: getColor("/"),
												color: "white",
												textDecoration: "none",
											}}>
											<Typography
												sx={{ color: "#000000", fontSize: "20px" }}>
												About
											</Typography>
										</Link>
									</ListItemText>
									<ListItemText
										className={classes.listItem}
										onClick={closeOnMobileMenu}>
										<Link
											to="Blogs"
											style={{
												textDecoration: getColor("/"),
												color: "white",
												textDecoration: "none",
											}}>
											<Typography
												sx={{ color: "#000000", fontSize: "20px" }}>
												Blogs
											</Typography>
										</Link>
									</ListItemText>
									<ListItemText
										className={classes.listItem}
										onClick={closeOnMobileMenu}>
										<Link
											to="Contact"
											style={{
												textDecoration: getColor("/"),
												color: "white",
												textDecoration: "none",
											}}>
											<Typography
												sx={{ color: "#000000", fontSize: "20px" }}>
												Contact
											</Typography>
										</Link>
									</ListItemText>

								</div>

							</List>
						</Box>
					</NavLanks>
				</div>


				{/* end part */}
			</AppBar>
		</Box>
	);
}
