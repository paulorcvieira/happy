import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;
`;

export const Sidebar = styled.aside`
  width: 440px;
  background: linear-gradient(
    329.54deg,
    var(--color-blue-400),
    var(--color-blue-600) 100%
  );
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header``;

export const LogoMin = styled.img``;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  line-height: 42px;
  margin-top: 64px;
`;

export const Description = styled.p`
  line-height: 28px;
  margin-top: 24px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: 24px;
`;

export const City = styled.strong`
  font-weight: 800;
`;

export const State = styled.span`
  font-weight: 600;
`;

export const MapOrphanages = styled.div`
  width: 100%;
  height: 100%;
`;

export const ChangeViewMapMode = styled.button`
  background: var(--color-yellow-300);
  padding: 10px;
  border-radius: 20px;
  color: var(--color-white-900);
  box-shadow: var(--box-shadow);

  .leaflet-container {
    z-index: 5;
  }
`;

export const AddOrphanage = styled(Link)`
  z-index: 99999;
  position: absolute;

  right: 40px;
  bottom: 40px;

  width: 64px;
  height: 64px;
  background: var(--color-blue-500);
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background 0.3s;

  &:hover {
    background: var(--color-blue-550);
  }
`;

export const AddOrphanageIcon = styled(FiPlus)`
  width: 32px;
  height: 32px;
  color: var(--color-white-900);
`;
