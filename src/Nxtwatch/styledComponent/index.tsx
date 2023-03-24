import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const AppDiv = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.globalBackground};
`;

// common components styling

// logo image

export const ImgDiv = styled.div<{ css: string }>`
  display: flex;
  width: 180px;
  height: 45px;
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 40px;
  }
`;

export const Logoimg = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: middle;
`;

export const HeaderStyle = `
display:flex;
width:130px;
height:35px;
`;

// Header

export const HeaderDiv = styled.div`
  height: 35px;
  padding: 20px 30px 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const ThemeImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 45px;
  @media screen and (max-width: 576px) {
    width: auto;
  }
`;

export const DarkImg = styled.img`
  display: ${(props) => props.theme.DarkImgDisplay};
  cursor: pointer;
  height: 30px;
  vertical-align: middle;
`;

export const LightImg = styled.img`
  display: ${(props) => props.theme.LightImgDisplay};
  cursor: pointer;
  height: 45px;
  vertical-align: middle;
`;

export const Profile = styled.div`
  margin: 0 20px;
  @media screen and (max-width: 576px) {
    margin: 0;
  }
`;

export const ProfileImg = styled.img`
  height: 35px;
  width: 35px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuImg = styled.img`
  margin-top: 5px;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Logoutimg = styled.img`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const LogoutBtn = styled.button`
  cursor: pointer;
  padding: 5px 15px;
  background-color: transparent;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.LogoutBtn};
  color: ${(props) => props.theme.LogoutBtn};
  width: 95.5px;
  height: 34px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// Sidebar

export const SideBarDiv = styled.div`
  position: relative;
  left: 0;
  top: 0;
  padding: 20px 0 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 230px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Icon = styled.i`
  width: 20px;
  margin-right: 10px;
  color: #606060;
  border-radius: 1px solid red;
`;

export const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color};
  padding: 10px 30px;
  background-color: transparent;
  height: 22px;
`;

export const LinkStyle = styled(NavLink)`
  text-decoration: none;
  &.active .childDiv {
    background-color: ${(props) => props.theme.LINK_BGCOLOR};
  }

  &.active .childDiv i {
    color: red;
  }
`;

export const ContactSupport = styled.div`
  padding: 0 30px;
  color: ${(props) => props.theme.ContactSupport};
  font-weight: 500;
  line-height: 1.5;
`;

export const ContactContainer = styled.div`
  margin: 20px 0;
`;

export const ContactImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const ContactDescription = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
`;

// sideBar subheader

export const SubHeaderContainer = styled.div`
  height: 125px;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.SubHeaderContainer};
  display: flex;
  align-items: center;
  padding-left: 50px;
  font-size: 28px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    height: 100px;
    padding-left: 50px;
  }
  @media screen and (max-width: 576px) {
    font-size: 20px;
    font-weight: 500;
    height: 75px;
    padding-left: 30px;
  }
`;

export const SubHeaderIconContainer = styled.div`
  color: #ff0000;
  background-color: ${(props) => props.theme.SubHeaderIconContainer};
  border-radius: 50px;
  height: 75px;
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  @media screen and (max-width: 576px) {
    height: 50px;
    width: 50px;
  }
`;

// TrendingSavedUI

export const TrendingSavedUIContainer = styled.div`
  padding: 40px 50px;
  @media screen and (max-width: 768px) {
    padding: 30px 40px;
  }
  @media screen and (max-width: 576px) {
    padding: 25px 15px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    margin-bottom: 35px;
  }
`;

export const ThumnUrlImg = styled.img`
  height: 200px;
  width: 350px;
  margin-right: 20px;
  @media screen and (max-width: 576px) {
    width: 100vw;
    height: 225px;
    margin: 0 -20px;
  }
`;

export const ChennelInfo = styled.div`
  display: flex;
  padding: 10px 0 0;
`;

export const ToHideProfile = styled.div`
  display: none;
  margin-right: 10px;
  @media screen and (max-width: 576px) {
    display: inline-block;
  }
`;

export const DotUpper = styled.div`
  display: none;
  @media screen and (max-width: 576px) {
    display: inline-block;
  }
`;

export const VideoTitleStyle = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.25;
  margin: 5px 0 10px;
  color: ${(props) => props.theme.color};
  @media screen and (max-width: 576px) {
    margin: 0 0 5px;
    font-weight: 400;
    font-size: 16px;
  }
`;

