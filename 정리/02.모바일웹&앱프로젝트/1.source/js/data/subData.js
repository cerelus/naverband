// 서브/상세 페이지 템플릿 데이터
const one = "운동화";
const subdata = { 
    // 서브페이지      v-on:click="$store.commit('chgData',{cat1:'men',cat2:'운동화',cat3:'전체'})
    sub: `
    <div>
    <div class="prod_path">{{ 'Home > ' + $store.state.cat1 + ' > ' + $store.state.cat2}}</div>
    <div class="prod_tit">
        <h2>{{ $store.state.cat2 }}</h2>
    </div>
    
    <div class="prod_cont">
        <!-- 카테고리2-->
        <!-- 
        <ul class="cat2-menu">
            <li v-for="(v,i) in $store.state.menu">{{i}}</li>
        </ul>
        -->
        <!-- 탭메뉴 -->
        <ul class="tab-head-box">
            <!-- 전체 -->
            <li class="tab-head" 
                v-on:click="$store.commit('chgData',{cat1:$store.state.cat1,cat2:$store.state.cat2,cat3:'전체'})"
                v-bind:class ="$store.state.cat3 === '전체' ? 'active' : ''">전체</li>
            <!-- 나머지 카테고리 -->    
            <li class="tab-head"
                v-for="(v,i) in $store.state.imgpath"
                v-on:click="$store.commit('chgData',{cat1:$store.state.cat1,cat2:$store.state.cat2,cat3:i})"
                v-bind:class = "$store.state.cat3 === i ? 'active' : ''">
                {{i}}
            </li>
        </ul>



        <div class="tab-cont">
            <ul class="prod_box">
                <template v-for="(v,i) in $store.state.imgpath">
                    <li v-for="(a,b) in v" v-if="$store.state.cat3 === '전체' || $store.state.cat3 === i  ">
 


                        <img :src="'./images/'+$store.state.cat1+'/'+$store.state.cat2+'/'+i+'/prod'+ (b+1) + '-1.jpg'">

                        <div class="prod_info">
                            <h4 class="info-brand">{{a.brand}}</h4>
                            <p class="info-name">{{a.name}}</p>

                            <!-- 상품가격 -->
                            <div class="info-price" v-bind:class="a.sale!=='' ? 'on-sale' : ''">
                                <span class="price-fixed">{{comma(a.price) + '원'}}</span>
                                <!-- 세일일경우에만 출력 -->
                                <template v-if="a.sale!==''">
                                    <span class="price-sale">{{comma((Math.round(a.price * (1 - a.sale / 100)))) + '원'}}</span>
                                    <span class="price-percent">{{'[' + a.sale + '%]'}}</span>
                                </template>
                            </div>

                            <!-- 상세페이지에만 출력 -->
                            <div class="info-hidden">
                                <span class="info-color">{{a.color}}</span>
                                <span class="info-size">{{a.size}}</span>
                            </div>
                        </div>

                    </li>
                    </template>
            </ul>
        </div>
    </div>
    </div>
    `,
    detail:`

    <div class="detail">
        <div class="detail_content">
        <div>
        <button type="button" class="detail_cbtn"></button>
            <div class="detail_top">
                <div class="detail_img">
                    <img v-for="v in 3" :src="$store.state.image + '-' + v + '.jpg'" alt="상세이미지">
                </div>
                <div class="detail_info">
                <div class="detail-brand">{{$store.state.brand}}</div>
                    <div class="detail-name">{{$store.state.name}}</div>
                    <div class="fprice">{{comma($store.state.fprice)}}</div>원
                    <div>색상 : {{$store.state.color}}</div>
                <button  class="buy" type="button">구매하기</button>
                </div>
            </div>
            <div class="detail_bottom"></div>
            </div>
        </div>
    </div>

    `,
    filter:`
    <div class="filter">
                        <div class="filter_head">
                            <h3>FILTER</h3>
                        </div>
                        <div class="filter_cont">
                            <ul class="fold-box">
                                <li class="fold-list">
                                    <div class="fold-list-head">브랜드</div>
                                    <div class="fold-list-cont">
                                        <ul>
                                            <li>
                                                <span>
                                                    <input
                                                        type="checkbox"
                                                        name="nk"
                                                        id="nk"
                                                        v-model="$store.state.chkarr.brand[0]"
                                                        v-on:change="$store.commit('resCheck','brand')"
                                                    />
                                                    <label for="nk">나이키</label>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <input
                                                        type="checkbox"
                                                        name="ad"
                                                        id="ad"
                                                        v-model="$store.state.chkarr.brand[1]"
                                                        @change="$store.commit('resCheck','brand')"
                                                    />
                                                    <label for="ad">아디다스</label>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <input
                                                        type="checkbox"
                                                        name="vs"
                                                        id="vs"
                                                        v-model="$store.state.chkarr.brand[2]"
                                                        @change="$store.commit('resCheck','brand')"
                                                    />
                                                    <label for="vs">반스</label>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <input
                                                        type="checkbox"
                                                        name="as"
                                                        id="as"
                                                        v-model="$store.state.chkarr.brand[3]"
                                                        @change="$store.commit('resCheck','brand')"
                                                    />
                                                    <label for="as">아식스</label>
                                                </span>
                                            </li>
                                            <li></li>
                                            <li>
                                                <span>
                                                    <input
                                                        type="checkbox"
                                                        name="nv"
                                                        id="nv"
                                                        v-model="$store.state.chkarr.brand[4]"
                                                        @change="$store.commit('resCheck','brand')"
                                                    />
                                                    <label for="nv">누오보</label>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <input
                                                        type="checkbox"
                                                        name="hk"
                                                        id="hk"
                                                        v-model="$store.state.chkarr.brand[5]"
                                                        @change="$store.commit('resCheck','brand')"
                                                    />
                                                    <label for="hk">호킨스</label>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="fold-list">
                                    <div class="fold-list-head">색상</div>
                                    <div class="fold-list-cont">
                                        <ul>
                                            <li>
                                                <span>
                                                    <input
                                                        type="checkbox"
                                                        name="bk"
                                                        id="bk"
                                                        v-model="$store.state.chkarr.color[0]"
                                                        @change="$store.commit('resCheck','color')"
                                                    />
                                                    <label classfor="bk">black</label>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <input
                                                        type="checkbox"
                                                        name="gy"
                                                        id="gy"
                                                        v-model="$store.state.chkarr.color[1]"
                                                        @change="$store.commit('resCheck','color')"
                                                    />
                                                    <label for="gy">gray</label>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <input
                                                        type="checkbox"
                                                        name="wt"
                                                        id="wt"
                                                        v-model="$store.state.chkarr.color[2]"
                                                        @change="$store.commit('resCheck','color')"
                                                    />
                                                    <label for="wt">white</label>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <input
                                                        type="checkbox"
                                                        name="bg"
                                                        id="bg"
                                                        v-model="$store.state.chkarr.color[3]"
                                                        @change="$store.commit('resCheck','color')"
                                                    />
                                                    <label bg="brand1">beige</label>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <input
                                                        type="checkbox"
                                                        name="bn"
                                                        id="bn"
                                                        v-model="$store.state.chkarr.color[4]"
                                                        @change="$store.commit('resCheck','color')"
                                                    />
                                                    <label for="bn">brown</label>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <input
                                                        type="checkbox"
                                                        name="bl"
                                                        id="bl"
                                                        v-model="$store.state.chkarr.color[5]"
                                                        @change="$store.commit('resCheck','color')"
                                                    />
                                                    <label for="bl">blue</label>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
    `
    
};

// 내보내기
export default subdata;
