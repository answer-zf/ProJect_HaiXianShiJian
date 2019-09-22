Vue.component("float-bot", {
  template:
    '<div class="bottom_float navbar-fixed-bottom">\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-4 text-center col-xs-12">\n' +
    "                <i></i>\n" +
    "                <h5>\n" +
    "                    &nbsp;加盟热线：400-9977-258\n" +
    "                </h5>\n" +
    '                <a href="contact_us.html" class="bottom_float_hidden pull-right">\n' +
    "                <h5>立即预约</h5>\n" +
    "                </a>\n" +
    '                <i class="pull-right"></i>\n' +
    "            </div>\n" +
    '            <div class="col-md-8 hidden-xs">\n' +
    '            <form class="form-inline" id="navbar-fixed-bottom-form">\n' +
    '            <div class="form-group col-lg-5 index_md-3 align-self-center">\n' +
    '                <label for="bottom_float_name" class="pr-2">\n' +
    "                    姓名&nbsp;:&nbsp;&nbsp;\n" +
    "                </label>\n" +
    '                <input type="text" class="form-control" id="bottom_float_name" placeholder="您的姓名" />\n' +
    "            </div>\n" +
    '            <div class="form-group col-lg-5 index_md-3 align-self-center">\n' +
    '                <label for="bottom_float_phone" class="pr-2">手机&nbsp;:&nbsp;&nbsp;</label>\n' +
    '                <input type="text" class="form-control" id="bottom_float_phone" placeholder="您的手机号" />\n' +
    "            </div>\n" +
    '            <div class="col-lg-2 index_md-6 align-self-center">\n' +
    '                <button type="button" onclick="submitPhone()" class="btn btn-primary" >\n' +
    "                    在线预约\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    </div>"
});
Vue.component("footer-copy", {
  template:
    "<footer>\n" +
    '  <div class="footerContent">\n' +
    '    <div class="container">\n' +
    '      <div class="row">\n' +
    '        <div class="col-md-3">\n' +
    '          <a href="index.html" target="_blank"></a>\n' +
    "        </div>\n" +
    '        <div class="col-md-9">\n' +
    "          <dl>\n" +
    '            <dt><a href="origin.html">品牌实力</a></dt>\n' +
    '            <dd><a href="origin.html#companyStrength">公司实力</a></dd>\n' +
    '            <dd><a href="origin.html#originQuest">品牌探秘</a></dd>\n' +
    "          </dl>\n" +
    "          <dl>\n" +
    '            <dt><a href="market.html">鲜潮市场</a></dt>\n' +
    '            <dd><a href="market.html#marketProspect">市场前景</a></dd>\n' +
    '            <dd><a href="market.html#businessAdvantage">经营优势</a></dd>\n' +
    "          </dl>\n" +
    "          <dl>\n" +
    '            <dt><a href="product.html">产品展示</a></dt>\n' +
    '            <dd><a href="product.html#productAdvantage">产品优势</a></dd>\n' +
    '            <dd><a href="product.html#featuresProducts">特色产品</a></dd>\n' +
    '            <dd><a href="product.html#productExample">产品示例</a></dd>\n' +
    "          </dl>\n" +
    "          <dl>\n" +
    '            <dt><a href="service.html#investmentProfit">投资盈利</a></dt>\n' +
    '            <dd><a href="service.html#investmentProfitTop">门店热潮</a></dd>\n' +
    '            <dd><a href="service.html#investmentProfitCon">投资店型</a></dd>\n' +
    '            <dd><a href="service.html#investmentProfitBot">区域政策</a></dd>\n' +
    "          </dl>\n" +
    "          <dl>\n" +
    '            <dt><a href="service.html#cooperativeGuarantee">合作保障</a></dt>\n' +
    '            <dd><a href="service.html#cooperativeGuaranteeTop">合作流程</a></dd>\n' +
    '            <dd><a href="service.html#cooperativeGuaranteeCon">八大支持</a></dd>\n' +
    '            <dd><a href="service.html#cooperativeGuaranteeBot">服务保障</a></dd>\n' +
    "          </dl>\n" +
    "          <dl>\n" +
    '            <dt><a href="contact.html">联系我们</a></dt>\n' +
    '            <dd><a href="contact.html#investigate">欢迎考察</a></dd>\n' +
    '            <dd><a href="contact.html#communicate">预约加盟</a></dd>\n' +
    "          </dl>\n" +
    "        </div>\n" +
    "      </div>\n" +
    '      <div class="row">\n' +
    '        <div class="col-md-12 text-center">\n' +
    "            <span>安徽尚京品牌管理股份有限公司版权所有&nbsp;&nbsp;&nbsp;&nbsp;皖ICP备18022821号-2<span><span>公司地址：安徽省合肥市滨湖新区金融港A2座16层</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</footer>"
});
new Vue({
  el: "#footer-zf"
});
