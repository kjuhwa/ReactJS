import React, {Component} from 'react'
// 패턴1 => service/net 밑에 있는 모듈 모두 가져오기
import * as net from '../../services/net'
// 패턴2 => 대표 모듈에 개별 모듈을 감싸서 가져오기
import {getMyPost, getComments} from '../../services'
// 다른 컴포넌트 가져오기
import {Navigate} from '../../components'

// 컴포넌트들을 관리하는 컴포넌트
// 단순 랜더링을 수행하는 컴포넌트들을 통제 관리하는 컴포넌트로
// css가 필요 없음
class PostContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // 글번호 (최초글은 1)
            postId:1,
            // fetching(글을 가져오고있는지 끝났는지)
            fetching:false,
            // 기본글 (title, body)
            post:{
                title:null,
                body:null
            },
            // 댓글리스트
            comments:[],
            // 더이상 목록이 없다? 글이 없다 ( <- 1, 마지막글 -> )
            isLastPostWarn:false
        }
        this.postRequestClick = this.postRequestClick.bind(this)
    }
    componentWillMount() {
        // 랜더가 호출되기 전단계 -> 네트워크 가동
        // 1번 글을 기본글로 해서 글을 가져온다 ( 1번글과 1번글댓글 )
        this.fetchMyPost(this.state.postId)
    }
    fetchMyPost= async (postId) => {
        // 페칭을 시작한다
        this.setState( {fetching:true} )

        // 해당글이 없는 경우 : 빈객체, 빈배열
        // 단순하게 하는 방법 try catch
        try{
            // 여러개의 Promise를 한번에 처리하고, 기다릴때
            // Promise.all()
            const req = await Promise.all([
                net.getMyPost(postId),
                net.getComments(postId)
            ])

            console.log(req[0].data)
            console.log(req[1].data)
            // 정상적으로 통신이 잘되서 데이타를 받았다

            const {title, body} = req[0].data
            const comments = req[1].data

            this.setState( {
                // 세팅하고자 하는 변수와 세팅되는값의 키값이 동일하면->구조분해
                postId, // postId=postId
                post: {
                    title,
                    body
                },
                comments,
                fetching:false
            } )
        }catch(err){
            // 조회를 했는데 글이 없다.
            this.showWarning()
            // 페칭을 끝났다
            this.setState( {fetching:false} )
        }
    }
    // 글이 없음을 알려주는 경고 처리
    showWarning() {
        this.setState( {isLastPostWarn:true} )
        // 특정 시간후 경고 상황을 해제한다
        setTimeout(()=>{
            this.setState( {isLastPostWarn:false} )
        }, 2000)
    }
    // 이전글, 다음글 요청 처리하는 함수
    // dir : PREV, NEXT
    postRequestClick(dir) {
        // 현재글
        const {postId} = this.state
        if(dir === 'PREV'){
            this.fetchMyPost(postId-1)
        }else{
            this.fetchMyPost(postId+1)
        }
    }
    render() {
        // 표현에 필요한 데이터를 획득
        const { postId, fetching, post, comments, isLastPostWarn } = this.state
        return (
            <div>
                {/* 네이게이터 (이전글, 다음글) */}
                <Navigate postId={postId} fetching={fetching} onClick={this.postRequestClick} />
                {/* 포스팅 (제목, 내용, 댓글리스트) */}
                {/* <Post /> */}
                {/* 경고창 (더이상 글이 없을때 알림) */}
                {/* <WarnAlert /> */}
                {/* 로딩 */}
            </div>
        )
    }
}

export default PostContainer