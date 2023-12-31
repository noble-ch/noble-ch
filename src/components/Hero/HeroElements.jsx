/* eslint-disable no-unused-vars */
import styled, { keyframes } from "styled-components";

export const HeroContainer = styled.div`
	padding-right: 0.5rem;
	padding-left: 0.5rem;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	flex-direction: column;
	text-align: center;

	@media (min-width: 576px) {
		max-width: 540px;
	}
	@media (min-width: 768px) {
		max-width: 720px;
	}
	@media (min-width: 992px) {
		max-width: 960px;
	}
	@media (min-width: 1200px) {
		max-width: 1000px;
	}
`;

export const HeroWrapper = styled.div`
	display: flex;
	flex-direction: row;

	@media screen and (max-width: 992px) {
		flex-direction: column;
	}
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;

  h1 {
    font-size: 2.8rem;
    color: #f6f6f6;
    opacity: 0.98;
    font-weight: 400;
  }

  h5 {
    font-size: 1rem;
    color: rgb(199, 199, 201);
    margin: 0px !important;
    font-weight: 400;
  }

  p {
    font-size: 17px;
    color: #f6f6f6;
    opacity: 0.85;
  }

  @media screen and (min-width: 50px) {
    text-align: center;
    align-items: center;
    padding : 0px auto ;
    margin: 0px auto ;

    h5 {
      min-height: 0rem;
  }
`;

const ScrollAnimation = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;
