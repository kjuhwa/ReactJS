// 본체는 다 부모한테있고 감싸는 역활만 담당
// css만 적용하는 컴포넌트
import React from 'react'
import './PostWrapper.css'

// 자식을 그대로 표현할려면 children를 사용
// 래핑을 하되 자식이나 부모에 대한 영향을 받지 않는다
const PostWrapper = ({children}) => (
 <div className='PostWrapper'>
  {children}
 </div>
)

export default PostWrapper