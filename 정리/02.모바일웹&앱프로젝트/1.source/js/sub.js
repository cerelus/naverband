//////////////////////////////////////
//// 서브/상세 페이지 js
/////////////////////////////////////

// 뷰엑스 스토어 불러오기
import store from "./vuexStore.js";

// 템플릿 데이터
import subData from "./data/subData.js";

//
import {toggleCont, qs, qsa} from "./eventFn.js";



// 뷰 컴포넌트 생성
// 1.서브페이지 컴포넌트
Vue.component("prod-area",{
    template: subData.sub,
    methods:{
        comma(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        size(x){
            return x.toString().replace(/[^0-9]/g, " ");
        }
    },

});
// 2.상세페이지 컴포넌트
Vue.component("detail-area",{
    template: subData.detail,
    methods:{
        comma(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    }
});
// 2.상세페이지 컴포넌트
Vue.component("filter-area",{
    template: subData.filter
});


let prod;
// 뷰 인스턴스 생성
// 1.서브페이지 인스턴스
new Vue({
    el:".sub_prod",
    store,
    created(){
        store.dispatch('initData');

        // GET 방식으로 넘어온 데이터 처리
        let pm,pm1,pm2,pm3;

        if(location.href.indexOf("?") !== -1){
            pm = location.href.split("?")[1].split("&");
            pm1 = pm[0].split("=")[1]; // cat1
            pm2 = decodeURI(pm[1].split("=")[1]); // cat2
            pm3 = decodeURI(pm[2].split("=")[1]); // cat3
        }
        if(pm)
            store.commit("chgData",{cat1:pm1,cat2:pm2,cat3:pm3});
        else
            store.commit("chgData",{cat1:"men",cat2:"운동화",cat3:"전체"});

            prod = qsa(".prod_box li");
            
                
            
    }
    
}); ///////// Vue /////////


new Vue({
    el:"#detail",
    store,
    mounted(){
        prod = qsa(".prod_box li");
        
        // let prod;
        console.log("??",prod);
        // let prod = qsa(".prod_box li");
        let tabHead = qsa(".tab-head");
        console.log(store.state.cat3);
        tabHead.forEach(ele => {
            ele.onclick = function() {
                // prod = qsa(".prod_box li");
                console.log("클릭",prod);
                setTimeout(() => {
                    prod = qsa(".prod_box li");
                    console.log("클릭",prod);
                }, 10);
            }
        });      
        const cbtn =  qs(".detail_cbtn");
        cbtn.onclick = () => {
            detail.scrollTop = 0;
            detail.style.display = "none";
            document.body.style.overflow = "auto";
        };
              

        const detail = qs(".detail");
                        prod.forEach((ele) => {
                            
                            ele.onclick = function() {
            
            console.log("클릭");
                            detail.style.display = "flex";
                            detail.style.overflowY = "scroll";
                            document.body.style.overflow = "hidden";
                            // 값 추출
                            let image = $(this).find("img").attr("src").split("-")[0];
                            let name = $(this).find(".info-name").text();
                            let brand = $(this).find(".info-brand").text();
                            let color = $(this).find(".info-color").text();
                            let fprice = $(this).find(".price-fixed").text();
                            let sale = $(this).find(".price-percent").text();
                            let sprice = fprice * (sale / 100);
                            let size = $(this).find(".info-size").text();
            console.log(image);
                            // 값 세팅
                            store.state.image = image;
                            store.state.name = name;
                            store.state.brand = brand;
                            store.state.color = color;
                            store.state.fprice = fprice;
                            store.state.size = size;
            
                            if(sale){
                                store.state.sprice = sprice;
                                store.state.sale = sale;
                            }
            
                        } ///// click ////
                    }); /////// forEach //////   
  
              cbtn.onclick = () => {
                  detail.scrollTop = 0;
                  detail.style.display = "none";
                  document.body.style.overflow = "auto";
              };
                    
    },
});
new Vue({
    el:".sub_filter",
    store,
    mounted(){
        toggleCont(".fold-list-head");
    },
});