// 뷰엑스 스토어JS

// 제이슨 데이터 가져오기
import prodData from "./data/prodData.json" assert{type:"json"};

const store = new Vuex.Store({
    state:{
        // 제이슨데이터
        items: {},
        // 서브페이지 출력
        cat1:"",
        cat2:"",
        cat3:"",
        imgpath:{},
        menu:{},
        // 상세페이지 출력
        image:"",
        name:"",
        brand:"",
        color:"",
        fprice:"",
        sprice:"",
        sale:"",
        size:"",
        // 필터
        // chkarr:{
        //     brand:[true,true,true,true,true,true],
        //     color:[true,true,true,true,true,true],
        // },
        // chkarr2:["","",""],
        // selnm:{
        //     brand:["","","","",""],
        //     color:["","","","","",""],
        // },
        // list:{
        //     brand:["나이키","아디다스","반스","아식스","누오보","호킨스"],
        //     color:["bk","gy","wt","bg","bn","bl"],
        // },
    },
    mutations:{
        chgData(dt,pm){
            dt.cat1 = pm.cat1;
            dt.cat2 = pm.cat2;
            dt.cat3 = pm.cat3;

            // 중분류 메뉴출력을 위한 변수
            dt.menu = dt.items[pm.cat1];
            // 소분류 메뉴출력을 위한 변수
            dt.imgpath = dt.items[pm.cat1][pm.cat2];
        },
        // resCheck(dt,pm){
        //     dt.chkarr[pm].forEach((v,i)=>{
        //         console.log("클릭");
        //         if(v){
        //             console.log(v,i);
        //             dt.selnm[pm][i] = dt.list[pm][i];
        //             console.log(dt.selnm[pm][i]);
        //         }
        //         else{
        //             dt.selnm[pm][i] = "";
        //         }
        //     });
        //     console.log(dt.selnm[pm][i]);
        // },
        
        // 제이슨 데이터로 변경 메서드
        setData(st,pm){
            st.items = pm;
        },
    },
    actions:{
        // 제이슨 데이터 로드 - 뮤테이션 메서드 호출
        initData(){
            const result = prodData;
            this.commit('setData',result);
        },
    }
});

// 내보내기
export default store;