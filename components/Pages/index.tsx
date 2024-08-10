import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import Num2EN from '../Libs/Num2EN';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles

  global.lang = {ff:"var" , ffb:"vb"}


  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={"قیمت لحظه ای تتر ( دلار )"} style={{ minHeight: 180, margin: 10, width: "calc(100% - 20px)" }}>


      <br-x/>


      <div style = {{width: "100%" , height: 35 , backgroundColor: "#5A828F" , borderRadius: "10"
          , textAlign:"center" 
        }}>   
            <br-x/>
            قیمت لحظه ای : 
            {
            ( Number (props.p.price) as number).toLocaleString("fa-IR")
            }
        </div>


        <br-x/>


        <div style = {{width: "100%" , height: 35 , backgroundColor: "#5A828F" , borderRadius: "10"
          , textAlign:"center" 
        }}>   
            <br-x/>
            بیشترین قیمت در ۲۴ ساعت اخیر : 
            {
            ( Number (props.p.last24hMax) as number).toLocaleString("fa-IR")
            }
        </div>


        <br-x/>


        <div style = {{width: "100%" , height: 35 , backgroundColor: "#5A828F" , borderRadius: "10"
          , textAlign:"center" 
        }}>   
            <br-x/>
            کمترین قیمت در ۲۴ ساعت اخیر : 
            {
            ( Number (props.p.last24hMin) as number).toLocaleString("fa-IR")
            }
        </div>


        <br-x/>


         <div style = {{width: "100%" , height: 35 , backgroundColor: "#5A828F" , borderRadius: "10"
          , textAlign:"center" 
        }}>   
            <br-x/>
            تغییرات ۲۴ ساعت اخیر : 
            {
             " ٪ " + ( Number (props.p.diff24d) as number).toLocaleString("fa-IR")
            }
        </div>


        <br-x/>


         <div style = {{width: "100%" , height: 35 , backgroundColor: "#5A828F" , borderRadius: "10"
          , textAlign:"center" 
        }}>   
            <br-x/>
            تغییرات هفتگی : 
            {
             " ٪ " + ( Number (props.p.diff7d) as number).toLocaleString("fa-IR")
            }
        </div>


        <br-x/>


          <div style = {{width: "100%" , height: 35 , backgroundColor: "#5A828F" , borderRadius: "10"
          , textAlign:"center" 
        }}>   
            <br-x/>
            تغییرات ماهانه : 
            {
             " ٪ " + ( Number (props.p.diff30d) as number).toLocaleString("fa-IR")
            }
          
        </div> 


        <br-xx/>


        <center style={{fontSize:8}}>
          Voyager phoenix 
        </center>



      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;
    
    let res = await fetch("https://api.tetherland.com/currencies")
    let data = await res.json()
    let p = data.data.currencies.USDT

    console . log ( "PRICEEEEEEEEEEEEEEEEEEEEEEEEEEEEE:" , p )

  return {
    props: {
      data: global.QSON.stringify({
        p ,
        session,
        // nlangs,
      })
    },
  }
}