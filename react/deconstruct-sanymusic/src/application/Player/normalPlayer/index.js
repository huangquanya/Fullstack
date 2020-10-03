import React, { useRef, useEffect } from "react";
import { getName } from "../../../api/utils";
import {
    NormalPlayerContainer,
    Top,
    Middle,
    Bottom,
    Operators,
    CDWrapper,
    ProgressWrapper
} from "./style";
import animations from "create-keyframe-animation";
import { prefixStyle, formatPlayTime } from "../../../api/utils";
import { playMode } from '../../../api/config';
import { CSSTransition } from 'react-transition-group';
import ProgressBar from '../../../baseUI/progressBar/index';
import Scroll from "../../../baseUI/scroll";
import { LyricContainer, LyricWrapper } from "./style";


function NormalPlayer(props) {
    const { song, fullScreen, playing, percent, duration, currentTime, mode, currentLineNum, currentPlayingLyric, currentLyric } = props;
    const { toggleFullScreen, clickPlaying, onProgressChange, handlePrev, handleNext, changeMode, togglePlayList } = props;


    const normalPlayerRef = useRef();
    const cdWrapperRef = useRef();
    const transform = prefixStyle("transform");

    const currentState = useRef("");
    const lyricScrollRef = useRef();
    const lyricLineRefs = useRef([]);



    useEffect(() => {
        if (!lyricScrollRef.current) return;
        let bScroll = lyricScrollRef.current.getBScroll();
        if (currentLineNum > 5) {
            // 保持当前歌词在第 5 条的位置
            let lineEl = lyricLineRefs.current[currentLineNum - 5].current;
            bScroll.scrollToElement(lineEl, 1000);
        } else {
            // 当前歌词行数 <=5, 直接滚动到最顶端
            bScroll.scrollTo(0, 0, 1000);
        }
    }, [currentLineNum]);

    // 计算偏移的辅助函数
    const _getPosAndScale = () => {
        const targetWidth = 40;
        const paddingLeft = 40;
        const paddingBottom = 30;
        const paddingTop = 80;
        const width = window.innerWidth * 0.8;
        const scale = targetWidth / width;
        // 两个圆心的横坐标距离和纵坐标距离
        const x = -(window.innerWidth / 2 - paddingLeft);
        const y = window.innerHeight - paddingTop - width / 2 - paddingBottom;
        // console.log(x,y,scale)
        return {
            x,
            y,
            scale
        };
    };

    const enter = () => {
        normalPlayerRef.current.style.display = "block";
        const { x, y, scale } = _getPosAndScale();// 获取 miniPlayer 图片中心相对 normalPlayer 唱片中心的偏移
        let animation = {
            0: {
                transform: `translate3d(${x}px,${y}px,0) scale(${scale})`
            },
            60: {
                transform: `translate3d(0, 0, 0) scale(1.1)`
            },
            100: {
                transform: `translate3d(0, 0, 0) scale(1)`
            }
        };
        animations.registerAnimation({
            name: "move",
            animation,
            presets: {
                duration: 400,
                easing: "linear"
            }
        });
        animations.runAnimation(cdWrapperRef.current, "move");
    };
    const leave = () => {
        if (!cdWrapperRef.current) return;
        const cdWrapperDom = cdWrapperRef.current;
        cdWrapperDom.style.transition = "all 0.4s";
        const { x, y, scale } = _getPosAndScale();
        cdWrapperDom.style[transform] = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    };

    const afterLeave = () => {
        if (!cdWrapperRef.current) return;
        const cdWrapperDom = cdWrapperRef.current;
        cdWrapperDom.style.transition = "";
        cdWrapperDom.style[transform] = "";
        // 一定要注意现在要把 normalPlayer 这个 DOM 给隐藏掉，因为 CSSTransition 的工作只是把动画执行一遍 
        // 不置为 none 现在全屏播放器页面还是存在
        normalPlayerRef.current.style.display = "none";
        currentState.current = "";
    };



    const afterEnter = () => {
        // 进入后解绑帧动画
        const cdWrapperDom = cdWrapperRef.current;
        animations.unregisterAnimation("move");
        cdWrapperDom.style.animation = "";
    };

    const goBack = () => {
        toggleFullScreen(false)
    }

    const toggleCurrentState = () => {
        if (currentState.current !== "lyric") {
            currentState.current = "lyric";
        } else {
            currentState.current = "";
        }
    };


    //getPlayMode方法
    const getPlayMode = () => {
        let content;
        if (mode === playMode.sequence) {
            content = "&#xe625;";
        } else if (mode === playMode.loop) {
            content = "&#xe653;";
        } else {
            content = "&#xe61b;";
        }
        return content;
    };


    return (
        <CSSTransition
            classNames="normal"
            in={fullScreen}
            timeout={400}
            mountOnEnter
            onEnter={enter}
            onEntered={afterEnter}
            onExit={leave}
            onExited={afterLeave}
        >
            <NormalPlayerContainer ref={normalPlayerRef}>
                <div className="background">
                    <img
                        src={song.al.picUrl + "?param=300x300"}
                        width="100%"
                        height="100%"
                        alt="歌曲图片"
                    />
                </div>
                <div className="background layer"></div>
                <Top className="top">
                    <div className="back" onClick={goBack}>
                        <i className="iconfont icon-back">&#xe662;</i>
                    </div>
                    <h1 className="title">{song.name}</h1>
                    <h1 className="subtitle">{getName(song.ar)}</h1>
                </Top>
                <Middle ref={cdWrapperRef} onClick={toggleCurrentState}>
                    <CSSTransition
                        timeout={400}
                        classNames="fade"
                        in={currentState.current !== "lyric"}
                    >
                        <CDWrapper style={{ visibility: currentState.current !== "lyric" ? "visible" : "hidden" }}>
                            {/* // 其余跟以前保持一致 */}
                            <p className="playing_lyric">{currentPlayingLyric}</p>
                        </CDWrapper>
                    </CSSTransition>
                    <CSSTransition
                        timeout={400}
                        classNames="fade"
                        in={currentState.current === "lyric"}
                    >
                        <LyricContainer>
                            <Scroll ref={lyricScrollRef}>
                                <LyricWrapper
                                    style={{ visibility: currentState.current === "lyric" ? "visible" : "hidden" }}
                                    className="lyric_wrapper"
                                >
                                    {
                                        currentLyric
                                            ? currentLyric.lines.map((item, index) => {
                                                // 拿到每一行歌词的 DOM 对象，后面滚动歌词需要！ 
                                                lyricLineRefs.current[index] = React.createRef();
                                                return (
                                                    <p
                                                        className={`text ${currentLineNum === index ? "current" : ""
                                                            }`}
                                                        key={item + index}
                                                        ref={lyricLineRefs.current[index]}
                                                    >
                                                        {item.txt}
                                                    </p>
                                                );
                                            })
                                            : <p className="text pure"> 纯音乐，请欣赏。</p>}
                                </LyricWrapper>
                            </Scroll>
                        </LyricContainer>
                    </CSSTransition>
                </Middle>

                <Bottom className="bottom">
                    <ProgressWrapper>
                        <span className="time time-l">{formatPlayTime(currentTime)}</span>
                        <div className="progress-bar-wrapper">
                            <ProgressBar
                                percent={percent}
                                percentChange={onProgressChange}
                            ></ProgressBar>
                        </div>
                        <div className="time time-r">{formatPlayTime(duration)}</div>
                    </ProgressWrapper>
                    <Operators>
                        {/* //Operator标签下 */}
                        <div className="icon i-left" onClick={changeMode}>
                            <i
                                className="iconfont"
                                dangerouslySetInnerHTML={{ __html: getPlayMode() }}
                            ></i>
                        </div>
                        <div className="icon i-left" onClick={handlePrev}>
                            <i className="iconfont">&#xe6e1;</i>
                        </div>
                        <div className="icon i-center">
                            <i
                                className="iconfont"
                                onClick={e => clickPlaying(e, !playing)}
                                dangerouslySetInnerHTML={{
                                    __html: playing ? "&#xe723;" : "&#xe731;"
                                }}
                            ></i>
                        </div>
                        <div className="icon i-right" onClick={handleNext}>
                            <i className="iconfont">&#xe718;</i>
                        </div>
                        <div className="icon i-right" onClick={() => togglePlayList(true)}>
                            <i className="iconfont">&#xe640;</i>
                        </div>
                    </Operators>
                </Bottom>
            </NormalPlayerContainer>
        </CSSTransition>
    );
}
export default React.memo(NormalPlayer);