export const VideoCardData = styled.div`
  color: ${(props) => props.theme.SmallTextColor};
  line-height: 1.75;
  font-size: 14px;
  @media screen and (max-width: 576px) {
    display: flex;
    align-items: center;
  }
`;

export const ViewsandTime = styled.div`
  display: flex;
  align-items: center;
`;

// LoginRoute styling

export const LoginWrapper = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.LoginWrapper};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginDiv = styled.div`
  width: 350px;
  height: 475px;
  background-color: ${(props) => props.theme.rcolor};
  padding: 0 50px;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    margin: 0 20px;
  }
`;

export const LanguageDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #5692ec;
  font-size: 14px;
  margin-top: 10px;
`;

export const LogoImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 60px;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.upperChildTextColor};
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: 600;
  height: 16px;
`;

export const Input = styled.input`
  padding: 10px 15px;
  font-size: 14px;
  border: 1px solid #e2e8f0;
  outline: none;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: transparent;
  color: ${(props) => props.theme.InputColor};
`;

export const UserInput = styled(Input)`
  color: #000;
  &:focus {
    caret-color: #e2e8f0;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ShowDiv = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color};
  height: 22px;
`;

export const Check = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 10px;
`;

export const LoginBtn = styled.button`
  background-color: #3b82f6;
  color: #fff;
  font-size: 16px;
  width: 100%;
  height: 40px;
  margin: 40px 0 0;
  border: none;
  border-radius: 10px;
`;

export const ErrorP = styled.p`
  color: red;
  margin: 0;
`;

// Home Route Styling

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`;

export const SideWithContentContainer = styled.div`
  display: flex;
  height: calc(100% - 75px);
`;

export const SideContentContainer = styled.div`
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background: #cccccc;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #909090;
  }
  overflow-y: auto;
  height: calc(100vh - 78px);
  width: calc(100% - 230px);
  background-color: ${(props) => props.theme.SideContentContainerBGColor};
  color: white;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const HeaderImage = styled.div`
  height: 202px;
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  background-size: cover;
  position: center;
  color: black;
  padding: 30px;
`;

export const ImgStyle = styled.img`
  display: flex;
  width: 150px;
  height: 35px;
  margin-bottom: 35px;
`;

export const ContentDiv = styled.div`
  max-width: 400px;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 35px;
`;

export const GetItNowBtn = styled.button`
  padding: 10px 18px;
  background-color: transparent;
  border: 1px solid #000;
  font-size: 14px;
  font-weight: 500;
  width: 121px;
  height: 41px;
`;

export const RemoveImg = styled.img`
  vertical-align: middle;
  width: 15px;
  height: 15px;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchVideoListContainer = styled.div`
  padding: 20px;
  @media screen and (max-width: 576px) {
    padding: 20px 0;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  @media screen and (max-width: 576px) {
    padding: 0 20px;
  }
`;

export const SearchInput = styled.input`
  color: #909090;
  width: 400px;
  padding: 5px 10px;
  outline: none;
  background-color: ${(props) => props.theme.SearchInputBGColor};
  border: 1px solid #909090;
`;

export const SearchImg = styled.i`
  cursor: pointer;
  color: #909090;
  padding: 10px 30px;
  border: 1px solid #909090;
  border-left: 0;
  background-color: ${(props) => props.theme.SearchImgBGColor};
`;

// Home video Card

export const HomeLoaderContianer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  @media screen and (max-width: 576px) {
    height: 400px;
  }
`;

export const AllCardContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 576px) {
    max-width: 576px;
  }
`;

export const VideoLink = styled(Link)`
  text-decoration: none;
`;

export const Card = styled.div`
  color: ${(props) => props.theme.color};
  width: 290px;
  height: 340px;
  @media screen and (max-width: 768px) {
    width: 350px;
  }
  @media screen and (max-width: 576px) {
    width: 100vw;
  }
`;

export const VideoDataContainer = styled.div`
  display: flex;
  width: 100%;
  font-size: 16px;
  line-height: 1.5;
  @media screen and (max-width: 576px) {
    padding: 0 20px;
  }
`;

export const ThumbUrl = styled.img`
  width: 100%;
  vertical-align: middle;
  margin-bottom: 10px;
  @media screen and (max-width: 576px) {
    height: 194px;
  }
`;

export const ChannelProfileContainer = styled.div`
  margin-right: 10px;
`;

export const ChannelProfile = styled.img`
  width: 40px;
`;

