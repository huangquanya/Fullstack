import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Container, TopDesc, Menu,
    //  SongList, SongItem 
    } from './style';
import { CSSTransition } from 'react-transition-group';
import Header from './../../baseUI/header/index';
import Scroll from '../../baseUI/scroll/index';
import { getCount,isEmptyObject, getName } from '../../api/utils';
import { HEADER_HEIGHT } from './../../api/config';
import style from "../../assets/global-style";
import { connect } from 'react-redux';
import { getAlbumList, changeEnterLoading } from './store/actionCreators';
import Loading from '../../baseUI/loading/index';
import SongsList from '../SongList';
import MusicNote from "../../baseUI/music-note/index";


//mock 数据
// const currentAlbum = {
//     creator: {
//         avatarUrl: "http://p1.music.126.net/O9zV6jeawR43pfiK2JaVSw==/109951164232128905.jpg",
//         nickname: "浪里推舟"
//     },
//     coverImgUrl: "http://p2.music.126.net/ecpXnH13-0QWpWQmqlR0gw==/109951164354856816.jpg",
//     subscribedCount: 2010711,
//     name: "听完就睡，耳机是天黑以后柔软的梦境",
//     tracks: [
//         {
//             name: "我真的受伤了",
//             ar: [{ name: "张学友" }, { name: "周华健" }],
//             al: {
//                 name: "学友 热"
//             }
//         },
//         {
//             name: "我真的受伤了",
//             ar: [{ name: "张学友" }, { name: "周华健" }],
//             al: {
//                 name: "学友 热"
//             }
//         },
//         {
//             name: "我真的受伤了",
//             ar: [{ name: "张学友" }, { name: "周华健" }],
//             al: {
//                 name: "学友 热"
//             }
//         },
//         {
//             name: "我真的受伤了",
//             ar: [{ name: "张学友" }, { name: "周华健" }],
//             al: {
//                 name: "学友 热"
//             }
//         },
//         {
//             name: "我真的受伤了",
//             ar: [{ name: "张学友" }, { name: "周华健" }],
//             al: {
//                 name: "学友 热"
//             }
//         },
//         {
//             name: "我真的受伤了",
//             ar: [{ name: "张学友" }, { name: "周华健" }],
//             al: {
//                 name: "学友 热"
//             }
//         },
//         {
//             name: "我真的受伤了",
//             ar: [{ name: "张学友" }, { name: "周华健" }],
//             al: {
//                 name: "学友 热"
//             }
//         },
//         {
//             name: "我真的受伤了",
//             ar: [{ name: "张学友" }, { name: "周华健" }],
//             al: {
//                 name: "学友 热"
//             }
//         },
//         {
//             name: "我真的受伤了",
//             ar: [{ name: "张学友" }, { name: "周华健" }],
//             al: {
//                 name: "学友 热"
//             }
//         },
//         {
//             name: "我真的受伤了",
//             ar: [{ name: "张学友" }, { name: "周华健" }],
//             al: {
//                 name: "学友 热"
//             }
//         },
//     ]
// }

