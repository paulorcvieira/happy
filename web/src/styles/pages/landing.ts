import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import bgImg from '../../assets/images/bg.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    329.54deg,
    var(--color-blue-400),
    var(--color-blue-600) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 680px;

  /* display: flex; */
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  background: url(${bgImg}) no-repeat 80% center;
`;

export const Logo = styled.img``;

export const Content = styled.main`
  margin-top: 20%;
  max-width: 350px;
`;

export const Title = styled.h1`
  font-size: 76px;
  font-weight: 900;
  line-height: 70px;
`;

export const Description = styled.p`
  margin-top: 40px;
  font-size: 24px;
  line-height: 34px;
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;
`;

export const City = styled.strong`
  font-weight: 800;
`;

export const State = styled.span`
  font-size: 20px;
`;

export const EnterApp = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;
  background: var(--color-yellow-300);
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.3s;

  &:hover {
    background: var(--color-blue-200);
  }
`;

export const EnterAppIcon = styled(FiArrowRight)`
  width: 26px;
  height: 26px;
  color: rgba(0, 0, 0, 0.6);
`;
