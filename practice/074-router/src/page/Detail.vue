<template>
 <div>
    <Nav/>
    <div class="header">
      <div class="container">
        <form class="search-bar">
          <input placeholder="现代领动" type="search" autofocus>
          <button type="submit">搜</button>
        </form>
      </div>
    </div>
    <div>
      <div style="padding-top: 5px;" class="row container bg-white">
        <div class="col-lg-6">
          <div class="slider">
            <img src="../assets/picture/2.jpg" alt="图谋了">
          </div>
          <div class="row thumbnail-list">
            <div class="col-lg-3">
              <img src="" alt="">
            </div>
            <div class="col-lg-3">
              <img src="" alt="">
            </div>
            <div class="col-lg-3">
              <img src="" alt="">
            </div>
            <div class="col-lg-3">
              <img src="">
            </div>
          </div>
        </div>
        <div class="col-lg-6 order-panel">
          <h1 class="title">大众-桑塔纳 2015款 1.7L 手动风尚版</h1>
          <div class="well">
            <div class="row">
              <div class="col-lg-3 prop">报价</div>
              <div class="col-lg-9">
                <span class="price currency">5.60万</span>
                <span class="price currency">含税9.5万</span>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 prop">服务费</div>
              <div class="col-lg-9">
                <span class="price currency">3000</span>
                <span class="help"></span>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 prop">服务项</div>
              <div class="col-lg-9">
                <span>整车质保</span>
                <span>14天可退</span>
                <span>249项车况检测</span>
              </div>
            </div>
          </div>
          <div class="short-props">
            <div class="dib">
              <div class="prop">上牌时间</div>
              <div class="value">2015年06月</div>
            </div>
            <div class="dib">
              <div class="prop">公里数</div>
              <div class="value">1.67万公里</div>
            </div>
            <div class="dib">
              <div class="prop">外迁查询</div>
              <div class="value">国五</div>
            </div>
            <div class="dib">
              <div class="prop">排量</div>
              <div class="value">1.6L</div>
            </div>
          </div>
          <div class="action">
            <a class="btn btn-primary">预约看车</a>
            <span class="tel">400-080-5027</span>
          </div>
        </div>
      </div>
    </div>
    <div class="vehicle-detail bg-white">
      <div class="container">
        <h2>车辆详情</h2>
        <div class="row">
          <div class="col-lg-6 dashed">
            <div class="sub-title">合作认证车辆介绍</div>
            <div class="detail">
              这辆车是2015年8月首次上牌，到现在已经行驶了1.86万公里。车子平时开得不多，在我的精心呵护下，无论驾驶质感还是内饰氛围都和新车相差无几。最满意的一点当然是油耗了，其次是空间，动力我也觉得够用。这是我买的新车，纯个人一手车。每天开车前都会认真检查一下车辆，开的也是四平八稳。我对车还是比较温柔的，用车频率不是很高，总里程很少，车况一直很好，和新车也没差什么，没有遇到过什么烦人的毛病，很省心，这对我来说就足够了。好车不容错过，赶紧联系我看车吧！
            </div>
          </div>
          <div class="col-lg-6">
            <div class="sub-title">车辆手续信息</div>
            <div class="col-lg-6">
              <table>
                <tbody>
                <tr>
                  <td>年检到期时间</td>
                  <td>2019-08</td>
                </tr>
                <tr>
                  <td>商业险到期时间</td>
                  <td>2019-08</td>
                </tr>
                <tr>
                  <td>有无购车发票</td>
                  <td>否</td>
                </tr>
                <tr>
                  <td>是否4S店保养</td>
                  <td>否</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="col-lg-6">
              <table>
                <tbody>
                <tr>
                  <td>交强险到期时间</td>
                  <td>2019-08</td>
                </tr>
                <tr>
                  <td>过户次数</td>
                  <td>0次</td>
                </tr>
                <tr>
                  <td>车辆购置税完税证明</td>
                  <td>无</td>
                </tr>
                <tr>
                  <td>有无改装</td>
                  <td>无</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="preview">
          <div class="title"></div>
          <div class="desc"></div>
          <div>
            <div class="col-lg-6">
              <div class="card">
                <img src="">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card">
                <img src="">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card">
                <img src="">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card">
                <img src="">
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";

export default {
  components: {
    Nav
  }
};
</script>

<style scoped>
h1 {
  font-size: 17px;
}

h2 {
  margin: 0;
  padding: 20px 0;
  text-align: center;
  font-weight: normal;
  border-bottom: 1px dashed #ddd;
}

.sub-title {
  padding: 10px 0;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 10px;
}

.search-bar {
  margin-top: 10px;
  margin-bottom: 10px;
}

.search-bar input {
  width: 30%;
  outline: 0;
}

.search-bar [type="submit"] {
  border-left: 0;
}

/*.order-panel {*/
/*font-size: .9rem;*/
/*}*/

.well {
  background: #ddd;
  padding: 10px;
}

.well .prop {
  font-size: 0.9rem;
  color: #666;
}

.well > .row {
  padding-top: 5px;
  padding-bottom: 5px;
}

.short-props > .dib {
  padding: 10px;
}

.short-props > .dib > * {
  margin-bottom: 5px;
}

.short-props .prop {
  font-size: 0.7rem;
  color: #888;
}

.action > * {
  margin-right: 10px;
}

.thumbnail-list {
  margin-top: 5px;
  margin-bottom: 10px;
}

.vehicle-detail {
  margin-top: 20px;
}

.vehicle-detail .container > .row {
  margin-bottom: 10px;
}

.dashed {
  margin-top: 10px;
  border-right: 1px dashed #ddd;
}
</style>