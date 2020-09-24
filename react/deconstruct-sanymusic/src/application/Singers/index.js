import React, { useState, useCallback, useEffect,useContext } from 'react';
import Horizen from '../../baseUI/horizen-item';
import Scroll from '../../baseUI/scroll'
import LazyLoad, { forceCheck } from 'react-lazyload'
import { categoryTypes, alphaTypes } from '../../api/config';
import { NavContainer, ListContainer, ListItem, List } from "./style";
import {
    getSingerList,
    getHotSingerList,
    changeEnterLoading,
    changePageCount,
    changePullUpLoading,
    changePullDownLoading,
    refreshMoreSingerList,
    refreshMoreHotSingerList
} from './store/actionCreators';
import { connect } from 'react-redux';
import Loading from '../../baseUI/loading';
import {CHANGE_ALPHA,CHANGE_CATEGORY,CategoryDataContext} from './data'

//mock 数据
// const singerList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
//     return {
//         picUrl: "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
//         name: "隔壁老樊",
//         accountId: 277313426,
//     }
// });

function Singers(props) {
    // let [category, setCategory] = useState('');
    // let [alpha, setAlpha] = useState('');
    const { data, dispatch } = useContext(CategoryDataContext);
    // 拿到 category 和 alpha 的值
    const { category, alpha } = data.toJS();

    const { singerList, enterLoading, pullUpLoading, pullDownLoading, pageCount } = props
    const { getHotSingerDispatch, updateDispatch, pullUpRefreshDispatch, pullDownRefreshDispatch } = props


    useEffect(() => {
        if (!singerList.size) {
            getHotSingerDispatch ();
          }
        // eslint-disable-next-line
    }, []);

    // let handleUpdateAlpha = useCallback((val) => {
    //     setAlpha(val);
    //     updateDispatch(category, val);
    // }, [alpha]);

    // let handleUpdateCatetory = useCallback((val) => {
    //     setCategory(val);
    //     updateDispatch(val, alpha);
    // }, [category]);
    //CHANGE_ALPHA 和 CHANGE_CATEGORY 变量需要从 data.js 中引入
    let handleUpdateAlpha = (val) => {
        dispatch({ type: CHANGE_ALPHA, data: val });
        updateDispatch(category, val);
    };

    let handleUpdateCatetory = (val) => {
        dispatch({ type: CHANGE_CATEGORY, data: val });
        updateDispatch(val, alpha);
    };

    const handlePullUp = useCallback(() => {
        pullUpRefreshDispatch(category, alpha, category === '', pageCount);
    }, [category, alpha, pageCount]);

    const handlePullDown = useCallback(() => {
        pullDownRefreshDispatch(category, alpha);
    }, [category, alpha]);


    const renderSingerList = () => {
        const list = singerList ? singerList.toJS() : []
        return (
            <List>
                {
                    list.map((item, index) => {
                        return (
                            <ListItem key={item.accountId + "" + index}>
                                <div className="img_wrapper">
                                    <LazyLoad placeholder={<img width="100%" height="100%" src={require('./singer.png')} alt="music" />} height={30}>
                                        <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music" />
                                    </LazyLoad>
                                </div>
                                <span className="name">{item.name}</span>
                            </ListItem>
                        )
                    })
                }
            </List>
        )
    };

    return (
        <div>
            <NavContainer>
                <Horizen
                    list={categoryTypes}
                    title={"分类 (默认热门):"}
                    handleClick={handleUpdateCatetory}
                    oldVal={category}></Horizen>
                <Horizen
                    list={alphaTypes}
                    title={"首字母:"}
                    handleClick={handleUpdateAlpha}
                    oldVal={alpha}></Horizen>
            </NavContainer>
            <ListContainer>
                <Loading show={enterLoading}></Loading>
                {console.log(enterLoading)}
                <Scroll
                    pullUp={handlePullUp}
                    pullDown={handlePullDown}
                    pullUpLoading={pullUpLoading}
                    pullDownLoading={pullDownLoading}
                    onScroll={forceCheck}
                >
                    {renderSingerList()}
                </Scroll>
            </ListContainer>
        </div>
    )
}
const mapStateToProps = (state) => ({
    singerList: state.getIn(['singers', 'singerList']),
    enterLoading: state.getIn(['singers', 'enterLoading']),
    pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
    pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
    pageCount: state.getIn(['singers', 'pageCount'])
});
const mapDispatchToProps = (dispatch) => {
    return {
        // 第一次加载
        getHotSingerDispatch() {
            dispatch(getHotSingerList());
        },
        // 更新cat和alpha
        updateDispatch(category, alpha) {
            dispatch(changePageCount(0));//由于改变了分类，所以pageCount清零
            dispatch(changeEnterLoading(true));//loading，现在实现控制逻辑
            dispatch(getSingerList(category, alpha));
        },
        // 滑到最底部刷新部分的处理
        pullUpRefreshDispatch(category, alpha, hot, count) {
            dispatch(changePullUpLoading(true));
            dispatch(changePageCount(count + 1));
            if (hot) {
                dispatch(refreshMoreHotSingerList());
            } else {
                dispatch(refreshMoreSingerList(category, alpha));
            }
        },
        //顶部下拉刷新
        pullDownRefreshDispatch(category, alpha) {
            dispatch(changePullDownLoading(true));
            dispatch(changePageCount(0));//属于重新获取数据
            if (category === '' && alpha === '') {
                dispatch(getHotSingerList());
            } else {
                dispatch(getSingerList(category, alpha));
            }
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singers));