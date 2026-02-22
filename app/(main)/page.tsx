export default function Home() {
  return (
  <>
      <div className="main-dashboard">
      <div className="div">
        <div className="group">
          <div className="overlap-group">
            <div className="rectangle"></div>
            <div className="group-2">
              <div className="group-3">
                <a href="/alerts"><img className="phosphor-icons" src="/static/images/envelopesimple.svg" /></a>
                <a href="/mypage"><img className="img" src="/static/images/usercircle.svg" /></a>
              </div>
              <img className="logo-s" src="/static/images/logo_s 1.png" />
            </div>
          </div>
        </div>
        <div className="group-4">
          <div className="group-5">
            <div className="text-wrapper">오늘&nbsp;&nbsp;알림</div>
            <div className="overlap-group-2">
              <div className="text-wrapper-2">건</div>
              <div className="text-wrapper-3">3</div>
            </div>
          </div>
          <div className="text-wrapper-4">‘점포명’ 점</div>
        </div>
        <div className="group-6">
          <a href="/live">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-3">
                <img className="frame" src="/static/images/frame.svg" />
                <div className="text-wrapper-5">실시간<br />화면</div>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="overlap-wrapper">
              <div className="overlap-group-3">
                <div className="text-wrapper-5">긴급<br />호출</div>
                <img className="frame" src="/static/images/Frame02.svg" />
              </div>
            </div>
          </a>
          <a href="/videos/video">
            <div className="div-wrapper">
              <div className="overlap-group-3">
                <img className="frame" src="/static/images/Frame03.svg" />
                <div className="text-wrapper-5">기록<br />열람</div>
              </div>
            </div>
          </a>
          <div className="group-7">
            <a href="/cctvs/cctv_edit">
              <div className="overlap">
                <div className="text-wrapper-5">CCTV<br />편집</div>
                <img className="group-8" src="/static/images/Group 12.svg" />
              </div>
            </a>
          </div>
        </div>
        <div className="group-9">
          <div className="overlap-2">
            <div className="group-10">
              <div className="overlap-group-4"><div className="text-wrapper-6">MAIN</div></div>
            </div>
            <div className="group-11">
              <a href="/video_alerts"><div className="overlap-3"><div className="text-wrapper-7">기록보기</div></div></a>
            </div>
            <div className="video-wrapper">
              <img id="live-video" alt="실시간 CCTV1"/>
            </div>
          </div>
        </div>
      </div>

      
      <div id="modalOverlay" className="modal-overlay" style={{display: 'none'}}></div>
      <div id="emergencyModal" className="call-modal" style={{display: 'none'}}>
        <div className="modal-box"></div>

        <a href="tel:01012345678" id="confirmBtn" className="btn confirm-btn">확인</a>
        <div className="btn cancel-btn" id="cancelBtn">취소</div>

        <div className="modal-text">
            🚨 출동을 요청하시겠습니까?<br/><br/>
            출동 요청은 제휴된 보안업체에 즉시 <br/>
            전달되며, 등록된 비상 연락처<br/>(010-1234-5678)로 전화를 연결합니다.<br/><br/>
            확인 시, 즉시 전화가 연결됩니다.
        </div>
    </div>

    </div>
  </>
  )
}
