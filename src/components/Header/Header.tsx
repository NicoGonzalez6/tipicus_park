import styled from 'styled-components';
import Logo from '../../assets/Tipicus/Logo-tipicus-azul.png';
import { FaBars } from 'react-icons/fa';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navigationLinks } from '../../utils/navigation';

const Header = (): JSX.Element => {
	const linksContainer = useRef<any>();
	const linksHeight = useRef<any>(null);

	const [show, setShow] = useState<boolean>(false);

	const showHandler = () => {
		setShow(!show);
	};

	useEffect(() => {
		const links = linksHeight?.current?.getBoundingClientRect().height;
		if (show) {
			linksContainer.current.style.height = `${links}px`;
		} else {
			linksContainer.current.style.height = `0px`;
		}
	}, [show]);

	return (
		<StyledHeader>
			<div className='nav-center'>
				<div className='logo-container'>
					<img src={Logo} alt='Logo del parque' />
					<FaBars onClick={showHandler} />
				</div>
				<div className='links-container' ref={linksContainer}>
					<ul ref={linksHeight}>
						{navigationLinks.map((link, i) => {
							return (
								<li key={i}>
									<Link to={link.link}>{link.label}</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</StyledHeader>
	);
};

export default Header;

const StyledHeader = styled.header`
	padding: ${({ theme }) => theme.container_spacing.container};
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	width: ${({ theme }) => theme.container_widths.full};
	background-color: ${({ theme }) => theme.white_primary};

	.nav-center {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 4rem;
		width: 100%;

		@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			flex-direction: row;
			width: ${({ theme }) => theme.container_widths.sm};
			margin: 0 auto;
		}

		@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
			width: ${({ theme }) => theme.container_widths.md};
			margin: 0 auto;
		}

		@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			width: ${({ theme }) => theme.container_widths.lg};
			margin: 0 auto;
		}

		.logo-container {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			min-height: 4rem;

			@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
				width: 50%;
				svg {
					display: none;
				}
			}

			img {
				width: 130px;
				display: block;
				object-fit: cover;
			}

			svg {
				color: ${({ theme }) => theme.primary};
				font-size: 26px;
				cursor: pointer;
			}
		}

		.links-container {
			overflow: hidden;
			transition: ${({ theme }) => theme.transitions.md};

			@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
				width: 50%;
				height: auto !important;
			}

			@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				width: 45%;
				margin: 0 auto;
			}

			@media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
				width: 40%;
				margin: 0 auto;
			}

			ul {
				display: flex;
				flex-direction: column;
				padding: ${({ theme }) => theme.spacing.sm} 0px;
				height: auto;

				@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					height: 100%;
				}

				li {
					a {
						color: ${({ theme }) => theme.primary};
						display: block;
						width: 100%;
						height: 100%;

						&:hover {
							color: ${({ theme }) => theme.white_primary};
						}
					}

					padding: ${({ theme }) => theme.spacing.sm} 0px;
					display: block;
					cursor: pointer;
					color: ${({ theme }) => theme.primary};
					transition: ${({ theme }) => theme.transitions.md};

					&:hover {
						padding: ${({ theme }) => {
							return `${theme.spacing.sm} ${theme.spacing.md}`;
						}};
						background-color: ${({ theme }) => theme.primary};
						color: ${({ theme }) => theme.white_primary};
					}

					@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
						width: 50%;
						height: auto !important;
						text-align: center;
						padding: 0px;
						position: relative;
						padding-bottom: ${({ theme }) => theme.spacing.sm};

						a {
							&:hover {
								color: ${({ theme }) => theme.primary};
							}
						}

						&::after {
							content: '';
							position: absolute;
							width: 0%;
							bottom: 0;
							height: 2px;
							background-color: ${({ theme }) => theme.primary};
							left: 0;
							transition: ${({ theme }) => theme.transitions.md};
						}

						&:hover {
							padding: 0px;
							padding-bottom: ${({ theme }) => theme.spacing.sm};
							background-color: transparent;
							color: ${({ theme }) => theme.primary};

							&::after {
								width: 100%;
							}
						}
					}
				}
			}
		}
	}
`;