function Album(props) {
    const [showStatus, setShowStatus] = useState(true);
    const [title, setTitle] = useState("歌单");
    const [isMarquee, setIsMarquee] = useState(false);// 是否跑马灯
    const headerEl = useRef();
    const musicNoteRef = useRef ();

    const id = props.match.params.id;

    const {getAlbumDataDispatch} = props
    const {enterLoading,currentAlbum:currentAlbumImmutable} = props

    useEffect(() => {
        getAlbumDataDispatch(id)
    }, [getAlbumDataDispatch,id])

   
    let currentAlbum = currentAlbumImmutable.toJS();

    const musicAnimation = (x, y) => {
        musicNoteRef.current.startAnimation ({ x, y });
      };

    const handleBack = useCallback(() => {
        setShowStatus(false);
    },[]);



    const handleScroll = useCallback((pos) => {
        let minScrollY = -HEADER_HEIGHT;
        let percent = Math.abs(pos.y / minScrollY);
        let headerDom = headerEl.current;
        // 滑过顶部的高度开始变化
        if (pos.y < minScrollY) {
            headerDom.style.backgroundColor = style["theme-color"];
            headerDom.style.opacity = Math.min(1, (percent - 1) / 2);
            setTitle(currentAlbum.name);
            setIsMarquee(true);
        } else {
            headerDom.style.backgroundColor = "";
            headerDom.style.opacity = 1;
            setTitle("歌单");
            setIsMarquee(false);
        }
    },[currentAlbum]);

    const renderTopDesc = ()=>{
        return(
            <TopDesc background={currentAlbum.coverImgUrl}>
                            <div className="background">
                                <div className="filter"></div>
                            </div>
                            <div className="img_wrapper">
                                <div className="decorate"></div>
                                <img src={currentAlbum.coverImgUrl} alt="" />
                                <div className="play_count">
                                    <i className="iconfont play">&#xe885;</i>
                                    <span className="count">{Math.floor(currentAlbum.subscribedCount / 1000) / 10} 万 </span>
                                </div>
                            </div>
                            <div className="desc_wrapper">
                                <div className="title">{currentAlbum.name}</div>
                                <div className="person">
                                    <div className="avatar">
                                        <img src={currentAlbum.creator.avatarUrl} alt="" />
                                    </div>
                                    <div className="name">{currentAlbum.creator.nickname}</div>
                                </div>
                            </div>
                        </TopDesc>
        )
    }

    const renderMenu = () =>{
        return(
            <Menu>
                            <div>
                                <i className="iconfont">&#xe6ad;</i>
                                评论
                            </div>
                            <div>
                                <i className="iconfont">&#xe86f;</i>
                                点赞
                            </div>
                            <div>
                                <i className="iconfont">&#xe62d;</i>
                                收藏
                            </div>
                            <div>
                                <i className="iconfont">&#xe606;</i>
                                更多
                            </div>
                        </Menu>
        )
    }

    // const renderSongList = () =>(
    //     <SongList>
    //                         <div className="first_line">
    //                             <div className="play_all">
    //                                 <i className="iconfont">&#xe6e3;</i>
    //                                 <span > 播放全部 <span className="sum">(共 {currentAlbum.tracks.length} 首)</span></span>
    //                             </div>
    //                             <div className="add_list">
    //                                 <i className="iconfont">&#xe62d;</i>
    //                                 <span > 收藏 ({getCount(currentAlbum.subscribedCount)})</span>
    //                             </div>
    //                         </div>
    //                         <SongItem>
    //                             {
    //                                 currentAlbum.tracks.map((item, index) => {
    //                                     return (
    //                                         <li key={index}>
    //                                             <span className="index">{index + 1}</span>
    //                                             <div className="info">
    //                                                 <span>{item.name}</span>
    //                                                 <span>
    //                                                     {getName(item.ar)} - {item.al.name}
    //                                                 </span>
    //                                             </div>
    //                                         </li>
    //                                     )
    //                                 })
    //                             }
    //                         </SongItem>
    //                     </SongList>
    // )


    return (
        <CSSTransition
            in={showStatus}
            timeout={500}
            classNames="fly"
            appear={true}
            unmountOnExit
            onExited={props.history.goBack}
        >
            <Container>
                <Header ref={headerEl} title={title} handleClick={handleBack} isMarquee={isMarquee} ></Header>
                {
                    !isEmptyObject (currentAlbum) ? (
                    
                <Scroll bounceTop={false} onScroll={handleScroll}>
                    <div>
                        {renderTopDesc()}
                        {renderMenu()}
                        {/* {renderSongList()} */}
                        <SongsList
                            songs={currentAlbum.tracks}
                            showCollect={true}
                            collectCount={currentAlbum.subscribedCount}
                            musicAnimation={musicAnimation}
                        ></SongsList>
                    </div>
                </Scroll>) : null
                }
                { enterLoading ? <Loading></Loading> : null}
                <MusicNote ref={musicNoteRef}></MusicNote>
            </Container>
        </CSSTransition>
    )

}
// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state) => ({
    currentAlbum: state.getIn(['album', 'currentAlbum']),
    enterLoading: state.getIn(['album', 'enterLoading']),
});
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => {
    return {
        getAlbumDataDispatch(id) {
            dispatch(changeEnterLoading(true));
            dispatch(getAlbumList(id));
        },
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Album));