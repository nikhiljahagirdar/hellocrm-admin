"use client"

import React, { Fragment, useEffect, useRef, useState } from 'react'
import { MENUITEMS } from './nav'
import { catchError, map, of } from 'rxjs';
import Link from 'next/link';
import Menuloop from './menuloop';
import SimpleBar from 'simplebar-react';
import { data$, getState, setState } from '../services/switcherServices';
import { usePathname } from 'next/navigation';
import { basePath } from '@/next.config';
import Image from 'next/image';
import SpkTooltips from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-tooltips';

const Sidebar = () => {

	let [variable, setVariable] = useState(getState());
	const local_varaiable = variable;

	useEffect(() => {
		const subscription = data$.subscribe((e) => {
			setVariable(e);
		});
		return () => subscription.unsubscribe();
	}, []);


	const [menuitems, setMenuitems] = useState(MENUITEMS);

	function closeMenuFn() {
		const closeMenuRecursively = (items: any) => {
			items?.forEach((item: any) => {
				item.active = false;
				closeMenuRecursively(item.children);
			});
		};
		closeMenuRecursively(MENUITEMS);
		setMenuitems((arr: any) => [...arr]);
	}

	const sidebarRef = useRef(null);
	const [isSticky, setIsSticky] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 30) {
			setIsSticky(true);
		} else {
			setIsSticky(false);
		}
	};

	const slidesArrow = (selector: any) => document.querySelector(selector);

	const SelectorAll = (selector: any) => document.querySelectorAll(selector);

	useEffect(() => {
		const resizeEventListeners = [
			{ event: 'resize', handler: menuResizeFn },
			{ event: 'resize', handler: checkHoriMenu }
		];
		resizeEventListeners.forEach(({ event, handler }) => {
			window.addEventListener(event, handler);
		});
		const mainContent = slidesArrow(".main-content");
		if (window.innerWidth <= 992) {
			if (mainContent) {
				const newState = {
					toggled: "close"
				}
				setState(newState)
			} else if (document.documentElement.getAttribute('data-nav-layout') == 'horizontal') {
				closeMenuFn();
			}
		}
		if (mainContent) {
			mainContent.addEventListener('click', menuClose);
		}
		window.addEventListener("scroll", handleScroll);
		return () => {
			resizeEventListeners.forEach(({ event, handler }) => {
				window.removeEventListener(event, handler);
			});
			if (mainContent) {
				mainContent.removeEventListener('click', menuClose);
			}
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const pathname = usePathname()

	function Onhover() {
		const theme = getState();
		if ((theme.toggled == 'icon-overlay-close' || theme.toggled == 'detached-close') && theme.iconOverlay != 'open') {
			const newState = {
				"iconOverlay": "open"
			}
			setState(newState)
			console.log(newState)
		}

	}
	function Outhover() {
		const theme = getState();
		if ((theme.toggled == "icon-overlay-close" || theme.toggled == "detached-close") && theme.iconOverlay == "open") {
			const newState = {
				"iconOverlay": ""
			}
			setState(newState)
		}
	}

	const overlayRef: any = useRef(null);

	function menuClose() {

		const theme = getState();;

		if (window.innerWidth <= 992) {
			const newState = {
				toggled: "close"
			}
			setState(newState)
		}
		if (overlayRef.current) {
			overlayRef.current.classList.remove("active");
		}
		if (theme.dataNavLayout === "horizontal" || theme.dataNavStyle === "menu-click" || theme.dataNavStyle === "icon-click") {
			closeMenuFn();
		}
	}


	const WindowPreSize = typeof window !== 'undefined' ? [window.innerWidth] : [];
	function menuResizeFn() {
		WindowPreSize.push(window.innerWidth);
		if (WindowPreSize.length > 2) { WindowPreSize.shift() }
		if (WindowPreSize.length > 1) {
			if ((WindowPreSize[WindowPreSize.length - 1] < 992) && (WindowPreSize[WindowPreSize.length - 2] >= 992)) {
				// less than 992;
				const newState = {
					toggled: "close"
				}
				setState(newState)
			}

			if ((WindowPreSize[WindowPreSize.length - 1] >= 992) && (WindowPreSize[WindowPreSize.length - 2] < 992)) {
				const theme = getState();
				// greater than 992
				if (theme.dataVerticalStyle == "doublemenu") {
					const doublemenuactive: any = slidesArrow(".double-menu-active");

					if (doublemenuactive) {
						const newState = {
							toggled: "double-menu-open"
						}
						setState(newState)
					}
					else {
						const newState = {
							toggled: "double-menu-close"
						}
						setState(newState)
					}
				} else {
					setState({ toggled: "" });
				}
			}
		}
	}
	const menuNavRef: any = useRef(null);
	const mainContainerRef: any = useRef(null);

	function checkHoriMenu() {
		const menuNav = menuNavRef.current;
		const mainContainer1 = mainContainerRef.current;

		if (menuNav && mainContainer1) {
			const computedStyle = window.getComputedStyle(menuNav);
			const marginLeftValue = Math.ceil(
				Number(computedStyle.marginLeft.split("px")[0])
			);
			const marginRightValue = Math.ceil(
				Number(computedStyle.marginRight.split("px")[0])
			);
			const check = menuNav.scrollWidth - mainContainer1.offsetWidth;

			if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
			} else {
				menuNav.style.marginLeft = "0px";
				menuNav.style.marginRight = "0px";
				menuNav.style.marginInlineStart = "0px";
			}

			const isRtl = document.documentElement.getAttribute("dir") === "rtl";

			if (!isRtl) {
				if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
					if (Math.abs(check) < Math.abs(marginLeftValue)) {
						menuNav.style.marginLeft = -check + "px";
					}
				}
			} else {
				if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
					if (Math.abs(check) < Math.abs(marginRightValue)) {
						menuNav.style.marginRight = -check + "px";
					}
				}
			}
		}
	}

	function switcherArrowFn() {

		// Used to remove is-expanded class and remove class on clicking arrow buttons
		function slideClick() {
			const slide: any = SelectorAll(".slide");
			const slideMenu: any = SelectorAll(".slide-menu");

			slide.forEach((element: any) => {
				if (element.classList.contains("is-expanded")) {
					element.classList.remove("is-expanded");
				}
			});

			slideMenu.forEach((element: any) => {
				if (element.classList.contains("open")) {
					element.classList.remove("open");
					element.style.display = "none";
				}
			});
		}

		slideClick();
	}

	function slideRight() {
		const menuNav: any = slidesArrow(".main-menu");
		const mainContainer1: any = slidesArrow(".main-sidebar");
		const slideRightButton: any = slidesArrow("#slide-right");
		const slideLeftButton: any = slidesArrow("#slide-left");
		const element: any = slidesArrow(".main-menu > .slide.open");
		const element1: any = slidesArrow(".main-menu > .slide.open > ul");
		if (menuNav && mainContainer1) {
			const marginLeftValue = Math.ceil(
				Number(window.getComputedStyle(menuNav).marginInlineStart.split("px")[0])
			);
			const marginRightValue = Math.ceil(
				Number(window.getComputedStyle(menuNav).marginInlineEnd.split("px")[0])
			);
			const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
			let mainContainer1Width = mainContainer1.offsetWidth;

			if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
				if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
					if (Math.abs(check) > Math.abs(marginLeftValue)) {
						menuNav.style.marginInlineEnd = "0";

						if (!(Math.abs(check) > Math.abs(marginLeftValue) + mainContainer1Width)) {
							mainContainer1Width = Math.abs(check) - Math.abs(marginLeftValue);

							if (slideRightButton) {
								slideRightButton.classList.add("hidden");
							}
						}

						menuNav.style.marginInlineStart =
							(Number(menuNav.style.marginInlineStart.split("px")[0]) -
								Math.abs(mainContainer1Width)) +
							"px";

						if (slideRightButton) {
							slideRightButton.classList.remove("hidden");
						}
					}
				} else {
					if (Math.abs(check) > Math.abs(marginRightValue)) {
						menuNav.style.marginInlineEnd = "0";

						if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
							mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
							if (slideRightButton) {
								slideRightButton.classList.add("hidden");
							}
						}

						menuNav.style.marginInlineStart =
							(Number(menuNav.style.marginInlineStart.split("px")[0]) -
								Math.abs(mainContainer1Width)) +
							"px";
						if (slideLeftButton) {
							slideLeftButton.classList.remove("hidden");
						}
					}
				}
			}


			if (element) {
				element.classList.remove("active");
			}
			if (element1) {
				element1.style.display = "none";
			}
		}

		switcherArrowFn();
	}

	function slideLeft() {
		const menuNav: any = slidesArrow(".main-menu");
		const mainContainer1: any = slidesArrow(".main-sidebar");
		const slideRightButton: any = slidesArrow("#slide-right");
		const slideLeftButton: any = slidesArrow("#slide-left");
		const element: any = slidesArrow(".main-menu > .slide.open");
		const element1: any = slidesArrow(".main-menu > .slide.open > ul");
		if (menuNav && mainContainer1) {
			const marginLeftValue = Math.ceil(
				Number(window.getComputedStyle(menuNav).marginInlineStart.split("px")[0])
			);
			const marginRightValue = Math.ceil(
				Number(window.getComputedStyle(menuNav).marginInlineEnd.split("px")[0])
			);
			const check: any = menuNav.scrollWidth - mainContainer1.offsetWidth;
			let mainContainer1Width = mainContainer1.offsetWidth;

			if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
				if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
					if (Math.abs(check) <= Math.abs(marginLeftValue)) {
						menuNav.style.marginInlineStart = "0px";
					}
				} else {
					if (Math.abs(check) > Math.abs(marginRightValue)) {
						menuNav.style.marginInlineStart = "0";

						if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
							mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);

							if (slideRightButton) {
								slideRightButton.classList.add("hidden");
							}
						}

						menuNav.style.marginInlineStart =
							(Number(menuNav.style.marginInlineStart.split("px")[0]) -
								Math.abs(mainContainer1Width)) +
							"px";

						if (slideLeftButton) {
							slideLeftButton.classList.remove("hidden");
						}
					}
				}
			}

			if (element) {
				element.classList.remove("active");
			}
			if (element1) {
				element1.style.display = "none";
			}
		}

		switcherArrowFn();
	}

	const level = 0;
	let hasParent = false;
	let hasParentLevel = 0;

	function setSubmenu(event: any, targetObject: any, MENUITEMS = menuitems) {
		const theme = getState();;
		if (!event?.ctrlKey) {
			for (const item of MENUITEMS) {
				if (item === targetObject) {
					item.active = true;
					item.selected = true;
					setMenuAncestorsActive(item);
				} else if (!item.active && !item.selected) {
					item.active = false; // Set active to false for items not matching the target
					item.selected = false; // Set active to false for items not matching the target
				} else {
					removeActiveOtherMenus(item);
				}
				if (item.children && item.children.length > 0) {
					setSubmenu(event, targetObject, item.children);
				}
			}

		}

		setMenuitems((arr: any) => [...arr]);
	}
	function getParentObject(obj: any, childObject: any) {
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (typeof obj[key] === "object" && JSON.stringify(obj[key]) === JSON.stringify(childObject)) {
					return obj; // Return the parent object
				}
				if (typeof obj[key] === "object") {
					const parentObject: any = getParentObject(obj[key], childObject);
					if (parentObject !== null) {
						return parentObject;
					}
				}
			}
		}
		return null; // Object not found
	}
	function setMenuAncestorsActive(targetObject: any) {
		const parent = getParentObject(menuitems, targetObject);
		const theme = getState();
		if (parent) {
			if (hasParentLevel > 2) {
				hasParent = true;
			}
			parent.active = true;
			parent.selected = true;
			hasParentLevel += 1;
			setMenuAncestorsActive(parent);
		}
		else if (!hasParent) {
			if (theme.dataVerticalStyle == "doublemenu") {
				const newState = {
					toggled: "double-menu-close"
				}
				setState(newState)

			}
		}
	}
	function removeActiveOtherMenus(item: any) {
		if (item) {
			if (Array.isArray(item)) {
				for (const val of item) {
					val.active = false;
					val.selected = false;
				}
			}
			item.active = false;
			item.selected = false;

			if (item.children && item.children.length > 0) {
				removeActiveOtherMenus(item.children);
			}
		}
		else {

		}
	}
	//
	function setMenuUsingUrl(currentPath: any) {

		hasParent = false;
		hasParentLevel = 1;
		// Check current url and trigger the setSidemenu method to active the menu.
		const setSubmenuRecursively = (items: any) => {

			items?.forEach((item: any) => {
				if (item.path == "") { }
				else if (item.path === currentPath) {
					setSubmenu(null, item);
				}
				setSubmenuRecursively(item.children);
			});
		};
		setSubmenuRecursively(MENUITEMS);
	}
	const [previousUrl, setPreviousUrl] = useState("/");

	useEffect(() => {
		const currentPath = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

		if (currentPath !== previousUrl) {
			setMenuUsingUrl(currentPath);
			setPreviousUrl(currentPath);
		}
	}, [pathname]);


	//
	function toggleSidemenu(event: any, targetObject: any, MenuItems = menuitems, isChild = false) {
		const theme = getState();
		let element = event.target;

		if (
			(theme.dataNavStyle !== "icon-hover" && theme.dataNavStyle !== "menu-hover") ||
			(window.innerWidth < 992) ||
			(theme.dataNavLayout !== "horizontal" && theme.toggled !== "icon-hover-closed" && theme.toggled !== "menu-hover-closed")
		) {
			for (const item of MenuItems) {
				if (item === targetObject) {
					if (theme.dataVerticalStyle === 'doublemenu') {
						// checking for child in double menu 
						if (isChild) {
							item.active = !item.active; // Children toggle normally
						} else {
							item.active = true; // Parent should always stay active when double menu active
						}
					} else {
						item.active = !item.active; // Regular toggle 
					}

					if (item.active) {
						closeOtherMenus(MenuItems, item);
					} else if (theme.dataVerticalStyle === 'doublemenu') {
						// setState({ ...theme, toggled: "double-menu-close" });
					}

					setAncestorsActive(MenuItems, item);
				} else if (!item.active && theme.dataVerticalStyle !== 'doublemenu') {
					item.active = false;
				}

				if (item.children && item.children.length > 0) {
					toggleSidemenu(event, targetObject, item.children, true); // Always pass isChild = true for recursive
				}
			}

			if (targetObject?.children && targetObject.active) {
				if (theme.dataVerticalStyle === 'doublemenu' && theme.toggled !== 'double-menu-open') {
					setState({ ...theme, toggled: "open" });
				}
			}

			// Directional logic for horizontal layout
			if (
				element &&
				theme.dataNavLayout === 'horizontal' &&
				(theme.dataNavStyle === 'menu-click' || theme.dataNavStyle === 'icon-click')
			) {
				const listItem = element.closest("li");
				if (listItem) {
					const siblingUL = listItem.querySelector("ul");
					let outterUlWidth = 0
					let listItemUL = listItem.closest('ul:not(.main-menu)');
					while (listItemUL) {
						listItemUL = listItemUL.parentElement?.closest('ul:not(.main-menu)');
						if (listItemUL) outterUlWidth += listItemUL.clientWidth;
					}

					if (siblingUL) {
						let siblingULRect = listItem.getBoundingClientRect();
						if (theme.dir === 'rtl') {
							targetObject.dirchange =
								(siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 &&
									outterUlWidth < window.innerWidth &&
									outterUlWidth + siblingULRect.width * 2 < window.innerWidth)
									? true : false;
						} else {
							targetObject.dirchange =
								(outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth &&
									siblingULRect.right >= 0 &&
									outterUlWidth + siblingULRect.width * 2 < window.innerWidth)
									? true : false;
						}
					}
				}
			}
		}

		setMenuitems((arr: any) => [...arr]); // ✅ Triggers re-render
	}

	function setAncestorsActive(MenuItems: any, targetObject: any) {
		const theme = variable;
		const parent = findParent(MenuItems, targetObject);
		if (parent) {
			parent.active = true;
			if (parent.active) {
				const newState = {
					...theme,
					toggled: "double-menu-open"
				}
				setState(newState)
				// setState({ ...theme, toggled: "double-menu-open" });
			}

			setAncestorsActive(MenuItems, parent);
		}
	}

	function closeOtherMenus(MENUITEMS: any, targetObject: any) {
		for (const item of MENUITEMS) {
			if (item !== targetObject) {
				item.active = false;
				if (item.children && item.children.length > 0) {
					closeOtherMenus(item.children, targetObject);
				}
			}
		}
	}

	function findParent(MENUITEMS: any, targetObject: any) {
		for (const item of MENUITEMS) {
			if (item.children && item.children.includes(targetObject)) {
				return item;
			}
			if (item.children && item.children.length > 0) {
				const parent: any = findParent(MENUITEMS = item.children, targetObject);
				if (parent) {
					return parent;
				}
			}
		}
		return null;
	}
	//
	function HoverToggleInnerMenuFn(event: any, item: any) {
		const theme = getState();;
		let element = event.target;
		if (element && theme.dataNavLayout == "horizontal" && (theme.dataNavStyle == "menu-hover" || theme.dataNavStyle == "icon-hover")) {
			const listItem = element.closest("li");
			if (listItem) {
				// Find the first sibling <ul> element
				const siblingUL = listItem.querySelector("ul");
				let outterUlWidth = 0;
				let listItemUL = listItem.closest("ul:not(.main-menu)");
				while (listItemUL) {
					listItemUL = listItemUL.parentElement.closest("ul:not(.main-menu)");
					if (listItemUL) {
						outterUlWidth += listItemUL.clientWidth;
					}
				}
				if (siblingUL) {
					// You've found the sibling <ul> element
					let siblingULRect = listItem.getBoundingClientRect();
					if (theme.dir == "rtl") {
						if ((siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 && outterUlWidth < window.innerWidth) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
							item.dirchange = true;
						} else {
							item.dirchange = false;
						}
					} else {
						if ((outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth && siblingULRect.right >= 0) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
							item.dirchange = true;
						} else {
							item.dirchange = false;
						}
					}
				}
			}
		}
	}

	//to open menu
	const Sideclick = () => {
		if (window.innerWidth > 992) {
			let html = document.documentElement;
			if (html.getAttribute("data-icon-overlay") != "open") {
				html.setAttribute("data-icon-overlay", "open");
			}

		}
	};

	const handleClick = (event: any) => {
		// Your logic here
		event.preventDefault(); // Prevents the default anchor behavior (navigation)
		// ... other logic you want to perform on click
	};
	const toggleTheme = () => {
		const currentTheme = getState();
		const newState = {
			dataThemeMode: currentTheme.dataThemeMode === 'dark' ? 'light' : 'dark',
			dataHeaderStyles: currentTheme.dataThemeMode === 'transparent' ? 'light' : 'transparent',
			dataMenuStyles: currentTheme.dataThemeMode === 'transparent' ? 'light' : 'transparent',
		}
		setState(newState)
		if (newState.dataThemeMode != 'dark') {
			const newState = {
				bodyBg: '',
				lightRgb: '',
				bodyBg2: '',
				inputBorder: '',
				formControlBg: '',
				gray: '',
			}
			setState(newState)
			localStorage.setItem("vyzorlightTheme", "light");
			localStorage.removeItem("vyzordarkTheme");
			localStorage.removeItem("vyzormenu");
			localStorage.removeItem("vyzorheader");
			localStorage.removeItem("bodyBg");
			localStorage.removeItem("bodyBg2");
			localStorage.removeItem("bgImg");
		}
		else {
			localStorage.setItem("vyzordarkTheme", "dark");
			localStorage.removeItem("vyzorlightTheme");
			localStorage.removeItem("vyzormenu");
			localStorage.removeItem("vyzorheader");
			localStorage.removeItem("bodyBg");
			localStorage.removeItem("bodyBg2");
			localStorage.removeItem("inputBorder");
			localStorage.removeItem("lightRgb");
			localStorage.removeItem("formControlBg");
			localStorage.removeItem("gray");
		}
	}
	return (
		<Fragment>
			<div id="responsive-overlay" ref={overlayRef} onClick={() => { menuClose(); }}></div>
			{/* <!-- Start::app-sidebar --> */}

			<aside className="app-sidebar sticky" id="sidebar" onMouseOver={Onhover} onMouseLeave={Outhover} >

				{/* <!-- Start::main-sidebar-header --> */}

				<div className="main-sidebar-header">
					<Link scroll={false} href="/dashboards/crm/dashboard" className="header-logo">
						<Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/crm-logo-2.png`} alt="logo" className="desktop-logo" />
						<Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/crm-logo-2.png`} alt="logo" className="toggle-dark" />
						<Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/crm-logo-2.png`} alt="logo" className="desktop-dark" />
						<Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/crm-logo-2.png`} alt="logo" className="toggle-logo" />
					</Link>
				</div>
				{/* <!-- End::main-sidebar-header --> */}

				{/* <!-- Start::main-sidebar --> */}

				<SimpleBar className="main-sidebar" id="sidebar-scroll">

					{/* <!-- Start::nav --> */}
					<nav className="main-menu-container nav nav-pills flex-column sub-open">
						<div className="slide-left" id="slide-left" onClick={slideLeft} >
							<svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg>
							<Image src="../../../public/assets/images/crm-logo-2.png" alt="logo" height="24" width="24"  />
						</div>
						<ul className="main-menu" onClick={() => Sideclick()}>

							{/* <!-- Start::slide --> */}

							{MENUITEMS.map((list: any, index: any) => (
								<Fragment key={index}>


									<li className={` ${list.menutitle ? "slide__category" : ""} ${list.type === 'link' ? 'slide' : ''} ${list.type === 'sub' ? 'slide has-sub' : ''} ${list.active ? 'open' : ''}  ${list?.selected ? 'active' : ''}  `}>
										{list.menutitle ?
											<span className='category-name'>{list.menutitle}</span>
											:
											""}
										{list.type === "link" ?
											<Link href={list.path} className={`side-menu__item  ${list.selected ? 'active' : ''}`}>
												<span className={`${local_varaiable?.dataVerticalStyle == 'doublemenu' ? '' : 'd-none'}`}>
													<SpkTooltips placement="auto" title={list.title}>
														<div>{list.icon}</div>
													</SpkTooltips>
												</span>
												{local_varaiable.dataVerticalStyle != "doublemenu" ? list.icon : ""}
												<span className="side-menu__label">{list.title} {list.badgetxt ? (<span className={list.class}>{list.badgetxt}</span>
												) : (
													""
												)}
												</span>
											</Link>
											: ""}
										{list.type === "empty" ?
											<Link href="#!" className='side-menu__item' onClick={handleClick} >{list.icon}<span className=""> {list.title} {list.badgetxt ? (
												<span className={list.class}>{list.badgetxt} </span>
											) : (
												""
											)}
											</span>
											</Link>
											: ""}
										{list.children && <Menuloop MenuItems={list} level={level + 1} handleToMenu={toggleSidemenu} HoverToggleInnerMenuFn={HoverToggleInnerMenuFn} />}
									</li>


								</Fragment>
							))}
							<li >
								<ul className="slide-menu child1 doublemenu_slide-menu d-none">
									<li className="text-center p-3 text-fixed-white">
										<div className="doublemenu_slide-menu-background">
											<Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/media/backgrounds/13.png`} alt="" className="" />

										</div>
										<div className="d-flex flex-column align-items-center justify-content-between h-100">
											<div className="fs-15 fw-medium">Dashboard AI Helper</div>
											<div>
												<span className="avatar avatar-lg p-1">
													<Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/media/media-80.png`} alt="" className="" />

													<span className="top-right"></span>
													<span className="bottom-right"></span>
												</span>
											</div>
											<div className="d-grid w-100">
												<button className="btn btn-white border-0">Try Now</button>
											</div>
										</div>
									</li>
								</ul>
							</li>

							{/* <!-- End::slide --> */}

						</ul>

						

						<div className="slide-right" id="slide-right" onClick={slideRight} >
							<svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
								<path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
							</svg>
						</div>
					</nav>

					{/* <!-- End::nav --> */}

				</SimpleBar>

				{/* <!-- End::main-sidebar --> */}

			</aside>

			{/* <!-- End::app-sidebar --> */}

		</Fragment>
	)
}

export default Sidebar