export const DataContainer = styled.div`
  color: ${(props) => props.theme.childtextColor};
  display: flex;
  align-items: center;
`;

export const Dot = styled.div`
  background-color: ${(props) => props.theme.childtextColor};
  height: 4px;
  width: 4px;
  border-radius: 20px;
  margin: 0 10px;
`;

// Home No Search

export const NoSearchDiv = styled.div`
  padding: 40px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 576px) {
    padding: 30px 20px 0;
  }
`;

export const NoSearchImg = styled.img`
  height: 300px;
  width: 400px;
  @media screen and (max-width: 576px) {
    height: 200px;
    width: 300px;
  }
`;

export const NoSearchTitle = styled.div`
  font-size: 24px;
  height: 32px;
  font-weight: 500;
  color: ${(props) => props.theme.color};
  margin: 30px 0 25px;
  @media screen and (max-width: 576px) {
    margin: 25px 0 20px;
    font-size: 22px;
  }
`;

export const NoSearchContent = styled.div`
  height: 24px;
  color: ${(props) => props.theme.childtextColor};
  margin-bottom: 25px;
  text-align: center;
  line-height: 1.5;
  @media screen and (max-width: 576px) {
    margin-bottom: 20px;
    font-size: 18px;
  }
`;

export const RetryBtn = styled.button`
  background-color: #4f46e5;
  padding: 12px 25px;
  color: #fff;
  border-radius: 5px;
  border: 0;
  width: 120px;
  height: 42px;
`;

// video Details items

export const VideoDetailContainer = styled.div`
  padding: 20px;
`;

export const VideoFetchFailureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 850px;
`;

export const VideoLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 138px);
  width: 900px;
  position: absolute;
`;

export const VideoPlayer = styled.div`
  height: 500px;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 99vw;
    height: 350px;
    margin: 0 -20px;
  }
  @media screen and (max-width: 576px) {
    height: 300px;
  }
`;

export const VideoTitle = styled.div`
  margin: 30px 0;
  color: ${(props) => props.theme.color};
  font-size: 16px;
`;

export const VideoDetailIntractionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const VideoIntraction = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  width: 225px;
  color: ${(props) => props.theme.childtextColor};
  @media screen and (max-width: 768px) {
    margin: 20px 0 0;
  }
`;

export const BlanklineDiv = styled.div`
  background-color: ${(props) => props.theme.BLANK_LINE};
  height: 1.5px;
  border-radius: 5px;
  margin: 30px 0;
`;

export const VideoChannelContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const ChannelName = styled.div`
  color: ${(props) => props.theme.color};
  margin-bottom: 10px;
`;

export const ChannelSubscriber = styled.div`
  color: ${(props) => props.theme.childtextColor};
  font-size: 12px;
  height: 16px;
`;

export const VideoDescriptionContainer = styled.div`
  color: ${(props) => props.theme.upperChildTextColor};
  line-height: 1.5;
  font-size: 14px;
  padding-left: 50px;
  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

// Trending

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 125px);
`;

// GameRoute

export const GameVideoLink = styled(Link)`
  text-decoration: none;
  width: 33%;
  @media screen and (max-width: 576px) {
    width: 50%;
  }
`;

export const GameRouteContainer = styled.div`
  display: flex;
  padding: 40px 50px 0;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 576px) {
    padding: 20px 20px 0;
  }
`;

export const GameCard = styled.div`
  margin-bottom: 50px;
  width: 100%;
`;

export const GameDataCardDiv = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  line-height: 1.5;
  color: ${(props) => props.theme.color};
`;

export const GameThumbUrl = styled.img`
  height: 375px;
  width: 95%;
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    height: 250px;
  }
`;

export const ShortDataGame = styled.div`
  display: flex;
  color: ${(props) => props.theme.childtextColor};
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const ShortDataGamUpper = styled.div`
  margin-right: 5px;
`;

// No Saved Video Route

export const NoSavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const NoSavedImg = styled.img`
  height: 500px;
  width: 600px;
  @media screen and (max-width: 576px) {
    height: 300px;
    width: 350px;
  }
`;

export const NoSavedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NoSavedContentTitle = styled.div`
  margin: 50px 0 40px;
  height: 34px;
  font-size: 26px;
  font-weight: 500;
  color: ${(props) => props.theme.color};
`;

export const NoSavedContentDescription = styled.div`
  height: 22px;
  font-size: 16px;
  color: ${(props) => props.theme.upperChildTextColor};
`;
