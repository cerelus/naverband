// 상단/하단/사이드 구역 템플릿 데이터

const comData = {
    // 상단구역
    mgnb: `
    <div class="gnb">
        <div class="gnb_left">
            <h1 class="gnb_logo">
                <a href="#">
                    <img src="./images/gnb_logo.png" alt="ABC마트" />
                </a>
            </h1>
            <nav class="gnb_menu">
                <div class="menu-left">
                    <ul>
                    <!--
                        <li>
                            <a href="#">brand</a>
                            <div class="sub-menu">
                                <div class="sub_tab1-cont brand tab-contain active" id="brand">
                                    <h3 class="brand-tit">BRAND</h3>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src="./images/brand/brand1/logo.png" alt="브랜드로고" />
                                                <div class="brand-info">
                                                    <span>NIKE</span>
                                                    <span>나이키</span>
                                                    <button type="button" class="brand-wish"></button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="./images/brand/brand2/logo.png" alt="브랜드로고" />
                                                <div class="brand-info">
                                                    <span>ADIDAS</span>
                                                    <span>아디다스</span>
                                                    <button type="button" class="brand-wish"></button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="./images/brand/brand3/logo.png" alt="브랜드로고" />
                                                <div class="brand-info">
                                                    <span>VANS</span>
                                                    <span>반스</span>
                                                    <button type="button" class="brand-wish"></button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="./images/brand/brand4/logo.png" alt="브랜드로고" />
                                                <div class="brand-info">
                                                    <span>ASICS</span>
                                                    <span>아식스</span>
                                                    <button type="button" class="brand-wish"></button>
                                                </div>
                                            </a>
                                        </li>
                                        
                                        <li>
                                            <a href="#">
                                                <img src="./images/brand/brand5/logo.png" alt="브랜드로고" />
                                                <div class="brand-info">
                                                    <span>NUOVO</span>
                                                    <span>누오보</span>
                                                    <button type="button" class="brand-wish"></button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="./images/brand/brand6/logo.png" alt="브랜드로고" />
                                                <div class="brand-info">
                                                    <span>HAWKINS</span>
                                                    <span>호킨스</span>
                                                    <button type="button" class="brand-wish"></button>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        -->
                        <li>
                            <a href="#">men</a>
                            <div class="sub-menu">
                                <div class="sub_tab1-cont product tab-contain" id="product">
                                    <h3 class="brand-tit">MEN</h3>
                                    <div class="sub_tab2-cont tab-contain active" id="men">
                                        <ul>
                                            <li>
                                                <div class="sub_tab3-nav">운동화</div>
                                                <div class="sub_tab3-cont">
                                                    <ul>
                                                        <li>
                                                            <a href="sub.html?cat1=men&cat2=운동화&cat3=전체">전체</a>
                                                        </li>
                                                        <li>
                                                            <a href="sub.html?cat1=men&cat2=운동화&cat3=스니커즈">스니커즈</a>
                                                        </li>
                                                        <li>
                                                            <a href="sub.html?cat1=men&cat2=운동화&cat3=슬립온">슬립온</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="sub_tab3-nav">샌들</div>
                                                <div class="sub_tab3-cont">
                                                    <ul>
                                                        <li>
                                                            <a href="sub.html?cat1=men&cat2=샌들&cat3=전체">전체</a>
                                                        </li>
                                                        <li>
                                                            <a href="sub.html?cat1=men&cat2=샌들&cat3=샌들">샌들</a>
                                                        </li>
                                                        <li>
                                                            <a href="sub.html?cat1=men&cat2=샌들&cat3=슬리퍼">슬리퍼</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="sub_tab3-nav">구두</div>
                                                <div class="sub_tab3-cont">
                                                    <ul>
                                                        <li>
                                                            <a href="sub.html?cat1=men&cat2=구두&cat3=전체">전체</a>
                                                        </li>
                                                        <li>
                                                            <a href="sub.html?cat1=men&cat2=구두&cat3=로퍼">로퍼</a>
                                                        </li>
                                                        <li>
                                                            <a href="sub.html?cat1=men&cat2=구두&cat3=부츠">부츠</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#">women</a>
                            <div class="sub-menu">
                                <div class="sub_tab1-cont product tab-contain" id="product">
                                    <h3 class="brand-tit">WOMEN</h3>
                                    <div class="sub_tab2-cont tab-contain active" id="men">
                                        <ul>
                                            <li>
                                                <div class="sub_tab3-nav">운동화</div>
                                                <div class="sub_tab3-cont">
                                                    <ul>
                                                        <li>
                                                            <a href="sub.html?cat1=women&cat2=운동화&cat3=전체">전체</a>
                                                        </li>
                                                        <li>
                                                            <a href="sub.html?cat1=women&cat2=운동화&cat3=스니커즈">스니커즈</a>
                                                        </li>
                                                        <li>
                                                            <a href="sub.html?cat1=women&cat2=운동화&cat3=슬립온">슬립온</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="sub_tab3-nav">샌들</div>
                                                <div class="sub_tab3-cont">
                                                    <ul>
                                                        <li>
                                                            <a href="sub.html?cat1=women&cat2=샌들&cat3=전체">전체</a>
                                                        </li>
                                                        <li>
                                                            <a href="sub.html?cat1=women&cat2=샌들&cat3=샌들">샌들</a>
                                                        </li>
                                                        <li>
                                                            <a href="sub.html?cat1=women&cat2=샌들&cat3=슬리퍼">슬리퍼</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="sub_tab3-nav">구두</div>
                                                <div class="sub_tab3-cont">
                                                    <ul>
                                                        <li>
                                                            <a href="sub.html?cat1=women&cat2=구두&cat3=전체">전체</a>
                                                        </li>
                                                        <li>
                                                            <a href="sub.html?cat1=women&cat2=구두&cat3=펌프스">펌프스</a>
                                                        </li>
                                                        <li>
                                                            <a href="sub.html?cat1=women&cat2=구두&cat3=플랫">플랫</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#">kids</a>
                            <div class="sub-menu">
                                <div class="sub_tab1-cont product tab-contain" id="product">
                                    <h3 class="brand-tit">KIDS</h3>
                                    <div class="sub_tab2-cont tab-contain active" id="men">
                                        <ul>
                                            <li>
                                                <div class="sub_tab3-nav">운동화</div>
                                                <div class="sub_tab3-cont">
                                                    <ul>
                                                        <li>
                                                            <a href="sub.html?cat1=kids&cat2=운동화&cat3=전체">전체</a>
                                                        </li>
                                                        <li>
                                                            <a href="sub.html?cat1=kids&cat2=운동화&cat3=스니커즈">스니커즈</a>
                                                        </li>
                                                        <li>
                                                            <a href="sub.html?cat1=kids&cat2=운동화&cat3=슬립온">슬립온</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="sub_tab3-nav">샌들</div>
                                                <div class="sub_tab3-cont">
                                                    <ul>
                                                    <li>
                                                        <a href="sub.html?cat1=kids&cat2=샌들&cat3=전체">전체</a>
                                                    </li>
                                                    <li>
                                                        <a href="sub.html?cat1=kids&cat2=샌들&cat3=샌들">샌들</a>
                                                    </li>
                                                    <li>
                                                        <a href="sub.html?cat1=kids&cat2=샌들&cat3=슬리퍼">슬리퍼</a>
                                                    </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="sub_tab3-nav">구두</div>
                                                <div class="sub_tab3-cont">
                                                    <ul>
                                                        <li>
                                                            <a href="sub.html?cat1=kids&cat2=구두&cat3=전체">전체</a>
                                                        </li>
                                                        <li>
                                                            <a href="sub.html?cat1=kids&cat2=구두&cat3=플랫">플랫</a>
                                                        </li>
                                                        <li>
                                                            <a href="sub.html?cat1=kids&cat2=구두&cat3=부츠">부츠</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            <!--
                <div class="menu-right">
                    <ul>
                        <li>
                            <a href="#">기획전</a>
                        </li>
                        <li>
                            <a href="#">이벤트</a>
                        </li>
                        <li>
                            <a href="#">G-log</a>
                        </li>
                        <li>
                            <a href="#">HOT DEAL</a>
                        </li>
                    </ul>
                </div>
            -->
            </nav>
        </div>
        <div class="gnb_right">
            <ul class="btn-util">
            <!--
                <li>
                    <a href="#" class="btn-search">
                        <span class="ir">검색</span>
                    </a>
                </li>
            -->
                <li class="util-mypage">
                    <a href="#" class="btn-mypage">
                        <span class="ir">마이페이지</span>
                    </a>
                    <div class="tooltip util-list">
                        <ul>
                            <li>
                                <a href="login.html">로그인</a>
                            </li>
                            <li>
                                <a href="join.html">회원가입</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#" class="btn-cart">
                        <span class="badge">0</span>
                        <span class="ir">장바구니</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    `,
    sgnb: `
    <div class="gnb">
        <div class="gnb_left">
            <h1 class="gnb_logo">
                <a href="index.html">
                    <img src="./images/gnb_logo.png" alt="ABC마트" />
                </a>
            </h1>
            <nav class="gnb_menu">
                <div class="menu-left">
                    <ul>
                        <li>
                            <a href="#">brand</a>
                            <div class="sub-menu">
                                <div class="sub_tab1-cont brand tab-contain active" id="brand">
                                    <h3 class="brand-tit">BRAND</h3>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src="./images/brand/brand1/logo.png" alt="브랜드로고" />
                                                <div class="brand-info">
                                                    <span>NIKE</span>
                                                    <span>나이키</span>
                                                    <button type="button" class="brand-wish"></button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="./images/brand/brand2/logo.png" alt="브랜드로고" />
                                                <div class="brand-info">
                                                    <span>ADIDAS</span>
                                                    <span>아디다스</span>
                                                    <button type="button" class="brand-wish"></button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="./images/brand/brand3/logo.png" alt="브랜드로고" />
                                                <div class="brand-info">
                                                    <span>VANS</span>
                                                    <span>반스</span>
                                                    <button type="button" class="brand-wish"></button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="./images/brand/brand4/logo.png" alt="브랜드로고" />
                                                <div class="brand-info">
                                                    <span>ASICS</span>
                                                    <span>아식스</span>
                                                    <button type="button" class="brand-wish"></button>
                                                </div>
                                            </a>
                                        </li>
                                        
                                        <li>
                                            <a href="#">
                                                <img src="./images/brand/brand5/logo.png" alt="브랜드로고" />
                                                <div class="brand-info">
                                                    <span>NUOVO</span>
                                                    <span>누오보</span>
                                                    <button type="button" class="brand-wish"></button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="./images/brand/brand6/logo.png" alt="브랜드로고" />
                                                <div class="brand-info">
                                                    <span>HAWKINS</span>
                                                    <span>호킨스</span>
                                                    <button type="button" class="brand-wish"></button>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#">men</a>
                            <div class="sub-menu">
                                <div class="sub_tab1-cont product tab-contain" id="product">
                                    <h3 class="brand-tit">MEN</h3>
                                    <div class="sub_tab2-cont tab-contain active" id="men">
                                        <ul>
                                            <li>
                                                <div class="sub_tab3-nav">운동화</div>
                                                <div class="sub_tab3-cont">
                                                    <ul>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'men',cat2:'운동화',cat3:'전체'})">전체</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'men',cat2:'운동화',cat3:'스니커즈'})">스니커즈</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'men',cat2:'운동화',cat3:'슬립온'})">슬립온</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="sub_tab3-nav">샌들</div>
                                                <div class="sub_tab3-cont">
                                                    <ul>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'men',cat2:'샌들',cat3:'전체'})">전체</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'men',cat2:'샌들',cat3:'샌들'})">샌들</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'men',cat2:'샌들',cat3:'슬리퍼'})">슬리퍼</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="sub_tab3-nav">구두</div>
                                                <div class="sub_tab3-cont">
                                                    <ul>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'men',cat2:'구두',cat3:'전체'})">전체</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'men',cat2:'구두',cat3:'로퍼'})">로퍼</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'men',cat2:'구두',cat3:'부츠'})">부츠</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#">women</a>
                            <div class="sub-menu">
                                <div class="sub_tab1-cont product tab-contain" id="product">
                                    <h3 class="brand-tit">WOMEN</h3>
                                    <div class="sub_tab2-cont tab-contain active" id="men">
                                        <ul>
                                            <li>
                                                <div class="sub_tab3-nav">운동화</div>
                                                <div class="sub_tab3-cont">
                                                    <ul>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'women',cat2:'운동화',cat3:'전체'})">전체</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'women',cat2:'운동화',cat3:'스니커즈'})">스니커즈</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'women',cat2:'운동화',cat3:'슬립온'})">슬립온</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="sub_tab3-nav">샌들</div>
                                                <div class="sub_tab3-cont">
                                                    <ul>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'women',cat2:'샌들',cat3:'전체'})">전체</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'women',cat2:'샌들',cat3:'샌들'})">샌들</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'women',cat2:'샌들',cat3:'슬리퍼'})">슬리퍼</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="sub_tab3-nav">구두</div>
                                                <div class="sub_tab3-cont">
                                                    <ul>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'women',cat2:'구두',cat3:'전체'})">전체</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'women',cat2:'구두',cat3:'펌프스'})">펌프스</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'women',cat2:'구두',cat3:'플랫'})">플랫</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#">kids</a>
                            <div class="sub-menu">
                                <div class="sub_tab1-cont product tab-contain" id="product">
                                    <h3 class="brand-tit">KIDS</h3>
                                    <div class="sub_tab2-cont tab-contain active" id="men">
                                        <ul>
                                            <li>
                                                <div class="sub_tab3-nav">운동화</div>
                                                <div class="sub_tab3-cont">
                                                    <ul>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'kids',cat2:'운동화',cat3:'전체'})">전체</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'kids',cat2:'운동화',cat3:'스니커즈'})">스니커즈</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'kids',cat2:'운동화',cat3:'슬립온'})">슬립온</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="sub_tab3-nav">샌들</div>
                                                <div class="sub_tab3-cont">
                                                    <ul>
                                                    <li>
                                                        <a href="#" v-on:click="$store.commit('chgData',{cat1:'kids',cat2:'샌들',cat3:'전체'})">전체</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" v-on:click="$store.commit('chgData',{cat1:'kids',cat2:'샌들',cat3:'샌들'})">샌들</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" v-on:click="$store.commit('chgData',{cat1:'kids',cat2:'샌들',cat3:'슬리퍼'})">슬리퍼</a>
                                                    </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="sub_tab3-nav">구두</div>
                                                <div class="sub_tab3-cont">
                                                    <ul>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'kids',cat2:'구두',cat3:'전체'})">전체</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'kids',cat2:'구두',cat3:'플랫'})">플랫</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" v-on:click="$store.commit('chgData',{cat1:'kids',cat2:'구두',cat3:'부츠'})">부츠</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            <!--
                <div class="menu-right">
                    <ul>
                        <li>
                            <a href="#">기획전</a>
                        </li>
                        <li>
                            <a href="#">이벤트</a>
                        </li>
                        <li>
                            <a href="#">G-log</a>
                        </li>
                        <li>
                            <a href="#">HOT DEAL</a>
                        </li>
                    </ul>
                </div>
            -->
            </nav>
        </div>
        <div class="gnb_right">
            <ul class="btn-util">
            <!--
                <li>
                    <a href="#" class="btn-search">
                        <span class="ir">검색</span>
                    </a>
                </li>
            -->
                <li class="util-mypage">
                    <a href="#" class="btn-mypage">
                        <span class="ir">마이페이지</span>
                    </a>
                    <div class="tooltip util-list">
                        <ul>
                            <li>
                                <a href="login.html">로그인</a>
                            </li>
                            <li>
                                <a href="join.html">회원가입</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#" class="btn-cart">
                        <span class="badge">0</span>
                        <span class="ir">장바구니</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    `,
    // 하단구역
    info: `
    <div class="info">
        <div class="info_top">
            <div class="info_left info-cs">
                <span class="info-tit">통합고객센터</span>
                <span>1588-9667</span>
                <span>평일 09:00 ~ 18:00 (주말,공휴일 휴무)</span>
            </div>
            <div class="info_right info-notice">
                <span class="info-tit yellow">NOTICE</span>
                <div class="swiper noticeSlide notice-list">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide">
                            <a href="#">개인정보처리방침 개정 안내</a>
                        </li>
                        <li class="swiper-slide">
                            <a href="#">아디다스 소비자가 변동 안내</a>
                        </li>
                        <li class="swiper-slide">
                            <a href="#">반스 소비자가 변동 안내</a>
                        </li>
                    </ul>
                </div>
                <a href="#" class="notice-more">
                    <img src="./images/info_btn-plus.png" alt="공지사항 더보기" />
                </a>
            </div>
        </div>
        <div class="info_bottom">
            <div class="info_left info-company">
                <div class="info_logo">
                    <img src="./images/info_logo.png" alt="ABC마트" />
                </div>
                <address>
                    <p>
                        <span class="info-tit">(주)에이비씨마트 코리아</span>
                    </p>
                    <p>
                        <span>대표이사 : 이기호</span>
                        <span>주소 : 서울특별시 중구 을지로 100, B동 21층 (을지로 2가, 파인에비뉴)</span>
                    </p>
                    <p>
                        <span>사업자등록번호 : 201-81-76174</span>
                        <span>통신판매업신고 : 제 2015-서울중구-1036호</span>
                    </p>
                    <p>
                        <span>개인정보보호 책임자 : 박영수</span>
                        <span>이메일 : abcmartcs@abcmartkorea.com</span>
                    </p>
                </address>
            </div>
            <div class="info_right info-link">
                <div class="link-help">
                    <span class="info-tit">HELP</span>
                    <ul>
                        <li>
                            <a href="#">고객센터</a>
                        </li>
                        <li>
                            <a href="#">공지사항</a>
                        </li>
                        <li>
                            <a href="#">매장찾기</a>
                        </li>
                    </ul>
                </div>
                <div class="link-family">
                    <span class="info-tit">FAMILY SITE</span>
                    <ul>
                        <li>
                            <a href="#">ABC-MART</a>
                        </li>
                        <li>
                            <a href="#">A-RT</a>
                        </li>
                        <li>
                            <a href="#">On The Spot</a>
                        </li>
                    </ul>
                </div>
                <div class="link-social">
                    <span class="info-tit">SOCIAL</span>
                    <ul>
                        <li class="social-facebook">
                            <a href="#" target="_blank">
                                <span class="ir">페이스북</span>
                            </a>
                        </li>
                        <li class="social-blog">
                            <a href="#" target="_blank">
                                <span class="ir">네이버 블로그</span>
                            </a>
                        </li>
                        <li class="social-youtube">
                            <a href="#" target="_blank">
                                <span class="ir">유튜브</span>
                            </a>
                            <div class="tooltip social-list">
                                <ul>
                                    <li>
                                        <a href="#" target="_blank">ABC-MART</a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">A-RT TV</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="social-insta">
                            <a href="#" target="_blank">
                                <span class="ir">인스타</span>
                            </a>
                            <div class="tooltip social-list">
                                <ul>
                                    <li>
                                        <a href="#" target="_blank">ABC-MART</a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">GRAND STAGE</a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">ABC-KIDS MART</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `,
    // 사이드구역
    side: `
    <div class="side">
        <!--
        <button type="button" class="side_history">
            <span class="badge">8</span>
            <span class="ir">최근 쇼핑정보</span>
        </button>
        -->
        <div class="history-layer">
            <h3 class="layer-tit">최근 본 상품</h3>
            <div class="layer-cont">
                <div class="item-control">
                    <span>
                        <span class="item-count">8</span>
                        개의 상품정보
                    </span>
                    <button type="button">전체삭제</button>
                </div>
                <div class="item-list">
                    <ul>
                        <li>
                            <a href="#">
                                <div class="item-img">
                                    <img src="./images/tem/side1.jpg" alt="" />
                                </div>
                                <div class="item-info">
                                    <span class="item-brand">뉴발란스</span>
                                    <span class="item-name">BB480LWN</span>
                                    <span class="item-price">
                                        <span class="price-cost">45,000</span>
                                        <span class="price-unit">원</span>
                                    </span>
                                </div>
                            </a>
                            <div class="item-btn">
                                <button type="button" class="btn-wish-add">
                                    <span class="ir">즐겨찾기 추가</span>
                                </button>
                                <button type="button" class="btn-trash">
                                    <span class="ir">삭제하기</span>
                                </button>
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="item-img">
                                    <img src="./images/tem/side2.jpg" alt="" />
                                </div>
                                <div class="item-info">
                                    <span class="item-brand">나이키</span>
                                    <span class="item-name">우먼스 나이키 코트 레거시 뮬</span>
                                    <span class="item-price">
                                        <span class="price-cost">69,000</span>
                                        <span class="price-unit">원</span>
                                    </span>
                                </div>
                            </a>
                            <div class="item-btn">
                                <button type="button" class="btn-wish-add">
                                    <span class="ir">즐겨찾기 추가</span>
                                </button>
                                <button type="button" class="btn-trash">
                                    <span class="ir">삭제하기</span>
                                </button>
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <div class="item-img">
                                    <img src="./images/tem/side3.jpg" alt="" />
                                </div>
                                <div class="item-info">
                                    <span class="item-brand">크록스</span>
                                    <span class="item-name">우먼스 나이키 코트 레거시 뮬</span>
                                    <span class="item-price">
                                        <span class="price-cost">69,000</span>
                                        <span class="price-unit">원</span>
                                    </span>
                                </div>
                            </a>
                            <div class="item-btn">
                                <button type="button" class="btn-wish-add">
                                    <span class="ir">즐겨찾기 추가</span>
                                </button>
                                <button type="button" class="btn-trash">
                                    <span class="ir">삭제하기</span>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <button type="button" class="side_top">
            <span class="ir">맨위로</span>
        </button>
    </div>
    `,
};

export default comData;
