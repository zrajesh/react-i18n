import { useTranslation } from "react-i18next";


function App() {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang)
    // Update the URL with the new language query parameter
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);

    // Reload the page with the updated URL
    window.location.href = url.toString();
  }
  return (
    <div>
      <div className="main-content d-block d-md-none">
        <div className="container px-0 pb-4">
        <div className="d-flex align-items-center justify-content-center" style={{backgroundColor: '#FC6770', padding: '6px'}}>
          
          <p className="fw-proxima-bold fs-md">Limited Period Offer.</p>
        </div>
        <div className="col-12 pl-0 d-flex align-items-center justify-content-between">
          <div></div>
          <div>
            <p onClick={() => changeLanguageHandler('hi')} className="lang-btn fw-proxima-bold text-center" style={{width: '80px', fontSize: '12px', padding: '8px 10px'}}>हिंदी</p>
            <p onClick={() => changeLanguageHandler('en')} className="lang-active-btn fw-proxima-bold text-center" style={{width: '80px', fontSize: '12px', padding: '8px 10px'}}>English</p>
          </div>
        </div>
        <div className="col-12 px-0">
          <div style={{top: '24px', marginTop: '12px', marginBottom: '6px'}}>
            <p className="fw-proxima-bold mb-2 text-center" style={{color: '#141414', lineHeight: '32px', fontSize: '26px', paddingRight: '10px', paddingLeft: '10px'}}><span style={{color: '#25AB21'}}>{t('h1Num')}</span>{t('h1Text')}  <span style={{color: '#25AB21'}}>{t('h1Month')}</span><span style={{fontWeight: 'normal', fontSize: '14px', position: 'relative', top: '-10px'}}>*</span></p>
          </div>
          <div style={{background: 'linear-gradient(40deg,#ffffff,#d1fbfd,#ffe3ae5c,#ffffff)', backgroundSize: '400% 400%', animation: '6s infinite gradient'}}>
          <img src={t("headerBgLink")} fetchpriority="high" width="100%" height="auto" alt="" max-age={31536000} />
          </div>
        </div>
        </div>

        <div className="container-fluid px-0">
          <div className="container">

            <div className="row pb-4">
            <div className="col-12" style={{paddingTop: '2rem', marginTop: '-50px', borderRadius: '1rem', backgroundColor: '#fff'}}>    
              <p className="fs-6lg fw-proxima-bold  mb-4 text-center px-3" style={{lineHeight: '1.2'}}>{t('careTitle')}</p>
              <div style={{display: 'flex', alignItems: 'center', borderRadius: '48px', background: '#E5F1F7', padding: '10px'}}>
              <img src="assets/img/plan-one.png" fetchpriority="high" width="52px" height="auto" alt="" max-age={31536000} />
                <div style={{marginLeft: '10px'}}>
                  <p style={{color: '#001E2B', fontSize: '14px', fontStyle: 'normal', fontWeight: 700, lineHeight: '20px'}}>{t('careF1Title')}</p>
                  <p style={{color: '#001E2B', fontSize: '12px', fontStyle: 'normal', fontWeight: 400, lineHeight: '20px'}}>{t('careF1Para')}</p>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', borderRadius: '48px', background: '#FEF7E9', padding: '10px', marginTop: '12px'}}>
              <img src="assets/img/plan-two.png" fetchpriority="high" width="52px" height="auto" alt="" max-age={31536000} />
                <div style={{marginLeft: '10px'}}>
                  <p style={{color: '#001E2B', fontSize: '14px', fontStyle: 'normal', fontWeight: 700, lineHeight: '20px'}}>{t('careF2Title')}</p>
                  <p style={{color: '#001E2B', fontSize: '12px', fontStyle: 'normal', fontWeight: 400, lineHeight: '20px'}}>{t('careF2Para')}</p>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', borderRadius: '48px', background: '#E8FAF7', padding: '10px', marginTop: '12px'}}>
              <img src="assets/img/plan-three.png" fetchpriority="high" width="52px" height="auto" alt="" max-age={31536000} />
                <div style={{marginLeft: '10px'}}>
                  <p style={{color: '#001E2B', fontSize: '14px', fontStyle: 'normal', fontWeight: 700, lineHeight: '20px'}}>{t('careF3Title')}</p>
                  <p style={{color: '#001E2B', fontSize: '12px', fontStyle: 'normal', fontWeight: 400, lineHeight: '20px'}}>{t('careF2Para')}</p>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', borderRadius: '48px', background: '#FEF2E9', padding: '10px', marginTop: '12px'}}>
              <img src="assets/img/plan-four.png" fetchpriority="high" width="52px" height="auto" alt="" max-age={31536000} />
                <div style={{marginLeft: '10px'}}>
                  <p style={{color: '#001E2B', fontSize: '14px', fontStyle: 'normal', fontWeight: 700, lineHeight: '20px'}}>{t('careF2Title')}</p>
                  <p style={{color: '#001E2B', fontSize: '12px', fontStyle: 'normal', fontWeight: 400, lineHeight: '20px'}}>{t('careF2Para')}</p>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', borderRadius: '48px', background: '#D1FBFD', padding: '10px', marginTop: '12px'}}>
              <img src="assets/img/plan-five.png" fetchpriority="high" width="52px" height="auto" alt="" max-age={31536000} />
                <div style={{marginLeft: '10px'}}>
                  <p style={{color: '#001E2B', fontSize: '14px', fontStyle: 'normal', fontWeight: 700, lineHeight: '20px'}}>{t('careF5Title')}</p>
                  <p style={{color: '#001E2B', fontSize: '12px', fontStyle: 'normal', fontWeight: 400, lineHeight: '20px'}}>{t('careF5Para')}</p>
                </div>
              </div>
            </div>
            </div>

            <div className="row" style={{backgroundColor: '#E0E0E0', paddingBottom: '60px !important'}}>
            <div className="col-12 py-4">
              <p className="fw-proxima-bold fs-2lg mb-2 lh-normal text-center" style={{color: '#b5b5b5'}}>{t('descTitle')}</p>
              <p className="fs-md fw-regular mb-5" style={{color: '#595959'}}>
                {t('desc1')} <br /><br />{t('desc2')}<br /><br />{t('desc3')}<br /><br />{t('desc3')}<br /><br />{t('desc4')}<br /><br />{t('desc5')}
              </p>
            </div>
          </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
