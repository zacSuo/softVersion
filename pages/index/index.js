const { concepts } = require('../conceptQuery/concepts.js');
const { softwareCompatibility } = require('../softwareCompatibilityQuery/softwareCompatibility.js');
const { piDigits } = require('./piDigits.js'); // 引入π的前80000位数字

Page({
  data: {
    conceptName: '',
    conceptInfo: null,
    softwareName: '',
    softwareVersion: '',
    compatibilityInfo: null,
    softwareList: [],
    fileContent: '',
    concepts, // 引入的概念数据
    softwareCompatibility, // 引入的软件兼容性数据
    selectedSoftware: null, // 用于存储选择的软件详情
    piDigitIndex: '', // 用于存储用户输入的π位数索引
    piDigitResult: '' // 用于存储查询到的π位数结果
  },
  onLoad: function () {
    this.loadSoftwareList();
  },
  searchConcept: function () {
    const conceptName = this.data.conceptName.trim();
    console.log('首页概念查询按钮已点击，查询的概念名称为:', conceptName);

    if (!conceptName) {
      wx.showToast({
        title: '请输入概念名称',
        icon: 'none'
      });
      return;
    }

    const regex = new RegExp(conceptName, 'i'); // 创建不区分大小写的正则表达式
    const conceptInfo = this.data.concepts.find(concept => regex.test(concept.name));

    if (conceptInfo) {
      console.log('首页概念查询成功，返回数据:', conceptInfo);
      wx.navigateTo({
        url: `/pages/conceptQuery/conceptQuery?name=${conceptInfo.name}`
      });
    } else {
      console.error('首页概念查询失败，未找到匹配的概念');
      wx.showToast({
        title: '未找到匹配的概念',
        icon: 'none'
      });
    }
  },
  loadSoftwareList: function () {
    const softwareList = this.data.softwareCompatibility.map(software => software.name);
    this.setData({
      softwareList: softwareList
    });
    console.log('软件列表加载成功:', softwareList);
  },
  onSoftwareNameChange: function (e) {
    const index = e.detail.value; // 获取选中的序号
    const softwareName = this.data.softwareList[index]; // 根据序号获取软件名称
    const selectedSoftware = this.data.softwareCompatibility.find(software => software.name === softwareName);
    this.setData({ 
      softwareName,
      selectedSoftware // 存储选择的软件详情
    });
    console.log('Software selected:', selectedSoftware);
  },
  onSoftwareVersionChange: function (e) {
    const softwareVersion = e.detail.value; // 获取输入框的值
    this.setData({ softwareVersion });
    console.log('Software version updated:', softwareVersion);
  },
  searchCompatibility: function () {
    const { softwareName, softwareVersion } = this.data;

    if (!softwareName || !softwareVersion) {
      wx.showToast({
        title: '请输入软件名称和版本',
        icon: 'none'
      });
      return;
    }

    wx.navigateTo({
      url: `/pages/softwareCompatibilityQuery/softwareCompatibilityQuery?name=${softwareName}&version=${softwareVersion}`
    });
  },
  onConceptNameChange: function (e) {
    const conceptName = e.detail.value; // 获取输入框的值
    this.setData({ conceptName });
    console.log('Concept name updated:', conceptName);
  },
  onPiDigitIndexChange: function (e) {
    const piDigitIndex = e.detail.value; // 获取输入框的值
    this.setData({ 
      piDigitIndex,
      piDigitResult: '' // 清空之前的查询结果
    });
    console.log('Pi digit index updated:', piDigitIndex);
  },
  searchPiDigit: function () {
    const piDigitIndex = parseInt(this.data.piDigitIndex, 10);

    if (isNaN(piDigitIndex) || piDigitIndex <= 0 || piDigitIndex > 7500 || piDigits.length < piDigitIndex) {
      wx.showToast({
        title: '请输入1到7400之间的数字',
        icon: 'none'
      });
      return;
    }

    const piDigitResult = piDigits[piDigitIndex - 1]; // 获取π的第n位数字
    this.setData({ piDigitResult });
    console.log('Pi digit result:', piDigitResult);
  }
});